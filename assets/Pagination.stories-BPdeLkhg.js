var _a, _b, _c, _d, _e, _f;
import { v as ref, g as computed, w as watch, c as createElementBlock, d as createCommentVNode, a as createBaseVNode, x as withDirectives, f as createTextVNode, t as toDisplayString, J as vModelSelect, F as Fragment, q as renderList, b as createVNode, e as withCtx, n as normalizeClass, o as openBlock, j as createBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$2 } from "./Icon-B6pI5HKs.js";
import { a as action } from "./index-6lyHBX71.js";
import "./v4-CjlX8hrF.js";
const _hoisted_1 = {
  key: 0,
  class: "ded-pagination-info"
};
const _hoisted_2 = { class: "ded-pagination-info-text" };
const _hoisted_3 = { class: "ded-pagination-info-highline" };
const _hoisted_4 = { class: "ded-pagination-info-highline" };
const _hoisted_5 = { class: "ded-pagination-info-highline" };
const _hoisted_6 = ["value"];
const _hoisted_7 = { class: "ded-pagination" };
const _hoisted_8 = { class: "ded-button-content" };
const _hoisted_9 = { class: "ded-pagination-number" };
const maxPageButtons = 10;
const _sfc_main = {
  __name: "Pagination",
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    itemsPerPageOptions: {
      type: Array,
      required: true
    },
    defaultItemsPerPage: {
      type: Number,
      default: 10
    },
    isShowPageInfo: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    }
  },
  emits: ["onPageChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currPage = ref(props.currentPage);
    const itemsPerPage = ref(
      props.isShowPageInfo ? props.itemsPerPageOptions[0] : props.defaultItemsPerPage
    );
    const totalPages = computed(
      () => Math.ceil(props.totalItems / itemsPerPage.value)
    );
    const startPage = computed(
      () => Math.max(1, currPage.value - Math.floor(maxPageButtons / 2))
    );
    const endPage = computed(
      () => Math.min(totalPages.value, startPage.value + maxPageButtons - 1)
    );
    const pageNumbers = computed(
      () => Array.from({ length: endPage.value - startPage.value + 1 }, (_, i) => startPage.value + i)
    );
    function handlePageChange(page) {
      if (page < 1 || page > totalPages.value)
        return;
      currPage.value = page;
      emit("onPageChange", page, itemsPerPage.value);
    }
    function handleItemsPerPageChange(e) {
      const newItemsPerPage = Number.parseInt(e.target.value, 10);
      itemsPerPage.value = newItemsPerPage;
      currPage.value = 1;
      emit("onPageChange", 1, newItemsPerPage);
    }
    watch(() => props.currentPage, (newVal) => {
      if (newVal > 0 && newVal <= totalPages.value) {
        currPage.value = newVal;
      }
    });
    watch(() => props.defaultItemsPerPage, (newVal) => {
      if (newVal > 0) {
        itemsPerPage.value = newVal;
      }
    });
    watch(() => props.isShowPageInfo, (newVal) => {
      if (newVal && props.itemsPerPageOptions.length > 0) {
        itemsPerPage.value = props.itemsPerPageOptions[0];
      }
    });
    watch(() => props.itemsPerPageOptions, (newVal) => {
      if (props.isShowPageInfo && newVal.length > 0) {
        itemsPerPage.value = newVal[0];
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`ded-pagination-container ${__props.className}`)
      }, [
        props.isShowPageInfo ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            _cache[5] || (_cache[5] = createTextVNode(" 共 ")),
            createBaseVNode("span", _hoisted_3, toDisplayString(props.totalItems), 1),
            _cache[6] || (_cache[6] = createTextVNode(" 筆資料，第 ")),
            createBaseVNode("span", _hoisted_4, toDisplayString(currPage.value), 1),
            _cache[7] || (_cache[7] = createTextVNode(" / ")),
            createBaseVNode("span", _hoisted_5, toDisplayString(totalPages.value), 1),
            _cache[8] || (_cache[8] = createTextVNode(" 頁 每頁顯示 "))
          ]),
          withDirectives(createBaseVNode("select", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => itemsPerPage.value = $event),
            class: "ded-pagination-select",
            onChange: handleItemsPerPageChange
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.itemsPerPageOptions, (option) => {
              return openBlock(), createElementBlock("option", {
                key: option,
                value: option
              }, toDisplayString(option), 9, _hoisted_6);
            }), 128))
          ], 544), [
            [vModelSelect, itemsPerPage.value]
          ]),
          _cache[9] || (_cache[9] = createBaseVNode("span", null, "筆", -1))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_7, [
          createVNode(_sfc_main$1, {
            variant: "ghost",
            "theme-color": "neutral",
            "is-disabled": currPage.value === 1,
            class: "ded-pagination-button",
            onClick: _cache[1] || (_cache[1] = () => handlePageChange(1))
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                name: "SvgFirstLastPage",
                size: "18",
                class: "ded-pagination-button-first"
              })
            ]),
            _: 1
          }, 8, ["is-disabled"]),
          createVNode(_sfc_main$1, {
            variant: "ghost",
            "theme-color": "neutral",
            "is-disabled": currPage.value === 1,
            class: "ded-pagination-button",
            onClick: _cache[2] || (_cache[2] = () => handlePageChange(currPage.value - 1))
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                name: "SvgNavigateArrow",
                size: "18",
                class: "ded-pagination-button-first"
              })
            ]),
            _: 1
          }, 8, ["is-disabled"]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(pageNumbers.value, (number) => {
            return openBlock(), createBlock(_sfc_main$1, {
              key: number,
              variant: "ghost",
              "theme-color": "neutral",
              class: normalizeClass(["ded-pagination-button", { "ded-pagination-active": currPage.value === number }]),
              onClick: () => handlePageChange(number)
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, toDisplayString(number), 1)
                ])
              ]),
              _: 2
            }, 1032, ["class", "onClick"]);
          }), 128)),
          createVNode(_sfc_main$1, {
            variant: "ghost",
            "theme-color": "neutral",
            "is-disabled": currPage.value === totalPages.value,
            class: "ded-pagination-button",
            onClick: _cache[3] || (_cache[3] = () => handlePageChange(currPage.value + 1))
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                name: "SvgNavigateArrow",
                size: "18"
              })
            ]),
            _: 1
          }, 8, ["is-disabled"]),
          createVNode(_sfc_main$1, {
            variant: "ghost",
            "theme-color": "neutral",
            "is-disabled": currPage.value === totalPages.value,
            class: "ded-pagination-button",
            onClick: _cache[4] || (_cache[4] = () => handlePageChange(totalPages.value))
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                name: "SvgFirstLastPage",
                size: "18"
              })
            ]),
            _: 1
          }, 8, ["is-disabled"])
        ])
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Pagination", "description": "", "tags": {}, "props": [{ "name": "totalItems", "type": { "name": "number" }, "required": true }, { "name": "currentPage", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "1" } }, { "name": "itemsPerPageOptions", "type": { "name": "array" }, "required": true }, { "name": "defaultItemsPerPage", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "10" } }, { "name": "isShowPageInfo", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "events": [{ "name": "onPageChange" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Pagination/Pagination.vue"] };
const Pagination_stories = {
  title: "Component/Pagination",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    totalItems: {
      description: "總筆數",
      control: {
        type: "number"
      }
    },
    currentPage: {
      description: "目前頁數",
      control: {
        type: "number"
      }
    },
    itemsPerPageOptions: {
      description: "每頁顯示筆數選項",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "number[]"
        }
      }
    },
    defaultItemsPerPage: {
      description: "預設每頁顯示筆數",
      control: {
        type: "number"
      }
    },
    isShowPageInfo: {
      description: "是否顯示頁數資訊",
      control: {
        type: "boolean"
      }
    },
    className: {
      description: "客製化樣式",
      control: {
        type: "text"
      }
    },
    onPageChange: {
      description: "頁碼變更事件",
      control: false,
      table: {
        category: "EVENTS",
        type: {
          summary: "emits"
        }
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Pagination",
      description: {
        component: "頁碼組件的呈現及說明。"
      }
    }
  }
};
const PaginationDefault = {
  name: "預設項目",
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPageOptions: [10, 20, 50],
    defaultItemsPerPage: 5,
    isShowPageInfo: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Pagination: _sfc_main
    },
    setup() {
      return {
        args,
        handlePageChange: action("onPageChange")
      };
    },
    template: `
    <Pagination
        :totalItems="args.totalItems"
        :currentPage="args.currentPage"
        :itemsPerPageOptions="args.itemsPerPageOptions"
        :defaultItemsPerPage="args.defaultItemsPerPage"
        :isShowPageInfo="args.isShowPageInfo"
        :className="args.className"
        @onPageChange="handlePageChange"
    >
    </Pagination>
`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['default' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Pagination } from "@ded-wds-vue/ui";`, `const handlePageChange = () => {};`, `<\/script>`, "", "<template>", `  <Pagination`, `    ${args.totalItems !== void 0 ? `:totalItems="${args.totalItems}"` : ""}`, `    ${args.currentPage !== void 0 ? `:currentPage="${args.currentPage}"` : ""}`, `    ${args.itemsPerPageOptions ? `:itemsPerPageOptions="[${args.itemsPerPageOptions}]"` : ""}`, `    ${args.defaultItemsPerPage !== void 0 ? `:defaultItemsPerPage="${args.defaultItemsPerPage}"` : ""}`, `    ${args.isShowPageInfo !== void 0 ? `:isShowPageInfo="${args.isShowPageInfo}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onPageChange="handlePageChange()"`, `  ></Pagination>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const PaginationDetail = {
  name: "顯示資訊",
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPageOptions: [10, 20, 50],
    defaultItemsPerPage: 10,
    isShowPageInfo: true,
    className: ""
  },
  render: (args) => ({
    components: {
      Pagination: _sfc_main
    },
    setup() {
      return {
        args,
        handlePageChange: action("onPageChange")
      };
    },
    template: `
      <Pagination
        :totalItems="args.totalItems"
        :currentPage="args.currentPage"
        :itemsPerPageOptions="args.itemsPerPageOptions"
        :defaultItemsPerPage="args.defaultItemsPerPage"
        :isShowPageInfo="args.isShowPageInfo"
        :className="args.className"
        @onPageChange="handlePageChange"
      >
      </Pagination>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["isShowPageInfo"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Pagination } from "@ded-wds-vue/ui";`, `const handlePageChange = () => {};`, `<\/script>`, "", "<template>", `  <Pagination`, `    ${args.totalItems !== void 0 ? `:totalItems="${args.totalItems}"` : ""}`, `    ${args.currentPage !== void 0 ? `:currentPage="${args.currentPage}"` : ""}`, `    ${args.itemsPerPageOptions ? `:itemsPerPageOptions="[${args.itemsPerPageOptions}]"` : ""}`, `    ${args.defaultItemsPerPage !== void 0 ? `:defaultItemsPerPage="${args.defaultItemsPerPage}"` : ""}`, `    :isShowPageInfo="true"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onPageChange="handlePageChange()"`, `  ></Pagination>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
PaginationDefault.parameters = {
  ...PaginationDefault.parameters,
  docs: {
    ...(_a = PaginationDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    totalItems: 100,\n    currentPage: 1,\n    itemsPerPageOptions: [10, 20, 50],\n    defaultItemsPerPage: 5,\n    isShowPageInfo: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Pagination\n    },\n    setup() {\n      return {\n        args,\n        handlePageChange: action("onPageChange")\n      };\n    },\n    template: `\n    <Pagination\n        :totalItems="args.totalItems"\n        :currentPage="args.currentPage"\n        :itemsPerPageOptions="args.itemsPerPageOptions"\n        :defaultItemsPerPage="args.defaultItemsPerPage"\n        :isShowPageInfo="args.isShowPageInfo"\n        :className="args.className"\n        @onPageChange="handlePageChange"\n    >\n    </Pagination>\n`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // exclude: [\'default\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Pagination } from "@ded-wds-vue/ui";`, `const handlePageChange = () => {};`, `<\/script>`, "", "<template>", `  <Pagination`, `    ${args.totalItems !== undefined ? `:totalItems="${args.totalItems}"` : ""}`, `    ${args.currentPage !== undefined ? `:currentPage="${args.currentPage}"` : ""}`, `    ${args.itemsPerPageOptions ? `:itemsPerPageOptions="[${args.itemsPerPageOptions}]"` : ""}`, `    ${args.defaultItemsPerPage !== undefined ? `:defaultItemsPerPage="${args.defaultItemsPerPage}"` : ""}`, `    ${args.isShowPageInfo !== undefined ? `:isShowPageInfo="${args.isShowPageInfo}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onPageChange="handlePageChange()"`, `  ></Pagination>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = PaginationDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
PaginationDetail.parameters = {
  ...PaginationDetail.parameters,
  docs: {
    ...(_d = PaginationDetail.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "顯示資訊",\n  args: {\n    totalItems: 100,\n    currentPage: 1,\n    itemsPerPageOptions: [10, 20, 50],\n    defaultItemsPerPage: 10,\n    isShowPageInfo: true,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Pagination\n    },\n    setup() {\n      return {\n        args,\n        handlePageChange: action("onPageChange")\n      };\n    },\n    template: `\n      <Pagination\n        :totalItems="args.totalItems"\n        :currentPage="args.currentPage"\n        :itemsPerPageOptions="args.itemsPerPageOptions"\n        :defaultItemsPerPage="args.defaultItemsPerPage"\n        :isShowPageInfo="args.isShowPageInfo"\n        :className="args.className"\n        @onPageChange="handlePageChange"\n      >\n      </Pagination>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["isShowPageInfo"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Pagination } from "@ded-wds-vue/ui";`, `const handlePageChange = () => {};`, `<\/script>`, "", "<template>", `  <Pagination`, `    ${args.totalItems !== undefined ? `:totalItems="${args.totalItems}"` : ""}`, `    ${args.currentPage !== undefined ? `:currentPage="${args.currentPage}"` : ""}`, `    ${args.itemsPerPageOptions ? `:itemsPerPageOptions="[${args.itemsPerPageOptions}]"` : ""}`, `    ${args.defaultItemsPerPage !== undefined ? `:defaultItemsPerPage="${args.defaultItemsPerPage}"` : ""}`, `    :isShowPageInfo="true"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onPageChange="handlePageChange()"`, `  ></Pagination>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = PaginationDetail.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["PaginationDefault", "PaginationDetail"];
export {
  PaginationDefault,
  PaginationDetail,
  __namedExportsOrder,
  Pagination_stories as default
};
