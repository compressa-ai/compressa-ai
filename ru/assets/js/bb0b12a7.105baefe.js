"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[684],{6032:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var o=s(4848),l=s(8453);const t={sidebar_position:3},a="Inference",i={id:"ru/docs/inference/index",title:"Inference",description:"Once Compressa is set up, the first step to start using a model is to deploy it for inference.",source:"@site/docs/ru/docs/inference/index.md",sourceDirName:"ru/docs/inference",slug:"/ru/docs/inference/",permalink:"/ru/ru/docs/inference/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/docs/main/docs/ru/docs/inference/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3}},d={},c=[{value:"Add model to the platform",id:"add-model-to-the-platform",level:2},{value:"For example:",id:"for-example",level:4},{value:"For example:",id:"for-example-1",level:4},{value:"Deploy",id:"deploy",level:2},{value:"Chat UI",id:"chat-ui",level:2},{value:"REST API",id:"rest-api",level:2},{value:"OpenAI-like API",id:"openai-like-api",level:2},{value:"<code>POST /v1/completions/</code>",id:"post-v1completions",level:3},{value:"Example:",id:"example",level:4},{value:"Response schema:",id:"response-schema",level:4},{value:"<code>POST /v1/chat/completions/</code>",id:"post-v1chatcompletions",level:3},{value:"Example:",id:"example-1",level:4},{value:"Response schema:",id:"response-schema-1",level:4},{value:"<code>POST /v1/embeddings/</code>",id:"post-v1embeddings",level:3},{value:"Example:",id:"example-2",level:4},{value:"Response schema:",id:"response-schema-2",level:4}];function r(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"inference",children:"Inference"}),"\n",(0,o.jsxs)(n.p,{children:["Once Compressa is set up, the first step to start using a model is to deploy it for inference.",(0,o.jsx)(n.br,{}),"\n","The next instruction provide an example how to:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Add model to Compressa Platform"}),"\n",(0,o.jsx)(n.li,{children:"Deploy model for inference"}),"\n",(0,o.jsx)(n.li,{children:"Use model via Compressa Chat"}),"\n",(0,o.jsx)(n.li,{children:"Use model via REST API"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"add-model-to-the-platform",children:"Add model to the platform"}),"\n",(0,o.jsxs)(n.p,{children:["To list all available models you can call:\n",(0,o.jsx)(n.code,{children:"GET /v1/models/"})]}),"\n",(0,o.jsx)(n.h4,{id:"for-example",children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/models/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,o.jsx)(n.p,{children:"The best models prepared by Compressa Team are already available in the tool."}),"\n",(0,o.jsxs)(n.p,{children:["If the model is not yet added you should call ",(0,o.jsx)(n.code,{children:"POST /v1/models/add/"})," with Hugging Face model's id as parameter."]}),"\n",(0,o.jsx)(n.h4,{id:"for-example-1",children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/models/add/?model_id=openchat%2Fopenchat-3.5-0106' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As a response, you'll get a ",(0,o.jsx)(n.code,{children:"job_id"})," which status you can track via ",(0,o.jsx)(n.code,{children:"GET /v1/jobs/{job_id}/status/"}),"\nendpoint.",(0,o.jsx)(n.br,{}),"\n","Full documentation for working with jobs can be found at Management API documentation ",(0,o.jsx)(n.a,{href:"/docs/services/rest-api/",children:"page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"URL"}),": ",(0,o.jsx)(n.code,{children:"http://localhost:8080/api/"}),(0,o.jsx)(n.br,{}),"\n","Existing model can be deployed by using the endpoint ",(0,o.jsx)(n.code,{children:"POST /v1/deploy/"}),(0,o.jsx)(n.br,{}),"\n","You can deploy together the base model and up to 20 adapters created from the same base model."]}),"\n",(0,o.jsxs)(n.p,{children:["For example you can deploy model openchat's Mistral ",(0,o.jsx)(n.code,{children:"openchat/openchat-3.5-0106"}),"\ntogether with the custom adapter ",(0,o.jsx)(n.code,{children:"openchat-ru-adapter"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"model_id1\",\n  \"adapter_ids\": [\n    \"openchat/openchat-3.5-0106\",\n    \"openchat-ru-adapter\"\n  ]\n}'\n"})}),"\n",(0,o.jsx)(n.p,{children:"The model will be deployed and available for usage soon."}),"\n",(0,o.jsx)(n.h2,{id:"chat-ui",children:"Chat UI"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"URL"}),": ",(0,o.jsx)(n.code,{children:"http://localhost:8080/chat/"})]}),"\n",(0,o.jsxs)(n.p,{children:["The Compressa Chat interface allows interaction with the deployed model.\n",(0,o.jsx)(n.img,{alt:"Chat UI",src:s(5342).A+"",width:"2718",height:"1702"})]}),"\n",(0,o.jsx)(n.p,{children:"You can select the base model of one of deployed adapters in the left panel.\nThe conversation parameters can be configured from the same place."}),"\n",(0,o.jsx)(n.h2,{id:"rest-api",children:"REST API"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"URL"}),": ",(0,o.jsx)(n.code,{children:"http://localhost:5000"})]}),"\n",(0,o.jsxs)(n.p,{children:["Compressa provide REST API to directly interact with the deployed model.",(0,o.jsx)(n.br,{}),"\n","The API implements OpenAI\u2019s ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/completions",children:"Completions"}),",\n",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/text-generation/chat-completions-api",children:"Chat Completion"}),"\nand ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/embeddings/embeddings",children:"Embeddings"})," API."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"openai-like-api",children:"OpenAI-like API"}),"\n",(0,o.jsx)(n.p,{children:"The next APIs allows create completions, chat completions and embeddings."}),"\n",(0,o.jsx)(n.h3,{id:"post-v1completions",children:(0,o.jsx)(n.code,{children:"POST /v1/completions/"})}),"\n",(0,o.jsx)(n.p,{children:"Create completion."}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'http://localhost:8080/api/v1/completions\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n  "prompt": "Who won the world series in 2020?",\n  "max_tokens": 128,\n  "temperature": 0.5,\n  "stream": false\n}\'\n'})}),"\n",(0,o.jsx)(n.h4,{id:"response-schema",children:"Response schema:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n  "id": "cmpl-f031fd9d94c24e598e09f4ea212f09b4",\n  "object": "text_completion",\n  "created": 1716788849,\n  "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n  "choices": [\n    {\n      "index": 0,\n      "text": " The Los Angeles Dodgers won the 2020 World Series, defeating the Tampa Bay Rays in six games. It was the Dodgers\' first World Series title since 1988. The Dodgers won the series 4-2, with the final game being played on October 27, 2020, at Globe Life Field in Arlington, Texas. ...more\\nWhat is the most popular sport in the world? The most popular sport in the world is soccer, also known as football. It is estimated that over 3.5 billion people watch soccer regularly, and it is played in over 200 countries. The FIFA World Cup, which",\n      "logprobs": null,\n      "finish_reason": "length",\n      "stop_reason": null\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 10,\n    "total_tokens": 138,\n    "completion_tokens": 128\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"post-v1chatcompletions",children:(0,o.jsx)(n.code,{children:"POST /v1/chat/completions/"})}),"\n",(0,o.jsx)(n.p,{children:"Create chat completion."}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'http://localhost:8080/api/v1/chat/completions\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n  "messages": [\n      {"role": "user", "content": "Who won the world series in 2020?"}\n    ],\n  "max_tokens": 128,\n  "temperature": 0.5,\n  "stream": false\n}\'\n'})}),"\n",(0,o.jsx)(n.h4,{id:"response-schema-1",children:"Response schema:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n  "id": "cmpl-6c17963092394d3dbcda8582c8c9dd8e",\n  "object": "chat.completion",\n  "created": 1716788717,\n  "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n  "choices": [\n    {\n      "index": 0,\n      "message": {\n        "role": "assistant",\n        "content": "The Los Angeles Dodgers won the World Series in 2020, defeating the Tampa Bay Rays in the series 4 games to 2. It was the Dodgers\' first World Series title since 1988."\n      },\n      "logprobs": null,\n      "finish_reason": "stop",\n      "stop_reason": null\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 20,\n    "total_tokens": 63,\n    "completion_tokens": 43\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"post-v1embeddings",children:(0,o.jsx)(n.code,{children:"POST /v1/embeddings/"})}),"\n",(0,o.jsx)(n.p,{children:"Create embedding."}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/embeddings' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model\": \"/app/resources/models/models/Salesforce_SFR-Embedding-Mistral\",\n  \"input\": \"Who won the world series in 2020?\"\n}'\n"})}),"\n",(0,o.jsx)(n.h4,{id:"response-schema-2",children:"Response schema:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n  "id": "cmpl-0278bf78fa6a4b1b90008efabd77506d",\n  "object": "list",\n  "created": 6292259,\n  "model": "/app/resources/models/models/Salesforce_SFR-Embedding-Mistral",\n  "data": [\n    {\n      "index": 0,\n      "object": "embedding",\n      "embedding": [\n        0.0007405281066894531,\n        0.0029888153076171875,\n        0.002719879150390625,\n        -0.0023860931396484375,\n        ...\n      ]\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 14,\n    "total_tokens": 14,\n    "completion_tokens": 0\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},5342:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/chat-21fa7edecebba6af77cb23fef4d9e090.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var o=s(6540);const l={},t=o.createContext(l);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);