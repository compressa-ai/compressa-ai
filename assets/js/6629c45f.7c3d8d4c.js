"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[820],{7691:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"About","href":"/","className":"docs_sidebar_index","docId":"docs/index","unlisted":false},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"className":"docs_sidebar_index","items":[{"type":"link","label":"Langchain","href":"/docs/api-reference/langchain","className":"docs_sidebar_index","docId":"docs/api-reference/langchain","unlisted":false},{"type":"link","label":"REST API","href":"/docs/api-reference/rest","docId":"docs/api-reference/rest","unlisted":false},{"type":"link","label":"Transition from OpenAI","href":"/docs/api-reference/openai","className":"docs_sidebar_index","docId":"docs/api-reference/openai","unlisted":false}],"href":"/docs/api-reference/"},{"type":"category","label":"quickstart","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quickstart Langchain Compressa","href":"/docs/quickstart/quickstart_langchain","className":"docs_sidebar_index","docId":"docs/quickstart/quickstart_langchain","unlisted":false}]}],"guidesSidebar":[{"type":"link","label":"Introduction to Rerank with Compressa","href":"/guides/langchain_basic_rerank/","docId":"guides/langchain_basic_rerank/index","unlisted":false},{"type":"link","label":"Basic intro to semantic search","href":"/guides/langchain_basic_semantic_search/","docId":"guides/langchain_basic_semantic_search/index","unlisted":false},{"type":"link","label":"RAG example","href":"/guides/langchain_rag/","docId":"guides/langchain_rag/index","unlisted":false}],"onpremSidebar":[{"type":"category","label":"Setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"No Internet","href":"/onprem/setup/internet-access","docId":"onprem/setup/internet-access","unlisted":false}],"href":"/onprem/setup/"},{"type":"link","label":"Quickstart: On-Premises InsightStream","href":"/onprem/insight-stream/","docId":"onprem/insight-stream/index","unlisted":false},{"type":"category","label":"Services","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Management API","href":"/onprem/services/rest-api","docId":"onprem/services/rest-api","unlisted":false}],"href":"/onprem/services/"},{"type":"link","label":"Inference","href":"/onprem/inference/","docId":"onprem/inference/index","unlisted":false},{"type":"link","label":"Quickstart: Mistral-7B On-Premises","href":"/onprem/mistral/","docId":"onprem/mistral/index","unlisted":false},{"type":"link","label":"Finetuning","href":"/onprem/finetuning/","docId":"onprem/finetuning/index","unlisted":false}]},"docs":{"docs/api-reference/index":{"id":"docs/api-reference/index","title":"API Reference","description":"Description that we have REST API and langchain","sidebar":"docsSidebar"},"docs/api-reference/langchain":{"id":"docs/api-reference/langchain","title":"Langchain","description":"* ### \u0421\u0443\u0431\u043c\u043e\u0434\u0443\u043b\u0438","sidebar":"docsSidebar"},"docs/api-reference/openai":{"id":"docs/api-reference/openai","title":"Transition from OpenAI","description":"The Compsessa API is OpenAI compatible.","sidebar":"docsSidebar"},"docs/api-reference/rest":{"id":"docs/api-reference/rest","title":"REST API","description":"","sidebar":"docsSidebar"},"docs/index":{"id":"docs/index","title":"About","description":"Compressa offers a ready-to-use set of powerful models with Russian language support for custom development of LLM + RAG assistants based on Langchain. Using either our ready-made APIs or deploying a copy of the platform on your own servers, you can create the AI assistant you need for your specific business task.","sidebar":"docsSidebar"},"docs/quickstart/quickstart_langchain":{"id":"docs/quickstart/quickstart_langchain","title":"Quickstart Langchain Compressa","description":"This guide shows how to use Compressa into langchain.","sidebar":"docsSidebar"},"guides/langchain_basic_rerank/index":{"id":"guides/langchain_basic_rerank/index","title":"Introduction to Rerank with Compressa","description":"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f, \u0441\u0442\u0440\u0435\u043c\u044f\u0441\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b. \u041e\u0434\u043d\u0438\u043c \u0438\u0437 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0443\u0445\u044d\u0442\u0430\u043f\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430 \u0441 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.","sidebar":"guidesSidebar"},"guides/langchain_basic_semantic_search/index":{"id":"guides/langchain_basic_semantic_search/index","title":"Basic intro to semantic search","description":"\u042f\u0437\u044b\u043a\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430\u043c \u0432\u044b\u0445\u043e\u0434\u0438\u0442\u044c \u0437\u0430 \u0440\u0430\u043c\u043a\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u044b \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u0442\u0435\u043a\u0441\u0442\u0430. \u042d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c, \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u0435\u0433\u043e \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435.","sidebar":"guidesSidebar"},"guides/langchain_rag/index":{"id":"guides/langchain_rag/index","title":"RAG example","description":"RAG (Retrieval Augmented Generation) is a method of working with large language models when the request context","sidebar":"guidesSidebar"},"onprem/finetuning/index":{"id":"onprem/finetuning/index","title":"Finetuning","description":"Compressa provides the feature of low-effort models fine-tuning via LoRA/QLoRA adapters.","sidebar":"onpremSidebar"},"onprem/inference/index":{"id":"onprem/inference/index","title":"Inference","description":"Once Compressa is set up, the first step to start using a model is to deploy it for inference.","sidebar":"onpremSidebar"},"onprem/insight-stream/index":{"id":"onprem/insight-stream/index","title":"Quickstart: On-Premises InsightStream","description":"This guide shows how to deploy InsightStream RAG chatbot together with Compressa for model inference.","sidebar":"onpremSidebar"},"onprem/mistral/index":{"id":"onprem/mistral/index","title":"Quickstart: Mistral-7B On-Premises","description":"This guide will show you how to deploy the Mistral-7B inference on a single A100-40GB GPU.","sidebar":"onpremSidebar"},"onprem/services/index":{"id":"onprem/services/index","title":"Services","description":"After the Compressa App is deployed, all components are accessible via the same URL (8080 by default).","sidebar":"onpremSidebar"},"onprem/services/rest-api":{"id":"onprem/services/rest-api","title":"Management API","description":"The Management API is a REST API that allows control over all features.","sidebar":"onpremSidebar"},"onprem/setup/index":{"id":"onprem/setup/index","title":"Setup","description":"Compressa App is distributed as docker containers which are available at Github","sidebar":"onpremSidebar"},"onprem/setup/internet-access":{"id":"onprem/setup/internet-access","title":"No Internet","description":"If you\'re deploying Compressa in private network without internet access,","sidebar":"onpremSidebar"}}}}')}}]);