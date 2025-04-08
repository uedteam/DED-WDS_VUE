import { g as computed, c as createElementBlock, a as createBaseVNode, n as normalizeClass, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
const _hoisted_1 = ["src", "alt"];
const _sfc_main = {
  __name: "Image",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    ratio: {
      type: String,
      required: true,
      validator: (value) => ["1x1", "4x3", "5x4", "16x9"].includes(value)
    },
    objectFit: {
      type: String,
      required: true,
      validator: (value) => ["none", "cover", "contain", "fill"].includes(value)
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const imageContainerCVAClass = computed(() => {
      return cva("ded-image-cover-container", {
        variants: {
          ratio: {
            "1x1": "ratio-1x1",
            "4x3": "ratio-4x3",
            "5x4": "ratio-5x4",
            "16x9": "ratio-16x9"
          }
        }
      })({
        ratio: props.ratio
      });
    });
    const imageObjectFitCVAClass = computed(() => {
      return cva("ded-image-cover", {
        variants: {
          objectFit: {
            cover: "cover",
            contain: "contain",
            fill: "fill",
            none: "none"
          }
        }
      })({
        objectFit: props.objectFit
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([imageContainerCVAClass.value, ...props.className ? props.className.split(" ") : []])
      }, [
        createBaseVNode("img", {
          class: normalizeClass(imageObjectFitCVAClass.value),
          src: props.src,
          alt: props.alt
        }, null, 10, _hoisted_1)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Image", "description": "", "tags": {}, "props": [{ "name": "src", "type": { "name": "string" }, "required": true }, { "name": "alt", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "ratio", "type": { "name": "string" }, "required": true, "values": ["1x1", "4x3", "5x4", "16x9"] }, { "name": "objectFit", "type": { "name": "string" }, "required": true, "values": ["none", "cover", "contain", "fill"] }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Image/Image.vue"] };
export {
  _sfc_main as _
};
