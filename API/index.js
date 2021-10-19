console.log("YEAAA SERVER STARTER!!!");
require("dotenv").config();
const path = require("path");
const compression = require("compression");
const express = require("express");


//> Basic test if in dev mode
if (typeof process.env.NODE_ENV !== "undefined") {
  if (process.env.NODE_ENV === "production") {
    console.log("PRODUCTION MODE");
  } else if (process.env.NODE_ENV === "development") {
    console.log("DEV MODE");
  } else {
    console.log("process.env.NODE_ENV must be present! Available modes are ['production', 'development']");
  }
} else {
  console.log("process.env.NODE_ENV must be present! Available modes are ['production', 'development']");
}
//--------------------

const STATIC = path.join(__dirname, "./PUBLIC");
const INDEX = path.join(STATIC, "index.html");
const API_PROTOCOL = (typeof process.env.API_PROTOCOL !== "undefined") ? process.env.API_PROTOCOL : "http";
const API_HOST = (typeof process.env.API_HOST !== "undefined") ? process.env.API_HOST : "localhost";
const API_PORT = (typeof process.env.API_PORT !== "undefined") ? process.env.API_PORT : "3200";
const API_STATIC_FOLDER = (typeof process.env.API_STATIC_FOLDER !== "undefined") ? process.env.API_FOLDER : "";
let API_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}/${API_STATIC_FOLDER}`;



const api = express();

// compress all responses
api.use(compression());
// Static content
api.use(express.static(STATIC));
// All GET request handled by INDEX file
api.get("*", function (req, res) {
  res.sendFile(INDEX);
});
// Start server
api.listen(API_PORT, function () {
  console.log("Server up and running on " + API_URL);
});
