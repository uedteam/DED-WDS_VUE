import{_ as o}from"./Image-DHXTRmVG.js";import{a as h,b,_ as I}from"./Column-ITLnk9E2.js";import"./vue.esm-bundler-D0YZwI1O.js";const j={title:"Component/Image",component:o,tags:["autodocs"],argTypes:{src:{description:"圖片來源",control:{type:"text"}},alt:{description:"圖片替代文字",control:{type:"text"}},ratio:{description:"圖片比例",control:{type:"select",labels:{11:"1x1",43:"4x3",54:"5x4",169:"16x9"}},options:["11","43","54","169"],table:{type:{summary:"1x1 | 4x3 | 5x4 | 16x9"}}},objectFit:{description:"圖片填滿方式",control:{type:"select"},options:["cover","contain","fill","none"],table:{type:{summary:"cover | contain | fill | none"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"圖片",description:{component:"圖片組件的呈現及說明。"}}}},e={name:"預設項目",args:{src:"https://picsum.photos/300/300?random=1",alt:"placeholder",ratio:"1x1",objectFit:"cover",className:""},render:a=>({components:{Image:o,Grid:h,Row:b,Column:I},setup(){return{args:a}},template:`
            <Grid fluid>
                <Row hasGap>
                    <Column xs="12" sm="6" md="3">
                        <Image
                            :src="args.src"
                            :alt="args.alt"
                            :ratio="args.ratio"
                            :objectFit="args.objectFit"
                            :className="args.className"
                        ></Image>
                    </Column>
                </Row>
            </Grid>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:t}=s;return['<div class="ded-col-xs-12 ded-col-sm-6 ded-col-md-3">',"  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    ratio="${t.ratio}"`,`    objectFit="${t.objectFit}"`,`    className="${t.className}"`,"  ></Image>","</div>"].join(`
`).trim()}}}}},n={name:"圖片比例總覽",args:{src:"https://picsum.photos/300/300?random=1",alt:"",objectFit:"cover",className:""},render:a=>({components:{Image:o},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 24px;">
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image 
                       :src="args.src"
                       :alt="args.alt"
                       ratio="1x1"
                       :objectFit="args.objectFit"
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
                    <Image
                        :src="args.src"
                        :alt="args.alt"
                        ratio="4x3"
                        :objectFit="args.objectFit"
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
                    <Image
                        :src="args.src"
                        :alt="args.alt"
                        ratio="5x4"
                        :objectFit="args.objectFit"
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
                    <Image
                        :src="args.src"
                        :alt="args.alt"
                        ratio="16x9"
                        :objectFit="args.objectFit"
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
        `}),parameters:{controls:{include:["objectFit","src"]},docs:{source:{transform:(a,s)=>{const{args:t}=s;return["  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,'    ratio="1x1"',`    objectFit="${t.objectFit}"`,`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,'    ratio="4x3"',`    objectFit="${t.objectFit}"`,`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,'    ratio="5x4"',`    objectFit="${t.objectFit}"`,`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,'    ratio="16x9"',`    objectFit="${t.objectFit}"`,`    className="${t.className}"`,"  ></Image>"].join(`
`).trim()}}}}},r={name:"圖片自適應",args:{src:"https://picsum.photos/300/300?random=1",alt:"",ratio:"16x9",objectFit:"cover",className:""},render:a=>({components:{Image:o},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 24px;">
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image 
                           :src="args.src"
                           :alt="args.alt"
                           :ratio="args.ratio"
                           objectFit="cover"
                           class="${a.className}"
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
                           :alt="args.alt"
                           :ratio="args.ratio"
                           objectFit="contain"
                           class="${a.className}"
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
                           :alt="args.alt"
                           :ratio="args.ratio"
                           objectFit="fill"
                           class="${a.className}"
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
                           :alt="args.alt"
                           :ratio="args.ratio"
                           objectFit="none"
                           class="${a.className}"
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
        `}),parameters:{controls:{include:["ratio","src"]},docs:{source:{transform:(a,s)=>{const{args:t}=s;return["  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    ratio="${t.ratio}"`,'    objectFit="cover"',`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    ratio="${t.ratio}"`,'    objectFit="contain"',`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    ratio="${t.ratio}"`,'    objectFit="fill"',`    className="${t.className}"`,"  ></Image>","  <Image",`    src="${t.src}"`,`    alt="${t.alt}"`,`    ratio="${t.ratio}"`,'    objectFit="none"',`    className="${t.className}"`,"  ></Image>"].join(`
`).trim()}}}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    src: 'https://picsum.photos/300/300?random=1',
    alt: 'placeholder',
    ratio: '1x1',
    objectFit: 'cover',
    className: ''
  },
  render: args => ({
    components: {
      Image,
      Grid,
      Row,
      Column
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <Grid fluid>
                <Row hasGap>
                    <Column xs="12" sm="6" md="3">
                        <Image
                            :src="args.src"
                            :alt="args.alt"
                            :ratio="args.ratio"
                            :objectFit="args.objectFit"
                            :className="args.className"
                        ></Image>
                    </Column>
                </Row>
            </Grid>
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
          return ['<div class="ded-col-xs-12 ded-col-sm-6 ded-col-md-3">', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="\${args.ratio}"\`, \`    objectFit="\${args.objectFit}"\`, \`    className="\${args.className}"\`, '  ></Image>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,g,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '圖片比例總覽',
  args: {
    src: 'https://picsum.photos/300/300?random=1',
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
                    <Image 
                       :src="args.src"
                       :alt="args.alt"
                       ratio="1x1"
                       :objectFit="args.objectFit"
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
                    <Image
                        :src="args.src"
                        :alt="args.alt"
                        ratio="4x3"
                        :objectFit="args.objectFit"
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
                    <Image
                        :src="args.src"
                        :alt="args.alt"
                        ratio="5x4"
                        :objectFit="args.objectFit"
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
                    <Image
                        :src="args.src"
                        :alt="args.alt"
                        ratio="16x9"
                        :objectFit="args.objectFit"
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
          return ['  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="1x1"\`, \`    objectFit="\${args.objectFit}"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="4x3"\`, \`    objectFit="\${args.objectFit}"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="5x4"\`, \`    objectFit="\${args.objectFit}"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="16x9"\`, \`    objectFit="\${args.objectFit}"\`, \`    className="\${args.className}"\`, '  ></Image>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var d,u,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '圖片自適應',
  args: {
    src: 'https://picsum.photos/300/300?random=1',
    alt: '',
    ratio: '16x9',
    objectFit: 'cover',
    className: ''
  },
  render: args => ({
    components: {
      Image
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 24px;">
                <div style="position: relative; width: fit-content; height: fit-content;">
                    <Image 
                           :src="args.src"
                           :alt="args.alt"
                           :ratio="args.ratio"
                           objectFit="cover"
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
                           :alt="args.alt"
                           :ratio="args.ratio"
                           objectFit="contain"
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
                           :alt="args.alt"
                           :ratio="args.ratio"
                           objectFit="fill"
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
                           :alt="args.alt"
                           :ratio="args.ratio"
                           objectFit="none"
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
          return ['  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="\${args.ratio}"\`, \`    objectFit="cover"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="\${args.ratio}"\`, \`    objectFit="contain"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="\${args.ratio}"\`, \`    objectFit="fill"\`, \`    className="\${args.className}"\`, '  ></Image>', '  <Image', \`    src="\${args.src}"\`, \`    alt="\${args.alt}"\`, \`    ratio="\${args.ratio}"\`, \`    objectFit="none"\`, \`    className="\${args.className}"\`, '  ></Image>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const y=["ImageDefault","ImageRatio","ImageFit"];export{e as ImageDefault,r as ImageFit,n as ImageRatio,y as __namedExportsOrder,j as default};
