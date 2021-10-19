console.log("YEAAA SERVER STARTER!!!");


// Rquired things before we run___
require("dotenv").config();
const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


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

const STATIC = path.resolve(__dirname, "PUBLIC");
const INDEX = path.resolve(STATIC, "index.html");
const AppPROTOCOL = (typeof process.env.APP_PROTOCOL !== "undefined") ? process.env.APP_PROTOCOL : "http";
const AppHOST = (typeof process.env.APP_HOST !== "undefined") ? process.env.APP_HOST : "localhost";
const AppPORT = (typeof process.env.APP_PORT !== "undefined") ? process.env.APP_PORT : "3200";
const AppFOLDER = (typeof process.env.APP_FOLDER !== "undefined") ? process.env.APP_FOLDER : "";
let AppURL = `${AppPROTOCOL}://${AppHOST}:${AppPORT}/${AppFOLDER}`;



const app = express();
app.use(bodyParser.json());
// compress all responses
app.use(compression());
// Static content
app.use(express.static(STATIC));
// All GET request handled by INDEX file
app.get("*", function (req, res) {
  res.sendFile(INDEX);
});
// Start server
app.listen(AppPORT, function () {
  console.log("Server up and running on " + AppURL);
});
