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



const vNetworkMapper = {
  
  config:{
    default_api:{
      protocol: "http",
      location: [ "localhost", "127.1.1.1", "192.168.1.40"],
      port: 1000,
      path: ""
    }
  },

  options: {  },

  data: {  },

  getCurrentConnectionInfo(){
    console.log( window.location.href ) ;
    console.log( window.location.hostname) ;
    console.log( window.location.pathname) ;
    console.log( window.location.protocol)  ;
    //console.log( window.location.assign());
  },

  getApiHostname(){
    if (vNetworkMapper.config.default_api.location.includes(window.location.hostname)){
      return window.location.hostname;
    } 
    return false;
  },

  getApiURL(){
    var hostname = vNetworkMapper.getApiHostname();

    if (!hostname){
      return false;
    }

    return `${vNetworkMapper.config.default_api.protocol}://${hostname}:${vNetworkMapper.config.default_api.port}`;
  }
};


tryRegister = () => {
  vNetworkMapper.getCurrentConnectionInfo();
  fetch(vNetworkMapper.getApiURL()+"/register", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "pragma": "no-cache",
    },
    "referrer": vNetworkMapper.getApiURL()+"/register",
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

tryLogin = () => {
  fetch(vNetworkMapper.getApiURL()+"login", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "pragma": "no-cache",
    },
    "referrer": vNetworkMapper.getApiURL()+"login",
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

window.tryRegister = tryRegister;
window.tryLogin = tryLogin;
