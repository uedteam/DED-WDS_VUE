var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { _ as _sfc_main$4 } from "./Button-8IAwqsIt.js";
import { c as createElementBlock, d as createCommentVNode, a as createBaseVNode, n as normalizeClass, r as renderSlot, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$2 } from "./CardSimple-CGr73viN.js";
import { _ as _sfc_main$3 } from "./Title-BgzIyXq9.js";
import { b as _sfc_main$1, _ as _sfc_main$5, a as _sfc_main$6 } from "./Row-CgwqPSLD.js";
import "./Icon-B6pI5HKs.js";
import "./Image-BJOsgKZf.js";
const _hoisted_1 = { class: "ded-card-body" };
const _hoisted_2 = {
  key: 1,
  class: "ded-card-footer"
};
const _sfc_main = {
  __name: "Card",
  props: {
    hasHeaderDivider: {
      type: Boolean,
      default: false
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
        class: normalizeClass([
          "ded-card ded-card-container",
          {
            [props.className]: !!props.className
          }
        ])
      }, [
        _ctx.$slots.cardHeader ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["ded-card-header", { "ded-card-header-divider": props.hasHeaderDivider }])
        }, [
          renderSlot(_ctx.$slots, "cardHeader")
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ]),
        _ctx.$slots.cardFooter ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "cardFooter")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Card", "description": "", "tags": {}, "props": [{ "name": "hasHeaderDivider", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "cardHeader" }, { "name": "default" }, { "name": "cardFooter" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Card/Card.vue"] };
const Card_stories = {
  components: {
    Grid: _sfc_main$1
  },
  title: "Component/Card",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    hasHeaderDivider: {
      description: "是否有標題分隔線",
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
    cardHeader: {
      description: "卡片標題",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "Vue Component | HTML"
        }
      }
    },
    default: {
      description: "卡片內容",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "Vue Component | HTML"
        }
      }
    },
    cardFooter: {
      description: "卡片底部",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "Vue Component | HTML"
        }
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Card",
      description: {
        component: "卡片組件的呈現及說明。"
      }
    },
    actions: {
      disabled: true
    }
  }
};
const CardDefault = {
  name: "預設項目",
  args: {
    hasHeaderDivider: false,
    className: "",
    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,
    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,
    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`
  },
  render: (args) => ({
    components: {
      Card: _sfc_main,
      Grid: _sfc_main$1,
      Row: _sfc_main$6,
      Column: _sfc_main$5,
      Button: _sfc_main$4,
      Title: _sfc_main$3,
      CardSimple: _sfc_main$2
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Grid>
        <Row>
          <Column :xs="4" :md="6" :lg="4">
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2" >Header Title</Title>
              </template>
                
              <CardSimple
                :hasBorder="false"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>
                
              <template #cardFooter>
              <Button
                themeColor="primary"
                variant="filled"
                suffix="SvgArrowDown"
                size="medium"
                width="fit"
                borderWidth="1px"
                radius="4px"
              >
                Button
              </Button>
              </template>
            </Card>
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
          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CardVerticalDefault = {
  name: "垂直佈局",
  args: {
    hasHeaderDivider: false,
    className: "",
    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,
    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,
    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`
  },
  render: (args) => ({
    components: {
      Card: _sfc_main,
      Grid: _sfc_main$1,
      Row: _sfc_main$6,
      Column: _sfc_main$5,
      Button: _sfc_main$4,
      Title: _sfc_main$3,
      CardSimple: _sfc_main$2
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Grid>
        <Row hasGap>
          <Column :xs="12" :md="6" :lg="3">
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2">Header Title</Title>
              </template>

              <CardSimple
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                :hasBorder="false"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>

              <template #cardFooter>
                <Button
                  themeColor="primary"
                  variant="filled"
                  suffix="SvgArrowDown"
                  size="medium"
                  width="fit"
                  borderWidth="1px"
                  radius="4px"
                >
                  Button
                </Button>
              </template>
            </Card>
          </Column>

          <Column :xs="12" :md="6" :lg="3">
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2">Header Title</Title>
              </template>

              <CardSimple
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                :hasBorder="false"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>

              <template #cardFooter>
                <Button
                  themeColor="primary"
                  variant="filled"
                  suffix="SvgArrowDown"
                  size="medium"
                  width="fit"
                  borderWidth="1px"
                  radius="4px"
                >
                  Button
                </Button>
              </template>
            </Card>
          </Column>

          <Column :xs="12" :md="6" :lg="3">
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2">Header Title</Title>
              </template>

              <CardSimple
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                :hasBorder="false"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>

              <template #cardFooter>
                <Button
                  themeColor="primary"
                  variant="filled"
                  suffix="SvgArrowDown"
                  size="medium"
                  width="fit"
                  borderWidth="1px"
                  radius="4px"
                >
                  Button
                </Button>
              </template>
            </Card>
          </Column>

          <Column :xs="12" :md="6" :lg="3">
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2">Header Title</Title>
              </template>

              <CardSimple
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                :hasBorder="false"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>

              <template #cardFooter>
                <Button
                  themeColor="primary"
                  variant="filled"
                  suffix="SvgArrowDown"
                  size="medium"
                  width="fit"
                  borderWidth="1px"
                  radius="4px"
                >
                  Button
                </Button>
              </template>
            </Card>
          </Column>
        </Row>
      </Grid>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["hasHeaderDivider"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row hasGap>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CardHorizontalDefault = {
  name: "水平佈局",
  args: {
    hasHeaderDivider: false,
    className: "",
    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,
    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,
    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`
  },
  render: (args) => ({
    components: {
      Card: _sfc_main,
      Grid: _sfc_main$1,
      Row: _sfc_main$6,
      Column: _sfc_main$5,
      Button: _sfc_main$4,
      Title: _sfc_main$3,
      CardSimple: _sfc_main$2
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
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2">Header Title</Title>
              </template>

              <CardSimple
                layout="horizontal"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                :hasBorder="false"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>

              <template #cardFooter>
                <Button
                  themeColor="primary"
                  variant="filled"
                  suffix="SvgArrowDown"
                  size="medium"
                  width="fit"
                  borderWidth="1px"
                  radius="4px"
                >
                  Button
                </Button>
              </template>
            </Card>
          </Column>

          <Column :xs="6">
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2">Header Title</Title>
              </template>

              <CardSimple
                layout="horizontal"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                :hasBorder="false"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>

              <template #cardFooter>
                <Button
                  themeColor="primary"
                  variant="filled"
                  suffix="SvgArrowDown"
                  size="medium"
                  width="fit"
                  borderWidth="1px"
                  radius="4px"
                >
                  Button
                </Button>
              </template>
            </Card>
          </Column>

          <Column :xs="6">
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2">Header Title</Title>
              </template>

              <CardSimple
                layout="horizontal"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                :hasBorder="false"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>

              <template #cardFooter>
                <Button
                  themeColor="primary"
                  variant="filled"
                  suffix="SvgArrowDown"
                  size="medium"
                  width="fit"
                  borderWidth="1px"
                  radius="4px"
                >
                  Button
                </Button>
              </template>
            </Card>
          </Column>

          <Column :xs="6">
            <Card
              :hasHeaderDivider="args.hasHeaderDivider"
              :className="args.cardHeader"
            >
              <template #cardHeader>
                <Title themeColor="primary" :level="2">Header Title</Title>
              </template>

              <CardSimple
                layout="horizontal"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                :hasBorder="false"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              ></CardSimple>

              <template #cardFooter>
                <Button
                  themeColor="primary"
                  variant="filled"
                  suffix="SvgArrowDown"
                  size="medium"
                  width="fit"
                  borderWidth="1px"
                  radius="4px"
                >
                  Button
                </Button>
              </template>
            </Card>
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
          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row hasGap>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== void 0 ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
CardDefault.parameters = {
  ...CardDefault.parameters,
  docs: {
    ...(_a = CardDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row>\n          <Column :xs="4" :md="6" :lg="4">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2" >Header Title</Title>\n              </template>\n                \n              <CardSimple\n                :hasBorder="false"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n                \n              <template #cardFooter>\n              <Button\n                themeColor="primary"\n                variant="filled"\n                suffix="SvgArrowDown"\n                size="medium"\n                width="fit"\n                borderWidth="1px"\n                radius="4px"\n              >\n                Button\n              </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = CardDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
CardVerticalDefault.parameters = {
  ...CardVerticalDefault.parameters,
  docs: {
    ...(_d = CardVerticalDefault.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "垂直佈局",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row hasGap>\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["hasHeaderDivider"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row hasGap>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = CardVerticalDefault.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
CardHorizontalDefault.parameters = {
  ...CardHorizontalDefault.parameters,
  docs: {
    ...(_g = CardHorizontalDefault.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "水平佈局",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row hasGap>\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row hasGap>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = CardHorizontalDefault.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["CardDefault", "CardVerticalDefault", "CardHorizontalDefault"];
export {
  CardDefault,
  CardHorizontalDefault,
  CardVerticalDefault,
  __namedExportsOrder,
  Card_stories as default
};
