import{h as p,e as y,i as h,f as w,g as d}from"./vue.esm-bundler-CsTC-5Ev.js";var v=Object.defineProperty,P=(e,t)=>{for(var r in t)v(e,r,{get:t[r],enumerable:!0})};const{sanitizeStoryContextUpdate:U}=__STORYBOOK_MODULE_PREVIEW_API__;var b={};P(b,{applyDecorators:()=>z,mount:()=>A,parameters:()=>C,render:()=>j,renderToCanvas:()=>N});var j=(e,t)=>{let{id:r,component:i}=t;if(!i)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);return()=>p(i,e,E(e,t))},I=async(e,t)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(r=>r(e,t)))},f=new Map;async function N({storyFn:e,forceRemount:t,showMain:r,showException:i,storyContext:n,id:a},s){let o=f.get(s);if(o&&!t){let l=e(),c=S(l,n);return R(o.reactiveArgs,c),()=>{g(o.vueApp,s)}}o&&t&&g(o.vueApp,s);let u=y({setup(){n.args=d(n.args);let l=e(),c=S(l,n),_={vueApp:u,reactiveArgs:d(c)};return f.set(s,_),()=>p(l)}});return u.config.errorHandler=(l,c,_)=>{var m;(m=window.__STORYBOOK_PREVIEW__)!=null&&m.storyRenders.some(O=>O.id===a&&O.phase==="playing")?setTimeout(()=>{throw l},0):i(l)},await I(u,n),u.mount(s),r(),()=>{g(u,s)}}function E(e,t){let{argTypes:r}=t,i=Object.entries(e).filter(([n])=>{var a,s;return((s=(a=r[n])==null?void 0:a.table)==null?void 0:s.category)==="slots"}).map(([n,a])=>[n,typeof a=="function"?a:()=>a]);return Object.fromEntries(i)}function S(e,t){return e.props&&h(e)?e.props:t.args}function R(e,t){if(Object.keys(t).length===0)return;let r=w(e)?e:d(e);Object.keys(r).forEach(i=>{i in t||delete r[i]}),Object.assign(r,t)}function g(e,t){e==null||e.unmount(),f.has(t)&&f.delete(t)}function F(e){return typeof e=="function"?{render:e,name:e.name}:e}function T(e,t){let r=e;return r===null?null:typeof r=="function"?r:t?{...F(r),components:{...r.components||{},story:t}}:{render(){return p(r)}}}function z(e,t){return t.reduce((r,i)=>n=>{let a,s=i(o=>{let u=U(o);return o&&(u.args=Object.assign(n.args,u.args)),a=r({...n,...u}),a},n);return a||(a=r(n)),s===a?a:T(s,()=>p(a))},r=>T(e(r)))}var A=e=>async(t,r)=>(t&&(e.originalStoryFn=()=>()=>p(t,r==null?void 0:r.props,r==null?void 0:r.slots)),await e.renderToCanvas(),e.canvas),C={renderer:"vue3"};export{z as applyDecorators,A as mount,C as parameters,j as render,N as renderToCanvas};
