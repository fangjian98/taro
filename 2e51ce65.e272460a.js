(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{1627:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var b=n(0),c=n.n(b);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(null==e)return{};var n,b,c=function(e,t){if(null==e)return{};var n,b,c={},l=Object.keys(e);for(b=0;b<l.length;b++)n=l[b],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)n=l[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var j=c.a.createContext({}),o=function(e){var t=c.a.useContext(j),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},i=function(e){var t=o(e.components);return c.a.createElement(j.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(b.forwardRef)((function(e,t){var n=e.components,b=e.mdxType,l=e.originalType,r=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),i=o(n),d=b,p=i["".concat(r,".").concat(d)]||i[d]||u[d]||l;return n?c.a.createElement(p,a({ref:t},j,{components:n})):c.a.createElement(p,a({ref:t},j))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var l=n.length,r=new Array(l);r[0]=d;var a={};for(var O in t)hasOwnProperty.call(t,O)&&(a[O]=t[O]);a.originalType=e,a.mdxType="string"==typeof e?e:b,r[1]=a;for(var j=2;j<l;j++)r[j]=n[j];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},418:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return o}));var b=n(1),c=n(9),l=(n(0),n(1627)),r={title:"RichText",sidebar_label:"RichText"},a={id:"version-2.2.1/components/base/rich-text",title:"RichText",description:"\u5bcc\u6587\u672c",source:"@site/versioned_docs/version-2.2.1/components/base/rich-text.md",permalink:"/taro/docs/components/base/rich-text",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/components/base/rich-text.md",version:"2.2.1",sidebar_label:"RichText",sidebar:"version-2.2.1/components",previous:{title:"Progress",permalink:"/taro/docs/components/base/progress"},next:{title:"Button",permalink:"/taro/docs/components/forms/button"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"RichTextProps",id:"richtextprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TSpace",id:"tspace",children:[]},{value:"Text",id:"text",children:[]},{value:"HTMLElement",id:"htmlelement",children:[]}]},{value:"Nodes",id:"nodes",children:[{value:"\u7c7b\u578b",id:"\u7c7b\u578b-1",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function o(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5bcc\u6587\u672c"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RichTextProps>\n")),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  state = {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'Hello World!'\n      }]\n    }]\n  }\n  render () {\n    return (\n      <RichText nodes={this.state.nodes} />\n    )\n  }\n}\n")),Object(l.b)("h2",{id:"richtextprops"},"RichTextProps"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"nodes"),Object(l.b)("td",null,Object(l.b)("code",null,"Nodes")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8282\u70b9\u5217\u8868/ HTML String")),Object(l.b)("tr",null,Object(l.b)("td",null,"space"),Object(l.b)("td",null,Object(l.b)("code",null,'"ensp" | "emsp" | "nbsp"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u663e\u793a\u8fde\u7eed\u7a7a\u683c")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"RichTextProps.space"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"tspace"},"TSpace"),Object(l.b)("p",null,"space \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"ensp"),Object(l.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u4e00\u534a\u5927\u5c0f")),Object(l.b)("tr",null,Object(l.b)("td",null,"emsp"),Object(l.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u5927\u5c0f")),Object(l.b)("tr",null,Object(l.b)("td",null,"nbsp"),Object(l.b)("td",null,"\u6839\u636e\u5b57\u4f53\u8bbe\u7f6e\u7684\u7a7a\u683c\u5927\u5c0f")))),Object(l.b)("h3",{id:"text"},"Text"),Object(l.b)("p",null,"\u6587\u672c\u8282\u70b9"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",null,"\u8bf4\u660e"),Object(l.b)("th",null,"\u5907\u6ce8"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"type"),Object(l.b)("td",null,Object(l.b)("code",null,'"text"')),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",null,"\u6587\u672c\u7c7b\u578b"),Object(l.b)("td",null)),Object(l.b)("tr",null,Object(l.b)("td",null,"text"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'""')),Object(l.b)("td",null,"\u6587\u672c\u5b57\u7b26\u4e32"),Object(l.b)("td",null,Object(l.b)("code",null,"\u652f\u6301 entities"))))),Object(l.b)("h3",{id:"htmlelement"},"HTMLElement"),Object(l.b)("p",null,"\u5143\u7d20\u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a\u5143\u7d20\u8282\u70b9\n\u5168\u5c40\u652f\u6301class\u548cstyle\u5c5e\u6027\uff0c\u4e0d\u652f\u6301 id \u5c5e\u6027\u3002"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"),Object(l.b)("th",null,"\u5907\u6ce8"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"type"),Object(l.b)("td",null,Object(l.b)("code",null,'"node"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"HTML \u7c7b\u578b"),Object(l.b)("td",null)),Object(l.b)("tr",null,Object(l.b)("td",null,"name"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u6807\u7b7e\u540d"),Object(l.b)("td",null,Object(l.b)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684 HTML \u8282\u70b9"))),Object(l.b)("tr",null,Object(l.b)("td",null,"attrs"),Object(l.b)("td",null,Object(l.b)("code",null,"Object")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5c5e\u6027"),Object(l.b)("td",null,Object(l.b)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684\u5c5e\u6027\uff0c\u9075\u5faa Pascal \u547d\u540d\u6cd5"))),Object(l.b)("tr",null,Object(l.b)("td",null,"children"),Object(l.b)("td",null,Object(l.b)("code",null,"Nodes")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5b50\u8282\u70b9\u5217\u8868"),Object(l.b)("td",null,Object(l.b)("code",null,"\u7ed3\u6784\u548c nodes \u4e00\u81f4"))))),Object(l.b)("h2",{id:"nodes"},"Nodes"),Object(l.b)("p",null,"\u8282\u70b9\u7c7b\u578b"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u73b0\u652f\u6301\u4e24\u79cd\u8282\u70b9\uff0c\u901a\u8fc7type\u6765\u533a\u5206\uff0c\u5206\u522b\u662f\u5143\u7d20\u8282\u70b9\u548c\u6587\u672c\u8282\u70b9\uff0c\u9ed8\u8ba4\u662f\u5143\u7d20\u8282\u70b9\uff0c\u5728\u5bcc\u6587\u672c\u533a\u57df\u91cc\u663e\u793a\u7684HTML\u8282\u70b9 \u5143\u7d20\u8282\u70b9\uff1atype = node*")),Object(l.b)("h3",{id:"\u7c7b\u578b-1"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(Text | HTMLElement)[] | string\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"RichText"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}o.isMDXComponent=!0}}]);