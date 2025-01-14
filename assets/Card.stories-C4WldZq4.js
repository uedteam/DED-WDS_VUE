import{c as T,a as o,r as l,n as g,o as w}from"./vue.esm-bundler-C8tbd0VY.js";import{_ as m}from"./CardSimple-B-PHwKMG.js";import{_ as u}from"./Button-Ck9oqLH6.js";import{_ as p}from"./Title-D3Q4XMVN.js";import{a as s,b as c,_ as h}from"./Column-DYTY-mVX.js";import"./Image-DOhpCG_t.js";import"./Icon-D-NDJAD3.js";import"./iframe-CrLK0dA1.js";import"../sb-preview/runtime.js";const D={class:"ded-card-body"},_={class:"ded-card-footer"},a={__name:"Card",props:{hasHeaderDivider:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const r=t;return(e,L)=>(w(),T("div",{class:g({"ded-card":!0,"ded-card-container":!0,[r.className]:!!r.className})},[o("div",{class:g({"ded-card-header":!0,"ded-card-header-divider":r.hasHeaderDivider})},[l(e.$slots,"cardHeader")],2),o("div",D,[l(e.$slots,"default")]),o("div",_,[l(e.$slots,"cardFooter")])],2))}};a.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"hasHeaderDivider",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"cardHeader"},{name:"default"},{name:"cardFooter"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Card/Card.vue"]};const E={components:{Grid:s},title:"Component/Card",component:a,tags:["autodocs"],argTypes:{hasHeaderDivider:{description:"是否有標題分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},cardHeader:{description:"卡片標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},default:{description:"卡片內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},cardFooter:{description:"卡片底部",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Card",description:{component:"Card 組件的呈現及說明。"}},actions:{disabled:!0}}},i={name:"預設項目",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="chevronDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:s,Row:c,Column:h,Button:u,Title:p,CardSimple:m},setup(){return{args:t}},template:`
            <Grid>
                <Row>
                    <Column :xs="4" :md="6" :lg="4">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title :level="2" >Header Title</Title>
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
                                    suffix="chevronDown"
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
            
        `}),parameters:{controls:{},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<Card",`  :hasHeaderDivider="${e.hasHeaderDivider}"`,`  className="${e.cardHeader}"`,">","  <template #cardHeader>",'    <Title :level="2">Header Title</Title>',"  </template>","","  <CardSimple",'    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','    align="left"','    :hasBorder="false"','    title="Card Title"','    subtitle="Subtitle"','    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"  ></CardSimple>","","  <template #cardFooter>","    <Button",'      themeColor="primary"','      variant="filled"','      suffix="chevronDown"','      size="medium"','      width="fit"','      borderWidth="1px"','      radius="4px"',"    >","      Button","    </Button>","  </template>","</Card>"].join(`
`).trim()}}}}},n={name:"垂直佈局",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="chevronDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:s,Row:c,Column:h,Button:u,Title:p,CardSimple:m},setup(){return{args:t}},template:`
            <Grid>
                <Row>
                    <Column :xs="4" :md="6" :lg="4">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title :level="2" >Header Title</Title>
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
                                    suffix="chevronDown"
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
            
        `}),parameters:{controls:{},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<Card",`  :hasHeaderDivider="${e.hasHeaderDivider}"`,`  className="${e.cardHeader}"`,">","  <template #cardHeader>",'    <Title :level="2">Header Title</Title>',"  </template>","","  <CardSimple",'    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','    align="left"','    :hasBorder="false"','    title="Card Title"','    subtitle="Subtitle"','    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"  ></CardSimple>","","  <template #cardFooter>","    <Button",'      themeColor="primary"','      variant="filled"','      suffix="chevronDown"','      size="medium"','      width="fit"','      borderWidth="1px"','      radius="4px"',"    >","      Button","    </Button>","  </template>","</Card>"].join(`
`).trim()}}}}},d={name:"水平佈局",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="chevronDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:s,Row:c,Column:h,Button:u,Title:p,CardSimple:m},setup(){return{args:t}},template:`
            <Grid>
                <Row>
                    <Column :xs="4" :md="6" :lg="4">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title :level="2" >Header Title</Title>
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
                                    suffix="chevronDown"
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
            
        `}),parameters:{controls:{},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<Card",`  :hasHeaderDivider="${e.hasHeaderDivider}"`,`  className="${e.cardHeader}"`,">","  <template #cardHeader>",'    <Title :level="2">Header Title</Title>',"  </template>","","  <CardSimple",'    layout="horizontal"','    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','    align="left"','    :hasBorder="false"','    title="Card Title"','    subtitle="Subtitle"','    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"  ></CardSimple>","","  <template #cardFooter>","    <Button",'      themeColor="primary"','      variant="filled"','      suffix="chevronDown"','      size="medium"','      width="fit"','      borderWidth="1px"','      radius="4px"',"    >","      Button","    </Button>","  </template>","</Card>"].join(`
`).trim()}}}}};var f,C,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    hasHeaderDivider: false,
    className: '',
    cardHeader: \`<Title :level="2" >Header Title</Title>\`,
    default: \`<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>\`,
    cardFooter: \`<Button themeColor="primary" variant="filled" suffix="chevronDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>\`
  },
  render: args => ({
    components: {
      Card,
      Grid,
      Row,
      Column,
      Button,
      Title,
      CardSimple
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Grid>
                <Row>
                    <Column :xs="4" :md="6" :lg="4">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title :level="2" >Header Title</Title>
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
                                    suffix="chevronDown"
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
          return [\`<Card\`, \`  :hasHeaderDivider="\${args.hasHeaderDivider}"\`, \`  className="\${args.cardHeader}"\`, \`>\`, \`  <template #cardHeader>\`, \`    <Title :level="2">Header Title</Title>\`, \`  </template>\`, \`\`, \`  <CardSimple\`, \`    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\`, \`    align="left"\`, \`    :hasBorder="false"\`, \`    title="Card Title"\`, \`    subtitle="Subtitle"\`, \`    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\`, \`  ></CardSimple>\`, \`\`, \`  <template #cardFooter>\`, \`    <Button\`, \`      themeColor="primary"\`, \`      variant="filled"\`, \`      suffix="chevronDown"\`, \`      size="medium"\`, \`      width="fit"\`, \`      borderWidth="1px"\`, \`      radius="4px"\`, \`    >\`, \`      Button\`, \`    </Button>\`, \`  </template>\`, \`</Card>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var b,v,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "垂直佈局",
  args: {
    hasHeaderDivider: false,
    className: '',
    cardHeader: \`<Title :level="2" >Header Title</Title>\`,
    default: \`<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>\`,
    cardFooter: \`<Button themeColor="primary" variant="filled" suffix="chevronDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>\`
  },
  render: args => ({
    components: {
      Card,
      Grid,
      Row,
      Column,
      Button,
      Title,
      CardSimple
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Grid>
                <Row>
                    <Column :xs="4" :md="6" :lg="4">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title :level="2" >Header Title</Title>
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
                                    suffix="chevronDown"
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
          return [\`<Card\`, \`  :hasHeaderDivider="\${args.hasHeaderDivider}"\`, \`  className="\${args.cardHeader}"\`, \`>\`, \`  <template #cardHeader>\`, \`    <Title :level="2">Header Title</Title>\`, \`  </template>\`, \`\`, \`  <CardSimple\`, \`    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\`, \`    align="left"\`, \`    :hasBorder="false"\`, \`    title="Card Title"\`, \`    subtitle="Subtitle"\`, \`    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\`, \`  ></CardSimple>\`, \`\`, \`  <template #cardFooter>\`, \`    <Button\`, \`      themeColor="primary"\`, \`      variant="filled"\`, \`      suffix="chevronDown"\`, \`      size="medium"\`, \`      width="fit"\`, \`      borderWidth="1px"\`, \`      radius="4px"\`, \`    >\`, \`      Button\`, \`    </Button>\`, \`  </template>\`, \`</Card>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var H,S,B;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "水平佈局",
  args: {
    hasHeaderDivider: false,
    className: '',
    cardHeader: \`<Title :level="2" >Header Title</Title>\`,
    default: \`<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>\`,
    cardFooter: \`<Button themeColor="primary" variant="filled" suffix="chevronDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>\`
  },
  render: args => ({
    components: {
      Card,
      Grid,
      Row,
      Column,
      Button,
      Title,
      CardSimple
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Grid>
                <Row>
                    <Column :xs="4" :md="6" :lg="4">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title :level="2" >Header Title</Title>
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
                                    suffix="chevronDown"
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
          return [\`<Card\`, \`  :hasHeaderDivider="\${args.hasHeaderDivider}"\`, \`  className="\${args.cardHeader}"\`, \`>\`, \`  <template #cardHeader>\`, \`    <Title :level="2">Header Title</Title>\`, \`  </template>\`, \`\`, \`  <CardSimple\`, \`    layout="horizontal"\`, \`    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\`, \`    align="left"\`, \`    :hasBorder="false"\`, \`    title="Card Title"\`, \`    subtitle="Subtitle"\`, \`    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\`, \`  ></CardSimple>\`, \`\`, \`  <template #cardFooter>\`, \`    <Button\`, \`      themeColor="primary"\`, \`      variant="filled"\`, \`      suffix="chevronDown"\`, \`      size="medium"\`, \`      width="fit"\`, \`      borderWidth="1px"\`, \`      radius="4px"\`, \`    >\`, \`      Button\`, \`    </Button>\`, \`  </template>\`, \`</Card>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(B=(S=d.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const V=["CardDefault","CardVerticalDefault","CardHorizontalDefault"];export{i as CardDefault,d as CardHorizontalDefault,n as CardVerticalDefault,V as __namedExportsOrder,E as default};
