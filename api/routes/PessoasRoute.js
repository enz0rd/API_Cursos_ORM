const Express = require('express')
const PessoaController = require('../controllers/PessoaController.js')
const MatriculaController = require('../controllers/MatriculaController.js')

const router = Express.Router()

router.get('/pessoas', PessoaController.listarPessoas)
router.put('/pessoas/:id', PessoaController.attPessoa)
router.get('/pessoas/:id', PessoaController.PessoaID)
router.post('/pessoas', PessoaController.addPessoa)
router.delete('/pessoas/:id', PessoaController.delPessoa)
router.get('/pessoas/:estudante_id/matriculas', MatriculaController.listarMatriculasdePessoa)
router.put('/pessoas/:estudante_id/matriculas/:matricula_id', MatriculaController.attMatricula)
router.get('/pessoas/:estudante_id/matriculas/:matricula_id', MatriculaController.MatriculaID)
router.post('/pessoas/:estudante_id/matriculas', MatriculaController.addMatricula)
router.delete('/pessoas/:estudante_id/matriculas/:matricula_id', MatriculaController.delMatricula)

module.exports = router