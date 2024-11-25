import{_ as o}from"./Image-Bq7-8FOd.js";import"./vue.esm-bundler-_3atnb9w.js";import"./index-Bb4qSo10.js";const v={title:"Design System/Image*",component:o,tags:["autodocs"],argTypes:{src:{description:"圖片來源",control:{type:"text"}},alt:{description:"圖片替代文字",control:{type:"text"}},objectFit:{description:"調整圖片適合其容器",control:{type:"select"},options:["cover","contain","fill","none"],table:{type:{summary:"cover | contain | fill | none"}}},ratio:{description:"調整圖片比例",control:{type:"select"},options:["11","43","54","169"],table:{defaultValue:{summary:"11"},type:{summary:"11 | 43 | 54 | 169"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"圖片",description:{component:"圖片組件的呈現及說明。"}}}},s={name:"預設項目",args:{src:"https://picsum.photos/300/300",alt:"User Photo",objectFit:"cover",ratio:"11",className:""},render:e=>({components:{Image:o},setup(){return{args:e}},template:`
            <div style="width: 250px; height: 250px;">
                <Image
                    :ratio="args.ratio"
                    :objectFit="args.objectFit"
                    :src="args.src"
                    :alt="args.alt"
                    :className="args.className"
                ></Image>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(e,a)=>{const{args:t}=a;return['<div style="width: 250px; height: 250px;">',"  <Image",`    ratio="${t.ratio}"`,`    objectFit="${t.objectFit}"`,`    src="${t.src}"`,`    alt="${t.alt}"`,`    className="${t.className}"`,"  ></Image>","</div>"].join(`
`).trim()}}}}},n={name:"圖片比例總覽",args:{src:"https://picsum.photos/300/300",alt:"",objectFit:"cover",className:""},render:e=>({components:{Image:o},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{include:["objectFit","src"]},docs:{source:{transform:(e,a)=>{const{args:t}=a;return["  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    objectFit="${t.objectFit}"`,'    ratio="11"',`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    objectFit="${t.objectFit}"`,'    ratio="43"',`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    objectFit="${t.objectFit}"`,'    ratio="54"',`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    objectFit="${t.objectFit}"`,'    ratio="169"',`    className="${t.className}"`,"  ></Image>"].join(`
`).trim()}}}}},r={name:"圖片自適應",args:{src:"https://picsum.photos/300/300",alt:"",objectFit:"cover",ratio:"169",className:""},render:e=>({components:{Image:o},setup(){return{args:e}},template:`
            <div style="display:flex; gap: 24px;">
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image 
                           :src="args.src"
                           objectFit="cover"
                           :ratio="args.ratio"
                           class="${e.className}"
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
                    <Image 
                           :src="args.src"
                           objectFit="contain"
                           :ratio="args.ratio"
                           class="${e.className}"
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
                    <Image 
                           :src="args.src"
                           objectFit="fill"
                           :ratio="args.ratio"
                           class="${e.className}"
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
                    <Image 
                           :src="args.src"
                           objectFit="none"
                           :ratio="args.ratio"
                           class="${e.className}"
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
        `}),parameters:{controls:{include:["ratio","src"]},docs:{source:{transform:(e,a)=>{const{args:t}=a;return["  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,'    objectFit="cover"',`    ratio="${t.ratio}"`,`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,'    objectFit="contain"',`    ratio="${t.ratio}"`,`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,'    objectFit="fill"',`    ratio="${t.ratio}"`,`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,'    objectFit="none"',`    ratio="${t.ratio}"`,`    className="${t.className}"`,"  ></Image>"].join(`
`).trim()}}}}};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    src: 'https://picsum.photos/300/300',
    alt: 'User Photo',
    objectFit: 'cover',
    ratio: '11',
    className: ''
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
                    :alt="args.alt"
                    :className="args.className"
                ></Image>
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
          return ['<div style="width: 250px; height: 250px;">', '  <Image', \`    ratio="\${args.ratio}"\`, \`    objectFit="\${args.objectFit}"\`, \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    className="\${args.className}"\`, '  ></Image>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,g,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '圖片比例總覽',
  args: {
    src: 'https://picsum.photos/300/300',
    alt: '',
    objectFit: 'cover',
    className: ''
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
          return ['  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    objectFit="\${args.objectFit}"\`, \`    ratio="11"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    objectFit="\${args.objectFit}"\`, \`    ratio="43"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    objectFit="\${args.objectFit}"\`, \`    ratio="54"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    objectFit="\${args.objectFit}"\`, \`    ratio="169"\`, \`    className="\${args.className}"\`, '  ></Image>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var d,u,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '圖片自適應',
  args: {
    src: 'https://picsum.photos/300/300',
    alt: '',
    objectFit: 'cover',
    ratio: '169',
    className: ''
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
                    <Image 
                           :src="args.src"
                           objectFit="cover"
                           :ratio="args.ratio"
                           class="\${args.className}"
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
                    <Image 
                           :src="args.src"
                           objectFit="contain"
                           :ratio="args.ratio"
                           class="\${args.className}"
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
                    <Image 
                           :src="args.src"
                           objectFit="fill"
                           :ratio="args.ratio"
                           class="\${args.className}"
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
                    <Image 
                           :src="args.src"
                           objectFit="none"
                           :ratio="args.ratio"
                           class="\${args.className}"
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
          return ['  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    objectFit="cover"\`, \`    ratio="\${args.ratio}"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    objectFit="contain"\`, \`    ratio="\${args.ratio}"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    objectFit="fill"\`, \`    ratio="\${args.ratio}"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    objectFit="none"\`, \`    ratio="\${args.ratio}"\`, \`    className="\${args.className}"\`, '  ></Image>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const $=["ImageDefault","ImageRatio","ImageFit"];export{s as ImageDefault,r as ImageFit,n as ImageRatio,$ as __namedExportsOrder,v as default};
