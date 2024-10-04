import{_ as s}from"./Image-BQXbcEBh.js";import"./Divider-PlWTLLgO.js";import"./vue.esm-bundler-CsTC-5Ev.js";import"./index-Bb4qSo10.js";const b={title:"Design System/Image",component:s,tags:["autodocs"],argTypes:{objectFit:{description:"調整圖片適合其容器",control:{type:"select"},options:["cover","contain","fill","none"]},ratio:{description:"調整圖片比例",control:{type:"select"},options:["1/1","4/3","5/4","16/9"],mapping:{"1/1":"11","4/3":"43","5/4":"54","16/9":"169"}}},parameters:{docs:{title:"圖片",description:{component:"圖片組件的呈現及說明。"}}}},e={name:"基本圖片",args:{ratio:"11",objectFit:"cover"},render:t=>({components:{Image:s},setup(){return{args:t}},template:`
            <div style="width: 250px; height: 250px;">
                <Image ratio="11" objectFit="cover" src="libs/src/assets/fakeImg/avatar_01.jpg"></Image>
            </div>  
            `}),parameters:{controls:{}}},n={name:"圖片比例",args:{objectFit:"cover"},render:t=>({components:{Image:s},setup(){return{args:t}},template:`
        <div style="display:flex; gap: 24px;">
            <div style="position: relative; width: fit-content; height: fit-content;">
              <Image ratio="11"
                     :objectFit="args.objectfit"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     :objectFit="args.objectfit"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     :objectFit="args.objectfit"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     :objectFit="args.objectfit"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
    `}),parameters:{controls:{}}},a={name:"圖片自適應",args:{ratio:"169"},render:t=>({components:{Image:s},setup(){return{args:t}},template:`
        <div style="display:flex; gap: 24px;">
            <div style="position: relative; width: fit-content; height: fit-content;">
              <Image :ratio="args.ratio"
                     objectFit="cover"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
    `}),parameters:{controls:{}}};var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '基本圖片',
  args: {
    ratio: '11',
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
            <div style="width: 250px; height: 250px;">
                <Image ratio="11" objectFit="cover" src="libs/src/assets/fakeImg/avatar_01.jpg"></Image>
            </div>  
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '圖片比例',
  args: {
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
                     :objectFit="args.objectfit"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     :objectFit="args.objectfit"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     :objectFit="args.objectfit"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     :objectFit="args.objectfit"
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,g,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '圖片自適應',
  args: {
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
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
                     src="libs/src/assets/fakeImg/avatar_01.jpg"
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
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const I=["ImageDefault","ImageRatio","ImageFit"];export{e as ImageDefault,a as ImageFit,n as ImageRatio,I as __namedExportsOrder,b as default};
