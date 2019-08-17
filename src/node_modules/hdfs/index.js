function main(url) {
    console.log('HDFS main func, request for ' + url);
    return JSON.stringify({"res": "success", "info": "Returned by HDFS API"});
};

exports.main = main;