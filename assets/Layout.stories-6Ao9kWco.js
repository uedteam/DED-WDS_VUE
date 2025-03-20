import{_ as o,a as i,b as s,c as r,d as a}from"./Side-DaSpjU0X.js";import"./vue.esm-bundler-CbCZpGld.js";const I={components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},title:"Component/Layout",tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Layout",description:{component:"佈局組件的呈現及說明。"}}}},d={name:"預設項目",args:{className:""},render:e=>({components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},setup(){return{args:e}},template:`
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
      </Layout>`}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return["<script setup>",'import { Layout, Content } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Layout",`    ${t.className?`className="${t.className}"`:""}`,"  >","    <Content>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;","        font-size: 24px;",'      ">',"        content","      </div>","    </Content>","  </Layout>","</template>"].filter(Boolean).join(`
`).trim()}}}}},f={name:"三段式佈局",args:{className:""},render:e=>({components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},setup(){return{args:e}},template:`
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
      `}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return["<script setup>",'import { Layout, Header, Content, Footer } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Layout",`    ${t.className?`className="${t.className}"`:""}`,"  >","    <Header>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        content","      </div>","    </Header>","    <Content>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;","        font-size: 24px;",'      ">',"        content","      </div>","    </Content>","    <Footer>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        content","      </div>","    </Footer>","  </Layout>","</template>"].filter(Boolean).join(`
`).trim()}}}}},c={name:"左側欄三段式佈局",args:{className:""},render:e=>({components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},setup(){return{args:e}},template:`
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
`}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return["<script setup>",'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Layout",`    ${t.className?`:className="${t.className}"`:""}`,"  >","    <Header>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Header","      </div>","    </Header>","  ","    <Layout>","      <Side>",'        <div style="',"          min-width: 80px;","          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #1677ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Side","        </div>","      </Side>","  ","      <Content>",'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #0958d9;","          color: #fff;","          font-size: 24px;",'        ">',"          Content","        </div>","      </Content>","    </Layout>","  ","    <Footer>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Footer","      </div>","    </Footer>","  </Layout>","</template>"].filter(Boolean).join(`
`).trim()}}}}},l={name:"右側欄三段式佈局",args:{className:""},render:e=>({components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},setup(){return{args:e}},template:`
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
      </Layout>`}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return["<script setup>",'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Layout",`    ${t.className?`:className="${t.className}"`:""}`,"  >","    <Header>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Header","      </div>","    </Header>","  ","    <Layout>","      <Content>",'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #0958d9;","          color: #fff;","          font-size: 24px;",'        ">',"          Content","        </div>","      </Content>","  ","      <Side>",'        <div style="',"          min-width: 80px;","          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #1677ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Side","        </div>","      </Side>","    </Layout>","  ","    <Footer>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Footer","      </div>","    </Footer>","  </Layout>","</template>"].filter(Boolean).join(`
`).trim()}}}}},u={name:"左側欄固定佈局",args:{className:""},render:e=>({components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},setup(){return{args:e}},template:`
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
      </Layout>`}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return["<script setup>",'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Layout",`    ${t.className?`:className="${t.className}"`:""}`,"  >","    <Side>",'      <div style="',"        min-width: 80px;","        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Side","      </div>","    </Side>","  ","    <Layout>","      <Header>",'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #4096ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Header","        </div>","      </Header>","  ","      <Content>",'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #0958d9;","          color: #fff;","          font-size: 24px;",'        ">',"          Content","        </div>","      </Content>","  ","      <Footer>",'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #4096ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Footer","        </div>","      </Footer>","    </Layout>","  </Layout>","</template>"].filter(Boolean).join(`
`).trim()}}}}},y={name:"標準左側佈局",args:{className:""},render:e=>({components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},setup(){return{args:e}},template:`
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
      </Layout>`}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return["<script setup>",'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Layout",`    ${t.className?`:className="${t.className}"`:""}`,"  >","    <Header>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Header","      </div>","    </Header>","  ","    <Layout>","      <Side>",'        <div style="',"          min-width: 80px;","          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #1677ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Side","        </div>","      </Side>","  ","      <Layout>","        <Content>",'          <div style="',"            width: 100%;","            height: 100%;","            display: flex;","            justify-content: center;","            align-items: center;","            background: #0958d9;","            color: #fff;","            font-size: 24px;",'          ">',"            Content","          </div>","        </Content>","  ","        <Footer>",'          <div style="',"            width: 100%;","            height: 100%;","            display: flex;","            justify-content: center;","            align-items: center;","            background: #4096ff;","            color: #fff;","            font-size: 24px;",'          ">',"            Footer","          </div>","        </Footer>","      </Layout>","    </Layout>","  </Layout>","</template>"].filter(Boolean).join(`
`).trim()}}}}},m={name:"官網佈局",args:{className:""},render:e=>({components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},setup(){return{args:e}},template:`
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
      </Layout>`}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return["<script setup>",'import { Layout, Header, Content, Side, Footer } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Layout",`    ${t.className?`:className="${t.className}"`:""}`,"  >","    <Header>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Header","      </div>","    </Header>","  ","    <Layout>","      <Side>",'        <div style="',"          min-width: 80px;","          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #1677ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Side","        </div>","      </Side>","  ","      <Layout>","        <Content>",'          <div style="',"            width: 100%;","            height: 100%;","            display: flex;","            justify-content: center;","            align-items: center;","            background: #0958d9;","            color: #fff;","            font-size: 24px;",'          ">',"            Content","          </div>","        </Content>","  ","        <Footer>",'          <div style="',"            width: 100%;","            height: 100%;","            display: flex;","            justify-content: center;","            align-items: center;","            background: #4096ff;","            color: #fff;","            font-size: 24px;",'          ">',"            Footer","          </div>","        </Footer>","      </Layout>","  ","      <Side>",'        <div style="',"          min-width: 80px;","          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #1677ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Side","        </div>","      </Side>","    </Layout>","  </Layout>","</template>"].filter(Boolean).join(`
`).trim()}}}}},g={name:"文章導覽式佈局",args:{className:""},render:e=>({components:{Layout:a,Header:r,Content:s,Side:i,Footer:o},setup(){return{args:e}},template:`
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
      </Layout>`}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return["<script setup>",'import { Layout, Content, Side } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Layout",`    ${t.className?`:className="${t.className}"`:""}`,"  >","    <Side>",'      <div style="',"        min-width: 80px;","        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Side","      </div>","    </Side>","  ","    <Content>",'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;","        font-size: 24px;",'      ">',"        Content","      </div>","    </Content>","  </Layout>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var p,h,x;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    className: ""
  },
  render: args => ({
    components: {
      Layout,
      Header,
      Content,
      Side,
      Footer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
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
      </Layout>\`
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
          return [\`<script setup>\`, "import { Layout, Content } from \\"@ded-wds-vue/ui\\";", \`<\/script>\`, "", "<template>", \`  <Layout\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  >\`, \`    <Content>\`, \`      <div style="\`, \`        width: 100%;\`, \`        height: 100%;\`, \`        display: flex;\`, \`        justify-content: center;\`, \`        align-items: center;\`, \`        background: #0958d9;\`, \`        color: #fff;\`, \`        font-size: 24px;\`, \`      ">\`, \`        content\`, \`      </div>\`, \`    </Content>\`, \`  </Layout>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,L,C;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "三段式佈局",
  args: {
    className: ""
  },
  render: args => ({
    components: {
      Layout,
      Header,
      Content,
      Side,
      Footer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
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
      \`
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
          return [\`<script setup>\`, "import { Layout, Header, Content, Footer } from \\"@ded-wds-vue/ui\\";", \`<\/script>\`, "", "<template>", \`  <Layout\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  >\`, \`    <Header>\`, \`      <div style="\`, \`        width: 100%;\`, \`        height: 100%;\`, \`        display: flex;\`, \`        justify-content: center;\`, \`        align-items: center;\`, \`        background: #4096ff;\`, \`        color: #fff;\`, \`        font-size: 24px;\`, \`      ">\`, \`        content\`, \`      </div>\`, \`    </Header>\`, \`    <Content>\`, \`      <div style="\`, \`        width: 100%;\`, \`        height: 100%;\`, \`        display: flex;\`, \`        justify-content: center;\`, \`        align-items: center;\`, \`        background: #0958d9;\`, \`        color: #fff;\`, \`        font-size: 24px;\`, \`      ">\`, \`        content\`, \`      </div>\`, \`    </Content>\`, \`    <Footer>\`, \`      <div style="\`, \`        width: 100%;\`, \`        height: 100%;\`, \`        display: flex;\`, \`        justify-content: center;\`, \`        align-items: center;\`, \`        background: #4096ff;\`, \`        color: #fff;\`, \`        font-size: 24px;\`, \`      ">\`, \`        content\`, \`      </div>\`, \`    </Footer>\`, \`  </Layout>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(C=(L=f.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var w,S,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'{\n  name: "左側欄三段式佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Layout>\n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n      \n          <Content>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #0958d9;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Content\n            </div>\n          </Content>\n        </Layout>\n      \n        <Footer>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Footer\n          </div>\n        </Footer>\n      </Layout>\n`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `    </Layout>`, `  `, `    <Footer>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Footer`, `      </div>`, `    </Footer>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var F,b,k;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:'{\n  name: "右側欄三段式佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Layout>\n          <Content>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #0958d9;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Content\n            </div>\n          </Content>\n      \n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n        </Layout>\n      \n        <Footer>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Footer\n          </div>\n        </Footer>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `  `, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `    </Layout>`, `  `, `    <Footer>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Footer`, `      </div>`, `    </Footer>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var z,N,H;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:'{\n  name: "左側欄固定佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Side>\n          <div \n            style="\n              min-width: 80px;\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #1677ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Side\n          </div>\n        </Side>\n      \n        <Layout>\n          <Header>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #4096ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Header\n            </div>\n          </Header>\n      \n          <Content>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #0958d9;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Content\n            </div>\n          </Content>\n      \n          <Footer>\n            <div \n              style="\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #4096ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Footer\n            </div>\n          </Footer>\n        </Layout>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Side>`, `      <div style="`, `        min-width: 80px;`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #1677ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Side`, `      </div>`, `    </Side>`, `  `, `    <Layout>`, `      <Header>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #4096ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Header`, `        </div>`, `      </Header>`, `  `, `      <Content>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #0958d9;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Content`, `        </div>`, `      </Content>`, `  `, `      <Footer>`, `        <div style="`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #4096ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Footer`, `        </div>`, `      </Footer>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(H=(N=u.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var $,B,D;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:'{\n  name: "標準左側佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Layout>\n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n      \n          <Layout>\n            <Content>\n              <div \n                style="\n                  width: 100%;\n                  height: 100%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background: #0958d9;\n                  color: #fff;\n                  font-size: 24px;\n                "\n              >\n                Content\n              </div>\n            </Content>\n      \n            <Footer>\n              <div \n                style="\n                  width: 100%;\n                  height: 100%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background: #4096ff;\n                  color: #fff;\n                  font-size: 24px;\n                "\n              >\n                Footer\n              </div>\n            </Footer>\n          </Layout>\n        </Layout>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Layout>`, `        <Content>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #0958d9;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Content`, `          </div>`, `        </Content>`, `  `, `        <Footer>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #4096ff;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Footer`, `          </div>`, `        </Footer>`, `      </Layout>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(D=(B=y.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var A,E,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:'{\n  name: "官網佈局",\n  args: {\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Layout,\n      Header,\n      Content,\n      Side,\n      Footer\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Layout :className="args.className">\n        <Header>\n          <div \n            style="\n              width: 100%;\n              height: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              background: #4096ff;\n              color: #fff;\n              font-size: 24px;\n            "\n          >\n            Header\n          </div>\n        </Header>\n      \n        <Layout>\n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n      \n          <Layout>\n            <Content>\n              <div \n                style="\n                  width: 100%;\n                  height: 100%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background: #0958d9;\n                  color: #fff;\n                  font-size: 24px;\n                "\n              >\n                Content\n              </div>\n            </Content>\n      \n            <Footer>\n              <div \n                style="\n                  width: 100%;\n                  height: 100%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background: #4096ff;\n                  color: #fff;\n                  font-size: 24px;\n                "\n              >\n                Footer\n              </div>\n            </Footer>\n          </Layout>\n      \n          <Side>\n            <div \n              style="\n                min-width: 80px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background: #1677ff;\n                color: #fff;\n                font-size: 24px;\n              "\n            >\n              Side\n            </div>\n          </Side>\n        </Layout>\n      </Layout>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'fluid\', \'className\', \'justify\', \'align\', \'g\', \'gx\', \'gy\', \'col\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { Layout, Header, Content, Side, Footer } from \\"@ded-wds-vue/ui\\";", `<\/script>`, "", "<template>", `  <Layout`, `    ${args.className ? `:className="${args.className}"` : ""}`, `  >`, `    <Header>`, `      <div style="`, `        width: 100%;`, `        height: 100%;`, `        display: flex;`, `        justify-content: center;`, `        align-items: center;`, `        background: #4096ff;`, `        color: #fff;`, `        font-size: 24px;`, `      ">`, `        Header`, `      </div>`, `    </Header>`, `  `, `    <Layout>`, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `  `, `      <Layout>`, `        <Content>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #0958d9;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Content`, `          </div>`, `        </Content>`, `  `, `        <Footer>`, `          <div style="`, `            width: 100%;`, `            height: 100%;`, `            display: flex;`, `            justify-content: center;`, `            align-items: center;`, `            background: #4096ff;`, `            color: #fff;`, `            font-size: 24px;`, `          ">`, `            Footer`, `          </div>`, `        </Footer>`, `      </Layout>`, `  `, `      <Side>`, `        <div style="`, `          min-width: 80px;`, `          width: 100%;`, `          height: 100%;`, `          display: flex;`, `          justify-content: center;`, `          align-items: center;`, `          background: #1677ff;`, `          color: #fff;`, `          font-size: 24px;`, `        ">`, `          Side`, `        </div>`, `      </Side>`, `    </Layout>`, `  </Layout>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var O,T,R;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "文章導覽式佈局",
  args: {
    className: ""
  },
  render: args => ({
    components: {
      Layout,
      Header,
      Content,
      Side,
      Footer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
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
      </Layout>\`
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
          return [\`<script setup>\`, "import { Layout, Content, Side } from \\"@ded-wds-vue/ui\\";", \`<\/script>\`, "", "<template>", \`  <Layout\`, \`    \${args.className ? \`:className="\${args.className}"\` : ""}\`, \`  >\`, \`    <Side>\`, \`      <div style="\`, \`        min-width: 80px;\`, \`        width: 100%;\`, \`        height: 100%;\`, \`        display: flex;\`, \`        justify-content: center;\`, \`        align-items: center;\`, \`        background: #1677ff;\`, \`        color: #fff;\`, \`        font-size: 24px;\`, \`      ">\`, \`        Side\`, \`      </div>\`, \`    </Side>\`, \`  \`, \`    <Content>\`, \`      <div style="\`, \`        width: 100%;\`, \`        height: 100%;\`, \`        display: flex;\`, \`        justify-content: center;\`, \`        align-items: center;\`, \`        background: #0958d9;\`, \`        color: #fff;\`, \`        font-size: 24px;\`, \`      ">\`, \`        Content\`, \`      </div>\`, \`    </Content>\`, \`  </Layout>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(R=(T=g.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const J=["LayoutDefaultStory","LayoutThirdStory","LayoutLeftDrawerStory","LayoutRightDrawerStory","LayoutLeftFixedStory","LayoutLeftStory","LayoutOfficialStory","LayoutArticleStory"];export{g as LayoutArticleStory,d as LayoutDefaultStory,c as LayoutLeftDrawerStory,u as LayoutLeftFixedStory,y as LayoutLeftStory,m as LayoutOfficialStory,l as LayoutRightDrawerStory,f as LayoutThirdStory,J as __namedExportsOrder,I as default};
