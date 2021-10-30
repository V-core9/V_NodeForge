console.log("V_APP_ROOT FILE");

const V_App = {
  config : require("./root_config"),
  options : {},

  data: {},

  vTemplatePrinter: require("./templates"),


  init(){
    console.log(V_App);
    V_App.vTemplatePrinter.addNavigation();
  }
};

if (V_App.config.autostart === true) {
  V_App.init();
}
