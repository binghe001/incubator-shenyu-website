"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2109],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u672c\u5730\u8c03\u8bd5\u8fd0\u884c agent \u6a21\u5757",description:"\u672c\u5730\u8c03\u8bd5\u8fd0\u884c agent \u6a21\u5757"},u=void 0,c={unversionedId:"developer/debug-agent",id:"developer/debug-agent",isDocsHomePage:!1,title:"\u672c\u5730\u8c03\u8bd5\u8fd0\u884c agent \u6a21\u5757",description:"\u672c\u5730\u8c03\u8bd5\u8fd0\u884c agent \u6a21\u5757",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/debug-agent.md",sourceDirName:"developer",slug:"/developer/debug-agent",permalink:"/zh/docs/next/developer/debug-agent",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/developer/debug-agent.md",version:"current",frontMatter:{title:"\u672c\u5730\u8c03\u8bd5\u8fd0\u884c agent \u6a21\u5757",description:"\u672c\u5730\u8c03\u8bd5\u8fd0\u884c agent \u6a21\u5757"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",permalink:"/zh/docs/next/developer/custom-sign-algorithm"},next:{title:"\u591a\u8bed\u8a00Http\u5ba2\u6237\u7aef",permalink:"/zh/docs/next/developer/developer-shenyu-client"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u51c6\u5907",id:"\u51c6\u5907",children:[]},{value:"\u8bbe\u7f6eJVM\u542f\u52a8\u53c2\u6570",id:"\u8bbe\u7f6ejvm\u542f\u52a8\u53c2\u6570",children:[]},{value:"\u8fd0\u884c/\u8c03\u8bd5",id:"\u8fd0\u884c\u8c03\u8bd5",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u672c\u5730\u8c03\u8bd5\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu-agent")," \u6a21\u5757")),(0,o.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u62c9\u53d6 Apache ShenYu \u4ee3\u7801"),(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 IDEA"),(0,o.kt)("li",{parentName:"ol"},"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u5b8c\u6210\u4ee3\u7801\u7684\u4e0b\u8f7d\u4e0e\u7f16\u8bd1")),(0,o.kt)("h2",{id:"\u8bbe\u7f6ejvm\u542f\u52a8\u53c2\u6570"},"\u8bbe\u7f6eJVM\u542f\u52a8\u53c2\u6570"),(0,o.kt)("p",null,"\u5728 IDEA \u4e2d\uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication.java")," \u7684\u542f\u52a8\u914d\u7f6e\u91cc\u7684 VM options \u8bbe\u7f6e\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"-javaagent:~/shenyu/shenyu-dist/shenyu-agent-dist/target/shenyu-agent/shenyu-agent.jar\n")),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"-javaagent:")," \u540e\u9762\u8ddf\u7740\u7684\u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-agent.jar")," \u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-dist")," \u6253\u5305\u3002"),(0,o.kt)("h2",{id:"\u8fd0\u884c\u8c03\u8bd5"},"\u8fd0\u884c/\u8c03\u8bd5"),(0,o.kt)("p",null,"\u63a5\u7740\uff0c\u6b63\u5e38\u8fd0\u884c\u6216\u8c03\u8bd5\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication.java")," \u5373\u53ef\uff0cshenyu-agent \u6a21\u5757\u53ef\u4ee5\u6b63\u5e38\u65ad\u70b9\u8c03\u8bd5\u3002"))}d.isMDXComponent=!0}}]);