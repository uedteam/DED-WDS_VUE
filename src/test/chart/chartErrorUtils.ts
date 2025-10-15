/**
 * 圖表錯誤處理工具
 * 提供統一的錯誤處理、日誌記錄和用戶通知機制
 */

export interface ChartError extends Error {
  code?: string;
  context?: string;
  timestamp?: Date;
  metadata?: Record<string, any>;
}

export class ChartErrorHandler {
  private static instance: ChartErrorHandler;
  private errorLog: ChartError[] = [];
  private maxLogSize = 100;

  static getInstance(): ChartErrorHandler {
    if (!ChartErrorHandler.instance) {
      ChartErrorHandler.instance = new ChartErrorHandler();
    }
    return ChartErrorHandler.instance;
  }

  /**
   * 創建帶有額外資訊的圖表錯誤
   */
  createError(
    message: string,
    code?: string,
    context?: string,
    metadata?: Record<string, any>
  ): ChartError {
    const error = new Error(message) as ChartError;
    error.code = code;
    error.context = context;
    error.timestamp = new Date();
    error.metadata = metadata;
    return error;
  }

  /**
   * 記錄錯誤到內部日誌
   */
  logError(error: ChartError): void {
    console.error(`[Chart Error] ${error.context || 'Unknown'}:`, {
      message: error.message,
      code: error.code,
      timestamp: error.timestamp,
      metadata: error.metadata,
      stack: error.stack
    });

    this.errorLog.unshift(error);
    
    // 限制日誌大小
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog.splice(this.maxLogSize);
    }
  }

  /**
   * 處理圖表渲染錯誤
   */
  handleRenderError(
    error: Error,
    chartName: string,
    chartConfig?: any
  ): ChartError {
    const chartError = this.createError(
      `圖表 "${chartName}" 渲染失敗: ${error.message}`,
      'CHART_RENDER_ERROR',
      chartName,
      {
        originalError: error.message,
        chartConfig: chartConfig ? this.sanitizeConfig(chartConfig) : null
      }
    );

    this.logError(chartError);
    return chartError;
  }

  /**
   * 處理資料驗證錯誤
   */
  handleValidationError(
    message: string,
    chartName: string,
    invalidData?: any
  ): ChartError {
    const chartError = this.createError(
      message,
      'CHART_VALIDATION_ERROR',
      chartName,
      {
        invalidData: this.sanitizeData(invalidData)
      }
    );

    this.logError(chartError);
    return chartError;
  }

  /**
   * 處理資料載入錯誤
   */
  handleDataLoadError(
    error: Error,
    source: string
  ): ChartError {
    const chartError = this.createError(
      `資料載入失敗: ${error.message}`,
      'CHART_DATA_LOAD_ERROR',
      source,
      {
        originalError: error.message
      }
    );

    this.logError(chartError);
    return chartError;
  }

  /**
   * 取得錯誤日誌
   */
  getErrorLog(): ChartError[] {
    return [...this.errorLog];
  }

  /**
   * 清除錯誤日誌
   */
  clearErrorLog(): void {
    this.errorLog = [];
  }

  /**
   * 取得錯誤統計
   */
  getErrorStats(): Record<string, number> {
    const stats: Record<string, number> = {};
    
    this.errorLog.forEach(error => {
      const code = error.code || 'UNKNOWN';
      stats[code] = (stats[code] || 0) + 1;
    });

    return stats;
  }

  /**
   * 檢查是否有特定類型的錯誤
   */
  hasErrorType(errorCode: string): boolean {
    return this.errorLog.some(error => error.code === errorCode);
  }

  /**
   * 清理敏感的配置資訊
   */
  private sanitizeConfig(config: any): any {
    if (!config || typeof config !== 'object') return config;
    
    const sanitized = { ...config };
    
    // 移除可能包含敏感資訊的屬性
    delete sanitized.apiKey;
    delete sanitized.token;
    delete sanitized.password;
    
    return sanitized;
  }

  /**
   * 清理敏感的資料資訊
   */
  private sanitizeData(data: any): any {
    if (!data) return data;
    
    if (Array.isArray(data)) {
      return `Array(${data.length})`;
    }
    
    if (typeof data === 'object') {
      return Object.keys(data).reduce((acc, key) => {
        acc[key] = typeof data[key];
        return acc;
      }, {} as Record<string, string>);
    }
    
    return data;
  }
}

/**
 * 圖表錯誤重試機制
 */
export class ChartRetryManager {
  private retryAttempts: Map<string, number> = new Map();
  private maxRetries = 3;
  private retryDelay = 1000; // 1秒

  /**
   * 執行帶重試機制的操作
   */
  async executeWithRetry<T>(
    operation: () => Promise<T>,
    operationId: string,
    context?: string
  ): Promise<T> {
    const attempts = this.retryAttempts.get(operationId) || 0;
    
    try {
      const result = await operation();
      this.retryAttempts.delete(operationId); // 成功後清除重試記錄
      return result;
    } catch (error) {
      const errorHandler = ChartErrorHandler.getInstance();
      
      if (attempts < this.maxRetries) {
        this.retryAttempts.set(operationId, attempts + 1);
        
        console.warn(`操作 "${operationId}" 失敗，${this.retryDelay}ms 後進行第 ${attempts + 1} 次重試`, error);
        
        await this.delay(this.retryDelay);
        return this.executeWithRetry(operation, operationId, context);
      } else {
        this.retryAttempts.delete(operationId);
        const chartError = errorHandler.createError(
          `操作 "${operationId}" 在 ${this.maxRetries} 次重試後仍然失敗`,
          'CHART_RETRY_EXHAUSTED',
          context,
          { attempts: this.maxRetries, originalError: error }
        );
        throw chartError;
      }
    }
  }

  /**
   * 重設特定操作的重試次數
   */
  resetRetryCount(operationId: string): void {
    this.retryAttempts.delete(operationId);
  }

  /**
   * 延遲函數
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// 單例實例
export const chartErrorHandler = ChartErrorHandler.getInstance();
export const chartRetryManager = new ChartRetryManager();

// 便利的錯誤處理函數
export function handleChartError(
  error: Error,
  context: string,
  options?: {
    showToast?: boolean;
    logError?: boolean;
  }
): ChartError {
  const { showToast = true, logError = true } = options || {};
  
  const chartError = chartErrorHandler.createError(
    error.message,
    'CHART_ERROR',
    context,
    { originalError: error }
  );

  if (logError) {
    chartErrorHandler.logError(chartError);
  }

  // 這裡可以整合通知系統
  if (showToast && typeof window !== 'undefined') {
    console.error(`圖表錯誤 [${context}]: ${error.message}`);
  }

  return chartError;
}