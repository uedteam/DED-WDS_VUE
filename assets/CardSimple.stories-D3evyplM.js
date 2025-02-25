import{_ as a}from"./CardSimple-3Brs_c4m.js";import{_ as i,a as m,b as u}from"./Column-DlYcvGM0.js";import"./vue.esm-bundler-Suj5BAdg.js";import"./Button-9e4cdx1m.js";import"./Icon-BUi6kykL.js";import"./Title-Ch0LdwRP.js";import"./Image-BXsiEVDd.js";const D={components:{Column:i},title:"Component/Card-Simple",component:a,tags:["autodocs"],argTypes:{layout:{description:"佈局",control:{type:"select"},options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"}}},hasBorder:{description:"是否有邊框",control:{type:"boolean"}},imgSrc:{description:"圖片來源",control:{type:"text"}},buttonName:{description:"按鈕名稱",control:{type:"text"}},align:{description:"對齊方式",control:{type:"select"},options:["left","center","right"],table:{type:{summary:"left | center | right"}}},title:{description:"卡片標題",control:{type:"text"}},subtitle:{description:"副標題",control:{type:"text"}},description:{description:"描述",control:{type:"text"}}},parameters:{docs:{title:"CardSimple",description:{component:"卡片組件的呈現及說明。"}},actions:{disabled:!0}}},n={name:"預設項目",args:{layout:"vertical",hasBorder:!0,imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",align:"left",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."},render:r=>({components:{CardSimple:a,Grid:m,Row:u,Column:i},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:t}=e;return["<script setup>",'import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";','import Grid from "@/ui/layout/Grid/Grid.vue";','import Row from "@/ui/layout/Grid/Row.vue";','import Column from "@/ui/layout/Grid/Column.vue";',"<\/script>","","<template>","  <Grid>","    <Row>",'      <Column :xs="12" :md="6" :lg="4">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,`          ${t.align?`align="${t.align}"`:""}`,`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>","    </Row>","  </Grid>","</template>"].filter(Boolean).join(`
`).trim()}}}}},s={name:"按鈕對齊方式",args:{layout:"vertical",hasBorder:!0,imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sis simply dummy text of the printing"},render:r=>({components:{CardSimple:a,Grid:m,Row:u,Column:i},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["align"]},docs:{source:{transform:(r,e)=>{const{args:t}=e;return["<script setup>",'import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";','import Grid from "@/ui/layout/Grid/Grid.vue";','import Row from "@/ui/layout/Grid/Row.vue";','import Column from "@/ui/layout/Grid/Column.vue";',"<\/script>","","<template>","  <Grid>","    <Row hasGap>",'      <Column :xs="12" :md="6" :lg="4">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,'          align="left"',`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>",'      <Column :xs="12" :md="6" :lg="4">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,'          align="center"',`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>",'      <Column :xs="12" :md="6" :lg="4">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,'          align="right"',`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>","    </Row>","  </Grid>","</template>"].filter(Boolean).join(`
`).trim()}}}}},o={name:"垂直佈局",args:{layout:"vertical",hasBorder:!0,imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",align:"left",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."},render:r=>({components:{CardSimple:a,Grid:m,Row:u,Column:i},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["layout"]},docs:{source:{transform:(r,e)=>{const{args:t}=e;return["<script setup>",'import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";','import Grid from "@/ui/layout/Grid/Grid.vue";','import Row from "@/ui/layout/Grid/Row.vue";','import Column from "@/ui/layout/Grid/Column.vue";',"<\/script>","","<template>","  <Grid>","    <Row hasGap>",'      <Column :xs="12" :md="6" :lg="3">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,`          ${t.align?`align="${t.align}"`:""}`,`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>",'      <Column :xs="12" :md="6" :lg="3">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,`          ${t.align?`align="${t.align}"`:""}`,`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>",'      <Column :xs="12" :md="6" :lg="3">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,`          ${t.align?`align="${t.align}"`:""}`,`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>",'      <Column :xs="12" :md="6" :lg="3">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,`          ${t.align?`align="${t.align}"`:""}`,`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>","    </Row>","  </Grid>","</template>"].filter(Boolean).join(`
`).trim()}}}}},l={name:"水平佈局",args:{layout:"horizontal",imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",align:"left",hasBorder:!0,title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."},render:r=>({components:{CardSimple:a,Grid:m,Row:u,Column:i},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["layout"]},docs:{source:{transform:(r,e)=>{const{args:t}=e;return["<script setup>",'import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";','import Grid from "@/ui/layout/Grid/Grid.vue";','import Row from "@/ui/layout/Grid/Row.vue";','import Column from "@/ui/layout/Grid/Column.vue";',"<\/script>","","<template>","  <Grid>","    <Row hasGap>",'      <Column :xs="6">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,`          ${t.align?`align="${t.align}"`:""}`,`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>",'      <Column :xs="6">',"        <CardSimple",`          ${t.layout?`layout="${t.layout}"`:""}`,`          ${t.hasBorder!==void 0?`:hasBorder="${t.hasBorder}"`:""}`,`          ${t.imgSrc?`imgSrc="${t.imgSrc}"`:""}`,`          ${t.buttonName?`buttonName="${t.buttonName}"`:""}`,`          ${t.align?`align="${t.align}"`:""}`,`          ${t.title?`title="${t.title}"`:""}`,`          ${t.subtitle?`subtitle="${t.subtitle}"`:""}`,`          ${t.description?`description="${t.description}"`:""}`,"        ></CardSimple>","      </Column>","    </Row>","  </Grid>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var d,g,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";\`, \`import Grid from "@/ui/layout/Grid/Grid.vue";\`, \`import Row from "@/ui/layout/Grid/Row.vue";\`, \`import Column from "@/ui/layout/Grid/Column.vue";\`, \`<\/script>\`, '', '<template>', \`  <Grid>\`, \`    <Row>\`, \`      <Column :xs="12" :md="6" :lg="4">\`, \`        <CardSimple\`, \`          \${args.layout ? \`layout="\${args.layout}"\` : ""}\`, \`          \${args.hasBorder !== undefined ? \`:hasBorder="\${args.hasBorder}"\` : ""}\`, \`          \${args.imgSrc ? \`imgSrc="\${args.imgSrc}"\` : ""}\`, \`          \${args.buttonName ? \`buttonName="\${args.buttonName}"\` : ""}\`, \`          \${args.align ? \`align="\${args.align}"\` : ""}\`, \`          \${args.title ? \`title="\${args.title}"\` : ""}\`, \`          \${args.subtitle ? \`subtitle="\${args.subtitle}"\` : ""}\`, \`          \${args.description ? \`description="\${args.description}"\` : ""}\`, \`        ></CardSimple>\`, '      </Column>', '    </Row>', '  </Grid>', '</template>'].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var c,$,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:'{\n  name: "按鈕對齊方式",\n  args: {\n    layout: "vertical",\n    hasBorder: true,\n    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",\n    buttonName: "Button",\n    // align: "left",\n    title: "Card Title",\n    subtitle: "Subtitle",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sis simply dummy text of the printing"\n  },\n  render: args => ({\n    components: {\n      CardSimple,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <Grid fluid>\n                <Row hasGap>\n                    <Column :xs="12" :sm="6" :md="4">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            align="left"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="12" :sm="6" :md="4">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            align="center"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="12" :sm="6" :md="4">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            align="right"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                </Row>\n            </Grid>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: [\'align\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";`, `import Grid from "@/ui/layout/Grid/Grid.vue";`, `import Row from "@/ui/layout/Grid/Row.vue";`, `import Column from "@/ui/layout/Grid/Column.vue";`, `<\/script>`, \'\', \'<template>\', `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="left"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="center"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', `      <Column :xs="12" :md="6" :lg="4">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          align="right"`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', \'    </Row>\', \'  </Grid>\', \'</template>\'].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(b=($=s.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var C,S,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:'{\n  name: "垂直佈局",\n  args: {\n    layout: "vertical",\n    hasBorder: true,\n    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",\n    buttonName: "Button",\n    align: "left",\n    title: "Card Title",\n    subtitle: "Subtitle",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n  },\n  render: args => ({\n    components: {\n      CardSimple,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <Grid>\n                <Row hasGap>\n                    <Column :xs="12" :sm="6" :md="3">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="12" :sm="6" :md="3">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="12" :sm="6" :md="3">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="12" :sm="6" :md="3">\n                        <CardSimple\n                            :layout="args.layout"\n                            :hasBorder="args.hasBorder"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                </Row>\n            </Grid>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: [\'layout\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";`, `import Grid from "@/ui/layout/Grid/Grid.vue";`, `import Row from "@/ui/layout/Grid/Row.vue";`, `import Column from "@/ui/layout/Grid/Column.vue";`, `<\/script>`, \'\', \'<template>\', `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', `      <Column :xs="12" :md="6" :lg="3">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', \'    </Row>\', \'  </Grid>\', \'</template>\'].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var h,B,N;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:'{\n  name: "水平佈局",\n  args: {\n    layout: "horizontal",\n    imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",\n    buttonName: "Button",\n    align: "left",\n    hasBorder: true,\n    title: "Card Title",\n    subtitle: "Subtitle",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n  },\n  render: args => ({\n    components: {\n      CardSimple,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <Grid>\n                <Row hasGap>\n                    <Column :xs="6">\n                        <CardSimple\n                            :layout="args.layout"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :hasBorder="args.hasBorder"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                    <Column :xs="6">\n                        <CardSimple\n                            :layout="args.layout"\n                            :imgSrc="args.imgSrc"\n                            :buttonName="args.buttonName"\n                            :align="args.align"\n                            :hasBorder="args.hasBorder"\n                            :title="args.title"\n                            :subtitle="args.subtitle"\n                            :description="args.description"\n                        ></CardSimple>\n                    </Column>\n                </Row>\n            </Grid>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: [\'layout\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";`, `import Grid from "@/ui/layout/Grid/Grid.vue";`, `import Row from "@/ui/layout/Grid/Row.vue";`, `import Column from "@/ui/layout/Grid/Column.vue";`, `<\/script>`, \'\', \'<template>\', `  <Grid>`, `    <Row hasGap>`, `      <Column :xs="6">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', `      <Column :xs="6">`, `        <CardSimple`, `          ${args.layout ? `layout="${args.layout}"` : ""}`, `          ${args.hasBorder !== undefined ? `:hasBorder="${args.hasBorder}"` : ""}`, `          ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : ""}`, `          ${args.buttonName ? `buttonName="${args.buttonName}"` : ""}`, `          ${args.align ? `align="${args.align}"` : ""}`, `          ${args.title ? `title="${args.title}"` : ""}`, `          ${args.subtitle ? `subtitle="${args.subtitle}"` : ""}`, `          ${args.description ? `description="${args.description}"` : ""}`, `        ></CardSimple>`, \'      </Column>\', \'    </Row>\', \'  </Grid>\', \'</template>\'].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(N=(B=l.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const I=["CardSimpleDefault","CardSimpleAlign","CardHorizontalDefault","CardVerticalDefault"];export{o as CardHorizontalDefault,s as CardSimpleAlign,n as CardSimpleDefault,l as CardVerticalDefault,I as __namedExportsOrder,D as default};
