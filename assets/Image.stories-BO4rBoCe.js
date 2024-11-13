import{_ as i}from"./Image-KmhcDqSN.js";import"./vue.esm-bundler-Dy0-1sXb.js";import"./index-Bb4qSo10.js";const I={title:"Design System/Image*",component:i,tags:["autodocs"],argTypes:{src:{description:"圖片來源",control:{type:"text"}},alt:{description:"圖片替代文字",control:{type:"text"}},objectFit:{description:"調整圖片適合其容器",control:{type:"select"},options:["cover","contain","fill","none"]},ratio:{description:"調整圖片比例",table:{defaultValue:{summary:"1/1"}},control:{type:"select"},options:["1/1","4/3","5/4","16/9"],mapping:{"1/1":"11","4/3":"43","5/4":"54","16/9":"169"}}},parameters:{docs:{title:"圖片",description:{component:"圖片組件的呈現及說明。"}}}},o={name:"預設項目",args:{src:"https://picsum.photos/300/300",alt:"User Photo",objectFit:"cover",ratio:"11"},render:e=>({components:{Image:i},setup(){return{args:e}},template:`
            <div style="width: 250px; height: 250px;">
                <Image
                    :ratio="args.ratio"
                    :objectFit="args.objectFit"
                    :src="args.src"
                    :alt="args.alt"></Image>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:t}=n;return['<div style="width: 250px; height: 250px;">',"  <Image",`    ratio="${t.ratio}"`,`    objectFit="${t.objectFit}"`,`    src="${t.src}"`,`    alt="${t.alt}"`,"  ></Image>","</div>"].join(`
`).trim()}}}}},r={name:"圖片比例總覽",args:{src:"https://picsum.photos/300/300",objectFit:"cover"},render:e=>({components:{Image:i},setup(){return{args:e}},template:`
            <div style="display:flex; gap: 24px;">
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image ratio="11"
                           :objectFit="args.objectFit"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">1:1</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image ratio="43"
                           :objectFit="args.objectFit"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">4:3</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image ratio="54"
                           :objectFit="args.objectFit"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">5:4</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image ratio="169"
                           :objectFit="args.objectFit"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">16:9</p>
                </div>
            </div>
        `}),parameters:{controls:{include:["objectFit","src"]},docs:{source:{transform:(e,n)=>{const{args:t}=n;return['  <Image ratio="11"',`         objectFit="${t.objectFit}"`,`         src="${t.src}"`,'         style="width: 250px"',"  ></Image>",'  <Image ratio="43"',`         objectFit="${t.objectFit}"`,`         src="${t.src}"`,'         style="width: 250px"',"  ></Image>",'  <Image ratio="54"',`         objectFit="${t.objectFit}"`,`         src="${t.src}"`,'         style="width: 250px"',"  ></Image>",'  <Image ratio="169"',`         objectFit="${t.objectFit}"`,`         src="${t.src}"`,'         style="width: 250px"',"  ></Image>"].join(`
`).trim()}}}}},s={name:"圖片自適應",args:{src:"https://picsum.photos/300/300",objectFit:"cover",ratio:"169"},render:e=>({components:{Image:i},setup(){return{args:e}},template:`
            <div style="display:flex; gap: 24px;">
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image :ratio="args.ratio"
                           objectFit="cover"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">cover</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image :ratio="args.ratio"
                           objectFit="contain"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                      top: 50%; left: 50%;
                      transform: translateX(-50%) translateY(-50%); ;
                      font-size: 50px;
                      color:white">contain</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image :ratio="args.ratio"
                           objectFit="fill"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                        top: 50%; left: 50%;
                        transform: translateX(-50%) translateY(-50%); ;
                        font-size: 50px;
                        color:white">fill</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image :ratio="args.ratio"
                           objectFit="none"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                          top: 50%; left: 50%;
                          transform: translateX(-50%) translateY(-50%); ;
                          font-size: 50px;
                          color:white">none</p>
                </div>
            </div>
        `}),parameters:{controls:{include:["ratio","src"]},docs:{source:{transform:(e,n)=>{const{args:t}=n;return[`  <Image ratio="${t.ratio}"`,'         objectFit="cover"',`         src="${t.src}"`,'         style="width: 250px"',"  ></Image>",`  <Image ratio="${t.ratio}"`,'         objectFit="contain"',`         src="${t.src}"`,'         style="width: 250px"',"  ></Image>",`  <Image ratio="${t.ratio}"`,'         objectFit="fill"',`         src="${t.src}"`,'         style="width: 250px"',"  ></Image>",`  <Image ratio="${t.ratio}"`,'         objectFit="none"',`         src="${t.src}"`,'         style="width: 250px"',"  ></Image>"].join(`
`).trim()}}}}};var a,c,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    src: 'https://picsum.photos/300/300',
    alt: 'User Photo',
    objectFit: 'cover',
    ratio: '11'
  },
  render: args => ({
    components: {
      Image
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div style="width: 250px; height: 250px;">
                <Image
                    :ratio="args.ratio"
                    :objectFit="args.objectFit"
                    :src="args.src"
                    :alt="args.alt"></Image>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<div style="width: 250px; height: 250px;">', '  <Image', \`    ratio="\${args.ratio}"\`, \`    objectFit="\${args.objectFit}"\`, \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, '  ></Image>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,g,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '圖片比例總覽',
  args: {
    src: 'https://picsum.photos/300/300',
    objectFit: 'cover'
  },
  render: args => ({
    components: {
      Image
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 24px;">
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image ratio="11"
                           :objectFit="args.objectFit"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">1:1</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image ratio="43"
                           :objectFit="args.objectFit"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">4:3</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image ratio="54"
                           :objectFit="args.objectFit"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">5:4</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image ratio="169"
                           :objectFit="args.objectFit"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">16:9</p>
                </div>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['objectFit', 'src']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['  <Image ratio="11"', \`         objectFit="\${args.objectFit}"\`, \`         src="\${args.src}"\`, '         style="width: 250px"', '  ></Image>', '  <Image ratio="43"', \`         objectFit="\${args.objectFit}"\`, \`         src="\${args.src}"\`, '         style="width: 250px"', '  ></Image>', '  <Image ratio="54"', \`         objectFit="\${args.objectFit}"\`, \`         src="\${args.src}"\`, '         style="width: 250px"', '  ></Image>', '  <Image ratio="169"', \`         objectFit="\${args.objectFit}"\`, \`         src="\${args.src}"\`, '         style="width: 250px"', '  ></Image>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,h,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '圖片自適應',
  args: {
    src: 'https://picsum.photos/300/300',
    objectFit: 'cover',
    ratio: '169'
  },
  render: args => ({
    components: {
      Image
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 24px;">
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image :ratio="args.ratio"
                           objectFit="cover"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">cover</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image :ratio="args.ratio"
                           objectFit="contain"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                      top: 50%; left: 50%;
                      transform: translateX(-50%) translateY(-50%); ;
                      font-size: 50px;
                      color:white">contain</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image :ratio="args.ratio"
                           objectFit="fill"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                        top: 50%; left: 50%;
                        transform: translateX(-50%) translateY(-50%); ;
                        font-size: 50px;
                        color:white">fill</p>
                </div>
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image :ratio="args.ratio"
                           objectFit="none"
                           :src="args.src"
                           style="width: 250px"
                    ></Image>
                    <p
                        style="position: absolute; 
                          top: 50%; left: 50%;
                          transform: translateX(-50%) translateY(-50%); ;
                          font-size: 50px;
                          color:white">none</p>
                </div>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['ratio', 'src']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`  <Image ratio="\${args.ratio}"\`, '         objectFit="cover"', \`         src="\${args.src}"\`, '         style="width: 250px"', '  ></Image>', \`  <Image ratio="\${args.ratio}"\`, '         objectFit="contain"', \`         src="\${args.src}"\`, '         style="width: 250px"', '  ></Image>', \`  <Image ratio="\${args.ratio}"\`, '         objectFit="fill"', \`         src="\${args.src}"\`, '         style="width: 250px"', '  ></Image>', \`  <Image ratio="\${args.ratio}"\`, '         objectFit="none"', \`         src="\${args.src}"\`, '         style="width: 250px"', '  ></Image>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const v=["ImageDefault","ImageRatio","ImageFit"];export{o as ImageDefault,s as ImageFit,r as ImageRatio,v as __namedExportsOrder,I as default};
