const jwt = require('jsonwebtoken');
const user = require('../Models/userSchema');

const user_auth = async(req , res , next) => {
    try{
        const { token} = req.cookies;
        
        if(!token)
            return res.status(400).send('token is missing');

        // console.log(token);
        
        const payload = jwt.verify(token , process.env.JWT_PRIVATE_KEY);
        // console.log(decode);

        const { _id } = payload;
        // console.log(payload);
        

        const userData = await user.findById(_id);

        if(!userData)
            return res.status(400).send('invalid user');

        req.result = userData;






        next();
        
    }
    catch(err){
        res.status(400).send(`Error: ${err.message}`);
    }
}

module.exports = user_auth;