(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1627:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,O=p["".concat(o,".").concat(d)]||p[d]||s[d]||a;return n?c.a.createElement(O,b({ref:t},i,{components:n})):c.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<a;i++)o[i]=n[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},342:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),c=n(9),a=(n(0),n(1627)),o={title:"Taro.startBeaconDiscovery(option)",sidebar_label:"startBeaconDiscovery"},b={id:"apis/device/ibeacon/startBeaconDiscovery",title:"Taro.startBeaconDiscovery(option)",description:"\u5f00\u59cb\u641c\u7d22\u9644\u8fd1\u7684 iBeacon \u8bbe\u5907",source:"@site/docs/apis/device/ibeacon/startBeaconDiscovery.md",permalink:"/taro/docs/next/apis/device/ibeacon/startBeaconDiscovery",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/ibeacon/startBeaconDiscovery.md",version:"next",sidebar_label:"startBeaconDiscovery",sidebar:"API",previous:{title:"Taro.stopBeaconDiscovery(option)",permalink:"/taro/docs/next/apis/device/ibeacon/stopBeaconDiscovery"},next:{title:"Taro.onBeaconUpdate(callback)",permalink:"/taro/docs/next/apis/device/ibeacon/onBeaconUpdate"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:l};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5f00\u59cb\u641c\u7d22\u9644\u8fd1\u7684 iBeacon \u8bbe\u5907"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"uuids"),Object(a.b)("td",null,Object(a.b)("code",null,"string[]")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"iBeacon \u8bbe\u5907\u5e7f\u64ad\u7684 uuid \u5217\u8868")),Object(a.b)("tr",null,Object(a.b)("td",null,"complete"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: IBeaconError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"fail"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: IBeaconError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(a.b)("tr",null,Object(a.b)("td",null,"ignoreBluetoothAvailable"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u6821\u9a8c\u84dd\u7259\u5f00\u5173\uff0c\u4ec5\u5728 iOS \u4e0b\u6709\u6548")),Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: IBeaconError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.startBeaconDiscovery({\n  success: function (res) { }\n})\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.startBeaconDiscovery"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);