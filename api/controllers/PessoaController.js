const database = require("../models");

class PessoaController {
  static async pegaTodasPessoas(req, res) {
    try {
      const todasPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  
  static async pegarUmaPessoa(req, res) {
    try {
      const { id } = req.params
      const pessoa = await database.Pessoas.findOne({where: {id:id}})
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const NovaPessoaCriada = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(NovaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePessoas(req, res) {
    const { id } = req.params
    const novosDados = req.body

    try {
      await database.Pessoas.update(novosDados, {where: { id:Number(id) }})

      const pessoaAtualizada = await database.Pessoas.findOne({where: { id:Number(id) }})
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePessoas(req, res) {
    const { id } = req.params

    try {
      await database.Pessoas.destroy({where: { id:Number(id) }})
      return res.status(200).json(`Pessoa com id ${id} deletada`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params

    try {
      await database.Pessoas.restore({where: { id:Number(id) }})
      return res.status(200).json(`Pessoa com id ${id} deletada`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegarUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      const matricula = await database.Matriculas.findOne({
        where: { 
          id : Number(matriculaId), 
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarMatricula(req, res) {
    const { estudanteId } = req.params
    const novaMatricula = {...req.body, estudante_id: Number(estudanteId)}
    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    const novosDados = req.body

    try {
      await database.Matriculas.update(novosDados, {
        where: { 
          id : Number(matriculaId), 
          estudante_id: Number(estudanteId)
        }
      })

      const matriculaAtualizada = await database.Matriculas.findOne({where: { 
        id : Number(matriculaId), 
        estudante_id: Number(estudanteId)
      }})
      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({where: { id:Number(matriculaId) }})

      return res.status(200).json(`Matricula com id ${matriculaId} deletada`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports =  PessoaController