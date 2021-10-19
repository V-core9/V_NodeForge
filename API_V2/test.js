
var express = require('express');
var app = module.exports = express();
var cookieParser = require('cookie-parser');



// parses request cookies, populating
// req.cookies and req.signedCookies
// when the secret is passed, used
// for signing the cookies.
app.use(cookieParser('my secret here'));

// parses x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));


//*------------------
app.get('/logout', function (req, res) {
  res.clearCookie('username');
  res.redirect('back');
});

//*------------------
app.get('/login', function (req, res) {
  if (req.cookies.username) {

    res.send('Remembered :). Click to <a href="/logout">forget</a>!.'+ JSON.stringify(req.cookies));
  } else {
    res.send('<form method="post"><p>Check to <label>'
      + '<input type="text" name="username"/> Login me</label> '
      + '<input type="text" name="password"/> Login me</label> '
      + '<input type="submit" value="Submit"/>.</p></form>');
  }
});

//*------------------
app.post('/login', function (req, res) {
  var minute = 60000;
  if (req.body.username && req.body.password) res.cookie('username', req.body.username, { maxAge: minute });
  res.redirect('back');
});

//*------------------
app.get('/register', function (req, res) {
  if (req.cookies.username) {

    res.send('You are already registered :). Go to <a href="/dashboard">app dashboard</a>!.'+ JSON.stringify(req.cookies));
  } else {
    res.send('<form method="post"><p>Register New User <label>'
      + 'Username <input type="text" name="username"/></label> '
      + 'Password <input type="text" name="password"/></label> '
      + 'Confirm Password <input type="text" name="password_confirm"/></label> '
      + '<input type="submit" value="Submit"/>.</p></form>');
  }
});

//*------------------
app.post('/register', function (req, res) {
  var minute = 60000;
  console.log(req.body);
  if (req.body.username && req.body.password !== null && req.body.password === req.body.password_confirm) res.cookie('username', req.body.username, { maxAge: minute });
  res.redirect('back');
});




//*------------------
if (!module.parent) {
  app.listen(1000);
  console.log('Express started on port 1000');
}
