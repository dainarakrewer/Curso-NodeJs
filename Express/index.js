const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Bem Vindo ao Curso') //Fecha a conexão
})

app.get('/canal/youtube', (req, res) => {
    var canal = req.query['canal']

    if (canal) {
        res.send(canal)
    } else {
        res.send('Nenhum canal fornecido')
    }
})

app.get('/blog/:artigo?', (req, res) => {
    var artigo = req.params.artigo

    if(artigo){
        res.send('Artigo ' + artigo)
    } else {
        res.send('Bem Vindo ao meu Blog')
    }
})

app.get('/ola/:nome/:empresa', (req, res) => {
    var empresa = req.params.empresa
    res.send('<h1>Olá! ' + req.params.nome + ' da ' + empresa + '</h1>')
})

app.listen(4000, function (err){
    if(err) {
        console.log('Ocorreu um erro')
    } else {
        console.log('Servidor iniciado com sucesso')
    }
})