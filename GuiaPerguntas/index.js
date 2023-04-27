const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!')
    })
    .catch(err => {
        console.log(err)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarPergunta', (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send('Formulário recebido! Título: ' + titulo + ' e Descrição: ' + descricao)
})

app.listen(8080, () => {
    console.log('App rodando!')
})