# righteous-raven
If you has connection with righteous-raven, you should use it.

## How
```bash
npm i --save righteous-raven
```

send sms

```js
var rr = require('righteous-raven');
rr.send('your rr-site endpoint', {
    app_id: 'your rr app_id', // ask sirius<cealer@foxmail.com>
    rec: 'reciver phone number', // e.g. 13800138000
    prefix: 'sign name', // e.g. 爱健康
    template: 'SMS_XXXXXXX', // e.g. SMS_10010010
    params: 'your params for template', // e.g. { username: 'sirius' }
    app_key: 'your app_key' // e.g. ask sirius<cealer@foxmail.com>Ï
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