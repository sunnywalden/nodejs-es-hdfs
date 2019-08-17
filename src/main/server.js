// console.log(module.paths);
var http = require('http');
// var express = require('express');
// var router = require('../route/router');


function start (route) {
    function onRequest(request, response) {
        var res_info = route(request);
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(res_info);
        response.end();
        console.log('Debug response info ' + res_info);

    };


    http.createServer(onRequest).listen(9666);


// 终端打印如下信息
    console.log('Elasticsearch server running at http://127.0.0.1:9666/');
};

exports.start = start;