import { body, validationResult } from 'express-validator';

const usersValidation = () => {
  return [
    body('nom')
      .not()
      .notEmpty()
      .withMessage('Merci de renseignez votre nom')
      .bail()
      .isString()
      .bail()
      .withMessage('Veuillez entrer un nom valide')
      .bail(),
    body('prenom')
      .isString()
      .not()
      .notEmpty()
      .withMessage('Veuillez entrer un prénom valide')
      .bail(),
    body('pseudo')
      .isString()
      .trim()
      .not()
      .notEmpty()
      .withMessage('Veuillez entrer un pseudo valide')
      .bail(),
    body('password')
      .not()
      .notEmpty()
      .custom((value) => {
        return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(value);
      })
      .withMessage('Votre mot de passe ne respecter pas les indications de sécurité')
      .bail(),
    body('adresse')
      .not()
      .notEmpty()
      .escape()
      .trim()
      .bail(),
    body('codePostal')
      .not()
      .notEmpty()
      .isPostalCode('FR')
      .bail(),
    body('telephone')
      .not()
      .notEmpty()
      .isMobilePhone(['fr-FR'])
      .bail(),
    body('email')
      .not()
      .notEmpty()
      .normalizeEmail()
      .isEmail()
      .trim()
      .bail(),
    body('photo')
      .isURL()
      .bail()
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  console.log(extractedErrors);
  return res.status(422).json({
    errors: extractedErrors
  });
};
export { usersValidation, validate };
