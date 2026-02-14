import express from "express"

const app = express();
const PORT = 5000
 

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


//what is the different between node and express?
//Node.js	                              -                Express.js
//Runtime environment	                  -                 Framework
//Runs JavaScript outside                 -     browser	Built on top of Node
//Provides core modules (http, fs, path)  -   	Makes server building easier
//More low-level	                      -      High-level & simple

//Node = Engine
// Express = Helper framework

//what is .env?
//.env file stores secret or configuration data.
//Example:
//PORT=5000
//DB_PASSWORD=123456
// We use package:

//npm install dotenv
//In server:
require("dotenv").config();
console.log(process.env.PORT);

//Why?
// 1 Hide passwords
// 2 Change environment easily
// 3 Secure configuration

//what is listen()
app.listen(5000)
//It starts the server
// It tells server to listen for requests on a port
//Without listen() → Server will not run.

// what is express?
//express is a Node.js web framework used to build:
//Web servers
//APIs
//Backend applications
//It simplifies routing and handling HTTP requests.

//why we use express?
//Without Express (using Node http module):
//const http = require("http");
//It becomes long and complex.
//With Express:
//Easy routing
//Middleware support
//Clean structure
//Faster development
//REST API building easy


