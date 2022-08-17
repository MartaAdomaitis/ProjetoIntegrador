function loggedUserMiddleware(req, res, next){
    if(req.session.userLogged){
    return res.redirect("/painelusuario")}
    next()
}
module.exports = loggedUserMiddleware;