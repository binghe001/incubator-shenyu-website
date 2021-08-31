"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3214],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],o={sidebar_position:6,title:"Hystrix\u63d2\u4ef6",keywords:["soul"],description:"hystrix\u63d2\u4ef6"},u=void 0,s={unversionedId:"plugins/hystrix-plugin",id:"version-2.3.0/plugins/hystrix-plugin",isDocsHomePage:!1,title:"Hystrix\u63d2\u4ef6",description:"hystrix\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/plugins/hystrix-plugin.md",sourceDirName:"plugins",slug:"/plugins/hystrix-plugin",permalink:"/zh/docs/2.3.0/plugins/hystrix-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/plugins/hystrix-plugin.md",version:"2.3.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Hystrix\u63d2\u4ef6",keywords:["soul"],description:"hystrix\u63d2\u4ef6"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"\u9650\u6d41\u63d2\u4ef6",permalink:"/zh/docs/2.3.0/plugins/rate-limiter-plugin"},next:{title:"Sentinel\u63d2\u4ef6",permalink:"/zh/docs/2.3.0/plugins/sentinel-plugin"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63d2\u4ef6\u4f7f\u7528",id:"\u63d2\u4ef6\u4f7f\u7528",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hystrix\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u5bf9\u6d41\u91cf\u8fdb\u884c\u7194\u65ad\u7684\u6838\u5fc3\u5b9e\u73b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4fe1\u53f7\u91cf\u7684\u65b9\u5f0f\u6765\u5904\u7406\u8bf7\u6c42\u3002")),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e  \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"hystrix"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u4e0d\u4f7f\u7528\uff0c\u5219\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"soul-admin")," \u540e\u53f0\u628a\u6b64\u63d2\u4ef6\u505c\u7528\u3002")),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u4f7f\u7528"},"\u63d2\u4ef6\u4f7f\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 pom.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0 hystrix\u7684\u652f\u6301\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul hystrix plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-hystrix</artifactId>\n       <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul hystrix plugin end--\x3e\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\uff0c\u8bf7\u8be6\u7ec6\u770b\uff1a",(0,l.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"\u9009\u62e9\u5668\u89c4\u5219"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Hystrix\u5904\u7406\u8be6\u89e3\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8df3\u95f8\u6700\u5c0f\u8bf7\u6c42\u6570\u91cf\uff1a\u6700\u5c0f\u7684\u8bf7\u6c42\u91cf\uff0c\u81f3\u5c11\u8981\u8fbe\u5230\u8fd9\u4e2a\u91cf\u624d\u4f1a\u89e6\u53d1\u7194\u65ad"),(0,l.kt)("li",{parentName:"ul"},"\u9519\u8bef\u767e\u5206\u6bd4\u9600\u503c\uff1a \u8fd9\u6bb5\u65f6\u95f4\u5185\uff0c\u53d1\u751f\u5f02\u5e38\u7684\u767e\u5206\u6bd4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927\u5e76\u53d1\u91cf\uff1a \u6700\u5927\u7684\u5e76\u53d1\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u8df3\u95f8\u4f11\u7720\u65f6\u95f4(ms)\uff1a\u7194\u65ad\u4ee5\u540e\u6062\u590d\u7684\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u7ec4Key\uff1a \u4e00\u822c\u8bbe\u7f6e\u4e3a:contextPath"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4Key: \u4e00\u822c\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684 \u8def\u5f84\u63a5\u53e3\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5931\u8d25\u964d\u7ea7URL: \u9ed8\u8ba4\u4e3a /fallback/hystrix\u3002")))))}d.isMDXComponent=!0}}]);