"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[998],{7330:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>r});var d=s(5893),a=s(1151);const l={sidebar_position:2},i="Management API",t={id:"ru/docs/services/rest-api",title:"Management API",description:"The Management API is a REST API that allows control over all features.",source:"@site/docs/ru/docs/services/rest-api.md",sourceDirName:"ru/docs/services",slug:"/ru/docs/services/rest-api",permalink:"/ru/ru/docs/services/rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/docs/main/docs/ru/docs/services/rest-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},c={},r=[{value:"Models",id:"models",level:2},{value:"<code>GET /v1/models/</code>",id:"get-v1models",level:3},{value:"Example:",id:"example",level:4},{value:"Response schema:",id:"response-schema",level:4},{value:"<code>POST /v1/models/add/</code>",id:"post-v1modelsadd",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Example:",id:"example-1",level:4},{value:"Response schema:",id:"response-schema-1",level:4},{value:"Deploy",id:"deploy",level:2},{value:"<code>GET /v1/deploy/</code>",id:"get-v1deploy",level:3},{value:"Example:",id:"example-2",level:4},{value:"Response schema:",id:"response-schema-2",level:4},{value:"<code>POST /v1/deploy/</code>",id:"post-v1deploy",level:3},{value:"Request body:",id:"request-body",level:4},{value:"Example:",id:"example-3",level:4},{value:"Response schema:",id:"response-schema-3",level:4},{value:"<code>GET /v1/deploy/status</code>",id:"get-v1deploystatus",level:3},{value:"Example:",id:"example-4",level:4},{value:"Response schema:",id:"response-schema-4",level:4},{value:"<code>POST /v1/deploy/interrupt/</code>",id:"post-v1deployinterrupt",level:3},{value:"Example:",id:"example-5",level:4},{value:"Response schema:",id:"response-schema-5",level:4},{value:"Jobs",id:"jobs",level:2},{value:"<code>GET /v1/jobs/</code>",id:"get-v1jobs",level:3},{value:"Example:",id:"example-6",level:4},{value:"Response schema:",id:"response-schema-6",level:4},{value:"<code>GET /v1/jobs/{job_id}/status/</code>",id:"get-v1jobsjob_idstatus",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Example:",id:"example-7",level:4},{value:"Response schema:",id:"response-schema-7",level:4},{value:"<code>POST /v1/jobs/{job_id}/interrupt/</code>",id:"post-v1jobsjob_idinterrupt",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Example:",id:"example-8",level:4},{value:"Response schema:",id:"response-schema-8",level:4},{value:"Datasets",id:"datasets",level:2},{value:"<code>GET /v1/datasets/</code>",id:"get-v1datasets",level:3},{value:"Example:",id:"example-9",level:4},{value:"Response schema:",id:"response-schema-9",level:4},{value:"<code>POST /v1/datasets/upload/</code>",id:"post-v1datasetsupload",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Request body:",id:"request-body-1",level:4},{value:"Example:",id:"example-10",level:4},{value:"Response schema:",id:"response-schema-10",level:4},{value:"<code>GET /v1/datasets/{dataset_id}/</code>",id:"get-v1datasetsdataset_id",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Example:",id:"example-11",level:4},{value:"Response schema:",id:"response-schema-11",level:4},{value:"Finetuning",id:"finetuning",level:2},{value:"<code>GET /v1/finetune/models/</code>",id:"get-v1finetunemodels",level:3},{value:"Example:",id:"example-12",level:4},{value:"Response schema:",id:"response-schema-12",level:4},{value:"<code>POST /v1/finetune/</code>",id:"post-v1finetune",level:3},{value:"Request body:",id:"request-body-2",level:4},{value:"Example:",id:"example-13",level:4},{value:"Response schema:",id:"response-schema-13",level:4},{value:"<code>GET /v1/finetune/status</code>",id:"get-v1finetunestatus",level:3},{value:"Example:",id:"example-14",level:4},{value:"Response schema:",id:"response-schema-14",level:4},{value:"<code>POST /v1/finetune/interrupt/</code>",id:"post-v1finetuneinterrupt",level:3},{value:"Example:",id:"example-15",level:4},{value:"Response schema:",id:"response-schema-15",level:4}];function o(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"management-api",children:"Management API"}),"\n",(0,d.jsxs)(n.p,{children:["The Management API is a ",(0,d.jsx)(n.strong,{children:"REST API"})," that allows control over all features.\nInteractive Swagger documentation is available at:",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"URL"}),": ",(0,d.jsx)(n.code,{children:"http://localhost:8080/api/docs/"})]}),"\n",(0,d.jsx)(n.h2,{id:"models",children:"Models"}),"\n",(0,d.jsx)(n.p,{children:"APIs to work with currently available models."}),"\n",(0,d.jsx)(n.h3,{id:"get-v1models",children:(0,d.jsx)(n.code,{children:"GET /v1/models/"})}),"\n",(0,d.jsx)(n.p,{children:"List models available for deploy and finetune."}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/models/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[\n  {\n    "model_id": "string",\n    "adapter": true,\n    "base_model_id": "string"\n  }\n]\n'})}),"\n",(0,d.jsx)(n.h3,{id:"post-v1modelsadd",children:(0,d.jsx)(n.code,{children:"POST /v1/models/add/"})}),"\n",(0,d.jsx)(n.p,{children:"Download a model from Hugging Face"}),"\n",(0,d.jsx)(n.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"query"}),": ",(0,d.jsx)(n.code,{children:"model_id"})," - model's id on Hugging Face,\nfor example ",(0,d.jsx)(n.code,{children:"openchat/openchat-3.5-0106"})," fror ",(0,d.jsx)(n.a,{href:"https://huggingface.co/openchat/openchat-3.5-0106",children:"link"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"example-1",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/models/add/?model_id=mymodel_id' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-1",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n  "name": "DOWNLOAD_mymodel_id",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T09:58:29.846708"\n}\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,d.jsx)(n.p,{children:"APIs to deploy and undeploy model."}),"\n",(0,d.jsx)(n.h3,{id:"get-v1deploy",children:(0,d.jsx)(n.code,{children:"GET /v1/deploy/"})}),"\n",(0,d.jsx)(n.p,{children:"Get currently deployed model"}),"\n",(0,d.jsx)(n.h4,{id:"example-2",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/deploy/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-2",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "model_id": "string",\n  "adapter_ids": [\n    "string"\n  ]\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"post-v1deploy",children:(0,d.jsx)(n.code,{children:"POST /v1/deploy/"})}),"\n",(0,d.jsxs)(n.p,{children:["Deploy model and adapters for inference.\nList of ids for request can be obtained from ",(0,d.jsx)(n.code,{children:"GET /v1/models/"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"request-body",children:"Request body:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "model_id": "string",\n  "adapter_ids": [\n    "string"\n  ]\n}\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"model_id"})," - model's id"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"adapter_ids"})," - list of adapter ids"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"example-3",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/deploy/' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"model_id\": \"model_id1\",\n  \"adapter_ids\": [\n    \"adapter_id1\",\n    \"adapter_id2\"\n  ]\n}'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-3",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "name": "string",\n  "status": "CREATED",\n  "started_at": "2024-03-21T10:10:07.521Z"\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"get-v1deploystatus",children:(0,d.jsx)(n.code,{children:"GET /v1/deploy/status"})}),"\n",(0,d.jsx)(n.p,{children:"Get status of deployed model."}),"\n",(0,d.jsx)(n.h4,{id:"example-4",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/deploy/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-4",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "model_id": "model_id1",\n  "adapter_ids": [\n    "adapter_id1",\n    "adapter_id2"\n  ],\n  "job": {\n    "id": "8a63349c-078f-4e98-8968-4f011593329c",\n    "name": "DEPLOY_model_id1_adapters_id1_id2",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T07:35:16.861681"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"post-v1deployinterrupt",children:(0,d.jsx)(n.code,{children:"POST /v1/deploy/interrupt/"})}),"\n",(0,d.jsx)(n.p,{children:"Undeploy currently deployed model."}),"\n",(0,d.jsx)(n.h4,{id:"example-5",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/deploy/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-5",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "8a63349c-078f-4e98-8968-4f011593329c",\n  "name": "DEPLOY_model_id1_adapters_id1_id2",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T07:35:16.861681"\n}\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"jobs",children:"Jobs"}),"\n",(0,d.jsx)(n.p,{children:"Operations like adding model or deploy are associated with the job.\nThe next APIs allows to control job execution."}),"\n",(0,d.jsx)(n.h3,{id:"get-v1jobs",children:(0,d.jsx)(n.code,{children:"GET /v1/jobs/"})}),"\n",(0,d.jsx)(n.p,{children:"Get all jobs with statuses."}),"\n",(0,d.jsx)(n.h4,{id:"example-6",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/jobs/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-6",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[\n  {\n    "id": "8a63349c-078f-4e98-8968-4f011593329c",\n    "name": "DEPLOY_model_id1_adapters_id1_id2",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T07:35:16.861681"\n  },\n  {\n    "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n    "name": "DOWNLOAD_test",\n    "status": "FINISHED",\n    "started_at": "2024-03-21T09:58:29.846708"\n  }\n]\n'})}),"\n",(0,d.jsx)(n.h3,{id:"get-v1jobsjob_idstatus",children:(0,d.jsx)(n.code,{children:"GET /v1/jobs/{job_id}/status/"})}),"\n",(0,d.jsxs)(n.p,{children:["Get last status for the job with ",(0,d.jsx)(n.code,{children:"job_id"})]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"path"}),": ",(0,d.jsx)(n.code,{children:"job_id"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"example-7",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/jobs/4d78d943-1896-4d7b-9f11-b10cc2389ba3/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-7",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "4d78d943-1896-4d7b-9f11-b10cc2389ba3",\n  "name": "DOWNLOAD_test",\n  "status": "FINISHED",\n  "started_at": "2024-03-21T09:58:29.846708"\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"post-v1jobsjob_idinterrupt",children:(0,d.jsx)(n.code,{children:"POST /v1/jobs/{job_id}/interrupt/"})}),"\n",(0,d.jsxs)(n.p,{children:["Interrupt the job with ",(0,d.jsx)(n.code,{children:"job_id"})]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-2",children:"Parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"path"}),": ",(0,d.jsx)(n.code,{children:"job_id"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"example-8",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/jobs/8a63349c-078f-4e98-8968-4f011593329c/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-8",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "8a63349c-078f-4e98-8968-4f011593329c",\n  "name": "DEPLOY_model_id1_adapters_id1_id2",\n  "status": "KILLED",\n  "started_at": "2024-03-21T07:35:16.861681"\n}\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"datasets",children:"Datasets"}),"\n",(0,d.jsx)(n.p,{children:"The next APIs allows to control download and upload datasets for training."}),"\n",(0,d.jsx)(n.h3,{id:"get-v1datasets",children:(0,d.jsx)(n.code,{children:"GET /v1/datasets/"})}),"\n",(0,d.jsx)(n.p,{children:"List all available datasets."}),"\n",(0,d.jsx)(n.h4,{id:"example-9",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/datasets/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-9",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[\n  {\n    "id": "01be6d68-f790-434b-aa6d-5bd492aef202",\n    "name": "train.jsonl",\n    "s3_path": "01be6d68-f790-434b-aa6d-5bd492aef202/metadata.json",\n    "description": null\n  },\n  {\n    "id": "077adb68-2b0e-481b-bd13-e8807adf625f",\n    "name": "train.jsonl",\n    "s3_path": "077adb68-2b0e-481b-bd13-e8807adf625f/metadata.json",\n    "description": "My dataset 2"\n  }\n]\n'})}),"\n",(0,d.jsx)(n.h3,{id:"post-v1datasetsupload",children:(0,d.jsx)(n.code,{children:"POST /v1/datasets/upload/"})}),"\n",(0,d.jsxs)(n.p,{children:["Upload new dataset file.",(0,d.jsx)(n.br,{}),"\n","File should be a conversation in ",(0,d.jsx)(n.code,{children:"jsonl"})," format."]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-3",children:"Parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"query"}),": ",(0,d.jsx)(n.code,{children:"description"})," - dataset description"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"request-body-1",children:"Request body:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"multipart/form-data"}),": ",(0,d.jsx)(n.code,{children:"file"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"example-10",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/datasets/upload/?description=My%20Description' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'file=@train.jsonl'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-10",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "string",\n  "name": "string",\n  "s3_path": "string",\n  "description": "string"\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"get-v1datasetsdataset_id",children:(0,d.jsx)(n.code,{children:"GET /v1/datasets/{dataset_id}/"})}),"\n",(0,d.jsxs)(n.p,{children:["Download dataset with ",(0,d.jsx)(n.code,{children:"dataset_id"})]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-4",children:"Parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"path"}),": ",(0,d.jsx)(n.code,{children:"dataset_id"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"example-11",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/datasets/01be6d68-f790-434b-aa6d-5bd492aef202/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-11",children:"Response schema:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"file"})}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"finetuning",children:"Finetuning"}),"\n",(0,d.jsx)(n.p,{children:"The next APIs allows to finetune models."}),"\n",(0,d.jsx)(n.h3,{id:"get-v1finetunemodels",children:(0,d.jsx)(n.code,{children:"GET /v1/finetune/models/"})}),"\n",(0,d.jsx)(n.p,{children:"List all models available for finetuning."}),"\n",(0,d.jsx)(n.h4,{id:"example-12",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/finetune/models/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-12",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[\n  {\n    "model_id": "TheBloke/mixtral-8x7b-v0.1-AWQ",\n    "adapter": false,\n    "base_model_id": null\n  },\n  {\n    "model_id": "NeuralNovel/Mistral-7B-Instruct-v0.2-Neural-Story",\n    "adapter": false,\n    "base_model_id": null\n  }\n]\n'})}),"\n",(0,d.jsx)(n.h3,{id:"post-v1finetune",children:(0,d.jsx)(n.code,{children:"POST /v1/finetune/"})}),"\n",(0,d.jsx)(n.p,{children:"Finetune adapter on dataset."}),"\n",(0,d.jsx)(n.h4,{id:"request-body-2",children:"Request body:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "name": "string",\n  "model_id": "string",\n  "dataset_id": "string"\n}\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"})," - name of training"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"model_id"})," - id of model to train"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"dataset_id"})," - id of dataset to train on"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"example-13",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'http://localhost:8080/api/v1/finetune/\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "name": "My Adapter Training",\n  "model_id": "NousResearch/Llama-2-7b-chat-hf",\n  "dataset_id": "01be6d68-f790-434b-aa6d-5bd492aef202"\n}\'\n'})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-13",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "74280be7-4723-475d-89ae-346e9017990e",\n  "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n  "status": "CREATED",\n  "started_at": "2024-03-21T10:40:40.928442"\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"get-v1finetunestatus",children:(0,d.jsx)(n.code,{children:"GET /v1/finetune/status"})}),"\n",(0,d.jsx)(n.p,{children:"Get status of current finetuning."}),"\n",(0,d.jsx)(n.h4,{id:"example-14",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/api/v1/finetune/status/' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-14",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "46c155b4-17fe-4226-9412-a77edfadc7e7",\n  "name": "My Adapter Training",\n  "model_id": "NousResearch/Llama-2-7b-chat-hf",\n  "dataset_id": "01be6d68-f790-434b-aa6d-5bd492aef202",\n  "job": {\n    "id": "74280be7-4723-475d-89ae-346e9017990e",\n    "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n    "status": "RUNNING",\n    "started_at": "2024-03-21T10:40:40.928442"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"post-v1finetuneinterrupt",children:(0,d.jsx)(n.code,{children:"POST /v1/finetune/interrupt/"})}),"\n",(0,d.jsx)(n.p,{children:"Interrupt current finetuning."}),"\n",(0,d.jsx)(n.h4,{id:"example-15",children:"Example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/api/v1/finetune/interrupt/' \\\n  -H 'accept: application/json' \\\n  -d ''\n"})}),"\n",(0,d.jsx)(n.h4,{id:"response-schema-15",children:"Response schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n  "id": "74280be7-4723-475d-89ae-346e9017990e",\n  "name": "FT_NousResearch/Llama-2-7b-chat-hf_01be6d68-f790-434b-aa6d-5bd492aef202",\n  "status": "RUNNING",\n  "started_at": "2024-03-21T10:40:40.928442"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>i});var d=s(7294);const a={},l=d.createContext(a);function i(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);