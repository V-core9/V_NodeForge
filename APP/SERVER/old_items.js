
//*<[🎹]>> #3 :: Login Page

//? <[⚡]>-> MainURL

v_app.modules.app.get('/login', function (req, res) {
  res.send(' [ /login ] -> login page');
});

//*<[🎹]>> Login Page ALT Links

v_app.modules.app.get('/sign-in', function (req, res) {
  res.send(' [ /sign-in ] ->  login page');
});

//! <[🧯]>> Login Page


//*<[🔀]>> #1 :: ROOT Homepage 
//? <[⚡]>-> MAIN PAGE LINK
v_app.modules.app.get('/', function (req, res) {
  res.send(' [ / ] -> homepage');
});

//*<[ 🔀 ]>> ROOT Homepage ALT Links
v_app.modules.app.get('/index', function (req, res) {
  res.send(' [ /index ] -> homepage');
});

v_app.modules.app.get('/index.html', function (req, res) {
  res.send(' [ /index.html ] -> homepage');
});

v_app.modules.app.get('/home', function (req, res) {
  res.send(' [ /home ] -> homepage');
});

v_app.modules.app.get('/landing', function (req, res) {
  res.send(' [ /landing ] -> homepage');
});
//! <[🧯]>> ROOT Homepage 


//*<[💧]>> #2 :: About the application
//? <[⚡]>-> MainURL
v_app.modules.app.get('/about', function (req, res) {
  res.send(' [ /about ] -> about page');
});

//*<[🎹]>> About the application ALT Links
v_app.modules.app.get('/about_app', function (req, res) {
  res.send(' [ /about_app ] ->  about page');
});

v_app.modules.app.get('/about_app.html', function (req, res) {
  res.send(' [ /about_app.html ] ->  about page');
});

v_app.modules.app.get('/home', function (req, res) {
  res.send(' [ /about_us ] ->  about page');
});

v_app.modules.app.get('/landing', function (req, res) {
  res.send(' [ /more-info ] ->  about page');
});
//! <[🧯]>> About the application





// #4
//*<[💧]>> ERR404 Page

//? <[⚡]>-> MainURL
v_app.modules.app.get('/404', function (req, res) {
  res.send(' [ /404 ] -> ERR404 page');
});

//*<[🎹]>> ERR404 Page ALT Links
v_app.modules.app.get('/404-error', function (req, res) {
  res.send(' [ /s404-error ] ->  ERR404 page');
});

//! <[🧯]>> ERR404 Page



// #5
//*<[💧]>> V-core9 Application Main Page 

//? <[⚡]>-> MainURL
v_app.modules.app.get('/v_app', function (req, res) {
  res.send(' [ /v_app ] -> Application Main page');
});

//*<[🎹]>> V-core9 Application Main Page ALT Links
v_app.modules.app.get('/V-core9', function (req, res) {
  res.send(' [ /V-core9 ] ->  Application Main page');
});

//! <[🧯]>> V-core9 Application Main Page 

