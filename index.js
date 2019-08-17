
// module.paths.push(process.cwd() + '/src/node_modules/*/');
// console.log(module.paths);

var start_server = require('./src/main/server');
var router = require('./src/route/router');

console.log(process.mianModule);
start_server.start(router.route);