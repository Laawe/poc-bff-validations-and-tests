const { checkSchema, validationResult } = require("express-validator");
const dbmock = require('../models/dbmock.json');

const schema = () => {
  return [
    checkSchema({
      name: { isString: true, isEmpty: false, isLength: {min: 1, max: 10} },
      id: { isNumeric: true, isEmpty: false, custom: {
          options: (value) => {
              if(dbmock.allowedIds.indexOf(value) === -1) {
                  return false;
              }
              return true;
          }
      }},
    }),
  ];
};

const checkMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send(errors);
  }
  return next();
};

module.exports = { schema, checkMiddleware };
