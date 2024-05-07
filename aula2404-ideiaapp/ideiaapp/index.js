const express = require('express')  // Engine
const exphbs = require('express-handlebars') //Vai montar o HTML no navegador para gente
const session = require('express-session') //Cria e gerencia a sessão de login
const FileStore = require('session-file-store')(session) //utilizado para conversar com o banco de dados em mysql
const flash = require('express-flash') // gerenciador de memória


const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('layouts/main')
})


