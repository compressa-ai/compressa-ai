"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[311],{5887:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(5893),t=n(1151);const i={sidebar_position:1},a="Quickstart: Mistral-7B inference",l={id:"ru/guides/mistral/index",title:"Quickstart: Mistral-7B inference",description:"This guide will show you how to deploy the Mistral-7B inference on a single A100-40GB GPU.",source:"@site/docs/ru/guides/mistral/index.md",sourceDirName:"ru/guides/mistral",slug:"/ru/guides/mistral/",permalink:"/ru/ru/guides/mistral/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/docs/main/docs/ru/guides/mistral/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},r={},c=[{value:"Deploy Compressa",id:"deploy-compressa",level:2},{value:"Download model",id:"download-model",level:2},{value:"Deploy model",id:"deploy-model",level:2},{value:"Model access",id:"model-access",level:2}];function d(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"quickstart-mistral-7b-inference",children:"Quickstart: Mistral-7B inference"}),"\n",(0,o.jsxs)(s.p,{children:["This guide will show you how to deploy the Mistral-7B inference on a single A100-40GB GPU.",(0,o.jsx)(s.br,{}),"\n","The A100-40GB GPU allows you to host the Mistral-7B without quantization."]}),"\n",(0,o.jsxs)(s.p,{children:["We recommend using ",(0,o.jsx)(s.a,{href:"https://huggingface.co/openchat/openchat-3.5-0106",children:"openchat/openchat-3.5-0106"})," version of the Mistral-7B.",(0,o.jsx)(s.br,{}),"\n","Experiments demonstrate that this model achieves the best quality across a wide range of tasks among models of this size."]}),"\n",(0,o.jsx)(s.h2,{id:"deploy-compressa",children:"Deploy Compressa"}),"\n",(0,o.jsxs)(s.p,{children:["The first step is to deploy compressa according to the ",(0,o.jsx)(s.a,{href:"/ru/docs/setup/",children:"instruction"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Assuming Compressa is deployed on port 8080,\nyou can use the manager's REST API at ",(0,o.jsx)(s.a,{href:"http://localhost:8080/api",children:"http://localhost:8080/api"})," to download and deploy the model."]}),"\n",(0,o.jsxs)(s.p,{children:["Full details about the manager API can be found in the ",(0,o.jsx)(s.a,{href:"/ru/docs/services/rest-api",children:"instruction"}),"\nor on the Swagger page at ",(0,o.jsx)(s.code,{children:"http://localhost:8080/api/docs"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"download-model",children:"Download model"}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["If you're deploying Compressa in private network without internet access that step can be skipped.\nPlease use the ",(0,o.jsx)(s.a,{href:"/ru/docs/setup/on-premise",children:"instruction"})," to download resources before deployment."]})}),"\n",(0,o.jsxs)(s.p,{children:["You can download the model using the following ",(0,o.jsx)(s.code,{children:"curl"})," command:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"curl -X 'POST' \\\n    'http://localhost:8080/api/v1/models/add/?model_id=openchat%2Fopenchat-3.5-0106' \\\n    -H 'accept: application/json' \\\n    -d ''\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Alternatively, download directly from the Swagger page by clicking ",(0,o.jsx)(s.strong,{children:"Try it out"}),":\n",(0,o.jsx)(s.img,{alt:"Add model",src:n(6892).Z+"",width:"2324",height:"1022"})]}),"\n",(0,o.jsxs)(s.p,{children:["The model will be downloaded within a few minutes.",(0,o.jsx)(s.br,{}),"\n","The process can be monitored from the console log or via the ",(0,o.jsx)(s.a,{href:"/docs/services/rest-api#get-v1models",children:"API"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"deploy-model",children:"Deploy model"}),"\n",(0,o.jsx)(s.p,{children:"You can also deploy the model using the following curl command:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"curl -X 'POST' \\\n    'http://localhost:8080/api/v1/deploy/' \\\n    -H 'accept: application/json' \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n        \"model_id\": \"openchat/openchat-3.5-0106\"\n    }'\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Or directly from the Swagger page:\n",(0,o.jsx)(s.img,{alt:"Deloy model",src:n(8313).Z+"",width:"2354",height:"1514"})]}),"\n",(0,o.jsx)(s.p,{children:"Deployment will take less than a minute."}),"\n",(0,o.jsx)(s.h2,{id:"model-access",children:"Model access"}),"\n",(0,o.jsxs)(s.p,{children:["Once the model is deployed, it will be accessible at ",(0,o.jsx)(s.code,{children:"http://localhost:8080/chat"}),":"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chat",src:n(5503).Z+"",width:"2880",height:"1690"})}),"\n",(0,o.jsxs)(s.p,{children:["and through the OpenAI compatible API at ",(0,o.jsx)(s.code,{children:"http://localhost:8080/openai-api"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"curl -X 'GET' \\\n    'http://localhost:8080/openai-api/v1/models'\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5503:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/chat-8f8e70880036b752e391b980093048b7.png"},6892:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/swagger-add-f34083339d3c7663d4a7599c5ee7915a.png"},8313:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/swagger-deploy-e5ce0aca812fa2a46efe0e3c105cc24f.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>a});var o=n(7294);const t={},i=o.createContext(t);function a(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);