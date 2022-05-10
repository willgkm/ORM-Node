const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasPessoas)
      .get('/pessoas/:id', PessoaController.pegarUmaPessoa)
      .post('/pessoas', PessoaController.criarPessoa)
      .put('/pessoas/:id', PessoaController.updatePessoas)
      .delete('/pessoas/:id', PessoaController.deletePessoas)
      .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)
      .post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
      .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula)
      .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula)

module.exports = router
