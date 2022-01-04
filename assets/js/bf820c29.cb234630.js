"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5180],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=u(n),h=r,d=l["".concat(c,".").concat(h)]||l[h]||p[h]||a;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},27837:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return l}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"How to vote Committer",sidebar_position:7,description:"How to vote Committer",author:"xiaoyu",categories:"Apache ShenYu",tags:["Vote-Committer"]},c=void 0,u={unversionedId:"vote-committer",id:"vote-committer",isDocsHomePage:!1,title:"How to vote Committer",description:"How to vote Committer",source:"@site/community/6-vote-committer.md",sourceDirName:".",slug:"/vote-committer",permalink:"/community/vote-committer",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/6-vote-committer.md",version:"current",lastUpdatedBy:"xiaoyu",lastUpdatedAt:1641288130,formattedLastUpdatedAt:"1/4/2022",sidebarPosition:7,frontMatter:{title:"How to vote Committer",sidebar_position:7,description:"How to vote Committer",author:"xiaoyu",categories:"Apache ShenYu",tags:["Vote-Committer"]},sidebar:"community",previous:{title:"Release Guide",permalink:"/community/release-guide"},next:{title:"Voting in a new PPMC member",permalink:"/community/vote-ppmc"}},m=[],p={toc:m};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Start the discussion and vote in ",(0,a.kt)("a",{parentName:"strong",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org"),", Only current PPMC member could nominate.")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Example\uff1a\n\nTo\uff1aprivate@shenyu.apache.org\n\nTitle\uff1a [VOTE] New committer:(nominee name not GitHub ID)\n\nContent\uff1a\n\nHi, everyone\n\nThis is ^a formal vote^ about inviting (nominee name not GitHub ID)as our new committer. \nHe/She really made an effort to improve ShenYu Parser and fix many issues. \nThe following links will direct you to his/her work.\n\nhttps://github.com/apache/incubator-shenyu/pull/1\nhttps://github.com/apache/incubator-shenyu/pull/2\nhttps://github.com/apache/incubator-shenyu/pull/3\nhttps://github.com/apache/incubator-shenyu/pull/4\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve \n\n[ ] +0 no opinion\n \n[ ] -1 disapprove with the reason\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Wait 72 hours to get vote result from community PPMC.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. PPMC sends vote result over email.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Example\uff1a\n\nTo: private@shenyu.apache.org\n\nTitle: [RESULT] [VOTE] New committer: (nominee name not GitHub ID)\n\nContent:\n\nHi all PPMCs, \n\nI am glad to receive your votes, and the voting result is [1],\n6   +1 votes, 0   +/-1 votes, 0   -1 votes\n\n[1]: https://lists.apache.org/thread.html/xxxxxxxxxxxxxxxxxxxxxxx\n\nTherefore, I will send the invitation to (nominee name not GitHub ID).\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. If the vote passes, send an offer to become a committer with @",(0,a.kt)("a",{parentName:"strong",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"To: (nominee email address)\n\ncc: private@shenyu.apache.org\n\nTitle Invitation to become apache shenyu committer: (nominee name not GitHub ID)\n\nContent:\n\nHello (nominee name not GitHub ID),\n\nThe Apache ShenYu Polling Project Management Committee (PPMC) hereby offers you committer privileges to the project. These privileges are offered on the understanding that you'll use them reasonably and with common sense. We like to work on trust\nrather than unnecessary constraints.\nBeing a committer enables you to more easily make changes without needing to go through the patch submission process.\nBeing a committer does not require you to participate any more than you already do. It does tend to make one even more committed.  You will probably find that you spend more time here.\nOf course, you can decline and instead remain as a contributor, participating as you do now.\nA. This personal invitation is a chance for you to accept or decline in private.  Either way, please let us know in reply to the private@shenyu.apache.org \naddress only.\nB. If you accept, the next step is to register an iCLA:\n    1. Details of the iCLA and the forms are found through this link: http://www.apache.org/licenses/#clas\n\n    2. Instructions for its completion and return to the Secretary of the ASF are found at http://www.apache.org/licenses/#submitting\n\n    3. When you transmit the completed iCLA, request to notify the Apache shenyu and choose a unique Apache id. Look to see if your preferred id is already taken at http://people.apache.org/committer-index.html        \nThis will allow the Secretary to notify the PMC when your iCLA has been recorded.\nWhen recording of your iCLA is noticed, you will receive a follow-up message with the next steps for establishing you as a committer.\n\nBest wishes,\n(PPMC)\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. Nominee replies the invitation, including content like accept the offer and give thanks.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6. PPMC replies the email.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hi (nominee name not GitHub ID),\n\nWelcome! Here are the next steps. After that we will make an announcement to the shenyu-dev list.\n\nYou need to send a Contributor License Agreement to the ASF. Normally you would send an Individual CLA. If you also make contributions done in work time or using work resources then see the Corporate CLA. Ask us if you have any issues. \nhttp://www.apache.org/licenses/#clas\n\nYou need to choose a preferred ASF user name and alternatives. In order to ensure it is available you can view a list of taken ids at\nhttp://people.apache.org/committer-index.html\nPlease notify us when you have submitted the CLA and by what means you did so. This will enable us to monitor its progress.\n\nWe will arrange for your Apache user account when the CLA has been recorded.\n\nAfter that is done, please make follow-up replies to the shenyu-dev list. We generally discuss everything there and keep the private@shenyu.apache.org list for occasional matters which must be private.\n\nThe developer section of the website describes the roles and provides other resources:\nhttp://www.apache.org/foundation/how-it-works.html\nhttp://www.apache.org/dev/\n\nThe incubator also has some useful information for new committers in incubating projects:\nhttp://incubator.apache.org/guides/committer.html\n\nJust as before you became a committer, participation in any ASF community requires adherence to the ASF Code of Conduct:\nhttps://www.apache.org/foundation/policies/conduct.html\n\nHere is the guideline for all of the Apache ShenYu committers:\nhttps://shenyu.apache.org/community/en/contribute/committer/\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"7. New committer signs iCLA, this step refers to ",(0,a.kt)("a",{parentName:"strong",href:"https://shenyu.apache.org/community/icla/"},"Sign ICLA Guide"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"8. New committer waits for secretary to create a new account.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9. PPMC adds new committer in ",(0,a.kt)("a",{parentName:"strong",href:"https://whimsy.apache.org/roster/ppmc/shenyu"},"roster"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"10. New committer could setup an account, refers to ",(0,a.kt)("a",{parentName:"strong",href:"https://gitbox.apache.org/setup/"},"apache setup"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"11. PPMC announces new committer in the community.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"To: dev@shenyu.apache.org\n\nTitle: [ANNOUNCE] New committer: (nominee name not GitHub ID)\n\nContent:\n\nHi community,\n\nThe Polling Project Management Committee (PPMC) for Apache shenyu\nhas invited (nominee name not GitHub ID) to become a committer and we are pleased to announce that he has accepted.\n\n(nominee name not GitHub ID) is active in Apache ShenYu community, hope see your further interactions with the community! \n\nThanks for your contributions.\n")))}l.isMDXComponent=!0}}]);