(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1627:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},949:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(1627)),c={title:"\u8def\u7531\u529f\u80fd"},i={id:"version-3.0.0-beta.5/router",title:"\u8def\u7531\u529f\u80fd",description:"## \u8def\u7531 API \u8bf4\u660e",source:"@site/versioned_docs/version-3.0.0-beta.5/router.md",permalink:"/taro/docs/3.0.0-beta.5/router",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/router.md",version:"3.0.0-beta.5",sidebar:"version-3.0.0-beta.5/docs",previous:{title:"\u9879\u76ee\u914d\u7f6e",permalink:"/taro/docs/3.0.0-beta.5/project-config"},next:{title:"\u8bbe\u8ba1\u7a3f\u53ca\u5c3a\u5bf8\u5355\u4f4d",permalink:"/taro/docs/3.0.0-beta.5/size"}},p=[{value:"\u8def\u7531 API \u8bf4\u660e",id:"\u8def\u7531-api-\u8bf4\u660e",children:[]},{value:"\u8def\u7531\u4f20\u53c2",id:"\u8def\u7531\u4f20\u53c2",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u8def\u7531-api-\u8bf4\u660e"},"\u8def\u7531 API \u8bf4\u660e"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("strong",{parentName:"p"},"Taro")," \u4e2d\uff0c\u8def\u7531\u529f\u80fd\u662f\u9ed8\u8ba4\u81ea\u5e26\u7684\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u8005\u8fdb\u884c\u989d\u5916\u7684\u8def\u7531\u914d\u7f6e\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u5728\u5165\u53e3\u6587\u4ef6\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"config")," \u914d\u7f6e\u4e2d\u6307\u5b9a\u597d ",Object(o.b)("inlineCode",{parentName:"p"},"pages"),"\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u901a\u8fc7 ",Object(o.b)("strong",{parentName:"p"},"Taro")," \u63d0\u4f9b\u7684 API \u6765\u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// \u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u6253\u5f00\u65b0\u9875\u9762\nTaro.navigateTo({\n  url: '/pages/page/path/name'\n})\n\n// \u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u5728\u5f53\u524d\u9875\u9762\u6253\u5f00\nTaro.redirectTo({\n  url: '/pages/page/path/name'\n})\n")),Object(o.b)("p",null,"\u5177\u4f53 API \u8bf4\u660e\uff0c\u8bf7\u67e5\u770b",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./apis/interface/navigation/navigateTo.html"}),"\u5bfc\u822a"),"\u90e8\u5206\u8bf4\u660e\u3002"),Object(o.b)("h2",{id:"\u8def\u7531\u4f20\u53c2"},"\u8def\u7531\u4f20\u53c2"),Object(o.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728\u6240\u6709\u8df3\u8f6c\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"url")," \u540e\u9762\u6dfb\u52a0\u67e5\u8be2\u5b57\u7b26\u4e32\u53c2\u6570\u8fdb\u884c\u8df3\u8f6c\u4f20\u53c2\uff0c\u4f8b\u5982"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// \u4f20\u5165\u53c2\u6570 id=2&type=test\nTaro.navigateTo({\n  url: '/pages/page/path/name?id=2&type=test'\n})\n\n")),Object(o.b)("p",null,"\u8fd9\u6837\u7684\u8bdd\uff0c\u5728\u8df3\u8f6c\u6210\u529f\u7684\u76ee\u6807\u9875\u7684",Object(o.b)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f"),"\u65b9\u6cd5\u91cc\u5c31\u80fd\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"Current.router.params")," \u83b7\u53d6\u5230\u4f20\u5165\u7684\u53c2\u6570\uff0c\u4f8b\u5982\u4e0a\u8ff0\u8df3\u8f6c\uff0c\u5728\u76ee\u6807\u9875\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillMount"),"\uff08\u6216 Vue \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"created"),"\uff09 \u751f\u547d\u5468\u671f\u91cc\u83b7\u53d6\u5165\u53c2:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Current } from '@tarojs/taro'\n\nclass C extends Taro.Component {\n  componentWillMount () {\n    console.log(Current.router.params) // \u8f93\u51fa { id: 2, type: 'test' }\n  }\n}\n")))}u.isMDXComponent=!0}}]);