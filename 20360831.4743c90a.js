(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1627:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var r=a.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},l=function(e){var r=p(e.components);return a.a.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),l=p(t),u=n,m=l["".concat(o,".").concat(u)]||l[u]||s[u]||c;return t?a.a.createElement(m,i({ref:r},d,{components:t})):a.a.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var b in r)hasOwnProperty.call(r,b)&&(i[b]=r[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<c;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},344:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return b})),t.d(r,"default",(function(){return p}));var n=t(1),a=t(9),c=(t(0),t(1627)),o={title:"Taro.getRecorderManager()",sidebar_label:"getRecorderManager"},i={id:"apis/media/recorder/getRecorderManager",title:"Taro.getRecorderManager()",description:"\u83b7\u53d6**\u5168\u5c40\u552f\u4e00**\u7684\u5f55\u97f3\u7ba1\u7406\u5668 RecorderManager",source:"@site/docs/apis/media/recorder/getRecorderManager.md",permalink:"/taro/docs/next/apis/media/recorder/getRecorderManager",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/recorder/getRecorderManager.md",version:"next",sidebar_label:"getRecorderManager",sidebar:"API",previous:{title:"Taro.startRecord(option)",permalink:"/taro/docs/next/apis/media/recorder/startRecord"},next:{title:"RecorderManager",permalink:"/taro/docs/next/apis/media/recorder/RecorderManager"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={rightToc:b};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u83b7\u53d6",Object(c.b)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u5f55\u97f3\u7ba1\u7406\u5668 RecorderManager"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => RecorderManager\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const recorderManager = Taro.getRecorderManager()\nrecorderManager.onStart(() => {\n  console.log('recorder start')\n})\nrecorderManager.onPause(() => {\n  console.log('recorder pause')\n})\nrecorderManager.onStop((res) => {\n  console.log('recorder stop', res)\n  const { tempFilePath } = res\n})\nrecorderManager.onFrameRecorded((res) => {\n  const { frameBuffer } = res\n  console.log('frameBuffer.byteLength', frameBuffer.byteLength)\n})\nconst options = {\n  duration: 10000,\n  sampleRate: 44100,\n  numberOfChannels: 1,\n  encodeBitRate: 192000,\n  format: 'aac',\n  frameSize: 50\n}\nrecorderManager.start(options)\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getRecorderManager"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);