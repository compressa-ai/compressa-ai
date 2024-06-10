"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[834],{4567:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var d=s(5893),i=s(1151);const o={sidebar_position:2},t="Quickstart: InsightStream",r={id:"guides/insight-stream/index",title:"Quickstart: InsightStream",description:"This guide shows how to deploy InsightStream RAG chatbot together with Compressa for model inference.",source:"@site/docs/guides/insight-stream/index.md",sourceDirName:"guides/insight-stream",slug:"/guides/insight-stream/",permalink:"/guides/insight-stream/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/docs/main/docs/guides/insight-stream/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Quickstart: Mistral-7B inference",permalink:"/guides/mistral/"}},l={},a=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Setup storage",id:"setup-storage",level:2},{value:"Deploy Inference and Embedding Models",id:"deploy-inference-and-embedding-models",level:2},{value:"Add LLama3-8B model in Compressa:",id:"add-llama3-8b-model-in-compressa",level:4},{value:"Add embedding model in Compressa:",id:"add-embedding-model-in-compressa",level:4},{value:"Deploy LLama3-8B",id:"deploy-llama3-8b",level:4},{value:"Deploy embedding model",id:"deploy-embedding-model",level:4},{value:"CLI",id:"cli",level:2},{value:"Install",id:"install",level:3},{value:"Setup",id:"setup-1",level:3},{value:"Usage",id:"usage",level:2},{value:"Add Documents in Index",id:"add-documents-in-index",level:3},{value:"Ask InsightStream bot",id:"ask-insightstream-bot",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Ask a question to the bot:",id:"ask-a-question-to-the-bot",level:4},{value:"Download a file from the server:",id:"download-a-file-from-the-server",level:4},{value:"Upload a new document to the server:",id:"upload-a-new-document-to-the-server",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"quickstart-insightstream",children:"Quickstart: InsightStream"}),"\n",(0,d.jsx)(n.p,{children:"This guide shows how to deploy InsightStream RAG chatbot together with Compressa for model inference."}),"\n",(0,d.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,d.jsxs)(n.p,{children:["Deploying InsightStream with Compressa requires a server with 2 GPUs.",(0,d.jsx)(n.br,{}),"\n","The requirements for GPU versions and server setup can be found on this ",(0,d.jsx)(n.a,{href:"https://docs.compressa.ai/docs/setup/#requirements",children:"page"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,d.jsx)(n.p,{children:"First, clone the repository with the configuration:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"git clone -b insight-stream git@github.com:compressa-ai/compressa-deploy.git\ncd compressa-deploy\n"})}),"\n",(0,d.jsx)(n.p,{children:"The repository contains two main files that we\u2019ll configure:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:".env"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"docker-compose.yml"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Set up the IDs for GPUs in the ",(0,d.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"DOCKER_GPU_IDS_CHAT=<ID1>\nDOCKER_GPU_IDS_EMB=<ID2>\n"})}),"\n",(0,d.jsx)(n.p,{children:"With the default configuration, the services use the following ports:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"qdrant"})," - 6333"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"compressa"})," - 5500"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"insight-stream-bot"})," - 80"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["If you need to modify these, update the port mappings in ",(0,d.jsx)(n.code,{children:"docker-compose.yml"})," for containers ",(0,d.jsx)(n.code,{children:"qdrant"}),", ",(0,d.jsx)(n.code,{children:"openai-api"}),", ",(0,d.jsx)(n.code,{children:"nginx"})," accordingly."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"SERVER_NAME"})," variable should be set to the URL on which the InsightStream bot will be used.\n",(0,d.jsxs)(n.em,{children:["For example ",(0,d.jsx)(n.code,{children:"localhost:80"})," if you are running the solution locally or forwarding port 80 of the server to port 80 of localhost."]})]}),"\n",(0,d.jsx)(n.h2,{id:"setup-storage",children:"Setup storage"}),"\n",(0,d.jsx)(n.p,{children:"By default, the containers use the following storage paths:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"qdrant"})," - ",(0,d.jsx)(n.code,{children:"./data/qdrant"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"compressa"})," - ",(0,d.jsx)(n.code,{children:"./data/compressa"}),(0,d.jsx)(n.br,{}),"\n","This directory should have 777 permissions, which can be set via:","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"chmod 777 -R ./data/compressa\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["document's storage - ",(0,d.jsx)(n.code,{children:"./data/documents"}),(0,d.jsx)(n.br,{}),"\n","This directory should have 755 permissions for the user ",(0,d.jsx)(n.code,{children:"systemd-network"})," and the group ",(0,d.jsx)(n.code,{children:"systemd-journal"}),", which can be set via:","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"sudo chown systemd-network:systemd-journal ./data/documents && sudo chmod 755 ./data/documents\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["You can change the storage paths in ",(0,d.jsx)(n.code,{children:"docker-compose.yml"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Then, you can run the solution with:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"docker compose up --build\n"})}),"\n",(0,d.jsx)(n.h2,{id:"deploy-inference-and-embedding-models",children:"Deploy Inference and Embedding Models"}),"\n",(0,d.jsxs)(n.p,{children:["When the services are running, we need to deploy LLM models to Compressa.\nThe solution uses the LLama3-8B model for chat and the SFR-Embedding-Mistral model for embeddings.",(0,d.jsx)(n.br,{}),"\n","Models can be deployed using the ",(0,d.jsx)(n.a,{href:"/docs/services/rest-api/",children:"REST API"})," or using Swagger's UI."]}),"\n",(0,d.jsx)(n.p,{children:"The REST APIs are available at:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"SERVER_NAME:5500/api/chat/"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"SERVER_NAME:5500/api/embeddings/"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Swagger\u2019s UI is available at:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"SERVER_NAME:5500/api/chat/docs"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"SERVER_NAME:5500/api/embeddings/docs"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Here are the commands to deploy models using ",(0,d.jsx)(n.code,{children:"curl"}),":"]}),"\n",(0,d.jsx)(n.h4,{id:"add-llama3-8b-model-in-compressa",children:"Add LLama3-8B model in Compressa:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"curl -X 'POST' \\\n  'http://localhost:5500/api/chat/v1/models/add/?model_id=compressa-ai%2FLlama-3-8B-Instruct' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,d.jsx)(n.h4,{id:"add-embedding-model-in-compressa",children:"Add embedding model in Compressa:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"curl -X 'POST' \\\n  'http://localhost:5500/api/embeddings/v1/models/add/?model_id=Salesforce%2FSFR-Embedding-Mistral' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,d.jsx)(n.p,{children:"When downloading is finished, we can deploy the models:"}),"\n",(0,d.jsx)(n.h4,{id:"deploy-llama3-8b",children:"Deploy LLama3-8B"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"curl -X 'POST' \\\n  'http://localhost:5500/api/chat/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"compressa-ai/Llama-3-8B-Instruct\",\n  \"dtype\": \"float16\"\n}'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"deploy-embedding-model",children:"Deploy embedding model"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"curl -X 'POST' \\\n  'http://localhost:5500/api/embeddings/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"Salesforce/SFR-Embedding-Mistral\",\n  \"dtype\": \"float16\"\n}'\n"})}),"\n",(0,d.jsx)(n.p,{children:"When the models are deployed, the server is ready to use!"}),"\n",(0,d.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,d.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,d.jsxs)(n.p,{children:["The CLI tool is used to add new documents into RAG.\nThe CLI can be installed from the same repository (",(0,d.jsx)(n.code,{children:"python3.10+"})," required):"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"cd compressa-deploy/cli\npip install -r requirements.txt\n"})}),"\n",(0,d.jsx)(n.h3,{id:"setup-1",children:"Setup"}),"\n",(0,d.jsxs)(n.p,{children:["The CLI tool has to have access to the deployed chatbot, models, and qdrant.",(0,d.jsx)(n.br,{}),"\n","Please set the URL to them in the ",(0,d.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"SERVER_NAME=<SERVER_NAME> # in case of port 80\nQDRANT_URL=<SERVER_NAME>:6333\nOPENAI_BASE=<SERVER_NAME>:5500/v1 # Compressa \nQDRANT_KEY=your_secret_api_key_here\n"})}),"\n",(0,d.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(n.h3,{id:"add-documents-in-index",children:"Add Documents in Index"}),"\n",(0,d.jsx)(n.p,{children:"When all environment variables are set, documents can be added to the system using one of the following commands:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"python3 create_bot.py <BOT_ID> /path/to/document.pdf  \npython3 create_bot.py <BOT_ID> /path/to/folder\n"})}),"\n",(0,d.jsxs)(n.p,{children:["The InsightStream bot supports ",(0,d.jsx)(n.code,{children:".docx"})," and ",(0,d.jsx)(n.code,{children:".pdf"})," documents."]}),"\n",(0,d.jsxs)(n.p,{children:["When documents are uploaded, the bot is available at ",(0,d.jsx)(n.code,{children:"<SERVER_NAME>/agent/<bot_id>"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"ask-insightstream-bot",children:"Ask InsightStream bot"}),"\n",(0,d.jsxs)(n.p,{children:["You can open the InsightStream bot at ",(0,d.jsx)(n.code,{children:"<SERVER_NAME>/agent/<bot_id>"})," and ask a question in the Chat UI:\n",(0,d.jsx)(n.img,{alt:"Chat UI",src:s(9411).Z+"",width:"2402",height:"1820"})]}),"\n",(0,d.jsx)(n.p,{children:"The bot can also be used via REST API."}),"\n",(0,d.jsx)(n.h3,{id:"rest-api",children:"REST API"}),"\n",(0,d.jsx)(n.h4,{id:"ask-a-question-to-the-bot",children:"Ask a question to the bot:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "question": "<your_question_here>"\n  }\' \\\n  "<SERVER_NAME>/v.1.0/<bot_id>"\n'})}),"\n",(0,d.jsx)(n.h4,{id:"download-a-file-from-the-server",children:"Download a file from the server:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"curl <SERVER_NAME>/documents/<filename> > <filename> \n"})}),"\n",(0,d.jsx)(n.h4,{id:"upload-a-new-document-to-the-server",children:"Upload a new document to the server:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"curl -X PUT -T /path/to/file <SERVER_NAME>/documents/<filename> \n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},9411:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/insight-stream-bd48ccdd03b5a09ce6e440b9ca5bfd28.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var d=s(7294);const i={},o=d.createContext(i);function t(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);