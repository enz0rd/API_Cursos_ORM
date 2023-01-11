const db = require('../models')

class TurmaController {
    static async listarTurmas(req,res) {
        try {
            const lista = await db.Turmas.findAll()
            return res.status(200).json(lista)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível listar as turmas`} )
        }
    }
    static async TurmaID(req,res) {
        try {
            const Turma = await db.Turmas.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.status(200).json(Turma)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível localizar turma`} )
        }

    }
    static async addTurma(req,res) {
        try {
            const turma = req.body
            const cadastro = await db.Turmas.create({
                docente_id: [turma.docente_id],
                nivel_id: turma.nivel_id
            })
            return res.status(200).json(cadastro)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível cadastrar turma`})
        }
    }
    static async attTurma(req,res) {
        try {
            const infos = req.body
            await db.Turmas.update(infos, {
                where: {
                    id: req.params.id
                }
            })
            const TurmaAtualizada = await db.Turmas.findOne({where:{id: req.params.id}})
            res.status(200).json(TurmaAtualizada)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Não foi possível atualizar a turma`})
        }
    }
    static async delTurma(req,res) {
        try {
            await db.Turmas.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `Turma removida com sucesso!`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Não foi possível remover turma`})
        }
    }
}

module.exports = TurmaController