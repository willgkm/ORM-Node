const database = require("../models");

class NivelController {

  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegarUmNivel(req, res) {
    try {
      const { id } = req.params
      const nivel = await database.Niveis.findOne({where: {id:id}})
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarNivel(req, res) {
    const novoNivel = req.body
    try {
      const novoNivelCriado = await database.Niveis.create(novoNivel)
      return res.status(200).json(novoNivelCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateNivel(req, res) {
    const { id } = req.params
    const novosDados = req.body

    try {
      await database.Niveis.update(novosDados, {where: { id:Number(id) }})

      const nivelAtualizado = await database.Niveis.findOne({where: { id:Number(id) }})
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteNivel(req, res) {
    const { id } = req.params

    try {
      await database.Niveis.destroy({where: { id:Number(id) }})
      return res.status(200).json(`Nivel com id ${id} deletada`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController