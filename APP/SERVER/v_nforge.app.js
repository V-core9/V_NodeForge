
//? <🔩>-- V_App Application > - - - - - - - - - - - - - - - -
const vApp = {

  config: {
    protocol: "http",
    host: "localhost",
    port: 2525,
    web_location: null
  },

  options: {},

  data: {
    routes: [

      {
        //? <[⚡]> #1 :: MAIN PAGE LINK   <]-----
        name: "homepage",
        status: "public",
        path: "/",
        alt_path_list: ["/index", "/index.html", "/home", "/landing"],
        do: () => {
          console.log("YEAAAAAAAA =>> homepage");
        }
        //! <[⚡]> - - - - - - - - - - - - - - - - - - - - 
      },

      {
        //?<[💧]>> #2 :: About the application  <]-----
        name: "about_main",
        status: "public",
        path: "/about",
        alt_path_list: ["/about.html", "/about_app", "/about-app", "/about-us", "/more-info", "/more_details"],
        do: () => {
          console.log("YEAAAAAAAA =>> homepage");
        }
        //!<[💧]> - - - - - - - - - - - - - - - - - - - - 
      },


      {
        //?<[🚨]>> #3 :: Login Page         <]-----
        name: "login",
        status: "public",
        path: "/login",
        alt_path_list: ["/login.html", "/sign_in", "/sign_in.html"],
        do: () => {
          console.log("YEAAAAAAAA =>> login");
        }
        //!<[🚨]> - - - - - - - - - - - - - - - - - - - - 
      },

      {
        //?<[🌠]]>> #4 :: Register Page         <]-----
        name: "register",
        status: "public",
        path: "/register",
        alt_path_list: ["/register.html", "/sign-up", "/sign-up.html", "/sign_up", "/new-user", "/register_user", "/new_register", "/new_user", "/new-register", "/register-user"],
        do: () => {
          console.log("YEAAAAAAAA =>> register");
        }
        //!<[🌠]]>> #4 :: Register Page         <]-----
      },

      {
        //?<[🔥]>> #5 :: V_App         <]-----
        name: "v_app",
        status: "public",
        path: "/v_app",
        alt_path_list: ["/vApp.html", "/v_client", "/v_client.html"],
        do: () => {
          console.log("YEAAAAAAAA =>> v_app");
        }
        //!<[🔥]>> #5 :: V_App         <]-----
      },

      {
        //?<[🤠]]>> #6 :: Author Page        <]-----
        name: "V-core9",
        status: "public",
        path: "/V-core9",
        alt_path_list: ["/V-core9.html", "/v-core9", "/v-core9.html", "/V_core9", "/V_core9.html", "/Vc9", "/Vc9.html", "/author", "/author.html", "/main_author", "/main-author", "/main_author.html", "/main-author.html", "/author-main", "/author-main.html"],
        do: () => {
          console.log("YEAAAAAAAA =>> register");
        }
        //!<[🤠]]>> #6 :: Author Page        <]-----
      }

    ],
  },


  //?-<[🌀]>-> Client Application Root Modules :-- - - - - - - - - - - - - - - - - - - - - - - - -  
  modules: {
        //? :o> Express server  
        compression: null  ,
  
        //? :o> Express server  
        express: null,
    
        //? :o> Express server  
        app: null,
    
        //? :o> Express server  
        fs: null,
    
        //? :o> Express server  
        path: null,
    
        //? :o> Express server  
        os: null,
    
        //? :o> Express server  
        process: null,
    
        //? :o> Express server  
        net: null,
      
    },
  //<[⛔]>-> - - - - - - - - - - - - - - - -


  //?<!!!>-> loadAppModules() :: load required node modules :------ - - - - - 
  loadAppModules: () => {
      vApp.modules.compression= require("compression");
      vApp.modules.express= require('express');
      vApp.modules.app= vApp.modules.express();
      vApp.modules.fs= require("fs");
      vApp.modules.path= require("path");
      vApp.modules.os= require("os");
      vApp.modules.process= require("process");
      vApp.modules.net= require("net");
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
        res.send(`[ ${item.path} ] -> ${item.name}`);
        //*-- Then the alternative routes - - - - -
        if (typeof item.alt_path_list !== 'undefined') {
          if (item.alt_path_list.length() > 0) {
            item.alt_path_list.forEach(alt_path => {
              vApp.modules.app.get(alt_path, function (req, res) {
                res.send(`[ ${alt_path} ] -> ${item.name}`);
              });
            });
          } else {
            return false;
          }
        }
      });
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


  //?-<[🧯]{  init()  }-> A simple way to just initialize app  :-> - - - - - - - - - - - - - - - -
  init: () => {
    console.time("V_APP -> INIT ()");
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


