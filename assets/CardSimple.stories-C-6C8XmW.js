var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { _ as _sfc_main } from "./CardSimple-CGr73viN.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./Row-CgwqPSLD.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import "./Button-8IAwqsIt.js";
import "./Icon-B6pI5HKs.js";
import "./Image-BJOsgKZf.js";
import "./Title-BgzIyXq9.js";
const CardSimple_stories = {
  components: {
    Column: _sfc_main$1
  },
  title: "Component/Card-Simple",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    layout: {
      description: "佈局",
      control: {
        type: "select"
      },
      options: ["horizontal", "vertical"],
      table: {
        type: {
          summary: "horizontal | vertical"
        }
      }
    },
    hasBorder: {
      description: "是否有邊框",
      control: {
        type: "boolean"
      }
    },
    imgSrc: {
      description: "圖片來源",
      control: {
        type: "text"
      }
    },
    buttonName: {
      description: "按鈕名稱",
      control: {
        type: "text"
      }
    },
    align: {
      description: "對齊方式",
      control: {
        type: "select"
      },
      options: ["left", "center", "right"],
      table: {
        type: {
          summary: "left | center | right"
        }
      }
    },
    title: {
      description: "卡片標題",
      control: {
        type: "text"
      }
    },
    subtitle: {
      description: "副標題",
      control: {
        type: "text"
      }
    },
    description: {
      description: "描述",
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "CardSimple",
      description: {
        component: "卡片組件的呈現及說明。"
      }
    },
    actions: {
      disabled: true
    }
  }
};
const CardSimpleDefault = {
  name: "預設項目",
  args: {
    layout: "vertical",
    hasBorder: true,
    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",
    buttonName: "Button",
    align: "left",
    title: "Card Title",
    subtitle: "Subtitle",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
  },
  render: (args) => ({
    components: {
      CardSimple: _sfc_main,
      Grid: _sfc_main$3,
      Row: _sfc_main$2,
      Column: _sfc_main$1
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Grid>
        <Row>
          <Column :xs="12" :sm="6" :md="4">
            <CardSimple
              :layout="args.layout"
              :hasBorder="args.hasBorder"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              :align="args.align"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>
        </Row>
      </Grid>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { CardSimple, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Grid>`, `    <Row>`, `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", "    </Row>", "  </Grid>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CardSimpleAlign = {
  name: "按鈕對齊方式",
  args: {
    layout: "vertical",
    hasBorder: true,
    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",
    buttonName: "Button",
    // align: "left",
    title: "Card Title",
    subtitle: "Subtitle",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sis simply dummy text of the printing"
  },
  render: (args) => ({
    components: {
      CardSimple: _sfc_main,
      Grid: _sfc_main$3,
      Row: _sfc_main$2,
      Column: _sfc_main$1
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Grid fluid>
        <Row hasGap>
          <Column :xs="12" :sm="6" :md="4">
            <CardSimple
              :layout="args.layout"
              :hasBorder="args.hasBorder"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              align="left"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>

          <Column :xs="12" :sm="6" :md="4">
            <CardSimple
              :layout="args.layout"
              :hasBorder="args.hasBorder"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              align="center"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>

          <Column :xs="12" :sm="6" :md="4">
            <CardSimple
              :layout="args.layout"
              :hasBorder="args.hasBorder"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              align="right"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>
        </Row>
      </Grid>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["align"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { CardSimple, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="left"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="center"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="right"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", "    </Row>", "  </Grid>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CardHorizontalDefault = {
  name: "垂直佈局",
  args: {
    layout: "vertical",
    hasBorder: true,
    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",
    buttonName: "Button",
    align: "left",
    title: "Card Title",
    subtitle: "Subtitle",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
  },
  render: (args) => ({
    components: {
      CardSimple: _sfc_main,
      Grid: _sfc_main$3,
      Row: _sfc_main$2,
      Column: _sfc_main$1
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Grid>
        <Row hasGap>
          <Column :xs="12" :sm="6" :md="3">
            <CardSimple
              :layout="args.layout"
              :hasBorder="args.hasBorder"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              :align="args.align"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>

          <Column :xs="12" :sm="6" :md="3">
            <CardSimple
              :layout="args.layout"
              :hasBorder="args.hasBorder"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              :align="args.align"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>

          <Column :xs="12" :sm="6" :md="3">
            <CardSimple
              :layout="args.layout"
              :hasBorder="args.hasBorder"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              :align="args.align"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>

          <Column :xs="12" :sm="6" :md="3">
            <CardSimple
              :layout="args.layout"
              :hasBorder="args.hasBorder"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              :align="args.align"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>
        </Row>
      </Grid>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["layout"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { CardSimple, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", "    </Row>", "  </Grid>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CardVerticalDefault = {
  name: "水平佈局",
  args: {
    layout: "horizontal",
    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",
    buttonName: "Button",
    align: "left",
    hasBorder: true,
    title: "Card Title",
    subtitle: "Subtitle",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
  },
  render: (args) => ({
    components: {
      CardSimple: _sfc_main,
      Grid: _sfc_main$3,
      Row: _sfc_main$2,
      Column: _sfc_main$1
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Grid>
        <Row hasGap>
          <Column :xs="6">
            <CardSimple
              :layout="args.layout"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              :align="args.align"
              :hasBorder="args.hasBorder"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>

          <Column :xs="6">
            <CardSimple
              :layout="args.layout"
              :imgSrc="args.imgSrc"
              :buttonName="args.buttonName"
              :align="args.align"
              :hasBorder="args.hasBorder"
              :title="args.title"
              :subtitle="args.subtitle"
              :description="args.description"
            ></CardSimple>
          </Column>
        </Row>
      </Grid>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["layout"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { CardSimple, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="6">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="6">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== void 0 ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", "    </Row>", "  </Grid>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
CardSimpleDefault.parameters = {
  ...CardSimpleDefault.parameters,
  docs: {
    ...(_a = CardSimpleDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    layout: "vertical",\n    hasBorder: true,\n    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",\n    buttonName: "Button",\n    align: "left",\n    title: "Card Title",\n    subtitle: "Subtitle",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n  },\n  render: args => ({\n    components: {\n      CardSimple,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row>\n          <Column :xs="12" :sm="6" :md="4">\n            <CardSimple\n              :layout="args.layout"\n              :hasBorder="args.hasBorder"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              :align="args.align"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { CardSimple, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Grid>`, `    <Row>`, `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", "    </Row>", "  </Grid>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = CardSimpleDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
CardSimpleAlign.parameters = {
  ...CardSimpleAlign.parameters,
  docs: {
    ...(_d = CardSimpleAlign.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "按鈕對齊方式",\n  args: {\n    layout: "vertical",\n    hasBorder: true,\n    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",\n    buttonName: "Button",\n    // align: "left",\n    title: "Card Title",\n    subtitle: "Subtitle",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sis simply dummy text of the printing"\n  },\n  render: args => ({\n    components: {\n      CardSimple,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid fluid>\n        <Row hasGap>\n          <Column :xs="12" :sm="6" :md="4">\n            <CardSimple\n              :layout="args.layout"\n              :hasBorder="args.hasBorder"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              align="left"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n\n          <Column :xs="12" :sm="6" :md="4">\n            <CardSimple\n              :layout="args.layout"\n              :hasBorder="args.hasBorder"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              align="center"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n\n          <Column :xs="12" :sm="6" :md="4">\n            <CardSimple\n              :layout="args.layout"\n              :hasBorder="args.hasBorder"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              align="right"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["align"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { CardSimple, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="left"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="center"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="right"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", "    </Row>", "  </Grid>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = CardSimpleAlign.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
CardHorizontalDefault.parameters = {
  ...CardHorizontalDefault.parameters,
  docs: {
    ...(_g = CardHorizontalDefault.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "垂直佈局",\n  args: {\n    layout: "vertical",\n    hasBorder: true,\n    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",\n    buttonName: "Button",\n    align: "left",\n    title: "Card Title",\n    subtitle: "Subtitle",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n  },\n  render: args => ({\n    components: {\n      CardSimple,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row hasGap>\n          <Column :xs="12" :sm="6" :md="3">\n            <CardSimple\n              :layout="args.layout"\n              :hasBorder="args.hasBorder"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              :align="args.align"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n\n          <Column :xs="12" :sm="6" :md="3">\n            <CardSimple\n              :layout="args.layout"\n              :hasBorder="args.hasBorder"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              :align="args.align"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n\n          <Column :xs="12" :sm="6" :md="3">\n            <CardSimple\n              :layout="args.layout"\n              :hasBorder="args.hasBorder"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              :align="args.align"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n\n          <Column :xs="12" :sm="6" :md="3">\n            <CardSimple\n              :layout="args.layout"\n              :hasBorder="args.hasBorder"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              :align="args.align"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["layout"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { CardSimple, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", "    </Row>", "  </Grid>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = CardHorizontalDefault.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
CardVerticalDefault.parameters = {
  ...CardVerticalDefault.parameters,
  docs: {
    ...(_j = CardVerticalDefault.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  name: "水平佈局",\n  args: {\n    layout: "horizontal",\n    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",\n    buttonName: "Button",\n    align: "left",\n    hasBorder: true,\n    title: "Card Title",\n    subtitle: "Subtitle",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n  },\n  render: args => ({\n    components: {\n      CardSimple,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row hasGap>\n          <Column :xs="6">\n            <CardSimple\n              :layout="args.layout"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              :align="args.align"\n              :hasBorder="args.hasBorder"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n\n          <Column :xs="6">\n            <CardSimple\n              :layout="args.layout"\n              :imgSrc="args.imgSrc"\n              :buttonName="args.buttonName"\n              :align="args.align"\n              :hasBorder="args.hasBorder"\n              :title="args.title"\n              :subtitle="args.subtitle"\n              :description="args.description"\n            ></CardSimple>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["layout"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { CardSimple, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="6">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", `      <Column :xs="6">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, "      </Column>", "    </Row>", "  </Grid>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_l = (_k = CardVerticalDefault.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["CardSimpleDefault", "CardSimpleAlign", "CardHorizontalDefault", "CardVerticalDefault"];
export {
  CardHorizontalDefault,
  CardSimpleAlign,
  CardSimpleDefault,
  CardVerticalDefault,
  __namedExportsOrder,
  CardSimple_stories as default
};
