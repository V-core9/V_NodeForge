
//? <🔩>-- V_Client Application 
const v_app = {};

const V_Client = {

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
        alt_path_list: ["/v_app.html", "/v_client", "/v_client.html"],
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
    compression: require("compression"),

    //? :o> Express server  
    express: require('express'),

    //? :o> Express server  
    app: express(),

    //? :o> Express server  
    fs: require("fs"),

    //? :o> Express server  
    path: require("path"),

    //? :o> Express server  
    os: require("os"),

    //? :o> Express server  
    process: require("process"),

    //? :o> Express server  
    net: require("net"),

  },
  //!<[⛔]>-> - - - - - - - - - - - - - - - -


  //?-<[⚡]{  getAppLocation()  }-> Method for getting app location  :-- - - -
  //* - NOTE :: This will also combine values from config to create web_location $STRING    
  getAppLocation: () => {
    if (v_app.config.web_location === null) {
      var vHelper = v_app.config;
      v_app.config.web_location = `${vHelper.protocol}://${vHelper.host}:${vHelper.port}`;
    }
    return v_app.config.web_location;
  },
  //!<[⚡]>{  getAppLocation()  }-> - - - - - - - - - - - - - - - -


  //?<🎯>> createApplicationRoutes ()  ]-> - - - - - - - - - - - - - - - - 
  //* - NOTE :: Utilizes routes ARRAY from V_Client.data.routes to create application.  
  createAppRoutes: () => {
    v_app.data.routes.forEach(item => {
      //?-> a place where we configure express to use routes
      v_app.modules.app.get(item.path, function (req, res) {
        res.send(`[ ${item.path} ] -> ${item.name}`);
        //*-- Then the alternative routes - - - - -
        if (typeof item.alt_routes !== 'undefined') {
          if (item.alt_routes.length > 0) {
            item.alt_routes.forEach(route => {
              v_app.modules.app.get(route, function (req, res) {
                res.send(`[ ${route} ] -> ${item.name}`);
              });
            });
          } else {
            return false;
          }
        }
      });
    });
  },
  //!<🎯>> createApplicationRoutes ()  ]-> - - - - - - - - - - - - - - - - 


  //?<🚀>> startListening ()  ]-> - - - - - - - - - - - - - - - - 
  startListening: () => {
    v_app.modules.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  },
  //!<🚀>> startListening ()  ]-> - - - - - - - - - - - - - - - - 


  //?-<[🧯]{  init()  }-> A simple way to just initialize app  :-> - - - - - - - - - - - - - - - -
  init: () => {
    console.time("V_APP -> INIT ()");
    v_app.getAppLocation();
    v_app.createAppRoutes();
    v_app.startListening();
    console.timeEnd("V_APP -> INIT ()");
  }
  //!<[🧯]>{  init()  }-> - - - - - - - - - - - - - - - -


};
//! <[🛑]>-- V_Client Application  ]-> - - - - - - - - - - - - - - - -


//?  ==========================================
//?  ||  And the actual moment of init after appointing all routes   ||
//?  ==========================================

v_app.init();

//!  ==========================================
//!  ||  And the actual moment of init after appointing all routes   ||
//!  ==========================================

