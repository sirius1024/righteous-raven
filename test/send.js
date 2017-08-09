let rr = require('../index');

rr.send('http://localhost:3333', {
    client_id: '你的client_id',
    rec: '接受者手机号',
    prefix: 'sign name',
    template: 'SMS_XXXXXXX',
    params: { username: 'sirius' },
    client_key: '你的client_key'
}).then(console.log, console.error)



/*
{ router: '/sms/send',
  data:
   { Message: 'OK',
     RequestId: 'E83B4954-14F5-464B-A296-31323A2D4D51',
     BizId: '638706602265763884^0',
     Code: 'OK' },
  time: '2017-08-09 16:02:43' 
}
*/