function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var preview$2 = {};
var story = {};
var general = {};
Object.defineProperty(general, "__esModule", { value: true });
general.setProperty = setProperty;
general.isPojo = isPojo;
general.isReactElement = isReactElement;
general.stringify = stringify;
function setProperty(object, path, value) {
  if (typeof object !== "object" || object === null) {
    return object;
  }
  const remainingPathSegments = path.split(".");
  const currentTargetSegment = remainingPathSegments.shift();
  if (!currentTargetSegment) {
    return object;
  }
  if (!remainingPathSegments.length) {
    object[currentTargetSegment] = value;
    return object;
  }
  let nextTargetObj = object[currentTargetSegment];
  if (nextTargetObj === void 0) {
    object[currentTargetSegment] = {};
    nextTargetObj = object[currentTargetSegment];
  } else if (!nextTargetObj || typeof nextTargetObj !== "object") {
    return object;
  }
  setProperty(nextTargetObj, remainingPathSegments.join("."), value);
  return object;
}
const POJO_PROTOTYPES = [Object.prototype, null];
function isPojo(val) {
  return Boolean(typeof val === "object" && val && POJO_PROTOTYPES.includes(Object.getPrototypeOf(val)) && !isReactElement(val));
}
function isReactElement(val) {
  return typeof val.$$typeof === "symbol";
}
function stringify(data) {
  return JSON.stringify(data, replacer, 2);
}
function replacer(inputKey, inputValue) {
  if (inputValue === void 0) {
    return "[undefined]";
  }
  if (typeof inputValue === "number") {
    if (isNaN(inputValue)) {
      return "[NaN]";
    }
    if (!isFinite(inputValue)) {
      return "[Infinity]";
    }
  }
  if (!inputValue) {
    return inputValue;
  }
  if (inputValue instanceof Error) {
    return `[Error("${inputValue.message}")]`;
  }
  if (typeof inputValue === "function") {
    return `[Function:${inputValue.name || "anonymous"}]`;
  }
  if (typeof inputValue === "symbol") {
    return `[${inputValue.toString()}]`;
  }
  if (inputValue instanceof Promise) {
    return "[Promise]";
  }
  if (inputValue instanceof Map) {
    const normalisedMap = {};
    for (const [key, value] of inputValue.entries()) {
      normalisedMap[key] = value;
    }
    return normalisedMap;
  }
  if (inputValue instanceof RegExp) {
    return inputValue.toString();
  }
  if (inputValue instanceof Set) {
    return Array.from(inputValue);
  }
  if (Array.isArray(inputValue)) {
    return inputValue.map((value, index) => {
      return replacer(`${inputKey}[${index}]`, value);
    });
  }
  if (typeof inputValue === "object") {
    if (isReactElement(inputValue)) {
      return "[ReactElement]";
    }
    const isPojoValue = isPojo(inputValue);
    if (isPojoValue) {
      return inputValue;
    }
    const className = inputValue.constructor.name;
    return `[${className}]`;
  }
  return inputValue;
}
Object.defineProperty(story, "__esModule", { value: true });
story.flattenObject = flattenObject;
story.createFlattenedArgTypes = createFlattenedArgTypes;
story.expandObject = expandObject;
const general_1 = general;
const PRIMITIVE_TYPE_NAMES = /* @__PURE__ */ new Set(["bigint", "boolean", "number", "string", "undefined"]);
function isPrimitive(value) {
  return PRIMITIVE_TYPE_NAMES.has(typeof value) || value === null;
}
function isNullish(value) {
  return value === null || value === void 0;
}
function flattenObject(nestedObject, context = {
  currentPath: "",
  flatObjectOut: {}
}) {
  if (!(0, general_1.isPojo)(nestedObject)) {
    return;
  }
  Object.entries(nestedObject).forEach(([key, value]) => {
    if (context.currentPath) {
      key = `${context.currentPath}.${key}`;
    }
    if (!(0, general_1.isPojo)(value)) {
      context.flatObjectOut[key] = value;
      return;
    }
    flattenObject(value, { currentPath: key, flatObjectOut: context.flatObjectOut });
  });
  return context.flatObjectOut;
}
function createObjectArgType(argName) {
  return {
    name: argName,
    control: { type: "object" }
  };
}
function createHiddenArgType(argPath) {
  return {
    name: argPath,
    table: { disable: true }
  };
}
function createPrimitiveArgInputTypeConfig(arg) {
  const commonConfig = { name: arg.name };
  switch (typeof arg.value) {
    case "string":
      return {
        ...commonConfig,
        type: { name: "string" },
        control: { type: "text" }
      };
    case "number":
    case "bigint":
      return {
        ...commonConfig,
        type: { name: "number" },
        control: { type: "number" }
      };
    case "boolean":
      return {
        ...commonConfig,
        type: { name: "boolean" },
        control: { type: "boolean" }
      };
    case "function":
    case "undefined":
    case "object":
    case "symbol":
    default: {
      const errorMessage = `Unsupported arg value type: ${typeof arg.value} for ${arg.name}`;
      console.error(errorMessage, arg);
      throw new Error(errorMessage);
    }
  }
}
function userAlreadyDefinedArgTypeForThisPath(argPath, userDefinedArgTypeNames) {
  for (const userDefinedArgTypeName of userDefinedArgTypeNames) {
    if (argPath.startsWith(`${userDefinedArgTypeName}.`)) {
      return true;
    }
  }
}
function createFlattenedArgTypes(context) {
  var _a;
  const flatInitialArgs = flattenObject(context.initialArgs ?? {});
  const argTypes = { ...context.argTypes ?? {} };
  const userDefinedArgTypeNames = getUserDefinedArgTypeNames(context);
  const controlMatcherEntries = Object.entries(((_a = context.parameters.controls) == null ? void 0 : _a.matchers) ?? {});
  for (const flattenedRootArgKey of getRootKeysThatWereFlattened(flatInitialArgs)) {
    if (!userDefinedArgTypeNames.has(flattenedRootArgKey)) {
      argTypes[flattenedRootArgKey] = createHiddenArgType(flattenedRootArgKey);
    }
  }
  for (const [argPath, argValue] of Object.entries(flatInitialArgs)) {
    if (argTypes[argPath]) {
      continue;
    }
    const matcherArgType = getArgTypeFromControlMatchers({ argPath, controlMatcherEntries });
    if (matcherArgType) {
      argTypes[argPath] = matcherArgType;
      continue;
    }
    if (Array.isArray(argValue)) {
      argTypes[argPath] = createObjectArgType(argPath);
      continue;
    }
    if (isNullish(argValue) || !isPrimitive(argValue)) {
      argTypes[argPath] = createHiddenArgType(argPath);
      continue;
    }
    if (userAlreadyDefinedArgTypeForThisPath(argPath, userDefinedArgTypeNames)) {
      continue;
    }
    argTypes[argPath] = createPrimitiveArgInputTypeConfig({ name: argPath, value: argValue });
  }
  return argTypes;
}
function getArgTypeFromControlMatchers({ argPath, controlMatcherEntries }) {
  const lastSegment = argPath.substring(argPath.lastIndexOf(".") + 1);
  for (const [controlType, matcherRegex] of controlMatcherEntries) {
    if (matcherRegex.test(lastSegment)) {
      return {
        name: argPath,
        control: { type: controlType }
      };
    }
  }
}
function getUserDefinedArgTypeNames({ argTypes = {}, parameters }) {
  if (!parameters.docs) {
    return new Set(Object.keys(argTypes));
  }
  const userDefinedArgTypeNames = /* @__PURE__ */ new Set();
  for (const [argName, argType] of Object.entries(argTypes)) {
    if (!isArgTypeLikelyGeneratedByDocs(argType)) {
      userDefinedArgTypeNames.add(argName);
    }
  }
  return userDefinedArgTypeNames;
}
const ARG_TYPE_PROPERTIES_ALWAYS_INCLUDED_BY_DOCS_ADDON = /* @__PURE__ */ new Set([
  "name",
  "description",
  "type",
  "table"
]);
function isArgTypeLikelyGeneratedByDocs(argType) {
  for (const argTypePropertyName of ARG_TYPE_PROPERTIES_ALWAYS_INCLUDED_BY_DOCS_ADDON) {
    if (!(argTypePropertyName in argType)) {
      return false;
    }
  }
  if (!argType.type || typeof argType.type !== "object") {
    return false;
  }
  const type = argType.type;
  if (typeof type.required !== "boolean" || typeof type.name !== "string") {
    return false;
  }
  if (!("table" in argType) || !argType.table || typeof argType.table !== "object") {
    return false;
  }
  const table = argType.table;
  if (!("jsDocTags" in table) || !table.type || typeof table.type !== "object" || typeof table.type.summary !== "string") {
    return false;
  }
  return true;
}
function getRootKeysThatWereFlattened(object) {
  return Object.keys(object).reduce((flattenedKeys, argKey) => {
    if (argKey.includes(".")) {
      const rootArgKey = argKey.substring(0, argKey.indexOf("."));
      flattenedKeys.add(rootArgKey);
    }
    return flattenedKeys;
  }, /* @__PURE__ */ new Set());
}
function expandObject(flatObject) {
  if (!flatObject) {
    return;
  }
  const flattenedRootArgKeys = getRootKeysThatWereFlattened(flatObject);
  return Object.entries(flatObject).filter(([key]) => !flattenedRootArgKeys.has(key)).reduce((out, [key, value]) => {
    return (0, general_1.setProperty)(out, key, value);
  }, {});
}
Object.defineProperty(preview$2, "__esModule", { value: true });
const story_1 = story;
const preview = {
  argsEnhancers: [
    /**
     * If enabled, adds initial args to fit the flattened controls
     */
    (context) => {
      var _a;
      if (!((_a = context.parameters.deepControls) == null ? void 0 : _a.enabled)) {
        return context.initialArgs;
      }
      return (0, story_1.flattenObject)(context.initialArgs);
    }
  ],
  argTypesEnhancers: [
    /**
     * If enabled, replaces controls with flattened controls based on the initial args
     * and these will be what the user interacts with, ie the flat args become the source of truth
     *
     * @remark Storybook still adds in the un-flattened args but these should be ignored
     */
    (context) => {
      var _a;
      if (!((_a = context.parameters.deepControls) == null ? void 0 : _a.enabled)) {
        return context.argTypes;
      }
      return (0, story_1.createFlattenedArgTypes)(context);
    }
  ],
  decorators: [
    /**
     * If enabled, un-flattens the args from controls to the original format
     * before passing them to the story component
     */
    (storyFn, context) => {
      var _a;
      if (!((_a = context.parameters.deepControls) == null ? void 0 : _a.enabled)) {
        return storyFn(context);
      }
      return storyFn({
        ...context,
        args: (0, story_1.expandObject)(context.args),
        initialArgs: (0, story_1.expandObject)(context.initialArgs)
      });
    }
  ]
};
var _default = preview$2.default = preview;
const preview$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _default
}, [preview$2]);
export {
  preview$1 as p
};
