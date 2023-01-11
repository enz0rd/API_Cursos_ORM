const bodyParser = require('body-parser')
const pessoas = require('./PessoasRoute.js')
const niveis = require('./NiveisRoute.js')
const turmas = require('./TurmasRoute.js')
const matriculas = require('./MatriculasRoute.js')


const routes = app => {
    app.use(bodyParser.json())
    app.use(pessoas, niveis, turmas, matriculas)
}

module.exports = routes