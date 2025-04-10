var _a, _b, _c;
import { g as computed, v as ref, A as onMounted, E as onBeforeUnmount, c as createElementBlock, d as createCommentVNode, F as Fragment, q as renderList, a as createBaseVNode, j as createBlock, n as normalizeClass, t as toDisplayString, k as normalizeStyle, b as createVNode, e as withCtx, T as Teleport, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$2 } from "./Avatar-Bup2bs56.js";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./List-C992H4xg.js";
import "./Icon-B6pI5HKs.js";
import "./Image-BJOsgKZf.js";
const _hoisted_1 = { class: "ded-avatar-overlay" };
const _hoisted_2 = { class: "ded-avatar-text" };
const _sfc_main = {
  __name: "AvatarGroup",
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: "large",
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    limit: {
      type: Number,
      default: 1
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const restCount = computed(() => {
      const result = props.dataSource.length - props.limit;
      return result >= 99 ? 99 : result;
    });
    function splitArrayAt(arr, splitCount) {
      const currList2 = arr.slice(0, splitCount);
      const restList2 = arr.slice(splitCount);
      return { currList: currList2, restList: restList2 };
    }
    const currList = computed(() => splitArrayAt(props.dataSource, props.limit).currList);
    const restList = computed(() => splitArrayAt(props.dataSource, props.limit).restList);
    const isOpen = ref(false);
    const restContainerRef = ref(null);
    const menuStyles = ref({ top: "0px", left: "0px" });
    function updateMenuPosition() {
      var _a2;
      const rect = (_a2 = restContainerRef.value) == null ? void 0 : _a2.getBoundingClientRect();
      if (rect) {
        menuStyles.value = {
          top: `${rect.bottom + window.scrollY + 8}px`,
          left: `${rect.left + window.scrollX}px`
        };
      }
    }
    function handleClick() {
      isOpen.value = !isOpen.value;
      if (isOpen.value) {
        updateMenuPosition();
        window.addEventListener("resize", updateMenuPosition);
        window.addEventListener("scroll", updateMenuPosition, true);
        document.addEventListener("click", handleOutsideClick);
      } else {
        window.removeEventListener("resize", updateMenuPosition);
        window.removeEventListener("scroll", updateMenuPosition, true);
        document.removeEventListener("click", handleOutsideClick);
      }
    }
    function handleOutsideClick(event) {
      var _a2;
      if (restContainerRef.value && !restContainerRef.value.contains(event.target) && !((_a2 = document.querySelector(".ded-dropdown-menu")) == null ? void 0 : _a2.contains(event.target))) {
        isOpen.value = false;
        document.removeEventListener("click", handleOutsideClick);
      }
    }
    onMounted(() => {
      if (isOpen.value) {
        window.addEventListener("resize", updateMenuPosition);
        window.addEventListener("scroll", updateMenuPosition, true);
        document.addEventListener("click", handleOutsideClick);
      }
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
      document.removeEventListener("click", handleOutsideClick);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-avatar-group", { [props.className]: !!props.className }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(currList.value, (avatar, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "ded-avatar-overlay"
          }, [
            createVNode(_sfc_main$2, {
              shape: props.shape,
              size: props.size,
              src: avatar.src,
              "user-name": avatar.userName,
              caption: avatar.caption
            }, null, 8, ["shape", "size", "src", "user-name", "caption"])
          ]);
        }), 128)),
        restList.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_1, [
            restList.value.length > 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "restContainerRef",
              ref: restContainerRef,
              class: normalizeClass(["ded-avatar-container", [`ded-avatar-container-${props.size}`]])
            }, [
              createBaseVNode("button", {
                class: "ded-avatar ded-avatar-circle",
                style: { "cursor": "pointer" },
                onClick: handleClick
              }, [
                createBaseVNode("span", _hoisted_2, toDisplayString(`+${restCount.value}`), 1)
              ])
            ], 2)) : createCommentVNode("", true)
          ]),
          (openBlock(), createBlock(Teleport, { to: "body" }, [
            isOpen.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "ded-dropdown-menu",
              style: normalizeStyle({
                "position": "absolute",
                "top": menuStyles.value.top,
                "left": menuStyles.value.left,
                "z-index": 9999
              })
            }, [
              createVNode(_sfc_main$1, {
                "data-source": restList.value,
                "has-outline": true
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(restList.value, (menu) => {
                    return openBlock(), createBlock(_sfc_main$3, {
                      key: menu.userName,
                      label: menu.userName,
                      value: menu.userName,
                      href: menu.src,
                      prefix: menu.prefix
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2, {
                          shape: "circle",
                          size: "medium",
                          "user-name": menu.userName,
                          caption: menu.caption
                        }, null, 8, ["user-name", "caption"])
                      ]),
                      _: 2
                    }, 1032, ["label", "value", "href", "prefix"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["data-source"])
            ], 4)) : createCommentVNode("", true)
          ]))
        ], 64)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "AvatarGroup", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"large"' }, "values": ["small", "medium", "large"] }, { "name": "limit", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "1" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"] };
function formatDataSource(dataSource2) {
  return `${dataSource2.map((item) => `  {
      userName: "${item.userName}"${item.caption ? `,
      caption: "${item.caption}"` : ""}${item.src ? `,
      src: "${item.src}"` : ""}
  }`).join(",\n")}`;
}
const dataSource = [{
  userName: "eason",
  caption: "Eason"
}, {
  userName: "KevinYang",
  caption: "Kevin"
}, {
  userName: "AmosLee",
  caption: "Amos",
  src: "https://picsum.photos/320/240"
}, {
  userName: "JohnWu",
  caption: "John",
  src: "https://picsum.photos/320/340"
}, {
  userName: "Peter",
  caption: "Peter",
  src: "https://picsum.photos/320/340"
}];
const AvatarGroup_stories = {
  title: "Component/Avatar-Group",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    dataSource: {
      description: "資料來源",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ userName: string; caption: string; src: string; }[]"
        }
      }
    },
    size: {
      description: "尺寸",
      control: {
        type: "select"
      },
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: " small | medium | large"
        }
      }
    },
    limit: {
      description: "展開數量上限",
      control: {
        type: "number",
        min: 0,
        max: 5,
        step: 1
      }
    },
    className: {
      description: "客製化樣式",
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "AvatarGroup",
      description: {
        component: "AvatarGroup 組件的呈現及說明。"
      }
    }
  }
};
const MultiAvatarStory = {
  name: "預設項目",
  args: {
    dataSource,
    size: "large",
    limit: 2,
    className: ""
  },
  render: (args) => ({
    components: {
      AvatarGroup: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <AvatarGroup 
        :dataSource="args.dataSource"
        :size="args.size"
        :limit="args.limit"
        :className="args.className"
      ></AvatarGroup>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { AvatarGroup } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <AvatarGroup", `    :dataSource="dataSource"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.limit ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></AvatarGroup>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
MultiAvatarStory.parameters = {
  ...MultiAvatarStory.parameters,
  docs: {
    ...(_a = MultiAvatarStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource,\n    size: "large",\n    limit: 2,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      AvatarGroup\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <AvatarGroup \n        :dataSource="args.dataSource"\n        :size="args.size"\n        :limit="args.limit"\n        :className="args.className"\n      ></AvatarGroup>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude: [\'status\', \'src\', \'imageAlt\', \'username\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { AvatarGroup } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <AvatarGroup", `    :dataSource="dataSource"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.limit ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></AvatarGroup>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = MultiAvatarStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["MultiAvatarStory"];
export {
  MultiAvatarStory,
  __namedExportsOrder,
  AvatarGroup_stories as default
};
