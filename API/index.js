
///var express = require('express');
///var app = module.exports = express();
///var cookieParser = require('cookie-parser');

/* const cors = require('cors');
app.use(cors({
    origin: 'https://www.section.io'
})); */

//?====================================
//?||<[ ⚡ ]>-> v_api  ::  main_application_object         ||
//?====================================
const v_api = {
  app: null,

  cfg: {
    show_forms_dev: true,
    cookieParserSecret: "YEA_MY_SUPER_SECRET_PHRASE",
    cookieMaxAge: 60000
  },

  //!<⛔>-> ApiStatusCodes Messages for v_api to use  ]>- - - - - - - - - - 
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
    path: null,
    cors: null,
    md5Hash: null
  },
  //- - - - - - - - - - - - - - - 

  //?<🚀>-> Load Node Modules as part of the application object. ]>- - - - - - - - - - 
  loadModules: () => {
    v_api.modules.path = require("path");
    v_api.modules.fs = require('fs');
    v_api.modules.express = require('express');
    v_api.modules.cookieParser = require('cookie-parser');
    v_api.modules.isOnline = require('is-online');
    v_api.modules.cors = require('cors');
    v_api.modules.md5Hash = require(v_api.modules.path.join(__dirname, './helpers/md5'));
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
  async setupRouting() {

    // parses request cookies, populating
    // req.cookies and req.signedCookies
    // when the secret is passed, used
    // for signing the cookies.
    v_api.app.use(v_api.modules.cookieParser(v_api.cfg.cookieParserSecret));

    // parses x-www-form-urlencoded
    v_api.app.use(v_api.modules.express.urlencoded({ extended: false }));


    //*------------------
    v_api.app.get('/logout', function (req, res) {
      res.clearCookie('username');
      res.redirect('back');
    });


    //*------------------
    v_api.app.get('/login', function (req, res) {
      if (req.cookies.username) {

        res.send(`<h2>LOGIN SUCCESS :)</h2><p>Click to <a href="/logout">LOGOUT</a>!</p> <p>Login Details:  ${JSON.stringify(req.cookies)} </p>`);
      } else {
        res.send(`
    <form method="post"><p>LOGIN FORM<label>
    <input type="text" name="username"/> Login me</label> 
    <input type="text" name="password"/> Login me</label> 
    <input type="submit" value="Submit"/>.</p></form>
    <h2>Req.Details: ${JSON.stringify(v_api.loadModules.toString())} <h2>`);
      }

    });


    //*------------------
    v_api.app.post('/login', function (req, res) {
      if (req.body.username && req.body.password) res.cookie('username', req.body.username, { maxAge: v_api.cfg.cookieMaxAge });
      res.send({ status: 200, token: { value: "123qwe456asd789zxc", maxAge: v_api.cfg.cookieMaxAge, timestamp: Date.now() }, username: req.body.username });
      // res.redirect('back');
    });


    //*------------------
    v_api.app.get('/register', function (req, res) {
      if (req.cookies.username) {
        res.send('You are already registered & Logged In! Go to <a href="/dashboard">app dashboard</a>!.' + JSON.stringify(req.cookies));
      } else {
        res.send(`<form method="post"><p>Register New User <label>
    Username <input type="text" name="username"/></label> 
    Password <input type="text" name="password"/></label> 
    Confirm Password <input type="text" name="password_confirm"/></label> 
    <input type="submit" value="Submit"/>.</p></form>
    <h2>Req.Details: ${JSON.stringify(v_api.app)} <h2>`);
      }
    });


    //*------------------
    v_api.app.post('/register', function (req, res) {
      console.log(req.body);
      var reqUsername = (req.body.username) ? req.body.username : null;
      var isValidUsername = (reqUsername !== 'undefined') ? V_Users.isValidUsername(reqUsername) : false;
      var isValidPassword = (req.body.password !== null && req.body.password === req.body.password_confirm) ? V_Users.isValidPassword(req.body.password) : false;

      if (isValidUsername === true && isValidPassword === true) {
        console.log(`User Inputs Validation Complete. Status isValidUsername ${isValidUsername}  ::  isValidPassword ${isValidPassword}`);
        V_Users.registerNewUser(V_Users.dataDir + "/" + reqUsername, req, res);
      } else {
        res.send(`<h2>ERROR : </h2><p> Valid Username ${isValidUsername}  ::  Valid Password ${isValidPassword}</p> `);
      }

    });


    //*------------------
    if (!module.parent) {
      v_api.app.listen(1000);
      console.log('Express started on port 1000');
    }

  },
  //- - - - - - - - - - - - - - - 

  //?<🔥>-> INIT....Ignite this thing   ]>- - - - - - - - - - 
  init: () => {
    v_api.loadModules();
    v_api.app = v_api.modules.express();
    v_api.app.use(v_api.modules.cors({ origin: ['https://localhost:4141', 'https://192.168.1.40:4141', 'https://127.1.1.1:4141', 'http://localhost:4141', 'http://127.1.1.1:4141', 'http://192.168.1.40:4141',] }));
    v_api.setupRouting();
    v_api.app.use(v_api.reqTimestamp);
    v_api.app.use(v_api.userAgent);
    v_api.app.use(v_api.reqData);
  }
  //- - - - - - - - - - - - - - - 
};

v_api.init();
//!<[ ⚡ ]>-> v_api  ::  main_application_object   ]>- - - - -



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

  dataDir: v_api.modules.path.join(__dirname, "../DATA/users"),
  isUnique: (username = null) => {
    if (username === null) return false;
    // check if directory exists
    var pathToCheck = V_Users.dataDir + "/" + username;
    //var isUniqueUsername = V_Users.directoryExists(pathToCheck);
    //console.log(`UniqueUsername : ${isUniqueUsername}`);
    return (V_Users.directoryExists(pathToCheck)) ? true : false;
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

  //? [🎰] Checks if password input is valid entry ]>- - - - - -
  isValidPassword: (password = null) => {
    if (password !== null && password.length > V_Users.cfg.password.minLength && password.length < V_Users.cfg.password.maxLength) return true;
    return false;
  },


  //*<[ 🔁 ]>-> Helpers / Multipurpose Function/Modules
  async directoryExists(path) {
    return await v_api.modules.fs.access(path, (error) => {
      console.log(`Directory ${error ? 'does not exist' : 'exists'}`);
      if (error) {
        return false;
      } else {
        return true;
      }
    });
  },


  async registerNewUser(pathToUse, req, res) {
    return v_api.modules.fs.mkdir(pathToUse, (error) => {
      if (error) {
        console.warn(error);
        res.send(400);
        return false;
      }
      console.log('Directory created successfully!');

      V_Users.createNewUserData(req, res);

    });
  },
  //*<[ 🔁 ]>-> Helpers  ]>- - - - - - - - - - - - - - -

  async createNewUserData(req, res) {
    var json = JSON.stringify({ username: req.body.username, password: v_api.modules.md5Hash(req.body.password), register_ts: Date.now(), user_type: 'customer', first_name: null, last_name: null, email: null, birth_date: null, phone: null });
    return await v_api.modules.fs.writeFile(V_Users.dataDir + "/" + req.body.username + "/profile.json", json, 'utf8', (error) => {
      if (error) {
        console.warn(error);
        res.send(400);
        return false;
      }
      console.log('Profile.json file created successfully!');
      res.send(200);
      return true;
    });
  }
};
//!<[ 🤵 ]>-> V_Users  ::  users module solution ]>- - - - -


module.exports = v_api;
