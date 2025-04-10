var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { _ as _sfc_main$1 } from "./Button-8IAwqsIt.js";
import { v as ref, g as computed, c as createElementBlock, a as createBaseVNode, d as createCommentVNode, n as normalizeClass, F as Fragment, q as renderList, o as openBlock, k as normalizeStyle, t as toDisplayString, r as renderSlot, f as createTextVNode } from "./vue.esm-bundler-K7CzQrxl.js";
import "./Icon-B6pI5HKs.js";
const _hoisted_1 = { class: "ded-table" };
const _hoisted_2 = { class: "ded-table-thead" };
const _hoisted_3 = { class: "ded-table-thead-tr" };
const _hoisted_4 = ["checked", "indeterminate"];
const _hoisted_5 = { class: "ded-table-tbody" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["checked", "onChange"];
const _sfc_main = {
  __name: "Table",
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    showVerticalBorders: {
      type: Boolean,
      default: false
    },
    isSprite: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    }
    // onRowClick: Function,
    // onSelect: Function,
  },
  setup(__props) {
    const props = __props;
    const selectedRowKeys = ref([]);
    const allSelected = computed(
      () => selectedRowKeys.value.length === props.dataSource.length
    );
    const someSelected = computed(
      () => selectedRowKeys.value.length > 0 && selectedRowKeys.value.length < props.dataSource.length
    );
    function handleClick(record) {
      props.onRowClick && props.onRowClick(record);
    }
    function handleSelectRow(key) {
      if (selectedRowKeys.value.includes(key)) {
        selectedRowKeys.value = selectedRowKeys.value.filter((rowKey) => rowKey !== key);
      } else {
        selectedRowKeys.value.push(key);
      }
      props.onSelect && props.onSelect([...selectedRowKeys.value]);
    }
    function handleSelectAll(event) {
      if (event.target.checked) {
        selectedRowKeys.value = props.dataSource.map((item) => item.head);
      } else {
        selectedRowKeys.value = [];
      }
      props.onSelect && props.onSelect([...selectedRowKeys.value]);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-table-container", { [props.className]: !!props.className }]),
        style: { "overflow-x": "auto" }
      }, [
        createBaseVNode("table", _hoisted_1, [
          createBaseVNode("thead", _hoisted_2, [
            createBaseVNode("tr", _hoisted_3, [
              props.showCheckbox ? (openBlock(), createElementBlock("th", {
                key: 0,
                style: { "width": "30px", "align-items": "center" },
                class: normalizeClass(["ded-table-thead-tr-th", { "ded-table-thead-tr-th-border": props.showVerticalBorders }])
              }, [
                createBaseVNode("input", {
                  type: "checkbox",
                  class: "ded-table-checkbox",
                  checked: allSelected.value,
                  indeterminate: someSelected.value,
                  onChange: handleSelectAll
                }, null, 40, _hoisted_4)
              ], 2)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.columns, (col) => {
                return openBlock(), createElementBlock("th", {
                  key: col.key,
                  style: normalizeStyle({ width: col.width, textAlign: col.align || "left" }),
                  class: normalizeClass(["ded-table-thead-tr-th", { "ded-table-thead-tr-th-border": props.showVerticalBorders }])
                }, toDisplayString(col.title), 7);
              }), 128))
            ])
          ]),
          createBaseVNode("tbody", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataSource, (item, rowIndex) => {
              return openBlock(), createElementBlock("tr", {
                key: rowIndex,
                class: normalizeClass(["ded-table-tbody-tr", { "ded-table-tbody-tr-sprite": props.isSprite }]),
                onClick: () => handleClick(item)
              }, [
                props.showCheckbox ? (openBlock(), createElementBlock("td", {
                  key: 0,
                  style: { "width": "30px", "align-items": "center" },
                  class: normalizeClass(["ded-table-tbody-tr-td", { "ded-table-tbody-tr-td-border": props.showVerticalBorders }])
                }, [
                  createBaseVNode("input", {
                    type: "checkbox",
                    class: "ded-table-checkbox",
                    checked: selectedRowKeys.value.includes(item.head),
                    onChange: () => handleSelectRow(item.head)
                  }, null, 40, _hoisted_7)
                ], 2)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(props.columns, (col) => {
                  return openBlock(), createElementBlock("td", {
                    key: col.key,
                    style: normalizeStyle({ width: col.width, textAlign: col.align || "left" }),
                    class: normalizeClass(["ded-table-tbody-tr-td", { "ded-table-tbody-tr-td-border": props.showVerticalBorders }])
                  }, [
                    renderSlot(_ctx.$slots, col.key, { item }, () => [
                      createTextVNode(toDisplayString(item[col.key]), 1)
                    ])
                  ], 6);
                }), 128))
              ], 10, _hoisted_6);
            }), 128))
          ])
        ])
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Table", "description": "", "tags": {}, "props": [{ "name": "columns", "type": { "name": "array" }, "required": true }, { "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "showCheckbox", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "showVerticalBorders", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "isSprite", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "col.key", "scoped": true, "bindings": [{ "name": "name", "title": "binding" }, { "name": "item", "title": "binding" }] }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Table/Table.vue"] };
const dataSource = [{
  head: "Head-1",
  column1: "td1",
  column2: "td2",
  column3: "td3",
  column4: "td4",
  column5: "td5"
}, {
  head: "Head-2",
  column1: "td1",
  column2: "td2",
  column3: "td3",
  column4: "td4",
  column5: "td5"
}, {
  head: "Head-3",
  column1: "td1",
  column2: "td2",
  column3: "td3",
  column4: "td4",
  column5: "td5"
}, {
  head: "Head-4",
  column1: "td1",
  column2: "td2",
  column3: "td3",
  column4: "td4",
  column5: "td5"
}];
const columns = [{
  key: "head",
  title: "TH",
  width: "100px"
}, {
  key: "column1",
  title: "TH",
  width: "180px"
}, {
  key: "column2",
  title: "TH",
  width: "180px"
}, {
  key: "column3",
  title: "TH",
  width: "180px"
}, {
  key: "column4",
  title: "TH",
  width: "120px"
}, {
  key: "column5",
  title: "TH",
  width: "120px",
  align: "center"
}];
const customColumns = [{
  key: "head",
  title: "TH",
  width: "10vw"
}, {
  key: "column1",
  title: "TH",
  width: "20vw"
}, {
  key: "column2",
  title: "TH",
  width: "20vw"
}, {
  key: "column3",
  title: "TH",
  width: "20vw"
}, {
  key: "column4",
  title: "TH",
  width: "15vw"
}, {
  key: "column5",
  title: "TH",
  width: "15vw",
  align: "center"
}];
const Table_stories = {
  components: {
    Button: _sfc_main$1
  },
  title: "Component/Table",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    "columns": {
      description: "欄位",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ key: string; title: string; width: string; align?: string }[]"
        }
      }
    },
    "dataSource": {
      description: "資料來源",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ head: string; key1: string; key2: string; ..., keyX: string }[]"
        }
      }
    },
    "showCheckbox": {
      description: "是否顯示 checkbox",
      control: {
        type: "boolean"
      }
    },
    "showVerticalBorders": {
      description: "是否顯示垂直邊框",
      control: {
        type: "boolean"
      }
    },
    "isSprite": {
      description: "是否顯示條紋背景",
      control: {
        type: "boolean"
      }
    },
    "className": {
      description: "客製化樣式",
      control: {
        type: "text"
      }
    },
    "columns.[key]": {
      description: "columns 中 `key` 的值可直接作為 slot 名稱，例如 `<template #[key]>`",
      control: false,
      table: {
        type: {
          summary: "Vue Component | HTML"
        },
        category: "SLOTS"
      }
    }
  },
  parameters: {
    docs: {
      title: "Table",
      description: {
        component: "Table 組件的呈現及說明。"
      }
    },
    actions: {
      disabled: true
    }
  }
};
const TableDefault = {
  name: "預設項目",
  args: {
    dataSource,
    columns,
    showCheckbox: false,
    showVerticalBorders: false,
    isSprite: true,
    className: ""
  },
  render: (args) => ({
    components: {
      Table: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Table
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />
    `
  }),
  parameters: {
    controls: {
      exclude: ["col.key"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, "", "<template>", `  <Table`, `    :dataSource='dataSource'`, `    :columns='columns'`, `    ${args.showCheckbox !== void 0 ? `:showCheckbox="${args.showCheckbox}"` : ""}`, `    ${args.showVerticalBorders !== void 0 ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`, `    ${args.isSprite !== void 0 ? `:isSprite="${args.isSprite}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  />`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TableBorder = {
  name: "框線表格",
  args: {
    dataSource,
    columns,
    showCheckbox: false,
    showVerticalBorders: true,
    isSprite: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Table: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Table
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, "", "<template>", `  <Table`, `    :dataSource='dataSource'`, `    :columns='columns'`, `    ${args.showCheckbox !== void 0 ? `:showCheckbox="${args.showCheckbox}"` : ""}`, `    ${args.showVerticalBorders !== void 0 ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`, `    ${args.isSprite !== void 0 ? `:isSprite="${args.isSprite}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  />`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TableSlot = {
  name: "客製化欄位",
  args: {
    dataSource,
    columns: customColumns,
    showCheckbox: false,
    showVerticalBorders: false,
    isSprite: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Table: _sfc_main,
      Button: _sfc_main$1
    },
    setup() {
      const onClick = (val) => {
        window.alert(val);
      };
      return {
        args,
        onClick
      };
    },
    template: `
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      >
        <template #column5="{ item }">
          <Button
            themeColor="primary"
            variant="filled"
            size="small"
            width="fit"
            borderWidth="1px"
            radius="4px"
            @click="onClick(item.column5)"
          >
            View
          </Button>
        </template>
      </Table>`
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Table, Button } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "10vw" },`, `  { key: "column1", title: "TH", width: "20vw" },`, `  { key: "column2", title: "TH", width: "20vw" },`, `  { key: "column3", title: "TH", width: "20vw" },`, `  { key: "column4", title: "TH", width: "15vw" },`, `  { key: "column5", title: "TH", width: "15vw", align: "center" },`, `]`, `const onClick = (val) => {`, `  window.alert(val.head + " " + val.column5);`, `};`, `<\/script>`, "", "<template>", `  <Table`, `    :dataSource='dataSource'`, `    :columns='columns'`, `    ${args.showCheckbox !== void 0 ? `:showCheckbox="${args.showCheckbox}"` : ""}`, `    ${args.showVerticalBorders !== void 0 ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`, `    ${args.isSprite !== void 0 ? `:isSprite="${args.isSprite}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    <template #column5="{item}">`, `      <Button`, `        themeColor="primary"`, `        variant="filled"`, `        size="small"`, `        width="fit"`, `        borderWidth="1px"`, `        radius="4px"`, `        @click="onClick(item)"`, `      >`, `        View`, `      </Button>`, `    </template>`, `  </Table>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TableCheck = {
  name: "可勾選資料列",
  args: {
    dataSource,
    columns,
    showCheckbox: true,
    showVerticalBorders: true,
    isSprite: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Table: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, "", "<template>", `  <Table`, `    :dataSource='dataSource'`, `    :columns='columns'`, `    ${args.showCheckbox !== void 0 ? `:showCheckbox="${args.showCheckbox}"` : ""}`, `    ${args.showVerticalBorders !== void 0 ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`, `    ${args.isSprite !== void 0 ? `:isSprite="${args.isSprite}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  />`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
TableDefault.parameters = {
  ...TableDefault.parameters,
  docs: {
    ...(_a = TableDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource,\n    columns,\n    showCheckbox: false,\n    showVerticalBorders: false,\n    isSprite: true,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Table\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Table\n        :dataSource="args.dataSource"\n        :columns="args.columns"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      />\n    `\n  }),\n  parameters: {\n    controls: {\n      exclude: ["col.key"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, "", "<template>", `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : ""}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  />`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = TableDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TableBorder.parameters = {
  ...TableBorder.parameters,
  docs: {
    ...(_d = TableBorder.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "框線表格",\n  args: {\n    dataSource,\n    columns,\n    showCheckbox: false,\n    showVerticalBorders: true,\n    isSprite: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Table\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Table\n        :dataSource="args.dataSource"\n        :columns="args.columns"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      />`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, "", "<template>", `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : ""}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  />`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = TableBorder.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
TableSlot.parameters = {
  ...TableSlot.parameters,
  docs: {
    ...(_g = TableSlot.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "客製化欄位",\n  args: {\n    dataSource,\n    columns: customColumns,\n    showCheckbox: false,\n    showVerticalBorders: false,\n    isSprite: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Table,\n      Button\n    },\n    setup() {\n      const onClick = val => {\n        window.alert(val);\n      };\n      return {\n        args,\n        onClick\n      };\n    },\n    template: `\n      <Table\n        :columns="args.columns"\n        :dataSource="args.dataSource"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      >\n        <template #column5="{ item }">\n          <Button\n            themeColor="primary"\n            variant="filled"\n            size="small"\n            width="fit"\n            borderWidth="1px"\n            radius="4px"\n            @click="onClick(item.column5)"\n          >\n            View\n          </Button>\n        </template>\n      </Table>`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table, Button } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "10vw" },`, `  { key: "column1", title: "TH", width: "20vw" },`, `  { key: "column2", title: "TH", width: "20vw" },`, `  { key: "column3", title: "TH", width: "20vw" },`, `  { key: "column4", title: "TH", width: "15vw" },`, `  { key: "column5", title: "TH", width: "15vw", align: "center" },`, `]`, `const onClick = (val) => {`, `  window.alert(val.head + " " + val.column5);`, `};`, `<\/script>`, "", "<template>", `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : ""}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    <template #column5="{item}">`, `      <Button`, `        themeColor="primary"`, `        variant="filled"`, `        size="small"`, `        width="fit"`, `        borderWidth="1px"`, `        radius="4px"`, `        @click="onClick(item)"`, `      >`, `        View`, `      </Button>`, `    </template>`, `  </Table>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = TableSlot.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TableCheck.parameters = {
  ...TableCheck.parameters,
  docs: {
    ...(_j = TableCheck.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  name: "可勾選資料列",\n  args: {\n    dataSource,\n    columns,\n    showCheckbox: true,\n    showVerticalBorders: true,\n    isSprite: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Table\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Table\n        :columns="args.columns"\n        :dataSource="args.dataSource"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      />`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, "", "<template>", `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : ""}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  />`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_l = (_k = TableCheck.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["TableDefault", "TableBorder", "TableSlot", "TableCheck"];
export {
  TableBorder,
  TableCheck,
  TableDefault,
  TableSlot,
  __namedExportsOrder,
  Table_stories as default
};
