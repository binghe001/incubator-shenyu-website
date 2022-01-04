"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[14],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u53ef\u89c2\u6d4b\u6027\u63a5\u5165",keywords:["Observability"],description:"Observability access"},p=void 0,u={unversionedId:"user-guide/observability",id:"user-guide/observability",isDocsHomePage:!1,title:"\u53ef\u89c2\u6d4b\u6027\u63a5\u5165",description:"Observability access",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/observability.md",sourceDirName:"user-guide",slug:"/user-guide/observability",permalink:"/zh/docs/next/user-guide/observability",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/observability.md",version:"current",frontMatter:{title:"\u53ef\u89c2\u6d4b\u6027\u63a5\u5165",keywords:["Observability"],description:"Observability access"},sidebar:"tutorialSidebar",previous:{title:"Motan\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/next/user-guide/motan-proxy"},next:{title:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e",permalink:"/zh/docs/next/user-guide/register-center-access"}},s=[{value:"\u4e0b\u8f7d\u5e76\u7f16\u8bd1\u4ee3\u7801",id:"\u4e0b\u8f7d\u5e76\u7f16\u8bd1\u4ee3\u7801",children:[]},{value:"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}],c={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6b64\u7bc7\u6587\u7ae0\u662f\u4ecb\u7ecd\u5982\u4f55\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u63a5\u5165\u53ef\u89c2\u6d4b\u6027\u7cfb\u7edf\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"java agent")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b57\u8282\u7801\u589e\u5f3a")," \u6280\u672f\u5b9e\u73b0\u4e86\u65e0\u75d5\u57cb\u70b9\uff0c\u4f7f\u5f97\u7528\u6237\u65e0\u9700\u5f15\u5165\u4f9d\u8d56\u5373\u53ef\u63a5\u5165\u7b2c\u4e09\u65b9\u53ef\u89c2\u6d4b\u6027\u7cfb\u7edf\uff0c\u83b7\u53d6 Traces\u3001Metrics \u548c Logging \u3002"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u5e76\u7f16\u8bd1\u4ee3\u7801"},"\u4e0b\u8f7d\u5e76\u7f16\u8bd1\u4ee3\u7801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4ee3\u7801")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone https://github.com/apache/incubator-shenyu.git\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528Maven\u7f16\u8bd1\u4ee3\u7801")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> cd incubator-shenyu\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/shenyu/shenyu-dist/shenyu-agent-dist/target/shenyu-agent")," \u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u770b\u89c1 ",(0,l.kt)("inlineCode",{parentName:"p"},"shenyu-agent")," \u6a21\u5757\u7f16\u8bd1\u540e\u7684jar\u5305\u548c\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 logback.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 tracing-point.yaml\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-common-2.4.2-SNAPSHOT.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-jaeger-2.4.2-SNAPSHOT.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-opentelemetry-2.4.2-SNAPSHOT.jar\n\u2502\xa0\xa0 \u2514\u2500\u2500 shenyu-agent-plugin-tracing-zipkin-2.4.2-SNAPSHOT.jar\n\u2514\u2500\u2500 shenyu-agent.jar\n")),(0,l.kt)("h2",{id:"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - jaeger\n#    - opentelemetry\n  metrics:\n    - \n  logging:\n    - \n  \nplugins:\n  tracing:\n    jaeger:\n      host: "localhost"\n      port: 5775\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        JAEGER_SAMPLER_TYPE: "const"\n        JAEGER_SAMPLER_PARAM: "1"\n    opentelemetry:\n      props:\n        otel.traces.exporter: jaeger #zipkin #otlp\n        otel.resource.attributes: "service.name=shenyu-agent"\n        otel.exporter.jaeger.endpoint: "http://localhost:14250/api/traces"\n  metrics:\n    prometheus:\n      host: "localhost"\n      port: 8081\n      props:\n  logging:\n    elasticSearch:\n      host: "localhost"\n      port: 8082\n      props:\n    kafka:\n      host: "localhost"\n      port: 8082\n      props:\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 supports \u4e2d\u9009\u62e9\u8981\u4f7f\u7528\u7684\u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5728 plugins \u4e2d\u914d\u7f6e\u63d2\u4ef6\u7684\u53c2\u6570\uff0c\u5176\u4e2d\u5404\u63d2\u4ef6props\u53c2\u6570\u7684\u5177\u4f53\u4f7f\u7528\u89c1\u4e0b\u9762\u51e0\u4e2a\u8868\u683c\uff1a")),(0,l.kt)("h5",{id:"jaeger"},"jaeger"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"SERVICE_NAME"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu-agent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5728traces\u7cfb\u7edf\u4e2d\u663e\u793a\u7684\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"JAEGER_SAMPLER_TYPE"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"const"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Jaeger \u91c7\u6837\u7387\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"JAEGER_SAMPLER_PARAM"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Jaeger \u91c7\u6837\u7387\u53c2\u6570")))),(0,l.kt)("h5",{id:"opentelemetry"},"opentelemetry"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"otel.traces.exporter"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jaeger"),(0,l.kt)("td",{parentName:"tr",align:"left"},"traces\u5bfc\u51fa\u5668\u7c7b\u578b\uff0c\u82e5\u4e0d\u586b\u9ed8\u8ba4\u662fotlp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"otel.resource.attributes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"service.name=shenyu-agent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"otel\u8d44\u6e90\u5c5e\u6027\uff0c\u82e5\u586b\u5199\u591a\u4e2a\uff0c\u53ef\u7528\u9017\u53f7\u5206\u9694")))),(0,l.kt)("p",null,"opentelemetry \u63d2\u4ef6\u4f7f\u7528\u7684sdk\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry-sdk-extension-autoconfigure")," \u521d\u59cb\u5316\uff0c\u66f4\u591a\u4f7f\u7528\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java/tree/v1.9.1/sdk-extensions/autoconfigure#opentelemetry-sdk-autoconfigure"},"OpenTelemetry SDK\u81ea\u52a8\u914d\u7f6e\u8bf4\u660e")),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("p",null,"\u5728\u542f\u52a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u7684\u542f\u52a8\u811a\u672c\u4e2d\uff0c\u6700\u540e\u8fd0\u884cjar\u5305\u65f6\u52a0\u4e0a-javaagent\u53c2\u6570\u5373\u53ef\uff0c\u5373\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nohup java ${JAVA_OPTS}\\\n-javaagent:${SHENYU_AGENT_PATH}/shenyu-agent.jar\\\n-classpath ${CLASS_PATH} ${MAIN_CLASS} >> ${LOG_FILES} 2>&1 &\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"${SHENYU_AGENT_PATH}")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"shenyu-agent")," \u76ee\u5f55\u7684\u8def\u5f84"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f00\u53d1\u8005\u53ef\u5c06-javaagent\u53c2\u6570\u6dfb\u52a0\u5230IDE\u542f\u52a8\u914d\u7f6e\u7684JVM\u53c2\u6570\u4e2d")))}g.isMDXComponent=!0}}]);