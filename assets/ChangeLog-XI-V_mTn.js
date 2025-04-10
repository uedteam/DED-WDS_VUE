import { j as jsxRuntimeExports, M as Meta, h as Markdown } from "./index-Cnq8RY_J.js";
import { useMDXComponents } from "./index-C_cEWya8.js";
import "./iframe-ospkXBJt.js";
import "./index-DgluPGAH.js";
import "./index-BdOSk9or.js";
const Readme = '## v1.0.17-beta (2025-03-31)\n\n\n### 🆙 Updates: @ded-wds-vue/ui (#111)\n- sync with React version SCSS\n- Fix Input Story Copy code\n- Fix Textarea Story Copy code\n- change "href" to "path"\n- install nanoid\n\n### 🆙 Updates: @ded-wds-vue/ui (#template)\n- Fix Card #header #footer slot option\n- Fix SideNav to receive hex color code\n- Fix Menu children link problem\n- Fix StatusIndicator Story Copy code';
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: ["\n", "\n", "\n", jsxRuntimeExports.jsx(Meta, {
      title: "Introduction/Changelog"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "changelog",
      children: "Changelog"
    }), "\n", jsxRuntimeExports.jsx(Markdown, {
      children: Readme
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
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
