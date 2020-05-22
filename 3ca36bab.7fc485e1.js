(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{1627:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,c({ref:t},i,{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},497:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(1627)),l={title:"\u4f7f\u7528 CSS Modules"},c={id:"css-modules",title:"\u4f7f\u7528 CSS Modules",description:"> 1.2.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0cRN \u7aef\u5df2\u517c\u5bb9",source:"@site/docs/css-modules.md",permalink:"/taro/docs/next/css-modules",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/css-modules.md",version:"next",sidebar:"docs",previous:{title:"\u4f7f\u7528 Redux",permalink:"/taro/docs/next/redux"},next:{title:"\u9879\u76ee\u6a21\u677f",permalink:"/taro/docs/next/template"}},s=[],i={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"1.2.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0cRN \u7aef\u5df2\u517c\u5bb9")),Object(o.b)("p",null,"Taro \u4e2d\u5185\u7f6e\u4e86 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"CSS Modules")," \u7684\u652f\u6301\uff0c\u4f46\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u5982\u679c\u9700\u8981\u5f00\u542f\u4f7f\u7528\uff0c\u8bf7\u5148\u5728",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/next/config-detail"}),"\u7f16\u8bd1\u914d\u7f6e"),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u3002"),Object(o.b)("p",null,"\u5c0f\u7a0b\u5e8f\u7aef\u5f00\u542f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"weapp: {\n  module: {\n    postcss: {\n      // css modules \u529f\u80fd\u5f00\u5173\u4e0e\u76f8\u5173\u914d\u7f6e\n      cssModules: {\n        enable: true, // \u9ed8\u8ba4\u4e3a false\uff0c\u5982\u9700\u4f7f\u7528 css modules \u529f\u80fd\uff0c\u5219\u8bbe\u4e3a true\n        config: {\n          namingPattern: 'module', // \u8f6c\u6362\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a global/module\uff0c\u4e0b\u6587\u8be6\u7ec6\u8bf4\u660e\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    }\n  }\n}\n")),Object(o.b)("p",null,"H5 \u7aef\u5f00\u542f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"h5: {\n  module: {\n    postcss: {\n      // css modules \u529f\u80fd\u5f00\u5173\u4e0e\u76f8\u5173\u914d\u7f6e\n      cssModules: {\n        enable: true, // \u9ed8\u8ba4\u4e3a false\uff0c\u5982\u9700\u4f7f\u7528 css modules \u529f\u80fd\uff0c\u5219\u8bbe\u4e3a true\n        config: {\n          namingPattern: 'module', // \u8f6c\u6362\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a global/module\uff0c\u4e0b\u6587\u8be6\u7ec6\u8bf4\u660e\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    }\n  }\n}\n")),Object(o.b)("p",null,"\u5728\u5f00\u542f\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728 Taro \u4e2d\u4f7f\u7528 CSS Modules \u529f\u80fd\u4e86\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cTaro \u4e2d\u4f7f\u7528 CSS Modules \u6709\u4e24\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u4e3a\u5168\u5c40\u8f6c\u6362\u53ca\u90e8\u5206\u81ea\u5b9a\u4e49\u8f6c\u6362\u6a21\u5f0f\uff0c\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"namingPattern")," \u914d\u7f6e\u8fdb\u884c\u63a7\u5236"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"namingPattern")," \u914d\u7f6e\u53d6\u503c\u5206\u522b\u5982\u4e0b\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"global"),"\uff0c\u8868\u793a\u5168\u5c40\u8f6c\u6362\uff0c\u6240\u6709\u6837\u5f0f\u6587\u4ef6\u90fd\u4f1a\u7ecf\u8fc7 CSS Modules \u8f6c\u6362\u5904\u7406\uff0c\u9664\u4e86\u6587\u4ef6\u540d\u4e2d\u5305\u542b ",Object(o.b)("inlineCode",{parentName:"li"},".global.")," \u7684\u6837\u5f0f\u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"module"),"\uff0c\u8868\u793a\u81ea\u5b9a\u4e49\u8f6c\u6362\uff0c\u53ea\u6709\u6587\u4ef6\u540d\u4e2d\u5305\u542b ",Object(o.b)("inlineCode",{parentName:"li"},".module.")," \u7684\u6837\u5f0f\u6587\u4ef6\u4f1a\u7ecf\u8fc7 CSS Modules \u8f6c\u6362\u5904\u7406")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"generateScopedName")," \u652f\u6301\u4f20\u5165\u5b57\u7b26\u4e32\u548c\u51fd\u6570\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\u5b57\u7b26\u4e32"),"\uff0c\u5176\u683c\u5f0f\u89c1\uff1a",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/webpack/loader-utils#interpolatename"}),"https://github.com/webpack/loader-utils#interpolatename"),"\uff0c\u503c\u5f97\u6307\u51fa\u7684\u662f\uff0c\u53ef\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"[local]")," \u53d6\u5176\u539f\u7c7b\u540d"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\u51fd\u6570"),"\uff0c\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"(localName: string, absoluteFilePath: string) => string"),"\uff0c\u5176\u4e2d ",Object(o.b)("inlineCode",{parentName:"li"},"localName")," \u4e3a\u539f\u7c7b\u540d\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"absoluteFilePath")," \u4e3a\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a\u65b0\u7684\u7c7b\u540d")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528\u81ea\u5b9a\u4e49\u8f6c\u6362\u6a21\u5f0f\uff0c\u8fd9\u6837\u7684\u8bdd\u5c31\u4e0d\u4f1a\u5f71\u54cd\u5230\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93\u7684\u6837\u5f0f\u4e86")),Object(o.b)("p",null,"CSS Modules \u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b"),Object(o.b)("p",null,"\u7ec4\u4ef6\u6837\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),".test {\n  color: red;\n  .txt {\n    font-size: 36px;\n  }\n}\n")),Object(o.b)("p",null,"\u7ec4\u4ef6 JS \u4e2d\u4f7f\u7528\u6837\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View, Text } from '@tarojs/components'\n\nimport styles from './Test.module.scss'\n\nexport default class Test extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { }\n  }\n\n  render () {\n    return (\n      <View className={styles.test}>\n        <Text className={styles.txt}>Hello world!</Text>\n      </View>\n    )\n  }\n}\n")))}b.isMDXComponent=!0}}]);