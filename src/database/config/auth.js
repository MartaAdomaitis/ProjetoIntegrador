const localStrategy = require("passport-local").Strategy
const db = require('../models/db');
const bcrypt = require("bcrypt")

Usuario = require ("../../database/models/Usuario").Usuario

module.exports = ((passport)=>{
    passport.use(new localStrategy({usernameField:"email", passwordField:"senha"}, (email, senha, done)=>{

        Usuario.findOne({email:email}).then((usuario)=>{
    if(!usuario){
        return done(null, false, {message:"Esta conta não existe"})
    }

    bcrypt.compare(senha, Usuario.senha, (erro, batem)=>{
        if(batem){
            return done(null, Usuario)
        }else{
            return done (null, false, {message: "Senha incorreta"})
        }
    })
})
    }
))
 passport.serializeUser((Usuario, done)=>{
done(null, Usuario.id)
 })
 passport.deserializeUser((id, done)=>{
    Usuario.findById(id,(err, Usuario)=>{
      done(err, Usuario)  
    })
 })
})