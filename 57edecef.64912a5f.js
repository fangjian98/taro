(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{1627:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),O=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=O(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=O(a),d=r,m=j["".concat(c,".").concat(d)]||j[d]||p[d]||b;return a?n.a.createElement(m,l({ref:t},o,{components:a})):n.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},648:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var r=a(1),n=a(9),b=(a(0),a(1627)),c={title:"Taro.showModal(OBJECT)",sidebar_label:"showModal"},l={id:"version-1.3.42/apis/interface/interactives/showModal",title:"Taro.showModal(OBJECT)",description:"\u200b\u663e\u793a\u6a21\u6001\u5f39\u7a97\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.3.42/apis/interface/interactives/showModal.md",permalink:"/taro/docs/1.3.42/apis/interface/interactives/showModal",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/interface/interactives/showModal.md",version:"1.3.42",sidebar_label:"showModal",sidebar:"version-1.3.42/API",previous:{title:"Taro.hideLoading()",permalink:"/taro/docs/1.3.42/apis/interface/interactives/hideLoading"},next:{title:"Taro.showActionSheet(OBJECT)",permalink:"/taro/docs/1.3.42/apis/interface/interactives/showActionSheet"}},i=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u200b\u663e\u793a\u6a21\u6001\u5f39\u7a97\uff0c\u652f\u6301 ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"title"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u662f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63d0\u793a\u7684\u6807\u9898")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"content"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u662f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63d0\u793a\u7684\u5185\u5bb9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"showCancel"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u662f\u5426\u663e\u793a\u53d6\u6d88\u6309\u94ae\uff0c\u9ed8\u8ba4\u4e3a true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"cancelText"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57\uff0c\u9ed8\u8ba4\u4e3a"\u53d6\u6d88"\uff0c\u6700\u591a 4 \u4e2a\u5b57\u7b26')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"cancelColor"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HexColor"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272\uff0c\u9ed8\u8ba4\u4e3a"#000000"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"confirmText"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'\u786e\u5b9a\u6309\u94ae\u7684\u6587\u5b57\uff0c\u9ed8\u8ba4\u4e3a"\u786e\u5b9a"\uff0c\u6700\u591a 4 \u4e2a\u5b57\u7b26')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"confirmColor"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HexColor"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'\u786e\u5b9a\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272\uff0c\u9ed8\u8ba4\u4e3a"#3CC51F"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"success"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"fail"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"complete"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"success \u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u503c"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"confirm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u4e3a true \u65f6\uff0c\u8868\u793a\u7528\u6237\u70b9\u51fb\u4e86\u786e\u5b9a\u6309\u94ae")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"cancel"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u4e3a true \u65f6\uff0c\u8868\u793a\u7528\u6237\u70b9\u51fb\u4e86\u53d6\u6d88")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\n// \u6ce8\u610f\uff1a\u65e0\u8bba\u7528\u6237\u70b9\u51fb\u786e\u5b9a\u8fd8\u662f\u53d6\u6d88\uff0cPromise \u90fd\u4f1a resolve\u3002\nTaro.showModal({\n  title: 'xxx',\n  content: 'hello world',\n})\n  .then(res => console.log(res.confirm, res.cancel))\n")),Object(b.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.showModal"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}O.isMDXComponent=!0}}]);