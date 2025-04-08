import { j as jsxRuntimeExports, M as Meta, C as ColorPalette, a as ColorItem } from "./index-CqZpVCKX.js";
import { useMDXComponents } from "./index-BEXvw9r0.js";
import "./iframe-DCAjOq32.js";
import "./index-DgluPGAH.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: ["\n", "\n", jsxRuntimeExports.jsx(Meta, {
      title: "Token/Colors"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.primary",
        subtitle: "Status of the primary",
        colors: {
          Default: "#533BD4",
          Hover: "#3F2A9E"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.secondary",
        subtitle: "Status of the secondary",
        colors: {
          Default: "#68E1FE",
          Hover: "#4DC8E4"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.tertiary",
        subtitle: "Status of the tertiary",
        colors: {
          Default: "#EF68FF",
          Hover: "#D94DE4"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.success",
        subtitle: "Status of the success",
        colors: {
          Default: "#28C76F",
          Hover: "#28C76F"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.warning",
        subtitle: "Status of the warning",
        colors: {
          Default: "#FF9F43",
          Hover: "#FF9F43"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.error",
        subtitle: "Status of the error",
        colors: {
          Default: "#FF4C51",
          Hover: "#FF4C51"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.info",
        subtitle: "Status of the info",
        colors: {
          Default: "#00BAD1",
          Hover: "#00BAD1"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.disabled",
        subtitle: "Status of the disabled",
        colors: {
          Default: "#EEEEEE"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.mode",
        subtitle: "light and dark",
        colors: {
          Light: "#000000",
          Dark: "#FFFFFF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.layout",
        subtitle: "Status of the layout",
        colors: {
          Header: "#5F6873",
          Background: "#5F6873",
          Sidebar: "5F6873"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.border",
        subtitle: "Status of the border",
        colors: {
          Default: "#D9D9D9",
          Selected: "#FF6B00",
          Disabled: "#D9D9D9"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "theme.color.text",
        subtitle: "Status of the text",
        colors: {
          Primary: "#1C1C1C",
          Secondary: "#4D4D4D",
          Helper: "#808080",
          Placeholder: "#CCCCCC"
        }
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
export {
  MDXContent as default
};
