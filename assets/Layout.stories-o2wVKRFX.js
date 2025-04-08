var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { _ as _sfc_main, a as _sfc_main$1, b as _sfc_main$2, c as _sfc_main$3, d as _sfc_main$4 } from "./Side-DiB6Zc4x.js";
import "./vue.esm-bundler-K7CzQrxl.js";
const Layout_stories = {
  components: {
    Layout: _sfc_main$4,
    Header: _sfc_main$3,
    Content: _sfc_main$2,
    Side: _sfc_main$1,
    Footer: _sfc_main
  },
  title: "Component/Layout",
  tags: ["autodocs"],
  argTypes: {
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
      title: "Layout",
      description: {
        component: "佈局組件的呈現及說明。"
      }
    }
  }
};
const LayoutDefaultStory = {
  name: "預設項目",
  args: {
    className: ""
  },
  render: (args) => ({
    components: {
      Layout: _sfc_main$4,
      Header: _sfc_main$3,
      Content: _sfc_main$2,
      Side: _sfc_main$1,
      Footer: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Layout :className="args.className">
        <Content>
          <div
            style="
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0958d9;
        color: #fff;
        font-size: 24px;
      "
          >
            Content
          </div>
        </Content>
      </Layout>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { Layout, Content } from "@ded-wds-vue/ui";', `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    <Content>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #0958d9;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        content`, `      </div>`, `    </Content>`, `  </Layout>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const LayoutThirdStory = {
  name: "三段式佈局",
  args: {
    className: ""
  },
  render: (args) => ({
    components: {
      Layout: _sfc_main$4,
      Header: _sfc_main$3,
      Content: _sfc_main$2,
      Side: _sfc_main$1,
      Footer: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Layout :className="args.className">
        <Header>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #4096ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Header
          </div>
        </Header>
      
        <Content>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #0958d9;
              color: #fff;
              font-size: 24px;
            "
          >
            Content
          </div>
        </Content>
      
        <Footer>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #4096ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Footer
          </div>
        </Footer>
      </Layout>
      `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { Layout, Header, Content, Footer } from "@ded-wds-vue/ui";', `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        content`, `      </div>`, `    </Header>`, `    <Content>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #0958d9;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        content`, `      </div>`, `    </Content>`, `    <Footer>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        content`, `      </div>`, `    </Footer>`, `  </Layout>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const LayoutLeftDrawerStory = {
  name: "左側欄三段式佈局",
  args: {
    className: ""
  },
  render: (args) => ({
    components: {
      Layout: _sfc_main$4,
      Header: _sfc_main$3,
      Content: _sfc_main$2,
      Side: _sfc_main$1,
      Footer: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Layout :className="args.className">
        <Header>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #4096ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Header
          </div>
        </Header>
      
        <Layout>
          <Side>
            <div 
              style="
                min-width: 80px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #1677ff;
                color: #fff;
                font-size: 24px;
              "
            >
              Side
            </div>
          </Side>
      
          <Content>
            <div 
              style="
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #0958d9;
                color: #fff;
                font-size: 24px;
              "
            >
              Content
            </div>
          </Content>
        </Layout>
      
        <Footer>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #4096ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Footer
          </div>
        </Footer>
      </Layout>
`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";', `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `    </Layout>`, `  `, `    <Footer>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Footer`, `      </div>`, `    </Footer>`, `  </Layout>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const LayoutRightDrawerStory = {
  name: "右側欄三段式佈局",
  args: {
    className: ""
  },
  render: (args) => ({
    components: {
      Layout: _sfc_main$4,
      Header: _sfc_main$3,
      Content: _sfc_main$2,
      Side: _sfc_main$1,
      Footer: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Layout :className="args.className">
        <Header>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #4096ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Header
          </div>
        </Header>
      
        <Layout>
          <Content>
            <div 
              style="
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #0958d9;
                color: #fff;
                font-size: 24px;
              "
            >
              Content
            </div>
          </Content>
      
          <Side>
            <div 
              style="
                min-width: 80px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #1677ff;
                color: #fff;
                font-size: 24px;
              "
            >
              Side
            </div>
          </Side>
        </Layout>
      
        <Footer>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #4096ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Footer
          </div>
        </Footer>
      </Layout>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";', `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `  `, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `    </Layout>`, `  `, `    <Footer>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Footer`, `      </div>`, `    </Footer>`, `  </Layout>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const LayoutLeftFixedStory = {
  name: "左側欄固定佈局",
  args: {
    className: ""
  },
  render: (args) => ({
    components: {
      Layout: _sfc_main$4,
      Header: _sfc_main$3,
      Content: _sfc_main$2,
      Side: _sfc_main$1,
      Footer: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Layout :className="args.className">
        <Side>
          <div 
            style="
              min-width: 80px;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #1677ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Side
          </div>
        </Side>
      
        <Layout>
          <Header>
            <div 
              style="
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #4096ff;
                color: #fff;
                font-size: 24px;
              "
            >
              Header
            </div>
          </Header>
      
          <Content>
            <div 
              style="
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #0958d9;
                color: #fff;
                font-size: 24px;
              "
            >
              Content
            </div>
          </Content>
      
          <Footer>
            <div 
              style="
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #4096ff;
                color: #fff;
                font-size: 24px;
              "
            >
              Footer
            </div>
          </Footer>
        </Layout>
      </Layout>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";', `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Side>`, `      <div style="`, `        min-width: 80px;`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #1677ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Side`, `      </div>`, `    </Side>`, `  `, `    <Layout>`, `      <Header>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #4096ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Header`, `        </div>`, `      </Header>`, `  `, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `  `, `      <Footer>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #4096ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Footer`, `        </div>`, `      </Footer>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const LayoutLeftStory = {
  name: "標準左側佈局",
  args: {
    className: ""
  },
  render: (args) => ({
    components: {
      Layout: _sfc_main$4,
      Header: _sfc_main$3,
      Content: _sfc_main$2,
      Side: _sfc_main$1,
      Footer: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Layout :className="args.className">
        <Header>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #4096ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Header
          </div>
        </Header>
      
        <Layout>
          <Side>
            <div 
              style="
                min-width: 80px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #1677ff;
                color: #fff;
                font-size: 24px;
              "
            >
              Side
            </div>
          </Side>
      
          <Layout>
            <Content>
              <div 
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: #0958d9;
                  color: #fff;
                  font-size: 24px;
                "
              >
                Content
              </div>
            </Content>
      
            <Footer>
              <div 
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: #4096ff;
                  color: #fff;
                  font-size: 24px;
                "
              >
                Footer
              </div>
            </Footer>
          </Layout>
        </Layout>
      </Layout>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";', `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Layout>`, `        <Content>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #0958d9;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Content`, `          </div>`, `        </Content>`, `  `, `        <Footer>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #4096ff;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Footer`, `          </div>`, `        </Footer>`, `      </Layout>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const LayoutOfficialStory = {
  name: "官網佈局",
  args: {
    className: ""
  },
  render: (args) => ({
    components: {
      Layout: _sfc_main$4,
      Header: _sfc_main$3,
      Content: _sfc_main$2,
      Side: _sfc_main$1,
      Footer: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Layout :className="args.className">
        <Header>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #4096ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Header
          </div>
        </Header>
      
        <Layout>
          <Side>
            <div 
              style="
                min-width: 80px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #1677ff;
                color: #fff;
                font-size: 24px;
              "
            >
              Side
            </div>
          </Side>
      
          <Layout>
            <Content>
              <div 
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: #0958d9;
                  color: #fff;
                  font-size: 24px;
                "
              >
                Content
              </div>
            </Content>
      
            <Footer>
              <div 
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: #4096ff;
                  color: #fff;
                  font-size: 24px;
                "
              >
                Footer
              </div>
            </Footer>
          </Layout>
      
          <Side>
            <div 
              style="
                min-width: 80px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #1677ff;
                color: #fff;
                font-size: 24px;
              "
            >
              Side
            </div>
          </Side>
        </Layout>
      </Layout>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";', `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Layout>`, `        <Content>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #0958d9;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Content`, `          </div>`, `        </Content>`, `  `, `        <Footer>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #4096ff;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Footer`, `          </div>`, `        </Footer>`, `      </Layout>`, `  `, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const LayoutArticleStory = {
  name: "文章導覽式佈局",
  args: {
    className: ""
  },
  render: (args) => ({
    components: {
      Layout: _sfc_main$4,
      Header: _sfc_main$3,
      Content: _sfc_main$2,
      Side: _sfc_main$1,
      Footer: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Layout :className="args.className">
        <Side>
          <div 
            style="
              min-width: 80px;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #1677ff;
              color: #fff;
              font-size: 24px;
            "
          >
            Side
          </div>
        </Side>
      
        <Content>
          <div 
            style="
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #0958d9;
              color: #fff;
              font-size: 24px;
            "
          >
            Content
          </div>
        </Content>
      </Layout>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { Layout, Content, Side } from "@ded-wds-vue/ui";', `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Side>`, `      <div style="`, `        min-width: 80px;`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #1677ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Side`, `      </div>`, `    </Side>`, `  `, `    <Content>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #0958d9;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Content`, `      </div>`, `    </Content>`, `  </Layout>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
LayoutDefaultStory.parameters = {
  ...LayoutDefaultStory.parameters,
  docs: {
    ...(_a = LayoutDefaultStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  name: \"預設項目\",\n  args: {\n    className: \"\"\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className=\"args.className\">\n        <Content>\n          <div\n            style=\"\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: #0958d9;\n        color: #fff;\n        font-size: 24px;\n      \"\n          >\n            Content\n          </div>\n        </Content>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, \"import { Layout, Content } from \\\"@ded-wds-vue/ui\\\";\", `<\/script>`, \"\", \"<template>\", `  <Layout`, `    ${args.className ? `className=\"${args.className}\"` : \"\"}`, `  >`, `    <Content>`, `      <div style=\"`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #0958d9;`, `        color: #fff;`, `        font-size: 24px;`, `      \">`, `        content`, `      </div>`, `    </Content>`, `  </Layout>`, \"</template>\"].filter(Boolean).join(\"\\n\").trim();\n        }\n      }\n    }\n  }\n}",
      ...(_c = (_b = LayoutDefaultStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
LayoutThirdStory.parameters = {
  ...LayoutThirdStory.parameters,
  docs: {
    ...(_d = LayoutThirdStory.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "三段式佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Content>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #0958d9;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Content\n          </div>\n        </Content>\n      \n        <Footer>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Footer\n          </div>\n        </Footer>\n      </Layout>\n      `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        content`, `      </div>`, `    </Header>`, `    <Content>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #0958d9;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        content`, `      </div>`, `    </Content>`, `    <Footer>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        content`, `      </div>`, `    </Footer>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = LayoutThirdStory.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
LayoutLeftDrawerStory.parameters = {
  ...LayoutLeftDrawerStory.parameters,
  docs: {
    ...(_g = LayoutLeftDrawerStory.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "左側欄三段式佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Layout>\n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n      \n          <Content>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #0958d9;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Content\n            </div>\n          </Content>\n        </Layout>\n      \n        <Footer>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Footer\n          </div>\n        </Footer>\n      </Layout>\n`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `    </Layout>`, `  `, `    <Footer>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Footer`, `      </div>`, `    </Footer>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = LayoutLeftDrawerStory.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
LayoutRightDrawerStory.parameters = {
  ...LayoutRightDrawerStory.parameters,
  docs: {
    ...(_j = LayoutRightDrawerStory.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  name: "右側欄三段式佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Layout>\n          <Content>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #0958d9;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Content\n            </div>\n          </Content>\n      \n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n        </Layout>\n      \n        <Footer>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Footer\n          </div>\n        </Footer>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `  `, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `    </Layout>`, `  `, `    <Footer>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Footer`, `      </div>`, `    </Footer>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_l = (_k = LayoutRightDrawerStory.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
LayoutLeftFixedStory.parameters = {
  ...LayoutLeftFixedStory.parameters,
  docs: {
    ...(_m = LayoutLeftFixedStory.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  name: "左側欄固定佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Side>\n          <div \n            style="\n              min-width: 80px;\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #1677ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Side\n          </div>\n        </Side>\n      \n        <Layout>\n          <Header>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #4096ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Header\n            </div>\n          </Header>\n      \n          <Content>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #0958d9;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Content\n            </div>\n          </Content>\n      \n          <Footer>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #4096ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Footer\n            </div>\n          </Footer>\n        </Layout>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Side>`, `      <div style="`, `        min-width: 80px;`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #1677ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Side`, `      </div>`, `    </Side>`, `  `, `    <Layout>`, `      <Header>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #4096ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Header`, `        </div>`, `      </Header>`, `  `, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `  `, `      <Footer>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #4096ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Footer`, `        </div>`, `      </Footer>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_o = (_n = LayoutLeftFixedStory.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
LayoutLeftStory.parameters = {
  ...LayoutLeftStory.parameters,
  docs: {
    ...(_p = LayoutLeftStory.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  name: "標準左側佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Layout>\n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n      \n          <Layout>\n            <Content>\n              <div \n                style="\n                  width: 100%;\n                  height: 100%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background: #0958d9;\n                  color: #fff;\n                  font-size: 24px;\n                "\n              >\n                Content\n              </div>\n            </Content>\n      \n            <Footer>\n              <div \n                style="\n                  width: 100%;\n                  height: 100%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background: #4096ff;\n                  color: #fff;\n                  font-size: 24px;\n                "\n              >\n                Footer\n              </div>\n            </Footer>\n          </Layout>\n        </Layout>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Layout>`, `        <Content>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #0958d9;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Content`, `          </div>`, `        </Content>`, `  `, `        <Footer>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #4096ff;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Footer`, `          </div>`, `        </Footer>`, `      </Layout>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_r = (_q = LayoutLeftStory.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
LayoutOfficialStory.parameters = {
  ...LayoutOfficialStory.parameters,
  docs: {
    ...(_s = LayoutOfficialStory.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  name: "官網佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Layout>\n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n      \n          <Layout>\n            <Content>\n              <div \n                style="\n                  width: 100%;\n                  height: 100%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background: #0958d9;\n                  color: #fff;\n                  font-size: 24px;\n                "\n              >\n                Content\n              </div>\n            </Content>\n      \n            <Footer>\n              <div \n                style="\n                  width: 100%;\n                  height: 100%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background: #4096ff;\n                  color: #fff;\n                  font-size: 24px;\n                "\n              >\n                Footer\n              </div>\n            </Footer>\n          </Layout>\n      \n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n        </Layout>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Layout>`, `        <Content>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #0958d9;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Content`, `          </div>`, `        </Content>`, `  `, `        <Footer>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #4096ff;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Footer`, `          </div>`, `        </Footer>`, `      </Layout>`, `  `, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_u = (_t = LayoutOfficialStory.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
LayoutArticleStory.parameters = {
  ...LayoutArticleStory.parameters,
  docs: {
    ...(_v = LayoutArticleStory.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: '{\n  name: "文章導覽式佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Side>\n          <div \n            style="\n              min-width: 80px;\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #1677ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Side\n          </div>\n        </Side>\n      \n        <Content>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #0958d9;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Content\n          </div>\n        </Content>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Content, Side } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Side>`, `      <div style="`, `        min-width: 80px;`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #1677ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Side`, `      </div>`, `    </Side>`, `  `, `    <Content>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #0958d9;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Content`, `      </div>`, `    </Content>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_x = (_w = LayoutArticleStory.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["LayoutDefaultStory", "LayoutThirdStory", "LayoutLeftDrawerStory", "LayoutRightDrawerStory", "LayoutLeftFixedStory", "LayoutLeftStory", "LayoutOfficialStory", "LayoutArticleStory"];
export {
  LayoutArticleStory,
  LayoutDefaultStory,
  LayoutLeftDrawerStory,
  LayoutLeftFixedStory,
  LayoutLeftStory,
  LayoutOfficialStory,
  LayoutRightDrawerStory,
  LayoutThirdStory,
  __namedExportsOrder,
  Layout_stories as default
};
