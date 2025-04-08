import { m as inject, g as computed, M as resolveComponent, c as createElementBlock, o as openBlock, j as createBlock, d as createCommentVNode, x as withDirectives, e as withCtx, b as createVNode, t as toDisplayString, k as normalizeStyle, l as resolveDynamicComponent, I as withModifiers, N as vShow, a as createBaseVNode, F as Fragment, q as renderList, n as normalizeClass, v as ref } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$2 } from "./Icon-B6pI5HKs.js";
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
const routerKey = Symbol("");
function useRouter() {
  return inject(routerKey);
}
const _hoisted_1$1 = {
  key: 0,
  class: "ded-nav-item-icon"
};
const _hoisted_2 = {
  key: 1,
  class: "ded-nav-item-label"
};
const _sfc_main$1 = {
  __name: "MenuItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    isCollapsed: {
      type: Boolean,
      default: false
    },
    hasDivider: {
      type: Boolean,
      default: false
    },
    useRouter: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#000000"
    },
    expandedItems: {
      type: Object,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["itemClick", "toggleExpand"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function getComponentType(item) {
      return props.useRouter && item.path ? "router-link" : "a";
    }
    function onItemClick(event) {
      emit("itemClick", { item: props.item, event });
    }
    function toggleExpand(item) {
      emit("toggleExpand", item);
    }
    const isExpanded = computed(() => props.expandedItems[props.item.path]);
    const arrowStyle = computed(() => ({
      color: props.color,
      verticalAlign: "middle",
      transition: "transform 0.3s",
      transform: isExpanded.value ? "rotate(180deg)" : "rotate(0deg)"
    }));
    return (_ctx, _cache) => {
      const _component_MenuItem = resolveComponent("MenuItem", true);
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(["ded-nav-item", {
          "ded-nav-item-side": props.hasDivider,
          "ded-nav-item-disabled": props.isDisabled
        }])
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(getComponentType(props.item)), {
          to: props.useRouter ? props.item.path : void 0,
          href: !props.useRouter ? props.item.path : void 0,
          class: "ded-nav-item-link",
          style: normalizeStyle({ color: props.isDisabled ? "" : props.color }),
          onClick: onItemClick
        }, {
          default: withCtx(() => [
            props.item.prefix ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
              createVNode(_sfc_main$2, {
                name: props.item.prefix
              }, null, 8, ["name"])
            ])) : createCommentVNode("", true),
            !props.isCollapsed ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(props.item.label), 1)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["to", "href", "style"])),
        !props.isCollapsed && props.item.children ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "ded-nav-item-arrow",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => toggleExpand(props.item), ["stop"]))
        }, [
          createVNode(_sfc_main$2, {
            size: "24",
            name: "SvgArrowDown",
            style: normalizeStyle(arrowStyle.value)
          }, null, 8, ["style"])
        ])) : createCommentVNode("", true),
        withDirectives(createBaseVNode("ul", {
          class: normalizeClass(["ded-nav-subitem", { expanded: isExpanded.value }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.item.children, (child) => {
            return openBlock(), createBlock(_component_MenuItem, {
              key: child.path,
              item: child,
              "is-collapsed": props.isCollapsed,
              "use-router": props.useRouter,
              color: props.color,
              "expanded-items": props.expandedItems,
              "is-disabled": child.isDisabled === true,
              onItemClick: _cache[1] || (_cache[1] = ($event) => emit("itemClick", $event)),
              onToggleExpand: _cache[2] || (_cache[2] = ($event) => emit("toggleExpand", $event))
            }, null, 8, ["item", "is-collapsed", "use-router", "color", "expanded-items", "is-disabled"]);
          }), 128))
        ], 2), [
          [
            vShow,
            !props.isCollapsed && props.item.children && isExpanded.value
          ]
        ])
      ], 2);
    };
  }
};
_sfc_main$1.__docgenInfo = { "exportName": "default", "displayName": "MenuItem", "description": "", "tags": {}, "props": [{ "name": "item", "type": { "name": "object" }, "required": true }, { "name": "isCollapsed", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "hasDivider", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "useRouter", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "color", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"#000000"' } }, { "name": "expandedItems", "type": { "name": "object" }, "required": true }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }], "events": [{ "name": "itemClick" }, { "name": "toggleExpand" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Menu/MenuItem.vue"] };
const _hoisted_1 = { class: "ded-nav-list" };
const _sfc_main = {
  __name: "Menu",
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    isCollapsed: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#000000"
    },
    hasDivider: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    },
    useRouter: {
      type: Boolean,
      default: false
    }
  },
  emits: ["navItemClick", "expandedNav"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const sortDataSource = computed(
      () => [...props.dataSource].sort((a, b) => (a.order || 0) - (b.order || 0))
    );
    const expandedItems = ref({});
    const computedWidth = computed(() => props.isCollapsed ? "auto" : "100%");
    const router = props.useRouter ? useRouter() : null;
    function handleItemClick({ item }) {
      emit("navItemClick", item);
      emit("expandedNav");
      if (Array.isArray(item.children) && item.children.length > 0) {
        handleToggleExpand(item);
      }
      if (item.path) {
        if (props.useRouter && router) {
          router.push(item.path);
        } else {
          window.location.href = item.path;
        }
      }
    }
    function handleToggleExpand(item) {
      expandedItems.value[item.path] = !expandedItems.value[item.path];
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-nav-container", { [props.className]: !!props.className }])
      }, [
        createBaseVNode("nav", {
          class: "ded-nav",
          style: normalizeStyle({ width: computedWidth.value })
        }, [
          createBaseVNode("ul", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(sortDataSource.value, (item) => {
              return openBlock(), createBlock(_sfc_main$1, {
                key: item.path,
                item,
                "is-collapsed": props.isCollapsed,
                "use-router": props.useRouter,
                color: props.color,
                "has-divider": props.hasDivider,
                "expanded-items": expandedItems.value,
                "is-disabled": item.isDisabled,
                onItemClick: handleItemClick,
                onToggleExpand: handleToggleExpand
              }, null, 8, ["item", "is-collapsed", "use-router", "color", "has-divider", "expanded-items", "is-disabled"]);
            }), 128))
          ])
        ], 4)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Menu", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "isCollapsed", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "color", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"#000000"' } }, { "name": "hasDivider", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "useRouter", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }], "events": [{ "name": "navItemClick" }, { "name": "expandedNav" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Menu/Menu.vue"] };
export {
  _sfc_main as _
};
