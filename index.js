const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router("db.json");
const middlewares=jsonServer.defaults();
const port=process.env.PORT || 8080; //chosse port form like 8080,3001

server.use(middlewares);
server.use(router);

server.listen(port);