import { g as computed, c as createElementBlock, r as renderSlot, k as normalizeStyle, n as normalizeClass, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const prefix = "ded-";
const _sfc_main$2 = {
  __name: "Column",
  props: {
    col: {
      type: Number
    },
    xs: {
      type: Number
    },
    sm: {
      type: Number
    },
    md: {
      type: Number
    },
    lg: {
      type: Number
    },
    xl: {
      type: Number
    },
    align: {
      type: String,
      default: "start",
      validator: (value) => ["start", "center", "end"].includes(value)
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    function isValidCol(value) {
      if (value) {
        return value || Number.parseInt(value) > 0 && Number.parseInt(value) < 13;
      } else {
        return false;
      }
    }
    const dynamicClasses = computed(() => {
      return {
        // col
        [`${prefix}col`]: !isValidCol(props.col) && !props.xs && !props.sm && !props.md && !props.lg && !props.xl,
        // [`${prefix}col-${props.col}`]:isValidCol(props.col),
        [`${prefix}col-xs-${props.xs}`]: isValidCol(props.xs),
        [`${prefix}col-sm-${props.sm}`]: isValidCol(props.sm),
        [`${prefix}col-md-${props.md}`]: isValidCol(props.md),
        [`${prefix}col-lg-${props.lg}`]: isValidCol(props.lg),
        [`${prefix}col-xl-${props.xl}`]: isValidCol(props.xl),
        // 自定義 class
        [props.className]: !!props.className
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(dynamicClasses.value),
        style: normalizeStyle({ "text-align": props.align })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
};
_sfc_main$2.__docgenInfo = { "exportName": "default", "displayName": "Column", "description": "", "tags": {}, "props": [{ "name": "col", "type": { "name": "number" } }, { "name": "xs", "type": { "name": "number" } }, { "name": "sm", "type": { "name": "number" } }, { "name": "md", "type": { "name": "number" } }, { "name": "lg", "type": { "name": "number" } }, { "name": "xl", "type": { "name": "number" } }, { "name": "align", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"start"' }, "values": ["start", "center", "end"] }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Grid/Column.vue"] };
const _sfc_main$1 = {
  __name: "Grid",
  props: {
    fluid: {
      type: Boolean,
      required: false,
      default: false
    },
    gap: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const containerClass = computed(() => {
      const prefix2 = "ded-";
      const fluid = props.fluid;
      return {
        [fluid ? `${prefix2}container-fluid` : `${prefix2}container`]: true,
        [`ded-gap-${props.gap}`]: props.gap,
        [props.className]: !!props.className
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(containerClass.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
_sfc_main$1.__docgenInfo = { "exportName": "default", "displayName": "Grid", "description": "", "tags": {}, "props": [{ "name": "fluid", "type": { "name": "boolean" }, "required": false, "defaultValue": { "func": false, "value": "false" } }, { "name": "gap", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Grid/Grid.vue"] };
const _sfc_main = {
  __name: "Row",
  props: {
    justify: {
      type: String,
      required: false,
      default: null,
      validator: (value) => ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"].includes(value)
    },
    alignItems: {
      type: String,
      required: false,
      default: null,
      validator: (value) => ["flex-start", "center", "flex-end", "baseline", "stretch"].includes(value)
    },
    hasGap: {
      type: Boolean,
      default: false
    },
    rowGap: {
      type: String,
      default: "16px"
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-row", props.hasGap ? "" : "ded-gap-0"]),
        style: normalizeStyle({
          justifyContent: props.justify,
          alignItems: props.alignItems,
          rowGap: props.rowGap
        })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Row", "description": "", "tags": {}, "props": [{ "name": "justify", "type": { "name": "string" }, "required": false, "defaultValue": { "func": false, "value": "null" }, "values": ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"] }, { "name": "alignItems", "type": { "name": "string" }, "required": false, "defaultValue": { "func": false, "value": "null" }, "values": ["flex-start", "center", "flex-end", "baseline", "stretch"] }, { "name": "hasGap", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "rowGap", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"16px"' } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Grid/Row.vue"] };
export {
  _sfc_main$2 as _,
  _sfc_main as a,
  _sfc_main$1 as b
};
