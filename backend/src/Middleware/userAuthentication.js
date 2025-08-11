const jwt = require('jsonwebtoken');
const user = require('../Models/userSchema');
const client = require('../config/redis');

const user_auth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token)
            return res.status(400).send('token is missing');

        const payload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

        const { _id } = payload;

        const isAvail = await client.exists(`token:${token}`);
        // console.log(isAvail);
        

        if (isAvail)
            return res.status(400).send('invalid token');


        const userData = await user.findById(_id);

        if (!userData)
            return res.status(400).send('invalid user');

        req.result = userData;

        next();

    }
    catch (err) {
        res.status(400).send(`Error: ${err.message}`);
    }
}

module.exports = user_auth;