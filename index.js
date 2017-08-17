const utils = require('./utils/encrypt');
var rp = require('request-promise');

module.exports = {
    send: async function (endpoint, data) {
        let postData = {
            client_id: data.client_id,
            rec: data.rec,
            prefix: data.prefix,
            template: data.template,
            params: data.params
        };
        let sign = utils.encrypt(postData, data.client_key);

        postData.sign = sign;


        let options = {
            method: 'POST',
            uri: `${endpoint}/sms/send`,
            body: postData,
            json: true
        };
        let rst = await rp(options);
        return rst;
    },
    code: async function (endpoint, data) {
        let postData = data;
        let sign = utils.encrypt(postData, data.client_key);

        postData.sign = sign;
        delete postData.client_key;
        let options = {
            method: 'POST',
            uri: `${endpoint}/sms/code`,
            body: postData,
            json: true
        }
        let rst = await rp(options);
        return rst;
    },
    verify: async function (endpoint, data) {
        let postData = data;
        let sign = utils.encrypt(postData, data.client_key);

        postData.sign = sign;
        delete postData.client_key;
        let options = {
            method: 'POST',
            uri: `${endpoint}/sms/verify`,
            body: postData,
            json: true
        }
        let rst = await rp(options);
        return rst;
    }
}