"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[1301],{6067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(4848),s=t(8453),r=t(1470),o=t(9365);const l={title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 OpenAI"},c="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 API Compressa",i={id:"docs/basic_modules/LLM/OpenAI",title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 OpenAI",description:"\u0412 Compressa \u0435\u0441\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 API-\u0441\u043b\u043e\u0439, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0439 \u0441 Chat Completion API \u043e\u0442 OpenAI. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u043e\u0442 OpenAI (\u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u043d\u0430 Langchain) \u0438 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u043e\u0434 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Compressa.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docs/basic_modules/LLM/OpenAI.md",sourceDirName:"docs/basic_modules/LLM",slug:"/docs/basic_modules/LLM/OpenAI",permalink:"/docs/basic_modules/LLM/OpenAI",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/i18n/ru/docusaurus-plugin-content-docs/current/docs/basic_modules/LLM/OpenAI.md",tags:[],version:"current",frontMatter:{title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 OpenAI"},sidebar:"docsSidebar",previous:{title:"LLM",permalink:"/docs/basic_modules/LLM/"},next:{title:"Embeddings",permalink:"/docs/basic_modules/Embeddings"}},u={},p=[{value:"\u0412\u043e\u0442 \u043a\u0430\u043a \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 OpenAI \u043d\u0430 Compressa",id:"\u0432\u043e\u0442-\u043a\u0430\u043a-\u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c-\u043c\u043e\u0434\u0435\u043b\u0438-openai-\u043d\u0430-compressa",level:2},{value:"\u0422\u0430\u043a\u0436\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u043f\u0446\u0438\u044e \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u0430 \u0442\u043e\u043a\u0435\u043d\u043e\u0432, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 OpenAI",id:"\u0442\u0430\u043a\u0436\u0435-\u0432\u044b-\u043c\u043e\u0436\u0435\u0442\u0435-\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c-\u043e\u043f\u0446\u0438\u044e-\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u0430-\u0442\u043e\u043a\u0435\u043d\u043e\u0432-\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e-\u0432-\u043a\u043b\u0438\u0435\u043d\u0442\u0435-openai",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-api-compressa",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 API Compressa"}),"\n",(0,a.jsx)(n.p,{children:"\u0412 Compressa \u0435\u0441\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 API-\u0441\u043b\u043e\u0439, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0439 \u0441 Chat Completion API \u043e\u0442 OpenAI. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u043e\u0442 OpenAI (\u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u043d\u0430 Langchain) \u0438 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u043e\u0434 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Compressa."}),"\n",(0,a.jsxs)(n.p,{children:["\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0445\u0435\u043c\u0430 REST API, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0433\u043e \u0441 OpenAI, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 ",(0,a.jsx)(n.a,{href:"/docs/rest.mdx#tag/chat/operation/create_chat_completion_v1_chat_completions_post",children:"\u0437\u0434\u0435\u0441\u044c"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"\u0432\u043e\u0442-\u043a\u0430\u043a-\u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c-\u043c\u043e\u0434\u0435\u043b\u0438-openai-\u043d\u0430-compressa",children:"\u0412\u043e\u0442 \u043a\u0430\u043a \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 OpenAI \u043d\u0430 Compressa"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(o.A,{value:"python",label:"Python (\u043a\u043b\u0438\u0435\u043d\u0442 OpenAI)",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI\n\nclient = OpenAI(\n    base_url="https://compressa-api.mil-team.ru/v1", # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1/chat/completions\n    api_key="\u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa" # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n)\n\nchat_completion = client.chat.completions.create(\n    model="Compressa-LLM",\n    messages=[\n        {"role": "system", "content": "\u0422\u044b \u0443\u043c\u0435\u0435\u0448\u044c \u0441\u043e\u0447\u0438\u043d\u044f\u0442\u044c \u0441\u043c\u0435\u0448\u043d\u044b\u0435 \u0430\u043d\u043a\u0435\u0434\u043e\u0442\u044b."},\n        {"role": "user", "content": "\u041d\u0430\u043f\u0438\u0448\u0438 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0438 \u0441\u043c\u0435\u0448\u043d\u043e\u0439 \u0430\u043d\u0435\u043a\u0434\u043e\u0442 \u043f\u0440\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0430."},\n    ],\n    stream=False,\n)\nprint(chat_completion.choices[0].message.content)\n'})})}),(0,a.jsx)(o.A,{value:"python-langchain",label:"Python (OpenAI Langchain)",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# pip install langchain-core - \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430\n# pip install langchain - \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430\n# pip install openai - \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430\n\nfrom langchain_openai import ChatOpenAI\n\nllm = ChatOpenAI(\n    base_url="https://compressa-api.mil-team.ru/v1", # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1/chat/completions\n    api_key="\u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa", # \u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n    model="Compressa-LLM"\n)\n\nmessages = [\n    (\n        "system",\n        "\u0422\u044b \u0443\u043c\u0435\u0435\u0448\u044c \u0441\u043e\u0447\u0438\u043d\u044f\u0442\u044c \u0441\u043c\u0435\u0448\u043d\u044b\u0435 \u0430\u043d\u043a\u0435\u0434\u043e\u0442\u044b.",\n    ),\n    ("human", "\u041d\u0430\u043f\u0438\u0448\u0438 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0438 \u0441\u043c\u0435\u0448\u043d\u043e\u0439 \u0430\u043d\u0435\u043a\u0434\u043e\u0442 \u043f\u0440\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0430."),\n]\n\nai_msg = llm.invoke(messages)\nprint(f"\u041e\u0442\u0432\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u0438: {ai_msg.content}")\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u0442\u0430\u043a\u0436\u0435-\u0432\u044b-\u043c\u043e\u0436\u0435\u0442\u0435-\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c-\u043e\u043f\u0446\u0438\u044e-\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u0430-\u0442\u043e\u043a\u0435\u043d\u043e\u0432-\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e-\u0432-\u043a\u043b\u0438\u0435\u043d\u0442\u0435-openai",children:"\u0422\u0430\u043a\u0436\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u043f\u0446\u0438\u044e \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u0430 \u0442\u043e\u043a\u0435\u043d\u043e\u0432, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 OpenAI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'#pip install openai - \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430\n\nfrom openai import OpenAI\n\nclient = OpenAI(\n    base_url="https://compressa-api.mil-team.ru/v1", #\u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 url, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 http://localhost:8080/api/v1/chat/completions\n    api_key="\u0412\u0430\u0448_API_\u043a\u043b\u044e\u0447_Compressa" #\u043f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439\n)\n\ncompletion = client.chat.completions.create(\n  model="Compressa-LLM",\n  messages=[\n    {"role": "system", "content": "\u0422\u044b \u0443\u043c\u0435\u0435\u0448\u044c \u0441\u043e\u0447\u0438\u043d\u044f\u0442\u044c \u0441\u043c\u0435\u0448\u043d\u044b\u0435 \u0430\u043d\u043a\u0435\u0434\u043e\u0442\u044b."},\n    {"role": "user", "content": "\u041d\u0430\u043f\u0438\u0448\u0438 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0438 \u0441\u043c\u0435\u0448\u043d\u043e\u0439 \u0430\u043d\u0435\u043a\u0434\u043e\u0442 \u043f\u0440\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0430."}\n  ],\n  stream=True\n)\n\nfor chunk in completion:\n  print(chunk.choices[0].delta)\n\n#ChoiceDelta(content=\'\u0411\', function_call=None, refusal=None, role=\'assistant\', tool_calls=None)\n#ChoiceDelta(content=\'\u044b\', function_call=None, refusal=None, role=\'assistant\', tool_calls=None)\n#ChoiceDelta(content=\'\u043b\', function_call=None, refusal=None, role=\'assistant\', tool_calls=None)\n#ChoiceDelta(content=\' \u0443\', function_call=None, refusal=None, role=\'assistant\', tool_calls=None)\n#...\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(6540),s=t(4164),r=t(3104),o=t(6347),l=t(205),c=t(7485),i=t(1682),u=t(9466);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=d(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[i,p]=h({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=i??f;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),b(e)}),[p,b,r]),tabValues:r}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function I(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=l[t].value;s!==a&&(i(n),o(s))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function A(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(I,{...n,...e}),(0,g.jsx)(_,{...n,...e})]})}function x(e){const n=(0,b.A)();return(0,g.jsx)(A,{...e,children:p(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(6540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);