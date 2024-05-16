const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class UserController{
    static login(req, res){
        res.render('auth/login')
    }
    static async loginPost(req, res){
        const { email, password } = req.body


        const user = await User.findOne({where: {email:{email: email}}})

        if(!user){
            res.render('auth/login',{
                message: 'Usuario não encontrado.'
            } )

            return
        }

        req.session.userid =user.id
        req.flash('mensagem','Login realizado com suxesso!')

        req.session.save(( => {
            res.redirect('/')
        }))
        .catch((err) => console.error(err))
    })
    }