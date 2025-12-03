import{p as R,u as se,r as z,N as j,g as m,O as re,c as p,d as y,a as F,n as q,t as V,F as M,q as L,h as O,s as ue,L as oe,o as c,E as me,m as de,G as pe,w as ce,k as fe,f as be}from"./vue.esm-bundler-DDwqdenp.js";import{v as ge}from"./v4-CtRu48qb.js";import{_ as W}from"./Input-CacIrQEz.js";import{_ as $}from"./Button-d_mq_x9n.js";import{_ as ne}from"./Select-CVjrDtAL.js";import{_ as ie}from"./Checkbox-DNeVhK8I.js";import{_ as he}from"./Radio-CY7UfkvI.js";import{_ as ve}from"./Textarea-DWYxSoPN.js";import"./Icon-BF6y4SVm.js";const De={key:0,class:"ded-form-header"},Be={key:1,class:"ded-form-description"},ye={key:1,class:"ded-form-validation-summary"},Fe={class:"ded-form-validation-list"},Ce={class:"ded-form-content"},ze={key:2,class:"ded-form-actions"},S=Object.assign({inheritAttrs:!1},{__name:"Form",props:R({title:{type:String,default:""},description:{type:String,default:""},size:{type:String,default:"medium",validator:a=>["small","medium","large"].includes(a)},layout:{type:String,default:"vertical",validator:a=>["horizontal","vertical","inline"].includes(a)},labelPosition:{type:String,default:"top",validator:a=>["top","left","right"].includes(a)},labelWidth:{type:String,default:"120px"},isDisabled:{type:Boolean,default:!1},showValidationSummary:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{default:()=>({})},modelModifiers:{}}),emits:R(["submit","reset","validate"],["update:modelValue"]),setup(a,{expose:t,emit:e}){const s=a,f=e,o=se(a,"modelValue"),d=ge(),C=z(null),D=j(new Map),n=z({}),b=m(()=>({[`ded-form-${s.layout}`]:s.layout,[`ded-form-${s.size}`]:s.size,[`ded-form-label-${s.labelPosition}`]:s.labelPosition,"ded-form-disabled":s.isDisabled,[s.className]:!!s.className})),w=m(()=>s.labelPosition==="left"||s.labelPosition==="right"?{width:s.labelWidth,minWidth:s.labelWidth}:{}),u=j({isValid:!0,isSubmitting:!1,isDirty:!1,touched:new Set});function N(l,r){D.set(l,{validator:r,isValid:!0,errors:[]})}function i(l){D.delete(l),delete n.value[l],u.touched.delete(l)}async function h(l){const r=D.get(l);if(!r||!r.validator)return!0;try{const v=o.value[l],B=await r.validator(v);return B===!0||B===void 0?(r.isValid=!0,r.errors=[],delete n.value[l],!0):(r.isValid=!1,r.errors=Array.isArray(B)?B:[B],n.value[l]=r.errors,!1)}catch(v){return r.isValid=!1,r.errors=[v.message||"驗證錯誤"],n.value[l]=r.errors,!1}}async function g(){const l=Array.from(D.keys()).map(v=>h(v)),r=await Promise.all(l);return u.isValid=r.every(v=>v),f("validate",{isValid:u.isValid,errors:n.value,values:o.value}),u.isValid}function T(){for(const l in o.value)delete o.value[l];n.value={},u.touched.clear(),u.isDirty=!1,D.forEach(l=>{l.isValid=!0,l.errors=[]}),f("reset",{values:o.value})}async function k(){if(!u.isSubmitting){u.isSubmitting=!0;try{await g()?f("submit",{values:o.value,isValid:!0}):f("submit",{values:o.value,isValid:!1,errors:n.value})}finally{u.isSubmitting=!1}}}function le(l){u.touched.add(l),u.isDirty=!0}return re("formContext",{formId:d,formState:u,modelValue:o,validationErrors:n,size:m(()=>s.size),labelPosition:m(()=>s.labelPosition),labelWidth:m(()=>s.labelWidth),isDisabled:m(()=>s.isDisabled),labelStyles:w,registerFormItem:N,unregisterFormItem:i,validateField:h,markFieldTouched:le}),t({validate:g,reset:T,submit:k,formRef:C,formState:u,validationErrors:n}),(l,r)=>(c(),p("form",ue({ref_key:"formRef",ref:C,class:["ded-form",b.value]},l.$attrs,{onSubmit:oe(k,["prevent"])}),[a.title||a.description?(c(),p("div",De,[a.title?(c(),p("h3",{key:0,class:q(["ded-form-title",`ded-text-${a.size}`])},V(a.title),3)):y("",!0),a.description?(c(),p("p",Be,V(a.description),1)):y("",!0)])):y("",!0),a.showValidationSummary&&Object.keys(n.value).length>0?(c(),p("div",ye,[r[0]||(r[0]=F("h4",{class:"ded-form-validation-title"},"請修正以下錯誤：",-1)),F("ul",Fe,[(c(!0),p(M,null,L(n.value,(v,B)=>(c(),p("li",{key:B,class:"ded-form-validation-item"},[F("strong",null,V(B)+":",1),(c(!0),p(M,null,L(v,_=>(c(),p("span",{key:_},V(_),1))),128))]))),128))])])):y("",!0),F("div",Ce,[O(l.$slots,"default",{formState:u,errors:n.value})]),l.$slots.actions?(c(),p("div",ze,[O(l.$slots,"actions",{formState:u,errors:n.value,validate:g,reset:T,submit:k})])):y("",!0)],16))}});S.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},expose:[{name:"validate"},{name:"reset"},{name:"submit"},{name:"formRef"},{name:"formState"},{name:"validationErrors"}],props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"layout",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["horizontal","vertical","inline"]},{name:"labelPosition",type:{name:"string"},defaultValue:{func:!1,value:"'top'"},values:["top","left","right"]},{name:"labelWidth",type:{name:"string"},defaultValue:{func:!1,value:"'120px'"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showValidationSummary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"submit"},{name:"reset"},{name:"validate"}],slots:[{name:"default",scoped:!0,bindings:[{name:"form-state",title:"binding"},{name:"errors",title:"binding"}]},{name:"actions",scoped:!0,bindings:[{name:"form-state",title:"binding"},{name:"errors",title:"binding"},{name:"validate",title:"binding"},{name:"reset",title:"binding"},{name:"submit",title:"binding"}]}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Form/Form.vue"]};const Se=["for"],Ve={key:0,class:"ded-form-item-required-mark"},Ie={class:"ded-form-item-control"},we={class:"ded-form-item-control-wrapper"},I={__name:"FormItem",props:{name:{type:String,required:!0},label:{type:String,default:""},required:{type:Boolean,default:!1},validator:{type:Function,default:void 0},size:{type:String,default:"",validator:a=>["","small","medium","large"].includes(a)},labelPosition:{type:String,default:"",validator:a=>["","top","left","right"].includes(a)},labelWidth:{type:String,default:""},isDisabled:{type:Boolean,default:!1},showErrorMessage:{type:Boolean,default:!0},className:{type:String,default:""}},setup(a){const t=a,e=de("formContext",null),s=m(()=>{var i;return t.size||((i=e==null?void 0:e.size)==null?void 0:i.value)||"medium"}),f=m(()=>{var i;return t.labelPosition||((i=e==null?void 0:e.labelPosition)==null?void 0:i.value)||"top"}),o=m(()=>{var i;return t.labelWidth||((i=e==null?void 0:e.labelWidth)==null?void 0:i.value)||"120px"}),d=m(()=>{var i;return t.isDisabled||((i=e==null?void 0:e.isDisabled)==null?void 0:i.value)||!1}),C=m(()=>f.value==="left"||f.value==="right"?{width:o.value,minWidth:o.value}:{}),D=m(()=>({[`ded-form-item-${f.value}`]:f.value,[`ded-form-item-${s.value}`]:s.value,"ded-form-item-required":t.required,"ded-form-item-disabled":d.value,"ded-form-item-error":n.value,[t.className]:!!t.className})),n=m(()=>{if(!e)return!1;const i=e.validationErrors.value[t.name];return i&&i.length>0}),b=m(()=>!e||!n.value?[]:e.validationErrors.value[t.name]||[]),w=()=>{if(!(!t.validator&&!t.required))return async i=>{const h=[];if(t.required&&(i==null||i===""||Array.isArray(i)&&i.length===0)&&h.push(`${t.label||t.name} 為必填欄位`),t.validator&&i!==void 0&&i!==null&&i!=="")try{const g=await t.validator(i);g!==!0&&g!==void 0&&(Array.isArray(g)?h.push(...g):typeof g=="string"&&h.push(g))}catch(g){h.push(g.message||"驗證失敗")}return h.length>0?h:!0}};me(()=>{if(e){const i=w();e.registerFormItem(t.name,i)}}),pe(()=>{e&&e.unregisterFormItem(t.name)}),ce([()=>t.validator,()=>t.required],()=>{if(e){const i=w();e.registerFormItem(t.name,i)}});function u(){e&&(e.markFieldTouched(t.name),setTimeout(()=>{e.validateField(t.name)},100))}function N(){e&&(e.markFieldTouched(t.name),e.validateField(t.name))}return(i,h)=>(c(),p("div",{class:q(["ded-form-item",D.value])},[a.label?(c(),p("div",{key:0,class:"ded-form-item-label-wrapper",style:fe(C.value)},[F("label",{for:a.name,class:q(["ded-form-item-label",`ded-text-${s.value}`])},[be(V(a.label)+" ",1),a.required?(c(),p("span",Ve,"*")):y("",!0)],10,Se)],4)):y("",!0),F("div",Ie,[F("div",we,[O(i.$slots,a.name,{fieldChange:u,fieldBlur:N,hasError:n.value,errorMessages:b.value,size:s.value,isDisabled:d.value,hint:{error:n.value?b.value.join(", "):"",description:""}})])])],2))}};I.__docgenInfo={exportName:"default",displayName:"FormItem",description:"",tags:{},props:[{name:"name",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validator",type:{name:"func"},defaultValue:{func:!1,value:"undefined"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["small","medium","large"]},{name:"labelPosition",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["top","left","right"]},{name:"labelWidth",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showErrorMessage",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"fieldChange",title:"binding"},{name:"fieldBlur",title:"binding"},{name:"hasError",title:"binding"},{name:"errorMessages",title:"binding"},{name:"size",title:"binding"},{name:"isDisabled",title:"binding"},{name:"hint",title:"binding"}]}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Form/FormItem.vue"]};const Oe={title:"Component/Form",component:S,tags:["autodocs"],argTypes:{title:{description:"表單標題",control:{type:"text"}},description:{description:"表單描述",control:{type:"text"}},size:{description:"表單尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},layout:{description:"表單布局",control:{type:"select"},options:["horizontal","vertical","inline"],table:{type:{summary:"horizontal | vertical | inline"}}},labelPosition:{description:"標籤位置",control:{type:"select"},options:["top","left","right"],table:{type:{summary:"top | left | right"}}},labelWidth:{description:"標籤寬度",control:{type:"text"}},isDisabled:{description:"是否禁用整個表單",control:{type:"boolean"}},showValidationSummary:{description:"是否顯示驗證摘要",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"表單資料",control:{type:"object"},table:{type:{summary:"object"},category:"v-model"}}},parameters:{docs:{title:"Form",description:{component:"表單組件的呈現及說明，提供完整的表單驗證和數據綁定功能。"}}}},A={name:"基本表單",args:{title:"基本表單",description:"請填寫以下資訊",size:"medium",layout:"vertical",labelPosition:"top",labelWidth:"120px",isDisabled:!1,showValidationSummary:!1,className:"",modelValue:{username:"",email:"",password:""}},render:a=>({components:{Form:S,FormItem:I,Input:W,Button:$},setup(){const t=z(a.modelValue);return{args:a,formData:t,emailValidator:d=>d?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)||"請輸入有效的電子信箱格式":!0,passwordValidator:d=>d&&d.length<6?"密碼至少需要 6 個字元":!0,handleSubmit:d=>{console.log("表單提交:",d)},handleReset:()=>{t.value={username:"",email:"",password:""}}}},template:`
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem
          name="username"
          label="使用者名稱"
          :required="true"
        >
          <template #username="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgAccount"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem
          name="email"
          label="電子信箱"
          :required="true"
          :validator="emailValidator"
        >
          <template #email="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgMail"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem
          name="password"
          label="密碼"
          :required="true"
          :validator="passwordValidator"
        >
          <template #password="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.password"
              type="password"
              placeholder="請輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <template #actions="{ formState, validate, reset }">
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
              @click="handleReset"
            >
              重設
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
              :isDisabled="formState.isSubmitting"
            >
              提交
            </Button>
          </div>
        </template>
      </Form>
    `}),parameters:{controls:{exclude:["submit","reset","validate"]},docs:{source:{transform:(a,t)=>{const{args:e}=t;return["<script setup>","import { ref } from 'vue';","import { Form, FormItem, Input, Button } from '@ded-wds-vue/ui';","","const formData = ref({","  username: '',","  email: '',","  password: '',","});","","const emailValidator = (value) => {","  if (!value) return true;","  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;","  return emailRegex.test(value) || '請輸入有效的電子信箱格式';","};","","const passwordValidator = (value) => {","  if (!value) return true;","  if (value.length < 6) return '密碼至少需要 6 個字元';","  return true;","};","","const handleSubmit = (event) => {","  console.log('表單提交:', event);","};","<\/script>","","<template>","  <Form",`    title="${e.title}"`,`    description="${e.description}"`,`    size="${e.size}"`,`    layout="${e.layout}"`,`    labelPosition="${e.labelPosition}"`,`    labelWidth="${e.labelWidth}"`,'    v-model="formData"','    @submit="handleSubmit"',"  >",'    <FormItem name="username" label="使用者名稱" :required="true">','      <template #username="{ fieldChange, fieldBlur, size, isDisabled }">',"        <Input",'          v-model="formData.username"','          placeholder="請輸入使用者名稱"','          :size="size"','          :isDisabled="isDisabled"','          prefix="SvgAccount"','          @input="fieldChange"','          @blur="fieldBlur"',"        />","      </template>","    </FormItem>","","    <!-- 其他表單項目... -->","","    <template #actions>",'      <Button variant="outlined" themeColor="neutral">重設</Button>','      <Button variant="filled" themeColor="primary" type="submit">提交</Button>',"    </template>","  </Form>","</template>"].join(`
`)}}}}},x={name:"水平布局表單",args:{title:"水平布局表單",description:"標籤在左側的表單布局",size:"medium",layout:"vertical",labelPosition:"left",labelWidth:"120px",isDisabled:!1,showValidationSummary:!1,className:"",modelValue:{name:"",gender:"",interests:[]}},render:a=>({components:{Form:S,FormItem:I,Input:W,Radio:he,Checkbox:ie,Button:$},setup(){const t=z(a.modelValue);return{args:a,formData:t,genderOptions:[{label:"男性",value:"male"},{label:"女性",value:"female"},{label:"其他",value:"other"}],interestOptions:[{label:"閱讀",value:"reading"},{label:"運動",value:"sports"},{label:"音樂",value:"music"},{label:"電影",value:"movies"}],handleSubmit:o=>{console.log("表單提交:",o)}}},template:`
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem
          name="name"
          label="姓名"
          :required="true"
        >
          <template #name="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.name"
              placeholder="請輸入姓名"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem
          name="gender"
          label="性別"
          :required="true"
        >
          <template #gender="{ fieldChange, size }">
            <Radio
              v-model="formData.gender"
              :dataSource="genderOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <FormItem
          name="interests"
          label="興趣"
        >
          <template #interests="{ fieldChange, size }">
            <Checkbox
              v-model="formData.interests"
              :dataSource="interestOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <template #actions>
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
            >
              儲存
            </Button>
          </div>
        </template>
      </Form>
    `}),parameters:{controls:{exclude:["submit","reset","validate"]}}},E={name:"複雜表單",args:{title:"用戶註冊表單",description:"請詳細填寫您的個人資訊",size:"medium",layout:"vertical",labelPosition:"top",labelWidth:"120px",isDisabled:!1,showValidationSummary:!0,className:"",modelValue:{username:"",email:"",password:"",confirmPassword:"",country:"",bio:"",agreeTerms:[]}},render:a=>({components:{Form:S,FormItem:I,Input:W,Select:ne,Textarea:ve,Checkbox:ie,Button:$},setup(){const t=z(a.modelValue);return{args:a,formData:t,countryOptions:[{label:"台灣",value:"taiwan"},{label:"香港",value:"hongkong"},{label:"新加坡",value:"singapore"},{label:"馬來西亞",value:"malaysia"},{label:"其他",value:"other"}],agreeTermsOptions:[{label:"我同意服務條款和隱私政策",value:!0}],emailValidator:n=>n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||"請輸入有效的電子信箱格式":!0,passwordValidator:n=>{if(!n)return!0;const b=[];return n.length<8&&b.push("密碼至少需要 8 個字元"),/[A-Z]/.test(n)||b.push("密碼需包含至少一個大寫字母"),/[a-z]/.test(n)||b.push("密碼需包含至少一個小寫字母"),/[0-9]/.test(n)||b.push("密碼需包含至少一個數字"),b.length>0?b:!0},confirmPasswordValidator:n=>n?n===t.value.password||"確認密碼與密碼不一致":!0,agreeTermsValidator:n=>Array.isArray(n)&&n.includes(!0)||"請同意服務條款才能繼續",handleSubmit:n=>{console.log("表單提交:",n)}}},template:`
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem name="username" label="使用者名稱" :required="true">
          <template #username="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgAccount"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="email" label="電子信箱" :required="true" :validator="emailValidator">
          <template #email="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgMail"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="password" label="密碼" :required="true" :validator="passwordValidator">
          <template #password="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.password"
              type="password"
              placeholder="請輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="confirmPassword" label="確認密碼" :required="true" :validator="confirmPasswordValidator">
          <template #confirmPassword="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.confirmPassword"
              type="password"
              placeholder="請再次輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="country" label="國家/地區" :required="true">
          <template #country="{ fieldChange, isDisabled }">
            <Select
              v-model="formData.country"
              :dataSource="countryOptions"
              placeholder="請選擇國家/地區"
              suffix="SvgArrowDown"
              :isDisabled="isDisabled"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <FormItem name="bio" label="個人簡介">
          <template #bio="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Textarea
              v-model="formData.bio"
              placeholder="請簡單描述您自己"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="agreeTerms" :validator="agreeTermsValidator">
          <template #agreeTerms="{ fieldChange, size }">
            <Checkbox
              v-model="formData.agreeTerms"
              :dataSource="agreeTermsOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <template #actions="{ formState }">
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
              :isDisabled="formState.isSubmitting"
            >
              {{ formState.isSubmitting ? '提交中...' : '註冊' }}
            </Button>
          </div>
        </template>
      </Form>
    `}),parameters:{controls:{exclude:["submit","reset","validate"]}}},P={name:"禁用狀態",args:{title:"禁用表單",description:"整個表單處於禁用狀態",size:"medium",layout:"vertical",labelPosition:"top",labelWidth:"120px",isDisabled:!0,showValidationSummary:!1,className:"",modelValue:{username:"john_doe",email:"john@example.com",status:"active"}},render:a=>({components:{Form:S,FormItem:I,Input:W,Select:ne,Button:$},setup(){const t=z(a.modelValue);return{args:a,formData:t,statusOptions:[{label:"啟用",value:"active"},{label:"停用",value:"inactive"},{label:"待審核",value:"pending"}]}},template:`
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
      >
        <FormItem name="username" label="使用者名稱">
          <template #username="{ size, isDisabled }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              prefix="SvgAccount"
            />
          </template>
        </FormItem>

        <FormItem name="email" label="電子信箱">
          <template #email="{ size, isDisabled }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              prefix="SvgMail"
            />
          </template>
        </FormItem>

        <FormItem name="status" label="狀態">
          <template #status="{ size, isDisabled }">
            <Select
              v-model="formData.status"
              :dataSource="statusOptions"
              placeholder="請選擇狀態"
              suffix="SvgArrowDown"
              :isDisabled="isDisabled"
            />
          </template>
        </FormItem>

        <template #actions>
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
              :isDisabled="args.isDisabled"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              :isDisabled="args.isDisabled"
            >
              儲存
            </Button>
          </div>
        </template>
      </Form>
    `}),parameters:{controls:{exclude:["submit","reset","validate"]}}};var U,H,Z;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '基本表單',
  args: {
    title: '基本表單',
    description: '請填寫以下資訊',
    size: 'medium',
    layout: 'vertical',
    labelPosition: 'top',
    labelWidth: '120px',
    isDisabled: false,
    showValidationSummary: false,
    className: '',
    modelValue: {
      username: '',
      email: '',
      password: ''
    }
  },
  render: args => ({
    components: {
      Form,
      FormItem,
      Input,
      Button
    },
    setup() {
      const formData = ref(args.modelValue);
      const emailValidator = value => {
        if (!value) return true;
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return emailRegex.test(value) || '請輸入有效的電子信箱格式';
      };
      const passwordValidator = value => {
        if (!value) return true;
        if (value.length < 6) return '密碼至少需要 6 個字元';
        return true;
      };
      const handleSubmit = event => {
        console.log('表單提交:', event);
      };
      const handleReset = () => {
        formData.value = {
          username: '',
          email: '',
          password: ''
        };
      };
      return {
        args,
        formData,
        emailValidator,
        passwordValidator,
        handleSubmit,
        handleReset
      };
    },
    template: \`
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem
          name="username"
          label="使用者名稱"
          :required="true"
        >
          <template #username="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgAccount"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem
          name="email"
          label="電子信箱"
          :required="true"
          :validator="emailValidator"
        >
          <template #email="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgMail"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem
          name="password"
          label="密碼"
          :required="true"
          :validator="passwordValidator"
        >
          <template #password="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.password"
              type="password"
              placeholder="請輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <template #actions="{ formState, validate, reset }">
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
              @click="handleReset"
            >
              重設
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
              :isDisabled="formState.isSubmitting"
            >
              提交
            </Button>
          </div>
        </template>
      </Form>
    \`
  }),
  parameters: {
    controls: {
      exclude: ['submit', 'reset', 'validate']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { ref } from 'vue';\`, \`import { Form, FormItem, Input, Button } from '@ded-wds-vue/ui';\`, \`\`, \`const formData = ref({\`, \`  username: '',\`, \`  email: '',\`, \`  password: '',\`, \`});\`, \`\`, \`const emailValidator = (value) => {\`, \`  if (!value) return true;\`, \`  const emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;\`, \`  return emailRegex.test(value) || '請輸入有效的電子信箱格式';\`, \`};\`, \`\`, \`const passwordValidator = (value) => {\`, \`  if (!value) return true;\`, \`  if (value.length < 6) return '密碼至少需要 6 個字元';\`, \`  return true;\`, \`};\`, \`\`, \`const handleSubmit = (event) => {\`, \`  console.log('表單提交:', event);\`, \`};\`, \`<\/script>\`, \`\`, \`<template>\`, \`  <Form\`, \`    title="\${args.title}"\`, \`    description="\${args.description}"\`, \`    size="\${args.size}"\`, \`    layout="\${args.layout}"\`, \`    labelPosition="\${args.labelPosition}"\`, \`    labelWidth="\${args.labelWidth}"\`, \`    v-model="formData"\`, \`    @submit="handleSubmit"\`, \`  >\`, \`    <FormItem name="username" label="使用者名稱" :required="true">\`, \`      <template #username="{ fieldChange, fieldBlur, size, isDisabled }">\`, \`        <Input\`, \`          v-model="formData.username"\`, \`          placeholder="請輸入使用者名稱"\`, \`          :size="size"\`, \`          :isDisabled="isDisabled"\`, \`          prefix="SvgAccount"\`, \`          @input="fieldChange"\`, \`          @blur="fieldBlur"\`, \`        />\`, \`      </template>\`, \`    </FormItem>\`, \`\`, \`    <!-- 其他表單項目... -->\`, \`\`, \`    <template #actions>\`, \`      <Button variant="outlined" themeColor="neutral">重設</Button>\`, \`      <Button variant="filled" themeColor="primary" type="submit">提交</Button>\`, \`    </template>\`, \`  </Form>\`, \`</template>\`].join('\\n');
        }
      }
    }
  }
}`,...(Z=(H=A.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '水平布局表單',
  args: {
    title: '水平布局表單',
    description: '標籤在左側的表單布局',
    size: 'medium',
    layout: 'vertical',
    labelPosition: 'left',
    labelWidth: '120px',
    isDisabled: false,
    showValidationSummary: false,
    className: '',
    modelValue: {
      name: '',
      gender: '',
      interests: []
    }
  },
  render: args => ({
    components: {
      Form,
      FormItem,
      Input,
      Radio,
      Checkbox,
      Button
    },
    setup() {
      const formData = ref(args.modelValue);
      const genderOptions = [{
        label: '男性',
        value: 'male'
      }, {
        label: '女性',
        value: 'female'
      }, {
        label: '其他',
        value: 'other'
      }];
      const interestOptions = [{
        label: '閱讀',
        value: 'reading'
      }, {
        label: '運動',
        value: 'sports'
      }, {
        label: '音樂',
        value: 'music'
      }, {
        label: '電影',
        value: 'movies'
      }];
      const handleSubmit = event => {
        console.log('表單提交:', event);
      };
      return {
        args,
        formData,
        genderOptions,
        interestOptions,
        handleSubmit
      };
    },
    template: \`
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem
          name="name"
          label="姓名"
          :required="true"
        >
          <template #name="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.name"
              placeholder="請輸入姓名"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem
          name="gender"
          label="性別"
          :required="true"
        >
          <template #gender="{ fieldChange, size }">
            <Radio
              v-model="formData.gender"
              :dataSource="genderOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <FormItem
          name="interests"
          label="興趣"
        >
          <template #interests="{ fieldChange, size }">
            <Checkbox
              v-model="formData.interests"
              :dataSource="interestOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <template #actions>
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
            >
              儲存
            </Button>
          </div>
        </template>
      </Form>
    \`
  }),
  parameters: {
    controls: {
      exclude: ['submit', 'reset', 'validate']
    }
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '複雜表單',
  args: {
    title: '用戶註冊表單',
    description: '請詳細填寫您的個人資訊',
    size: 'medium',
    layout: 'vertical',
    labelPosition: 'top',
    labelWidth: '120px',
    isDisabled: false,
    showValidationSummary: true,
    className: '',
    modelValue: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      bio: '',
      agreeTerms: []
    }
  },
  render: args => ({
    components: {
      Form,
      FormItem,
      Input,
      Select,
      Textarea,
      Checkbox,
      Button
    },
    setup() {
      const formData = ref(args.modelValue);
      const countryOptions = [{
        label: '台灣',
        value: 'taiwan'
      }, {
        label: '香港',
        value: 'hongkong'
      }, {
        label: '新加坡',
        value: 'singapore'
      }, {
        label: '馬來西亞',
        value: 'malaysia'
      }, {
        label: '其他',
        value: 'other'
      }];
      const agreeTermsOptions = [{
        label: '我同意服務條款和隱私政策',
        value: true
      }];

      // 驗證器
      const emailValidator = value => {
        if (!value) return true;
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return emailRegex.test(value) || '請輸入有效的電子信箱格式';
      };
      const passwordValidator = value => {
        if (!value) return true;
        const errors = [];
        if (value.length < 8) errors.push('密碼至少需要 8 個字元');
        if (!/[A-Z]/.test(value)) errors.push('密碼需包含至少一個大寫字母');
        if (!/[a-z]/.test(value)) errors.push('密碼需包含至少一個小寫字母');
        if (!/[0-9]/.test(value)) errors.push('密碼需包含至少一個數字');
        return errors.length > 0 ? errors : true;
      };
      const confirmPasswordValidator = value => {
        if (!value) return true;
        return value === formData.value.password || '確認密碼與密碼不一致';
      };
      const agreeTermsValidator = value => {
        return Array.isArray(value) && value.includes(true) || '請同意服務條款才能繼續';
      };
      const handleSubmit = event => {
        console.log('表單提交:', event);
      };
      return {
        args,
        formData,
        countryOptions,
        agreeTermsOptions,
        emailValidator,
        passwordValidator,
        confirmPasswordValidator,
        agreeTermsValidator,
        handleSubmit
      };
    },
    template: \`
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem name="username" label="使用者名稱" :required="true">
          <template #username="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgAccount"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="email" label="電子信箱" :required="true" :validator="emailValidator">
          <template #email="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgMail"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="password" label="密碼" :required="true" :validator="passwordValidator">
          <template #password="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.password"
              type="password"
              placeholder="請輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="confirmPassword" label="確認密碼" :required="true" :validator="confirmPasswordValidator">
          <template #confirmPassword="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.confirmPassword"
              type="password"
              placeholder="請再次輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="country" label="國家/地區" :required="true">
          <template #country="{ fieldChange, isDisabled }">
            <Select
              v-model="formData.country"
              :dataSource="countryOptions"
              placeholder="請選擇國家/地區"
              suffix="SvgArrowDown"
              :isDisabled="isDisabled"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <FormItem name="bio" label="個人簡介">
          <template #bio="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Textarea
              v-model="formData.bio"
              placeholder="請簡單描述您自己"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="agreeTerms" :validator="agreeTermsValidator">
          <template #agreeTerms="{ fieldChange, size }">
            <Checkbox
              v-model="formData.agreeTerms"
              :dataSource="agreeTermsOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <template #actions="{ formState }">
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
              :isDisabled="formState.isSubmitting"
            >
              {{ formState.isSubmitting ? '提交中...' : '註冊' }}
            </Button>
          </div>
        </template>
      </Form>
    \`
  }),
  parameters: {
    controls: {
      exclude: ['submit', 'reset', 'validate']
    }
  }
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ae,te;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '禁用狀態',
  args: {
    title: '禁用表單',
    description: '整個表單處於禁用狀態',
    size: 'medium',
    layout: 'vertical',
    labelPosition: 'top',
    labelWidth: '120px',
    isDisabled: true,
    showValidationSummary: false,
    className: '',
    modelValue: {
      username: 'john_doe',
      email: 'john@example.com',
      status: 'active'
    }
  },
  render: args => ({
    components: {
      Form,
      FormItem,
      Input,
      Select,
      Button
    },
    setup() {
      const formData = ref(args.modelValue);
      const statusOptions = [{
        label: '啟用',
        value: 'active'
      }, {
        label: '停用',
        value: 'inactive'
      }, {
        label: '待審核',
        value: 'pending'
      }];
      return {
        args,
        formData,
        statusOptions
      };
    },
    template: \`
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
      >
        <FormItem name="username" label="使用者名稱">
          <template #username="{ size, isDisabled }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              prefix="SvgAccount"
            />
          </template>
        </FormItem>

        <FormItem name="email" label="電子信箱">
          <template #email="{ size, isDisabled }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              prefix="SvgMail"
            />
          </template>
        </FormItem>

        <FormItem name="status" label="狀態">
          <template #status="{ size, isDisabled }">
            <Select
              v-model="formData.status"
              :dataSource="statusOptions"
              placeholder="請選擇狀態"
              suffix="SvgArrowDown"
              :isDisabled="isDisabled"
            />
          </template>
        </FormItem>

        <template #actions>
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
              :isDisabled="args.isDisabled"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              :isDisabled="args.isDisabled"
            >
              儲存
            </Button>
          </div>
        </template>
      </Form>
    \`
  }),
  parameters: {
    controls: {
      exclude: ['submit', 'reset', 'validate']
    }
  }
}`,...(te=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Te=["FormBasic","FormHorizontal","FormComplex","FormDisabled"];export{A as FormBasic,E as FormComplex,P as FormDisabled,x as FormHorizontal,Te as __namedExportsOrder,Oe as default};
