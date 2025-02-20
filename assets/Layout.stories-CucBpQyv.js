import{_ as s,a,b as i,c as o,d as r}from"./Side-xmtG1yJO.js";import"./vue.esm-bundler-qCK_iSPY.js";const T={components:{Layout:s,Header:a,Content:i,Side:o,Footer:r},title:"Component/Layout",tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Layout",description:{component:"佈局組件的呈現及說明。"}}}},c={name:"預設項目",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:i,Side:o,Footer:r},setup(){return{args:t}},template:`
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
                        font-size: 24px;
                    "> Content </div>
                </Content>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>['<Layout :className="${args.className}">','  <Content :className="${args.className}">','    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #0958d9;","      color: #fff;","      font-size: 24px;",'    ">',"      content","    </div>","  </Content>","</Layout>"].join(`
`).trim()}}}},l={name:"三段式佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:i,Side:o,Footer:r},setup(){return{args:t}},template:`
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
                        font-size: 24px;
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
                        font-size: 24px;
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
                        font-size: 24px;
                    "> Footer </div>
                </Footer>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;","      font-size: 24px;",'    ">',"      Header","    </div>","  </Header>",`  <Content :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #0958d9;","      color: #fff;","      font-size: 24px;",'    ">',"      Content","    </div>","  </Content>",`  <Footer :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;","      font-size: 24px;",'    ">',"      Footer","    </div>","  </Footer>","</Layout>"].join(`
`).trim()}}}}},d={name:"左側欄三段式佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:i,Side:o,Footer:r},setup(){return{args:t}},template:`
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
                        font-size: 24px;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                            font-size: 24px;
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
                        font-size: 24px;
                    "> Footer </div>
                </Footer>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;","      font-size: 24px;",'    ">',"      Header","    </div>","  </Header>",'  <div style="display: flex; height: 100%;">',`    <Side :className="${e.className}">`,'      <div style="',"        min-width: 80px;","        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Side","      </div>","    </Side>",`    <Content :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;","        font-size: 24px;",'      ">',"        Content","      </div>","    </Content>","  </div>",`  <Footer :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;","      font-size: 24px;",'    ">',"      Footer","    </div>","  </Footer>","</Layout>"].join(`
`).trim()}}}}},f={name:"右側欄三段式佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:i,Side:o,Footer:r},setup(){return{args:t}},template:`
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
                        font-size: 24px;
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
                            font-size: 24px;
                        "> Content </div>
                    </Content>
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                        font-size: 24px;
                    "> Footer </div>
                </Footer>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;","      font-size: 24px;",'    ">',"      Header","    </div>","  </Header>",'  <div style="display: flex; height: 100%;">',`    <Content :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;","        font-size: 24px;",'      ">',"        Content","      </div>","    </Content>",`    <Side :className="${e.className}">`,'      <div style="',"        min-width: 80px;","        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Side","      </div>","    </Side>","  </div>",`  <Footer :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;","      font-size: 24px;",'    ">',"      Footer","    </div>","  </Footer>","</Layout>"].join(`
`).trim()}}}}},m={name:"左側欄固定佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:i,Side:o,Footer:r},setup(){return{args:t}},template:`
            <Layout :className="args.className">
                <Side :className="args.className" >
                    <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                            font-size: 24px;
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
                            font-size: 24px;
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
                        font-size: 24px;
                    "> Footer </div>
                    </Footer>
                </Layout>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Side :className="${e.className}">`,'    <div style="',"      min-width: 80px;","      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #1677ff;","      color: #fff;","      font-size: 24px;",'    ">',"      Side","    </div>","  </Side>",'  <div style="display: flex; height: 100%;">',`    <Header :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Header","      </div>","    </Header>",`    <Content :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #0958d9;","        color: #fff;","        font-size: 24px;",'      ">',"        Content","      </div>","    </Content>",`    <Footer :className="${e.className}">`,'      <div style="',"        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #4096ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Footer","      </div>","    </Footer>","  </div>","</Layout>"].join(`
`).trim()}}}}},u={name:"標準左側佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:i,Side:o,Footer:r},setup(){return{args:t}},template:`
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
                        font-size: 24px;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                                font-size: 24px;
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
                                font-size: 24px;
                            "> Footer </div>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;",'    ">',"      Header","    </div>","  </Header>",'  <div style="display: flex; height: 100%;">',`    <Side :className="${e.className}">`,'      <div style="',"        min-width: 80px;","        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Side","      </div>","    </Side>",'    <div style="display: flex; height: 100%;">',`      <Content :className="${e.className}">`,'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #0958d9;","          color: #fff;","          font-size: 24px;",'        ">',"          Content","        </div>","      </Content>",`      <Footer :className="${e.className}">`,'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #4096ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Footer","        </div>","      </Footer>","    </div>","  </div>","</Layout>"].join(`
`).trim()}}}}},g={name:"官網佈局",args:{className:""},render:t=>({components:{Layout:s,Header:a,Content:i,Side:o,Footer:r},setup(){return{args:t}},template:`
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
                        font-size: 24px;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                                font-size: 24px;
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
                                font-size: 24px;
                            "> Footer </div>
                        </Footer>
                    </Layout>
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
                        "> Side </div>
                    </Side>
                </Layout>
            </Layout>
            `}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return[`<Layout :className="${e.className}">`,`  <Header :className="${e.className}">`,'    <div style="',"      width: 100%;","      height: 100%;","      display: flex;","      justify-content: center;","      align-items: center;","      background: #4096ff;","      color: #fff;","      font-size: 24px;",'    ">',"      Header","    </div>","  </Header>",'  <div style="display: flex; height: 100%;">',`    <Side :className="${e.className}">`,'      <div style="',"        min-width: 80px;","        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Side","      </div>","    </Side>",'    <div style="display: flex; height: 100%;">',`      <Content :className="${e.className}">`,'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #0958d9;","          color: #fff;","          font-size: 24px;",'        ">',"          Content","        </div>","      </Content>",`      <Footer :className="${e.className}">`,'        <div style="',"          width: 100%;","          height: 100%;","          display: flex;","          justify-content: center;","          align-items: center;","          background: #4096ff;","          color: #fff;","          font-size: 24px;",'        ">',"          Footer","        </div>","      </Footer>","    </div>",`    <Side :className="${e.className}">`,'      <div style="',"        min-width: 80px;","        width: 100%;","        height: 100%;","        display: flex;","        justify-content: center;","        align-items: center;","        background: #1677ff;","        color: #fff;","        font-size: 24px;",'      ">',"        Side","      </div>","    </Side>","  </div>","</Layout>"].join(`
`).trim()}}}}};var y,h,p;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
                        font-size: 24px;
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
          return ['<Layout :className="\${args.className}">', '  <Content :className="\${args.className}">', '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #0958d9;', '      color: #fff;', '      font-size: 24px;', '    ">', '      content', '    </div>', '  </Content>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(h=c.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var N,x,v;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
                        font-size: 24px;
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
                        font-size: 24px;
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
                        font-size: 24px;
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Header', '    </div>', '  </Header>', \`  <Content :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #0958d9;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Content', '    </div>', '  </Content>', \`  <Footer :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Footer', '    </div>', '  </Footer>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,w,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
                        font-size: 24px;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                            font-size: 24px;
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
                        font-size: 24px;
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Header', '    </div>', '  </Header>', \`  <div style="display: flex; height: 100%;">\`,
          // 包裹 Side 和 Content 的 div
          \`    <Side :className="\${args.className}">\`, '      <div style="', '        min-width: 80px;', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Side', '      </div>', '    </Side>', \`    <Content :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #0958d9;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Content', '      </div>', '    </Content>', '  </div>',
          // 結束包裹 Side 和 Content 的 div
          \`  <Footer :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Footer', '    </div>', '  </Footer>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var j,F,S;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
                        font-size: 24px;
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
                            font-size: 24px;
                        "> Content </div>
                    </Content>
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                        font-size: 24px;
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Header', '    </div>', '  </Header>', \`  <div style="display: flex; height: 100%;">\`,
          // 包裹 Side 和 Content 的 div
          \`    <Content :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #0958d9;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Content', '      </div>', '    </Content>', \`    <Side :className="\${args.className}">\`, '      <div style="', '        min-width: 80px;', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Side', '      </div>', '    </Side>', '  </div>',
          // 結束包裹 Side 和 Content 的 div
          \`  <Footer :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Footer', '    </div>', '  </Footer>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(F=f.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var b,k,z;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                            font-size: 24px;
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
                            font-size: 24px;
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
                        font-size: 24px;
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Side :className="\${args.className}">\`, '    <div style="', '      min-width: 80px;', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #1677ff;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Side', '    </div>', '  </Side>', \`  <div style="display: flex; height: 100%;">\`, \`    <Header :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #4096ff;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Header', '      </div>', '    </Header>', \`    <Content :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #0958d9;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Content', '      </div>', '    </Content>', \`    <Footer :className="\${args.className}">\`, '      <div style="', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #4096ff;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Footer', '      </div>', '    </Footer>', '  </div>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(z=(k=m.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var H,$,D;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
                        font-size: 24px;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                                font-size: 24px;
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
                                font-size: 24px;
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '    ">', '      Header', '    </div>', '  </Header>', \`  <div style="display: flex; height: 100%;">\`, \`    <Side :className="\${args.className}">\`, '      <div style="', '        min-width: 80px;', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Side', '      </div>', '    </Side>', \`    <div style="display: flex; height: 100%;">\`, \`      <Content :className="\${args.className}">\`, '        <div style="', '          width: 100%;', '          height: 100%;', '          display: flex;', '          justify-content: center;', '          align-items: center;', '          background: #0958d9;', '          color: #fff;', '          font-size: 24px;', '        ">', '          Content', '        </div>', '      </Content>', \`      <Footer :className="\${args.className}">\`, '        <div style="', '          width: 100%;', '          height: 100%;', '          display: flex;', '          justify-content: center;', '          align-items: center;', '          background: #4096ff;', '          color: #fff;', '          font-size: 24px;', '        ">', '          Footer', '        </div>', '      </Footer>', '    </div>', '  </div>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=($=u.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var A,E,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
                        font-size: 24px;
                    "> Header </div>
                </Header>
                <Layout :className="args.className">
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
                                font-size: 24px;
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
                                font-size: 24px;
                            "> Footer </div>
                        </Footer>
                    </Layout>
                    <Side :className="args.className" >
                        <div style="
                            min-width: 80px;
                            width: 100%;
                            height: 100%;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: #1677ff;
                            color: #fff;
                            font-size: 24px;
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
          return [\`<Layout :className="\${args.className}">\`, \`  <Header :className="\${args.className}">\`, '    <div style="', '      width: 100%;', '      height: 100%;', '      display: flex;', '      justify-content: center;', '      align-items: center;', '      background: #4096ff;', '      color: #fff;', '      font-size: 24px;', '    ">', '      Header', '    </div>', '  </Header>', \`  <div style="display: flex; height: 100%;">\`, \`    <Side :className="\${args.className}">\`, '      <div style="', '        min-width: 80px;', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Side', '      </div>', '    </Side>', \`    <div style="display: flex; height: 100%;">\`, \`      <Content :className="\${args.className}">\`, '        <div style="', '          width: 100%;', '          height: 100%;', '          display: flex;', '          justify-content: center;', '          align-items: center;', '          background: #0958d9;', '          color: #fff;', '          font-size: 24px;', '        ">', '          Content', '        </div>', '      </Content>', \`      <Footer :className="\${args.className}">\`, '        <div style="', '          width: 100%;', '          height: 100%;', '          display: flex;', '          justify-content: center;', '          align-items: center;', '          background: #4096ff;', '          color: #fff;', '          font-size: 24px;', '        ">', '          Footer', '        </div>', '      </Footer>', '    </div>', \`    <Side :className="\${args.className}">\`, '      <div style="', '        min-width: 80px;', '        width: 100%;', '        height: 100%;', '        display: flex;', '        justify-content: center;', '        align-items: center;', '        background: #1677ff;', '        color: #fff;', '        font-size: 24px;', '      ">', '        Side', '      </div>', '    </Side>', '  </div>', '</Layout>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(_=(E=g.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const R=["LayoutDefaultStory","LayoutThirdStory","LayoutLeftDrawerStory","LayoutRightDrawerStory","LayoutLeftFixedStory","LayoutLeftStory","LayoutOfficialStory"];export{c as LayoutDefaultStory,d as LayoutLeftDrawerStory,m as LayoutLeftFixedStory,u as LayoutLeftStory,g as LayoutOfficialStory,f as LayoutRightDrawerStory,l as LayoutThirdStory,R as __namedExportsOrder,T as default};
