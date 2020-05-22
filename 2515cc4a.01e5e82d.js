(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1627:function(e,t,b){"use strict";b.d(t,"a",(function(){return o})),b.d(t,"b",(function(){return m}));var n=b(0),c=b.n(n);function l(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function r(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,n)}return b}function a(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?r(Object(b),!0).forEach((function(t){l(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):r(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function O(e,t){if(null==e)return{};var b,n,c=function(e,t){if(null==e)return{};var b,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||(c[b]=e[b]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(c[b]=e[b])}return c}var j=c.a.createContext({}),d=function(e){var t=c.a.useContext(j),b=t;return e&&(b="function"==typeof e?e(t):a({},t,{},e)),b},o=function(e){var t=d(e.components);return c.a.createElement(j.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var b=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),o=d(b),u=n,m=o["".concat(r,".").concat(u)]||o[u]||i[u]||l;return b?c.a.createElement(m,a({ref:t},j,{components:b})):c.a.createElement(m,a({ref:t},j))}));function m(e,t){var b=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=b.length,r=new Array(l);r[0]=u;var a={};for(var O in t)hasOwnProperty.call(t,O)&&(a[O]=t[O]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var j=2;j<l;j++)r[j]=b[j];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,b)}u.displayName="MDXCreateElement"},375:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return r})),b.d(t,"metadata",(function(){return a})),b.d(t,"rightToc",(function(){return O})),b.d(t,"default",(function(){return d}));var n=b(1),c=b(9),l=(b(0),b(1627)),r={title:"Camera",sidebar_label:"Camera"},a={id:"version-2.2.1/components/media/camera",title:"Camera",description:"\u7cfb\u7edf\u76f8\u673a",source:"@site/versioned_docs/version-2.2.1/components/media/camera.md",permalink:"/taro/docs/components/media/camera",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/components/media/camera.md",version:"2.2.1",sidebar_label:"Camera",sidebar:"version-2.2.1/components",previous:{title:"Video",permalink:"/taro/docs/components/media/video"},next:{title:"Map",permalink:"/taro/docs/components/maps/map"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"CameraProps",id:"cameraprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"mode",id:"mode",children:[]},{value:"resolution",id:"resolution",children:[]},{value:"devicePosition",id:"deviceposition",children:[]},{value:"flash",id:"flash",children:[]},{value:"frameSize",id:"framesize",children:[]},{value:"onInitDoneEventDetail",id:"oninitdoneeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function d(e){var t=e.components,b=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},j,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u7cfb\u7edf\u76f8\u673a"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CameraProps>\n")),Object(l.b)("h2",{id:"cameraprops"},"CameraProps"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"mode"),Object(l.b)("td",null,Object(l.b)("code",null,'"normal" | "scanCode"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"normal"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6a21\u5f0f\uff0c\u6709\u6548\u503c\u4e3anormal, scanCode")),Object(l.b)("tr",null,Object(l.b)("td",null,"resolution"),Object(l.b)("td",null,Object(l.b)("code",null,'"low" | "medium" | "high"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"medium"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5206\u8fa8\u7387\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539")),Object(l.b)("tr",null,Object(l.b)("td",null,"devicePosition"),Object(l.b)("td",null,Object(l.b)("code",null,'"front" | "back"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"back"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6444\u50cf\u5934\u671d\u5411")),Object(l.b)("tr",null,Object(l.b)("td",null,"flash"),Object(l.b)("td",null,Object(l.b)("code",null,'"auto" | "on" | "off" | "torch"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"auto"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u95ea\u5149\u706f")),Object(l.b)("tr",null,Object(l.b)("td",null,"frameSize"),Object(l.b)("td",null,Object(l.b)("code",null,'"medium" | "small" | "large"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"medium"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6307\u5b9a\u671f\u671b\u7684\u76f8\u673a\u5e27\u6570\u636e\u5c3a\u5bf8")),Object(l.b)("tr",null,Object(l.b)("td",null,"scanArea"),Object(l.b)("td",null,Object(l.b)("code",null,"number[]")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u626b\u7801\u8bc6\u522b\u533a\u57df\uff0c\u683c\u5f0f\u4e3a[x, y, w, h]\uff0c",Object(l.b)("br",null),"x,y\u662f\u76f8\u5bf9\u4e8ecamera\u663e\u793a\u533a\u57df\u7684\u5de6\u4e0a\u89d2\uff0c",Object(l.b)("br",null),'w,h\u4e3a\u533a\u57df\u5bbd\u5ea6\uff0c\u5355\u4f4dpx\uff0c\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')),Object(l.b)("tr",null,Object(l.b)("td",null,"onStop"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<any>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6444\u50cf\u5934\u5728\u975e\u6b63\u5e38\u7ec8\u6b62\u65f6\u89e6\u53d1\uff0c",Object(l.b)("br",null),"\u5982\u9000\u51fa\u540e\u53f0\u7b49\u60c5\u51b5")),Object(l.b)("tr",null,Object(l.b)("td",null,"onError"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<any>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u7528\u6237\u4e0d\u5141\u8bb8\u4f7f\u7528\u6444\u50cf\u5934\u65f6\u89e6\u53d1")),Object(l.b)("tr",null,Object(l.b)("td",null,"onInitDone"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onInitDoneEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u76f8\u673a\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),Object(l.b)("tr",null,Object(l.b)("td",null,"onScanCode"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<any>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5728\u6210\u529f\u8bc6\u522b\u5230\u4e00\u7ef4\u7801\u65f6\u89e6\u53d1\uff0c",Object(l.b)("br",null),'\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.resolution"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.devicePosition"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.flash"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.frameSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.scanArea"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.onStop"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.onError"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.onInitDone"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.onScanCode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"mode"},"mode"),Object(l.b)("p",null,"mode \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"normal"),Object(l.b)("td",null,"\u76f8\u673a\u6a21\u5f0f")),Object(l.b)("tr",null,Object(l.b)("td",null,"scanCode"),Object(l.b)("td",null,"\u626b\u7801\u6a21\u5f0f")))),Object(l.b)("h3",{id:"resolution"},"resolution"),Object(l.b)("p",null,"resolution \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"low"),Object(l.b)("td",null,"\u4f4e")),Object(l.b)("tr",null,Object(l.b)("td",null,"medium"),Object(l.b)("td",null,"\u4e2d")),Object(l.b)("tr",null,Object(l.b)("td",null,"high"),Object(l.b)("td",null,"\u9ad8")))),Object(l.b)("h3",{id:"deviceposition"},"devicePosition"),Object(l.b)("p",null,"device-position \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"front"),Object(l.b)("td",null,"\u524d\u7f6e")),Object(l.b)("tr",null,Object(l.b)("td",null,"back"),Object(l.b)("td",null,"\u540e\u7f6e")))),Object(l.b)("h3",{id:"flash"},"flash"),Object(l.b)("p",null,"flash \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"auto"),Object(l.b)("td",null,"\u81ea\u52a8")),Object(l.b)("tr",null,Object(l.b)("td",null,"on"),Object(l.b)("td",null,"\u6253\u5f00")),Object(l.b)("tr",null,Object(l.b)("td",null,"off"),Object(l.b)("td",null,"\u5173\u95ed")),Object(l.b)("tr",null,Object(l.b)("td",null,"torch"),Object(l.b)("td",null,"\u5e38\u4eae")))),Object(l.b)("h3",{id:"framesize"},"frameSize"),Object(l.b)("p",null,"frame-size \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"small"),Object(l.b)("td",null,"\u5c0f\u5c3a\u5bf8\u5e27\u6570\u636e")),Object(l.b)("tr",null,Object(l.b)("td",null,"medium"),Object(l.b)("td",null,"\u4e2d\u5c3a\u5bf8\u5e27\u6570\u636e")),Object(l.b)("tr",null,Object(l.b)("td",null,"large"),Object(l.b)("td",null,"\u5927\u5c3a\u5bf8\u5e27\u6570\u636e")))),Object(l.b)("h3",{id:"oninitdoneeventdetail"},"onInitDoneEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"maxZoom"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u6700\u5927\u53d8\u7126")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Camera"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);