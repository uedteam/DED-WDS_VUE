import{_ as o}from"./Image-B6uvymUt.js";import{_ as f,a as h,b}from"./Row-Cqxu_pio.js";import"./vue.esm-bundler-DkGXwu1Q.js";const j={title:"Component/Image",component:o,tags:["autodocs"],argTypes:{src:{description:"圖片來源",control:{type:"text"}},alt:{description:"圖片替代文字",control:{type:"text"}},ratio:{description:"圖片比例",control:{type:"select"},options:["1x1","4x3","5x4","16x9"],table:{type:{summary:"1x1 | 4x3 | 5x4 | 16x9"}}},objectFit:{description:"圖片填滿方式",control:{type:"select"},options:["none","cover","contain","fill"],table:{type:{summary:"none | cover | contain | fill"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"圖片",description:{component:"圖片組件的呈現及說明。"}}}},e={name:"預設項目",args:{src:"https://picsum.photos/300/200?random=1",alt:"placeholder",ratio:"1x1",objectFit:"cover",className:""},render:a=>({components:{Image:o,Grid:b,Row:h,Column:f},setup(){return{args:a}},template:`
      <Grid fluid>
        <Row hasGap>
          <Column :xs="12" :sm="6" :md="3">
            <Image
              :src="args.src"
              :alt="args.alt"
              :ratio="args.ratio"
              :objectFit="args.objectFit"
              :className="args.className"
            ></Image>
          </Column>
        </Row>
      </Grid>
    `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:t}=s;return["<script setup>",'import { Image, Grid, Row, Column } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Grid fluid>","    <Row hasGap>",'      <Column :xs="12" :sm="6" :md="3">',"        <Image",`          ${t.src?`src="${t.src}"`:""}`,`          ${t.alt?`alt="${t.alt}"`:""}`,`          ${t.ratio?`ratio="${t.ratio}"`:""}`,`          ${t.objectFit?`objectFit="${t.objectFit}"`:""}`,`          ${t.className?`className="${t.className}"`:""}`,"        ></Image>","      </Column>","    </Row>","  </Grid>","</template>"].filter(Boolean).join(`
`).trim()}}}}},r={name:"圖片比例",args:{src:"https://picsum.photos/300/200?random=1",alt:"placeholder",objectFit:"cover",className:""},render:a=>({components:{Image:o},setup(){return{args:a}},template:`
      <div style="display: flex; gap: 24px;">
        <div style="position: relative; width: fit-content; height: fit-content;">
          <Image
            :src="args.src"
            :alt="args.alt"
            ratio="1x1"
            :objectFit="args.objectFit"
            style="width: 250px"
          ></Image>
          <p
            style="position: absolute; 
             top: 50%; left: 50%;
             transform: translateX(-50%) translateY(-50%);
             font-size: 50px;
             color: white;"
          >
            1:1
          </p>
        </div>

        <div style="position: relative; width: fit-content; height: fit-content;">
          <Image
            :src="args.src"
            :alt="args.alt"
            ratio="4x3"
            :objectFit="args.objectFit"
            style="width: 250px"
          ></Image>
          <p
            style="position: absolute; 
             top: 50%; left: 50%;
             transform: translateX(-50%) translateY(-50%);
             font-size: 50px;
             color: white;"
          >
            4:3
          </p>
        </div>

        <div style="position: relative; width: fit-content; height: fit-content;">
          <Image
            :src="args.src"
            :alt="args.alt"
            ratio="5x4"
            :objectFit="args.objectFit"
            style="width: 250px"
          ></Image>
          <p
            style="position: absolute; 
             top: 50%; left: 50%;
             transform: translateX(-50%) translateY(-50%);
             font-size: 50px;
             color: white;"
          >
            5:4
          </p>
        </div>

        <div style="position: relative; width: fit-content; height: fit-content;">
          <Image
            :src="args.src"
            :alt="args.alt"
            ratio="16x9"
            :objectFit="args.objectFit"
            style="width: 250px"
          ></Image>
          <p
            style="position: absolute; 
             top: 50%; left: 50%;
             transform: translateX(-50%) translateY(-50%);
             font-size: 50px;
             color: white;"
          >
            16:9
          </p>
        </div>
      </div>
    `}),parameters:{controls:{exclude:["ratio"]},docs:{source:{transform:(a,s)=>{const{args:t}=s;return["<script setup>",'import { Image } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Image",`    ${t.src?`src="${t.src}"`:""}`,`    ${t.alt?`alt="${t.alt}"`:""}`,'    ratio="1x1"',`    ${t.objectFit?`objectFit="${t.objectFit}"`:""}`,`    ${t.className?`className="${t.className}"`:""}`,"  ></Image>","  <Image",`    ${t.src?`src="${t.src}"`:""}`,`    ${t.alt?`alt="${t.alt}"`:""}`,'    ratio="4x3"',`    ${t.objectFit?`objectFit="${t.objectFit}"`:""}`,`    ${t.className?`className="${t.className}"`:""}`,"  ></Image>","  <Image",`    ${t.src?`src="${t.src}"`:""}`,`    ${t.alt?`alt="${t.alt}"`:""}`,'    ratio="5x4"',`    ${t.objectFit?`objectFit="${t.objectFit}"`:""}`,`    ${t.className?`className="${t.className}"`:""}`,"  ></Image>","  <Image",`    ${t.src?`src="${t.src}"`:""}`,`    ${t.alt?`alt="${t.alt}"`:""}`,'    ratio="16x9"',`    ${t.objectFit?`objectFit="${t.objectFit}"`:""}`,`    ${t.className?`className="${t.className}"`:""}`,"  ></Image>","</template>"].filter(Boolean).join(`
`).trim()}}}}},n={name:"填滿方式",args:{src:"https://picsum.photos/300/200?random=1",alt:"placeholder",ratio:"16x9",className:""},render:a=>({components:{Image:o},setup(){return{args:a}},template:`
      <div style="display: flex; gap: 24px;">
        <div style="position: relative; width: fit-content; height: fit-content;">
          <Image
            :src="args.src"
            :alt="args.alt"
            :ratio="args.ratio"
            objectFit="cover"
            :class="args.className"
            style="width: 250px"
          ></Image>
          <p
            style="position: absolute; 
             top: 50%; left: 50%;
             transform: translate(-50%, -50%);
             font-size: 50px;
             color: white;"
          >
            cover
          </p>
        </div>

        <div style="position: relative; width: fit-content; height: fit-content;">
          <Image
            :src="args.src"
            :alt="args.alt"
            :ratio="args.ratio"
            objectFit="contain"
            :class="args.className"
            style="width: 250px"
          ></Image>
          <p
            style="position: absolute; 
             top: 50%; left: 50%;
             transform: translate(-50%, -50%);
             font-size: 50px;
             color: white;"
          >
            contain
          </p>
        </div>

        <div style="position: relative; width: fit-content; height: fit-content;">
          <Image
            :src="args.src"
            :alt="args.alt"
            :ratio="args.ratio"
            objectFit="fill"
            :class="args.className"
            style="width: 250px"
          ></Image>
          <p
            style="position: absolute; 
             top: 50%; left: 50%;
             transform: translate(-50%, -50%);
             font-size: 50px;
             color: white;"
          >
            fill
          </p>
        </div>

        <div style="position: relative; width: fit-content; height: fit-content;">
          <Image
            :src="args.src"
            :alt="args.alt"
            :ratio="args.ratio"
            objectFit="none"
            :class="args.className"
            style="width: 250px"
          ></Image>
          <p
            style="position: absolute; 
             top: 50%; left: 50%;
             transform: translate(-50%, -50%);
             font-size: 50px;
             color: white;"
          >
            none
          </p>
        </div>
      </div>
    `}),parameters:{controls:{exclude:["objectFit"]},docs:{source:{transform:(a,s)=>{const{args:t}=s;return["<script setup>",'import { Image } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Image",`    ${t.src?`src="${t.src}"`:""}`,`    ${t.alt?`alt="${t.alt}"`:""}`,`    ${t.ratio?`ratio="${t.ratio}"`:""}`,'    objectFit="cover"',`    ${t.className?`className="${t.className}"`:""}`,"  ></Image>","  <Image",`    ${t.src?`src="${t.src}"`:""}`,`    ${t.alt?`alt="${t.alt}"`:""}`,`    ${t.ratio?`ratio="${t.ratio}"`:""}`,'    objectFit="contain"',`    ${t.className?`className="${t.className}"`:""}`,"  ></Image>","  <Image",`    ${t.src?`src="${t.src}"`:""}`,`    ${t.alt?`alt="${t.alt}"`:""}`,`    ${t.ratio?`ratio="${t.ratio}"`:""}`,'    objectFit="fill"',`    ${t.className?`className="${t.className}"`:""}`,"  ></Image>","  <Image",`    ${t.src?`src="${t.src}"`:""}`,`    ${t.alt?`alt="${t.alt}"`:""}`,`    ${t.ratio?`ratio="${t.ratio}"`:""}`,'    objectFit="none"',`    ${t.className?`className="${t.className}"`:""}`,"  ></Image>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    src: "https://picsum.photos/300/200?random=1",
    alt: "placeholder",
    ratio: "1x1",
    objectFit: "cover",
    className: ""
  },
  render: args => ({
    components: {
      Image,
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
          <Column :xs="12" :sm="6" :md="3">
            <Image
              :src="args.src"
              :alt="args.alt"
              :ratio="args.ratio"
              :objectFit="args.objectFit"
              :className="args.className"
            ></Image>
          </Column>
        </Row>
      </Grid>
    \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Image, Grid, Row, Column } from "@ded-wds-vue/ui";\`, \`<\/script>\`, "", "<template>", \`  <Grid fluid>\`, \`    <Row hasGap>\`, \`      <Column :xs="12" :sm="6" :md="3">\`, \`        <Image\`, \`          \${args.src ? \`src="\${args.src}"\` : ""}\`, \`          \${args.alt ? \`alt="\${args.alt}"\` : ""}\`, \`          \${args.ratio ? \`ratio="\${args.ratio}"\` : ""}\`, \`          \${args.objectFit ? \`objectFit="\${args.objectFit}"\` : ""}\`, \`          \${args.className ? \`className="\${args.className}"\` : ""}\`, \`        ></Image>\`, \`      </Column>\`, \`    </Row>\`, \`  </Grid>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,g,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:'{\n  name: "圖片比例",\n  args: {\n    src: "https://picsum.photos/300/200?random=1",\n    alt: "placeholder",\n    // ratio: \'1x1\',\n    objectFit: "cover",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Image\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; gap: 24px;">\n        <div style="position: relative; width: fit-content; height: fit-content;">\n          <Image\n            :src="args.src"\n            :alt="args.alt"\n            ratio="1x1"\n            :objectFit="args.objectFit"\n            style="width: 250px"\n          ></Image>\n          <p\n            style="position: absolute; \n             top: 50%; left: 50%;\n             transform: translateX(-50%) translateY(-50%);\n             font-size: 50px;\n             color: white;"\n          >\n            1:1\n          </p>\n        </div>\n\n        <div style="position: relative; width: fit-content; height: fit-content;">\n          <Image\n            :src="args.src"\n            :alt="args.alt"\n            ratio="4x3"\n            :objectFit="args.objectFit"\n            style="width: 250px"\n          ></Image>\n          <p\n            style="position: absolute; \n             top: 50%; left: 50%;\n             transform: translateX(-50%) translateY(-50%);\n             font-size: 50px;\n             color: white;"\n          >\n            4:3\n          </p>\n        </div>\n\n        <div style="position: relative; width: fit-content; height: fit-content;">\n          <Image\n            :src="args.src"\n            :alt="args.alt"\n            ratio="5x4"\n            :objectFit="args.objectFit"\n            style="width: 250px"\n          ></Image>\n          <p\n            style="position: absolute; \n             top: 50%; left: 50%;\n             transform: translateX(-50%) translateY(-50%);\n             font-size: 50px;\n             color: white;"\n          >\n            5:4\n          </p>\n        </div>\n\n        <div style="position: relative; width: fit-content; height: fit-content;">\n          <Image\n            :src="args.src"\n            :alt="args.alt"\n            ratio="16x9"\n            :objectFit="args.objectFit"\n            style="width: 250px"\n          ></Image>\n          <p\n            style="position: absolute; \n             top: 50%; left: 50%;\n             transform: translateX(-50%) translateY(-50%);\n             font-size: 50px;\n             color: white;"\n          >\n            16:9\n          </p>\n        </div>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["ratio"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Image } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Image`, `    ${args.src ? `src="${args.src}"` : ""}`, `    ${args.alt ? `alt="${args.alt}"` : ""}`, `    ratio="1x1"`, `    ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></Image>`, `  <Image`, `    ${args.src ? `src="${args.src}"` : ""}`, `    ${args.alt ? `alt="${args.alt}"` : ""}`, `    ratio="4x3"`, `    ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></Image>`, `  <Image`, `    ${args.src ? `src="${args.src}"` : ""}`, `    ${args.alt ? `alt="${args.alt}"` : ""}`, `    ratio="5x4"`, `    ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></Image>`, `  <Image`, `    ${args.src ? `src="${args.src}"` : ""}`, `    ${args.alt ? `alt="${args.alt}"` : ""}`, `    ratio="16x9"`, `    ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></Image>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var d,$,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  name: "填滿方式",\n  args: {\n    src: "https://picsum.photos/300/200?random=1",\n    alt: "placeholder",\n    ratio: "16x9",\n    // objectFit: \'cover\',\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Image\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; gap: 24px;">\n        <div style="position: relative; width: fit-content; height: fit-content;">\n          <Image\n            :src="args.src"\n            :alt="args.alt"\n            :ratio="args.ratio"\n            objectFit="cover"\n            :class="args.className"\n            style="width: 250px"\n          ></Image>\n          <p\n            style="position: absolute; \n             top: 50%; left: 50%;\n             transform: translate(-50%, -50%);\n             font-size: 50px;\n             color: white;"\n          >\n            cover\n          </p>\n        </div>\n\n        <div style="position: relative; width: fit-content; height: fit-content;">\n          <Image\n            :src="args.src"\n            :alt="args.alt"\n            :ratio="args.ratio"\n            objectFit="contain"\n            :class="args.className"\n            style="width: 250px"\n          ></Image>\n          <p\n            style="position: absolute; \n             top: 50%; left: 50%;\n             transform: translate(-50%, -50%);\n             font-size: 50px;\n             color: white;"\n          >\n            contain\n          </p>\n        </div>\n\n        <div style="position: relative; width: fit-content; height: fit-content;">\n          <Image\n            :src="args.src"\n            :alt="args.alt"\n            :ratio="args.ratio"\n            objectFit="fill"\n            :class="args.className"\n            style="width: 250px"\n          ></Image>\n          <p\n            style="position: absolute; \n             top: 50%; left: 50%;\n             transform: translate(-50%, -50%);\n             font-size: 50px;\n             color: white;"\n          >\n            fill\n          </p>\n        </div>\n\n        <div style="position: relative; width: fit-content; height: fit-content;">\n          <Image\n            :src="args.src"\n            :alt="args.alt"\n            :ratio="args.ratio"\n            objectFit="none"\n            :class="args.className"\n            style="width: 250px"\n          ></Image>\n          <p\n            style="position: absolute; \n             top: 50%; left: 50%;\n             transform: translate(-50%, -50%);\n             font-size: 50px;\n             color: white;"\n          >\n            none\n          </p>\n        </div>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["objectFit"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Image } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Image`, `    ${args.src ? `src="${args.src}"` : ""}`, `    ${args.alt ? `alt="${args.alt}"` : ""}`, `    ${args.ratio ? `ratio="${args.ratio}"` : ""}`, `    objectFit="cover"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></Image>`, `  <Image`, `    ${args.src ? `src="${args.src}"` : ""}`, `    ${args.alt ? `alt="${args.alt}"` : ""}`, `    ${args.ratio ? `ratio="${args.ratio}"` : ""}`, `    objectFit="contain"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></Image>`, `  <Image`, `    ${args.src ? `src="${args.src}"` : ""}`, `    ${args.alt ? `alt="${args.alt}"` : ""}`, `    ${args.ratio ? `ratio="${args.ratio}"` : ""}`, `    objectFit="fill"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></Image>`, `  <Image`, `    ${args.src ? `src="${args.src}"` : ""}`, `    ${args.alt ? `alt="${args.alt}"` : ""}`, `    ${args.ratio ? `ratio="${args.ratio}"` : ""}`, `    objectFit="none"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></Image>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(u=($=n.parameters)==null?void 0:$.docs)==null?void 0:u.source}}};const v=["ImageDefault","ImageRatio","ImageFit"];export{e as ImageDefault,n as ImageFit,r as ImageRatio,v as __namedExportsOrder,j as default};
