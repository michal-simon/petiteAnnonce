import { body, validationResult } from 'express-validator';

const usersValidation = () => {
  return [
    body('nom')
      .not()
      .notEmpty()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.nom.empty', { value, location, path });
      })
      .bail()
      .isString()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.nom.valide', { value, location, path });
      })
      .bail(),
    body('prenom')
      .not()
      .notEmpty()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.prenom.empty', { value, location, path });
      })
      .bail()
      .isString()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.prenom.valide', { value, location, path });
      })
      .bail(),
    body('pseudo')
      .not()
      .notEmpty()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.pseudo.empty', { value, location, path });
      })
      .bail()
      .isString()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.pseudo.valide', { value, location, path });
      })
      .trim()
      .bail(),
    body('password')
      .not()
      .notEmpty()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.password.empty', { value, location, path });
      })
      .bail()
      .custom((value) => {
        return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(value);
      })
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.password.valide', { value, location, path });
      })
      .bail(),
    body('adresse')
      .not()
      .notEmpty()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.adresse.empty', { value, location, path });
      })
      .bail()
      .escape()
      .trim(),
    body('codePostal')
      .not()
      .notEmpty()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.codePostal.empty', { value, location, path });
      })
      .bail()
      .isPostalCode('FR')
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.codePostal.valide', { value, location, path });
      })
      .bail(),
    body('telephone')
      .not()
      .notEmpty()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.telephone.empty', { value, location, path });
      })
      .bail()
      .isMobilePhone(['fr-FR'])
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.telephone.valide', { value, location, path });
      })
      .bail(),
    body('email')
      .not()
      .notEmpty()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.email.empty', { value, location, path });
      })
      .bail()
      .normalizeEmail()
      .isEmail()
      .withMessage((value, { req, location, path }) => {
        return req.t('validation.email.valide', { value, location, path });
      })
      .trim()
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
  return res.status(422).json({
    errors: extractedErrors
  });
};
export { usersValidation, validate };
