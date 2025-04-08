import { p as mergeModels, u as useModel, g as computed, c as createElementBlock, a as createBaseVNode, j as createBlock, d as createCommentVNode, e as withCtx, F as Fragment, q as renderList, z as createStaticVNode, b as createVNode, n as normalizeClass, o as openBlock, f as createTextVNode, t as toDisplayString } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$4 } from "./Avatar-Bup2bs56.js";
import { _ as _sfc_main$3 } from "./Badge-BEMwTXQE.js";
import { _ as _sfc_main$1 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$5 } from "./Icon-B6pI5HKs.js";
import { _ as _sfc_main$2 } from "./Input-CBUjHHWU.js";
const _hoisted_1 = { class: "navbar-menu" };
const _hoisted_2 = { class: "navbar-links" };
const _hoisted_3 = { class: "navbar-feature" };
const _hoisted_4 = {
  class: "navbar-form-search",
  action: ""
};
const _hoisted_5 = { class: "navbar-icons" };
const _hoisted_6 = { class: "navbar-icons-icon" };
const _hoisted_7 = { class: "navbar-icons-icon" };
const _sfc_main = {
  __name: "Navbar",
  props: /* @__PURE__ */ mergeModels({
    dataSource: {
      type: Array,
      required: true
    },
    hasLogo: {
      type: Boolean,
      default: true
    },
    logoSrc: {
      type: String,
      required: true,
      default: ""
    },
    logoLink: {
      type: String
    },
    avatarSrc: {
      type: String
    },
    className: {
      type: String,
      default: ""
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    const sortDataSource = computed(() => {
      return [...props.dataSource].sort((a, b) => a.order - b.order);
    });
    function handleLogoClick() {
      if (props.logoLink) {
        window.open(props.logoLink, "_self");
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(["navbar", { [props.className]: !!props.className }])
      }, [
        createBaseVNode("div", _hoisted_1, [
          props.hasLogo === true ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            "theme-color": "primary",
            variant: "text",
            onClick: handleLogoClick
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$5, {
                src: props.logoSrc,
                alt: "Logo",
                class: "navbar-logo"
              }, null, 8, ["src"])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createBaseVNode("ul", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(sortDataSource.value, (link) => {
              return openBlock(), createBlock(_sfc_main$1, {
                key: link.path,
                "theme-color": "primary",
                variant: "text",
                onClick: () => link.path && _ctx.window.open(link.path, "_blank")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(link.label), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("form", _hoisted_4, [
            createVNode(_sfc_main$2, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
              type: "text",
              placeholder: props.placeholder,
              prefix: "SvgSearch",
              size: props.size,
              "init-value": "",
              "is-disable": props.isDisable,
              "class-name": "ded-search-input"
            }, null, 8, ["modelValue", "placeholder", "size", "is-disable"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(_sfc_main$3, {
                "theme-color": "error",
                "is-show-dot": true,
                value: 100,
                limit: 99,
                "class-name": ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
                    name: "SvgNotification",
                    size: "26"
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_sfc_main$4, {
                shape: "circle",
                size: "small",
                status: "online",
                src: props.avatarSrc,
                "user-name": "Name",
                caption: "Caption"
              }, null, 8, ["src"])
            ])
          ]),
          _cache[1] || (_cache[1] = createStaticVNode('<button class="navbar-switch"><div class="navbar-switch-bar"></div><div class="navbar-switch-bar"></div><div class="navbar-switch-bar"></div><span class="navbar-switch-sr-only">切換選單</span></button>', 1))
        ])
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Navbar", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "hasLogo", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "true" } }, { "name": "logoSrc", "type": { "name": "string" }, "required": true, "defaultValue": { "func": false, "value": '""' } }, { "name": "logoLink", "type": { "name": "string" } }, { "name": "avatarSrc", "type": { "name": "string" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Navbar/Navbar.vue"] };
export {
  _sfc_main as _
};
