"use strict";(self.webpackChunkcompressa_docs=self.webpackChunkcompressa_docs||[]).push([[10],{7698:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=a(4848),t=a(8453);const r={sidebar_position:1},i="Quickstart: Langchain Compressa",o={id:"guides/langchain/index",title:"Quickstart: Langchain Compressa",description:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Compressa \u0432 langchain.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/langchain/index.md",sourceDirName:"guides/langchain",slug:"/guides/langchain/",permalink:"/ru/guides/langchain/",draft:!1,unlisted:!1,editUrl:"https://github.com/compressa-ai/compressa-ai.github.io/edit/main/docs/guides/langchain/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",next:{title:"Quickstart: InsightStream",permalink:"/ru/guides/insight-stream/"}},c={},l=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u0418\u043c\u043f\u043e\u0440\u0442\u044b",id:"\u0438\u043c\u043f\u043e\u0440\u0442\u044b",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f",level:2},{value:"CompressaEmbeddings",id:"compressaembeddings",level:2},{value:"ChatCompressa",id:"chatcompressa",level:2},{value:"CompressaRerank",id:"compressarerank",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 RAG",id:"\u043f\u0440\u0438\u043c\u0435\u0440-rag",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"quickstart-langchain-compressa",children:"Quickstart: Langchain Compressa"}),"\n",(0,s.jsx)(n.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Compressa \u0432 langchain."}),"\n",(0,s.jsx)(n.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pip install git+https://github.com/insight-stream/langchain_compressa.git\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0438\u043c\u043f\u043e\u0440\u0442\u044b",children:"\u0418\u043c\u043f\u043e\u0440\u0442\u044b"}),"\n",(0,s.jsx)(n.p,{children:"langchain compressa \u2014 \u044d\u0442\u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from langchain_compressa import CompressaEmbeddings\nfrom langchain_compressa import ChatCompressa\nfrom langchain_compressa.reranks import CompressaRerank\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(n.p,{children:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u044b:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"COMPRESSA_API_KEY"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import os\nos.environ["COMPRESSA_API_KEY"] = "your_key_here"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"compressaembeddings",children:"CompressaEmbeddings"}),"\n",(0,s.jsx)(n.p,{children:"langchain compressa \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438 Compressa."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from langchain_compressa.embeddings import CompressaEmbeddings\n\nembeddings = CompressaEmbeddings()\n\nembeddings.embed_query("My query to look up")\n\nembeddings.embed_documents(\n    ["This is a content of the document", "This is another document"]\n)\n# \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u044d\u043c\u0431\u0435\u0434\u0438\u043d\u0433 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\nawait embeddings.aembed_query("My query to look up")\n\n# \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u044d\u043c\u0431\u0435\u0434\u0438\u043d\u0433 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432\nawait embeddings.aembed_documents(\n    ["This is a content of the document", "This is another document"]\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"chatcompressa",children:"ChatCompressa"}),"\n",(0,s.jsx)(n.p,{children:"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0447\u0430\u0442\u0430."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from langchain_compressa import ChatCompressa\n\nllm = ChatCompressa(\n    temperature=0\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0412\u044b\u0437\u043e\u0432 LLM"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'messages = [\n    (\n        "system",\n        "You are a helpful assistant that translates English to French. Translate the user sentence.",\n    ),\n    ("human", "I love programming."),\n]\nai_msg = llm.invoke(messages)\nai_msg\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u0426\u0435\u043f\u043e\u0447\u043a\u0430 (\u0441haining)"}),"\n",(0,s.jsx)(n.p,{children:"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u043d\u0430\u0448\u0443 \u043c\u043e\u0434\u0435\u043b\u044c \u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from langchain_core.prompts import ChatPromptTemplate\n\nprompt = ChatPromptTemplate.from_messages(\n    [\n        (\n            "system",\n            "You are a helpful assistant that translates {input_language} to {output_language}.",\n        ),\n        ("human", "{input}"),\n    ]\n)\n\nchain = prompt | llm\nchain.invoke(\n    {\n        "input_language": "English",\n        "output_language": "German",\n        "input": "I love programming.",\n    }\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"compressarerank",children:"CompressaRerank"}),"\n",(0,s.jsx)(n.p,{children:"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0447\u0435\u0440\u0435\u0437 Compressa \u0438 langchain."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from langchain_core.documents import Document\nfrom langchain_compressa.reranks import CompressaRerank\n\n#\u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u0434\u0430\u0434\u0438\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0437 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 langchain\n\ndocuments = [\n    Document(\n        page_content="""Carson City is the capital city of the American state of Nevada. \n        At the 2010 United States Census, Carson City had a population of 55,274.""",\n        metadata={"source": "https://example.com/1"}\n    ),\n    Document(\n        page_content="""The Commonwealth of the Northern Mariana Islands is a group of islands \n        in the Pacific Ocean that are a political division controlled by the United States. \n        Its capital is Saipan.""",\n        metadata={"source": "https://example.com/2"}\n    ),\n    Document(\n        page_content="""Charlotte Amalie is the capital and largest city of the United States \n        Virgin Islands. It has about 20,000 people. The city is on the island of Saint Thomas.""",\n        metadata={"source": "https://example.com/3"}\n    ),\n    Document(\n        page_content="""Washington, D.C. (also known as simply Washington or D.C., and \n        officially as the District of Columbia) is the capital of the United States. \n        It is a federal district. The President of the USA and many major national government offices \n        are in the territory. This makes it the political center of the United States of America.""",\n        metadata={"source": "https://example.com/4"}\n    ), \n    Document(\n        page_content="""Capital punishment (the death penalty) has existed in the United States \n        since before the United States was a country. As of 2017, capital punishment is legal \n        in 30 of the 50 states. The federal government (including the United States military) \n        also uses capital punishment.""",\n        metadata={"source": "https://example.com/5"}\n    )\n]\n\nquery = "What is the capital of the United States?"\n\n#\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u0440\u0435\u0440\u0430\u043d\u043a\u0435\u0440\nreranker = CompressaRerank()\n\n#\u0438 \u0434\u0430\u043b\u0435\u0435 \u043c\u043e\u0436\u0435\u043c \u043f\u0435\u0440\u0435\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u0430\nrerank_res = reranker.rerank(query=query,  documents=documents, top_n=3)\ncompress_res = reranker.compress_documents(query=query,  documents=documents)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-rag",children:"\u041f\u0440\u0438\u043c\u0435\u0440 RAG"}),"\n",(0,s.jsx)(n.p,{children:"RAG (Retrieval Augmented Generation) - \u044d\u0442\u043e \u043c\u0435\u0442\u043e\u0434 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438, \u043a\u043e\u0433\u0434\u0430 \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n\u043a \u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044f\u0437\u044b\u043a\u043e\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c\n\u043c\u043e\u0436\u0435\u0442 \u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043b\u043d\u044b\u0439 \u0438 \u0442\u043e\u0447\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import os\nfrom langchain_compressa import CompressaEmbeddings, ChatCompressa\nfrom langchain_core.documents import Document\nfrom langchain.chains.combine_documents import create_stuff_documents_chain\nfrom langchain.chains import create_retrieval_chain\nfrom langchain_core.prompts import ChatPromptTemplate\nfrom langchain_text_splitters import RecursiveCharacterTextSplitter\nfrom langchain_community.document_loaders import WebBaseLoader\nfrom langchain_chroma import Chroma\n\nCOMPRESSA_API_KEY = os.getenv('COMPRESSA_API_KEY')\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c llm \u0438 embedding"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"compressa_embedding = CompressaEmbeddings(compressa_api_key=COMPRESSA_API_KEY)\nllm = ChatCompressa(compressa_api_key=COMPRESSA_API_KEY)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b langchain.\n\u0437\u0434\u0435\u0441\u044c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u043b\u044e\u0431\u043e\u0439 \u0438\u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u043e\u0432."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'loader = WebBaseLoader("https://docs.smith.langchain.com/overview")\ndocs = loader.load()\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c text_splitter \u0438 \u0440\u0430\u0437\u043e\u0431\u044a\u0451\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043d\u0430 \u0447\u0430\u043d\u043a\u0438"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"text_splitter = RecursiveCharacterTextSplitter(\n    chunk_size=500, chunk_overlap=100, add_start_index=True\n)\nall_splits = text_splitter.split_documents(docs)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043c \u0447\u0430\u043d\u043a\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 vectorstore \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c retriever"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'vectorstore = Chroma.from_documents(documents=all_splits, embedding=compressa_embedding)\nretriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 5})\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c Prompt \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u0441\u0445\u043e\u0434\u044f \u0438\u0437 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0430 \u043d\u0435 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u0437\u043d\u0430\u043d\u0438\u0439"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'system_template = f"""You are an assistant for question-answering tasks. \nUse the following pieces of retrieved context to answer the question. \nIf you don\'t know the answer, just say that you don\'t know. \nUse three sentences maximum and keep the answer concise."""\n\nqa_prompt = ChatPromptTemplate.from_messages([\n    ("system", system_template),\n    ("human", """Context information:\n\n        {context}\n        \n        Query: {input}\t\t\n    """),\n])\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u0437\u0430\u0434\u0430\u0434\u0438\u043c 2 \u0446\u0435\u043f\u043e\u0447\u043a\u0438: \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0443 \u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)\n\nrag_chain = create_retrieval_chain(retriever, question_answer_chain)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0442\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u0435\u043c \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'answ = rag_chain.invoke({"input": "how can langsmith help with testing?"})\nprint(answ["answer"])\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u0435: \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u0443\u0441\u0441\u043a\u0438\u043c\u0438 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u043c\u0438 \u043f\u0440\u043e\u043c\u0442 \u0442\u043e\u0436\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var s=a(6540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);