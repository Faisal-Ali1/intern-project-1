const validator = require('validator');

const user_validate = (req, res, next) => {

  try {
    if (!req.body?.email)
      return res.status(400).send('email is missing');

    if (!validator.isEmail(req?.body?.email)) {
      return res.status(400).send('invalid email');
    }


    if (!req?.body?.password)
      return res.status(400).send('password is missing');

    if (!req?.body?.password.length >= 5)
      return res.status(400).send('weak Password');

     if (!validator.isStrongPassword(req?.body?.password))
      return res.status(400).send('weak password');


     next();
  }
  catch (err) {
    return res.status(400).send(`Error: ${err.message}`);
  }
}


module.exports = user_validate;