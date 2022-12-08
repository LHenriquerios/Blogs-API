# Bem vindos ao Blogs API

Antes de qualquer coisa faça o clone o repositório.

## Instalação do Projeto

### Recomendo Fortemente que rode a aplicação pelo Docker

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.
 - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências com `npm install`. (Instale dentro do container)
  
  ### Caso prefira usar o Node e MySQL instaladas localmente
  - Apenas instale as dependências com `npm install`.
  
  
  

## Instalando o banco de dados
  Faça a conexão do banco com o gerenciador que desejar. Os campos devem estritamente ser preenchidos com os a seguir:
  - Host: `127.0.0.1`
  - Username: `root`
  - Port: `3306`
  - Password: `password`
  <br>
  
  *Caso dê erro, tente com `1234` no campo 'password'*
  
  ## Criando e alimentando o banco de dados
  Já existem scripts no package.json prontos para serem usados neste momento, se você digitar `npm run prestart` ele fará:
> npx sequelize-cli db:create && npx sequelize-cli db:migrate

que cria o banco e roda as migrations e para popular o banco rode as seeds com `npm run seed`.

> npx sequelize-cli db:seed:all

## Rode a API!
Com tudo finalizado, rode o script `npm start` e comece a fazer requisições à API! 😜
