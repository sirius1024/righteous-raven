let rr = require('../index');

rr.code('http://localhost:3333', {
    client_id: 'your client id',
    rec: 'send to..',
    prefix: 'sms prefix like 【xxx】',
    client_key: 'your client key'
}).then(console.log, console.error)

/*
{
    router: '/sms/code',
    data: {
        rec: '13800138000',
        prefix: '爱健康',
        reqKey: 'rkZTy8KwW', // This is important, you need record and use it to verify the code.
        extends: {
            expired: 300
        }
    },
    time: '2017-08-10 11:15:05'
}
*/