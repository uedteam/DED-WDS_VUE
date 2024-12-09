import{a as c,r as l,n as d,o as f}from"./vue.esm-bundler-C-bz8AVj.js";const s={__name:"index",props:{className:{type:String,default:""}},setup(t){const n=t;return(e,u)=>(f(),c("div",{class:d({"ded-layout":!0,[n.className]:!!n.className})},[l(e.$slots,"default")],2))}};s.__docgenInfo={exportName:"default",displayName:"Layout",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/index.vue"]};const a={__name:"Header",props:{className:{type:String,default:""}},setup(t){const n=t;return(e,u)=>(f(),c("header",{class:d({"ded-header":!0,[n.className]:!!n.className})},[l(e.$slots,"default")],2))}};a.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/Header.vue"]};const o={__name:"Content",props:{className:{type:String,default:""}},setup(t){const n=t;return(e,u)=>(f(),c("main",{class:d({"ded-content":!0,[n.className]:!!n.className})},[l(e.$slots,"default")],2))}};o.__docgenInfo={exportName:"default",displayName:"Content",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/Content.vue"]};const r={__name:"Footer",props:{className:{type:String,default:""}},setup(t){const n=t;return(e,u)=>(f(),c("footer",{class:d({"ded-footer":!0,[n.className]:!!n.className})},[l(e.$slots,"default")],2))}};r.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/Footer.vue"]};const i={__name:"Side",props:{className:{type:String,default:""}},setup(t){const n=t;return(e,u)=>(f(),c("aside",{class:d({"ded-side":!0,[n.className]:!!n.className})},[l(e.$slots,"default")],2))}};i.__docgenInfo={exportName:"default",displayName:"Side",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Layout/Side.vue"]};const R={components:{Layout:s,Header:a,Content:o,Side:i,Footer:r},title:"Component/Layout",tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Layout",description:{component:"Layout 組件的呈現及說明。"}}}},m={name:"預設項目",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:o,Side:i,Footer:r},setup(){return{args:t}},template:`
            <Layout :className="args.className">
                <Content :className="args.className">
                    <div style="
                    width: 100%;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: #0958d9;
                    color: #fff;
                    "> Content </div>
                </Content>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>['<Layout :className="${args.className}">','  <Content :className="${args.className}">','    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #0958d9;","      color: #fff;",'    ">',"      content","    </div>","  </Content>","</Layout>"].join(`
`).trim()}}}},g={name:"三段式佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:o,Side:i,Footer:r},setup(){return{args:t}},template:`
            <Layout :className="args.className">
                <Header :className="args.className" >
                    <div style="
                    width: 100%;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: #4096ff;
                    color: #fff;
                    "> Header </div>
                </Header>
                <Content :className="args.className">
                    <div style="
                    width: 100%;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: #0958d9;
                    color: #fff;
                    "> Content </div>
                </Content>
                <Footer :className="args.className">
                    <div style="
                    width: 100%;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: #4096ff;
                    color: #fff;
                    "> Footer </div>
                </Footer>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Header","    </div>","  </Header>",`  <Content :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #0958d9;","      color: #fff;",'    ">',"      Content","    </div>","  </Content>",`  <Footer :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Footer","    </div>","  </Footer>","</Layout>"].join(`
`).trim()}}}}},y={name:"左側欄三段式佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:o,Side:i,Footer:r},setup(){return{args:t}},template:`
            <Layout :className="args.className">
                <Header :className="args.className" >
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                    <Content :className="args.className">
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #0958d9;
                            color: #fff;
                        "> Content </div>
                    </Content>
                </Layout>
                <Footer :className="args.className">
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Footer </div>
                </Footer>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Header","    </div>","  </Header>",'  <div style="display: flex; height: 100%;">',`    <Side :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;",'      ">',"        Side","      </div>","    </Side>",`    <Content :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;",'      ">',"        Content","      </div>","    </Content>","  </div>",`  <Footer :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Footer","    </div>","  </Footer>","</Layout>"].join(`
`).trim()}}}}},h={name:"右側欄三段式佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:o,Side:i,Footer:r},setup(){return{args:t}},template:`
            <Layout :className="args.className">
                <Header :className="args.className" >
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Content :className="args.className">
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #0958d9;
                            color: #fff;
                        "> Content </div>
                    </Content>
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                </Layout>
                <Footer :className="args.className">
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Footer </div>
                </Footer>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Header","    </div>","  </Header>",'  <div style="display: flex; height: 100%;">',`    <Content :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;",'      ">',"        Content","      </div>","    </Content>",`    <Side :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;",'      ">',"        Side","      </div>","    </Side>","  </div>",`  <Footer :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Footer","    </div>","  </Footer>","</Layout>"].join(`
`).trim()}}}}},N={name:"左側欄固定佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:o,Side:i,Footer:r},setup(){return{args:t}},template:`
            <Layout :className="args.className">
                <Side :className="args.className" >
                    <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                </Side>
                <Layout :className="args.className">
                    <Header :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #4096ff;
                            color: #fff;
                        "> Header </div>
                    </Header>
                    <Content :className="args.className">
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #0958d9;
                            color: #fff;
                        "> Content </div>
                    </Content>
                    <Footer :className="args.className">
                        <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Footer </div>
                    </Footer>
                </Layout>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Side :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #1677ff;","      color: #fff;",'    ">',"      Side","    </div>","  </Side>",'  <div style="display: flex; height: 100%;">',`    <Header :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;",'      ">',"        Header","      </div>","    </Header>",`    <Content :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;",'      ">',"        Content","      </div>","    </Content>",`    <Footer :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;",'      ">',"        Footer","      </div>","    </Footer>","  </div>","</Layout>"].join(`
`).trim()}}}}},p={name:"標準左側佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:o,Side:i,Footer:r},setup(){return{args:t}},template:`
            <Layout :className="args.className">
                <Header :className="args.className" >
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                    <Layout :className="args.className">
                        <Content :className="args.className">
                            <div style="
                                width: 100%;
                                height: 100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                background: #0958d9;
                                color: #fff;
                            "> Content </div>
                        </Content>
                        <Footer :className="args.className">
                            <div style="
                                width: 100%;
                                height: 100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                background: #4096ff;
                                color: #fff;
                            "> Footer </div>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Header","    </div>","  </Header>",'  <div style="display: flex; height: 100%;">',`    <Side :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;",'      ">',"        Side","      </div>","    </Side>",'    <div style="display: flex; height: 100%;">',`      <Content :className="${e.className}">`,'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #0958d9;","          color: #fff;",'        ">',"          Content","        </div>","      </Content>",`      <Footer :className="${e.className}">`,'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #4096ff;","          color: #fff;",'        ">',"          Footer","        </div>","      </Footer>","    </div>","  </div>","</Layout>"].join(`
`).trim()}}}}},v={name:"官網佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:o,Side:i,Footer:r},setup(){return{args:t}},template:`
            <Layout :className="args.className">
                <Header :className="args.className" >
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                    <Layout :className="args.className">
                        <Content :className="args.className">
                            <div style="
                                width: 100%;
                                height: 100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                background: #0958d9;
                                color: #fff;
                            "> Content </div>
                        </Content>
                        <Footer :className="args.className">
                            <div style="
                                width: 100%;
                                height: 100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                background: #4096ff;
                                color: #fff;
                            "> Footer </div>
                        </Footer>
                    </Layout>
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                </Layout>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Header","    </div>","  </Header>",'  <div style="display: flex; height: 100%;">',`    <Side :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;",'      ">',"        Side","      </div>","    </Side>",'    <div style="display: flex; height: 100%;">',`      <Content :className="${e.className}">`,'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #0958d9;","          color: #fff;",'        ">',"          Content","        </div>","      </Content>",`      <Footer :className="${e.className}">`,'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #4096ff;","          color: #fff;",'        ">',"          Footer","        </div>","      </Footer>","    </div>",`    <Side :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;",'      ">',"        Side","      </div>","    </Side>","  </div>","</Layout>"].join(`
`).trim()}}}}};var x,C,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    className: ''
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
                <Content :className="args.className">
                    <div style="
                    width: 100%;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: #0958d9;
                    color: #fff;
                    "> Content </div>
                </Content>
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
          return ['<Layout :className="\${args.className}">', '  <Content :className="\${args.className}">', '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #0958d9;', '      color: #fff;', '    ">', '      content', '    </div>', '  </Content>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var L,F,j;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '三段式佈局',
  args: {
    className: ''
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
                <Header :className="args.className" >
                    <div style="
                    width: 100%;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: #4096ff;
                    color: #fff;
                    "> Header </div>
                </Header>
                <Content :className="args.className">
                    <div style="
                    width: 100%;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: #0958d9;
                    color: #fff;
                    "> Content </div>
                </Content>
                <Footer :className="args.className">
                    <div style="
                    width: 100%;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: #4096ff;
                    color: #fff;
                    "> Footer </div>
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Header', '    </div>', '  </Header>', \`  <Content :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #0958d9;', '      color: #fff;', '    ">', '      Content', '    </div>', '  </Content>', \`  <Footer :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Footer', '    </div>', '  </Footer>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(j=(F=g.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var k,b,w;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '左側欄三段式佈局',
  args: {
    className: ''
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
                <Header :className="args.className" >
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                    <Content :className="args.className">
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #0958d9;
                            color: #fff;
                        "> Content </div>
                    </Content>
                </Layout>
                <Footer :className="args.className">
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Footer </div>
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Header', '    </div>', '  </Header>', \`  <div style="display: flex; height: 100%;">\`,
          // 包裹 Side 和 Content 的 div
          \`    <Side :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '      ">', '        Side', '      </div>', '    </Side>', \`    <Content :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #0958d9;', '        color: #fff;', '      ">', '        Content', '      </div>', '    </Content>', '  </div>',
          // 結束包裹 Side 和 Content 的 div
          \`  <Footer :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Footer', '    </div>', '  </Footer>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(w=(b=y.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var H,$,_;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '右側欄三段式佈局',
  args: {
    className: ''
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
                <Header :className="args.className" >
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Content :className="args.className">
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #0958d9;
                            color: #fff;
                        "> Content </div>
                    </Content>
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                </Layout>
                <Footer :className="args.className">
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Footer </div>
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Header', '    </div>', '  </Header>', \`  <div style="display: flex; height: 100%;">\`,
          // 包裹 Side 和 Content 的 div
          \`    <Content :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #0958d9;', '        color: #fff;', '      ">', '        Content', '      </div>', '    </Content>', \`    <Side :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '      ">', '        Side', '      </div>', '    </Side>', '  </div>',
          // 結束包裹 Side 和 Content 的 div
          \`  <Footer :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Footer', '    </div>', '  </Footer>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(_=($=h.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var D,E,A;N.parameters={...N.parameters,docs:{...(D=N.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '左側欄固定佈局',
  args: {
    className: ''
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
                <Side :className="args.className" >
                    <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                </Side>
                <Layout :className="args.className">
                    <Header :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #4096ff;
                            color: #fff;
                        "> Header </div>
                    </Header>
                    <Content :className="args.className">
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #0958d9;
                            color: #fff;
                        "> Content </div>
                    </Content>
                    <Footer :className="args.className">
                        <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Footer </div>
                    </Footer>
                </Layout>
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Side :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #1677ff;', '      color: #fff;', '    ">', '      Side', '    </div>', '  </Side>', \`  <div style="display: flex; height: 100%;">\`, \`    <Header :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #4096ff;', '        color: #fff;', '      ">', '        Header', '      </div>', '    </Header>', \`    <Content :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #0958d9;', '        color: #fff;', '      ">', '        Content', '      </div>', '    </Content>', \`    <Footer :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #4096ff;', '        color: #fff;', '      ">', '        Footer', '      </div>', '    </Footer>', '  </div>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(A=(E=N.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var B,U,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '標準左側佈局',
  args: {
    className: ''
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
                <Header :className="args.className" >
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                    <Layout :className="args.className">
                        <Content :className="args.className">
                            <div style="
                                width: 100%;
                                height: 100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                background: #0958d9;
                                color: #fff;
                            "> Content </div>
                        </Content>
                        <Footer :className="args.className">
                            <div style="
                                width: 100%;
                                height: 100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                background: #4096ff;
                                color: #fff;
                            "> Footer </div>
                        </Footer>
                    </Layout>
                </Layout>
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Header', '    </div>', '  </Header>', \`  <div style="display: flex; height: 100%;">\`, \`    <Side :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '      ">', '        Side', '      </div>', '    </Side>', \`    <div style="display: flex; height: 100%;">\`, \`      <Content :className="\${args.className}">\`, '        <div style="', '          width: 100%;', '          height: 100%;', '          display: flex;', '          justify-content: center;', '          align-items: center;', '          background: #0958d9;', '          color: #fff;', '        ">', '          Content', '        </div>', '      </Content>', \`      <Footer :className="\${args.className}">\`, '        <div style="', '          width: 100%;', '          height: 100%;', '          display: flex;', '          justify-content: center;', '          align-items: center;', '          background: #4096ff;', '          color: #fff;', '        ">', '          Footer', '        </div>', '      </Footer>', '    </div>', '  </div>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,I,O;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '官網佈局',
  args: {
    className: ''
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
                <Header :className="args.className" >
                    <div style="
                        width: 100%;
                        height: 100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #4096ff;
                        color: #fff;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                    <Layout :className="args.className">
                        <Content :className="args.className">
                            <div style="
                                width: 100%;
                                height: 100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                background: #0958d9;
                                color: #fff;
                            "> Content </div>
                        </Content>
                        <Footer :className="args.className">
                            <div style="
                                width: 100%;
                                height: 100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                background: #4096ff;
                                color: #fff;
                            "> Footer </div>
                        </Footer>
                    </Layout>
                    <Side :className="args.className" >
                        <div style="
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                        "> Side </div>
                    </Side>
                </Layout>
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Header', '    </div>', '  </Header>', \`  <div style="display: flex; height: 100%;">\`, \`    <Side :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '      ">', '        Side', '      </div>', '    </Side>', \`    <div style="display: flex; height: 100%;">\`, \`      <Content :className="\${args.className}">\`, '        <div style="', '          width: 100%;', '          height: 100%;', '          display: flex;', '          justify-content: center;', '          align-items: center;', '          background: #0958d9;', '          color: #fff;', '        ">', '          Content', '        </div>', '      </Content>', \`      <Footer :className="\${args.className}">\`, '        <div style="', '          width: 100%;', '          height: 100%;', '          display: flex;', '          justify-content: center;', '          align-items: center;', '          background: #4096ff;', '          color: #fff;', '        ">', '          Footer', '        </div>', '      </Footer>', '    </div>', \`    <Side :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '      ">', '        Side', '      </div>', '    </Side>', '  </div>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(O=(I=v.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const z=["LayoutDefaultStory","LayoutThirdStory","LayoutLeftDrawerStory","LayoutRightDrawerStory","LayoutLeftFixedStory","LayoutLeftStory","LayoutOfficialStory"];export{m as LayoutDefaultStory,y as LayoutLeftDrawerStory,N as LayoutLeftFixedStory,p as LayoutLeftStory,v as LayoutOfficialStory,h as LayoutRightDrawerStory,g as LayoutThirdStory,z as __namedExportsOrder,R as default};
