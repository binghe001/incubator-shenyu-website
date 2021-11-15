"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7218],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"WebSocket Plugin",keywords:["WebSocket"],description:"websocket plugin"},p=void 0,u={unversionedId:"plugin-center/http-handle/websocket-plugin",id:"version-2.4.0/plugin-center/http-handle/websocket-plugin",isDocsHomePage:!1,title:"WebSocket Plugin",description:"websocket plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/http-handle/websocket-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/websocket-plugin",permalink:"/docs/2.4.0/plugin-center/http-handle/websocket-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/http-handle/websocket-plugin.md",version:"2.4.0",frontMatter:{title:"WebSocket Plugin",keywords:["WebSocket"],description:"websocket plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Rewrite Plugin",permalink:"/docs/2.4.0/plugin-center/http-handle/rewrite-plugin"},next:{title:"Dubbo Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/dubbo-plugin"}},c=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Request Path",id:"request-path",children:[]},{value:"Selector And Rule",id:"selector-and-rule",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache ShenYu gateway implements support for the WebSocket proxy through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Divide")," plugin."),(0,o.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,o.kt)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,o.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"local deployment")," ."),(0,o.kt)("p",null,"After successful startup, you need to open the Divide plugin on in the BasicConfig ",(0,o.kt)("inlineCode",{parentName:"p"},"->")," Plugin. For ",(0,o.kt)("inlineCode",{parentName:"p"},"Divide")," plugin details, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"./divide-plugin"},"Divide Plugin")," ."),(0,o.kt)("img",{src:"/img/shenyu/quick-start/http/http_open_en.png",width:"60%",height:"50%"}),(0,o.kt)("p",null,"Add the following dependencies to the gateway's ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--if you use http proxy start this--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n  <version>${project.version}</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"request-path"},"Request Path"),(0,o.kt)("p",null,"When using Apache ShenYu proxy websocket, assume that the request path is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ws://localhost:9195/?module=ws&method=/websocket&rpcType=websocket\n")),(0,o.kt)("p",null,"details\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"localhost:9195"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ip")," and port of gateway.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"module"),": filter conditions for selector.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"method"),": websocket paths are also used for rule matching.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rpcType")," \uff1adefault is websocket."))),(0,o.kt)("h2",{id:"selector-and-rule"},"Selector And Rule"),(0,o.kt)("p",null,"Add a selector configuration to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Divide")," plugin:"),(0,o.kt)("img",{src:"/img/shenyu/plugin/websocket/websocket_selector_en.png",width:"80%"}),(0,o.kt)("p",null,"Select the type ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," in the condition, and fill in the matching field and value (",(0,o.kt)("inlineCode",{parentName:"p"},"module"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ws"),"). You can customize the fields and the values, as long as they match the request."),(0,o.kt)("p",null,"For Handle, enter the address of the ",(0,o.kt)("inlineCode",{parentName:"p"},"webSocket")," service."),(0,o.kt)("p",null,"Add a new rule under this selector:"),(0,o.kt)("img",{src:"/img/shenyu/plugin/websocket/websocket_rule_en.png",width:"80%"}),(0,o.kt)("p",null,"Select the type ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," in the condition, and fill in the matching field and value, which are ",(0,o.kt)("inlineCode",{parentName:"p"},"method")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/websocket")," respectively. You can also customize the fields and the values, as long as they match the request."),(0,o.kt)("p",null,"With the above selector and rule configuration, your request will be matched and then request the real ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocket")," address of the proxy: ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080/websocket"),", thus the Apache ShenYu gateway will complete the proxy for ",(0,o.kt)("inlineCode",{parentName:"p"},"websocket"),"."))}d.isMDXComponent=!0}}]);