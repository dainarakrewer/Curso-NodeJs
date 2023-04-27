const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = false

    var produtos = [
        {nome: 'Teste', preco: 1.00},
        {nome: 'Teste 1', preco: 2.00},
        {nome: 'Teste 2', preco: 3.00},
    ]

    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: 'CloudCRM',
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    })
})
