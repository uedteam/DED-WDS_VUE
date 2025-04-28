import{_ as p}from"./Button-DJ2J-Rge.js";import{c as l,d as C,a as D,n as y,r as o,o as m}from"./vue.esm-bundler-C-J3VMH8.js";import{_ as u}from"./CardSimple-DcTggni9.js";import{_ as c}from"./Title-BVnXn5Se.js";import{b as n,_ as h,a as g}from"./Row-f43yCxRo.js";import"./Icon-D1AM0eSE.js";import"./Image-gX1NPPXu.js";const L={class:"ded-card-body"},N={key:1,class:"ded-card-footer"},a={__name:"Card",props:{hasHeaderDivider:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const r=t;return(e,I)=>(m(),l("div",{class:y(["ded-card ded-card-container",{[r.className]:!!r.className}])},[e.$slots.cardHeader?(m(),l("div",{key:0,class:y(["ded-card-header",{"ded-card-header-divider":r.hasHeaderDivider}])},[o(e.$slots,"cardHeader")],2)):C("",!0),D("div",L,[o(e.$slots,"default")]),e.$slots.cardFooter?(m(),l("div",N,[o(e.$slots,"cardFooter")])):C("",!0)],2))}};a.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"hasHeaderDivider",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"cardHeader"},{name:"default"},{name:"cardFooter"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Card/Card.vue"]};const W={components:{Grid:n},title:"Component/Card",component:a,tags:["autodocs"],argTypes:{hasHeaderDivider:{description:"是否有標題分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},cardHeader:{description:"卡片標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},default:{description:"卡片內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},cardFooter:{description:"卡片底部",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Card",description:{component:"卡片組件的呈現及說明。"}},actions:{disabled:!0}}},i={name:"預設項目",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:n,Row:g,Column:h,Button:p,Title:c,CardSimple:u},setup(){return{args:t}},template:`
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
    `}),parameters:{controls:{},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<script setup>",'import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";',"<\/script>","","<template>","<Grid>","  <Row>",'    <Column :xs="4" :md="6" :lg="4">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>","  </Row>","</Grid>","</template>"].filter(Boolean).join(`
`).trim()}}}}},d={name:"垂直佈局",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:n,Row:g,Column:h,Button:p,Title:c,CardSimple:u},setup(){return{args:t}},template:`
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
    `}),parameters:{controls:{exclude:["hasHeaderDivider"]},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<script setup>",'import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";',"<\/script>","","<template>","<Grid>","  <Row hasGap>",'    <Column :xs="4" :md="6" :lg="4">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>",'    <Column :xs="4" :md="6" :lg="4">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>",'    <Column :xs="4" :md="6" :lg="4">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>",'    <Column :xs="4" :md="6" :lg="4">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>","  </Row>","</Grid>","</template>"].filter(Boolean).join(`
`).trim()}}}}},s={name:"水平佈局",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:n,Row:g,Column:h,Button:p,Title:c,CardSimple:u},setup(){return{args:t}},template:`
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
    `}),parameters:{controls:{},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<script setup>",'import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";',"<\/script>","","<template>","<Grid>","  <Row hasGap>",'    <Column :xs="6">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          layout="horizontal"','          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>",'    <Column :xs="6">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          layout="horizontal"','          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>",'    <Column :xs="6">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          layout="horizontal"','          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>",'    <Column :xs="6">',"      <Card",`        ${e.hasHeaderDivider!==void 0?`:hasHeaderDivider="${e.hasHeaderDivider}"`:""}`,`        ${e.className?`className="${e.className}"`:""}`,"      >","        <template #cardHeader>",'          <Title themeColor="primary" :level="2">Header Title</Title>',"        </template>","","        <CardSimple",'          layout="horizontal"','          :hasBorder="false"','          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','          align="left"','          title="Card Title"','          subtitle="Subtitle"','          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"        ></CardSimple>","","        <template #cardFooter>","          <Button",'            themeColor="primary"','            variant="filled"','            suffix="SvgArrowDown"','            size="medium"','            width="fit"','            borderWidth="1px"','            radius="4px"',"          >","            Button","          </Button>","        </template>","      </Card>","    </Column>","  </Row>","</Grid>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var f,v,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  name: "預設項目",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row>\n          <Column :xs="4" :md="6" :lg="4">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2" >Header Title</Title>\n              </template>\n                \n              <CardSimple\n                :hasBorder="false"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n                \n              <template #cardFooter>\n              <Button\n                themeColor="primary"\n                variant="filled"\n                suffix="SvgArrowDown"\n                size="medium"\n                width="fit"\n                borderWidth="1px"\n                radius="4px"\n              >\n                Button\n              </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,S,H;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:'{\n  name: "垂直佈局",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row hasGap>\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["hasHeaderDivider"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row hasGap>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(H=(S=d.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var w,B,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:'{\n  name: "水平佈局",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row hasGap>\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row hasGap>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(T=(B=s.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const R=["CardDefault","CardVerticalDefault","CardHorizontalDefault"];export{i as CardDefault,s as CardHorizontalDefault,d as CardVerticalDefault,R as __namedExportsOrder,W as default};
