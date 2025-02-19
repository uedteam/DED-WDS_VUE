import{c as B,a as o,r as l,n as h,o as T}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as m}from"./CardSimple-BcwCPu2y.js";import{_ as p}from"./Button-BCEQhSzR.js";import{_ as u}from"./Title-B1whzWKf.js";import{a as s,b as c,_ as g}from"./Column-Bqa0hHha.js";import"./Image-DUksWo_c.js";import"./Icon-CVEqTX2T.js";import"./iframe-ChCRMyiJ.js";import"../sb-preview/runtime.js";const D={class:"ded-card-body"},L={class:"ded-card-footer"},a={__name:"Card",props:{hasHeaderDivider:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const r=t;return(e,I)=>(T(),B("div",{class:h({"ded-card":!0,"ded-card-container":!0,[r.className]:!!r.className})},[o("div",{class:h({"ded-card-header":!0,"ded-card-header-divider":r.hasHeaderDivider})},[l(e.$slots,"cardHeader")],2),o("div",D,[l(e.$slots,"default")]),o("div",L,[l(e.$slots,"cardFooter")])],2))}};a.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"hasHeaderDivider",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"cardHeader"},{name:"default"},{name:"cardFooter"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Card/Card.vue"]};const R={components:{Grid:s},title:"Component/Card",component:a,tags:["autodocs"],argTypes:{hasHeaderDivider:{description:"是否有標題分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},cardHeader:{description:"卡片標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},default:{description:"卡片內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},cardFooter:{description:"卡片底部",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Card",description:{component:"卡片組件的呈現及說明。"}},actions:{disabled:!0}}},i={name:"預設項目",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:s,Row:c,Column:g,Button:p,Title:u,CardSimple:m},setup(){return{args:t}},template:`
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
            
        `}),parameters:{controls:{},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<Card",`  :hasHeaderDivider="${e.hasHeaderDivider}"`,`  className="${e.className}"`,">","  <template #cardHeader>",'    <Title themeColor="primary" :level="2">Header Title</Title>',"  </template>","","  <CardSimple",'    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','    align="left"','    :hasBorder="false"','    title="Card Title"','    subtitle="Subtitle"','    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"  ></CardSimple>","","  <template #cardFooter>","    <Button",'      themeColor="primary"','      variant="filled"','      suffix="SvgArrowDown"','      size="medium"','      width="fit"','      borderWidth="1px"','      radius="4px"',"    >","      Button","    </Button>","  </template>","</Card>"].join(`
`).trim()}}}}},n={name:"垂直佈局",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:s,Row:c,Column:g,Button:p,Title:u,CardSimple:m},setup(){return{args:t}},template:`
            <Grid>
                <Row hasGap>
                    <Column :xs="12" :md="6" :lg="3">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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

        `}),parameters:{controls:{},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<Card",`  :hasHeaderDivider="${e.hasHeaderDivider}"`,`  className="${e.className}"`,">","  <template #cardHeader>",'    <Title themeColor="primary" :level="2">Header Title</Title>',"  </template>","","  <CardSimple",'    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','    align="left"','    :hasBorder="false"','    title="Card Title"','    subtitle="Subtitle"','    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"  ></CardSimple>","","  <template #cardFooter>","    <Button",'      themeColor="primary"','      variant="filled"','      suffix="SvgArrowDown"','      size="medium"','      width="fit"','      borderWidth="1px"','      radius="4px"',"    >","      Button","    </Button>","  </template>","</Card>"].join(`
`).trim()}}}}},d={name:"水平佈局",args:{hasHeaderDivider:!1,className:"",cardHeader:'<Title themeColor="primary" :level="2" >Header Title</Title>',default:'<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>',cardFooter:'<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>'},render:t=>({components:{Card:a,Grid:s,Row:c,Column:g,Button:p,Title:u,CardSimple:m},setup(){return{args:t}},template:`
            <Grid>
                <Row hasGap>
                    <Column :xs="6">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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

        `}),parameters:{controls:{},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["<Card",`  :hasHeaderDivider="${e.hasHeaderDivider}"`,`  className="${e.className}"`,">","  <template #cardHeader>",'    <Title :level="2">Header Title</Title>',"  </template>","","  <CardSimple",'    layout="horizontal"','    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"','    align="left"','    :hasBorder="false"','    title="Card Title"','    subtitle="Subtitle"','    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."',"  ></CardSimple>","","  <template #cardFooter>","    <Button",'      themeColor="primary"','      variant="filled"','      suffix="SvgArrowDown"','      size="medium"','      width="fit"','      borderWidth="1px"','      radius="4px"',"    >","      Button","    </Button>","  </template>","</Card>"].join(`
`).trim()}}}}};var C,y,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    hasHeaderDivider: false,
    className: '',
    cardHeader: \`<Title themeColor="primary" :level="2" >Header Title</Title>\`,
    default: \`<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>\`,
    cardFooter: \`<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>\`
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
          return [\`<Card\`, \`  :hasHeaderDivider="\${args.hasHeaderDivider}"\`, \`  className="\${args.className}"\`, \`>\`, \`  <template #cardHeader>\`, \`    <Title themeColor="primary" :level="2">Header Title</Title>\`, \`  </template>\`, \`\`, \`  <CardSimple\`, \`    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\`, \`    align="left"\`, \`    :hasBorder="false"\`, \`    title="Card Title"\`, \`    subtitle="Subtitle"\`, \`    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\`, \`  ></CardSimple>\`, \`\`, \`  <template #cardFooter>\`, \`    <Button\`, \`      themeColor="primary"\`, \`      variant="filled"\`, \`      suffix="SvgArrowDown"\`, \`      size="medium"\`, \`      width="fit"\`, \`      borderWidth="1px"\`, \`      radius="4px"\`, \`    >\`, \`      Button\`, \`    </Button>\`, \`  </template>\`, \`</Card>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,v,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "垂直佈局",
  args: {
    hasHeaderDivider: false,
    className: '',
    cardHeader: \`<Title themeColor="primary" :level="2" >Header Title</Title>\`,
    default: \`<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>\`,
    cardFooter: \`<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>\`
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
                <Row hasGap>
                    <Column :xs="12" :md="6" :lg="3">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
          return [\`<Card\`, \`  :hasHeaderDivider="\${args.hasHeaderDivider}"\`, \`  className="\${args.className}"\`, \`>\`, \`  <template #cardHeader>\`, \`    <Title themeColor="primary" :level="2">Header Title</Title>\`, \`  </template>\`, \`\`, \`  <CardSimple\`, \`    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\`, \`    align="left"\`, \`    :hasBorder="false"\`, \`    title="Card Title"\`, \`    subtitle="Subtitle"\`, \`    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\`, \`  ></CardSimple>\`, \`\`, \`  <template #cardFooter>\`, \`    <Button\`, \`      themeColor="primary"\`, \`      variant="filled"\`, \`      suffix="SvgArrowDown"\`, \`      size="medium"\`, \`      width="fit"\`, \`      borderWidth="1px"\`, \`      radius="4px"\`, \`    >\`, \`      Button\`, \`    </Button>\`, \`  </template>\`, \`</Card>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,H,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "水平佈局",
  args: {
    hasHeaderDivider: false,
    className: '',
    cardHeader: \`<Title themeColor="primary" :level="2" >Header Title</Title>\`,
    default: \`<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>\`,
    cardFooter: \`<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>\`
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
                <Row hasGap>
                    <Column :xs="6">
                        <Card
                            :hasHeaderDivider="args.hasHeaderDivider"
                            :className="args.cardHeader"
                        >
                            <template #cardHeader>
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
                                <Title themeColor="primary" :level="2" >Header Title</Title>
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
          return [\`<Card\`, \`  :hasHeaderDivider="\${args.hasHeaderDivider}"\`, \`  className="\${args.className}"\`, \`>\`, \`  <template #cardHeader>\`, \`    <Title :level="2">Header Title</Title>\`, \`  </template>\`, \`\`, \`  <CardSimple\`, \`    layout="horizontal"\`, \`    imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"\`, \`    align="left"\`, \`    :hasBorder="false"\`, \`    title="Card Title"\`, \`    subtitle="Subtitle"\`, \`    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\`, \`  ></CardSimple>\`, \`\`, \`  <template #cardFooter>\`, \`    <Button\`, \`      themeColor="primary"\`, \`      variant="filled"\`, \`      suffix="SvgArrowDown"\`, \`      size="medium"\`, \`      width="fit"\`, \`      borderWidth="1px"\`, \`      radius="4px"\`, \`    >\`, \`      Button\`, \`    </Button>\`, \`  </template>\`, \`</Card>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(w=(H=d.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};const E=["CardDefault","CardVerticalDefault","CardHorizontalDefault"];export{i as CardDefault,d as CardHorizontalDefault,n as CardVerticalDefault,E as __namedExportsOrder,R as default};
