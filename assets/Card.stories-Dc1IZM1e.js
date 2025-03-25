import{_ as m}from"./Button-BQvgxunf.js";import{c as B,a as l,r as o,n as g,o as T}from"./vue.esm-bundler-CC1hEtM-.js";import{_ as p}from"./CardSimple-C1sYyYtl.js";import{_ as u}from"./Title-D83mi5Li.js";import{b as n,_ as c,a as h}from"./Row-BNA73MaH.js";import"./Icon-DU5IBFbg.js";import"./Image-CC_2Wkxk.js";const D={class:"ded-card-body"},L={class:"ded-card-footer"},a={__name:"Card",props:{hasHeaderDivider:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const r=t;return(e,N)=>(T(),B("div",{class:g(["ded-card ded-card-container",{[r.className]:!!r.className}])},[l("div",{class:g(["ded-card-header",{"ded-card-header-divider":r.hasHeaderDivider}])},[o(e.$slots,"cardHeader")],2),l("div",D,[o(e.$slots,"default")]),l("div",L,[o(e.$slots,"cardFooter")])],2))}};a.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"hasHeaderDivider",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"cardHeader"},{name:"default"},{name:"cardFooter"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Card/Card.vue"]};const G={components:{Grid:n},title:"Component/Card",component:a,tags:["autodocs"],argTypes:{hasHeaderDivider:{description:"是否有標題分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},cardHeader:{description:"卡片標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},default:{description:"卡片內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},cardFooter:{description:"卡片底部",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Card",description:{component:"卡片組件的呈現及說明。"}},actions:{disabled:!0}}},i={name:"預設項目",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:n,Row:h,Column:c,Button:m,Title:u,CardSimple:p},setup(){return{args:t}},template:`
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
`).trim()}}}}},d={name:"垂直佈局",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:n,Row:h,Column:c,Button:m,Title:u,CardSimple:p},setup(){return{args:t}},template:`
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
`).trim()}}}}},s={name:"水平佈局",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:n,Row:h,Column:c,Button:m,Title:u,CardSimple:p},setup(){return{args:t}},template:`
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
`).trim()}}}}};var C,f,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:'{\n  name: "預設項目",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row>\n          <Column :xs="4" :md="6" :lg="4">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2" >Header Title</Title>\n              </template>\n                \n              <CardSimple\n                :hasBorder="false"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n                \n              <template #cardFooter>\n              <Button\n                themeColor="primary"\n                variant="filled"\n                suffix="SvgArrowDown"\n                size="medium"\n                width="fit"\n                borderWidth="1px"\n                radius="4px"\n              >\n                Button\n              </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,b,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  name: "垂直佈局",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row hasGap>\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="12" :md="6" :lg="3">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["hasHeaderDivider"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row hasGap>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="4" :md="6" :lg="4">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,H,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:'{\n  name: "水平佈局",\n  args: {\n    hasHeaderDivider: false,\n    className: "",\n    cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,\n    default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,\n    cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`\n  },\n  render: args => ({\n    components: {\n      Card,\n      Grid,\n      Row,\n      Column,\n      Button,\n      Title,\n      CardSimple\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid>\n        <Row hasGap>\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n\n          <Column :xs="6">\n            <Card\n              :hasHeaderDivider="args.hasHeaderDivider"\n              :className="args.cardHeader"\n            >\n              <template #cardHeader>\n                <Title themeColor="primary" :level="2">Header Title</Title>\n              </template>\n\n              <CardSimple\n                layout="horizontal"\n                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\n                align="left"\n                :hasBorder="false"\n                title="Card Title"\n                subtitle="Subtitle"\n                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n              ></CardSimple>\n\n              <template #cardFooter>\n                <Button\n                  themeColor="primary"\n                  variant="filled"\n                  suffix="SvgArrowDown"\n                  size="medium"\n                  width="fit"\n                  borderWidth="1px"\n                  radius="4px"\n                >\n                  Button\n                </Button>\n              </template>\n            </Card>\n          </Column>\n        </Row>\n      </Grid>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Card, CardSimple, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<Grid>`, `  <Row hasGap>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `    <Column :xs="6">`, `      <Card`, `        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`, `        ${args.className ? `className="${args.className}"` : ""}`, `      >`, `        <template #cardHeader>`, `          <Title themeColor="primary" :level="2">Header Title</Title>`, `        </template>`, ``, `        <CardSimple`, `          layout="horizontal"`, `          :hasBorder="false"`, `          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`, `          align="left"`, `          title="Card Title"`, `          subtitle="Subtitle"`, `          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`, `        ></CardSimple>`, ``, `        <template #cardFooter>`, `          <Button`, `            themeColor="primary"`, `            variant="filled"`, `            suffix="SvgArrowDown"`, `            size="medium"`, `            width="fit"`, `            borderWidth="1px"`, `            radius="4px"`, `          >`, `            Button`, `          </Button>`, `        </template>`, `      </Card>`, `    </Column>`, `  </Row>`, `</Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(w=(H=s.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};const W=["CardDefault","CardVerticalDefault","CardHorizontalDefault"];export{i as CardDefault,s as CardHorizontalDefault,d as CardVerticalDefault,W as __namedExportsOrder,G as default};
