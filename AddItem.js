var request = require('request');
const PROXY = true;
const BASE_URL = 'http://www.pepperplate.com';
const ADD_ITEM_URL = '/shopping/realtime/additem';
const REMOVE_UNGROUPED_ITEM_URL = '/shopping/realtime/removeungroupeditem';
const REMOVE_GROUPED_ITEM_URL = '/shopping/realtime/removegroupeditem';
const COOKIE = '_ga=GA1.2.1551854996.1531064253; _gid=GA1.2.470930438.1531064253; ga_cookie_geo=US; _pubcid=ba39cc81-c741-4337-8c23-7cad5b1e7574; .ASPXAUTH=CB9EA9E281925CEBFAFDF00109853A9577E78A8636DE3364B7DFFC6FC2A79537BD863F49BB4E87DC1489EF3D52DEC283C9640ADB67480003F136E7A197E3EC9D4E950589F834D219B8F95B4F8B673F75B4B29ED0E4D5B2E99216A9AA55D9C2DF0D62B9EBBB95338348CFFA603966BB4D53A0213CF1E3523BFF1D802F50F2791BA5C09E70DCEE96C32C36BA6DFF30C0A8775EC584FF3BF8AF75899330E3AAA469A7E0FFC82A505834ECE3A9551023E945483BC1A5AF77DD940A36D9794F792E016C46622BE0909CCB7338D9150A12C5AEC35E684F7FD53C0F483460B7975B9B8C341C15FD32567DDEA65E700B32EEA2CD2A7CC9FCBEA566ECEC427C789B16514742F78B59B917375196954308DA43CAF467DDD54C3CCD8AA96B8046EC43167565; pprsort=sort=1&ascend=0';
let addItemBody = {
    MessageType: 'addItem',
    Text: 'Currenttimeasdfasdfasdfasdf'
};
let options = {
    url: `${BASE_URL}${ADD_ITEM_URL}`,
    // json: true,
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9:',
        'Content-Length': '42',
        'Content-Type': 'application/json; charset=UTF-8',
        'Cookie': COOKIE,
        'Host': 'www.pepperplate.com',
        'Origin': 'http://www.pepperplate.com',
        'Proxy-Connection': 'keep-alive',
        'Referer': 'http://www.pepperplate.com/shopping/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    },
    form: addItemBody
};

if (PROXY) {
    // options.path = 'http://' + options.host + ':' + options.port + options.path;
    // options.headers.host = options.host;
    // options.host = '127.0.0.1';
    // options.port = 8888;
    options.proxy = 'http://127.0.0.1:8888';
}
console.log(options.form);
request.post(options, function(error, response, body) {
    // console.log(error);
    // console.log(response);
    // console.log(body.Item.Text);
    let bodyObj = JSON.parse(body);
    console.log(bodyObj.Item.Text);
});
