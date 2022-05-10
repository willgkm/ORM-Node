const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.pegaTodasAsTurmas)
      .get('/turmas/:id', TurmaController.pegarUmaTurma)
      .post('/turmas', TurmaController.criarTurma)
      .put('/turmas/:id', TurmaController.updateTurma)
      .delete('/turmas/:id', TurmaController.deleteTurma)

module.exports = router