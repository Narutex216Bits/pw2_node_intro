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