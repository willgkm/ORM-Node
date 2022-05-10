const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const turmas = require('./turmaRouter')
const nivel = require('./nivelRouter')
module.exports = app => {

  app.use(bodyParser.json(), )
  app.use(pessoas)
  app.use(turmas)
  app.use(nivel)

  app.get('/',(req, res ) => res.send('oi, tudo certo ?'))


}