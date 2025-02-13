import{a as s,b as o,_ as a}from"./Column-BeQtJE1y.js";import{o as h,j as y,d as n,b as e,a as v,x as U,f as b,t as M,r as p,e as S,O as B}from"./vue.esm-bundler-qCK_iSPY.js";import{b as W,_ as O}from"./Side-xmtG1yJO.js";import{_ as z}from"./Divider-CxjLvBbh.js";import{_ as P}from"./Title-Bap0zsXG.js";import{_ as u}from"./Button-DOqzoiF2.js";import{_ as m}from"./Checkbox-CwR6dT4G.js";import{_ as d}from"./Input-B5oZbn0w.js";import"./Icon-DNPtS85k.js";import"./iframe-B08jCWer.js";import"../sb-preview/runtime.js";const J={class:"ded-login-content"},i={__name:"AuthFlow",props:{bgColorSrc:{type:String,default:""},bgImgSrc:{type:String,default:""},title:{type:String,default:""},className:{type:String,default:""}},setup(t){const l=t;return(r,w)=>(h(),y(B(O),{class:"h-screen"},{default:n(()=>[e(B(W),null,{default:n(()=>[e(s,null,{default:n(()=>[e(o,null,{default:n(()=>[e(a,{md:"12",lg:"5"},{default:n(()=>[v("div",{class:"ded-login-bg",style:U({backgroundImage:l.bgImgSrc?`url(${l.bgImgSrc})`:"none",backgroundRepeat:"no-repeat",backgroundSize:"cover"})},null,4)]),_:1}),e(a,{md:"12",lg:"7"},{default:n(()=>[v("div",J,[e(s,{fluid:""},{default:n(()=>[e(o,{hasGap:""},{default:n(()=>[e(a,{md:"12"},{default:n(()=>[e(P,{level:1},{default:n(()=>[b(M(l.title),1)]),_:1})]),_:1})]),_:1}),r.$slots.description?(h(),y(o,{key:0,hasGap:""},{default:n(()=>[e(a,{md:"12"},{default:n(()=>[p(r.$slots,"description")]),_:3})]),_:3})):S("",!0)]),_:3}),p(r.$slots,"form"),r.$slots.externalLinks?(h(),y(z,{key:0,width:"1px",type:"solid",direction:"horizontal",align:"center",className:""},{default:n(()=>w[0]||(w[0]=[b(" Or ")])),_:1})):S("",!0),p(r.$slots,"externalLinks"),p(r.$slots,"signUp")])]),_:3})]),_:3})]),_:3})]),_:3})]),_:3}))}};i.__docgenInfo={exportName:"default",displayName:"AuthFlow",description:"",tags:{},props:[{name:"bgColorSrc",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"bgImgSrc",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"description"},{name:"form"},{name:"externalLinks"},{name:"signUp"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/template/AuthFlow/AuthFlow.vue"]};const lt={title:"Template/Auth-Flow",component:{},tags:["autodocs"],argTypes:{bgColorSrc:{description:"背景顏色",control:{type:"text"},table:{category:"PROPS",defaultValue:{summary:""}}},bgImgSrc:{description:"背景圖片",control:{type:"text"},table:{category:"PROPS",defaultValue:{summary:""}}},title:{description:"標題",control:{type:"text"},table:{category:"PROPS",defaultValue:{summary:""}}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS",defaultValue:{summary:""}}},description:{description:"描述",control:{type:"text"},table:{category:"SLOTS",type:{summary:"Vue Component | HTML"}}},form:{description:"表單",control:{type:"text"},table:{category:"SLOTS",type:{summary:"Vue Component | HTML"}}},externalLinks:{description:"外部連結",control:{type:"text"},table:{category:"SLOTS",type:{summary:"Vue Component | HTML"}}},signUp:{description:"註冊",control:{type:"text"},table:{category:"SLOTS",type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Auth-Flow",description:{component:"驗證流程的呈現及說明。"}}}},c={name:"登入",args:{bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",title:"Welcome Back",className:"",description:`<p class="text-neutral-600">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>`,form:`<div><Grid fluid><Row><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email" placeholder="Email" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password" placeholder="Password" /></Column><Column md="12" class="flex justify-between items-center"><Button variant="text" className="text-neutral-600">Forgot Password?</Button><Checkbox :dataSource="[ { label: 'Remember me', value: '1', isDisabled: 'false' } ]" :initValue="[]" direction="row" size="medium" v-model="vModelData"></Checkbox></Column><Column md="12"><Button variant="filled" width="fluid">Login</Button></Column></Row></Grid></div>`,externalLinks:'<Grid fluid><Row justify="center"><Column md="12" className="flex gap-4 justify-center"><Button className="ded-custom-icon" variant="ghost" prefix="SvgGoogle"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgFacebook"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgLine"></Button></Column></Row></Grid>',signUp:`<Grid fluid><Row><Column md="12" align="center"><span class="text-neutral-300">Don't have an account?</span><Button class="text-link" variant="text">Sign up</Button></Column></Row></Grid>`},render:t=>({components:{AuthFlow:i,Grid:s,Row:o,Column:a,Checkbox:m,Button:u,Input:d},setup(){return{args:t}},template:`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Today is a new day. It's your day. You shape it.
                    </p>
                    <p class="text-neutral-600">
                        Sign in to start managing your projects.
                    </p>
                </template>
                
                <template #form>
                    <div>
                        <Grid fluid>
                            <Row hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="text"
                                        prefix="SvgMail"
                                        initValue=""
                                        label="Email"
                                        placeholder="Email"
                                    />
                                </Column>

                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password"
                                        placeholder="Password"
                                    />
                                </Column>

                                <Column md="12" class="flex justify-between items-center">
                                    <Button
                                        variant="text"
                                        className="text-neutral-600"
                                    >
                                        Forgot Password?
                                    </Button>
                                    
                                    <Checkbox
                                        :dataSource="[
                                            {
                                                label: 'Remember me',
                                                value: '1',
                                                isDisabled: 'false'
                                            },
                                          ]"
                                        :initValue="[]"
                                        direction="row"
                                        size="medium"
                                        v-model="vModelData"
                                    >
                                    </Checkbox>
                                </Column>

                                <Column md="12">
                                    <Button 
                                        variant="filled" 
                                        width="fluid"
                                    >
                                        Login
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
                
                <template #externalLinks>
                    <Grid fluid>
                        <Row justify="center" hasGap>
                            <Column md="12" className="flex gap-4 justify-center">
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgGoogle"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgFacebook"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgLine"
                                ></Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #signUp>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12" align="center">
                                <span class="text-neutral-300">Don't have an account?</span>
                                <Button class="text-link" variant="text">
                                    Sign up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
            </AuthFlow>
        `}),parameters:{controls:{},docs:{source:{transform:(t,l)=>[].join(`
`).trim()}}}},g={name:"註冊",args:{bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",title:"Sign Up",className:"",form:`<Grid fluid><Row><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email" placeholder="type email" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password" placeholder="type password" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password Confirm" placeholder="type password" /></Column><Column md="12"><div class="flex flex-wrap items-center"><Checkbox :dataSource="[ { label: '', value: '1', isDisabled: 'false' } ]" :initValue="[]" direction="row" size="medium" v-model="vModelData"></Checkbox><span class="ml-1 text-neutral-600">I agree to all the</span><Button variant="text">Terms</Button><span class="text-neutral-600">and</span><Button variant="text">Privacy Policies</Button></div></Column></Row></Grid><Grid fluid><Row justify="flex-end"><Column md="6"><Button variant="soft" width="fluid">Back</Button></Column><Column md="6"><Button variant="filled" width="fluid">Sign Up</Button></Column></Row></Grid>`,externalLinks:'<Grid fluid><Row justify="center"><Column md="12" className="flex gap-4 justify-center"><Button className="ded-custom-icon" variant="ghost" prefix="SvgGoogle"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgFacebook"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgLine"></Button></Column></Row></Grid>',signUp:`<Grid fluid><Row><Column md="12" align="center"><span class="text-neutral-300">Don't have an account?</span><Button class="text-link" variant="text">Sign up</Button></Column></Row></Grid>`},render:t=>({components:{AuthFlow:i,Grid:s,Row:o,Column:a,Checkbox:m,Button:u,Input:d},setup(){return{args:t}},template:`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #form>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="text"
                                    prefix="SvgMail"
                                    initValue=""
                                    label="Email"
                                    placeholder="type email"
                                />
                            </Column>

                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="password"
                                    prefix="SvgLock"
                                    initValue=""
                                    label="Password"
                                    placeholder="type password"
                                />
                            </Column>

                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="password"
                                    prefix="SvgLock"
                                    initValue=""
                                    label="Password Confirm"
                                    placeholder="type password"
                                />
                            </Column>

                            <Column md="12">
                                <div class="flex flex-wrap items-center">
                                    <Checkbox
                                        :dataSource="[
                                        {
                                            label: '',
                                            value: '1',
                                            isDisabled: 'false'
                                        },
                                      ]"
                                        :initValue="[]"
                                        direction="row"
                                        size="medium"
                                        v-model="vModelData"
                                    >
                                    </Checkbox>
                                    <span class="ml-1 text-neutral-600">I agree to all the</span>
                                    <Button variant="text">Terms</Button>
                                    <span class="text-neutral-600">and</span>
                                    <Button variant="text">Privacy Policies</Button>
                                </div>
                            </Column>
                        </Row>
                    </Grid>
                    <Grid fluid>
                        <Row justify="flex-end" hasGap>
                            <Column md="6">
                                <Button
                                    variant="soft"
                                    width="fluid"
                                >
                                    Back
                                </Button>
                            </Column>
                            <Column md="6">
                                <Button
                                    variant="filled"
                                    width="fluid"
                                >
                                    Sign Up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #externalLinks>
                    <Grid fluid>
                        <Row justify="center" hasGap>
                            <Column md="12" className="flex gap-4 justify-center">
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgGoogle"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgFacebook"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgLine"
                                ></Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #signUp>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12" align="center">
                                <span class="text-neutral-300">Don't have an account?</span>
                                <Button class="text-link" variant="text">
                                    Sign up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
            </AuthFlow>
        `}),parameters:{controls:{},docs:{source:{transform:(t,l)=>[].join(`
`).trim()}}}},x={name:"忘記密碼",args:{bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",title:"Forgot Your Password?",className:"",description:'<p class="text-neutral-600">Type in your registered email address to reset password</p>',form:`<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email Address" placeholder="type email" :hint="{ description: 'Description', error: '' }" /></Column><Column md="12"><Button variant="filled" width="fluid">Submit</Button></Column></Row></Grid></div>`},render:t=>({components:{AuthFlow:i,Grid:s,Row:o,Column:a,Checkbox:m,Button:u,Input:d},setup(){return{args:t}},template:`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Type in your registered email address to reset password
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="text"
                                        prefix="SvgMail"
                                        initValue=""
                                        label="Email Address"
                                        placeholder="type email"
                                        :hint="{ description: 'Description', error: '' }"
                                    />
                                </Column>

                                <Column md="12">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Submit
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
        `}),parameters:{controls:{},docs:{source:{transform:(t,l)=>[].join(`
`).trim()}}}},f={name:"驗證代碼",args:{bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",title:"Verify Code",className:"",description:'<p class="text-neutral-600">An authentication code has been sent to your email.</p>',form:'<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><column md="12"><div class="flex item-center justify-center gap-2"><Title :level="2">A</Title><Title :level="2">-</Title><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /></div></column><Column md="6"><Button variant="soft" width="fluid" prefix="SvgClock">Resend 03:28</Button></Column><Column md="6"><Button variant="filled" width="fluid">Verify</Button></Column></Row></Grid></div>'},render:t=>({components:{AuthFlow:i,Grid:s,Row:o,Column:a,Checkbox:m,Button:u,Input:d,Title:P},setup(){return{args:t}},template:`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        An authentication code has been sent to your email.
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <column md="12">
                                    <div class="flex item-center justify-center gap-2">
                                        <Title :level="2">A</Title>
                                        <Title :level="2">-</Title>
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                    </div>
                                </column>
                                
                                <Column md="6">
                                    <Button
                                        variant="soft"
                                        width="fluid"
                                        prefix="SvgClock"
                                    >
                                        Resend 03:28
                                    </Button>
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Verify
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
        `}),parameters:{controls:{},docs:{source:{transform:(t,l)=>[].join(`
`).trim()}}}},C={name:"設定密碼",args:{bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",title:"Set a Password",className:"",description:'<p class="text-neutral-600">Please set a new password for your account.</p>',form:`<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email Address" placeholder="type email" :hint="{ description: 'Description', error: '' }" /></Column><Column md="12"><Button variant="filled" width="fluid">Submit</Button></Column></Row></Grid></div>`},render:t=>({components:{AuthFlow:i,Grid:s,Row:o,Column:a,Checkbox:m,Button:u,Input:d},setup(){return{args:t}},template:`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Please set a new password for your account.
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password"
                                        placeholder="type password"
                                    />
                                </Column>

                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password Confirm"
                                        placeholder="type password"
                                    />
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="soft"
                                        width="fluid"
                                    >
                                        Reset
                                    </Button>
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Confirm
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
        `}),parameters:{controls:{},docs:{source:{transform:(t,l)=>[].join(`
`).trim()}}}};var D,N,G;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '登入',
  args: {
    //props
    bgColorSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
    bgImgSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
    title: "Welcome Back",
    className: "",
    //slot
    description: \`<p class="text-neutral-600">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>\`,
    form: \`<div><Grid fluid><Row><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email" placeholder="Email" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password" placeholder="Password" /></Column><Column md="12" class="flex justify-between items-center"><Button variant="text" className="text-neutral-600">Forgot Password?</Button><Checkbox :dataSource="[ { label: 'Remember me', value: '1', isDisabled: 'false' } ]" :initValue="[]" direction="row" size="medium" v-model="vModelData"></Checkbox></Column><Column md="12"><Button variant="filled" width="fluid">Login</Button></Column></Row></Grid></div>\`,
    externalLinks: \`<Grid fluid><Row justify="center"><Column md="12" className="flex gap-4 justify-center"><Button className="ded-custom-icon" variant="ghost" prefix="SvgGoogle"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgFacebook"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgLine"></Button></Column></Row></Grid>\`,
    signUp: \`<Grid fluid><Row><Column md="12" align="center"><span class="text-neutral-300">Don't have an account?</span><Button class="text-link" variant="text">Sign up</Button></Column></Row></Grid>\`
  },
  render: args => ({
    components: {
      AuthFlow,
      Grid,
      Row,
      Column,
      Checkbox,
      Button,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Today is a new day. It's your day. You shape it.
                    </p>
                    <p class="text-neutral-600">
                        Sign in to start managing your projects.
                    </p>
                </template>
                
                <template #form>
                    <div>
                        <Grid fluid>
                            <Row hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="text"
                                        prefix="SvgMail"
                                        initValue=""
                                        label="Email"
                                        placeholder="Email"
                                    />
                                </Column>

                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password"
                                        placeholder="Password"
                                    />
                                </Column>

                                <Column md="12" class="flex justify-between items-center">
                                    <Button
                                        variant="text"
                                        className="text-neutral-600"
                                    >
                                        Forgot Password?
                                    </Button>
                                    
                                    <Checkbox
                                        :dataSource="[
                                            {
                                                label: 'Remember me',
                                                value: '1',
                                                isDisabled: 'false'
                                            },
                                          ]"
                                        :initValue="[]"
                                        direction="row"
                                        size="medium"
                                        v-model="vModelData"
                                    >
                                    </Checkbox>
                                </Column>

                                <Column md="12">
                                    <Button 
                                        variant="filled" 
                                        width="fluid"
                                    >
                                        Login
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
                
                <template #externalLinks>
                    <Grid fluid>
                        <Row justify="center" hasGap>
                            <Column md="12" className="flex gap-4 justify-center">
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgGoogle"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgFacebook"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgLine"
                                ></Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #signUp>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12" align="center">
                                <span class="text-neutral-300">Don't have an account?</span>
                                <Button class="text-link" variant="text">
                                    Sign up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
            </AuthFlow>
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
          return [
            // \`<Grid\`,
            // \`  :fluid="\${args.fluid}"\`,
            // \`  :gap="\${args.gap}"\`,
            // \`  :className="\${args.className}"\`,
            // \`>\`,
            // \`  <Row\`,
            // \`    :justify="\${args.justify}"\`,
            // \`    :alignItem="\${args.alignItem}"\`,
            // \`    :hasGap="\${args.hasGap}"\`,
            // \`  >\`,
            // \`    <Column\`,
            // \`      v-for="(index) in 12"\`,
            // \`      :key="index"\`,
            // \`      :align="\${args.align}"\`,
            // \`      :xs="\${args.xs}"\`,
            // \`      :sm="\${args.sm}"\`,
            // \`      :md="\${args.md}"\`,
            // \`      :lg="\${args.lg}"\`,
            // \`      :xl="\${args.xl}"\`,
            // \`    >\`,
            // \`      <div\`,
            // \`        class="diagonal-background"\`,
            // \`        style="border:1px solid #ccc; padding:8px 16px;"\`,
            // \`      >\`,
            // \`        Column {{index}}\`,
            // \`      </div>\`,
            // \`    </Column>\`,
            // \`  </Row>\`,
            // \`</Grid>\`,
          ].join("\\n").trim();
        }
      }
    }
  }
}`,...(G=(N=c.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var R,I,k;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '註冊',
  args: {
    //props
    bgColorSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
    bgImgSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
    title: "Sign Up",
    className: "",
    //slot
    form: \`<Grid fluid><Row><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email" placeholder="type email" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password" placeholder="type password" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password Confirm" placeholder="type password" /></Column><Column md="12"><div class="flex flex-wrap items-center"><Checkbox :dataSource="[ { label: '', value: '1', isDisabled: 'false' } ]" :initValue="[]" direction="row" size="medium" v-model="vModelData"></Checkbox><span class="ml-1 text-neutral-600">I agree to all the</span><Button variant="text">Terms</Button><span class="text-neutral-600">and</span><Button variant="text">Privacy Policies</Button></div></Column></Row></Grid><Grid fluid><Row justify="flex-end"><Column md="6"><Button variant="soft" width="fluid">Back</Button></Column><Column md="6"><Button variant="filled" width="fluid">Sign Up</Button></Column></Row></Grid>\`,
    externalLinks: \`<Grid fluid><Row justify="center"><Column md="12" className="flex gap-4 justify-center"><Button className="ded-custom-icon" variant="ghost" prefix="SvgGoogle"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgFacebook"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgLine"></Button></Column></Row></Grid>\`,
    signUp: \`<Grid fluid><Row><Column md="12" align="center"><span class="text-neutral-300">Don't have an account?</span><Button class="text-link" variant="text">Sign up</Button></Column></Row></Grid>\`
  },
  render: args => ({
    components: {
      AuthFlow,
      Grid,
      Row,
      Column,
      Checkbox,
      Button,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #form>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="text"
                                    prefix="SvgMail"
                                    initValue=""
                                    label="Email"
                                    placeholder="type email"
                                />
                            </Column>

                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="password"
                                    prefix="SvgLock"
                                    initValue=""
                                    label="Password"
                                    placeholder="type password"
                                />
                            </Column>

                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="password"
                                    prefix="SvgLock"
                                    initValue=""
                                    label="Password Confirm"
                                    placeholder="type password"
                                />
                            </Column>

                            <Column md="12">
                                <div class="flex flex-wrap items-center">
                                    <Checkbox
                                        :dataSource="[
                                        {
                                            label: '',
                                            value: '1',
                                            isDisabled: 'false'
                                        },
                                      ]"
                                        :initValue="[]"
                                        direction="row"
                                        size="medium"
                                        v-model="vModelData"
                                    >
                                    </Checkbox>
                                    <span class="ml-1 text-neutral-600">I agree to all the</span>
                                    <Button variant="text">Terms</Button>
                                    <span class="text-neutral-600">and</span>
                                    <Button variant="text">Privacy Policies</Button>
                                </div>
                            </Column>
                        </Row>
                    </Grid>
                    <Grid fluid>
                        <Row justify="flex-end" hasGap>
                            <Column md="6">
                                <Button
                                    variant="soft"
                                    width="fluid"
                                >
                                    Back
                                </Button>
                            </Column>
                            <Column md="6">
                                <Button
                                    variant="filled"
                                    width="fluid"
                                >
                                    Sign Up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #externalLinks>
                    <Grid fluid>
                        <Row justify="center" hasGap>
                            <Column md="12" className="flex gap-4 justify-center">
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgGoogle"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgFacebook"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgLine"
                                ></Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #signUp>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12" align="center">
                                <span class="text-neutral-300">Don't have an account?</span>
                                <Button class="text-link" variant="text">
                                    Sign up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
            </AuthFlow>
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
          return [
            // \`<Grid\`,
            // \`  :fluid="\${args.fluid}"\`,
            // \`  :gap="\${args.gap}"\`,
            // \`  :className="\${args.className}"\`,
            // \`>\`,
            // \`  <Row\`,
            // \`    :justify="\${args.justify}"\`,
            // \`    :alignItem="\${args.alignItem}"\`,
            // \`    :hasGap="\${args.hasGap}"\`,
            // \`  >\`,
            // \`    <Column\`,
            // \`      v-for="(index) in 12"\`,
            // \`      :key="index"\`,
            // \`      :align="\${args.align}"\`,
            // \`      :xs="\${args.xs}"\`,
            // \`      :sm="\${args.sm}"\`,
            // \`      :md="\${args.md}"\`,
            // \`      :lg="\${args.lg}"\`,
            // \`      :xl="\${args.xl}"\`,
            // \`    >\`,
            // \`      <div\`,
            // \`        class="diagonal-background"\`,
            // \`        style="border:1px solid #ccc; padding:8px 16px;"\`,
            // \`      >\`,
            // \`        Column {{index}}\`,
            // \`      </div>\`,
            // \`    </Column>\`,
            // \`  </Row>\`,
            // \`</Grid>\`,
          ].join("\\n").trim();
        }
      }
    }
  }
}`,...(k=(I=g.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var A,V,$;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '忘記密碼',
  args: {
    //props
    bgColorSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
    bgImgSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
    title: "Forgot Your Password?",
    className: "",
    //slot
    description: \`<p class="text-neutral-600">Type in your registered email address to reset password</p>\`,
    form: \`<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email Address" placeholder="type email" :hint="{ description: 'Description', error: '' }" /></Column><Column md="12"><Button variant="filled" width="fluid">Submit</Button></Column></Row></Grid></div>\`
  },
  render: args => ({
    components: {
      AuthFlow,
      Grid,
      Row,
      Column,
      Checkbox,
      Button,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Type in your registered email address to reset password
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="text"
                                        prefix="SvgMail"
                                        initValue=""
                                        label="Email Address"
                                        placeholder="type email"
                                        :hint="{ description: 'Description', error: '' }"
                                    />
                                </Column>

                                <Column md="12">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Submit
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
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
          return [
            // \`<Grid\`,
            // \`  :fluid="\${args.fluid}"\`,
            // \`  :gap="\${args.gap}"\`,
            // \`  :className="\${args.className}"\`,
            // \`>\`,
            // \`  <Row\`,
            // \`    :justify="\${args.justify}"\`,
            // \`    :alignItem="\${args.alignItem}"\`,
            // \`    :hasGap="\${args.hasGap}"\`,
            // \`  >\`,
            // \`    <Column\`,
            // \`      v-for="(index) in 12"\`,
            // \`      :key="index"\`,
            // \`      :align="\${args.align}"\`,
            // \`      :xs="\${args.xs}"\`,
            // \`      :sm="\${args.sm}"\`,
            // \`      :md="\${args.md}"\`,
            // \`      :lg="\${args.lg}"\`,
            // \`      :xl="\${args.xl}"\`,
            // \`    >\`,
            // \`      <div\`,
            // \`        class="diagonal-background"\`,
            // \`        style="border:1px solid #ccc; padding:8px 16px;"\`,
            // \`      >\`,
            // \`        Column {{index}}\`,
            // \`      </div>\`,
            // \`    </Column>\`,
            // \`  </Row>\`,
            // \`</Grid>\`,
          ].join("\\n").trim();
        }
      }
    }
  }
}`,...($=(V=x.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var L,T,j;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '驗證代碼',
  args: {
    //props
    bgColorSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
    bgImgSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
    title: "Verify Code",
    className: "",
    //slot
    description: \`<p class="text-neutral-600">An authentication code has been sent to your email.</p>\`,
    form: \`<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><column md="12"><div class="flex item-center justify-center gap-2"><Title :level="2">A</Title><Title :level="2">-</Title><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /></div></column><Column md="6"><Button variant="soft" width="fluid" prefix="SvgClock">Resend 03:28</Button></Column><Column md="6"><Button variant="filled" width="fluid">Verify</Button></Column></Row></Grid></div>\`
  },
  render: args => ({
    components: {
      AuthFlow,
      Grid,
      Row,
      Column,
      Checkbox,
      Button,
      Input,
      Title
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        An authentication code has been sent to your email.
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <column md="12">
                                    <div class="flex item-center justify-center gap-2">
                                        <Title :level="2">A</Title>
                                        <Title :level="2">-</Title>
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                    </div>
                                </column>
                                
                                <Column md="6">
                                    <Button
                                        variant="soft"
                                        width="fluid"
                                        prefix="SvgClock"
                                    >
                                        Resend 03:28
                                    </Button>
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Verify
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
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
          return [
            // \`<Grid\`,
            // \`  :fluid="\${args.fluid}"\`,
            // \`  :gap="\${args.gap}"\`,
            // \`  :className="\${args.className}"\`,
            // \`>\`,
            // \`  <Row\`,
            // \`    :justify="\${args.justify}"\`,
            // \`    :alignItem="\${args.alignItem}"\`,
            // \`    :hasGap="\${args.hasGap}"\`,
            // \`  >\`,
            // \`    <Column\`,
            // \`      v-for="(index) in 12"\`,
            // \`      :key="index"\`,
            // \`      :align="\${args.align}"\`,
            // \`      :xs="\${args.xs}"\`,
            // \`      :sm="\${args.sm}"\`,
            // \`      :md="\${args.md}"\`,
            // \`      :lg="\${args.lg}"\`,
            // \`      :xl="\${args.xl}"\`,
            // \`    >\`,
            // \`      <div\`,
            // \`        class="diagonal-background"\`,
            // \`        style="border:1px solid #ccc; padding:8px 16px;"\`,
            // \`      >\`,
            // \`        Column {{index}}\`,
            // \`      </div>\`,
            // \`    </Column>\`,
            // \`  </Row>\`,
            // \`</Grid>\`,
          ].join("\\n").trim();
        }
      }
    }
  }
}`,...(j=(T=f.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var F,E,_;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '設定密碼',
  args: {
    //props
    bgColorSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
    bgImgSrc: "https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
    title: "Set a Password",
    className: "",
    //slot
    description: \`<p class="text-neutral-600">Please set a new password for your account.</p>\`,
    form: \`<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email Address" placeholder="type email" :hint="{ description: 'Description', error: '' }" /></Column><Column md="12"><Button variant="filled" width="fluid">Submit</Button></Column></Row></Grid></div>\`
  },
  render: args => ({
    components: {
      AuthFlow,
      Grid,
      Row,
      Column,
      Checkbox,
      Button,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Please set a new password for your account.
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password"
                                        placeholder="type password"
                                    />
                                </Column>

                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password Confirm"
                                        placeholder="type password"
                                    />
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="soft"
                                        width="fluid"
                                    >
                                        Reset
                                    </Button>
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Confirm
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
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
          return [
            // \`<Grid\`,
            // \`  :fluid="\${args.fluid}"\`,
            // \`  :gap="\${args.gap}"\`,
            // \`  :className="\${args.className}"\`,
            // \`>\`,
            // \`  <Row\`,
            // \`    :justify="\${args.justify}"\`,
            // \`    :alignItem="\${args.alignItem}"\`,
            // \`    :hasGap="\${args.hasGap}"\`,
            // \`  >\`,
            // \`    <Column\`,
            // \`      v-for="(index) in 12"\`,
            // \`      :key="index"\`,
            // \`      :align="\${args.align}"\`,
            // \`      :xs="\${args.xs}"\`,
            // \`      :sm="\${args.sm}"\`,
            // \`      :md="\${args.md}"\`,
            // \`      :lg="\${args.lg}"\`,
            // \`      :xl="\${args.xl}"\`,
            // \`    >\`,
            // \`      <div\`,
            // \`        class="diagonal-background"\`,
            // \`        style="border:1px solid #ccc; padding:8px 16px;"\`,
            // \`      >\`,
            // \`        Column {{index}}\`,
            // \`      </div>\`,
            // \`    </Column>\`,
            // \`  </Row>\`,
            // \`</Grid>\`,
          ].join("\\n").trim();
        }
      }
    }
  }
}`,...(_=(E=C.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const ot=["authFlowLoginStory","authFlowSignUpStory","authFlowForgetPasswordStory","authFlowVerifyPasswordStory","authFlowSetPasswordStory"];export{ot as __namedExportsOrder,x as authFlowForgetPasswordStory,c as authFlowLoginStory,C as authFlowSetPasswordStory,g as authFlowSignUpStory,f as authFlowVerifyPasswordStory,lt as default};
