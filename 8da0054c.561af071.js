(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1627:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return n?a.a.createElement(m,i({ref:t},b,{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},993:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(1627)),c={title:"Taro.onBeaconUpdate(CALLBACK)",sidebar_label:"onBeaconUpdate"},i={id:"version-3.0.0-beta.5/apis/device/ibeacon/onBeaconUpdate",title:"Taro.onBeaconUpdate(CALLBACK)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.onBeaconUpdate`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBeaconUpdate.html)\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/device/ibeacon/onBeaconUpdate.md",permalink:"/taro/docs/3.0.0-beta.5/apis/device/ibeacon/onBeaconUpdate",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/device/ibeacon/onBeaconUpdate.md",version:"3.0.0-beta.5",sidebar_label:"onBeaconUpdate",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.onBeaconServiceChange(CALLBACK)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/ibeacon/onBeaconServiceChange"},next:{title:"Taro.startBeaconDiscovery(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/ibeacon/startBeaconDiscovery"}},p=[{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],b={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBeaconUpdate.html"}),Object(o.b)("inlineCode",{parentName:"a"},"wx.onBeaconUpdate")),"\u3002"),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.onBeaconUpdate"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);