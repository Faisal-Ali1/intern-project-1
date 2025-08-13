const bcrypt = require('bcrypt');
const user = require('../Models/userSchema');
const jwt = require('jsonwebtoken');
const client = require('../config/redis')


const registerUser = async (req, res) => {
  try {

    // checking username is present or not
    if (!req?.body?.username)
      return res.status(400).send('username is missing');

    const { password } = req?.body;

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

    if (!req?.body?.email)
      return res.status(400).send('email missing');

    if (!req?.body?.password)
      return res.status(400).send('password missing');


    const { email, password } = req?.body;

    const userData = await user.findOne({ email });

    if (!userData)
      return res.status(400).send('invilid Credintial');

    const isTrue = await bcrypt.compare(password, userData.password);

    if (!isTrue)
      return res.status(400).send('invilid Credintial');

    const token = jwt.sign({ _id: userData?._id, username: userData?.username, email: userData?.email }, process.env.JWT_PRIVATE_KEY, { expiresIn: "10h" });

    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 10 }); //10hrs

    const reply = {
      username : userData?.username,
      email: userData?.email,

    }

    res.status(200).json({
      data: reply,
      message: "logged in sucessfully "
    });

  }
  catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
}
const updateUserProfile = async (req, res) => {
  try {

    // const { id } = req?.params;

    if (!req?.body)
      return res.status(400).send('enter data for updation');

    const fields = ["username", "email", "password",];

    let data = [];

    // converting req.body in array
    for (let key in req?.body) {
      data.push(key);
    }

    // checking nothing is in the array except fields
    const a = data.every(item => fields.includes(item));

    if (!a)
      return res.status(400).send(`updation failed -> field is not available`);


    // updating user
    const userData = await user.findByIdAndUpdate(req?.result?._id, { ...req?.body }, { runValidators: true });

    res.status(200).json({
      message: "userData has updated sucessfully",
      userData
    });

  }
  catch (err) {
    res.status(400).send(`Error: ${err.message}`)
  }
}
const logoutUser = async (req, res) => {
  try {
    const { token } = req.cookies;

    // decoding JWT token
    const payload = jwt.decode(token);

    res.cookie('token', null, { expires: new Date(Date.now()) })

    // add token to redis
    client.set(`token:${token}`, 'expired');

    // adding expire time of token in redis
    client.expire(`token:${token}`, payload.exp);


    res.send('logged out sucessfully');

  }
  catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
}
const deleteUser = async (req, res) => {
  try {
    const userData = await user.findByIdAndDelete(req.result._id);

    res.status(200).json({
      message: 'user deleted sucessfully',
      userData
    });
  }
  catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
}
const userCheck = async (req, res) => {
  try {

    const reply = {
      _id: req.result._id,
      username: req.result.username,
      email: req.result.email
    }

    // console.log('working');
    

    res.status(200).json({
      user: reply,
      message: 'valid user'
    });

  }
  catch (err) {
    res.status(400).send(`Error: ${err.message}`)
  }
}

module.exports = { registerUser, loginUser, updateUserProfile, logoutUser, deleteUser, userCheck };