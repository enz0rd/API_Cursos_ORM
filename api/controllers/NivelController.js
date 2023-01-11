const db = require('../models')

class NivelController {
    static async listarNiveis(req,res) {
        try {
            const lista = await db.Niveis.findAll()
            return res.status(200).json(lista)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível listar os níveis`} )
        }
    }
    static async NivelID(req,res) {
        try {
            const Nivel = await db.Niveis.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.status(200).json(Nivel)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível localizar nível`} )
        }

    }
    static async addNivel(req,res) {
        try {
            const Nivel = req.body
            const cadastro = await db.Niveis.create({
                descr_nivel: Nivel.descr_nivel
            })
            return res.status(200).json(cadastro)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível cadastrar nível`})
        }
    }
    static async attNivel(req,res) {
        try {
            const infos = req.body
            await db.Niveis.update(infos, {
                where: {
                    id: req.params.id
                }
            })
            const NivelAtualizado = await db.Niveis.findOne({where:{id: req.params.id}})
            res.status(200).json(NivelAtualizado)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Não foi possível atualizar o nível`})
        }
    }
    static async delNivel(req,res) {
        try {
            await db.Niveis.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `Cadastro removido com sucesso!`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Não foi possível remover nível`})
        }
    }
}

module.exports = NivelController