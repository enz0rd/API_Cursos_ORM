const Express = require('express')
const MatriculaController = require('../controllers/MatriculaController.js')

const router = Express.Router()

router.get('/matriculas', MatriculaController.listarMatriculas)

module.exports = router