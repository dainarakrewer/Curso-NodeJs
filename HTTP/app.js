let http = require('http')

http.createServer(function (req, res) {
    res.end('<h1>Bem vindo!</h1>')
}).listen(8181)

console.log('Servidor rodando')