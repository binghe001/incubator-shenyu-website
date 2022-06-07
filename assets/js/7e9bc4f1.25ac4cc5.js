"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46814:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"contributor-guide",title:"Contributor Guide",sidebar_position:3,description:"Apache ShenYu Contributor's Guide",categories:"Apache ShenYu",tags:["Contributor"]},u=void 0,l={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"Contributor Guide",description:"Apache ShenYu Contributor's Guide",source:"@site/community/3-contributor.md",sourceDirName:".",slug:"/contributor-guide",permalink:"/community/contributor-guide",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/3-contributor.md",version:"current",lastUpdatedBy:"Zhang Yonglun",lastUpdatedAt:1654575806,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:3,frontMatter:{id:"contributor-guide",title:"Contributor Guide",sidebar_position:3,description:"Apache ShenYu Contributor's Guide",categories:"Apache ShenYu",tags:["Contributor"]},sidebar:"community",previous:{title:"Issue And Pull Request",permalink:"/community/issue-pr"},next:{title:"Committer",permalink:"/community/committer"}},c=[{value:"Kinds of Contributions",id:"kinds-of-contributions",children:[]},{value:"Join the Discussion",id:"join-the-discussion",children:[]},{value:"Target Repository",id:"target-repository",children:[]},{value:"Getting Apache ShenYu up and running",id:"getting-apache-shenyu-up-and-running",children:[]},{value:"Find tasks",id:"find-tasks",children:[]},{value:"Submit Pull Request for the first time",id:"submit-pull-request-for-the-first-time",children:[]},{value:"Subsequent Pull Request submission",id:"subsequent-pull-request-submission",children:[]},{value:"Wait for the code to be merged",id:"wait-for-the-code-to-be-merged",children:[]},{value:"After the code is merged",id:"after-the-code-is-merged",children:[]},{value:"How to become a Committer?",id:"how-to-become-a-committer",children:[]}],h={toc:c};function p(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We welcome every contributor to join us!"),(0,i.kt)("h3",{id:"kinds-of-contributions"},"Kinds of Contributions"),(0,i.kt)("p",null,"In the Apache ShenYu community, there are many ways to contribute:"),(0,i.kt)("p",null,"Code: Can help the community complete some tasks, write new features or fix some bugs;"),(0,i.kt)("p",null,"Test: Can come to participate in the writing of test code, including unit testing, integration testing, e2e testing;"),(0,i.kt)("p",null,"Docs: Can write or Documentation improved to help users better understand and use Apache ShenYu;"),(0,i.kt)("p",null,"Blog: You can write articles about Apache ShenYu to help the community better promote;"),(0,i.kt)("p",null,"Discussion: You can participate in the discussion of new features of Apache ShenYu and integrate your ideas with Apache ShenYu;"),(0,i.kt)("p",null,"Preach: Can help publicize or promote the Apache ShenYu community, speak in meetup or summit;"),(0,i.kt)("p",null,"Suggestion: You can also make some suggestions to the project or community to promote the healthy development of the community;"),(0,i.kt)("p",null,". . ."),(0,i.kt)("p",null,"Even minor corrections to typos, or corrections to 404 links, are very welcome :)"),(0,i.kt)("h3",{id:"join-the-discussion"},"Join the Discussion"),(0,i.kt)("p",null,"We believe: ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/theapacheway/index.html"},"Community Over Code"),"."),(0,i.kt)("p",null,"Participating in discussions is the first step in contributing, please subscribe to our mailing list first and participate in ongoing discussions on the mailing list!"),(0,i.kt)("p",null,"The steps to subscribe to emails are simple:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Send an email to ",(0,i.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@shenyu.apache.org"},"dev-subscribe@shenyu.apache.org"),";"),(0,i.kt)("li",{parentName:"ol"},"After sending successfully, you will receive a reply from ",(0,i.kt)("a",{parentName:"li",href:"mailto:dev-help@shenyu.apache.org"},"dev-help@shenyu.apache.org"),", please reply to this email according to the instructions of the email to confirm the subscription ;"),(0,i.kt)("li",{parentName:"ol"},"After replying to confirm, you will receive a welcome email indicating that you have successfully subscribed to the email.")),(0,i.kt)("p",null,"After the subscription is successful, you can participate in the discussion at ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@shenyu.apache.org"},"dev@shenyu.apache.org"),". You can also click on ",(0,i.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@shenyu.apache.org"},"Public Archives")," to see historical emails."),(0,i.kt)("p",null,"During the discussion, please be polite and suggest reading ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct.html"},"Code of Conduct")," of ASF."),(0,i.kt)("h3",{id:"target-repository"},"Target Repository"),(0,i.kt)("p",null,"Apache ShenYu is generally developed collaboratively on GitHub. Currently, there are the following repositories:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"REPOSITORY"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-shenyu"},"apache/incubator-shenyu")),(0,i.kt)("td",{parentName:"tr",align:null},"Main Repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-shenyu-dashboard"},"apache/incubator-shenyu-dashboard")),(0,i.kt)("td",{parentName:"tr",align:null},"Front-end Code of shenyu-admin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-shenyu-website"},"apache/incubator-shenyu-website")),(0,i.kt)("td",{parentName:"tr",align:null},"Official Website and Documents")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-shenyu-helm-chart"},"apache/incubator-shenyu-helm-chart")),(0,i.kt)("td",{parentName:"tr",align:null},"Helm Chart for Apache ShenYu")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-shenyu-nginx"},"apache/incubator-shenyu-nginx")),(0,i.kt)("td",{parentName:"tr",align:null},"Code to integrate with nginx")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-shenyu-client-python"},"apache/incubator-shenyu-client-python")),(0,i.kt)("td",{parentName:"tr",align:null},"Python SDK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-shenyu-client-dotnet"},"apache/incubator-shenyu-client-dotnet")),(0,i.kt)("td",{parentName:"tr",align:null},".Net SDK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-shenyu-client-golang"},"apache/incubator-shenyu-client-golang")),(0,i.kt)("td",{parentName:"tr",align:null},"Golang SDK")))),(0,i.kt)("h3",{id:"getting-apache-shenyu-up-and-running"},"Getting Apache ShenYu up and running"),(0,i.kt)("p",null,"To get Apache ShenYu code running on your development tools, see ",(0,i.kt)("a",{parentName:"p",href:"../docs/deployment/deployment-local"},"Local Deployment")," or ",(0,i.kt)("a",{parentName:"p",href:"../blog/Start-SourceCode-Analysis-Start-Demo"},"Apache ShenYu Startup Example"),", and able to debug with breakpoints."),(0,i.kt)("p",null,"After running, you can read the ",(0,i.kt)("a",{parentName:"p",href:"../blog"},"source code analysis article")," included in our official website to have a deeper understanding of Apache ShenYu."),(0,i.kt)("h3",{id:"find-tasks"},"Find tasks"),(0,i.kt)("p",null,"Find the issue you are interested in! On our GitHub repo and mailing list, we often publish some issues with the label ",(0,i.kt)("inlineCode",{parentName:"p"},"good first issue")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"status: volunteer wanted"),". These issues welcome the help of contributors. Among them, good first issues tend to have low thresholds and are suitable for novices. You can click the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22%2C%22status%3A+volunteer+wanted%22"},"link")," to check out these issues."),(0,i.kt)("p",null,"Of course, if you have a good idea, you can also propose it directly on the mailing list(",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@shenyu.apache.org"},"dev@shenyu.apache.org"),"), and after a thorough discussion, you can start to act."),(0,i.kt)("p",null,"At the same time, you can also participate in the writing of our ",(0,i.kt)("a",{parentName:"p",href:"../blog"},"blog")," and submit them to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu-website/tree/main/blog"},"the blog module")," of the Apache ShenYu official website through Pull Request."),(0,i.kt)("p",null,"If you are a student, you are also very welcome to apply for the topic of Apache ShenYu in open source internship activities such as GSoC. You can click the ",(0,i.kt)("a",{parentName:"p",href:"https://community.apache.org/gsoc.html"},"link")," to view the Apache Software Foundation Introduction to GSoC. You can also check Apache ShenYu's previous or ongoing GSoC issues through this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/issues?q=is%3Aopen+is%3Aissue+label%3Agsoc"},"link"),"!"),(0,i.kt)("h3",{id:"submit-pull-request-for-the-first-time"},"Submit Pull Request for the first time"),(0,i.kt)("p",null,"If you are submitting a Pr for the first time, first you need to Fork the target repository. (If it has been forked, then no fork is required)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"fork",src:n(90129).Z})),(0,i.kt)("p",null,"Then download the code locally ",(0,i.kt)("strong",{parentName:"p"},"with git command"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:${YOUR_USERNAME}/${TARGET_REPO}.git #Recommended\n# You can also git clone https://github.com/${YOUR_USERNAME}/${TARGET_REPO}.git\n")),(0,i.kt)("p",null,"After the download is complete, please refer to the getting started guide or README file of the target repository to initialize the project. In Windows environment, if the file name is too long when cloning the source code, please refer to ",(0,i.kt)("a",{parentName:"p",href:"../faq"},"FAQ"),"."),(0,i.kt)("p",null,"Then, you can refer to the following command to submit the code:"),(0,i.kt)("p",null,"Switch to a new branch for development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b a-dev-branch\n")),(0,i.kt)("p",null,"submit commit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git add <modified file/path> #add followed by the modified files or path\ngit commit -m 'necessary instructions'\n")),(0,i.kt)("p",null,"push to the remote repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin a-dev-branch\n")),(0,i.kt)("p",null,"Then you can initiate a new PR (Pull Request) on GitHub."),(0,i.kt)("p",null,"Please note that the title of the PR needs to conform to our ",(0,i.kt)("a",{parentName:"p",href:"../issue-pr"},"spec"),", and write the necessary description in the PR to facilitate code review by Committers and other contributors."),(0,i.kt)("h3",{id:"subsequent-pull-request-submission"},"Subsequent Pull Request submission"),(0,i.kt)("h4",{id:"update-master-branch-code"},"Update master branch code"),(0,i.kt)("p",null,"First, switch to the master branch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master #May also be the main branch\n")),(0,i.kt)("p",null,"Bind the upstream warehouse (you only need to bind it once), here is the main warehouse of shenyu as an example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/incubator-shenyu.git\n")),(0,i.kt)("p",null,"Pull remote code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git pull upstream master\n")),(0,i.kt)("h4",{id:"new-development-branch-for-developing"},"New development branch for developing"),(0,i.kt)("p",null,"Then create a new development branch for development, submission and push. The process is the same as submitting Pull Request for the first time."),(0,i.kt)("p",null,"In order to prevent the confusion of the master branch, it is recommended that the master branch be used to maintain synchronization with the upstream, and not develop and submit code on the master branch."),(0,i.kt)("h3",{id:"wait-for-the-code-to-be-merged"},"Wait for the code to be merged"),(0,i.kt)("p",null,"After submitting the PR, the Committer or the community's friends will review the code you submitted (Code Review), and will propose some modification suggestions or conduct some discussions. Please pay attention to your PR in time."),(0,i.kt)("p",null,"If subsequent changes are required, there is no need to initiate a new PR. After submitting a commit on the original branch and pushing it to the remote repository, the PR will be automatically updated."),(0,i.kt)("p",null,"In addition, our project has a relatively standardized and strict CI inspection process. After submitting PR, CI will be triggered. Please pay attention to whether it passes the CI inspection."),(0,i.kt)("p",null,"Finally, the Committers can merge the PR into the master branch."),(0,i.kt)("h3",{id:"after-the-code-is-merged"},"After the code is merged"),(0,i.kt)("p",null,"After the code has been merged, you can delete the development branch on both the local and remote repositories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -d a-dev-branch\ngit push origin --delete a-dev-branch\n")),(0,i.kt)("p",null,"On the master/main branch, you can do the following to sync the upstream repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/incubator-shenyu.git #Bind the remote warehouse, if it has been executed, it does not need to be executed again\ngit checkout master # or main\ngit pull upstream master\n")),(0,i.kt)("h3",{id:"how-to-become-a-committer"},"How to become a Committer?"),(0,i.kt)("p",null,"With the above steps, you are a contributor to Apache ShenYu. Repeat the previous steps to stay active in the community, keep at it and you can become a ",(0,i.kt)("a",{parentName:"p",href:"../committer"},"Committer"),"!"),(0,i.kt)("p",null,"In order to keep abreast of the development of Apache ShenYu, you can follow the mailing list, or you can participate in the biweekly meeting of the community (meeting invitation link will be sent on the mailing list)."))}p.isMDXComponent=!0},90129:function(e,t,n){t.Z=n.p+"assets/images/fork-d5bea44a59363214f1d720eb04e13512.png"}}]);