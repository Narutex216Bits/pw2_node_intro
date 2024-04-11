const express = require('express')  // Engine
const exphbs = require('express-handlebars') //Vai montar o HTML no navegador para gente
const sessions = require('express-session') //Cria e gerencia a sessão de login
const firestore = require('session-file-store')(session) //utilizado para conversar com o banco de dados em mysql
const flash = require('express-flash') // gerenciador de memória