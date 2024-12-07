const http = require("http");
const app = require("./app");
const port = process.env.PORT||3000;
const connectdb = require("./db/db");

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    connectdb();
});