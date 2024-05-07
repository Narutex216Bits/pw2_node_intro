# pw2_node_intro
Este repositório será utilizado para desenvolver aulas de programação Javascript com uso do NodeJS e suas ferramentas de pacotes no backend.
![PW2](https://github.com/Narutex216Bits/pw2_node_introb/assets/49996462/c377c7c5-39f0-4c91-b612-2331e71d37ca)



Index

<<<<<<< aula3004
const conn = require('./db/conn')
=======
>>>>>>> main

<<<<<<< aula3004
conn
.sync({force: true})
.then(() => {
    app.listen(3000, () => {
        console.log('Servidor operando na porta local: http://127.0.0.1:3000')
    })

})

=======
app.listen(3000, () => {
    console.log('Servidor operando na porta local: http://127.0.0.1:3000')
})
>>>>>>> main



Conn.js

try {
    sequelize.authenticate()
<<<<<<< aula3004
    console.log('Conectamos com sucesso o MySQL Xampp!')
} catch (error) {
    console.error(`Deu erro na conexão: ${error}`)
=======
    console.log('Conectamos com o Sequelize!')
} catch (error) {
    console.error('Não foi possível conectar:', error)
>>>>>>> main
}
