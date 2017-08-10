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
rr.send('your rr-site endpoint', {
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