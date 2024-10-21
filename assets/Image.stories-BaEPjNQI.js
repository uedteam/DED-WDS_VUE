import{_ as s}from"./Image-BErXuixe.js";import"./vue.esm-bundler-Bm7qTojY.js";import"./index-Bb4qSo10.js";const v={title:"Design System/Image",component:s,tags:["autodocs"],argTypes:{src:{description:"圖片來源",table:{defaultValue:{summary:"01"}},control:{type:"select"},options:["01","02","03","04"],mapping:{"01":"libs/src/assets/fakeImg/avatar_01.jpg","02":"libs/src/assets/fakeImg/avatar_02.jpg","03":"libs/src/assets/fakeImg/avatar_03.jpg","04":"libs/src/assets/fakeImg/avatar_04.jpg"}},alt:{description:"圖片替代文字",control:{type:"text"}},objectFit:{description:"調整圖片適合其容器",control:{type:"select"},options:["cover","contain","fill","none"]},ratio:{description:"調整圖片比例",table:{defaultValue:{summary:"1/1"}},control:{type:"select"},options:["1/1","4/3","5/4","16/9"],mapping:{"1/1":"11","4/3":"43","5/4":"54","16/9":"169"}}},parameters:{docs:{title:"圖片",description:{component:"圖片組件的呈現及說明。"}}}},e={name:"基本圖片",args:{src:"01",alt:"User Photo",objectFit:"cover",ratio:"11"},render:t=>({components:{Image:s},setup(){return{args:t}},template:`
                <div style="width: 250px; height: 250px;">
                    <Image 
                        :ratio="args.ratio" 
                        :objectFit="args.objectFit" 
                        :src="args.src"
                        :alt="args.alt"></Image>
                </div>  
                `}),parameters:{controls:{}}},n={name:"圖片比例總覽",args:{src:"01",objectFit:"cover"},render:t=>({components:{Image:s},setup(){return{args:t}},template:`
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
    `}),parameters:{controls:{include:["objectFit","src"]}}},o={name:"圖片自適應",args:{src:"01",objectFit:"cover",ratio:"169"},render:t=>({components:{Image:s},setup(){return{args:t}},template:`
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
    `}),parameters:{controls:{include:["ratio","src"]}}};var a,i,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '基本圖片',
  args: {
    src: '01',
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
    }
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '圖片比例總覽',
  args: {
    src: '01',
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
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,m,d;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '圖片自適應',
  args: {
    src: '01',
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
    }
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const y=["ImageDefault","ImageRatio","ImageFit"];export{e as ImageDefault,o as ImageFit,n as ImageRatio,y as __namedExportsOrder,v as default};
