const vTemplatePrinter = {

  navigation : require('./navigation/public'),

  addNavigation () {

    document.querySelector("body").insertAdjacentHTML("afterbegin", vTemplatePrinter.navigation("$ BASIC TITLE SPACE HOLDER"));
  }
};

module.exports = vTemplatePrinter;
