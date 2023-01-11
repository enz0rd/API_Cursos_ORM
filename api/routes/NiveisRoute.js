const Express = require('express')
const NivelController = require('../controllers/NivelController.js')

const router = Express.Router()

router.get('/niveis', NivelController.listarNiveis)
router.put('/niveis/:id', NivelController.attNivel)
router.get('/niveis/:id', NivelController.NivelID)
router.post('/niveis', NivelController.addNivel)
router.delete('/niveis/:id', NivelController.delNivel)

module.exports = router