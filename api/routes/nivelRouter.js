const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaTodosOsNiveis)
      .get('/niveis/:id', NivelController.pegaTodosOsNiveis)
      .post('/niveis', NivelController.criarNivel)
      .put('/niveis/:id', NivelController.updateNivel)
      .delete('/niveis/:id', NivelController.deleteNivel)

module.exports = router