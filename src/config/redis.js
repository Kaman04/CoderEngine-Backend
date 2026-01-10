const { createClient }  = require('redis');

// const redisClient = createClient({
//     username: 'default',
//     password: process.env.REDIS_PASS,
//     socket: {
//         host: 'redis-19564.crce206.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 19564
//     }
// });

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-16999.c301.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 16999
    }
});

module.exports = redisClient;