(window.webpackJsonp=window.webpackJsonp||[]).push([[984],{1625:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1628),c=t(1647),i=t(1662),m=t(1632);var s=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(m.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=Object(l.a)().siteConfig.title,m="/"===a.permalink?n:"Blog";return r.a.createElement(c.a,{title:m,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(s,{metadata:a})))))}},1649:function(e,a,t){"use strict";var n=t(1),r=(t(1635),t(52),t(78),t(1630),t(9)),l=(t(1636),t(1637),t(1642),t(0)),c=t.n(l),i=t(1629),m=t.n(i),s=t(1632),o=t(1628),v=t(1631),h=t(1633),u=t(1650),_=t(1651),d=t(1638),E=t(1653),b=t(1643),g=t(1644),f=t(131),p=t.n(f);function k(e){var a=e.activeBasePath,t=e.activeRegxp,l=e.to,i=e.href,m=e.label,u=(e.position,Object(r.a)(e,["activeBasePath","activeRegxp","to","href","label","position"])),_=function(){var e,a=Object(o.a)().siteConfig.customFields.versions,t=void 0===a?[]:a,n=t[0],r=Object(h.d)(),l=t.find((function(e){return r.pathname.includes(e)}));return r.pathname.includes("/docs/next")&&(l="next"),[n,null!=(e=l)?e:n]}(),d=_[0],E=_[1];if(d!==E&&u.version&&(m=("next"===E?"":"v")+E),l&&l.startsWith("docs/")&&d!==E){var b=l.split("/"),g=b[0],f=b.slice(1);l=[g,E].concat(f).join("/");var p=a.split("/"),k=p[0],N=p.slice(1);a=[k,E].concat(N).join("/")}var j=Object(v.a)(l),M=Object(v.a)(a);return c.a.createElement(s.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:i}:Object.assign({isNavLink:!0,activeClassName:"navbar__link--active",to:j},a?{isActive:function(e,n){return t?new RegExp(a).test(n.pathname):n.pathname.startsWith(M)}}:null),u),m)}function N(e){var a=e.items,t=e.position,l=Object(r.a)(e,["items","position"]);return a?c.a.createElement("div",{className:m()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},l),l.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):c.a.createElement(k,Object(n.a)({},l,{className:m()(["navbar__item","navbar__link",l.className])}))}function j(e){var a=e.items,t=Object(r.a)(e,["items"]);return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link menu__link--sublist"},t),t.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(k,Object(n.a)({className:"menu__link"},e)))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link"},t)))}a.a=function(){var e,a,t=Object(o.a)(),r=t.siteConfig.themeConfig,i=r.navbar,v=(i=void 0===i?{}:i).title,h=i.links,f=void 0===h?[]:h,k=i.hideOnScroll,M=void 0!==k&&k,w=r.disableDarkMode,O=void 0!==w&&w,z=t.isClient,C=Object(l.useState)(!1),x=C[0],y=C[1],T=Object(l.useState)(!1),B=T[0],A=T[1],P=Object(d.a)(),R=P.isDarkTheme,D=P.setLightTheme,I=P.setDarkTheme,L=Object(E.a)(M),S=L.navbarRef,J=L.isNavbarVisible,F=Object(g.a)(),U=F.logoLink,H=F.logoLinkProps,W=F.logoImageUrl,V=F.logoAlt;Object(b.a)(x);var q=Object(l.useCallback)((function(){y(!0)}),[y]),G=Object(l.useCallback)((function(){y(!1)}),[y]),K=Object(l.useCallback)((function(e){return e.target.checked?I():D()}),[D,I]);return c.a.createElement("nav",{ref:S,className:m()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":x},e[p.a.navbarHideable]=M,e[p.a.navbarHidden]=!J,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:q,onKeyDown:q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:U},H),null!=W&&c.a.createElement("img",{key:z,className:"navbar__logo",src:W,alt:V}),null!=v&&c.a.createElement("strong",{className:m()("navbar__title",(a={},a[p.a.hideLogoText]=B,a))},v)),f.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},f.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))})),!O&&c.a.createElement(_.a,{className:p.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:R,onChange:K}),c.a.createElement(u.a,{handleSearchBarToggle:A,isSearchBarExpanded:B}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:G}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",onClick:G,to:U},H),null!=W&&c.a.createElement("img",{key:z,className:"navbar__logo",src:W,alt:V}),null!=v&&c.a.createElement("strong",{className:"navbar__title"},v)),!O&&x&&c.a.createElement(_.a,{"aria-label":"Dark mode toggle in sidebar",checked:R,onChange:K})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},f.map((function(e,a){return c.a.createElement(j,Object(n.a)({},e,{onClick:G,key:a}))})))))))}},1652:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(){return r.a.createElement("footer",{className:"footer",id:"footer"},r.a.createElement("div",{className:"grid_c1 footer_cont"},r.a.createElement("div",{className:"footer_logo_container"},r.a.createElement("div",{className:"footer_logo"}),r.a.createElement("span",{className:"footer_designedby"})),r.a.createElement("div",{className:"footer_link_container"},r.a.createElement("div",{className:"footer_link"},r.a.createElement("h3",{className:"footer_link_tit footer_link_tit1"},"\u76f8\u5173\u8d44\u6e90"),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://taro.jd.com/",target:"_blank"},"Taro")),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://taro-ui.jd.com/",target:"_blank"},"Taro UI")),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://at-ui.github.io/at-ui/#/zh",target:"_blank"},"At-UI")),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://nerv.aotu.io/",target:"_blank"},"Nerv")),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://athena.aotu.io/",target:"_blank"},"Athena"))),r.a.createElement("div",{className:"footer_link"},r.a.createElement("h3",{className:"footer_link_tit footer_link_tit2"},"\u793e\u533a"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/NervJS/taro/issues",target:"_blank"},"GitHub")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://taro-club.jd.com",target:"_blank"},"Taro BBS")),r.a.createElement("p",{className:"footer_link_connect_wrap"},r.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1",r.a.createElement("span",{className:"wechat_qrcode_icon"},r.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},r.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),r.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),r.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),r.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),r.a.createElement("span",{className:"footer_link_wechat_img"},r.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))),r.a.createElement("div",{className:"footer_link"},r.a.createElement("h3",{className:"footer_link_tit footer_link_tit3"},"\u5173\u4e8e\u6211\u4eec"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://aotu.io/",target:"_blank"},"\u51f9\u51f8\u5b9e\u9a8c\u5ba4")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://aotu.io/join/",target:"_blank"},"\u52a0\u5165\u6211\u4eec")),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:taro@jd.com?subject=\u3010Taro \u5408\u4f5c\u3011\u5408\u4f5c\u6807\u9898"},"\u8054\u7cfb\u6211\u4eec"))),r.a.createElement("div",{className:"footer_link"},r.a.createElement("h3",{className:"footer_link_tit footer_link_tit4"},"\u611f\u8c22"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://jdc.jd.com/",target:"_blank"},"\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u90e8")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/nervjs/taro#%E8%B4%A1%E7%8C%AE%E8%80%85%E4%BB%AC",target:"_blank"},"Taro \u8d21\u732e\u8005\u4eec"))))),r.a.createElement("div",{className:"copyright"},r.a.createElement("div",{className:"in"},"Copyright \xa9 ",(new Date).getFullYear(),". All Rights Reserved. \u7ca4ICP\u590715077732\u53f7-2")))}},1662:function(e,a,t){"use strict";t(78);var n=t(0),r=t.n(n),l=t(1629),c=t.n(l),i=t(1627),m=t(1632),s=t(1665),o=t(132),v=t.n(o),h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,o,u=e.children,_=e.frontMatter,d=e.metadata,E=e.truncated,b=e.isBlogPostPage,g=void 0!==b&&b,f=d.date,p=d.permalink,k=d.tags,N=d.readingTime,j=_.author,M=_.title,w=_.author_url||_.authorURL,O=_.author_title||_.authorTitle,z=_.author_image_url||_.authorImageURL;return r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(a=g?"h1":"h2",t=f.substring(0,10).split("-"),n=t[0],l=h[parseInt(t[1],10)-1],o=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",v.a.blogPostTitle)},g?M:r.a.createElement(m.a,{to:p},M)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:v.a.blogPostDate},l," ",o,", ",n," ",N&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(N)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},z&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:z,alt:j})),r.a.createElement("div",{className:"avatar__intro"},j&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},j)),r.a.createElement("small",{className:"avatar__subtitle"},O)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:s.a},u)),(k.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:d.permalink,"aria-label":"Read more about "+M},r.a.createElement("strong",null,"Read More")))))}}}]);