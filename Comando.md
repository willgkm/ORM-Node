Cria uma os arquivos inicias o sequelize
npx sequelize-cli init

Cria o modelo Pessoa
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

Migra o modelo Pessoa para o banco de dados informando no config.json
npx sequelize-cli db:migrate

Gera um arquivo de seed para Pessoas
npx sequelize-cli seed:generate --name demo-pessoa

Executa o seed e popula o banco de dados 
npx sequelize-cli db:seed:all

Desfaz uma seed 
npx sequelize db:seed:undo

Volta o banco para um estado anterior
npx sequelize-cli db:migrate:undoC