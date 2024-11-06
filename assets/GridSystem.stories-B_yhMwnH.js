import{f as k,c as F,g as w,n as b,o as R}from"./vue.esm-bundler-XWim8Fx5.js";import{_ as g}from"./FakeContent-C2aq0SnT.js";const S="ded-",r={__name:"Container",props:{size:{type:String,required:!1,default:"",validator:n=>["sm","md","lg","xl","xxl"].includes(n)},fluid:{type:Boolean,required:!1,default:!1},className:{type:String,default:""}},setup(n){const e=n,s=k(()=>({[`${S}container${e.size?"-"+e.size:""}`]:!e.fluid,[`${S}container-fluid`]:e.fluid,[e.className]:!!e.className}));return(u,i)=>(R(),F("div",{class:b(s.value)},[w(u.$slots,"default")],2))}};r.__docgenInfo={exportName:"default",displayName:"Container",description:"",tags:{},props:[{name:"size",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'},values:["sm","md","lg","xl","xxl"]},{name:"fluid",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Grid/Container.vue"]};const t="ded-",o={__name:"Row",props:{align:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSm:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignMd:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignLg:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignXl:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignXxl:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},justify:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifySm:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifyMd:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifyLg:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifyXl:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},justifyXxl:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContent:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentSm:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentMd:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentLg:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentXl:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},alignContentXxl:{type:String,required:!1,default:null,validator:n=>["start","end","center","stretch","space-between","space-around","space-evenly"].includes(n)},g:{type:String,required:!1,validator:n=>["0","1","2","3","4","5"].includes(n)},gx:{type:String,required:!1,validator:n=>["0","1","2","3","4","5"].includes(n)},gy:{type:String,required:!1,validator:n=>["0","1","2","3","4","5"].includes(n)},className:{type:String,default:""}},setup(n){const e=n,s=k(()=>({[`${t}align-items-${e.align}`]:e.align,[`${t}align-items-sm-${e.alignSm}`]:e.alignSm,[`${t}align-items-md-${e.alignMd}`]:e.alignMd,[`${t}align-items-lg-${e.alignLg}`]:e.alignLg,[`${t}align-items-xl-${e.alignXl}`]:e.alignXl,[`${t}align-items-xxl-${e.alignXxl}`]:e.alignXxl,[`${t}justify-content-${e.justify}`]:e.justify,[`${t}justify-content-sm-${e.justifySm}`]:e.justifySm,[`${t}justify-content-md-${e.justifyMd}`]:e.justifyMd,[`${t}justify-content-lg-${e.justifyLg}`]:e.justifyLg,[`${t}justify-content-xl-${e.justifyXl}`]:e.justifyXl,[`${t}justify-content-xxl-${e.justifyXxl}`]:e.justifyXxl,[`${t}align-content-${e.alignContent}`]:e.alignContent,[`${t}align-content-sm-${e.alignContentSm}`]:e.alignContentSm,[`${t}align-content-md-${e.alignContentMd}`]:e.alignContentMd,[`${t}align-content-lg-${e.alignContentLg}`]:e.alignContentLg,[`${t}align-content-xl-${e.alignContentXl}`]:e.alignContentXl,[`${t}align-content-xxl-${e.alignContentXxl}`]:e.alignContentXxl,[`${t}g-${e.g}`]:e.g,[`${t}gx-${e.gx}`]:e.gx,[`${t}gy-${e.gy}`]:e.gy,[e.className]:!!e.className}));return(u,i)=>(R(),F("div",{class:b(["ded-row",s.value])},[w(u.$slots,"default")],2))}};o.__docgenInfo={exportName:"default",displayName:"Row",description:"",tags:{},props:[{name:"align",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"justify",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifySm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifyMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifyLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifyXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"justifyXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContent",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentSm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"alignContentXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","stretch","space-between","space-around","space-evenly"]},{name:"g",type:{name:"string"},required:!1,values:["0","1","2","3","4","5"]},{name:"gx",type:{name:"string"},required:!1,values:["0","1","2","3","4","5"]},{name:"gy",type:{name:"string"},required:!1,values:["0","1","2","3","4","5"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Grid/Row.vue"]};const l="ded-",a={__name:"Column",props:{col:{type:[Number,String],required:!1},sm:{type:[Number,String],required:!1},md:{type:[Number,String],required:!1},lg:{type:[Number,String],required:!1},xl:{type:[Number,String],required:!1},xxl:{type:[Number,String],required:!1},alignSelf:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfSm:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfMd:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfLg:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfXl:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},alignSelfXxl:{type:String,required:!1,default:null,validator:n=>["start","end","center","baseline","stretch"].includes(n)},order:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderSm:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderMd:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderLg:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderXl:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},orderXxl:{type:String,required:!1,default:null,validator:n=>["first","0","1","2","3","4","5","last"].includes(n)},className:{type:String,default:""}},setup(n){const e=n;function s(i){return i?i||parseInt(i)>0&&parseInt(i)<13:!1}const u=k(()=>({[`${l}col`]:!s(e.col)&&!e.sm&&!e.md&&!e.lg&&!e.xl&&!e.xxl,[`${l}col-${e.col}`]:s(e.col),[`${l}col-sm-${e.sm}`]:s(e.sm),[`${l}col-md-${e.md}`]:s(e.md),[`${l}col-lg-${e.lg}`]:s(e.lg),[`${l}col-xl-${e.xl}`]:s(e.xl),[`${l}col-xxl-${e.xxl}`]:s(e.xxl),[`${l}align-self-${e.alignSelf}`]:e.alignSelf,[`${l}align-self-sm-${e.alignSelfSm}`]:e.alignSelfSm,[`${l}align-self-md-${e.alignSelfMd}`]:e.alignSelfMd,[`${l}align-self-lg-${e.alignSelfLg}`]:e.alignSelfLg,[`${l}align-self-xl-${e.alignSelfXl}`]:e.alignSelfXl,[`${l}align-self-xxl-${e.alignSelfXxl}`]:e.alignSelfXxl,[`${l}order-${e.order}`]:e.order,[`${l}order-${e.orderSm}`]:e.orderSm,[`${l}order-${e.orderMd}`]:e.orderMd,[`${l}order-${e.orderLg}`]:e.orderLg,[`${l}order-${e.orderXl}`]:e.orderXl,[`${l}order-${e.orderXxl}`]:e.orderXxl,[e.className]:!!e.className}));return(i,Z)=>(R(),F("div",{class:b(u.value)},[w(i.$slots,"default")],2))}};a.__docgenInfo={exportName:"default",displayName:"Column",description:"",tags:{},props:[{name:"col",type:{name:"number|string"},required:!1},{name:"sm",type:{name:"number|string"},required:!1},{name:"md",type:{name:"number|string"},required:!1},{name:"lg",type:{name:"number|string"},required:!1},{name:"xl",type:{name:"number|string"},required:!1},{name:"xxl",type:{name:"number|string"},required:!1},{name:"alignSelf",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfSm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"alignSelfXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["start","end","center","baseline","stretch"]},{name:"order",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderSm",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderMd",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderLg",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderXl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"orderXxl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"},values:["first","0","1","2","3","4","5","last"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/layout/Grid/Column.vue"]};const te={components:{Col:a,Container:r,Row:o,Column:a},title:"Design System/GridSystem",component:{Container:r,Row:o,Column:a},tags:["autodocs"],argTypes:{size:{description:"當視窗寬度小於所選尺寸時，元件將以 100% 寬度呈現",control:{type:"select"},options:["sm (≥576px)","md (≥768px)","lg (≥992px)","xl (≥1200px)","xxl (≥1400px)"],mapping:{"sm (≥576px)":"sm","md (≥768px)":"md","lg (≥992px)":"lg","xl (≥1200px)":"xl","xxl (≥1400px)":"xxl"},table:{category:"[ Container ]"}},fluid:{description:"將元件寬度設置為 100%，以填滿父級容器",control:{type:"boolean"},table:{category:"[ Container ]"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"[ Container ]"}},align:{description:"align-items 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Row ] align-items"}},alignSm:{description:"align-items 斷點 sm 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Row ] align-items"}},alignMd:{description:"align-items 斷點 md 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Row ] align-items"}},alignLg:{description:"align-items 斷點 lg 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Row ] align-items"}},alignXl:{description:"align-items 斷點 xl 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Row ] align-items"}},alignXxl:{description:"align-items 斷點 xxl 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Row ] align-items"}},justify:{description:"justify-content 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] justify-content"}},justifySm:{description:"justify-content 斷點 sm 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] justify-content"}},justifyMd:{description:"justify-content 斷點 md 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] justify-content"}},justifyLg:{description:"justify-content 斷點 lg 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] justify-content"}},justifyXl:{description:"justify-content 斷點 xl 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] justify-content"}},justifyXxl:{description:"justify-content 斷點 xxl 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] justify-content"}},alignContent:{description:"align-content 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] align-content"}},alignContentSm:{description:"align-content 斷點 sm 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] align-content"}},alignContentMd:{description:"align-content 斷點 md 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] align-content"}},alignContentLg:{description:"align-content 斷點 lg 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] align-content"}},alignContentXl:{description:"align-content 斷點 xl 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] align-content"}},alignContentXxl:{description:"align-content 斷點 xxl 設定",control:{type:"select"},options:["start","end","center","stretch","space-between","space-around","space-evenly"],table:{category:"[ Row ] align-content"}},g:{description:"間距設定",control:{type:"select"},options:["0 (0rem)","1 (0.25rem)","2 (0.5rem)","3 (1rem)","4 (1.5rem)","5 (3rem)"],mapping:{"0 (0rem)":"0","1 (0.25rem)":"1","2 (0.5rem)":"2","3 (1rem)":"3","4 (1.5rem)":"4","5 (3rem)":"5"},table:{category:"[ Row ] Gutter"}},gx:{description:"水平間距設定",control:{type:"select"},options:["0 (0rem)","1 (0.25rem)","2 (0.5rem)","3 (1rem)","4 (1.5rem)","5 (3rem)"],mapping:{"0 (0rem)":"0","1 (0.25rem)":"1","2 (0.5rem)":"2","3 (1rem)":"3","4 (1.5rem)":"4","5 (3rem)":"5"},table:{category:"[ Row ] Gutter"}},gy:{description:"垂直間距設定",control:{type:"select"},options:["0 (0rem)","1 (0.25rem)","2 (0.5rem)","3 (1rem)","4 (1.5rem)","5 (3rem)"],mapping:{"0 (0rem)":"0","1 (0.25rem)":"1","2 (0.5rem)":"2","3 (1rem)":"3","4 (1.5rem)":"4","5 (3rem)":"5"},table:{category:"[ Row ] Gutter"}},col:{description:"column 長度",control:{type:"select"},options:["1","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"[ Col ] breakpoint"}},sm:{description:"column 長度斷點 sm 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"[ Col ] breakpoint"}},md:{description:"column 長度斷點 md 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"[ Col ] breakpoint"}},lg:{description:"column 長度斷點 lg 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"[ Col ] breakpoint"}},xl:{description:"column 長度斷點 xl 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"[ Col ] breakpoint"}},xxl:{description:"column 長度斷點 xxl 設定",control:{type:"select"},options:["1 ","2","3 ","4","5","6 ","7","8 ","9","10","11","12"],table:{category:"[ Col ] breakpoint"}},alignSelf:{description:"align-self 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Col ] align-self"}},alignSelfSm:{description:"align-self 斷點 sm 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Col ] align-self"}},alignSelfMd:{description:"align-self 斷點 md 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Col ] align-self"}},alignSelfLg:{description:"align-self 斷點 lg 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Col ] align-self"}},alignSelfXl:{description:"align-self 斷點 xxl 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Col ] align-self"}},alignSelfXxl:{description:"align-self 斷點 xxl 設定",control:{type:"select"},options:["start","end","center","baseline","stretch"],table:{category:"[ Col ] align-self"}},order:{description:"column 順序設定",control:{type:"select"},options:["first","0","1","2","3","4","5","last"],table:{category:"[ Col ] order"}},orderSm:{description:"column 順序斷點 sm 設定",control:{type:"select"},options:["first","0","1","2","3","4","5","last"],table:{category:"[ Col ] order"}},orderMd:{description:"column 順序斷點 md 設定",control:{type:"select"},options:["first","0","1","2","3","4","5","last"],table:{category:"[ Col ] order"}},orderLg:{description:"column 順序斷點 lg 設定",control:{type:"select"},options:["first","0","1","2","3","4","5","last"],table:{category:"[ Col ] order"}},orderXl:{description:"column 順序斷點 xl 設定",control:{type:"select"},options:["first","0","1","2","3","4","5","last"],table:{category:"[ Col ] order"}},orderXxl:{description:"column 順序斷點 xxl 設定",control:{type:"select"},options:["first","0","1","2","3","4","5","last"],table:{category:"[ Col ] order"}}},parameters:{docs:{title:"Grid",description:{component:"Grid 組件的呈現及說明。"}}}},c={name:"預設項目",args:{size:"",fluid:!1,className:"",g:"2",gx:"",gy:"",col:"12",sm:"6",md:"4",lg:"",xl:"3",xxl:""},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
                <Container :size="args.size" :fluid="args.fluid" :className="args.className" style="border:2px dashed #f00;">
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy">
                        <Column v-for="(item, index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <FakeContent height="100">
                                [ Col ]
                                {{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : '' }}
                                {{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : '' }}
                                {{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : '' }}
                                {{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : '' }}
                                {{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : '' }}
                                {{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : '' }}
                            </FakeContent>
                        </Column>
                    </Row>
                </Container>
            `}),parameters:{controls:{include:["size","fluid","className","g","gx","gy","col","sm","md","lg","xl","xxl"]}}},m={name:"[Container]",component:r,args:{size:"",fluid:!1,className:""},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
            <Container
                :size="args.size"
                :fluid="args.fluid"
                :className="args.className"
                style="border:2px dashed #f00;"
            >
                <Row g="0">
                    <Column col="12">
                        <FakeContent height="100">[ Col ] col:12</FakeContent>
                    </Column>
                </Row>
            </Container>
            `}),parameters:{controls:{include:["size","fluid","className"]}}},d={name:"[Row] align-items",component:o,args:{align:"start"},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row :align="args.align" :g="args.g" :gx="args.gx" :gy="args.gy" style="height: 150px">
                    <Column>
                        <FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
                    </Column>
                    <Column>
                        <FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
                    </Column>
                    <Column>
                        <FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
                    </Column>
                </Row>
            </Container>
            `}),parameters:{controls:{include:["align"]}}},C={name:"[Row] justify-content",component:o,args:{g:"",gx:"0",gy:"3"},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row justify="start" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:start</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:start</FakeContent>
                    </Column>
                </Row>

                <Row justify="center" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:center</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:center</FakeContent>
                    </Column>
                </Row>

                <Row justify="end" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:end</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:end</FakeContent>
                    </Column>
                </Row>

                <Row justify="around" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:around</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:around</FakeContent>
                    </Column>
                </Row>

                <Row justify="between" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:between</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:between</FakeContent>
                    </Column>
                </Row>

                <Row justify="evenly" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:evenly</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:evenly</FakeContent>
                    </Column>
                </Row>
            </Container>
            `}),parameters:{controls:{include:["className"]}}},p={name:"[Row] gutter",component:o,args:{g:"0"},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row g="0" class="mt-0">
                    <Column col="12">
                        <FakeContent height="50">[ Row ] g:default</FakeContent>
                    </Column>
                    <Column col="6">
                        <FakeContent height="50">[ Row ] g:default</FakeContent>
                    </Column>
                    <Column col="6">
                        <FakeContent height="50">[ Row ] g:default</FakeContent>
                    </Column>
                </Row>
            </Container>
            
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row :g="args.g" class="mt-0">
                    <Column col="12">
                        <FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
                    </Column>
                    <Column col="6">
                        <FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
                    </Column>
                    <Column col="6">
                        <FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
                    </Column>
                </Row>
            </Container>
            `}),parameters:{controls:{include:["g"]}}},f={name:"[Column] align-self",component:a,args:{alignSelf:"start"},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
            <Container style="border:2px dashed #f00;">
                <Row :g="args.g" :gx="args.gx" :gy="args.gy" style="height: 150px">
                    <Column :alignSelf="args.alignSelf">
                        <FakeContent height="50">[ Row ] alignSelf:{{ args.alignSelf }}</FakeContent>
                    </Column>
                    <Column alignSelf="center">
                        <FakeContent height="50">[ Row ] alignSelf:center</FakeContent>
                    </Column>
                    <Column alignSelf="end">
                        <FakeContent height="50">[ Row ] alignSelf:end</FakeContent>
                    </Column>
                </Row>
            </Container>
            `}),parameters:{controls:{include:["alignSelf"]}}},x={name:"[Column] order",component:a,args:{order:""},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
            <Container style="border:2px dashed #f00;">
                <Row >
                    <Column :order="args.order">
                        <FakeContent height="50">[ Col-01 ] order:{{ args.order }}</FakeContent>
                    </Column>
                    <Column order="1">
                        <FakeContent height="50">[ Col-02 ]</FakeContent>
                    </Column>
                    <Column order="2">
                        <FakeContent height="50">[ Col-03 ]</FakeContent>
                    </Column>
                    
                </Row>
            </Container>
            `}),parameters:{controls:{include:["order"]}}},y={name:"[Column] response",component:a,args:{col:"12",sm:"6",md:"4",lg:"3",xl:"4",xxl:"6"},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
            <Container style="border:2px dashed #f00;">
                <Row gy="3">
                    <Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <FakeContent height="100">
                            [ Col ]
                            {{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : ''}}
                            {{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : ''}}
                            {{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : ''}}
                            {{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : ''}}
                            {{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : ''}}
                            {{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : ''}}
                        </FakeContent>
                    </Column>
                    <Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <FakeContent height="100">
                            [ Col ]
                            {{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : ''}}
                            {{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : ''}}
                            {{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : ''}}
                            {{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : ''}}
                            {{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : ''}}
                            {{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : ''}}
                        </FakeContent>
                    </Column>
                    <Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <FakeContent height="100">
                            [ Col ]
                            {{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : ''}}
                            {{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : ''}}
                            {{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : ''}}
                            {{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : ''}}
                            {{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : ''}}
                            {{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : ''}}
                        </FakeContent>
                    </Column>
                    <Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <FakeContent height="100">
                            [ Col ]
                            {{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : ''}}
                            {{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : ''}}
                            {{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : ''}}
                            {{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : ''}}
                            {{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : ''}}
                            {{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : ''}}
                        </FakeContent>
                    </Column>
                </Row>
            </Container>
            `}),parameters:{controls:{include:["col","sm","md","lg","xl","xxl"]}}},h={name:"[Column] width setting",component:a,args:{g:"",gx:"0",gy:"3"},render:n=>({components:{Container:r,Row:o,Column:a,FakeContent:g},setup(){return{args:n}},template:`
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row g="3" class="mt-0">
                    <Column col="1">
                    <FakeContent height="50">col:1</FakeContent>
                    </Column>
                    <Column col="11">
                    <FakeContent height="50">[ Col ] col:11</FakeContent>
                    </Column>

                    <Column col="2">
                    <FakeContent height="50">[ Col ] col:2</FakeContent>
                    </Column>
                    <Column col="10">
                    <FakeContent height="50">[ Col ] col:10</FakeContent>
                    </Column>

                    <Column col="3">
                    <FakeContent height="50">[ Col ] col:3</FakeContent>
                    </Column>
                    <Column col="9">
                    <FakeContent height="50">[ Col ] col:9</FakeContent>
                    </Column>

                    <Column col="4">
                    <FakeContent height="50">[ Col ] col:4</FakeContent>
                    </Column>
                    <Column col="8">
                    <FakeContent height="50">[ Col ] col:8</FakeContent>
                    </Column>

                    <Column col="5">
                    <FakeContent height="50">[ Col ] col:5</FakeContent>
                    </Column>
                    <Column col="7">
                    <FakeContent height="50">[ Col ] col:7</FakeContent>
                    </Column>

                    <Column col="6">
                    <FakeContent height="50">[ Col ] col:6</FakeContent>
                    </Column>
                    <Column col="6">
                    <FakeContent height="50">[ Col ] col:6</FakeContent>
                    </Column>

                    <Column col="7">
                    <FakeContent height="50">[ Col ] col:7</FakeContent>
                    </Column>
                    <Column col="5">
                    <FakeContent height="50">[ Col ] col:5</FakeContent>
                    </Column>

                    <Column col="8">
                    <FakeContent height="50">[ Col ] col:8</FakeContent>
                    </Column>
                    <Column col="4">
                    <FakeContent height="50">[ Col ] col:4</FakeContent>
                    </Column>

                    <Column col="9">
                    <FakeContent height="50">[ Col ] col:9</FakeContent>
                    </Column>
                    <Column col="3">
                    <FakeContent height="50">[ Col ] col:3</FakeContent>
                    </Column>

                    <Column col="10">
                    <FakeContent height="50">[ Col ] col:10</FakeContent>
                    </Column>
                    <Column col="2">
                    <FakeContent height="50">[ Col ] col:2</FakeContent>
                    </Column>

                    <Column col="11">
                    <FakeContent height="50">[ Col ] col:11</FakeContent>
                    </Column>
                    <Column col="1">
                    <FakeContent height="50">col:1</FakeContent>
                    </Column>

                    <Column col="12">
                    <FakeContent height="50">[ Col ] col:12</FakeContent>
                    </Column>
                </Row>
            </Container>
            `}),parameters:{controls:{include:["g","gx","gy","className"]}}};var v,$,q;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    //Grid
    size: '',
    fluid: false,
    className: '',
    //Row
    g: '2',
    gx: '',
    gy: '',
    //Column
    col: '12',
    sm: '6',
    md: '4',
    lg: '',
    xl: '3',
    xxl: ''
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
                <Container :size="args.size" :fluid="args.fluid" :className="args.className" style="border:2px dashed #f00;">
                    <Row :g="args.g" :gx="args.gx" :gy="args.gy">
                        <Column v-for="(item, index) in 12" :key="index" 
                            :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                            <FakeContent height="100">
                                [ Col ]
                                {{ args.col ? \\\`col: \\\` : '' }}{{ args.col ? args.col : '' }}
                                {{ args.sm ? \\\`sm: \\\` : '' }}{{ args.sm ? args.sm : '' }}
                                {{ args.md ? \\\`md: \\\` : '' }}{{ args.md ? args.md : '' }}
                                {{ args.lg ? \\\`lg: \\\` : '' }}{{ args.lg ? args.lg : '' }}
                                {{ args.xl ? \\\`xl: \\\` : '' }}{{ args.xl ? args.xl : '' }}
                                {{ args.xxl ? \\\`xxl: \\\` : '' }}{{ args.xxl ? args.xxl : '' }}
                            </FakeContent>
                        </Column>
                    </Row>
                </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['size', 'fluid', 'className', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl']
    }
  }
}`,...(q=($=c.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var j,X,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '[Container]',
  component: Container,
  args: {
    size: '',
    fluid: false,
    className: ''
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Container
                :size="args.size"
                :fluid="args.fluid"
                :className="args.className"
                style="border:2px dashed #f00;"
            >
                <Row g="0">
                    <Column col="12">
                        <FakeContent height="100">[ Col ] col:12</FakeContent>
                    </Column>
                </Row>
            </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['size', 'fluid', 'className']
    }
  }
}`,...(N=(X=m.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var V,D,_;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '[Row] align-items',
  component: Row,
  args: {
    align: 'start'
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row :align="args.align" :g="args.g" :gx="args.gx" :gy="args.gy" style="height: 150px">
                    <Column>
                        <FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
                    </Column>
                    <Column>
                        <FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
                    </Column>
                    <Column>
                        <FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
                    </Column>
                </Row>
            </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['align']
    }
  }
}`,...(_=(D=d.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var L,M,A;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '[Row] justify-content',
  component: Row,
  args: {
    g: '',
    gx: '0',
    gy: '3'
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row justify="start" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:start</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:start</FakeContent>
                    </Column>
                </Row>

                <Row justify="center" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:center</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:center</FakeContent>
                    </Column>
                </Row>

                <Row justify="end" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:end</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:end</FakeContent>
                    </Column>
                </Row>

                <Row justify="around" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:around</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:around</FakeContent>
                    </Column>
                </Row>

                <Row justify="between" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:between</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:between</FakeContent>
                    </Column>
                </Row>

                <Row justify="evenly" :g="args.g" :gx="args.gx" :gy="args.gy">
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:evenly</FakeContent>
                    </Column>
                    <Column col="4">
                        <FakeContent height="50">[ Row ] align:evenly</FakeContent>
                    </Column>
                </Row>
            </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['className']
    }
  }
}`,...(A=(M=C.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var z,E,G;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '[Row] gutter',
  component: Row,
  args: {
    g: '0'
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row g="0" class="mt-0">
                    <Column col="12">
                        <FakeContent height="50">[ Row ] g:default</FakeContent>
                    </Column>
                    <Column col="6">
                        <FakeContent height="50">[ Row ] g:default</FakeContent>
                    </Column>
                    <Column col="6">
                        <FakeContent height="50">[ Row ] g:default</FakeContent>
                    </Column>
                </Row>
            </Container>
            
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row :g="args.g" class="mt-0">
                    <Column col="12">
                        <FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
                    </Column>
                    <Column col="6">
                        <FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
                    </Column>
                    <Column col="6">
                        <FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
                    </Column>
                </Row>
            </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['g']
    }
  }
}`,...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var W,I,U;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '[Column] align-self',
  component: Column,
  args: {
    alignSelf: 'start'
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Container style="border:2px dashed #f00;">
                <Row :g="args.g" :gx="args.gx" :gy="args.gy" style="height: 150px">
                    <Column :alignSelf="args.alignSelf">
                        <FakeContent height="50">[ Row ] alignSelf:{{ args.alignSelf }}</FakeContent>
                    </Column>
                    <Column alignSelf="center">
                        <FakeContent height="50">[ Row ] alignSelf:center</FakeContent>
                    </Column>
                    <Column alignSelf="end">
                        <FakeContent height="50">[ Row ] alignSelf:end</FakeContent>
                    </Column>
                </Row>
            </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['alignSelf']
    }
  }
}`,...(U=(I=f.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var B,O,J;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '[Column] order',
  component: Column,
  args: {
    order: ''
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Container style="border:2px dashed #f00;">
                <Row >
                    <Column :order="args.order">
                        <FakeContent height="50">[ Col-01 ] order:{{ args.order }}</FakeContent>
                    </Column>
                    <Column order="1">
                        <FakeContent height="50">[ Col-02 ]</FakeContent>
                    </Column>
                    <Column order="2">
                        <FakeContent height="50">[ Col-03 ]</FakeContent>
                    </Column>
                    
                </Row>
            </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['order']
    }
  }
}`,...(J=(O=x.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var T,H,K;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '[Column] response',
  component: Column,
  args: {
    col: '12',
    sm: '6',
    md: '4',
    lg: '3',
    xl: '4',
    xxl: '6'
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Container style="border:2px dashed #f00;">
                <Row gy="3">
                    <Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <FakeContent height="100">
                            [ Col ]
                            {{ args.col ? \\\`col: \\\` : '' }}{{ args.col ? args.col : ''}}
                            {{ args.sm ? \\\`sm: \\\` : '' }}{{ args.sm ? args.sm : ''}}
                            {{ args.md ? \\\`md: \\\` : '' }}{{ args.md ? args.md : ''}}
                            {{ args.lg ? \\\`lg: \\\` : '' }}{{ args.lg ? args.lg : ''}}
                            {{ args.xl ? \\\`xl: \\\` : '' }}{{ args.xl ? args.xl : ''}}
                            {{ args.xxl ? \\\`xxl: \\\` : '' }}{{ args.xxl ? args.xxl : ''}}
                        </FakeContent>
                    </Column>
                    <Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <FakeContent height="100">
                            [ Col ]
                            {{ args.col ? \\\`col: \\\` : '' }}{{ args.col ? args.col : ''}}
                            {{ args.sm ? \\\`sm: \\\` : '' }}{{ args.sm ? args.sm : ''}}
                            {{ args.md ? \\\`md: \\\` : '' }}{{ args.md ? args.md : ''}}
                            {{ args.lg ? \\\`lg: \\\` : '' }}{{ args.lg ? args.lg : ''}}
                            {{ args.xl ? \\\`xl: \\\` : '' }}{{ args.xl ? args.xl : ''}}
                            {{ args.xxl ? \\\`xxl: \\\` : '' }}{{ args.xxl ? args.xxl : ''}}
                        </FakeContent>
                    </Column>
                    <Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <FakeContent height="100">
                            [ Col ]
                            {{ args.col ? \\\`col: \\\` : '' }}{{ args.col ? args.col : ''}}
                            {{ args.sm ? \\\`sm: \\\` : '' }}{{ args.sm ? args.sm : ''}}
                            {{ args.md ? \\\`md: \\\` : '' }}{{ args.md ? args.md : ''}}
                            {{ args.lg ? \\\`lg: \\\` : '' }}{{ args.lg ? args.lg : ''}}
                            {{ args.xl ? \\\`xl: \\\` : '' }}{{ args.xl ? args.xl : ''}}
                            {{ args.xxl ? \\\`xxl: \\\` : '' }}{{ args.xxl ? args.xxl : ''}}
                        </FakeContent>
                    </Column>
                    <Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
                        <FakeContent height="100">
                            [ Col ]
                            {{ args.col ? \\\`col: \\\` : '' }}{{ args.col ? args.col : ''}}
                            {{ args.sm ? \\\`sm: \\\` : '' }}{{ args.sm ? args.sm : ''}}
                            {{ args.md ? \\\`md: \\\` : '' }}{{ args.md ? args.md : ''}}
                            {{ args.lg ? \\\`lg: \\\` : '' }}{{ args.lg ? args.lg : ''}}
                            {{ args.xl ? \\\`xl: \\\` : '' }}{{ args.xl ? args.xl : ''}}
                            {{ args.xxl ? \\\`xxl: \\\` : '' }}{{ args.xxl ? args.xxl : ''}}
                        </FakeContent>
                    </Column>
                </Row>
            </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['col', 'sm', 'md', 'lg', 'xl', 'xxl']
    }
  }
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var P,Q,Y;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '[Column] width setting',
  component: Column,
  args: {
    g: '',
    gx: '0',
    gy: '3'
  },
  render: args => ({
    components: {
      Container,
      Row,
      Column,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Container style="border:2px dashed #f00;" class="mb-5">
                <Row g="3" class="mt-0">
                    <Column col="1">
                    <FakeContent height="50">col:1</FakeContent>
                    </Column>
                    <Column col="11">
                    <FakeContent height="50">[ Col ] col:11</FakeContent>
                    </Column>

                    <Column col="2">
                    <FakeContent height="50">[ Col ] col:2</FakeContent>
                    </Column>
                    <Column col="10">
                    <FakeContent height="50">[ Col ] col:10</FakeContent>
                    </Column>

                    <Column col="3">
                    <FakeContent height="50">[ Col ] col:3</FakeContent>
                    </Column>
                    <Column col="9">
                    <FakeContent height="50">[ Col ] col:9</FakeContent>
                    </Column>

                    <Column col="4">
                    <FakeContent height="50">[ Col ] col:4</FakeContent>
                    </Column>
                    <Column col="8">
                    <FakeContent height="50">[ Col ] col:8</FakeContent>
                    </Column>

                    <Column col="5">
                    <FakeContent height="50">[ Col ] col:5</FakeContent>
                    </Column>
                    <Column col="7">
                    <FakeContent height="50">[ Col ] col:7</FakeContent>
                    </Column>

                    <Column col="6">
                    <FakeContent height="50">[ Col ] col:6</FakeContent>
                    </Column>
                    <Column col="6">
                    <FakeContent height="50">[ Col ] col:6</FakeContent>
                    </Column>

                    <Column col="7">
                    <FakeContent height="50">[ Col ] col:7</FakeContent>
                    </Column>
                    <Column col="5">
                    <FakeContent height="50">[ Col ] col:5</FakeContent>
                    </Column>

                    <Column col="8">
                    <FakeContent height="50">[ Col ] col:8</FakeContent>
                    </Column>
                    <Column col="4">
                    <FakeContent height="50">[ Col ] col:4</FakeContent>
                    </Column>

                    <Column col="9">
                    <FakeContent height="50">[ Col ] col:9</FakeContent>
                    </Column>
                    <Column col="3">
                    <FakeContent height="50">[ Col ] col:3</FakeContent>
                    </Column>

                    <Column col="10">
                    <FakeContent height="50">[ Col ] col:10</FakeContent>
                    </Column>
                    <Column col="2">
                    <FakeContent height="50">[ Col ] col:2</FakeContent>
                    </Column>

                    <Column col="11">
                    <FakeContent height="50">[ Col ] col:11</FakeContent>
                    </Column>
                    <Column col="1">
                    <FakeContent height="50">col:1</FakeContent>
                    </Column>

                    <Column col="12">
                    <FakeContent height="50">[ Col ] col:12</FakeContent>
                    </Column>
                </Row>
            </Container>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['g', 'gx', 'gy', 'className']
    }
  }
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const le=["GridDefault","ContainerStory","RowAlignItemStory","RowJustifyContentStory","RowGutterStory","ColAlignSelfStory","ColOrderStory","ColResponseStory","ColWidthSetStory"];export{f as ColAlignSelfStory,x as ColOrderStory,y as ColResponseStory,h as ColWidthSetStory,m as ContainerStory,c as GridDefault,d as RowAlignItemStory,p as RowGutterStory,C as RowJustifyContentStory,le as __namedExportsOrder,te as default};
