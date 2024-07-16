"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[372],{1087:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var a=s(4848),r=s(8453);const c={sidebar_position:3,title:"Langchain",sidebar_class_name:"docs_sidebar_index"},i=void 0,t={id:"docs/quickstart/langchain",title:"Langchain",description:"\u0421ompress\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u043c \u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d\u0435 langchain.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docs/quickstart/langchain.md",sourceDirName:"docs/quickstart",slug:"/docs/quickstart/langchain",permalink:"/ru/docs/quickstart/langchain",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/docs/quickstart/langchain.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Langchain",sidebar_class_name:"docs_sidebar_index"},sidebar:"docsSidebar",previous:{title:"On-Premises",permalink:"/ru/docs/quickstart/onprem"},next:{title:"API Reference",permalink:"/ru/docs/api-reference/"}},o={},d=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u0421ompress\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u043c \u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d\u0435 langchain."}),"\n",(0,a.jsx)(n.p,{children:"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install git+https://github.com/insight-stream/langchain_compressa.git\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from langchain_compressa import CompressaEmbeddings\nfrom langchain_compressa import ChatCompressa\nfrom langchain_compressa import CompressaRerank\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043a\u043b\u044e\u0447 COMPRESSA_API_KEY:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\nos.environ["COMPRESSA_API_KEY"] = "\u0432\u0430\u0448_\u043a\u043b\u044e\u0447_\u0442\u0443\u0442"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Compressa \u0432 \u0441\u0432\u043e\u0451\u043c \u043a\u043e\u0434\u0435 langchain"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from langchain_compressa import CompressaEmbeddings, ChatCompressa, CompressaRerank\n\ncompressa_embedding = CompressaEmbeddings()\nllm = ChatCompressa()\nreranker = CompressaRerank()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438 \u0431\u043e\u043b\u0435\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435 ",(0,a.jsx)(n.a,{href:"https://docs.compressa.ai/guides/langchain/",children:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442: langchain compressa"})]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var a=s(6540);const r={},c=a.createContext(r);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);