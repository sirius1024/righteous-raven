const utils = require('./utils/encrypt');
var rp = require('request-promise');

module.exports = {
    send: async (endpoint, data) => {
        let postData = {
            app_id: data.app_id,
            rec: data.rec,
            prefix: data.prefix,
            template: data.template,
            params: data.params
        };
        let sign = utils.encrypt(postData, data.app_key);

        postData.sign = sign;


        let options = {
            method: 'POST',
            uri: `${endpoint}/sms/send`,
            body: postData,
            json: true
        };
        console.log(options);
        let rst = await rp(options);
        return rst;
    }
}