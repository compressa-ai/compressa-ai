"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[109],{5905:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=o(4848),t=o(8453);const r={sidebar_position:3},a="Inference",i={id:"onprem/LLM_On-Premises/inference/index",title:"Inference",description:"Once Compressa is set up, the first step to start using a model is to deploy it for inference.",source:"@site/docs/onprem/LLM_On-Premises/inference/index.md",sourceDirName:"onprem/LLM_On-Premises/inference",slug:"/onprem/LLM_On-Premises/inference/",permalink:"/onprem/LLM_On-Premises/inference/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/onprem/LLM_On-Premises/inference/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"onpremSidebar",previous:{title:"Management API",permalink:"/onprem/LLM_On-Premises/services/rest-api"},next:{title:"Quickstart: Mistral-7B On-Premises",permalink:"/onprem/LLM_On-Premises/mistral/"}},l={},d=[{value:"Add model to the platform",id:"add-model-to-the-platform",level:2},{value:"For example:",id:"for-example",level:4},{value:"For example:",id:"for-example-1",level:4},{value:"Deploy",id:"deploy",level:2},{value:"Chat UI",id:"chat-ui",level:2},{value:"REST API",id:"rest-api",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"inference",children:"Inference"}),"\n",(0,s.jsxs)(n.p,{children:["Once Compressa is set up, the first step to start using a model is to deploy it for inference.",(0,s.jsx)(n.br,{}),"\n","The next instruction provide an example how to:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Add model to Compressa Platform"}),"\n",(0,s.jsx)(n.li,{children:"Deploy model for inference"}),"\n",(0,s.jsx)(n.li,{children:"Use model via Compressa Chat"}),"\n",(0,s.jsx)(n.li,{children:"Use model via REST API"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"add-model-to-the-platform",children:"Add model to the platform"}),"\n",(0,s.jsxs)(n.p,{children:["To list all available models you can call:\n",(0,s.jsx)(n.code,{children:"GET /v1/models/"})]}),"\n",(0,s.jsx)(n.h4,{id:"for-example",children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/models/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The best models prepared by Compressa Team are already available in the tool."}),"\n",(0,s.jsxs)(n.p,{children:["If the model is not yet added you should call ",(0,s.jsx)(n.code,{children:"POST /v1/models/add/"})," with Hugging Face model's id as parameter."]}),"\n",(0,s.jsx)(n.h4,{id:"for-example-1",children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/models/add/?model_id=openchat%2Fopenchat-3.5-0106' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As a response, you'll get a ",(0,s.jsx)(n.code,{children:"job_id"})," which status you can track via ",(0,s.jsx)(n.code,{children:"GET /v1/jobs/{job_id}/status/"}),"\nendpoint.",(0,s.jsx)(n.br,{}),"\n","Full documentation for working with jobs can be found at Management API documentation ",(0,s.jsx)(n.a,{href:"/onprem/LLM_On-Premises/services/rest-api/",children:"page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"URL"}),": ",(0,s.jsx)(n.code,{children:"http://localhost:8080/api/"}),(0,s.jsx)(n.br,{}),"\n","Existing model can be deployed by using the endpoint ",(0,s.jsx)(n.code,{children:"POST /v1/deploy/"}),(0,s.jsx)(n.br,{}),"\n","You can deploy together the base model and up to 20 adapters created from the same base model."]}),"\n",(0,s.jsxs)(n.p,{children:["For example you can deploy model openchat's Mistral ",(0,s.jsx)(n.code,{children:"openchat/openchat-3.5-0106"}),"\ntogether with the custom adapter ",(0,s.jsx)(n.code,{children:"openchat-ru-adapter"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"model_id1\",\n  \"adapter_ids\": [\n    \"openchat/openchat-3.5-0106\",\n    \"openchat-ru-adapter\"\n  ]\n}'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The model will be deployed and available for usage soon."}),"\n",(0,s.jsx)(n.h2,{id:"chat-ui",children:"Chat UI"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"URL"}),": ",(0,s.jsx)(n.code,{children:"http://localhost:8080/chat/"})]}),"\n",(0,s.jsxs)(n.p,{children:["The Compressa Chat interface allows interaction with the deployed model.\n",(0,s.jsx)(n.img,{alt:"Chat UI",src:o(2239).A+"",width:"2718",height:"1702"})]}),"\n",(0,s.jsx)(n.p,{children:"You can select the base model of one of deployed adapters in the left panel.\nThe conversation parameters can be configured from the same place."}),"\n",(0,s.jsx)(n.h2,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"URL"}),": ",(0,s.jsx)(n.code,{children:"http://localhost:5000"})]}),"\n",(0,s.jsxs)(n.p,{children:["Compressa provide REST API to directly interact with the deployed model.",(0,s.jsx)(n.br,{}),"\n","The API implements OpenAI\u2019s ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/completions",children:"Completions"}),"\nand ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/text-generation/chat-completions-api",children:"Chat Completion"})," API."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2239:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/chat-21fa7edecebba6af77cb23fef4d9e090.png"},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var s=o(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);