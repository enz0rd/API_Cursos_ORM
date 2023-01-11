const db = require('../models')

class MatriculaController {
    static async listarMatriculas(req,res) {
        try {
            const lista = await db.Matriculas.findAll()
            return res.status(200).json(lista)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível listar as matriculas`} )
        }
    }
    static async listarMatriculasdePessoa(req,res) {
        try {
            const { estudante_id } = req.params
            const lista = await db.Matriculas.findAll({
                where: {
                    estudante_id: Number(estudante_id)
                }
            })
            return res.status(200).json(lista)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível listar as matriculas`} )
        }
    }
    static async MatriculaID(req,res) {
        try {
            const { estudante_id, matricula_id } = req.params
            const Matricula = await db.Matriculas.findOne({
                where: {
                    id: Number(matricula_id),
                    estudante_id: Number(estudante_id)
                }
            })
            return res.status(200).json(Matricula)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível localizar matrícula`} )
        }

    }
    static async addMatricula(req,res) {
        try {
            const { estudante_id } = req.params
            const matricula = req.body
            const cadastro = await db.Matriculas.create({
                status: matricula.status,
                estudante_id: estudante_id,
                turma_id: matricula.turma_id
            })
            return res.status(200).json(cadastro)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível cadastrar matrícula`})
        }
    }
    static async attMatricula(req,res) {
        try {
            const { estudante_id, matricula_id } = req.params
            const infos = req.body
            await db.Matriculas.update(infos, {
                where: {
                    id: matricula_id,
                    estudante_id: estudante_id
                }
            })
            const MatriculaAtualizada = await db.Matriculas.findOne({where:{id: matricula_id, estudante_id: estudante_id}})
            res.status(200).json(MatriculaAtualizada)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Não foi possível atualizar a matrícula`})
        }
    }
    static async delMatricula(req,res) {
        try {
            const { estudante_id, matricula_id } = req.params
            await db.Matriculas.destroy({
                where: {
                    id: matricula_id,
                    estudante_id: estudante_id
                }
            })
            res.status(200).json({message: `Matricula removida com sucesso!`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Não foi possível remover matrícula`})
        }
    }
}

module.exports = MatriculaController