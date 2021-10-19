//? <🔩>-- V_App Application > - - - - - - - - - - - - - - - -
const vApi = {

  config: {
    protocol: "http",
    host: "localhost",
    port: 2525,
    app_static_folder: "PUBLIC",
    web_location: null
  },

  options: {},

  data: {
    routes: require("./config__routes"),
  },


  //?-<[🌀]>-> Client Application Root Modules :-- - - - - - - - - - - - - - - - - - - - - - - - -  
  modules: {
    //? :o> Express server  
    compression: null,

    //? :o> Express server  
    express: null,

    //? :o> INNER APP  
    app: null,

    //? :o> fileSystem  
    fs: null,

    //? :o> PATH 
    path: null,

    //? :o> OS Info 
    os: null,

    //? :o> Node Process  
    process: null,

    //? :o> Express server  
    net: null,

    //? :o> Cookie Parser/handler
    cookieParser: null,
  },
  //<[⛔]>-> - - - - - - - - - - - - - - - -


  //?<!!!>-> loadAppModules() :: load required node modules :------ - - - - - 
  loadAppModules: () => {
    vApp.modules.compression = require("compression");
    vApp.modules.express = require('express');
    vApp.modules.app = vApp.modules.express();
    vApp.modules.fs = require("fs");
    vApp.modules.path = require("path");
    vApp.modules.os = require("os");
    vApp.modules.process = require("process");
    vApp.modules.net = require("net");
    vApp.modules.cookieParser = require('cookie-parser')
  },
  //<!!!>-> - - - - - - - - - - - - - - - -


  //?-<[⚡]{  getAppLocation()  }-> Method for getting app location  :-- - - -
  //- NOTE :: This will also combine values from config to create web_location $STRING    
  getAppLocation: () => {
    if (vApp.config.web_location === null) {
      var vHelper = vApp.config;
      vApp.config.web_location = `${vHelper.protocol}://${vHelper.host}:${vHelper.port}`;
    }
    return vApp.config.web_location;
  },
  //<[⚡]>{  getAppLocation()  }-> - - - - - - - - - - - - - - - -


  //?<🎯>> createApplicationRoutes ()  ]-> - - - - - - - - - - - - - - - - 
  // - NOTE :: Utilizes routes ARRAY from V_Client.data.routes to create application.  
  createAppRoutes: () => {
    vApp.data.routes.forEach(item => {

      //?-> a place where we configure express to use routes
      vApp.modules.app.get(item.path, function (req, res) {
        res.send(item.do() + `[ ${item.path} ] -> ${item.name}`);
      });

      //*-- Then the alternative routes - - - - -
      if (typeof item.alt_path_list !== 'undefined') {
        if (item.alt_path_list.length > 0) {
          item.alt_path_list.forEach(alt_path => {
            vApp.modules.app.get(alt_path, function (req, res) {
              item.do();
              res.send(`[ ${alt_path} ] -> ${item.name}`);
            });
          });
        } else {
          return false;
        }
      }
    });
  },
  //<🎯>> createApplicationRoutes ()  ]-> - - - - - - - - - - - - - - - - 


  //?<🚀>> startListening ()  ]-> - - - - - - - - - - - - - - - - 
  startListening: () => {
    vApp.modules.app.listen(vApp.config.port, () => {
      console.log(`Example app listening at http://localhost:${vApp.config.port}`);
    });
  },
  //<🚀>> startListening ()  ]-> - - - - - - - - - - - - - - - - 

  //?<💽>> Try to get ENV values ()  ]-> - - - - - - - - - - - - - - - - 
  load_ENV_Settings: () => {
    vApp.config.protocol = (typeof process.env.API_PROTOCOL !== "undefined") ? process.env.API_PROTOCOL : vApp.config.protocol;
    vApp.config.host = (typeof process.env.API_HOST !== "undefined") ? process.env.API_HOST : vApp.config.host;
    vApp.config.port = (typeof process.env.API_PORT !== "undefined") ? process.env.API_PORT : vApp.config.port;
    vApp.config.app_static_folder = (typeof process.env.API_STATIC_FOLDER !== "undefined") ? process.env.API_FOLDER : vApp.config.app_static_folder;
  },
  //<💽>> startListening ()  ]-> - - - - - - - - - - - - - - - - 

  //?-<[🧯]{  init()  }-> A simple way to just initialize app  :-> - - - - - - - - - - - - - - - -
  init: () => {
    console.time("V_APP -> INIT ()");
    vApp.load_ENV_Settings();
    vApp.loadAppModules();
    vApp.getAppLocation();
    vApp.createAppRoutes();
    vApp.startListening();
    console.timeEnd("V_APP -> INIT ()");
  }
  //<[🧯]>{  init()  }-> - - - - - - - - - - - - - - - -

};
//! <[🛑]>-- V_App Application  ]-> - - - - - - - - - - - - - - - -

vApp.init();     //? ⏪ [:  And the actual moment of init after appointing all routes  ]---

module.exports = vApp;
