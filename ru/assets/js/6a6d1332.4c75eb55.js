"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[197],{8003:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=s(4848),o=s(8453);const r={sidebar_position:1,title:"REST API",sidebar_class_name:"docs_sidebar_index"},a=void 0,i={id:"docs/api-reference/rest",title:"REST API",description:"Embeddings",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docs/api-reference/rest.md",sourceDirName:"docs/api-reference",slug:"/docs/api-reference/rest",permalink:"/ru/docs/api-reference/rest",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/docs/api-reference/rest.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"REST API",sidebar_class_name:"docs_sidebar_index"},sidebar:"docsSidebar",previous:{title:"Langchain",permalink:"/ru/docs/api-reference/langchain"},next:{title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 OpenAI",permalink:"/ru/docs/api-reference/openai"}},c={},d=[{value:"Embeddings",id:"embeddings",level:2},{value:"Completions",id:"completions",level:2},{value:"Chat completions",id:"chat-completions",level:2},{value:"Rerank",id:"rerank",level:2}];function l(e){const n={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"embeddings",children:"Embeddings"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'https://compressa-api.mil-team.ru/v1/embeddings' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model\": \"/app/resources/models/models/Salesforce_SFR-Embedding-Mistral\",\n  \"input\": \"string\"\n}'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"completions",children:"Completions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'https://compressa-api.mil-team.ru/v1/completions' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model\": \"/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct\",\n  \"prompt\": \"Who won the world series in 2020?\"\n}'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"chat-completions",children:"Chat completions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'https://compressa-api.mil-team.ru/v1/chat/completions\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n    "messages": [\n            {"role": "user", "content": "Who won the world series in 2020?"}\n        ],\n    "max_tokens": 128,\n    "temperature": 0.5,\n    "stream": false\n}\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"rerank",children:"Rerank"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://compressa-api.mil-team.ru/v1/rerank" \\\n  -H "accept: application/json" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "mixedbread-ai/mxbai-rerank-large-v1",\n    "query": "Query?",\n    "documents": [\n      "document 1",\n      "document 2",\n      "document 3"\n    ],\n    "return_documents": false\n  }\'\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(6540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);