const Express = require('express')
const TurmaController = require('../controllers/TurmaController.js')

const router = Express.Router()

router.get('/turmas', TurmaController.listarTurmas)
router.put('/turmas/:id', TurmaController.attTurma)
router.get('/turmas/:id', TurmaController.TurmaID)
router.post('/turmas', TurmaController.addTurma)
router.delete('/turmas/:id', TurmaController.delTurma)

module.exports = router