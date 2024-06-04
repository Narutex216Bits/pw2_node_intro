const { Sequelize } = require('sequelize')
const fs = require('fs')


const sequelize = new Sequelize("ideias_db",
"marcioideias",
"A592", {
    host: "marcioideiasappgrupob.mysql.database.azure.com",
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        // caminho para o certificado CA
          ca: fs.readFileSync(__dirname + '/DigiCertGlobalRootCA.crt')
        }
      }
})


try{
    sequelize.authenticate()
    console.log('Conectado com sucesso ao Azure!')
}catch(error){
    console.error(`Deu erro na conexão com Azure!: ${error}`)
}


module.exports = sequelize