let rr = require('../index');

rr.verify('http://localhost:3333', {
    client_id: 'you client_id',
    rec: 'your key of request verify code',
    code: 'user input the code',
    client_key: 'your client key'
}).then(console.log, console.error);

/*
{
    text: '/sms/verify',
    data: {
        result: 'failure',
        message: 'EXPIRED',
        code: '4370',
        reqKey: 'rkZTy8KwW'
    },
    time: '2017-08-10 14:21:24'
}

=========================

{
    text: '/sms/verify',
    data: {
        result: 'success',
        message: 'OK',
        code: '4370',
        reqKey: 'rkZTy8KwW'
    },
    time: '2017-08-10 14:24:42'
}
*/