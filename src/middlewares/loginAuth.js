const { body } = require('express-validator');

const loginAuth = [  
    body("emailLogin").notEmpty().withMessage('Digite um e-mail').isEmail(),
    body("senhaLogin").notEmpty().withMessage('Digite sua senha'),
];

module.exports = loginAuth