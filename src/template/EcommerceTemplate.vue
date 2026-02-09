<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- 手機版漢堡選單按鈕（僅手機顯示） -->
    <div class="block md:hidden">
      <button
        class="fixed top-4 left-4 z-30 bg-white rounded-full shadow-lg p-2 border border-gray-200 focus:outline-none"
        aria-label="開啟選單"
        @click="showMobileNav = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Header -->
    <Navbar :dataSource="navbarData" :className="'flex-shrink-0'" />

    <div class="flex flex-1 overflow-hidden h-full min-h-full">
      <!-- Side Navigation -->
      <aside
        class="hidden lg:flex w-64 bg-white border-r flex-shrink-0 h-auto flex-col"
      >
        <SideNav
          :dataSource="sideNavItems"
          caption="商品分類"
          userName="Guest"
          userStatus="online"
          class="flex-1 h-full min-h-0"
        />
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-4 overflow-auto h-full">
        <!-- 手機版搜尋欄（Tabs 上方）-->
        <div class="w-full mb-4 block md:hidden">
          <div class="bg-white rounded-2xl shadow-lg px-6 py-4 w-full">
            <Search v-model="search" placeholder="搜尋商品..." class="w-full" />
          </div>
        </div>
        <!-- Tabs + 桌機版搜尋欄同一列 -->
        <div class="w-full mb-8">
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div class="flex-1">
              <Tabs
                :dataSource="tabsDataSource"
                v-model:activeIndex="activeTabIndex"
                className="custom-tabs w-full"
              />
            </div>
            <!-- 桌機版搜尋欄（Tabs 右側）-->
            <div class="mt-4 md:mt-0 md:w-1/3 hidden md:block">
              <div class="bg-white rounded-2xl shadow-lg px-6 py-4 w-full">
                <Search
                  v-model="search"
                  placeholder="搜尋商品..."
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="flex-1 min-h-full">
          <template v-if="pagedProducts.length === 0">
            <div
              class="flex flex-col items-center justify-center h-full min-h-[320px] text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 17v-2a4 4 0 018 0v2M5 11V9a7 7 0 0114 0v2a2 2 0 01-2 2H7a2 2 0 01-2-2z"
                />
              </svg>
              <div class="text-lg">無任何符合的產品</div>
            </div>
          </template>
          <template v-else>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
            >
              <Card
                v-for="product in pagedProducts"
                :key="product.id"
                class="relative flex flex-col min-h-[420px] w-full md:w-[420px] max-w-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 group overflow-hidden border border-gray-100 hover:-translate-y-1"
              >
                <div class="relative">
                  <Image
                    :src="product.image"
                    :alt="product.name"
                    :className="'w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300'"
                    ratio="4:3"
                    objectFit="cover"
                  />
                  <!-- 新品/熱銷標籤：左上角，橫向排列 -->
                  <div
                    v-if="product.isNew || product.isHot"
                    class="absolute top-2 left-2 flex flex-row gap-2 z-20"
                  >
                    <Badge
                      v-if="product.isNew"
                      color="green"
                      class="badge-strong shadow"
                      >新品</Badge
                    >
                    <Badge
                      v-if="product.isHot"
                      color="red"
                      class="badge-strong shadow"
                      >熱銷</Badge
                    >
                  </div>
                </div>
                <div class="flex-1 flex flex-col p-5">
                  <h3
                    class="font-semibold text-lg mb-2 truncate group-hover:text-primary transition-colors duration-200"
                  >
                    {{ product.name }}
                  </h3>
                  <p class="text-gray-500 flex-1 mb-2 line-clamp-2">
                    {{ product.desc }}
                  </p>
                  <div class="flex items-center justify-between mt-auto">
                    <div class="flex flex-col items-start flex-1 pb-8">
                      <template v-if="product.isSale">
                        <span class="text-sm text-gray-400 line-through mb-1"
                          >${{ getOriginPrice(product) }}</span
                        >
                        <span
                          class="text-2xl font-bold text-orange-500 drop-shadow-sm"
                          >${{ product.price }}</span
                        >
                      </template>
                      <template v-else>
                        <span
                          class="text-2xl font-bold text-pink-600 drop-shadow-sm"
                          >${{ product.price }}</span
                        >
                      </template>
                    </div>
                    <button
                      @click="addToCart(product)"
                      class="absolute bottom-4 right-4 z-10 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200 focus:outline-none"
                      aria-label="加入購物車"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 text-gray-800"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </template>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <Pagination
            :totalItems="filteredProducts.length"
            :currentPage="page"
            :defaultItemsPerPage="pageSize"
            :itemsPerPageOptions="[8, 16, 32]"
            :isShowPageInfo="true"
            @onPageChange="(val) => (page = val)"
          />
        </div>
      </main>
    </div>
    <!-- 加入購物車 Dialog -->
    <Dialog v-model="showDialog" className="max-w-xs w-full">
      <template #header>
        <div class="text-lg font-semibold text-center py-2">加入購物車</div>
      </template>
      <template #content>
        <div class="text-base text-center py-6">{{ dialogMessage }}</div>
      </template>
      <template #footer>
        <div class="m-auto">
          <Button
            variant="outlined"
            theme-color="primary"
            size="medium"
            @click="showDialog = false"
          >
            確認
          </Button>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Button from '../../libs/src/ui/element/Button/Button.vue';
// 手機漢堡選單狀態
const showMobileNav = ref(false);
import { ref, computed } from 'vue';
import Navbar from '../../libs/src/ui/element/Navbar/Navbar.vue';
import SideNav from '../../libs/src/ui/element/SideNav/SideNav.vue';
import Search from '../../libs/src/ui/element/Search/Search.vue';
import Tabs from '../../libs/src/ui/element/Tabs/Tabs.vue';
import Card from '../../libs/src/ui/element/Card/Card.vue';
import Image from '../../libs/src/ui/element/Image/Image.vue';
import Badge from '../../libs/src/ui/element/Badge/Badge.vue';
import Pagination from '../../libs/src/ui/element/Pagination/Pagination.vue';
import Dialog from '../../libs/src/ui/element/Dialog/Dialog.vue';
// Navbar 假資料
const navbarData = [];

// 側邊選單資料
const sideNavItems = [
  { label: '全部商品', icon: 'shopping-bag', to: '/' },
  { label: '男裝', icon: 'user', to: '/men' },
  { label: '女裝', icon: 'user-female', to: '/women' },
  { label: '配件', icon: 'gift', to: '/accessories' },
  { label: '特價', icon: 'tag', to: '/sale' },
];

// Tabs 分類
const tabsDataSource = [
  { title: '全部', content: '' },
  { title: '新品', content: '' },
  { title: '熱銷', content: '' },
  { title: '特價', content: '' },
];
const activeTabIndex = ref(0);
const search = ref('');
const page = ref(1);
const pageSize = 8;

// 假資料
const products = ref([
  {
    id: 1,
    name: '經典白T',
    desc: '舒適百搭的純棉白T恤，適合各種場合穿搭。',
    price: 399,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    isNew: true,
    isHot: false,
    isSale: false,
  },
  {
    id: 2,
    name: '時尚牛仔褲',
    desc: '修身剪裁，展現自信身形，經典不敗款。',
    price: 899,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isHot: true,
    isSale: false,
  },
  {
    id: 3,
    name: '輕盈運動鞋',
    desc: '輕量設計，舒適好走，適合日常與運動穿搭。',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isHot: true,
    isSale: true,
  },
  {
    id: 4,
    name: '質感皮帶',
    desc: '真皮製作，細緻工藝，提升整體造型質感。',
    price: 499,
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    isNew: true,
    isHot: false,
    isSale: false,
  },
  {
    id: 5,
    name: '運動短褲',
    desc: '透氣快乾，運動休閒皆宜。',
    price: 299,
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isHot: false,
    isSale: true,
  },
  {
    id: 6,
    name: '時尚墨鏡',
    desc: 'UV400防護，造型百搭。',
    price: 599,
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    isNew: true,
    isHot: true,
    isSale: false,
  },
  {
    id: 7,
    name: '帆布托特包',
    desc: '大容量，輕便實用，適合日常出行。',
    price: 699,
    image:
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isHot: false,
    isSale: false,
  },
  {
    id: 8,
    name: '經典棒球帽',
    desc: '簡約設計，遮陽又有型。',
    price: 199,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isHot: true,
    isSale: false,
  },
  {
    id: 9,
    name: '針織圍巾',
    desc: '柔軟保暖，冬季必備單品。',
    price: 399,
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    isNew: true,
    isHot: false,
    isSale: true,
  },
  {
    id: 10,
    name: '皮革長夾',
    desc: '多卡位設計，收納方便。',
    price: 899,
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isHot: false,
    isSale: false,
  },
  {
    id: 11,
    name: '經典牛津鞋',
    desc: '正式與休閒皆適合的百搭鞋款。',
    price: 1599,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isHot: true,
    isSale: false,
  },
  {
    id: 12,
    name: '輕量後背包',
    desc: '適合通勤與旅行，輕巧大容量。',
    price: 1099,
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    isNew: true,
    isHot: false,
    isSale: false,
  },
]);

// 商品篩選
const filteredProducts = computed(() => {
  let result = products.value;
  const tab = activeTabIndex.value;
  if (tab === 1) result = result.filter((p) => p.isNew);
  else if (tab === 2) result = result.filter((p) => p.isHot);
  else if (tab === 3) result = result.filter((p) => p.isSale);
  if (search.value) {
    const keyword = search.value.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(keyword) ||
        p.desc.toLowerCase().includes(keyword),
    );
  }
  return result;
});

const pagedProducts = computed(() => {
  const start = (page.value - 1) * pageSize;
  return filteredProducts.value.slice(start, start + pageSize);
});

// Dialog 狀態與訊息
const showDialog = ref(false);
const dialogMessage = ref('');

function addToCart(product: any) {
  // TODO: 實作加入購物車邏輯
  dialogMessage.value = `已將「${product.name}」加入購物車！`;
  showDialog.value = true;
}

// 取得原價（假設原價比特價高 20%，可依實際資料調整）
function getOriginPrice(product: any) {
  // 若有 originPrice 欄位則用，否則用現價 * 1.2 四捨五入
  if (product.originPrice) return product.originPrice;
  return Math.round(product.price * 1.2);
}
</script>

<style scoped>
/* 強化新品與熱銷標籤 */
.badge-strong {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0.18rem 0.7rem;
  border-radius: 9999px;
  box-shadow: 0 2px 8px 0 #0002;
  border: 1.5px solid #fff;
  text-shadow: none;
  z-index: 20;
  color: #fff !important;
  opacity: 0.97;
  background: #22c55e; /* 預設綠色 */
}
.badge-strong[color='red'] {
  background: #ef4444;
}
.badge-strong[color='green'] {
  background: #22c55e;
}
.badge-strong[color='yellow'] {
  background: #f59e42;
}
/* 美化 Tabs 區塊 */
.custom-tabs .ded-tabs {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  box-shadow: 0 2px 8px 0 #e5e7eb44;
}
.custom-tabs .ded-tabs .ded-tab-item {
  margin: 0 0.25rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition:
    background 0.2s,
    color 0.2s;
}
.custom-tabs .ded-tabs .ded-tab-item.is-active {
  background: linear-gradient(90deg, #f472b6 0%, #6366f1 100%);
  color: #fff;
  box-shadow: 0 2px 8px 0 #f472b655;
}
.custom-tabs .ded-tabs .ded-tab-item:not(.is-active):hover {
  background: #f3f4f6;
  color: #6366f1;
}

/* 防止跑版，確保圖片與卡片一致 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
