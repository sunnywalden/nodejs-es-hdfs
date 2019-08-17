var es_server = require('../es');
var hdfs_server = require('../hdfs');
var url = require('url');

function route(request) {
    var path_name = url.parse(request.url).pathname;
    console.log('Request for ' + path_name + " received");
    console.log("About to route a request for " + path_name);
    if (path_name.startsWith('/es')) {
        res_info = es_server.main(request.url);
    }
    else if (path_name.startsWith('/hdfs')) {
        res_info = hdfs_server.main(request.url);
    }
    else {
        console.log('Only deal with request of es or hdfs');
    }
    return res_info;
}

exports.route = route;