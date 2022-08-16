const { body } = require('express-validator');

const cadastroAuth = [
    body("nome").notEmpty().withMessage('Digite o nome').isString(),
    body("email").notEmpty().withMessage('Digite o e-mail').isEmail(),
    body("senha").notEmpty().withMessage('Digite a senha'),
];

module.exports = cadastroAuth