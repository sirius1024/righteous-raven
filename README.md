# righteous-raven
If you has connection with righteous-raven, you should use it.

## Install

```bash
npm i --save righteous-raven
```

## Send normal short message

```js
var rr = require('righteous-raven');
rr.send('your rr-site endpoint', {
    client_id: 'your rr client_id', // ask sirius<cealer@foxmail.com>
    rec: 'reciver phone number', // e.g. 13800138000
    prefix: 'sign name', // e.g. 爱健康
    template: 'SMS_XXXXXXX', // e.g. SMS_10010010
    params: 'your params for template', // e.g. { username: 'sirius' }
    client_key: 'your client_key' // e.g. ask sirius<cealer@foxmail.com>
})
```

result

```js
{ router: '/sms/send',
  data:
   { Message: 'OK',
     RequestId: 'E83B4954-14F5-464B-A296-31323A2D4D51',
     BizId: '638706602265763884^0',
     Code: 'OK' },
  time: '2017-08-09 16:02:43' 
}
```

## Send verification code

```js
var rr = require('righteous-raven');
rr.code('your rr-site endpoint', {
    client_id: 'your rr client_id', // ask sirius<cealer@foxmail.com>
    code_type: 'NUMBER' //Optional section, NUMBER | CHARACTER | CHARACTER-UPPER | CHARACTER-LOWER | HYBRID, default to 'NUMBER' only',
    code_length: 4, //verification code length, default to 4.
    rec: 'reciver phone number', // e.g. 13800138000
    prefix: 'sign name', // e.g. 爱健康
    template: 'SMS_XXXXXXX', // e.g. SMS_10010010, if you have not special requirement, forget it.
    expired: 300, // seconds of code's expired. default to 300s.
    client_key: 'your client_key' // e.g. ask sirius<cealer@foxmail.com>
})
```

result

```js
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
```

## Verify the code

```js
var rr = require('righteous-raven');
rr.verify('http://localhost:3333', {
    client_id: 'you client_id',
    rec: 'phone number',
    code: 'user input the code',
    client_key: 'your client key'
}).then(console.log, console.error);
```

success result:

```js
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
```

failure result:

```js
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
```

## NOTE
If you verify the code and get 'success', next time you verify the same code and reqKey, you'll get 'CONSUMED' message to know this code has been consumed once.