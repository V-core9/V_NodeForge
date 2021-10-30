console.log("V_APP_ROOT FILE");

const V_App = {
  config: require("./root_config"),
  options: {},

  data: {},

  vTemplatePrinter: require("./templates"),


  init() {
    console.log(V_App);
    V_App.vTemplatePrinter.addNavigation();
  }
};

if (V_App.config.autostart === true) {
  V_App.init();
}






tryRegister = () => {

  fetch("http://localhost:1000/register", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "pragma": "no-cache",
    },
    "referrer": "http://localhost:1000/register",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `username=${document.querySelector('#usernameRegister').value}&password=${document.querySelector('#passwordRegister').value}&password_confirm=${document.querySelector('#confirmPasswordRegister').value}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });

};

window.tryRegister = tryRegister;



tryLogin = () => {

  fetch("http://localhost:1000/login", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "pragma": "no-cache",
    },
    "referrer": "http://localhost:1000/login",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `username=${document.querySelector('#usernameLogin').value}&password=${document.querySelector('#passwordLogin').value}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });

};

window.tryLogin = tryLogin;
