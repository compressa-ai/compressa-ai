"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98],{1379:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var a=s(5893),l=s(1151);const d={sidebar_position:2},i="Management API",t={id:"docs/services/rest-api",title:"Management API",description:"The Management API is a REST API that allows control over all features.",source:"@site/docs/docs/services/rest-api.md",sourceDirName:"docs/services",slug:"/docs/services/rest-api",permalink:"/ru/docs/services/rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/docs/main/docs/docs/services/rest-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Services",permalink:"/ru/docs/services/"},next:{title:"Inference",permalink:"/ru/docs/inference/"}},o={},c=[{value:"Models",id:"models",level:2},{value:"<code>GET /v1/models/</code>",id:"get-v1models",level:3},{value:"Example:",id:"example",level:4},{value:"Response schema:",id:"response-schema",level:4},{value:"<code>POST /v1/models/add/</code>",id:"post-v1modelsadd",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Example:",id:"example-1",level:4},{value:"Response schema:",id:"response-schema-1",level:4},{value:"Deploy",id:"deploy",level:2},{value:"<code>GET /v1/deploy/</code>",id:"get-v1deploy",level:3},{value:"Example:",id:"example-2",level:4},{value:"Response schema:",id:"response-schema-2",level:4},{value:"<code>POST /v1/deploy/</code>",id:"post-v1deploy",level:3},{value:"Request body:",id:"request-body",level:4},{value:"Example:",id:"example-3",level:4},{value:"Response schema:",id:"response-schema-3",level:4},{value:"<code>GET /v1/deploy/status</code>",id:"get-v1deploystatus",level:3},{value:"Example:",id:"example-4",level:4},{value:"Response schema:",id:"response-schema-4",level:4},{value:"<code>POST /v1/deploy/interrupt/</code>",id:"post-v1deployinterrupt",level:3},{value:"Example:",id:"example-5",level:4},{value:"Response schema:",id:"response-schema-5",level:4},{value:"Jobs",id:"jobs",level:2},{value:"<code>GET /v1/jobs/</code>",id:"get-v1jobs",level:3},{value:"Example:",id:"example-6",level:4},{value:"Response schema:",id:"response-schema-6",level:4},{value:"<code>GET /v1/jobs/{job_id}/status/</code>",id:"get-v1jobsjob_idstatus",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Example:",id:"example-7",level:4},{value:"Response schema:",id:"response-schema-7",level:4},{value:"<code>POST /v1/jobs/{job_id}/interrupt/</code>",id:"post-v1jobsjob_idinterrupt",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Example:",id:"example-8",level:4},{value:"Response schema:",id:"response-schema-8",level:4},{value:"Datasets",id:"datasets",level:2},{value:"<code>GET /v1/datasets/</code>",id:"get-v1datasets",level:3},{value:"Example:",id:"example-9",level:4},{value:"Response schema:",id:"response-schema-9",level:4},{value:"<code>POST /v1/datasets/upload/</code>",id:"post-v1datasetsupload",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Request body:",id:"request-body-1",level:4},{value:"Example:",id:"example-10",level:4},{value:"Response schema:",id:"response-schema-10",level:4},{value:"<code>GET /v1/datasets/{dataset_id}/</code>",id:"get-v1datasetsdataset_id",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Example:",id:"example-11",level:4},{value:"Response schema:",id:"response-schema-11",level:4},{value:"Finetuning",id:"finetuning",level:2},{value:"<code>GET /v1/finetune/models/</code>",id:"get-v1finetunemodels",level:3},{value:"Example:",id:"example-12",level:4},{value:"Response schema:",id:"response-schema-12",level:4},{value:"<code>POST /v1/finetune/</code>",id:"post-v1finetune",level:3},{value:"Request body:",id:"request-body-2",level:4},{value:"Example:",id:"example-13",level:4},{value:"Response schema:",id:"response-schema-13",level:4},{value:"<code>GET /v1/finetune/status</code>",id:"get-v1finetunestatus",level:3},{value:"Example:",id:"example-14",level:4},{value:"Response schema:",id:"response-schema-14",level:4},{value:"<code>POST /v1/finetune/interrupt/</code>",id:"post-v1finetuneinterrupt",level:3},{value:"Example:",id:"example-15",level:4},{value:"Response schema:",id:"response-schema-15",level:4},{value:"OpenAI-like API",id:"openai-like-api",level:2},{value:"<code>POST /v1/completions/</code>",id:"post-v1completions",level:3},{value:"Example:",id:"example-16",level:4},{value:"Response schema:",id:"response-schema-16",level:4},{value:"<code>POST /v1/chat/completions/</code>",id:"post-v1chatcompletions",level:3},{value:"Example:",id:"example-17",level:4},{value:"Response schema:",id:"response-schema-17",level:4},{value:"<code>POST /v1/embeddings/</code>",id:"post-v1embeddings",level:3},{value:"Example:",id:"example-18",level:4},{value:"Response schema:",id:"response-schema-18",level:4}];function r(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"management-api",children:"Management API"}),"\n",(0,a.jsxs)(n.p,{children:["The Management API is a ",(0,a.jsx)(n.strong,{children:"REST API"})," that allows control over all features.\nInteractive Swagger documentation is available at:",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"URL"}),": ",(0,a.jsx)(n.code,{children:"http://localhost:8080/api/docs/"})]}),"\n",(0,a.jsx)(n.h2,{id:"models",children:"Models"}),"\n",(0,a.jsx)(n.p,{children:"APIs to work with currently available models."}),"\n",(0,a.jsx)(n.h3,{id:"get-v1models",children:(0,a.jsx)(n.code,{children:"GET /v1/models/"})}),"\n",(0,a.jsx)(n.p,{children:"List models available for deploy and finetune."}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/models/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[\n  {\n    "model_id": "string",\n    "adapter": true,\n    "base_model_id": "string"\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1modelsadd",children:(0,a.jsx)(n.code,{children:"POST /v1/models/add/"})}),"\n",(0,a.jsx)(n.p,{children:"Download a model from Hugging Face"}),"\n",(0,a.jsx)(n.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"query"}),": ",(0,a.jsx)(n.code,{children:"model_id"})," - model's id on Hugging Face,\nfor example ",(0,a.jsx)(n.code,{children:"openchat/openchat-3.5-0106"})," fror ",(0,a.jsx)(n.a,{href:"https://huggingface.co/openchat/openchat-3.5-0106",children:"link"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/models/add/?model_id=mymodel_id' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-1",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n  "name": "DOWNLOAD_mymodel_id",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T09:58:29.846708"\n}\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,a.jsx)(n.p,{children:"APIs to deploy and undeploy model."}),"\n",(0,a.jsx)(n.h3,{id:"get-v1deploy",children:(0,a.jsx)(n.code,{children:"GET /v1/deploy/"})}),"\n",(0,a.jsx)(n.p,{children:"Get currently deployed model"}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/deploy/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-2",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "model_id": "string",\n  "adapter_ids": [\n    "string"\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1deploy",children:(0,a.jsx)(n.code,{children:"POST /v1/deploy/"})}),"\n",(0,a.jsxs)(n.p,{children:["Deploy model and adapters for inference.\nList of ids for request can be obtained from ",(0,a.jsx)(n.code,{children:"GET /v1/models/"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"request-body",children:"Request body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "model_id": "string",\n  "adapter_ids": [\n    "string"\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"model_id"})," - model's id"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adapter_ids"})," - list of adapter ids"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"model_id1\",\n  \"adapter_ids\": [\n    \"adapter_id1\",\n    \"adapter_id2\"\n  ]\n}'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-3",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "name": "string",\n  "status": "CREATED",\n  "started_at": "2024-03-21T10:10:07.521Z"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"get-v1deploystatus",children:(0,a.jsx)(n.code,{children:"GET /v1/deploy/status"})}),"\n",(0,a.jsx)(n.p,{children:"Get status of deployed model."}),"\n",(0,a.jsx)(n.h4,{id:"example-4",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/deploy/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-4",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "model_id": "model_id1",\n  "adapter_ids": [\n    "adapter_id1",\n    "adapter_id2"\n  ],\n  "job": {\n    "id": "8a63349c-078f-4e98-8968-4f011593329c",\n    "name": "DEPLOY_model_id1_adapters_id1_id2",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T07:35:16.861681"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1deployinterrupt",children:(0,a.jsx)(n.code,{children:"POST /v1/deploy/interrupt/"})}),"\n",(0,a.jsx)(n.p,{children:"Undeploy currently deployed model."}),"\n",(0,a.jsx)(n.h4,{id:"example-5",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/deploy/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-5",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "8a63349c-078f-4e98-8968-4f011593329c",\n  "name": "DEPLOY_model_id1_adapters_id1_id2",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T07:35:16.861681"\n}\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"jobs",children:"Jobs"}),"\n",(0,a.jsx)(n.p,{children:"Operations like adding model or deploy are associated with the job.\nThe next APIs allows to control job execution."}),"\n",(0,a.jsx)(n.h3,{id:"get-v1jobs",children:(0,a.jsx)(n.code,{children:"GET /v1/jobs/"})}),"\n",(0,a.jsx)(n.p,{children:"Get all jobs with statuses."}),"\n",(0,a.jsx)(n.h4,{id:"example-6",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/jobs/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-6",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[\n  {\n    "id": "8a63349c-078f-4e98-8968-4f011593329c",\n    "name": "DEPLOY_model_id1_adapters_id1_id2",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T07:35:16.861681"\n  },\n  {\n    "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n    "name": "DOWNLOAD_test",\n    "status": "FINISHED",\n    "started_at": "2024-03-21T09:58:29.846708"\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"get-v1jobsjob_idstatus",children:(0,a.jsx)(n.code,{children:"GET /v1/jobs/{job_id}/status/"})}),"\n",(0,a.jsxs)(n.p,{children:["Get last status for the job with ",(0,a.jsx)(n.code,{children:"job_id"})]}),"\n",(0,a.jsx)(n.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"path"}),": ",(0,a.jsx)(n.code,{children:"job_id"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-7",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/jobs/4d78d943-1896-4d7b-9f11-b10cc2389ba3/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-7",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n  "name": "DOWNLOAD_test",\n  "status": "FINISHED",\n  "started_at": "2024-03-21T09:58:29.846708"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1jobsjob_idinterrupt",children:(0,a.jsx)(n.code,{children:"POST /v1/jobs/{job_id}/interrupt/"})}),"\n",(0,a.jsxs)(n.p,{children:["Interrupt the job with ",(0,a.jsx)(n.code,{children:"job_id"})]}),"\n",(0,a.jsx)(n.h4,{id:"parameters-2",children:"Parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"path"}),": ",(0,a.jsx)(n.code,{children:"job_id"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-8",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/jobs/8a63349c-078f-4e98-8968-4f011593329c/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-8",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "8a63349c-078f-4e98-8968-4f011593329c",\n  "name": "DEPLOY_model_id1_adapters_id1_id2",\n  "status": "KILLED",\n  "started_at": "2024-03-21T07:35:16.861681"\n}\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"datasets",children:"Datasets"}),"\n",(0,a.jsx)(n.p,{children:"The next APIs allows to control download and upload datasets for training."}),"\n",(0,a.jsx)(n.h3,{id:"get-v1datasets",children:(0,a.jsx)(n.code,{children:"GET /v1/datasets/"})}),"\n",(0,a.jsx)(n.p,{children:"List all available datasets."}),"\n",(0,a.jsx)(n.h4,{id:"example-9",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/datasets/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-9",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[\n  {\n    "id": "01be6d68-f790-434b-aa6d-5bd492aef202",\n    "name": "train.jsonl",\n    "s3_path": "01be6d68-f790-434b-aa6d-5bd492aef202/metadata.json",\n    "description": null\n  },\n  {\n    "id": "077adb68-2b0e-481b-bd13-e8807adf625f",\n    "name": "train.jsonl",\n    "s3_path": "077adb68-2b0e-481b-bd13-e8807adf625f/metadata.json",\n    "description": "My dataset 2"\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1datasetsupload",children:(0,a.jsx)(n.code,{children:"POST /v1/datasets/upload/"})}),"\n",(0,a.jsxs)(n.p,{children:["Upload new dataset file.",(0,a.jsx)(n.br,{}),"\n","File should be a conversation in ",(0,a.jsx)(n.code,{children:"jsonl"})," format."]}),"\n",(0,a.jsx)(n.h4,{id:"parameters-3",children:"Parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"query"}),": ",(0,a.jsx)(n.code,{children:"description"})," - dataset description"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"request-body-1",children:"Request body:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"multipart/form-data"}),": ",(0,a.jsx)(n.code,{children:"file"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-10",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/datasets/upload/?description=My%20Description' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'file=@train.jsonl'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-10",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "string",\n  "name": "string",\n  "s3_path": "string",\n  "description": "string"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"get-v1datasetsdataset_id",children:(0,a.jsx)(n.code,{children:"GET /v1/datasets/{dataset_id}/"})}),"\n",(0,a.jsxs)(n.p,{children:["Download dataset with ",(0,a.jsx)(n.code,{children:"dataset_id"})]}),"\n",(0,a.jsx)(n.h4,{id:"parameters-4",children:"Parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"path"}),": ",(0,a.jsx)(n.code,{children:"dataset_id"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-11",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/datasets/01be6d68-f790-434b-aa6d-5bd492aef202/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-11",children:"Response schema:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"file"})}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"finetuning",children:"Finetuning"}),"\n",(0,a.jsx)(n.p,{children:"The next APIs allows to finetune models."}),"\n",(0,a.jsx)(n.h3,{id:"get-v1finetunemodels",children:(0,a.jsx)(n.code,{children:"GET /v1/finetune/models/"})}),"\n",(0,a.jsx)(n.p,{children:"List all models available for finetuning."}),"\n",(0,a.jsx)(n.h4,{id:"example-12",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/finetune/models/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-12",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[\n  {\n    "model_id": "TheBloke/mixtral-8x7b-v0.1-AWQ",\n    "adapter": false,\n    "base_model_id": null\n  },\n  {\n    "model_id": "NeuralNovel/Mistral-7B-Instruct-v0.2-Neural-Story",\n    "adapter": false,\n    "base_model_id": null\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1finetune",children:(0,a.jsx)(n.code,{children:"POST /v1/finetune/"})}),"\n",(0,a.jsx)(n.p,{children:"Finetune adapter on dataset."}),"\n",(0,a.jsx)(n.h4,{id:"request-body-2",children:"Request body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "name": "string",\n  "model_id": "string",\n  "dataset_id": "string"\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"})," - name of training"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"model_id"})," - id of model to train"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dataset_id"})," - id of dataset to train on"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-13",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'http://localhost:8080/api/v1/finetune/\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "name": "My Adapter Training",\n  "model_id": "NousResearch/Llama-2-7b-chat-hf",\n  "dataset_id": "01be6d68-f790-434b-aa6d-5bd492aef202"\n}\'\n'})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-13",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "74280be7-4723-475d-89ae-346e9017990e",\n  "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n  "status": "CREATED",\n  "started_at": "2024-03-21T10:40:40.928442"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"get-v1finetunestatus",children:(0,a.jsx)(n.code,{children:"GET /v1/finetune/status"})}),"\n",(0,a.jsx)(n.p,{children:"Get status of current finetuning."}),"\n",(0,a.jsx)(n.h4,{id:"example-14",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/finetune/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-14",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "46c155b4-17fe-4226-9412-a77edfadc7e7",\n  "name": "My Adapter Training",\n  "model_id": "NousResearch/Llama-2-7b-chat-hf",\n  "dataset_id": "01be6d68-f790-434b-aa6d-5bd492aef202",\n  "job": {\n    "id": "74280be7-4723-475d-89ae-346e9017990e",\n    "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T10:40:40.928442"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1finetuneinterrupt",children:(0,a.jsx)(n.code,{children:"POST /v1/finetune/interrupt/"})}),"\n",(0,a.jsx)(n.p,{children:"Interrupt current finetuning."}),"\n",(0,a.jsx)(n.h4,{id:"example-15",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/finetune/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-15",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "74280be7-4723-475d-89ae-346e9017990e",\n  "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T10:40:40.928442"\n}\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"openai-like-api",children:"OpenAI-like API"}),"\n",(0,a.jsx)(n.p,{children:"The next APIs allows create completions, chat completions and embeddings."}),"\n",(0,a.jsx)(n.h3,{id:"post-v1completions",children:(0,a.jsx)(n.code,{children:"POST /v1/completions/"})}),"\n",(0,a.jsx)(n.p,{children:"Create completion."}),"\n",(0,a.jsx)(n.h4,{id:"example-16",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'http://localhost:8080/api/v1/completions\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n  "prompt": "Who won the world series in 2020?",\n  "max_tokens": 128,\n  "temperature": 0.5,\n  "stream": false\n}\'\n'})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-16",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "cmpl-f031fd9d94c24e598e09f4ea212f09b4",\n  "object": "text_completion",\n  "created": 1716788849,\n  "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n  "choices": [\n    {\n      "index": 0,\n      "text": " The Los Angeles Dodgers won the 2020 World Series, defeating the Tampa Bay Rays in six games. It was the Dodgers\' first World Series title since 1988. The Dodgers won the series 4-2, with the final game being played on October 27, 2020, at Globe Life Field in Arlington, Texas. ...more\\nWhat is the most popular sport in the world? The most popular sport in the world is soccer, also known as football. It is estimated that over 3.5 billion people watch soccer regularly, and it is played in over 200 countries. The FIFA World Cup, which",\n      "logprobs": null,\n      "finish_reason": "length",\n      "stop_reason": null\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 10,\n    "total_tokens": 138,\n    "completion_tokens": 128\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1chatcompletions",children:(0,a.jsx)(n.code,{children:"POST /v1/chat/completions/"})}),"\n",(0,a.jsx)(n.p,{children:"Create chat completion."}),"\n",(0,a.jsx)(n.h4,{id:"example-17",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'http://localhost:8080/api/v1/chat/completions\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n  "messages": [\n      {"role": "user", "content": "Who won the world series in 2020?"}\n    ],\n  "max_tokens": 128,\n  "temperature": 0.5,\n  "stream": false\n}\'\n'})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-17",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "cmpl-6c17963092394d3dbcda8582c8c9dd8e",\n  "object": "chat.completion",\n  "created": 1716788717,\n  "model": "/app/resources/models/models/compressa-ai_Llama-3-8B-Instruct",\n  "choices": [\n    {\n      "index": 0,\n      "message": {\n        "role": "assistant",\n        "content": "The Los Angeles Dodgers won the World Series in 2020, defeating the Tampa Bay Rays in the series 4 games to 2. It was the Dodgers\' first World Series title since 1988."\n      },\n      "logprobs": null,\n      "finish_reason": "stop",\n      "stop_reason": null\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 20,\n    "total_tokens": 63,\n    "completion_tokens": 43\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"post-v1embeddings",children:(0,a.jsx)(n.code,{children:"POST /v1/embeddings/"})}),"\n",(0,a.jsx)(n.p,{children:"Create embedding."}),"\n",(0,a.jsx)(n.h4,{id:"example-18",children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/embeddings' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model\": \"/app/resources/models/models/Salesforce_SFR-Embedding-Mistral\",\n  \"input\": \"Who won the world series in 2020?\"\n}'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"response-schema-18",children:"Response schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "id": "cmpl-0278bf78fa6a4b1b90008efabd77506d",\n  "object": "list",\n  "created": 6292259,\n  "model": "/app/resources/models/models/Salesforce_SFR-Embedding-Mistral",\n  "data": [\n    {\n      "index": 0,\n      "object": "embedding",\n      "embedding": [\n        0.0007405281066894531,\n        0.0029888153076171875,\n        0.002719879150390625,\n        -0.0023860931396484375,\n        ...\n      ]\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 14,\n    "total_tokens": 14,\n    "completion_tokens": 0\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>i});var a=s(7294);const l={},d=a.createContext(l);function i(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);