const crypto = require('crypto');

function md5(str) {
    let md5Encry = crypto.createHash('md5');
    return md5Encry.update(str).digest('hex');
}
module.exports = {
    encrypt: function (data, key) {
        let keys = Object.keys(data).sort();
        let encryStr = '';
        //顺序排列
        keys.forEach(k => {
            if (k != 'sign' && k != 'client_key') {
                let v = data[k];
                if (typeof (v) !== 'string') {
                    v = JSON.stringify(v);
                }
                encryStr += `${k}=${v}&`;
            }
        });
        encryStr += "key=" + key;
        return md5(encryStr);
    }
}