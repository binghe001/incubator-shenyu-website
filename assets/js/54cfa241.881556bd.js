"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[77305],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),m=i,u=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94666:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"LoadBalance SPI Source Code Analysis",author:"Huihui Yin",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/changanjennifer/",tags:["load balance","SPI","Apache ShenYu"]},s=void 0,d={permalink:"/blog/SPI-SourceCode-Analysis-LoadBalance-SPI",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/blog/SPI-SourceCode-Analysis-LoadBalance-SPI.md",source:"@site/blog/SPI-SourceCode-Analysis-LoadBalance-SPI.md",title:"LoadBalance SPI Source Code Analysis",description:"Gateway applications need to support a variety of load balancing  strategies, including random,Hashing, RoundRobin and so on. In Apache Shenyu gateway, it not only realizes such traditional algorithms, but also makes smoother traffic processing for the entry of server nodes through detailed processing such as traffic warm-up, so as to obtain better overall stability. In this article, let's walk through how Apache Shenyu is designed and implemented this part of the function.",date:"2022-06-07T04:23:45.561Z",formattedDate:"June 7, 2022",tags:[{label:"load balance",permalink:"/blog/tags/load-balance"},{label:"SPI",permalink:"/blog/tags/spi"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:12.83,truncated:!1,prevItem:{title:"Code Analysis For Param-Mapping Plugin",permalink:"/blog/Plugin-SourceCode-Analysis-Param-Mapping-Plugin"},nextItem:{title:"MatchStrategy  -- analyze the design based on SPI",permalink:"/blog/SPI-SourceCode-Analysis-MatchStrategy-SPI"}},p=[{value:"LoadBalance <code>SPI</code>",id:"loadbalance-spi",children:[]},{value:"Design of LoadBalance module",id:"design-of-loadbalance-module",children:[]},{value:"AbstractLoadBalance",id:"abstractloadbalance",children:[]},{value:"RandomLoadBalance",id:"randomloadbalance",children:[]},{value:"HashLoadBalance",id:"hashloadbalance",children:[]},{value:"RoundRobinLoadBalance",id:"roundrobinloadbalance",children:[]},{value:"LoadBalanceUtils",id:"loadbalanceutils",children:[]},{value:"Using of LoadBalance module",id:"using-of-loadbalance-module",children:[]},{value:"Summary",id:"summary",children:[]}],c={toc:p};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gateway applications need to support a variety of load balancing  strategies, including ",(0,r.kt)("inlineCode",{parentName:"p"},"random"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Hashing"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RoundRobin")," and so on. In ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu")," gateway, it not only realizes such traditional algorithms, but also makes smoother traffic processing for the entry of server nodes through detailed processing such as traffic ",(0,r.kt)("inlineCode",{parentName:"p"},"warm-up,")," so as to obtain better overall stability. In this article, let's walk through how ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu")," is designed and implemented this part of the function."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article based on ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-2.4.0")," version of the source code analysis.")),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("h2",{id:"loadbalance-spi"},"LoadBalance ",(0,r.kt)("inlineCode",{parentName:"h2"},"SPI")),(0,r.kt)("p",null,"The implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," is in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin-divide"))," module. It has based on its ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," creation mechanism. The core interface code is shown as follows. This interface  well explains the concept: load balancing is to select the most appropriate node from a series of server nodes.  Routing, traffic processing and load balancing is the basic function of ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SPI\npublic interface LoadBalance {\n\n    /**\n     * @param upstreamList upstream list\n     * @param ip ip\n     * @return divide upstream\n     */\n    DivideUpstream select(List<DivideUpstream> upstreamList, String ip);\n}\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"upstreamList")," represents the server nodes list available for routing. ",(0,r.kt)("inlineCode",{parentName:"p"},"DivideUpstream")," is the data structure of server node, the  important elements including ",(0,r.kt)("inlineCode",{parentName:"p"},"protocol"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upstreamUrl")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warmup"),".  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class DivideUpstream implements Serializable {\n    private String upstreamHost;\n    /**\n     * this is http protocol.\n     */\n    private String protocol;\n    private String upstreamUrl;\n    private int weight;\n    /**\n     * false close/ true open.\n     */\n    @Builder.Default\n    private boolean status = true;\n    private long timestamp;\n    private int warmup;\n}\n\n")),(0,r.kt)("h2",{id:"design-of-loadbalance-module"},"Design of LoadBalance module"),(0,r.kt)("p",null,"The class diagram of ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," module",(0,r.kt)("inlineCode",{parentName:"p"},"is"),"shown as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"loadbalance-class-diagram",src:n(49890).Z})),(0,r.kt)("p",null,"We can draw the outline of ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," module from the class diagram:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The abstract class ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractLoadBalance")," implements the SPI ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," interface\uff0cand supplies the template methods for selection related, such as select(), selector()\uff0cand gives the calculation of weight.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Three implementation classes which inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractLoadBalance")," to realize their own logic:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RandomLoadBalance")," - Weight Random"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HashLoadBalance"),"  - Consistent Hashing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RoundRobinLoadBalance")," -Weight Round Robin per-packet"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The utility class ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceUtil")," provides public static method to be called."),(0,r.kt)("p",{parentName:"li"},"The implementation classes and algorithms are configurable.   According to its specification,   by adding profile in ",(0,r.kt)("inlineCode",{parentName:"p"},"SHENYU_DIERECTORY")," directory, the data in profile should be  ",(0,r.kt)("em",{parentName:"p"},"key"),"=",(0,r.kt)("em",{parentName:"p"},"value-class")," format, where the ",(0,r.kt)("em",{parentName:"p"},"value-class")," will be load by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu SPI")," class loader, and ",(0,r.kt)("em",{parentName:"p"},"key")," value should be an ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceEnum.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"random=org.apache.shenyu.plugin.divide.balance.spi.RandomLoadBalance\nroundRobin=org.apache.shenyu.plugin.divide.balance.spi.RoundRobinLoadBalance\nhash=org.apache.shenyu.plugin.divide.balance.spi.HashLoadBalance\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"The code of LoadBalanceEnum")," is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public enum LoadBalanceEnum {\n    /**\n     * Hash load balance enum.\n     */\n    HASH(1, "hash", true),\n\n    /**\n     * Random load balance enum.\n     */\n    RANDOM(2, "random", true),\n\n    /**\n     * Round robin load balance enum.\n     */\n    ROUND_ROBIN(3, "roundRobin", true);\n\n    private final int code;\n    private final String name;\n    private final boolean support;\n}\n')),(0,r.kt)("h2",{id:"abstractloadbalance"},"AbstractLoadBalance"),(0,r.kt)("p",null,"This abstract class implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," interface and define the abstract method ",(0,r.kt)("inlineCode",{parentName:"p"},"doSelect()")," to be processed by the implementation classes. In the template method ",(0,r.kt)("inlineCode",{parentName:"p"},"select()"),",  It will do validation first then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"doSelect()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   /** \n     * Do select divide upstream.\n     *\n     * @param upstreamList the upstream list\n     * @param ip           the ip\n     * @return the divide upstream\n     */\n    protected abstract DivideUpstream doSelect(List<DivideUpstream> upstreamList, String ip);\n\n    @Override\n    public DivideUpstream select(final List<DivideUpstream> upstreamList, final String ip) {\n        if (CollectionUtils.isEmpty(upstreamList)) {\n            return null;\n        }\n        if (upstreamList.size() == 1) {\n            return upstreamList.get(0);\n        }\n        return doSelect(upstreamList, ip);\n    }\n")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," of server node  is not null, and the interval between current time and ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," is within the traffic warm-up time, the formula for weight calculation is.\n$$ {1-1}\nww = min(1,uptime/(warmup/weight))\n$$\nIt can be seen from the formula that the final weight(",(0,r.kt)("inlineCode",{parentName:"p"},"ww"),") is proportional to the original-",(0,r.kt)("inlineCode",{parentName:"p"},"weight")," value. The closer the time interval is to the ",(0,r.kt)("inlineCode",{parentName:"p"},"warmup")," time, the greater the final ",(0,r.kt)("inlineCode",{parentName:"p"},"ww"),". That is, the longer the waiting time of the request, the higher the final ",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),". When there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," or other conditions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ww")," is equal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"weight")," value of ",(0,r.kt)("inlineCode",{parentName:"p"},"DivideUpstream")," object."),(0,r.kt)("p",null,"The central of thinking about ",(0,r.kt)("em",{parentName:"p"},"warm-up"),"is to avoid  bad performance when adding new server and the new ",(0,r.kt)("inlineCode",{parentName:"p"},"JVMs")," starting up."),(0,r.kt)("p",null,"Let's see how the load balancing  with ",(0,r.kt)("inlineCode",{parentName:"p"},"Random"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Hashing")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RoundRobin")," strategy is implemented."),(0,r.kt)("h2",{id:"randomloadbalance"},"RandomLoadBalance"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RandomLoadBalance")," can handle two situations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each node without weight, or every node has the same weight, randomly choose one."),(0,r.kt)("li",{parentName:"ol"},"Server Nodes with different weight, choose one randomly by weight.")),(0,r.kt)("p",null,"Following is the ",(0,r.kt)("inlineCode",{parentName:"p"},"random()")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"RandomLoadBalance"),". When traversing server node list, if the randomly generated value is less than the weight of node, then the current node will be chosen. If after one round traversing, there's is no server node match, then it will return the first item of the list. The ",(0,r.kt)("inlineCode",{parentName:"p"},"getWeight(DivideUpstream upstream)")," is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractLoadBalance")," class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    private DivideUpstream random(final int totalWeight, final List<DivideUpstream> upstreamList) {\n        // If the weights are not the same and the weights are greater than 0, then random by the total number of weights\n        int offset = RANDOM.nextInt(totalWeight);\n        // Determine which segment the random value falls on\n        for (DivideUpstream divideUpstream : upstreamList) {\n            offset -= getWeight(divideUpstream);\n            if (offset < 0) {\n                return divideUpstream;\n            }\n        }\n        return upstreamList.get(0);\n    }\n")),(0,r.kt)("h2",{id:"hashloadbalance"},"HashLoadBalance"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"HashLoadBalance"),", it takes the advantages of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consistent_hashing"},"consistent hashing")," , that maps both the input traffic and the servers to a unit circle, or name as  ",(0,r.kt)("em",{parentName:"p"},"hash ring"),". For the requested",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," address, with its hash value to find the node closest in clockwise order as the node to be routed.  Let's see how consistent hashing is implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"HashLoadBalance"),"."),(0,r.kt)("p",null,"As to the hash algorithms, ",(0,r.kt)("inlineCode",{parentName:"p"},"HashLoadBalance")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"MD5")," hash, which has the advantage of mixing the input in an unpredictable but deterministic way. The output is a 32-bit integer.  the code is shown as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static long hash(final String key) {\n    // md5 byte\n    MessageDigest md5;\n    try {\n        md5 = MessageDigest.getInstance("MD5");\n    } catch (NoSuchAlgorithmException e) {\n        throw new ShenyuException("MD5 not supported", e);\n    }\n    md5.reset();\n    byte[] keyBytes;\n    keyBytes = key.getBytes(StandardCharsets.UTF_8);\n    md5.update(keyBytes);\n    byte[] digest = md5.digest();\n    // hash code, Truncate to 32-bits\n    long hashCode = (long) (digest[3] & 0xFF) << 24\n            | ((long) (digest[2] & 0xFF) << 16)\n            | ((long) (digest[1] & 0xFF) << 8)\n            | (digest[0] & 0xFF);\n    return hashCode & 0xffffffffL;\n}\n')),(0,r.kt)("p",null,"Importantly, how to generate the hash ring and avoid skewness?  Let's the",(0,r.kt)("inlineCode",{parentName:"p"},"doSelect()")," method in",(0,r.kt)("inlineCode",{parentName:"p"},"HashLoadBalance")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    private static final int VIRTUAL_NODE_NUM = 5;\n\n    @Override\n    public DivideUpstream doSelect(final List<DivideUpstream> upstreamList, final String ip) {\n        final ConcurrentSkipListMap<Long, DivideUpstream> treeMap = new ConcurrentSkipListMap<>();\n        for (DivideUpstream address : upstreamList) {\n            for (int i = 0; i < VIRTUAL_NODE_NUM; i++) {\n                long addressHash = hash("SOUL-" + address.getUpstreamUrl() + "-HASH-" + i);\n                treeMap.put(addressHash, address);\n            }\n        }\n        long hash = hash(String.valueOf(ip));\n        SortedMap<Long, DivideUpstream> lastRing = treeMap.tailMap(hash);\n        if (!lastRing.isEmpty()) {\n            return lastRing.get(lastRing.firstKey());\n        }\n        return treeMap.firstEntry().getValue();\n    }\n')),(0,r.kt)("p",null,'In this method, duplicated labels are used which are called "virtual nodes" (i.e.  5 virtual nodes point to a single "real" server).  It will make the distribution in hash ring more evenly, and reduce the occurrence of data skewness.'),(0,r.kt)("p",null,"In order to rescue the data sorted in the hash ring, and can be accessed quickly, we use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListMap.html"},"ConcurrentSkipListMap")," of Java to store the server node lists ( with virtual nodes) and its hash value as key.  This class a member of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/collections/index.html"},"Java Collections Framework"),", providing expected average ",(0,r.kt)("em",{parentName:"p"},"log(n)")," time cost for retrieve and access operations safely execute concurrent by multiple threads.  "),(0,r.kt)("p",null,"Furthermore, the method tailMap(K fromKey) of  ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentSkipListMap")," can return a view of portion of the map whose keys are greater or equal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"fromKey"),", and not need to navigate the whole map."),(0,r.kt)("p",null,"In the above code section, after the hash ring is generated, it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"tailMap(K fromKey)")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentSkipListMap")," to find the subset that the elements greater, or equal to the hash value of the requested ",(0,r.kt)("inlineCode",{parentName:"p"},"ip"),", its first element is just the node to be routed. With the suitable data structure, the code looks particularly clear and concise."),(0,r.kt)("p",null,"Consistent hashing resolved the poor scalability of the traditional hashing by modular operation."),(0,r.kt)("h2",{id:"roundrobinloadbalance"},"RoundRobinLoadBalance"),(0,r.kt)("p",null,"The original Round-robin selection is to select server nodes one by one from the candidate list. Whenever some nodes has crash ( ex, cannot be connected after 1 minute), it will be removed from the candidate list, and do not attend the next round, until the server node is recovered and it will be add to the candidate list again.  In ",(0,r.kt)("inlineCode",{parentName:"p"},"RoundRobinLoadBalance"),",the weight Round Robin per-packet schema is implemented."),(0,r.kt)("p",null,"In order to work in concurrent system, it provides an inner static class ",(0,r.kt)("inlineCode",{parentName:"p"},"WeigthRoundRobin")," to store and calculate the rolling selections of each server node. Following is the main section of this class( removed remark )"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected static class WeightedRoundRobin {\n\n    private int weight;\n    private final AtomicLong current = new AtomicLong(0);\n\n    private long lastUpdate;\n\n    void setWeight(final int weight) {\n        this.weight = weight;\n        current.set(0);\n    }\n    long increaseCurrent() {\n        return current.addAndGet(weight);\n    }\n\n    void sel(final int total) {\n        current.addAndGet(-1 * total);\n    }\n    void setLastUpdate(final long lastUpdate) {\n        this.lastUpdate = lastUpdate;\n    }\n}\n")),(0,r.kt)("p",null,"Please focus on the these method:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setWeight(final int weight)")," : set the current value by ",(0,r.kt)("em",{parentName:"p"},"weight"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"increaseCurrent()"),": Increment the ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," value by ",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," set to 0. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sel(final int total)"),": decrement  the ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," value by  ",(0,r.kt)("em",{parentName:"p"},"total")),(0,r.kt)("p",{parentName:"li"},"Let's see how the weight factor being used in this round-robin  selection? "),(0,r.kt)("p",{parentName:"li"},"First it defines a two-level  ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap")," type variable named as ",(0,r.kt)("inlineCode",{parentName:"p"},"methodWeightMap")," , to cache the server node lists and the rolling selection data about each server node."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private final ConcurrentMap<String, ConcurrentMap<String, WeightedRoundRobin>> methodWeightMap = new ConcurrentHashMap<>(16);\n")),(0,r.kt)("p",null,"In this map, the key of first level is  set to ",(0,r.kt)("inlineCode",{parentName:"p"},"upstreamUrl")," of first element in server node list. The type of second object is ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap<String, WeightedRoundRobin>,")," the key of this inner Map is  the value ",(0,r.kt)("inlineCode",{parentName:"p"},"upstreamUrl"),"variable of each server node in this server list, the value object is ",(0,r.kt)("inlineCode",{parentName:"p"},"WeightedRoundRobin"),", used to trace the rolling selection data about each server node. As to the implementation class for the  Map object, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap")," of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/package-summary.html"},"JUC"),",  a hash table supporting full concurrency of retrievals and high expected concurrency for updates."),(0,r.kt)("p",null,"In the second level of the map, the embedded  static class - ",(0,r.kt)("inlineCode",{parentName:"p"},"WeighedRoundRobin")," of each node is thread-safe, implementing the weighted ",(0,r.kt)("inlineCode",{parentName:"p"},"RoundRobin")," per bucket. The following is the code of the ",(0,r.kt)("inlineCode",{parentName:"p"},"doselect()")," method of this class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic DivideUpstream doSelect(final List<DivideUpstream> upstreamList, final String ip) {\n    String key = upstreamList.get(0).getUpstreamUrl();\n    ConcurrentMap<String, WeightedRoundRobin> map = methodWeightMap.get(key);\n    if (map == null) {\n        methodWeightMap.putIfAbsent(key, new ConcurrentHashMap<>(16));\n        map = methodWeightMap.get(key);\n    }\n    int totalWeight = 0;\n    long maxCurrent = Long.MIN_VALUE;\n    long now = System.currentTimeMillis();\n    DivideUpstream selectedInvoker = null;\n    WeightedRoundRobin selectedWRR = null;\n    for (DivideUpstream upstream : upstreamList) {\n        String rKey = upstream.getUpstreamUrl();\n        WeightedRoundRobin weightedRoundRobin = map.get(rKey);\n        int weight = getWeight(upstream);\n        if (weightedRoundRobin == null) {\n            weightedRoundRobin = new WeightedRoundRobin();\n            weightedRoundRobin.setWeight(weight);\n            map.putIfAbsent(rKey, weightedRoundRobin);\n        }\n        if (weight != weightedRoundRobin.getWeight()) {\n            //weight changed\n            weightedRoundRobin.setWeight(weight);\n        }\n        long cur = weightedRoundRobin.increaseCurrent();\n        weightedRoundRobin.setLastUpdate(now);\n        if (cur > maxCurrent) {\n            maxCurrent = cur;\n            selectedInvoker = upstream;\n            selectedWRR = weightedRoundRobin;\n        }\n        totalWeight += weight;\n    }\n    ......  //erase the section which handles the time-out upstreams. \n    if (selectedInvoker != null) {\n        selectedWRR.sel(totalWeight);\n        return selectedInvoker;\n    }\n    // should not happen here\n    return upstreamList.get(0);\n}\n")),(0,r.kt)("p",null,"For example we assume ",(0,r.kt)("inlineCode",{parentName:"p"},"upstreamUrl")," values of three server nodes is: LIST = ","[upstream-20, upstream-50, upstream-30]",". After a round of execution, the data in newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"methodWeightMap")," is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"methodWeightMap",src:n(34891).Z})),(0,r.kt)("p",null,"For the above example LIST, assumes the  ",(0,r.kt)("inlineCode",{parentName:"p"},"weight")," array is  ","[20,50,30]",".  the following figure shows the value change and polling selection process of the ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," array in ",(0,r.kt)("inlineCode",{parentName:"p"},"WeighedRoundRobin")," object."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"weighted-roundrobin-demo",src:n(25231).Z})),(0,r.kt)("p",null,"In each round, it will choose the server node with max ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Round1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Traverse the server node list, initialize the ",(0,r.kt)("inlineCode",{parentName:"li"},"weightedRoundRobin")," instance of each server node or update  the ",(0,r.kt)("inlineCode",{parentName:"li"},"weight")," value of server nodes object ",(0,r.kt)("inlineCode",{parentName:"li"},"DivideUpstream")),(0,r.kt)("li",{parentName:"ul"},"say, in this case,  after traverse, the ",(0,r.kt)("inlineCode",{parentName:"li"},"current")," array  of the node list changes to  ","[20, 50,30]","\uff0cso according to rule, the node Stream-50 would be chosen, and then the static object ",(0,r.kt)("inlineCode",{parentName:"li"},"WeightedRoundRobin")," of  Stream-50 executes ",(0,r.kt)("inlineCode",{parentName:"li"},"sel(-total)")," , the ",(0,r.kt)("inlineCode",{parentName:"li"},"current")," array is now ","[20,-50, 30]","."))),(0,r.kt)("li",{parentName:"ul"},"Round 2:  after traverse, the ",(0,r.kt)("inlineCode",{parentName:"li"},"current")," array should be ","[40,0,60]",",  so the Stream-30 node would be chosen\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"current")," array is now  ","[40,0,-40]","."),(0,r.kt)("li",{parentName:"ul"},"Round 3:  after traverse, ",(0,r.kt)("inlineCode",{parentName:"li"},"current")," array  changes to ","[60,50,-10]",",  Stream-20 would be chosen\uff0cand ",(0,r.kt)("inlineCode",{parentName:"li"},"current")," array is now ","[-40,50,-10]",".")),(0,r.kt)("p",null,"When there is any inconsistence or some server crashed, for example, the lists size does not match with the elements in map, it would copy and modify the element with lock mechanism, and remove the timeout server node,  the data in Map updated. Following is the fault tolerance code segment.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"    if (!updateLock.get() && upstreamList.size() != map.size() && updateLock.compareAndSet(false, true)) {\n        try {\n            // copy -> modify -> update reference\n            ConcurrentMap<String, WeightedRoundRobin> newMap = new ConcurrentHashMap<>(map);\n            newMap.entrySet().removeIf(item -> now - item.getValue().getLastUpdate() > recyclePeriod);\n            methodWeightMap.put(key, newMap);\n        } finally {\n            updateLock.set(false);\n        }\n    }\n\n    if (selectedInvoker != null) {\n        selectedWRR.sel(totalWeight);\n        return selectedInvoker;\n    }\n    // should not happen here\n    return upstreamList.get(0);\n")),(0,r.kt)("h2",{id:"loadbalanceutils"},"LoadBalanceUtils"),(0,r.kt)("p",null,"In this class, a static method calling ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," is provided, where",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionLoader")," is the entry point of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu SPI"),". That is to say, ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," module is configurable and extensible. The ",(0,r.kt)("inlineCode",{parentName:"p"},"algorithm")," variable in this static method is the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," enumeration type defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceEnum"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Selector divide upstream.\n     *\n     * @param upstreamList the upstream list\n     * @param algorithm    the loadBalance algorithm\n     * @param ip           the ip\n     * @return the divide upstream\n     */\n    public static DivideUpstream selector(final List<DivideUpstream> upstreamList, final String algorithm, final String ip) {\n        LoadBalance loadBalance = ExtensionLoader.getExtensionLoader(LoadBalance.class).getJoin(algorithm);\n        return loadBalance.select(upstreamList, ip);\n    }\n")),(0,r.kt)("h2",{id:"using-of-loadbalance-module"},"Using of LoadBalance module"),(0,r.kt)("p",null,"In the above section, we describe the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," and three implementation classes. Let's take a look at how the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," to be used in ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),". ",(0,r.kt)("a",{parentName:"p",href:"http://shenyu.apache.org/docs/plugin-center/http-handle/divide-plugin"},"DividePlugin")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu")," responsible for routing ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," request. when enable to use this ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),", it will transfer traffic according to selection data and rule data, and deliver to next plugin downstream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SneakyThrows\n@Override\nprotected Mono<Void> doExecute(final ServerWebExchange exchange, final ShenyuPluginChain chain, final SelectorData selector, final RuleData rule) {\n   ......\n}\n")),(0,r.kt)("p",null,"The type of second parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"doExecute()")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuPluginChain"),", which represents the execution chain of ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),". For details, see the mechanism of ",(0,r.kt)("a",{parentName:"p",href:"http://shenyu.apache.org/docs/design/flow-control"},"Apache Shenyu Plugins"),". The third one is ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectorData")," type, and the fourth is ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleData")," type working as  the rule data."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"doExecute()")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"DividePlugin"),",  first verify the size of ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),", content length,  etc, then preparing for load balancing."),(0,r.kt)("p",null,"Following is a code fragment using",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"doExecute()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   // find the routing server node list\n   List<DivideUpstream> upstreamList = UpstreamCacheManager.getInstance().findUpstreamListBySelectorId(selector.getId());\n    ... \n    // the requested ip\n    String ip =   Objects.requireNonNull(exchange.getRequest().getRemoteAddress()).getAddress().getHostAddress();\n\n    //calling the Utility class and invoke the LoadBalance processing.\n    DivideUpstream divideUpstream = LoadBalanceUtils.selector(upstreamList, ruleHandle.getLoadBalance(), ip);\n")),(0,r.kt)("p",null," In the above code, the output of",(0,r.kt)("inlineCode",{parentName:"p"},"ruleHandle.getLoadBalance()")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," variable defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceEnum"),", that is ",(0,r.kt)("inlineCode",{parentName:"p"},"random"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hash"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"roundRobin"),", etc.  It is very convenient to use ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalanceUtils"),". When adding more  ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," implementing classes,  the interface in ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," module will not be affect at all."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"After reading through the code of ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalance")," module, from the design perspective, it is concluded that this module has the  following characteristics:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Extensibility: Interface oriented design and implemented on ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache Shenyu SPI")," mechanism, it can be easily extended to other dynamic load balancing algorithms (for example, least connection, fastest mode, etc), and supports cluster processing."),(0,r.kt)("li",{parentName:"ol"},"Scalability\uff1a Every load balancing implementation,  weighted Random, consistency  Hashing and weighted ",(0,r.kt)("inlineCode",{parentName:"li"},"RoundRobin")," can well support increase or decrease cluster overall capacity."),(0,r.kt)("li",{parentName:"ol"},"More detailed design such as ",(0,r.kt)("em",{parentName:"li"},"warm-up")," can bring better performance and obtain better overall stability.")))}h.isMDXComponent=!0},49890:function(e,t,n){t.Z=n.p+"assets/images/loadbalance-class-diagram-9bfc1b2f9cb359702481d7f739ae21f7.png"},34891:function(e,t,n){t.Z=n.p+"assets/images/methodWeightMap-90b4a77aedffd8cd88bc12b9551739ad.png"},25231:function(e,t,n){t.Z=n.p+"assets/images/weighted-roundrobin-demo-cec02fd422fb01ef73e882e0966a8cec.png"}}]);