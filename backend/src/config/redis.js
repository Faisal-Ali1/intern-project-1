const { createClient} = require('redis');

    const client = createClient({
    name:'default',
    password: 'kNuPPmNN9Q9uCm3DyDZpnPawoZaVxkN2',   //process.env.REDIS_PASSWORD,
    socket: {
        host: 'redis-13591.crce182.ap-south-1-1.ec2.redns.redis-cloud.com',   //process.env.REDIS_HOST,
        port: 13591,     //process.env.REDIS_PORT
    }
})

// client.connect()
// .then(()=> console.log('connected'))
// .catch((err)=> console.log(err))


module.exports = client;