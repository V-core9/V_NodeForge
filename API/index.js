
///var express = require('express');
///var app = module.exports = express();
///var cookieParser = require('cookie-parser');

//?====================================
//?||<[ ⚡ ]>-> V_API  ::  main_application_object         ||
//?====================================
const V_API = {
  app: null,

  cfg: {
    show_forms_dev: true,
    cookieParserSecret: "YEA_MY_SUPER_SECRET_PHRASE",
    cookieMaxAge: 60000
  },

  //!<⛔>-> Error Messages for V_API to use  ]>- - - - - - - - - - 
  errorTypes: {
    200: {
      errorNumber: 200,
      message: "Success"
    },

    400: {
      errorNumber: 400,
      message: "Validation Errors"
    },

    401: {
      errorNumber: 401,
      message: "Authorization Errors"
    },

    500: {
      errorNumber: 500,
      message: "Server Errors"
    }
  },
  //- - - - - - - - - - - - - - - 

  //*<🧹>-> Space to load modules from node. ]>- - - - - - - - - - 
  modules: {
    express: null,
    cookieParser: null,
    fs: null,
    isOnline: null,
    path: null
  },
  //- - - - - - - - - - - - - - - 

  //?<🚀>-> Load Node Modules as part of the application object. ]>- - - - - - - - - - 
  loadModules: () => {
    V_API.modules.path = require("path");
    V_API.modules.fs = require('fs');
    V_API.modules.express = require('express');
    V_API.modules.cookieParser = require('cookie-parser');
    V_API.modules.isOnline = require('is-online');
  },
  //- - - - - - - - - - - - - - - 

  //?<📑>-> Getting UserAgent From Request ]>- - - - - - - - - - 
  userAgent: (req, res, next) => {
    req.userAgent = req.headers['user-agent'];
    next();
  },
  //- - - - - - - - - - - - - - - 


  //?<⌚>-> Request Timestamp ]>- - - - - - - - - - 
  reqTimestamp: (req, res, next) => {
    req.timestamp = Date.now();
    next();
  },
  //- - - - - - - - - - - - - - - 

  //?<📜>-> Data from Request ]>- - - - - - - - - - 
  reqData: (req, res, next) => {
    res.data = {
      req: {
        requestTime: req.requestTime,
        userAgent: req.userAgent,
        app: req.app,
        baseUrl: req.baseUrl,
        body: req.body,
        cookies: req.cookies,
        fresh: req.fresh,
        host: req.host,
        hostname: req.hostname,
        ip: req.ip,
        ips: req.ips,
        method: req.method,
        originalUrl: req.originalUrl,
        params: req.params,
        path: req.path,
        protocol: req.protocol,
        query: req.query,
        route: req.route,
        secure: req.secure,
        signedCookies: req.signedCookies,
        stale: req.stale,
        subdomains: req.subdomains,
        xhr: req.xhr,
      }
    };
    next();
  },

  //?<🧭>-> App Routing Method  ]>- - - - - - - - - - 
  setupRouting: () => {

    // parses request cookies, populating
    // req.cookies and req.signedCookies
    // when the secret is passed, used
    // for signing the cookies.
    V_API.app.use(V_API.modules.cookieParser(V_API.cfg.cookieParserSecret));

    // parses x-www-form-urlencoded
    V_API.app.use(V_API.modules.express.urlencoded({ extended: false }));


    //*------------------
    V_API.app.get('/logout', function (req, res) {
      res.clearCookie('username');
      res.redirect('back');
    });

    //*------------------
    V_API.app.get('/login', function (req, res) {
      if (req.cookies.username) {

        res.send(`<h2>LOGIN SUCCESS :)</h2><p>Click to <a href="/logout">LOGOUT</a>!</p> <p>Login Details:  ${JSON.stringify(req.cookies)} </p>`);
      } else {
        res.send(`
    <form method="post"><p>LOGIN FORM<label>
    <input type="text" name="username"/> Login me</label> 
    <input type="text" name="password"/> Login me</label> 
    <input type="submit" value="Submit"/>.</p></form>
    <h2>Req.Details: ${JSON.stringify(V_API.loadModules.toString())} <h2>`);
      }

    });

    //*------------------
    V_API.app.post('/login', function (req, res) {
      if (req.body.username && req.body.password) res.cookie('username', req.body.username, { maxAge: V_API.cfg.cookieMaxAge });
      res.redirect('back');
    });

    //*------------------
    V_API.app.get('/register', function (req, res) {
      if (req.cookies.username) {
        res.send('You are already registered & Logged In! Go to <a href="/dashboard">app dashboard</a>!.' + JSON.stringify(req.cookies));
      } else {
        res.send(`<form method="post"><p>Register New User <label>
    Username <input type="text" name="username"/></label> 
    Password <input type="text" name="password"/></label> 
    Confirm Password <input type="text" name="password_confirm"/></label> 
    <input type="submit" value="Submit"/>.</p></form>
    <h2>Req.Details: ${JSON.stringify(V_API.app)} <h2>`);
      }
    });

    //*------------------
    V_API.app.post('/register', function (req, res) {
      console.log(req.body);
      var reqUsername = (req.body.username) ? req.body.username : null;
      var isValidUsername = ( reqUsername !== 'undefined') ? V_Users.isValidUsername(reqUsername) : false;
      var isValidPassword = (req.body.password !== null && req.body.password === req.body.password_confirm) ? V_Users.isValidPassword(req.body.password) : false;

      if (isValidUsername === true && isValidPassword === true) {
        console.log(`User Inputs Validation Complete. Status isValidUsername ${isValidUsername}  ::  isValidPassword ${isValidPassword}`);
        var pathToUse = V_Users.dataDir + "/" + reqUsername;
        console.log( createNewDirectory(pathToUse ) );
        //res.cookie('username', req.body.username, { maxAge: V_API.cfg.cookieMaxAge });
        //res.redirect('back');
        res.setHeader("Content-Type", "")
      } else {
        res.send(`<h2>ERROR : Register FAILED </h2><p> Status isValidUsername ${isValidUsername}  ::  isValidPassword ${isValidPassword}</p> `);
      }

    });




    //*------------------
    if (!module.parent) {
      V_API.app.listen(1000);
      console.log('Express started on port 1000');
    }

  },
  //- - - - - - - - - - - - - - - 

  //?<🔥>-> INIT....Ignite this thing   ]>- - - - - - - - - - 
  init: () => {
    V_API.loadModules();
    V_API.app = V_API.modules.express();
    V_API.setupRouting();
    V_API.app.use(V_API.reqTimestamp);
    V_API.app.use(V_API.userAgent);
    V_API.app.use(V_API.reqData);
  }
  //- - - - - - - - - - - - - - - 
};

V_API.init();
//!<[ ⚡ ]>-> V_API  ::  main_application_object   ]>- - - - -



//?====================================
//?||<[ 🤵 ]>-> V_Users  ::  users module solution          ||
//?====================================
const V_Users = {
  cfg: {
    username: {
      minLength: 4,
      maxLength: 50,
      acceptChars: "[a-z_\-\s0-9\.]"
    },
    password: {
      minLength: 6,
      maxLength: 50,
      acceptChars: "[a-z_\-\s0-9\.]"
    }
  },

  dataDir: "../uData/users",
  isUnique: (username = null) => {
    if (username === null) return false;
    // check if directory exists
    var pathToCheck = V_Users.dataDir + "/" + username;
    //var isUniqueUsername = directoryExists(pathToCheck);
    //console.log(`UniqueUsername : ${isUniqueUsername}`);
    return (directoryExists(pathToCheck)) ? true : false;
  },

  isValidUsername: (username = null) => {
    if (username === null) return false;
    var validUsername = true;
    console.log(`Still Valid? ==> ${validUsername}`);
    validUsername = V_Users.isUnique(username);
    console.log(`Unique? ==> ${validUsername}`);
    if (username.length < V_Users.cfg.username.minLength || username.length > V_Users.cfg.username.maxLength) validUsername = false;
    console.log(`Length? ==> ${validUsername}`);
    const regex = new RegExp(V_Users.cfg.username.acceptChars);
    if (regex.test(username) !== true) validUsername = false;
    console.log(`Regex? ==> ${validUsername}`);
    return validUsername;
  },


  isValidPassword: (password = null) => {
    if (password !== null && password.length > V_Users.cfg.password.minLength && password.length < V_Users.cfg.password.maxLength) return true;
    return false;
  }
};
//!<[ 🤵 ]>-> V_Users  ::  users module solution ]>- - - - -


//*<[ 🔁 ]>-> Helpers / Multipurpose Function/Modules
async function directoryExists(path) {
  return await V_API.modules.fs.access(path, (error) => {
    console.log(`Directory ${error ? 'does not exist' : 'exists'}`);
    if (error) {
      return false;
    } else {
      return true;
    }
  });
}


async function createNewDirectory(pathToUse ) {
  return await V_API.modules.fs.mkdir(V_API.modules.path.join(__dirname , pathToUse ) , (error) => {
    if (error) {
      console.warn(error);
      return false;
    }
    console.log('Directory created successfully!');
    return true;
  });
}
//*<[ 🔁 ]>-> Helpers  ]>- - - - - - - - - - - - - - -
