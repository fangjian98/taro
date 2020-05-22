(window.webpackJsonp=window.webpackJsonp||[]).push([[1211],{1347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var c=n(1),l=n(9),r=(n(0),n(1627)),b={title:"Taro.getAvailableAudioSources(option)",sidebar_label:"getAvailableAudioSources"},a={id:"apis/media/audio/getAvailableAudioSources",title:"Taro.getAvailableAudioSources(option)",description:"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90",source:"@site/docs/apis/media/audio/getAvailableAudioSources.md",permalink:"/taro/docs/next/apis/media/audio/getAvailableAudioSources",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/audio/getAvailableAudioSources.md",version:"next",sidebar_label:"getAvailableAudioSources",sidebar:"API",previous:{title:"Taro.pauseVoice(option)",permalink:"/taro/docs/next/apis/media/audio/pauseVoice"},next:{title:"Taro.createInnerAudioContext()",permalink:"/taro/docs/next/apis/media/audio/createInnerAudioContext"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"audioSources",id:"audiosources",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"audioSources"),Object(r.b)("td",null,Object(r.b)("code",null,'("auto" | "buildInMic" | "headsetMic" | "mic" | "camcorder" | "voice_communication" | "voice_recognition")[]')),Object(r.b)("td",null,"\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90\u5217\u8868\uff0c\u53ef\u5728 ",Object(r.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html"},"RecorderManager.start()")," \u63a5\u53e3\u4e2d\u4f7f\u7528\u3002\u8fd4\u56de\u503c\u5b9a\u4e49\u53c2\u8003 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(r.b)("h3",{id:"audiosources"},"audioSources"),Object(r.b)("p",null,"\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"auto"),Object(r.b)("td",null,"\u81ea\u52a8\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4f7f\u7528\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u4e0a\u8033\u9ea6\u540e\u81ea\u52a8\u5207\u6362\u4f7f\u7528\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u6240\u6709\u5e73\u53f0\u9002\u7528")),Object(r.b)("tr",null,Object(r.b)("td",null,"buildInMic"),Object(r.b)("td",null,"\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),Object(r.b)("tr",null,Object(r.b)("td",null,"headsetMic"),Object(r.b)("td",null,"\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),Object(r.b)("tr",null,Object(r.b)("td",null,"mic"),Object(r.b)("td",null,"\u9ea6\u514b\u98ce\uff08\u6ca1\u63d2\u8033\u9ea6\u65f6\u662f\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u8033\u9ea6\u65f6\u662f\u8033\u673a\u9ea6\u514b\u98ce\uff09\uff0c\u4ec5\u9650 Android")),Object(r.b)("tr",null,Object(r.b)("td",null,"camcorder"),Object(r.b)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u5f55\u5236\u97f3\u89c6\u9891\u5185\u5bb9\uff0c\u4ec5\u9650 Android")),Object(r.b)("tr",null,Object(r.b)("td",null,"voice_communication"),Object(r.b)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u5b9e\u65f6\u6c9f\u901a\uff0c\u4ec5\u9650 Android")),Object(r.b)("tr",null,Object(r.b)("td",null,"voice_recognition"),Object(r.b)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u8bed\u97f3\u8bc6\u522b\uff0c\u4ec5\u9650 Android")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.getAvailableAudioSources"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1627:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var c=n(0),l=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,l=function(e,t){if(null==e)return{};var n,c,l={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),u=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},d=function(e){var t=u(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=Object(c.forwardRef)((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(n),j=c,s=d["".concat(b,".").concat(j)]||d[j]||O[j]||r;return n?l.a.createElement(s,a({ref:t},i,{components:n})):l.a.createElement(s,a({ref:t},i))}));function s(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,b=new Array(r);b[0]=j;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,b[1]=a;for(var i=2;i<r;i++)b[i]=n[i];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);