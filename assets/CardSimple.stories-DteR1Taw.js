import{_ as a}from"./CardSimple-Pp0NQ4W1.js";import{_ as n,a as m,b as u}from"./Column-CpuUa2ar.js";import"./vue.esm-bundler-Db4pcR2I.js";import"./Button-roo16qVU.js";import"./Icon-DbRQxRx8.js";import"./iframe-G7TsRw4U.js";import"../sb-preview/runtime.js";import"./Title-hAQ9A17G.js";import"./Image-DiNgiIDS.js";const L={components:{Column:n},title:"Component/Card-Simple",component:a,tags:["autodocs"],argTypes:{layout:{description:"佈局",control:{type:"select"},options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"}}},hasBorder:{description:"是否有邊框",control:{type:"boolean"}},imgSrc:{description:"圖片來源",control:{type:"text"}},buttonName:{description:"按鈕名稱",control:{type:"text"}},align:{description:"對齊方式",control:{type:"select"},options:["left","center","right"],table:{type:{summary:"left | center | right"}}},title:{description:"卡片標題",control:{type:"text"}},subtitle:{description:"副標題",control:{type:"text"}},description:{description:"描述",control:{type:"text"}}},parameters:{docs:{title:"CardSimple",description:{component:"卡片組件的呈現及說明。"}},actions:{disabled:!0}}},s={name:"預設項目",args:{layout:"vertical",hasBorder:!0,imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",align:"left",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."},render:r=>({components:{CardSimple:a,Grid:m,Row:u,Column:n},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:t}=e;return["<CardSimple",`  layout="${t.layout}"`,`  :hasBorder="${t.hasBorder}"`,`  imgSrc="${t.imgSrc}"`,`  buttonName="${t.buttonName}"`,`  align="${t.align}"`,`  title="${t.title}"`,`  subtitle="${t.subtitle}"`,`  description="${t.description}"`,"></CardSimple>"].join(`
`).trim()}}}}},i={name:"按鈕對齊方式",args:{layout:"vertical",hasBorder:!0,imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sis simply dummy text of the printing"},render:r=>({components:{CardSimple:a,Grid:m,Row:u,Column:n},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["align"]},docs:{source:{transform:(r,e)=>{const{args:t}=e;return["<CardSimple",`  layout="${t.layout}"`,`  :hasBorder="${t.hasBorder}"`,`  imgSrc="${t.imgSrc}"`,`  buttonName="${t.buttonName}"`,'  align="left"',`  title="${t.title}"`,`  subtitle="${t.subtitle}"`,`  description="${t.description}"`,"></CardSimple>","<CardSimple",`  layout="${t.layout}"`,`  :hasBorder="${t.hasBorder}"`,`  imgSrc="${t.imgSrc}"`,`  buttonName="${t.buttonName}"`,'  align="center"',`  title="${t.title}"`,`  subtitle="${t.subtitle}"`,`  description="${t.description}"`,"></CardSimple>","<CardSimple",`  layout="${t.layout}"`,`  :hasBorder="${t.hasBorder}"`,`  imgSrc="${t.imgSrc}"`,`  buttonName="${t.buttonName}"`,'  align="right"',`  title="${t.title}"`,`  subtitle="${t.subtitle}"`,`  description="${t.description}"`,"></CardSimple>"].join(`
`).trim()}}}}},o={name:"垂直佈局",args:{layout:"vertical",hasBorder:!0,imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",align:"left",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."},render:r=>({components:{CardSimple:a,Grid:m,Row:u,Column:n},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["layout"]},docs:{source:{transform:(r,e)=>{const{args:t}=e;return["<Grid>","  <Row hasGap>",'    <Column :xs="12" :sm="6" :md="3">',"      <CardSimple",`        layout="${t.layout}"`,`        :hasBorder="${t.hasBorder}"`,`        imgSrc="${t.imgSrc}"`,`        buttonName="${t.buttonName}"`,`        align="${t.align}"`,`        title="${t.title}"`,`        subtitle="${t.subtitle}"`,`        description="${t.description}"`,"      ></CardSimple>","    </Column>",'    <Column :xs="12" :sm="6" :md="3">',"      <CardSimple",`        layout="${t.layout}"`,`        :hasBorder="${t.hasBorder}"`,`        imgSrc="${t.imgSrc}"`,`        buttonName="${t.buttonName}"`,`        align="${t.align}"`,`        title="${t.title}"`,`        subtitle="${t.subtitle}"`,`        description="${t.description}"`,"      ></CardSimple>","    </Column>",'    <Column :xs="12" :sm="6" :md="3">',"      <CardSimple",`        layout="${t.layout}"`,`        :hasBorder="${t.hasBorder}"`,`        imgSrc="${t.imgSrc}"`,`        buttonName="${t.buttonName}"`,`        align="${t.align}"`,`        title="${t.title}"`,`        subtitle="${t.subtitle}"`,`        description="${t.description}"`,"      ></CardSimple>","    </Column>",'    <Column :xs="12" :sm="6" :md="3">',"      <CardSimple",`        layout="${t.layout}"`,`        :hasBorder="${t.hasBorder}"`,`        imgSrc="${t.imgSrc}"`,`        buttonName="${t.buttonName}"`,`        align="${t.align}"`,`        title="${t.title}"`,`        subtitle="${t.subtitle}"`,`        description="${t.description}"`,"      ></CardSimple>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},l={name:"水平佈局",args:{layout:"horizontal",imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",align:"left",hasBorder:!0,title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."},render:r=>({components:{CardSimple:a,Grid:m,Row:u,Column:n},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["layout"]},docs:{source:{transform:(r,e)=>{const{args:t}=e;return["<Grid>","  <Row hasGap>",'    <Column :xs="6">',"      <CardSimple",`        layout="${t.layout}"`,`        imgSrc="${t.imgSrc}"`,`        buttonName="${t.buttonName}"`,`        align="${t.align}"`,`        :hasBorder="${t.hasBorder}"`,`        title="${t.title}"`,`        subtitle="${t.subtitle}"`,`        description="${t.description}"`,"      ></CardSimple>","    </Column>",'    <Column :xs="6">',"      <CardSimple",`        layout="${t.layout}"`,`        imgSrc="${t.imgSrc}"`,`        buttonName="${t.buttonName}"`,`        align="${t.align}"`,`        :hasBorder="${t.hasBorder}"`,`        title="${t.title}"`,`        subtitle="${t.subtitle}"`,`        description="${t.description}"`,"      ></CardSimple>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}};var g,d,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      CardSimple,
      Grid,
      Row,
      Column
    },
    setup() {
      return {
        args
      };
    },
    template: \`
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
        \`
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
          return [\`<CardSimple\`, \`  layout="\${args.layout}"\`, \`  :hasBorder="\${args.hasBorder}"\`, \`  imgSrc="\${args.imgSrc}"\`, \`  buttonName="\${args.buttonName}"\`, \`  align="\${args.align}"\`, \`  title="\${args.title}"\`, \`  subtitle="\${args.subtitle}"\`, \`  description="\${args.description}"\`, \`></CardSimple>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,b,C;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      CardSimple,
      Grid,
      Row,
      Column
    },
    setup() {
      return {
        args
      };
    },
    template: \`
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
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['align']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<CardSimple\`, \`  layout="\${args.layout}"\`, \`  :hasBorder="\${args.hasBorder}"\`, \`  imgSrc="\${args.imgSrc}"\`, \`  buttonName="\${args.buttonName}"\`, \`  align="left"\`, \`  title="\${args.title}"\`, \`  subtitle="\${args.subtitle}"\`, \`  description="\${args.description}"\`, \`></CardSimple>\`, \`<CardSimple\`, \`  layout="\${args.layout}"\`, \`  :hasBorder="\${args.hasBorder}"\`, \`  imgSrc="\${args.imgSrc}"\`, \`  buttonName="\${args.buttonName}"\`, \`  align="center"\`, \`  title="\${args.title}"\`, \`  subtitle="\${args.subtitle}"\`, \`  description="\${args.description}"\`, \`></CardSimple>\`, \`<CardSimple\`, \`  layout="\${args.layout}"\`, \`  :hasBorder="\${args.hasBorder}"\`, \`  imgSrc="\${args.imgSrc}"\`, \`  buttonName="\${args.buttonName}"\`, \`  align="right"\`, \`  title="\${args.title}"\`, \`  subtitle="\${args.subtitle}"\`, \`  description="\${args.description}"\`, \`></CardSimple>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,y,$;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:'{\n  name: "垂直佈局",\n  args: {\n    layout: "vertical",\n    hasBorder: true,\n    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",\n    buttonName: "Button",\n    align: "left",\n    title: "Card Title",\n    subtitle: "Subtitle",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n  },\n  render: args => ({\n    components: {\n      CardSimple,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <Grid>\n                <Row hasGap>\n                    <Column :xs="12" :sm="6" :md="3">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="12" :sm="6" :md="3">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="12" :sm="6" :md="3">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="12" :sm="6" :md="3">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                </Row>\n            </Grid>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: [\'layout\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<Grid>`, `  <Row hasGap>`, `    <Column :xs="12" :sm="6" :md="3">`, `      <CardSimple`, `        layout="${args.layout}"`, `        :hasBorder="${args.hasBorder}"`, `        imgSrc="${args.imgSrc}"`, `        buttonName="${args.buttonName}"`, `        align="${args.align}"`, `        title="${args.title}"`, `        subtitle="${args.subtitle}"`, `        description="${args.description}"`, `      ></CardSimple>`, `    </Column>`, `    <Column :xs="12" :sm="6" :md="3">`, `      <CardSimple`, `        layout="${args.layout}"`, `        :hasBorder="${args.hasBorder}"`, `        imgSrc="${args.imgSrc}"`, `        buttonName="${args.buttonName}"`, `        align="${args.align}"`, `        title="${args.title}"`, `        subtitle="${args.subtitle}"`, `        description="${args.description}"`, `      ></CardSimple>`, `    </Column>`, `    <Column :xs="12" :sm="6" :md="3">`, `      <CardSimple`, `        layout="${args.layout}"`, `        :hasBorder="${args.hasBorder}"`, `        imgSrc="${args.imgSrc}"`, `        buttonName="${args.buttonName}"`, `        align="${args.align}"`, `        title="${args.title}"`, `        subtitle="${args.subtitle}"`, `        description="${args.description}"`, `      ></CardSimple>`, `    </Column>`, `    <Column :xs="12" :sm="6" :md="3">`, `      <CardSimple`, `        layout="${args.layout}"`, `        :hasBorder="${args.hasBorder}"`, `        imgSrc="${args.imgSrc}"`, `        buttonName="${args.buttonName}"`, `        align="${args.align}"`, `        title="${args.title}"`, `        subtitle="${args.subtitle}"`, `        description="${args.description}"`, `      ></CardSimple>`, `    </Column>`, `  </Row>`, `</Grid>`].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...($=(y=o.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var h,B,N;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      CardSimple,
      Grid,
      Row,
      Column
    },
    setup() {
      return {
        args
      };
    },
    template: \`
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
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['layout']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Grid>\`, \`  <Row hasGap>\`, \`    <Column :xs="6">\`, \`      <CardSimple\`, \`        layout="\${args.layout}"\`, \`        imgSrc="\${args.imgSrc}"\`, \`        buttonName="\${args.buttonName}"\`, \`        align="\${args.align}"\`, \`        :hasBorder="\${args.hasBorder}"\`, \`        title="\${args.title}"\`, \`        subtitle="\${args.subtitle}"\`, \`        description="\${args.description}"\`, \`      ></CardSimple>\`, \`    </Column>\`, \`    <Column :xs="6">\`, \`      <CardSimple\`, \`        layout="\${args.layout}"\`, \`        imgSrc="\${args.imgSrc}"\`, \`        buttonName="\${args.buttonName}"\`, \`        align="\${args.align}"\`, \`        :hasBorder="\${args.hasBorder}"\`, \`        title="\${args.title}"\`, \`        subtitle="\${args.subtitle}"\`, \`        description="\${args.description}"\`, \`      ></CardSimple>\`, \`    </Column>\`, \`  </Row>\`, \`</Grid>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(N=(B=l.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const A=["CardSimpleDefault","CardSimpleAlign","CardHorizontalDefault","CardVerticalDefault"];export{o as CardHorizontalDefault,i as CardSimpleAlign,s as CardSimpleDefault,l as CardVerticalDefault,A as __namedExportsOrder,L as default};
