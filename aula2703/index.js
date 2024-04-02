const inquirer = require('inquirer')  // Requisito o inquirer que eu instalei
const chalk = require('chalk')  // Requisito o Chalk para colorir as letras
const fs = ('fs') // requisito o filesystem para manipular os arquivos e diretórios

operation()

function operation() {
    inquirer.prompt([
        { 
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices:[
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ]).then((answer) => {                     // entrego uma resposta
        const action = answer['action']         //estou entregando a promessa e guardando dentro da constante action

        // console.log(action)                    // imprimo a mensagem no terminal

        if(action === 'Criar conta'){                        //Fazemos o encadeamento de IF se criar a conta
                createAccount()                     //Função para criar conta
        }else if(action === 'Consultar saldo'){
            getAccountBalance()                     //Função para ver o saldo da conta
        }else if(action === 'Depositar'){
            deposit()                               //Função para depoistar na conta
        }else if(action === 'Sacar'){
            withdraw()                              //Função para sacar da conta
        }else if(action === 'Sair'){
            console.log(chalk.bgYellow.black('Obrigador por usar o Accounts Node no Terminal!'))      //Função para sair do terminal
            process.exit()
        }

    })
}

function createAccount(){
    console.log(chalk.bgGreen.white('Obrigado por utilizar o Accounts Node Bank!'))
    console.log(chalk.green('Vamos Criar sua Conta...'))


    buildAccont()
}

function buildAccont(){
    inquirer.prompt([
        {
            name:'AccountName',
            message: 'Entre com o neme da sua conta: '
        }
    ]).then((answer) => {
        const AccountName = answer ['accountName']

        if(accountName === "" ){

            console.error('Não é permitido contas com o nome vazio!')
            operation()
        }

        if(!fs.exitsSync('accounts')){

            fs.mkdirsSync('accounts')
        }

        if(fs.exitsSync(`account/${accountName}.jason`)){

            console.error(chalk.bgRed.black(`A conta: ${accountName} já existe!`))
            console.error(chalk.red('Escolha outro nome: '))

            buildAccont(accountName)

        }

        fs.whiteFileSync(
            `account/${accountName}.json`,
            `{"balance":0}`,
            function(err){
                console.error(err)
            }
        )
        console.info(chalk.bgGreen.white(`Sua conta: ${accountName} foi criada parabens!`))
        console.info(chalk.green('Pode começar a opera-la"'))

        operation()
    })
}

function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual conta deseja depositar: '
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return deposit()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message:'Quanto deseja depositar: '
            }
        ]).then((answer) => {
            const amount = answer['amount']

            addAmount(accountName, amount)
            operation()
        })
    })
}

function checkAccount(accountName){   // Função para checar o nome da conta
    if(!fs.existSync(`accounts/${accountName}.json`)){
        console.error(chalk.bgRed.white(`A conta: ${accountName} não existe.`))
        return false                                        // se o nome da conta não exites, retorna falso
    }

    return true     // Se o nome existe, então retorna verdadeiro
}

function addAmount(accountName, amount){                //Função para adicionar o valor a conta
    const accountData = getAccount(accountName)

    if(!amount){
        console.error(chalk.bgRed.white('Ocorreu um erro, tente mais tarde!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.error(err)
        }
    )

    console.info(chalk.bgYellowBright.black(`Valor: ${amount} depositado na conta: ${accountName}`))
}

function getAccount(accountName){
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`,
    {
        encoding: 'utf-8',
        flag: 'r'
    })
}

function withdraw(){
    inquirer.prompt([
        {
            nome: 'accontName',
            message: 'Qual deseja fazer a retirada'
        }
    ]).then((answer) => {
        const accontName = answer['amout']

        if(!checkAccount(accontName)){
            console.error(`A conta:${accontName} não existe, não há como sacar.`)
            return withdraw()
        }
        inquirer.prompt([
            {
                neme: 'amout',
                message: 'Quanto deseja sacar?'
            }
        ]).then((answer) => {
            const amount = answer['amount']

            removeAmout(accontName, amount)
            operation()
        })
    })

}

function removeAmout(accontName, amount){
    const account = getAccount(accontName)

    if(!amount){
        console.error(chalk.bgRed.white('Ocorreu um erro tente mais tarde.'))
        return withdraw()
    }

    if(accountData.balance < amount){
        console.error(chalk.bgRed.white('Valor indisponivel'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData) - parseFloat(amount)

    fs.whiteFileSync(
        `accont/${accontName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.error(err)
        }
    )

    console.info(chalk.bgGreenBright.black(`o saque no valor: ${amount} foi realizado na conta: ${accontName}`))
}

function getAccountBalance(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual conta deseja olhar o saldo?'
        }
    ]).then((answer) =>{
        const accountName = answer['accountName']

        if (!checkAccount(accountName)){
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.info(chalk.bgGreen.black(`--- | NODE JS Bank| ---`))
        console.info(chalk.bgGreen.black(`--- | SALDO DA CONTA: ${accountName.toUpperCase()} | -------`))
        console.info(chalk.bgGreen.black(`--- | SALDO DA CONTA: ${accountData.balance.toFixed(2)}| ---`))
        console.info(chalk.bgGreen.black(`--- | NODE JS Bank| ---`))
    } )
}