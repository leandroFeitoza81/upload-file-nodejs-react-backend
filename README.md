Este projeto é uma API para upload de arquivos para o S3 da AWS. Ele foi desenvolvido para praticar alguns conceitos aprendidos durante o curso de Backend na Trybe e inspirado pela video aula do canal Rocketseat.

- A API foi desenvolvida com Node-Express.
- O deploy feito no Heroku usando PM2 para gerenciar processos.
- A base de dados é mongoDB hospedada na cloud do Mongo Atlas.
- Os arquivos são salvos no serviço S3 da AWS.

Baixando o projeto

No seu terminal execute os seguintes comandos:

git clone https://github.com/LeandroFeitozaGnu/upload-file-nodejs-react-backend.git
cd upload-file-nodejs-react-backend
npm install
node src/index.js

|-- src
    |--config
      |--multer.js
    |--models
      |--upload.js
    |--index.js
    |--routes.js
|--tmp
  |--uploads
|--package.json
|--yarn.lock
|--ecosystem.config.yml
|--README.md


multer.js -> Onde está toda a configuração de Storage do multer. Uma local para ser feito o upload de arquivo para a pasta tmp/upload dentro do projeto. A a S3 que salva os arquivos na AWS.

upload.js -> Onde está o Schema do Mongoose

index.js -> Inicia a API e onde concentra os apontamentos dos middlewares utilizados.

routes.js -> Onde estão salvos os Controllers de rotas.