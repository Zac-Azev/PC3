# Node + Express Server

Branch do repositório principal para o projeto desenvolvido na disciplina de PC3-IFB 2024/2, testando funcionalidades diferentes e uma outra forma de execução dos requisitos de sistema.

## Getting Started

Para deploy,
```sh
npm run build
```
deve instalar os modulos necessários.

Servidor deve iniciar com:
```sh
npm run start
```

Estrutura:
```
.
├── node_modules
│   └──...
├── package.json
├── package-lock.json
├── README.md
├── src (codigo fonte)
│   ├── config (configuracoes necessarias)
│   │   └── dbConfig.js
│   ├── controller (controle e logica da aplicacao)
│   │   └── controler.js
│   ├── index.js
│   ├── model (modelo de dados e acesso aos mesmos)
│   │   └── model.js
│   └── router (rotas da aplicacao)
│       ├── delete.js
│       ├── get.js
│       ├── post.js
│       └── put.js
└── uploads
│   └──...
```
