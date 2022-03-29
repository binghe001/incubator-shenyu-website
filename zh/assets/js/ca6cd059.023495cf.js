"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9049],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return c}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(a),c=i,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return a?t.createElement(h,l(l({ref:n},s),{},{components:a})):t.createElement(h,l({ref:n},s))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var d=2;d<r;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92266:function(e,n,a){a.r(n),a.d(n,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var t=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],p={title:"LoadBalance SPI \u4ee3\u7801\u5206\u6790",author:"Huihui Yin",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/changanjennifer/",tags:["load balance","SPI","Apache ShenYu"]},o=void 0,d={permalink:"/zh/blog/SPI-SourceCode-Analysis-LoadBalance-SPI",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/SPI-SourceCode-Analysis-LoadBalance-SPI.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/SPI-SourceCode-Analysis-LoadBalance-SPI.md",title:"LoadBalance SPI \u4ee3\u7801\u5206\u6790",description:"\u200b        \u7f51\u5173\u5e94\u7528\u9700\u8981\u652f\u6301\u591a\u79cd\u8d1f\u8f7d\u5747\u8861\u7684\u65b9\u6848\uff0c\u5305\u62ec\u968f\u673a\u9009\u62e9\u3001Hash\u3001\u8f6e\u8be2\u7b49\u65b9\u5f0f\u3002Apache Shenyu\u7f51\u5173\u4e2d\u4e0d\u4ec5\u5b9e\u73b0\u4e86\u4f20\u7edf\u7f51\u5173\u7684\u8fd9\u4e9b\u5747\u8861\u7b56\u7565\uff0c\u8fd8\u901a\u8fc7\u6d41\u91cf\u9884\u70ed(warmup)\u7b49\u7ec6\u8282\u5904\u7406\uff0c\u5bf9\u670d\u52a1\u5668\u8282\u70b9\u7684\u52a0\u5165\uff0c\u505a\u4e86\u66f4\u5e73\u6ed1\u7684\u6d41\u91cf\u5904\u7406\uff0c\u83b7\u5f97\u4e86\u66f4\u597d\u7684\u6574\u4f53\u7a33\u5b9a\u6027\u3002\u8ba9\u6211\u4eec\u6765\u770b\u770bShenyu\u662f\u662f\u5982\u4f55\u8bbe\u8ba1\u548c\u5b9e\u73b0\u8fd9\u90e8\u5206\u529f\u80fd\u7684\u3002",date:"2022-03-29T11:37:01.932Z",formattedDate:"2022\u5e743\u670829\u65e5",tags:[{label:"load balance",permalink:"/zh/blog/tags/load-balance"},{label:"SPI",permalink:"/zh/blog/tags/spi"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:16.415,truncated:!1,prevItem:{title:"\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0\u539f\u7406\u4e4bHttp\u6ce8\u518c",permalink:"/zh/blog/RegisterCenter-SourceCode-Analysis-Http-Register"},nextItem:{title:"MatchStrategy--\u57fa\u4e8eSPI\u7684\u4ee3\u7801\u5206\u6790",permalink:"/zh/blog/SPI-SourceCode-Analysis-MatchStrategy-SPI"}},s=[{value:"LoadBalance <code>SPI</code>",id:"loadbalance-spi",children:[]},{value:"Design of LoadBalance module",id:"design-of-loadbalance-module",children:[]},{value:"AbstractLoadBalance",id:"abstractloadbalance",children:[]},{value:"RandomLoadBalance",id:"randomloadbalance",children:[]},{value:"HashLoadBalance",id:"hashloadbalance",children:[]},{value:"RoundRobinLoadBalance",id:"roundrobinloadbalance",children:[]},{value:"LoadBalanceUtils",id:"loadbalanceutils",children:[]},{value:"Using of LoadBalance module",id:"using-of-loadbalance-module",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:s};function m(e){var n=e.components,p=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u200b        \u7f51\u5173\u5e94\u7528\u9700\u8981\u652f\u6301\u591a\u79cd\u8d1f\u8f7d\u5747\u8861\u7684\u65b9\u6848\uff0c\u5305\u62ec\u968f\u673a\u9009\u62e9\u3001Hash\u3001\u8f6e\u8be2\u7b49\u65b9\u5f0f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),"\u7f51\u5173\u4e2d\u4e0d\u4ec5\u5b9e\u73b0\u4e86\u4f20\u7edf\u7f51\u5173\u7684\u8fd9\u4e9b\u5747\u8861\u7b56\u7565\uff0c\u8fd8\u901a\u8fc7\u6d41\u91cf\u9884\u70ed(warmup)\u7b49\u7ec6\u8282\u5904\u7406\uff0c\u5bf9\u670d\u52a1\u5668\u8282\u70b9\u7684\u52a0\u5165\uff0c\u505a\u4e86\u66f4\u5e73\u6ed1\u7684\u6d41\u91cf\u5904\u7406\uff0c\u83b7\u5f97\u4e86\u66f4\u597d\u7684\u6574\u4f53\u7a33\u5b9a\u6027\u3002\u8ba9\u6211\u4eec\u6765\u770b\u770bShenyu\u662f\u662f\u5982\u4f55\u8bbe\u8ba1\u548c\u5b9e\u73b0\u8fd9\u90e8\u5206\u529f\u80fd\u7684\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-2.4.0"),"\u7248\u672c\u8fdb\u884c\u6e90\u7801\u5206\u6790.")),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("h2",{id:"loadbalance-spi"},"LoadBalance ",(0,r.kt)("inlineCode",{parentName:"h2"},"SPI")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," SPI \u5b9a\u4e49\u5728",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin-divide")),"\u6a21\u7ec4\u4e2d\uff0c\u4ee5\u4e0b\u662f\u8fd9\u4e2a\u6838\u5fc3\u63a5\u53e3\u7684\u4ee3\u7801\uff0c\u8fd9\u4e2a\u63a5\u53e3\u5f88\u597d\u7684\u8be0\u91ca\u4e86\u8fd9\u6837\u4e00\u4e2a\u7406\u5ff5\uff1a\u8d1f\u8f7d\u5747\u8861\u662f\u5728\u4e00\u7cfb\u5217\u670d\u52a1\u5668\u8282\u70b9\u4e2d\u9009\u51fa\u6700\u5408\u9002\u7684\u8282\u70b9\uff0c\u4e5f\u5c31\u662f\u9009\u62e9\u7b56\u7565\u3002\u505a\u6d41\u91cf\u8f6c\u53d1\u3001\u8def\u7531\u548c\u8d1f\u8f7d\u5747\u8861\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance SPI"),"\u7684\u57fa\u672c\u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SPI\npublic interface LoadBalance {\n\n    /**\n     * @param upstreamList upstream list\n     * @param ip ip\n     * @return divide upstream\n     */\n    DivideUpstream select(List<DivideUpstream> upstreamList, String ip);\n}\n")),(0,r.kt)("p",null,"\u63a5\u53e3\u4e2d\uff0cupstreamList\u662f\u53ef\u9009\u8def\u7531\u7684\u4e00\u7ec4\u670d\u52a1\u5668\u8282\u70b9\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"DivideUpstream"),"  \u662f\u670d\u52a1\u5668\u8282\u70b9\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u5305\u62ec\u7684\u91cd\u8981\u5143\u7d20\u6709\uff1a\u534f\u8bae\u3001upstreamUrl \u3001\u6743\u91cd\u3001\u65f6\u95f4\u6233\uff0cwarmup\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class DivideUpstream implements Serializable {\n    private String upstreamHost;\n    /**\n     * this is http protocol.\n     */\n    private String protocol;\n    private String upstreamUrl;\n    private int weight;\n    /**\n     * false close/ true open.\n     */\n    @Builder.Default\n    private boolean status = true;\n    private long timestamp;\n    private int warmup;\n}\n\n")),(0,r.kt)("h2",{id:"design-of-loadbalance-module"},"Design of LoadBalance module"),(0,r.kt)("p",null,"\u56fe1\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u6a21\u7ec4\u7684\u7c7b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"loadbalance-class-diagram",src:a(49890).Z})),(0,r.kt)("p",null,"\u4ece\u7c7b\u56fe\u4e0a\u53ef\u4ee5\u770b\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u7684\u8bbe\u8ba1\u6982\u8981\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u62bd\u8c61\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractLoadBalance"),"\u7ee7\u627f\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," SPI\u63a5\u53e3\uff0c\u5e76\u63d0\u4f9b\u9009\u62e9\u7684\u6a21\u677f\u65b9\u6cd5\uff0c\u53ca\u6743\u91cd\u8ba1\u7b97\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e09\u4e2a\u5b9e\u505a\u7c7b\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractLoadBalance"),"\uff0c \u5b9e\u73b0\u5404\u81ea\u7684\u903b\u8f91\u5904\u7406\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RandomLoadBalance")," -\u52a0\u6743\u968f\u673a\u9009\u62e9 Weight Random"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HashLoadBalance"),"  - \u4e00\u81f4\u6027Hash"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RoundRobinLoadBalance")," -\u52a0\u6743\u8f6e\u8be2\uff08Weight Round Robin per-packet)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7531Util\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceUtil")," \u5b9e\u73b0\u5bf9\u5916\u7684\u9759\u6001\u8c03\u7528\u65b9\u6cd5\u3002"),(0,r.kt)("p",{parentName:"li"},"\u53e6\u5916\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Sheny SPI"),"\u89c4\u8303\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"SHENYU_DIERECTORY"),"\u4e2d\u7684\u6dfb\u52a0profile\uff0c\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u7684\u5b9e\u73b0\u7c7b\uff0c\u914d\u7f6ekey=class\u5f62\u5f0f\uff0c\u5de6\u8fb9\u7684operator\u8981\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceEnum"),"\u4e2d\u7684\u5b9a\u4e49\u4e00\u81f4\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"random=org.apache.shenyu.plugin.divide.balance.spi.RandomLoadBalance\nroundRobin=org.apache.shenyu.plugin.divide.balance.spi.RoundRobinLoadBalance\nhash=org.apache.shenyu.plugin.divide.balance.spi.HashLoadBalance\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceEnum"),"\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public enum LoadBalanceEnum {\n    /**\n     * Hash load balance enum.\n     */\n    HASH(1, "hash", true),\n\n    /**\n     * Random load balance enum.\n     */\n    RANDOM(2, "random", true),\n\n    /**\n     * Round robin load balance enum.\n     */\n    ROUND_ROBIN(3, "roundRobin", true);\n\n    private final int code;\n    private final String name;\n    private final boolean support;\n}\n')),(0,r.kt)("h2",{id:"abstractloadbalance"},"AbstractLoadBalance"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u62bd\u8c61\u7c7b\u5b9e\u505a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u63a5\u53e3, \u5b9a\u4e49\u4e86\u62bd\u8c61\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"doSelect()"),"\u7559\u7ed9\u5b9e\u4f5c\u7c7b\u5904\u7406\uff0c\u5728\u6a21\u677f\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"select()")," \u4e2d\u5148\u8fdb\u884c\u6821\u9a8c\uff0c\u4e4b\u540e\u8c03\u7528\u7531\u5b9e\u4f5c\u7c7b\u5b9e\u73b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"doSelect()"),"\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   /**\n     * Do select divide upstream.\n     *\n     * @param upstreamList the upstream list\n     * @param ip           the ip\n     * @return the divide upstream\n     */\n    protected abstract DivideUpstream doSelect(List<DivideUpstream> upstreamList, String ip);\n\n    @Override\n    public DivideUpstream select(final List<DivideUpstream> upstreamList, final String ip) {\n        if (CollectionUtils.isEmpty(upstreamList)) {\n            return null;\n        }\n        if (upstreamList.size() == 1) {\n            return upstreamList.get(0);\n        }\n        return doSelect(upstreamList, ip);\n    }\n")),(0,r.kt)("p",null,"\u6743\u91cd\u7684\u5904\u7406\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"getWeight()"),"\u7684\u903b\u8f91\u662f\uff1a\u5f53\u6709\u65f6\u95f4\u6233\uff0c\u5e76\u4e14\u5f53\u524d\u65f6\u95f4\u4e0e\u65f6\u95f4\u6233\u95f4\u9694\u5728\u6d41\u91cf\u9884\u70edwarmup\u65f6\u95f4\u5185\uff0c\u6743\u91cd\u8ba1\u7b97\u7684\u516c\u5f0f\u4e3a\uff1a\n$$ {1-1}\nww = min(1,uptime/(warmup/weight))\n$$\n\u4ece\u516c\u5f0f\u53ef\u4ee5\u770b\u51fa\uff0c\u6700\u7ec8\u7684\u6743\u503c\uff0c\u4e0e\u8bbe\u7f6e\u7684weigth\u6210\u6b63\u6bd4\uff0c\u65f6\u95f4\u95f4\u9694\u8d8a\u63a5\u8fd1warmup\u65f6\u95f4\uff0c\u6743\u91cd\u5c31\u8d8a\u5927\u3002\u4e5f\u5c31\u662f\u8bf4\u7b49\u5f85\u7684\u65f6\u95f4\u8d8a\u957f\uff0c\u88ab\u5206\u6d3e\u7684\u6743\u91cd\u8d8a\u9ad8\u3002\u6ca1\u6709\u65f6\u95f4\u6233\u65f6\u7b49\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"DivideUpstream"),"\u8bbe\u7f6e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),"\u503c\u3002"),(0,r.kt)("p",null,"\u8003\u8651\u6d41\u91cf\u9884\u70ed(warmup)\u7684\u6838\u5fc3\u601d\u60f3\u662f\u907f\u514d\u5728\u6dfb\u52a0\u65b0\u670d\u52a1\u5668\u548c\u542f\u52a8\u65b0JVM\u65f6\u7f51\u5173\u6027\u80fd\u4e0d\u4f73\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u770b\u4e00\u4e0b\u4e09\u4e2a\u5b9e\u505a\u7c7b\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"randomloadbalance"},"RandomLoadBalance"),(0,r.kt)("p",null,"\u8fd9\u91cc\u968f\u673a",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," \u53ef\u4ee5\u5904\u7406\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u6743\u91cd\uff1a\u6240\u6709\u670d\u52a1\u5668\u90fd\u6ca1\u6709\u8bbe\u5b9a\u6743\u91cd\uff0c\u6216\u8005\u6743\u91cd\u90fd\u4e00\u6837\uff0c \u4f1a\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6709\u6743\u91cd\uff1a\u670d\u52a1\u5668\u8bbe\u5b9a\u6709\u4e0d\u540c\u7684\u6743\u91cd\uff0c\u4f1a\u6839\u636e\u6743\u91cd\uff0c\u8fdb\u884c\u968f\u673a\u9009\u62e9\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u6709\u6743\u91cd\u65f6\u7684\u968f\u673a\u9009\u62e9\u4ee3\u7801",(0,r.kt)("inlineCode",{parentName:"p"},"random()"),"\uff1a \u904d\u5386\u670d\u52a1\u5668\u5217\u8868\uff0c\u5f53\u4ea7\u751f\u7684\u968f\u673a\u503c\u5c0f\u4e8e\u67d0\u4e2a\u670d\u52a1\u5668\u6743\u91cd\u65f6\uff0c\u8fd9\u4e2a\u670d\u52a1\u5668\u88ab\u9009\u4e2d\u3002 \u82e5\u904d\u5386\u540e\u6ca1\u6709\u6ee1\u8db3\u6761\u4ef6\uff0c\u5c31\u8fd4\u56de\u670d\u52a1\u5668\u5217\u8868\u7684\u7b2c\u4e00\u4e2a\u3002\u8fd9\u91cc",(0,r.kt)("inlineCode",{parentName:"p"},"getWeight(DivideUpstream upstream)")," \u65b9\u6cd5\u662f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractLoadBalance")," \u4e2d\u5b9a\u4e49\u7684\uff0c\u6309\u516c\u5f0f\u8ba1\u7b97\u6743\u91cd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    private DivideUpstream random(final int totalWeight, final List<DivideUpstream> upstreamList) {\n        // If the weights are not the same and the weights are greater than 0, then random by the total number of weights\n        int offset = RANDOM.nextInt(totalWeight);\n        // Determine which segment the random value falls on\n        for (DivideUpstream divideUpstream : upstreamList) {\n            offset -= getWeight(divideUpstream);\n            if (offset < 0) {\n                return divideUpstream;\n            }\n        }\n        return upstreamList.get(0);\n    }\n")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5f53\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"RandomLoadBalance"),"\u65f6\uff0c\u662f\u6309\u6743\u91cd\u968f\u673a\u5206\u6d3e\u670d\u52a1\u5668\u7684\u3002"),(0,r.kt)("h2",{id:"hashloadbalance"},"HashLoadBalance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"HashLoadBalance")," \u4e2d\u91c7\u7528\u4e86\u4e00\u81f4\u6027hash\u7b97\u6cd5\uff0c\u4f7f\u7528\u6709\u5e8fhash\u73af\uff0c\u5c06key\u4e0e\u670d\u52a1\u5668\u8282\u70b9\u7684hash\u6620\u5c04\u7f13\u5b58\u8d77\u6765\u3002\u5bf9\u4e8e\u8bf7\u6c42\u7684ip\u5730\u5740\uff0c\u8ba1\u7b97\u51fa\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"hash"),"\u503c\uff0c \u5728hash\u73af\u4e0a\u987a\u65f6\u9488\u67e5\u627e\u8ddd\u79bb\u8fd9\u4e2akey\u7684hash\u503c\u6700\u8fd1\u7684\u8282\u70b9\uff0c\u5c06\u5176\u4f5c\u4e3a\u8981\u8def\u7531\u7684\u8282\u70b9\u3002\u4e00\u81f4\u6027hash\u89e3\u51b3\u4e86\u4f20\u7edf\u53d6\u4f59hash\u7b97\u6cd5\u7684\u53ef\u4f38\u7f29\u6027\u5dee\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HashLoadBalance"),"\u4e2d\u7684\u91c7\u7528\u7684\u662f\u52a0\u5bc6\u7684\u5355\u5411MD5\u6563\u5217\u51fd\u6570\uff0c\u8fd9\u4e2ahash\u51fd\u6570\u4f1ahash\u540e\u4ea7\u751f\u4e0d\u53ef\u9884\u671f\u4f46\u786e\u5b9a\u6027\u7684()\u7684\u7ed3\u679c\uff0c\u8f93\u51fa\u4e3a32-bit\u7684\u957f\u6574\u6570\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"hash"),"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static long hash(final String key) {\n    // md5 byte\n    MessageDigest md5;\n    try {\n        md5 = MessageDigest.getInstance("MD5");\n    } catch (NoSuchAlgorithmException e) {\n        throw new ShenyuException("MD5 not supported", e);\n    }\n    md5.reset();\n    byte[] keyBytes;\n    keyBytes = key.getBytes(StandardCharsets.UTF_8);\n    md5.update(keyBytes);\n    byte[] digest = md5.digest();\n    // hash code, Truncate to 32-bits\n    long hashCode = (long) (digest[3] & 0xFF) << 24\n            | ((long) (digest[2] & 0xFF) << 16)\n            | ((long) (digest[1] & 0xFF) << 8)\n            | (digest[0] & 0xFF);\n    return hashCode & 0xffffffffL;\n}\n')),(0,r.kt)("p",null,"\u518d\u770b\u4e00\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"HashLoadBalance"),"\u7684\u9009\u62e9\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"doSelect()"),"\u7684\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    private static final int VIRTUAL_NODE_NUM = 5;\n\n    @Override\n    public DivideUpstream doSelect(final List<DivideUpstream> upstreamList, final String ip) {\n        final ConcurrentSkipListMap<Long, DivideUpstream> treeMap = new ConcurrentSkipListMap<>();\n        for (DivideUpstream address : upstreamList) {\n            for (int i = 0; i < VIRTUAL_NODE_NUM; i++) {\n                long addressHash = hash("SOUL-" + address.getUpstreamUrl() + "-HASH-" + i);\n                treeMap.put(addressHash, address);\n            }\n        }\n        long hash = hash(String.valueOf(ip));\n        SortedMap<Long, DivideUpstream> lastRing = treeMap.tailMap(hash);\n        if (!lastRing.isEmpty()) {\n            return lastRing.get(lastRing.firstKey());\n        }\n        return treeMap.firstEntry().getValue();\n    }\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\uff0c\u751f\u6210\u5e26\u865a\u62df\u670d\u52a1\u5668\u8282\u70b9\u7684hash\u73af\uff0c \u4e00\u4e2a\u5b9e\u9645\u8282\u70b9\u4f1a\u751f\u62105\u4e2a\u865a\u62df\u8282\u70b9\uff0c\u56e0\u6b64\u6574\u4e2ahash\u73af\u7684\u5747\u5300\u6027\u5927\u5927\u589e\u52a0\uff0c\u964d\u4f4e\u6570\u636e\u503e\u659c\u7684\u53d1\u751f\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0hash\u73af\u7684\u6709\u5e8f\u6027\u53ca\u987a\u65f6\u9488\u67e5\u627e\u529f\u80fd\uff0c\u4ee3\u7801\u4e2d\u4f7f\u7528Java \u7684",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListMap.html"},"ConcurrentSkipListMap")," \u6765\u5b58\u50a8\u5e26\u865a\u62df\u8282\u70b9\u7684\u670d\u52a1\u5668\u8282\u70b9\u53ca\u5176hash\u503c\uff0c \u5b83\u65e2\u80fd\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\uff0c\u53c8\u80fd\u4fdd\u8bc1\u6570\u636e\u7684\u6709\u5e8f\u6027\uff0c\u652f\u6301\u9ad8\u5e76\u53d1\u3002 \u53e6\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentSkipListMap"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"tailMap(K fromKey)"),"\u65b9\u6cd5\uff0c\u53ef\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"map"),"\u4e2d\u67e5\u627e\u6bd4",(0,r.kt)("inlineCode",{parentName:"p"},"fromKey"),"\u5927\u7684\u503c\u7684\u96c6\u5408\uff0c\u4f46\u5e76\u4e0d\u9700\u8981\u904d\u5386\u6574\u4e2a\u6570\u636e\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u751f\u6210hash\u73af\u4e4b\u540e\uff0c\u5c31\u662f\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentSkipListMap"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"tailMap()"),"\u65b9\u6cd5\uff0c\u627e\u5230\u5927\u4e8e\u7b49\u4e8e\u8bf7\u6c42\u7684ip\u7684hash\u503c\u7684\u5b50\u96c6\uff0c\u8fd9\u4e2a\u5b50\u96c6\u7684\u7b2c\u4e00\u4e2a\u5c31\u662f\u8981\u8def\u7531\u7684\u670d\u52a1\u5668\u8282\u70b9\u3002\u91c7\u7528\u4e86\u5408\u9002\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fd9\u91cc\u7684\u4ee3\u7801\u770b\u4e0a\u53bb\u662f\u4e0d\u662f\u7279\u522b\u7684\u7b80\u6d01\u6d41\u7545\uff1f"),(0,r.kt)("h2",{id:"roundrobinloadbalance"},"RoundRobinLoadBalance"),(0,r.kt)("p",null,"Round-robin\u8f6e\u8be2\u65b9\u6cd5\u7684\u539f\u59cb\u5b9a\u4e49\u662f\u987a\u5e8f\u5faa\u73af\u5c06\u8bf7\u6c42\u4f9d\u6b21\u5faa\u73af\u5730\u8fde\u63a5\u5230\u6bcf\u4e2a\u670d\u52a1\u5668\u3002\u5f53\u67d0\u4e2a\u670d\u52a1\u5668\u53d1\u751f\u6545\u969c\uff08\u4f8b\u5982\uff1a\u4e00\u5206\u949f\u8fde\u63a5\u4e0d\u4e0a\u7684\u670d\u52a1\u5668)\uff0c\u4ece\u5019\u9009\u961f\u5217\u4e2d\u53d6\u51fa\uff0c\u4e0d\u53c2\u4e0e\u4e0b\u4e00\u6b21\u7684\u8f6e\u8be2\uff0c\u76f4\u5230\u5176\u6062\u590d\u6b63\u5e38\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"RoundRobinLoadBalance"),"\u4e2d\u5b9e\u73b0\u7684\u662f\u7ec4\u5185\u52a0\u6743\u8f6e\u8be2\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Weight Round Robin per-packet"),")\u65b9\u6cd5\uff1a"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8ba1\u7b97\u548c\u5b58\u50a8\u6bcf\u4e2a\u670d\u52a1\u5668\u8282\u70b9\u7684\u8f6e\u8be2\u6b21\u6570\uff0c\u5728\u8fd9\u4e2a\u7c7b\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9759\u6001\u5185\u90e8\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"WeigthRoundRobin"),"\uff0c\u6211\u4eec\u5148\u770b\u4e00\u4e0b\u5b83\u7684\u4e3b\u8981\u4ee3\u7801\uff08\u53bb\u6389\u4e86\u6ce8\u91ca\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected static class WeightedRoundRobin {\n\n    private int weight;\n    private final AtomicLong current = new AtomicLong(0);\n\n    private long lastUpdate;\n\n    void setWeight(final int weight) {\n        this.weight = weight;\n        current.set(0);\n    }\n    long increaseCurrent() {\n        return current.addAndGet(weight);\n    }\n\n    void sel(final int total) {\n        current.addAndGet(-1 * total);\n    }\n    void setLastUpdate(final long lastUpdate) {\n        this.lastUpdate = lastUpdate;\n    }\n}\n")),(0,r.kt)("p",null,"\u8bf7\u91cd\u70b9\u5173\u6ce8\u8fd9\u51e0\u4e2a\u65b9\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setWeight(final int weight)")," \uff0c\u4e3a\u5bf9\u8c61\u8bbe\u5b9a\u6743\u91cd\uff0c\u5e76\u5c06current\u91cd\u7f6e\u4e3a0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"increaseCurrent()")," : \u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicLong"),"\u7c7b\u578b\u7684\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"current"),"\uff0c\u7d2f\u52a0\u5176\u6743\u91cd\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sel(final int total)"),":   ",(0,r.kt)("inlineCode",{parentName:"p"},"current"),"\u51cf\u53bb\u4f20\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"total"),"\u503c\u3002"))),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u770b\u4e00\u4e0b\u5e26\u6743\u91cd\u7684\u8f6e\u8be2\u8fc7\u7a0b\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u3002\n\u9996\u5148\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),"\u7c7b\u578b\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"methodWeightMap")," \u4e24\u5c42\u5bf9\u8c61\u6765\u5b58\u50a8\u670d\u52a1\u5668\u5217\u8868\u4e0e\u5176\u5404\u4e2a\u660e\u7ec6\u8282\u70b9\u7684\u8f6e\u8be2\u8d44\u6599\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private final ConcurrentMap<String, ConcurrentMap<String, WeightedRoundRobin>> methodWeightMap = new ConcurrentHashMap<>(16);\n")),(0,r.kt)("p",null,"\u8fd9\u4e2amap\u5bf9\u8c61\u7b2c\u4e00\u5c42\u7684key\u4e3a\u5f53\u524d\u670d\u52a1\u5668\u5217\u8868\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"upstreamUrl"),",  \u7b2c\u4e8c\u4e2a\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap<String, WeightedRoundRobin>"),"\u5b58\u50a8\u4e86\u7ec4\u5185\u5404\u4e2a\u670d\u52a1\u5668\u8282\u70b9\u7684\u8f6e\u8be2\u60c5\u51b5\uff0c\u5185\u5c42Map\u7684key\u4e3a\u7ec4\u5185\u6bcf\u4e2a\u670d\u52a1\u5668\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"upstreamUrl"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"\u5bf9\u8c61\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"JUC"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),"\uff0c\u4e0d\u4ec5\u5b58\u53d6\u9ad8\u6548\uff0c\u800c\u4e14\u7ebf\u7a0b\u5b89\u5168\uff0c\u652f\u6301\u9ad8\u5e76\u53d1\u3002"),(0,r.kt)("p",null,"\u5185\u5c42map\u7684\u6bcf\u4e2a\u8282\u70b9\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"WeighedRoundRobin"),"\u4f5c\u4e3a\u9759\u6001\u5185\u90e8\u7c7b\u80fd\u786e\u4fdd\u7ebf\u7a0b\u5b89\u5168\uff0c\u5e76\u5b9e\u73b0\u7ec4\u5185\u7684\u52a0\u6743\u8f6e\u8be2\u9009\u62e9\u529f\u80fd\u3002\u4e0b\u9762\u662f\u8fd9\u4e2a\u7c7b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"doSelect()"),"\u65b9\u6cd5\u7684\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic DivideUpstream doSelect(final List<DivideUpstream> upstreamList, final String ip) {\n    String key = upstreamList.get(0).getUpstreamUrl();\n    ConcurrentMap<String, WeightedRoundRobin> map = methodWeightMap.get(key);\n    if (map == null) {\n        methodWeightMap.putIfAbsent(key, new ConcurrentHashMap<>(16));\n        map = methodWeightMap.get(key);\n    }\n    int totalWeight = 0;\n    long maxCurrent = Long.MIN_VALUE;\n    long now = System.currentTimeMillis();\n    DivideUpstream selectedInvoker = null;\n    WeightedRoundRobin selectedWRR = null;\n    for (DivideUpstream upstream : upstreamList) {\n        String rKey = upstream.getUpstreamUrl();\n        WeightedRoundRobin weightedRoundRobin = map.get(rKey);\n        int weight = getWeight(upstream);\n        if (weightedRoundRobin == null) {\n            weightedRoundRobin = new WeightedRoundRobin();\n            weightedRoundRobin.setWeight(weight);\n            map.putIfAbsent(rKey, weightedRoundRobin);\n        }\n        if (weight != weightedRoundRobin.getWeight()) {\n            //weight changed\n            weightedRoundRobin.setWeight(weight);\n        }\n        long cur = weightedRoundRobin.increaseCurrent();\n        weightedRoundRobin.setLastUpdate(now);\n        if (cur > maxCurrent) {\n            maxCurrent = cur;\n            selectedInvoker = upstream;\n            selectedWRR = weightedRoundRobin;\n        }\n        totalWeight += weight;\n    }\n    ......  //erase the section which handles the time-out upstreams. \n    if (selectedInvoker != null) {\n        selectedWRR.sel(totalWeight);\n        return selectedInvoker;\n    }\n    // should not happen here\n    return upstreamList.get(0);\n}\n")),(0,r.kt)("p",null,"\u4e3e\u4f8b\uff0c\u82e5\u670d\u52a1\u5668\u7ec4",(0,r.kt)("inlineCode",{parentName:"p"},"upstreamUrl")," \u5206\u522b\u4e3a\uff1a LIST = ","[upstream-20, upstream-50, upstream-30]","\u65f6\uff0c\u7ecf\u8fc7\u4e00\u8f6e\u6267\u884c\u540e\uff0c\u5efa\u7acb\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"methodWeightMap")," \u8d44\u6599\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"methodWeightMap",src:a(34891).Z})),(0,r.kt)("p",null,"\u5047\u8bbe\u4e0a\u8ff0\u7684LIST\u4e2d\uff0c\u5404\u4e2a\u670d\u52a1\u5668\u8282\u70b9\u7684\u6743\u91cd\u6570\u7ec4\u4e3a: ","[20,50,30]",", \u4e0b\u56fe\u662f\u5185\u90e8\u7c7bcurrent \u503c\u53d8\u5316\u548c\u8f6e\u8be2\u9009\u62e9\u8fc7\u7a0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"weighted-roundrobin-demo",src:a(25231).Z})),(0,r.kt)("p",null,"\u6bcf\u4e00\u8f6e\uff0c\u9009\u62e9\u503ccurrent\u6700\u5927\u7684\u670d\u52a1\u5668\u8282\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Round1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5f53\u524d\u670d\u52a1\u5668LIST\u505a\u904d\u5386\uff0c\u5f53\u670d\u52a1\u5668\u8282\u70b9\u7684weightedRoundRobin \u4e3anull\u65f6\uff0ccurrent\u88ab\u7f6e\u4e3a\u5404\u81ea\u7684\u6743\u91cd\uff1b \u4e0d\u4e3anull\u65f6\uff0c\u7d2f\u52a0\u5404\u81ea\u7684\u6743\u91cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5373\uff1a\u904d\u5386\u540ecurrent \u5206\u522b\u4e3a ","[20, 50,30]"," \uff0c \u4f1a\u9009\u62e9Stream-50, Stream-50\u5bf9\u5e94\u7684WeightRoundRobin\u9759\u6001\u7c7b\u505a sel(-total)\u5904\u7406\uff0ccurrent \u66f4\u65b0\u4e3a","[20,-50, 30]","."))),(0,r.kt)("li",{parentName:"ul"},"Round 2  \u904d\u5386\u540e\u7684current\u662f","[40,0,60]",",  \u4f1a\u9009\u62e9Stream-30\uff0c current\u5206\u522b\u66f4\u65b0\u4e3a","[40,0,-40]","."),(0,r.kt)("li",{parentName:"ul"},"Round 3  \u904d\u5386\u540e\u7684current\u662f","[60,50,-10]",",  \u4f1a\u9009\u62e9Stream-20\uff0ccurrent\u5206\u522b\u66f4\u65b0\u4e3a","[-40,50,-10]",".")),(0,r.kt)("p",null,"\u4e2d\u95f4\u8fdb\u884c\u4e86\u5bb9\u9519\u5904\u7406\uff0c \u5f53\u670d\u52a1\u5668\u7684\u4e2a\u6570\u4e0emap\u4e2a\u6570\u4e0d\u4e00\u6837\uff0c\u5c31\u5bf9methodWeightMap \u52a0\u9501\u505a\u5904\u7406\u3002 \u7528\u5148copy \u540emodify\u7684\u65b9\u5f0f\uff0c \u628a\u8d85\u65f6\u7684\u670d\u52a1\u5668remove\u6389\uff0c\u5373\u79fb\u9664\u6389\u53d1\u751f\u6545\u969c\u7684\u670d\u52a1\u5668\uff0c\u5e76\u66f4\u65b0Map\u8d44\u6599\u3002\u5982\u4e0b\u662f\u5f02\u5e38\u65f6\u7684\u5904\u7406\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"    if (!updateLock.get() && upstreamList.size() != map.size() && updateLock.compareAndSet(false, true)) {\n        try {\n            // copy -> modify -> update reference\n            ConcurrentMap<String, WeightedRoundRobin> newMap = new ConcurrentHashMap<>(map);\n            newMap.entrySet().removeIf(item -> now - item.getValue().getLastUpdate() > recyclePeriod);\n            methodWeightMap.put(key, newMap);\n        } finally {\n            updateLock.set(false);\n        }\n    }\n\n    if (selectedInvoker != null) {\n        selectedWRR.sel(totalWeight);\n        return selectedInvoker;\n    }\n    // should not happen here\n    return upstreamList.get(0);\n")),(0,r.kt)("h2",{id:"loadbalanceutils"},"LoadBalanceUtils"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u7c7b\u4e2d\uff0c\u63d0\u4f9b\u4e86\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u7684\u9759\u6001\u65b9\u6cd5, \u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionLoader")," \u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u6267\u884c\u5165\u53e3\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cLoadBalance\u6a21\u7ec4\u662f\u53ef\u914d\u7f6e\u3001\u53ef\u6269\u5c55\u7684\u3002\u8fd9\u4e2a\u9759\u6001\u65b9\u6cd5\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"algorithm"),"\u53d8\u91cf\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceEnum"),"\u4e2d\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u679a\u4e3e\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Selector divide upstream.\n     *\n     * @param upstreamList the upstream list\n     * @param algorithm    the loadBalance algorithm\n     * @param ip           the ip\n     * @return the divide upstream\n     */\n    public static DivideUpstream selector(final List<DivideUpstream> upstreamList, final String algorithm, final String ip) {\n        LoadBalance loadBalance = ExtensionLoader.getExtensionLoader(LoadBalance.class).getJoin(algorithm);\n        return loadBalance.select(upstreamList, ip);\n    }\n")),(0,r.kt)("h2",{id:"using-of-loadbalance-module"},"Using of LoadBalance module"),(0,r.kt)("p",null,"\u4e0a\u9762\u8bf4\u660e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," SPI\u63a5\u53e3\u53ca\u4e09\u4e2a\u5b9e\u4f5c\u7c7b\u3002\u4e0b\u9762\u770b\u4e00\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),"\u4e2d\u662f\u5982\u4f55\u88ab\u8c03\u7528\u7684\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"DividePlugin"),"\u662f\u8def\u7531\u9009\u62e9\u63d2\u4ef6\uff0c\u6240\u6709\u7684Http\u8bf7\u6c42\u90fd\u7531\u8be5\u63d2\u4ef6\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u5904\u7406\u3002\u5f53\u8bf7\u6c42\u5934rpcType = http, \u4e14\u5f00\u542f\u8be5\u63d2\u4ef6\u65f6\uff0c\u5b83\u5c06\u6839\u636e\u8bf7\u6c42\u53c2\u6570\u5339\u914d\u89c4\u5219\uff0c\u6700\u7ec8\u4ea4\u7531\u4e0b\u6e38\u63d2\u4ef6\u8fdb\u884c\u54cd\u5e94\u5f0f\u4ee3\u7406\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"DividePlugin"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"doExecute"),"\u65b9\u6cd5\u4e2d\uff0c\u5148\u5bf9\u8981\u8f6c\u53d1\u7684\u8bf7\u6c42\u7684Header\u5927\u5c0f\u3001content\u957f\u5ea6\u7b49\u505a\u6821\u9a8c\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SneakyThrows\n@Override\nprotected Mono<Void> doExecute(final ServerWebExchange exchange, final ShenyuPluginChain chain, final SelectorData selector, final RuleData rule) {\n   ......\n}\n")),(0,r.kt)("p",null,"\u63a5\u53e3\u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuPluginChain")," \u7c7b\u578b\uff0c\u4ee3\u8868",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),"\u7684\u8c03\u7528\u94fe\uff0c\u5177\u4f53\u53ef\u53c2\u89c1",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Sheyu")," \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),"\u7684\u8c03\u7528\u673a\u5236\u3002\u7b2c\u4e09\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"SelectorData"),"\u7c7b\u578b\u7684\u53c2\u6570\u662f\u9009\u62e9\u5668\uff0c \u7b2c\u56db\u4e2a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"RuldData"),"\u7c7b\u578b\uff0c\u4ee3\u8868\u89c4\u5219\u3002\u5206\u522b\u8bf7\u67e5\u770b\u5bf9\u5e94\u7684\u4ee3\u7801\u3002"),(0,r.kt)("p",null," \u4e0b\u9762\u7ed9\u51fa\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"doExecute"),"()\u65b9\u6cd5\u4e2d\uff0c\u6709\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u8c03\u7528\u7684\u4ee3\u7801\u7247\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   //\u53d6\u5230\u8981\u8def\u7531\u7684\u670d\u52a1\u5668\u8282\u70b9\u5217\u8868\u3002\n   List<DivideUpstream> upstreamList = UpstreamCacheManager.getInstance().findUpstreamListBySelectorId(selector.getId());\n    ... \n    //\u53d6\u5230\u8bf7\u6c42\u7684ip\n    String ip =   Objects.requireNonNull(exchange.getRequest().getRemoteAddress()).getAddress().getHostAddress();\n\n    //\u8c03\u7528Util\u65b9\u6cd5\uff0c\u6267\u884cLoadBalance\u5904\u7406\n    DivideUpstream divideUpstream = LoadBalanceUtils.selector(upstreamList, ruleHandle.getLoadBalance(), ip);\n")),(0,r.kt)("p",null,"  \u8fd9\u91cc",(0,r.kt)("inlineCode",{parentName:"p"},"UpstreamCacheManager")," \u662f\u7f13\u5b58\u7684\u8981\u8def\u7531\u7684\u670d\u52a1\u5668\u8282\u70b9 \uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"ruleHandle.getLoadBalance()"),"\u53d6\u5230\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceEnum"),"\u5b9a\u4e49\u7684\u679a\u4e3ename, \u5982",(0,r.kt)("inlineCode",{parentName:"p"},"random, hash, roundRobin"),"\u7b49."),(0,r.kt)("p",null,"  \u7ecf\u8fc7\u5c01\u88c5\uff0c\u8c03\u7528\u8d1f\u8f7d\u5747\u8861\u529f\u80fd\u975e\u5e38\u7684\u65b9\u4fbf\u3002  \u672a\u6765\u589e\u52a0\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u7c7b\uff0c\u8fd9\u4e9b\u8c03\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin"),"\u4ee3\u7801\u5b8c\u5168\u4e0d\u9700\u8981\u53d8\u66f4\u3002"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"\u7ecf\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u89e3\u8bfb\uff0c\u4ece\u8bbe\u8ba1\u89d2\u5ea6\u603b\u7ed3",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," \u6a21\u7ec4\u5177\u6709\u5982\u4e0b\u7684\u7279\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u6269\u5c55\u6027\uff1a\u9762\u5411\u63a5\u53e3\u7684\u8bbe\u8ba1\uff0c\u53ca\u57fa\u4e8eApache Shenyu SPI\u7684\u5b9e\u73b0\uff0c\u4f7f\u5f97\u7cfb\u7edf\u5177\u6709\u826f\u597d\u7684\u53ef\u6269\u5c55\u6027\u3002\u53ef\u4ee5\u65b9\u4fbf\u7684\u6269\u5c55\u4e3a\u5176\u4ed6\u7684\u52a8\u6001\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff0c\u5982\u6700\u5c11\u8fde\u63a5\u65b9\u5f0f(least connection)\u3001\u6700\u5feb\u6a21\u5f0f( fastest)\u3002\u5e76\u652f\u6301\u96c6\u7fa4\u5904\u7406\uff0c\u5177\u6709\u826f\u597d\u7684\u53ef\u6269\u5c55\u6027\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4f38\u7f29\u6027\uff1a \u91c7\u7528\u7684\u4e00\u81f4\u6027hash ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"\u3001\u6743\u91cd\u968f\u673a\u548c\u6743\u91cd\u8f6e\u8be2\uff0c\u90fd\u53ef\u4ee5\u65e0\u7f1d\u652f\u6301\u96c6\u7fa4\u6269\u5bb9\u6216\u7f29\u5bb9\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6d41\u91cf\u9884\u70ed\u7b49\u66f4\u7ec6\u81f4\u7684\u8bbe\u8ba1\uff0c\u80fd\u5e26\u6765\u6574\u4f53\u4e0a\u66f4\u4e3a\u5e73\u6ed1\u7684\u8d1f\u8f7d\u5747\u8861\u3002"))))}m.isMDXComponent=!0},49890:function(e,n,a){n.Z=a.p+"assets/images/loadbalance-class-diagram-9bfc1b2f9cb359702481d7f739ae21f7.png"},34891:function(e,n,a){n.Z=a.p+"assets/images/methodWeightMap-90b4a77aedffd8cd88bc12b9551739ad.png"},25231:function(e,n,a){n.Z=a.p+"assets/images/weighted-roundrobin-demo-cec02fd422fb01ef73e882e0966a8cec.png"}}]);