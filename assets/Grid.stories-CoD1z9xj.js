import{e as x,c as p,r as y,n as $,o as v}from"./vue.esm-bundler-6KMnbbOi.js";const C="ded-",t={__name:"Grid",props:{size:{type:String,required:!1,default:"",validator:n=>["sm","md","lg","xl","xxl"].includes(n)},fluid:{type:Boolean,required:!1,default:!1},className:{type:String,default:""}},setup(n){const e=n,l=x(()=>({[`${C}container${e.size?"-"+e.size:""}`]:!e.fluid,[`${C}container-fluid`]:e.fluid,[e.className]:!!e.className}));return(u,r)=>(v(),p("div",{class:$(l.value)},[y(u.$slots,"default")],2))}};t.__docgenInfo={exportName:"default",displayName:"Grid",description:"",tags:{},props:[{name:"size",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'},values:["sm","md","lg","xl","xxl"]},{name:"fluid",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/layout/Grid/Grid.vue"]};const a="ded-",i={__name:"Row",props:{align:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSm:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignMd:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignLg:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignXl:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignXxl:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},justify:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifySm:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifyMd:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifyLg:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifyXl:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifyXxl:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContent:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentSm:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentMd:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentLg:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentXl:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentXxl:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},g:{type:String,required:!1,validator:n=>["0","1","2","3","4","5"].includes(n)},gx:{type:String,required:!1,validator:n=>["0","1","2","3","4","5"].includes(n)},gy:{type:String,required:!1,validator:n=>["0","1","2","3","4","5"].includes(n)},className:{type:String,default:""}},setup(n){const e=n,l=x(()=>({[`${a}align-items-${e.align}`]:e.align,[`${a}align-items-sm-${e.alignSm}`]:e.alignSm,[`${a}align-items-md-${e.alignMd}`]:e.alignMd,[`${a}align-items-lg-${e.alignLg}`]:e.alignLg,[`${a}align-items-xl-${e.alignXl}`]:e.alignXl,[`${a}align-items-xxl-${e.alignXxl}`]:e.alignXxl,[`${a}justify-content-${e.justify}`]:e.justify,[`${a}justify-content-sm-${e.justifySm}`]:e.justifySm,[`${a}justify-content-md-${e.justifyMd}`]:e.justifyMd,[`${a}justify-content-lg-${e.justifyLg}`]:e.justifyLg,[`${a}justify-content-xl-${e.justifyXl}`]:e.justifyXl,[`${a}justify-content-xxl-${e.justifyXxl}`]:e.justifyXxl,[`${a}align-content-${e.alignContent}`]:e.alignContent,[`${a}align-content-sm-${e.alignContentSm}`]:e.alignContentSm,[`${a}align-content-md-${e.alignContentMd}`]:e.alignContentMd,[`${a}align-content-lg-${e.alignContentLg}`]:e.alignContentLg,[`${a}align-content-xl-${e.alignContentXl}`]:e.alignContentXl,[`${a}align-content-xxl-${e.alignContentXxl}`]:e.alignContentXxl,[`${a}g-${e.g}`]:e.g,[`${a}gx-${e.gx}`]:e.gx,[`${a}gy-${e.gy}`]:e.gy,[e.className]:!!e.className}));return(u,r)=>(v(),p("div",{class:$(["ded-row",l.value])},[y(u.$slots,"default")],2))}};i.__docgenInfo={exportName:"default",displayName:"Row",description:"",tags:{},props:[{name:"align",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"justify",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifySm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifyMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifyLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifyXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifyXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContent",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentSm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"g",type:{name:"string"},required:!1,values:["0","1","2","3","4","5"]},{name:"gx",type:{name:"string"},required:!1,values:["0","1","2","3","4","5"]},{name:"gy",type:{name:"string"},required:!1,values:["0","1","2","3","4","5"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/layout/Grid/Row.vue"]};const s="ded-",d={__name:"Column",props:{col:{type:[Number,String],required:!1},sm:{type:[Number,String],required:!1},md:{type:[Number,String],required:!1},lg:{type:[Number,String],required:!1},xl:{type:[Number,String],required:!1},xxl:{type:[Number,String],required:!1},alignSelf:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfSm:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfMd:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfLg:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfXl:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfXxl:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},order:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderSm:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderMd:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderLg:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderXl:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderXxl:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},className:{type:String,default:""}},setup(n){const e=n;function l(r){return r?r||parseInt(r)>0&&parseInt(r)<13:!1}const u=x(()=>({[`${s}col`]:!l(e.col)&&!e.sm&&!e.md&&!e.lg&&!e.xl&&!e.xxl,[`${s}col-${e.col}`]:l(e.col),[`${s}col-sm-${e.sm}`]:l(e.sm),[`${s}col-md-${e.md}`]:l(e.md),[`${s}col-lg-${e.lg}`]:l(e.lg),[`${s}col-xl-${e.xl}`]:l(e.xl),[`${s}col-xxl-${e.xxl}`]:l(e.xxl),[`${s}align-self-${e.alignSelf}`]:e.alignSelf,[`${s}align-self-sm-${e.alignSelfSm}`]:e.alignSelfSm,[`${s}align-self-md-${e.alignSelfMd}`]:e.alignSelfMd,[`${s}align-self-lg-${e.alignSelfLg}`]:e.alignSelfLg,[`${s}align-self-xl-${e.alignSelfXl}`]:e.alignSelfXl,[`${s}align-self-xxl-${e.alignSelfXxl}`]:e.alignSelfXxl,[`${s}order-${e.order}`]:e.order,[`${s}order-${e.orderSm}`]:e.orderSm,[`${s}order-${e.orderMd}`]:e.orderMd,[`${s}order-${e.orderLg}`]:e.orderLg,[`${s}order-${e.orderXl}`]:e.orderXl,[`${s}order-${e.orderXxl}`]:e.orderXxl,[e.className]:!!e.className}));return(r,M)=>(v(),p("div",{class:$(u.value)},[y(r.$slots,"default")],2))}};d.__docgenInfo={exportName:"default",displayName:"Column",description:"",tags:{},props:[{name:"col",type:{name:"number|string"},required:!1},{name:"sm",type:{name:"number|string"},required:!1},{name:"md",type:{name:"number|string"},required:!1},{name:"lg",type:{name:"number|string"},required:!1},{name:"xl",type:{name:"number|string"},required:!1},{name:"xxl",type:{name:"number|string"},required:!1},{name:"alignSelf",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfSm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"order",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderSm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/layout/Grid/Column.vue"]};const E={components:{Grid:t,Row:i,Column:d},title:"Component/Grid",component:{Grid:t,Row:i,Column:d},tags:["autodocs"],argTypes:{fluid:{description:"將元件寬度設置為 100%，以填滿父級容器",control:{type:"boolean"},table:{category:"Grid"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"Grid"}},align:{description:"align-items 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"ROW"}},justify:{description:"justify-content 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"ROW"}},g:{description:"間距設定",control:{type:"select",labels:{0:"0 (0rem)",1:"1 (0.25rem)",2:"2 (0.5rem)",3:"3 (1rem)",4:"4 (1.5rem)",5:"5 (3rem)"}},options:["0","1","2","3","4","5"],table:{category:"ROW"}},gx:{description:"水平間距設定",control:{type:"select",labels:{0:"0 (0rem)",1:"1 (0.25rem)",2:"2 (0.5rem)",3:"3 (1rem)",4:"4 (1.5rem)",5:"5 (3rem)"}},options:["0","1","2","3","4","5"],table:{category:"ROW"}},gy:{description:"垂直間距設定",control:{type:"select",labels:{0:"0 (0rem)",1:"1 (0.25rem)",2:"2 (0.5rem)",3:"3 (1rem)",4:"4 (1.5rem)",5:"5 (3rem)"}},options:["0","1","2","3","4","5"],table:{category:"ROW"}},col:{description:"column 長度",control:{type:"select"},options:["1","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"COLUMN"}},sm:{description:"column 長度斷點 sm 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"COLUMN"}},md:{description:"column 長度斷點 md 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"COLUMN"}},lg:{description:"column 長度斷點 lg 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"COLUMN"}},xl:{description:"column 長度斷點 xl 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"COLUMN"}},xxl:{description:"column 長度斷點 xxl 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"COLUMN"}}},parameters:{docs:{title:"Grid",description:{component:"Grid 組件的呈現及說明。"}}}},g={name:"預設項目",args:{fluid:!1,className:"",g:"0",gx:"",gy:"3",align:"stretch",justify:"start",col:"12",sm:"6",md:"4",lg:"3",xl:"2",xxl:""},render:n=>({components:{Grid:t,Row:i,Column:d},setup(){return{args:n}},template:`
            <Grid :fluid="args.fluid" :className="args.className">
                <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                    <Column v-for="(index) in 12" :key="index" 
                        :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                            Column {{index}}
                        </div>
                    </Column>
                </Row>
            </Grid>
            `}),parameters:{controls:{include:["fluid","className","justify","align","g","gx","gy","col","sm","md","lg","xl","xxl"]},docs:{source:{transform:(n,e)=>{const{args:l}=e;return["<Grid",`  :fluid="${l.fluid}"`,`  className="${l.className}"`,">","  <Row",`    g="${l.g}"`,`    gx="${l.gx}"`,`    gy="${l.gy}"`,`    justify="${l.start}"`,`    align="${l.align}"`,"  >",'    <Column v-for="(index) in 12" :key="index"',`      col="${l.col}"`,`      sm="${l.sm}"`,`      md="${l.md}"`,`      lg="${l.lg}"`,`      xl="${l.xl}"`,`      xxl="${l.xxl}"`,"    >",'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',"        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},o={name:"格線系統-4欄",args:{fluid:!1,className:"",g:"3",gx:"",gy:"0",align:"stretch",justify:"start",col:"12",sm:"6",md:"4",lg:"3",xl:"",xxl:""},render:n=>({components:{Grid:t,Row:i,Column:d},setup(){return{args:n}},template:`
                <Grid :fluid="args.fluid" :className="args.className">
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                        <Column v-for="(index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                                Column {{ index }}
                            </div>
                        </Column>
                    </Row>
                </Grid>
            `}),parameters:{controls:{include:["fluid","className","justify","align","g","gx","gy","col","sm","md","lg","xl","xxl"]},docs:{source:{transform:(n,e)=>{const{args:l}=e;return["<Grid",`  :fluid="${l.fluid}"`,`  className="${l.className}"`,">","  <Row",`    g="${l.g}"`,`    gx="${l.gx}"`,`    gy="${l.gy}"`,`    justify="${l.start}"`,`    align="${l.align}"`,"  >",'    <Column v-for="(index) in 12" :key="index"',`      col="${l.col}"`,`      sm="${l.sm}"`,`      md="${l.md}"`,`      lg="${l.lg}"`,`      xl="${l.xl}"`,`      xxl="${l.xxl}"`,"    >",'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',"        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},c={name:"格線系統-3欄",args:{fluid:!1,className:"",g:"3",gx:"",gy:"0",align:"stretch",justify:"start",col:"12",sm:"6",md:"4",lg:"",xl:"",xxl:""},render:n=>({components:{Grid:t,Row:i,Column:d},setup(){return{args:n}},template:`
                <Grid :fluid="args.fluid" :className="args.className">
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                        <Column v-for="(index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                                Column {{ index }}
                            </div>
                        </Column>
                    </Row>
                </Grid>
            `}),parameters:{controls:{include:["fluid","className","justify","align","g","gx","gy","col","sm","md","lg","xl","xxl"]},docs:{source:{transform:(n,e)=>{const{args:l}=e;return["<Grid",`  :fluid="${l.fluid}"`,`  className="${l.className}"`,">","  <Row",`    g="${l.g}"`,`    gx="${l.gx}"`,`    gy="${l.gy}"`,`    justify="${l.start}"`,`    align="${l.align}"`,"  >",'    <Column v-for="(index) in 12" :key="index"',`      col="${l.col}"`,`      sm="${l.sm}"`,`      md="${l.md}"`,`      lg="${l.lg}"`,`      xl="${l.xl}"`,`      xxl="${l.xxl}"`,"    >",'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',"        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},m={name:"格線系統-2欄",args:{fluid:!1,className:"",g:"3",gx:"",gy:"0",align:"stretch",justify:"start",col:"12",sm:"6",md:"",lg:"",xl:"",xxl:""},render:n=>({components:{Grid:t,Row:i,Column:d},setup(){return{args:n}},template:`
                <Grid :fluid="args.fluid" :className="args.className">
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                        <Column v-for="(index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                                Column {{ index }}
                            </div>
                        </Column>
                    </Row>
                </Grid>
            `}),parameters:{controls:{include:["fluid","className","justify","align","g","gx","gy","col","sm","md","lg","xl","xxl"]},docs:{source:{transform:(n,e)=>{const{args:l}=e;return["<Grid",`  :fluid="${l.fluid}"`,`  className="${l.className}"`,">","  <Row",`    g="${l.g}"`,`    gx="${l.gx}"`,`    gy="${l.gy}"`,`    justify="${l.start}"`,`    align="${l.align}"`,"  >",'    <Column v-for="(index) in 12" :key="index"',`      col="${l.col}"`,`      sm="${l.sm}"`,`      md="${l.md}"`,`      lg="${l.lg}"`,`      xl="${l.xl}"`,`      xxl="${l.xxl}"`,"    >",'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',"        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}},f={name:"格線系統-1欄",args:{fluid:!1,className:"",g:"3",gx:"",gy:"0",align:"stretch",justify:"start",col:"12",sm:"",md:"",lg:"",xl:"",xxl:""},render:n=>({components:{Grid:t,Row:i,Column:d},setup(){return{args:n}},template:`
                <Grid :fluid="args.fluid" :className="args.className">
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                        <Column v-for="(index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                                Column {{ index }}
                            </div>
                        </Column>
                    </Row>
                </Grid>
            `}),parameters:{controls:{include:["fluid","className","justify","align","g","gx","gy","col","sm","md","lg","xl","xxl"]},docs:{source:{transform:(n,e)=>{const{args:l}=e;return["<Grid",`  :fluid="${l.fluid}"`,`  className="${l.className}"`,">","  <Row",`    g="${l.g}"`,`    gx="${l.gx}"`,`    gy="${l.gy}"`,`    justify="${l.start}"`,`    align="${l.align}"`,"  >",'    <Column v-for="(index) in 12" :key="index"',`      col="${l.col}"`,`      sm="${l.sm}"`,`      md="${l.md}"`,`      lg="${l.lg}"`,`      xl="${l.xl}"`,`      xxl="${l.xxl}"`,"    >",'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',"        Column {{index}}","      </div>","    </Column>","  </Row>","</Grid>"].join(`
`).trim()}}}}};var b,S,N;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    g: '0',
    gx: '',
    gy: '3',
    align: 'stretch',
    justify: 'start',
    //Column
    col: '12',
    sm: '6',
    md: '4',
    lg: '3',
    xl: '2',
    xxl: ''
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
                <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                    <Column v-for="(index) in 12" :key="index" 
                        :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
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
          return ['<Grid', \`  :fluid="\${args.fluid}"\`, \`  className="\${args.className}"\`, '>', '  <Row', \`    g="\${args.g}"\`, \`    gx="\${args.gx}"\`, \`    gy="\${args.gy}"\`, \`    justify="\${args.start}"\`, \`    align="\${args.align}"\`, '  >', '    <Column v-for="(index) in 12" :key="index"', \`      col="\${args.col}"\`, \`      sm="\${args.sm}"\`, \`      md="\${args.md}"\`, \`      lg="\${args.lg}"\`, \`      xl="\${args.xl}"\`, \`      xxl="\${args.xxl}"\`, '    >', '      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">', '        Column {{index}}', '      </div>', '    </Column>', '  </Row>', '</Grid>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(S=g.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,j,q;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '格線系統-4欄',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    g: '3',
    gx: '',
    gy: '0',
    align: 'stretch',
    justify: 'start',
    //Column
    col: '12',
    sm: '6',
    md: '4',
    lg: '3',
    xl: '',
    xxl: ''
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
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                        <Column v-for="(index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                                Column {{ index }}
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
          return ['<Grid', \`  :fluid="\${args.fluid}"\`, \`  className="\${args.className}"\`, '>', '  <Row', \`    g="\${args.g}"\`, \`    gx="\${args.gx}"\`, \`    gy="\${args.gy}"\`, \`    justify="\${args.start}"\`, \`    align="\${args.align}"\`, '  >', '    <Column v-for="(index) in 12" :key="index"', \`      col="\${args.col}"\`, \`      sm="\${args.sm}"\`, \`      md="\${args.md}"\`, \`      lg="\${args.lg}"\`, \`      xl="\${args.xl}"\`, \`      xxl="\${args.xxl}"\`, '    >', '      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">', '        Column {{index}}', '      </div>', '    </Column>', '  </Row>', '</Grid>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(q=(j=o.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,R,h;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '格線系統-3欄',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    g: '3',
    gx: '',
    gy: '0',
    align: 'stretch',
    justify: 'start',
    //Column
    col: '12',
    sm: '6',
    md: '4',
    lg: '',
    xl: '',
    xxl: ''
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
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                        <Column v-for="(index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                                Column {{ index }}
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
          return ['<Grid', \`  :fluid="\${args.fluid}"\`, \`  className="\${args.className}"\`, '>', '  <Row', \`    g="\${args.g}"\`, \`    gx="\${args.gx}"\`, \`    gy="\${args.gy}"\`, \`    justify="\${args.start}"\`, \`    align="\${args.align}"\`, '  >', '    <Column v-for="(index) in 12" :key="index"', \`      col="\${args.col}"\`, \`      sm="\${args.sm}"\`, \`      md="\${args.md}"\`, \`      lg="\${args.lg}"\`, \`      xl="\${args.xl}"\`, \`      xxl="\${args.xxl}"\`, '    >', '      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">', '        Column {{index}}', '      </div>', '    </Column>', '  </Row>', '</Grid>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(R=c.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var k,X,V;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '格線系統-2欄',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    g: '3',
    gx: '',
    gy: '0',
    align: 'stretch',
    justify: 'start',
    //Column
    col: '12',
    sm: '6',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
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
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                        <Column v-for="(index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                                Column {{ index }}
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
          return ['<Grid', \`  :fluid="\${args.fluid}"\`, \`  className="\${args.className}"\`, '>', '  <Row', \`    g="\${args.g}"\`, \`    gx="\${args.gx}"\`, \`    gy="\${args.gy}"\`, \`    justify="\${args.start}"\`, \`    align="\${args.align}"\`, '  >', '    <Column v-for="(index) in 12" :key="index"', \`      col="\${args.col}"\`, \`      sm="\${args.sm}"\`, \`      md="\${args.md}"\`, \`      lg="\${args.lg}"\`, \`      xl="\${args.xl}"\`, \`      xxl="\${args.xxl}"\`, '    >', '      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">', '        Column {{index}}', '      </div>', '    </Column>', '  </Row>', '</Grid>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(V=(X=m.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var D,_,L;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '格線系統-1欄',
  args: {
    //Grid
    fluid: false,
    className: '',
    //Row
    g: '3',
    gx: '',
    gy: '0',
    align: 'stretch',
    justify: 'start',
    //Column
    col: '12',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
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
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
                        <Column v-for="(index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
                                Column {{ index }}
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
          return ['<Grid', \`  :fluid="\${args.fluid}"\`, \`  className="\${args.className}"\`, '>', '  <Row', \`    g="\${args.g}"\`, \`    gx="\${args.gx}"\`, \`    gy="\${args.gy}"\`, \`    justify="\${args.start}"\`, \`    align="\${args.align}"\`, '  >', '    <Column v-for="(index) in 12" :key="index"', \`      col="\${args.col}"\`, \`      sm="\${args.sm}"\`, \`      md="\${args.md}"\`, \`      lg="\${args.lg}"\`, \`      xl="\${args.xl}"\`, \`      xxl="\${args.xxl}"\`, '    >', '      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">', '        Column {{index}}', '      </div>', '    </Column>', '  </Row>', '</Grid>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(L=(_=f.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const F=["GridDefaultStory","Grid4ColumnsStory","Grid3ColumnsStory","Grid2ColumnsStory","Grid1ColumnsStory"];export{f as Grid1ColumnsStory,m as Grid2ColumnsStory,c as Grid3ColumnsStory,o as Grid4ColumnsStory,g as GridDefaultStory,F as __namedExportsOrder,E as default};
