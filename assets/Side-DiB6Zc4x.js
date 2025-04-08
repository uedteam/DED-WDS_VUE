import { c as createElementBlock, r as renderSlot, n as normalizeClass, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _sfc_main$4 = {
  __name: "Content",
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", {
        class: normalizeClass(["ded-content", { [props.className]: !!props.className }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
_sfc_main$4.__docgenInfo = { "exportName": "default", "displayName": "Content", "description": "", "tags": {}, "props": [{ "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/Content.vue"] };
const _sfc_main$3 = {
  __name: "Footer",
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", {
        class: normalizeClass(["ded-footer", { [props.className]: !!props.className }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
_sfc_main$3.__docgenInfo = { "exportName": "default", "displayName": "Footer", "description": "", "tags": {}, "props": [{ "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/Footer.vue"] };
const _sfc_main$2 = {
  __name: "Header",
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["ded-header", { [props.className]: !!props.className }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
_sfc_main$2.__docgenInfo = { "exportName": "default", "displayName": "Header", "description": "", "tags": {}, "props": [{ "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/Header.vue"] };
const _sfc_main$1 = {
  __name: "index",
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-layout", { [props.className]: !!props.className }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
_sfc_main$1.__docgenInfo = { "exportName": "default", "displayName": "Layout", "description": "", "tags": {}, "props": [{ "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/index.vue"] };
const _sfc_main = {
  __name: "Side",
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass(["ded-side", { [props.className]: !!props.className }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Side", "description": "", "tags": {}, "props": [{ "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/Side.vue"] };
export {
  _sfc_main$3 as _,
  _sfc_main as a,
  _sfc_main$4 as b,
  _sfc_main$2 as c,
  _sfc_main$1 as d
};
