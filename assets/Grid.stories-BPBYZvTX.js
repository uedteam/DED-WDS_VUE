import{a as r,b as e,_ as l}from"./Column-CpuUa2ar.js";import"./vue.esm-bundler-Db4pcR2I.js";const I={components:{Grid:r,Row:e,Column:l},title:"Component/Grid",component:{Grid:r,Row:e,Column:l},tags:["autodocs"],argTypes:{fluid:{description:"是否使用 100% 寬度",control:{type:"boolean"},table:{category:"Grid"}},gap:{description:"間距",control:{type:"number"},table:{category:"Grid",type:{summary:"4 | 8 | 16 | 24"}}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"Grid"}},justify:{description:"垂直對齊方式",control:{type:"select"},options:["flex-start","center","flex-end","space-between","space-around","space-evenly"],table:{category:"ROW",type:{summary:"flex-start | center | flex-end | space-between | space-around | space-evenly "}}},alignItem:{description:"水平對齊方式",control:{type:"select"},options:["flex-start","center","flex-end","baseline","stretch"],table:{category:"ROW",type:{summary:"flex-start | center | flex-end | baseline | stretch "}}},hasGap:{description:"是否有間距",control:{type:"boolean"},table:{category:"ROW"}},align:{description:"對齊方式",control:{type:"select"},options:["start","center","end"],table:{category:"COLUMN"}},xs:{description:"手機尺寸",control:{type:"select"},options:[1,2,3,4,5,6,7,8,9,10,11,12],table:{category:"COLUMN",type:{summary:" 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12"}}},sm:{description:"平板尺寸",control:{type:"select"},options:[1,2,3,4,5,6,7,8,9,10,11,12],table:{category:"COLUMN",type:{summary:" 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12"}}},md:{description:"桌機尺寸",control:{type:"select"},options:[1,2,3,4,5,6,7,8,9,10,11,12],table:{category:"COLUMN",type:{summary:" 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12"}}},lg:{description:"大桌機尺寸",control:{type:"select"},options:[1,2,3,4,5,6,7,8,9,10,11,12],table:{category:"COLUMN",type:{summary:" 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12"}}},xl:{description:"超大桌機尺寸",control:{type:"select"},options:[1,2,3,4,5,6,7,8,9,10,11,12],table:{category:"COLUMN",type:{summary:" 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12"}}}},parameters:{docs:{title:"Grid",description:{component:"格線系統組件的呈現及說明。"}}}},i={name:"預設項目",args:{fluid:!1,gap:0,className:"",justify:"flex-start",alignItem:"stretch",hasGap:!1,align:"center",xs:12,sm:6,md:4,lg:3,xl:2},render:n=>({components:{Grid:r,Row:e,Column:l},setup(){return{args:n}},template:`
            <Grid :fluid="args.fluid" :className="args.className" :gap="args.gap">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index" 
                        :align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
            `}),parameters:{controls:{},docs:{source:{transform:(n,a)=>{const{args:s}=a;return["<Grid",`  :fluid="${s.fluid}"`,`  :gap="${s.gap}"`,`  :className="${s.className}"`,">","  <Row",`    :justify="${s.justify}"`,`    :alignItem="${s.alignItem}"`,`    :hasGap="${s.hasGap}"`,"  >","    <Column",'      v-for="(index) in 12"','      :key="index"',`      :align="${s.align}"`,`      :xs="${s.xs}"`,`      :sm="${s.sm}"`,`      :md="${s.md}"`,`      :lg="${s.lg}"`,`      :xl="${s.xl}"`,"    >","      <div",'        class="diagonal-background"','        style="border:1px solid #ccc; padding:8px 16px;"',"      >","        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},o={name:"格線系統-4欄",args:{fluid:!1,className:"",justify:"flex-start",alignItem:"stretch",hasGap:!1,align:"center",xs:12,sm:6,md:4,lg:3},render:n=>({components:{Grid:r,Row:e,Column:l},setup(){return{args:n}},template:`
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index"
                            :align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md" :lg="args.lg">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
            `}),parameters:{controls:{},docs:{source:{transform:(n,a)=>{const{args:s}=a;return["<Grid",`  :fluid="${s.fluid}"`,`  :className="${s.className}"`,">","  <Row",`    :justify="${s.justify}"`,`    :alignItem="${s.alignItem}"`,`    :hasGap="${s.hasGap}"`,"  >","    <Column",'      v-for="(index) in 12"','      :key="index"',`      :align="${s.align}"`,`      :xs="${s.xs}"`,`      :sm="${s.sm}"`,`      :md="${s.md}"`,`      :lg="${s.lg}"`,"    >","      <div",'        class="diagonal-background"','        style="border:1px solid #ccc; padding:8px 16px;"',"      >","        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},t={name:"格線系統-3欄",args:{fluid:!1,className:"",justify:"flex-start",alignItem:"stretch",hasGap:!1,align:"center",xs:12,sm:6,md:4},render:n=>({components:{Grid:r,Row:e,Column:l},setup(){return{args:n}},template:`
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index"
                            :align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
            `}),parameters:{controls:{},docs:{source:{transform:(n,a)=>{const{args:s}=a;return["<Grid",`  :fluid="${s.fluid}"`,`  :className="${s.className}"`,">","  <Row",`    :justify="${s.justify}"`,`    :alignItem="${s.alignItem}"`,`    :hasGap="${s.hasGap}"`,"  >","    <Column",'      v-for="(index) in 12"','      :key="index"',`      :align="${s.align}"`,`      :xs="${s.xs}"`,`      :sm="${s.sm}"`,`      :md="${s.md}"`,"    >","      <div",'        class="diagonal-background"','        style="border:1px solid #ccc; padding:8px 16px;"',"      >","        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},d={name:"格線系統-2欄",args:{fluid:!1,className:"",justify:"flex-start",alignItem:"stretch",hasGap:!1,align:"center",xs:12,sm:6},render:n=>({components:{Grid:r,Row:e,Column:l},setup(){return{args:n}},template:`
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index"
                            :align="args.align" :xs="args.xs" :sm="args.sm">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
            `}),parameters:{controls:{include:["fluid","className","justify","align","g","gx","gy","col","sm","md","lg","xl","xxl"]},docs:{source:{transform:(n,a)=>{const{args:s}=a;return["<Grid",`  :fluid="${s.fluid}"`,`  :className="${s.className}"`,">","  <Row",`    :justify="${s.justify}"`,`    :alignItem="${s.alignItem}"`,`    :hasGap="${s.hasGap}"`,"  >","    <Column",'      v-for="(index) in 12"','      :key="index"',`      :align="${s.align}"`,`      :xs="${s.xs}"`,`      :sm="${s.sm}"`,"    >","      <div",'        class="diagonal-background"','        style="border:1px solid #ccc; padding:8px 16px;"',"      >","        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},g={name:"格線系統-1欄",args:{fluid:!1,className:"",justify:"flex-start",alignItem:"stretch",hasGap:!1,align:"center",xs:12},render:n=>({components:{Grid:r,Row:e,Column:l},setup(){return{args:n}},template:`
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index"
                            :align="args.align" :xs="args.xs">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
            `}),parameters:{controls:{include:["fluid","className","justify","align","g","gx","gy","col","sm","md","lg","xl","xxl"]},docs:{source:{transform:(n,a)=>{const{args:s}=a;return["<Grid",`  :fluid="${s.fluid}"`,`  :className="${s.className}"`,">","  <Row",`    :justify="${s.justify}"`,`    :alignItem="${s.alignItem}"`,`    :hasGap="${s.hasGap}"`,"  >","    <Column",'      v-for="(index) in 12"','      :key="index"',`      :align="${s.align}"`,`      :xs="${s.xs}"`,`      :sm="${s.sm}"`,"    >","      <div",'        class="diagonal-background"','        style="border:1px solid #ccc; padding:8px 16px;"',"      >","        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}};var m,u,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    //Grid
    fluid: false,
    gap: 0,
    className: '',
    //Row
    justify: 'flex-start',
    alignItem: 'stretch',
    hasGap: false,
    //Column
    align: 'center',
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2
  },
  render: args => ({
    components: {
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
            <Grid :fluid="args.fluid" :className="args.className" :gap="args.gap">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index" 
                        :align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
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
          return [\`<Grid\`, \`  :fluid="\${args.fluid}"\`, \`  :gap="\${args.gap}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  <Row\`, \`    :justify="\${args.justify}"\`, \`    :alignItem="\${args.alignItem}"\`, \`    :hasGap="\${args.hasGap}"\`, \`  >\`, \`    <Column\`, \`      v-for="(index) in 12"\`, \`      :key="index"\`, \`      :align="\${args.align}"\`, \`      :xs="\${args.xs}"\`, \`      :sm="\${args.sm}"\`, \`      :md="\${args.md}"\`, \`      :lg="\${args.lg}"\`, \`      :xl="\${args.xl}"\`, \`    >\`, \`      <div\`, \`        class="diagonal-background"\`, \`        style="border:1px solid #ccc; padding:8px 16px;"\`, \`      >\`, \`        Column {{index}}\`, \`      </div>\`, \`    </Column>\`, \`  </Row>\`, \`</Grid>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(u=i.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,x,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '格線系統-4欄',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    justify: 'flex-start',
    alignItem: 'stretch',
    hasGap: false,
    //Column
    align: 'center',
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  },
  render: args => ({
    components: {
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
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index"
                            :align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md" :lg="args.lg">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
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
          return [\`<Grid\`, \`  :fluid="\${args.fluid}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  <Row\`, \`    :justify="\${args.justify}"\`, \`    :alignItem="\${args.alignItem}"\`, \`    :hasGap="\${args.hasGap}"\`, \`  >\`, \`    <Column\`, \`      v-for="(index) in 12"\`, \`      :key="index"\`, \`      :align="\${args.align}"\`, \`      :xs="\${args.xs}"\`, \`      :sm="\${args.sm}"\`, \`      :md="\${args.md}"\`, \`      :lg="\${args.lg}"\`, \`    >\`, \`      <div\`, \`        class="diagonal-background"\`, \`        style="border:1px solid #ccc; padding:8px 16px;"\`, \`      >\`, \`        Column {{index}}\`, \`      </div>\`, \`    </Column>\`, \`  </Row>\`, \`</Grid>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,G,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '格線系統-3欄',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    justify: 'flex-start',
    alignItem: 'stretch',
    hasGap: false,
    //Column
    align: 'center',
    xs: 12,
    sm: 6,
    md: 4
  },
  render: args => ({
    components: {
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
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index"
                            :align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
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
          return [\`<Grid\`, \`  :fluid="\${args.fluid}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  <Row\`, \`    :justify="\${args.justify}"\`, \`    :alignItem="\${args.alignItem}"\`, \`    :hasGap="\${args.hasGap}"\`, \`  >\`, \`    <Column\`, \`      v-for="(index) in 12"\`, \`      :key="index"\`, \`      :align="\${args.align}"\`, \`      :xs="\${args.xs}"\`, \`      :sm="\${args.sm}"\`, \`      :md="\${args.md}"\`, \`    >\`, \`      <div\`, \`        class="diagonal-background"\`, \`        style="border:1px solid #ccc; padding:8px 16px;"\`, \`      >\`, \`        Column {{index}}\`, \`      </div>\`, \`    </Column>\`, \`  </Row>\`, \`</Grid>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(C=(G=t.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var $,j,N;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '格線系統-2欄',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    justify: 'flex-start',
    alignItem: 'stretch',
    hasGap: false,
    //Column
    align: 'center',
    xs: 12,
    sm: 6
  },
  render: args => ({
    components: {
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
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index"
                            :align="args.align" :xs="args.xs" :sm="args.sm">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Grid\`, \`  :fluid="\${args.fluid}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  <Row\`, \`    :justify="\${args.justify}"\`, \`    :alignItem="\${args.alignItem}"\`, \`    :hasGap="\${args.hasGap}"\`, \`  >\`, \`    <Column\`, \`      v-for="(index) in 12"\`, \`      :key="index"\`, \`      :align="\${args.align}"\`, \`      :xs="\${args.xs}"\`, \`      :sm="\${args.sm}"\`, \`    >\`, \`      <div\`, \`        class="diagonal-background"\`, \`        style="border:1px solid #ccc; padding:8px 16px;"\`, \`      >\`, \`        Column {{index}}\`, \`      </div>\`, \`    </Column>\`, \`  </Row>\`, \`</Grid>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var h,v,b;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '格線系統-1欄',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    justify: 'flex-start',
    alignItem: 'stretch',
    hasGap: false,
    //Column
    align: 'center',
    xs: 12
  },
  render: args => ({
    components: {
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
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
                    <Column v-for="(index) in 12" :key="index"
                            :align="args.align" :xs="args.xs">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Grid\`, \`  :fluid="\${args.fluid}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  <Row\`, \`    :justify="\${args.justify}"\`, \`    :alignItem="\${args.alignItem}"\`, \`    :hasGap="\${args.hasGap}"\`, \`  >\`, \`    <Column\`, \`      v-for="(index) in 12"\`, \`      :key="index"\`, \`      :align="\${args.align}"\`, \`      :xs="\${args.xs}"\`, \`      :sm="\${args.sm}"\`, \`    >\`, \`      <div\`, \`        class="diagonal-background"\`, \`        style="border:1px solid #ccc; padding:8px 16px;"\`, \`      >\`, \`        Column {{index}}\`, \`      </div>\`, \`    </Column>\`, \`  </Row>\`, \`</Grid>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(v=g.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const k=["GridDefaultStory","Grid4ColumnsStory","Grid3ColumnsStory","Grid2ColumnsStory","Grid1ColumnsStory"];export{g as Grid1ColumnsStory,d as Grid2ColumnsStory,t as Grid3ColumnsStory,o as Grid4ColumnsStory,i as GridDefaultStory,k as __namedExportsOrder,I as default};
