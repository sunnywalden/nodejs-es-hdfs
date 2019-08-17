// var json = require("");

function main(url) {
    console.log('ES main func, request for ' + url);

    var res = JSON.stringify({"res": "success", "info": "Returned by ES API"});
    return  res;
}

exports.main = main;