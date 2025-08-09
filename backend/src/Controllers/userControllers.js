const validator = require('validator');
const bcrypt = require('bcrypt');
const user = require('../Models/userSchema');
const jwt = require('jsonwebtoken');


const registerUser = async(req , res ) => {
    try {
    
        // checking username is present or not
        if (!req?.body?.username)
          return res.status(400).send('username is missing');
    
        // checking email is present or not
        if (!req?.body?.email)
          return res.status(400).send('email is missing');
    
        // checking password is present or not
        if (!req?.body?.password)
          return res.status(400).send('password is missing');
    
    
        const { username, email, password, } = req?.body;
    
        // checking its valid email or not
        if (!validator.isEmail(email))
          return res.status(400).send('invilid email');
    
    
        // checking password length
        if (!password.length >= 5)
          return res.status(400).send('weakPassword');
    
        // checking password strength
        if (!validator.isStrongPassword(password))
          return res.status(400).send('weak password use(@ , A , a , 1) in your password');
    
        // hashing password
        req.body.password = await bcrypt.hash(password, 10);
    
        // registering user in db
        await user.create(req.body);
        res.status(201).send('user registered sucessfully')
    
      }
      catch (err) {
        res.status(400).send(`Error: ${err.message}`);
      }
}
const loginUser = async (req, res) => {
  try {
    if (!req.body?.email)
      return res.status(400).send('email is missing');

    if (!req?.body?.password)
      return res.status(400).send('password is missing');

    const { email, password } = req?.body;

    const userData = await user.findOne({ email });

    if (!userData)
      return res.status(400).send('invilid Credintial');

    const isTrue = await bcrypt.compare(password, userData.password);

    if (!isTrue)
      return res.status(400).send('invilid Credintial');

    const token = jwt.sign({ _id: userData._id, username: userData.username, email: userData.email }, process.env.JWT_PRIVATE_KEY , { expiresIn: "10h" });

    res.cookie('token', token);



    res.status(200).send(userData);






  }
  catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
}




module.exports = {registerUser , loginUser};