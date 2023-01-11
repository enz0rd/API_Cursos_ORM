const db = require('../models')

class PessoaController {
    static async listarPessoas(req,res) {
        try {
            const lista = await db.Pessoas.findAll()
            return res.status(200).json(lista)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível listar as pessoas`} )
        }
    }
    static async PessoaID(req,res) {
        try {
            const pessoa = await db.Pessoas.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json({message:`${error.message} - Não foi possível localizar a pessoa`} )
        }

    }
    static async addPessoa(req,res) {
        try {
            const pessoa = req.body
            const cadastro = await db.Pessoas.create({
                nome: pessoa.nome,
                ativo: pessoa.ativo,
                email: pessoa.email,
                role: pessoa.role,
            })
            return res.status(200).json(cadastro)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível cadastrar a pessoa`})
        }
    }
    static async attPessoa(req,res) {
        try {
            const infos = req.body
            await db.Pessoas.update(infos, {
                where: {
                    id: req.params.id
                }
            })
            const pessoaAtualizada = await db.Pessoas.findOne({where:{id: req.params.id}})
            res.status(200).json(pessoaAtualizada)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Não foi possível atualizar o cadastro`})
        }
    }
    static async delPessoa(req,res) {
        try {
            await db.Pessoas.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `Cadastro removido com sucesso!`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Não foi possível remover cadastro`})
        }
    }
}

module.exports = PessoaController