const routers = require('./routers')
console.log(routers)
const http = require("http");
const routeHandler = require('./routers');
const server = http.createServer(routeHandler);

server.listen(8000)
