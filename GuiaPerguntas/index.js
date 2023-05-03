const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!')
    })
    .catch(err => {
        console.log(err)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    Pergunta.findAll({
        raw: true, order: [
            ['id', 'desc']
        ]
    }).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        })
    })
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarPergunta', (req, res) => {
    Pergunta.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.get('/pergunta/:id', (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: {id: id},
    }).then(pergunta => {
        if (pergunta != undefined) {
            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [['id', 'DESC']]
            }).then(respostas => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        } else {
            res.redirect('/')
        }
    })
})

app.post('/salvarResposta', (req, res) => {
    Resposta.create({
        corpo: req.body.corpo,
        perguntaId: req.body.perguntaId
    }).then(() => {
        res.redirect('/pergunta/' + this.perguntaId)
    })
})

app.listen(8080, () => {
    console.log('App rodando!')
})