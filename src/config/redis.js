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
        host: 'redis-19941.crce283.ap-south-1-2.ec2.cloud.redislabs.com',
        // 'redis-16999.c301.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 19941
    }
});

module.exports = redisClient;