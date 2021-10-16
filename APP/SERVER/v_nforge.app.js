var express = require('express');
var app = express();

//? <🔩>-- ENV Config 
const port = 2525;

//! <[🧯]>-- ENV Config 


// #1
//*<[🔀]>> ROOT Homepage 

  //? <[⚡]>-> MAIN PAGE LINK
  app.get('/', function (req, res) {
    res.send(' [ / ] -> homepage');
  });

  //*<[ 🔀 ]>> ROOT Homepage ALT Links
  app.get('/index', function (req, res) {
    res.send(' [ /index ] -> homepage');
  });

  app.get('/index.html', function (req, res) {
    res.send(' [ /index.html ] -> homepage');
  });

  app.get('/home', function (req, res) {
    res.send(' [ /home ] -> homepage');
  });

  app.get('/landing', function (req, res) {
    res.send(' [ /landing ] -> homepage');
  });

//! <[🧯]>> ROOT Homepage 



// #2
//*<[💧]>> About the application
//? <[⚡]>-> MainURL

  app.get('/about', function (req, res) {
    res.send(' [ /about ] -> about page');
  });

  //*<[🎹]>> About the application ALT Links
  app.get('/about_app', function (req, res) {
    res.send(' [ /about_app ] ->  about page');
  });

  app.get('/about_app.html', function (req, res) {
    res.send(' [ /about_app.html ] ->  about page');
  });

  app.get('/home', function (req, res) {
    res.send(' [ /about_us ] ->  about page');
  });

  app.get('/landing', function (req, res) {
    res.send(' [ /more-info ] ->  about page');
  });

//! <[🧯]>> About the application



// #3
//*<[💧]>> Login Page

  //? <[⚡]>-> MainURL
  app.get('/login', function (req, res) {
    res.send(' [ /login ] -> login page');
  });

  //*<[🎹]>> Login Page ALT Links
  app.get('/sign-in', function (req, res) {
    res.send(' [ /sign-in ] ->  login page');
  });

//! <[🧯]>> Login Page



// #4
//*<[💧]>> ERR404 Page

  //? <[⚡]>-> MainURL
  app.get('/404', function (req, res) {
    res.send(' [ /404 ] -> ERR404 page');
  });

  //*<[🎹]>> ERR404 Page ALT Links
  app.get('/404-error', function (req, res) {
    res.send(' [ /s404-error ] ->  ERR404 page');
  });

//! <[🧯]>> ERR404 Page



// #5
//*<[💧]>> V-core9 Application Main Page 

  //? <[⚡]>-> MainURL
  app.get('/v_app', function (req, res) {
    res.send(' [ /v_app ] -> Application Main page');
  });

  //*<[🎹]>> V-core9 Application Main Page ALT Links
  app.get('/V-core9', function (req, res) {
    res.send(' [ /V-core9 ] ->  Application Main page');
  });

//! <[🧯]>> V-core9 Application Main Page 




//?  ==========================================
//?  ||  And the actual moment of init after appointing all routes   ||
//?  ==========================================

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


//!  ==========================================
//!  ||  And the actual moment of init after appointing all routes   ||
//!  ==========================================

