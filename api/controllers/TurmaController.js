
const database = require("../models");

class TurmaController {

  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasAsTurmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegarUmaTurma(req, res) {
    try {
      const { id } = req.params
      const turma = await database.Turmas.findOne({where: {id:id}})
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarTurma(req, res) {
    const novaTurma = req.body
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma)
      return res.status(200).json(novaTurmaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateTurma(req, res) {
    const { id } = req.params
    const novosDados = req.body

    try {
      await database.Turmas.update(novosDados, {where: { id:Number(id) }})

      const tuAtualizada = await database.Turmas.findOne({where: { id:Number(id) }})
      return res.status(200).json(tuAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteTurma(req, res) {
    const { id } = req.params

    try {
      await database.Turmas.destroy({where: { id:Number(id) }})
      return res.status(200).json(`Turma com id ${id} deletada`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController