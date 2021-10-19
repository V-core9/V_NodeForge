const V_DOM = {

  config : {
    autoinit: false, // true <or> false
    v_root_name: "v_root",
    v_taskbar_name: "v_taskbar",
    v_sidebar_name: "v_sidebar",
    v_main_name: "v_main",
    v_debugger_name: "v_debugger",
  },
  constructor() {
    this.head = this._vsElem("head");
    this.body = this._vsElem();

    if (this.config.autoinit) {
      this.init();
    } else {
      //console.warn("V_DOM.config.autoinit -> SET TO [> FALSE <] \n NOTICE: Manual trigger of V_DOM.init() is required;")
    }
  },

  __toELEM(elem = null, selector = this.config.v_root_name, position = "beforeend") {
    if (elem === null) {
      console.warn("V_DOM.__toELEM( elem = null <-<][_!_ MUST INCLUDE ELEM VALUE _!_] )");
      return false;
    }

    return this._vsElem(selector).insertAdjacentHTML(position, elem);
  },

  _vsElem(selector = "v_root") {
    return document.querySelector(selector);
  },

  _vsToEl(elem = null, selector = this.config.v_root_name) {
    return this.__toELEM(elem, selector);
  },

  _vsToElEnd(elem = null, selector = this.config.v_root_name) {
    return this.__toELEM(elem, selector, "beforeend");
  },

  _vsToElStart(elem = null, selector = this.config.v_root_name) {
    return this.__toELEM(elem, selector, "afterbegin");
  },

  _vsToElBefore(elem = null, selector = this.config.v_root_name) {
    return this.__toELEM(elem, selector, "beforeend");
  },

  _vsToElAfter(elem = null, selector = this.config.v_root_name) {
    return this.__toELEM(elem, selector, "afterbegin");
  },

  newElem(tag = null, content = null, attr = "") {
    // v_customElement -> Open & Close Element Tags
    if (tag === null) {
      return false;
    }
    return `<${tag} ${attr}>${content}</${tag}>`;
  },

  $v_root() {
    this._vsToElStart(
      this.newElem("style", `* {
                                    line-height: 1em;
                                    font-size: 1em;
                                    margin: 0;
                                    padding: 0;
                                    outline: 0;
                                    transition: 0.5s ease all;
                                  }

                                  html,
                                  body {
                                    min-height: 100%;
                                    display: flex;
                                    background: #101010;
                                    color: #eee0c9;
                                    font-size: 16px;
                                    font-family: monospace;
                                  }

                                  v_root {
                                    margin: 25px;
                                    width: calc(100% - 50px);
                                    height: calc(100% - 50px);
                                    display: flex;
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                    box-shadow: 0 0 125px inset #101525;
                                    flex-direction: column;
                                  }
                                  v_root v_taskbar {
                                    min-height: 2em;
                                    box-shadow: 0 0 25px inset green;
                                  }
                                  v_root v_main {
                                    flex: 1;
                                    box-shadow: 0 0 25px inset red;
                                  }
                                  v_root[status=bottom_bar] {
                                    flex-direction: column-reverse;
                                  }
                                  v_root:hover {
                                    margin: 0;
                                    width: 100%;
                                    height: 100%;
                                  }

                                  v_debugger {
                                    position: absolute;
                                    height: 100%;
                                    width: 50%;
                                    box-shadow: 0 0 25px inset orange;
                                    right: -50%;
                                  }
                                  v_debugger:hover {
                                    right: 0;
                                  }`),
      "body"
    );
    this._vsToElEnd(
      this.newElem(this.config.v_root_name, this.config.v_root_name, 'status="bottom_bar"'),
      "body"
    );
  },

  $v_taskbar() {
    var temporaryElem = this.newElem(this.config.v_taskbar_name, this.config.v_taskbar_name);
    this._vsToElEnd(temporaryElem);
  },

  $v_sidebar() {
    this._vsToElEnd(this.newElem(this.config.v_sidebar_name, this.config.v_sidebar_name));
  },

  $v_main() {
    this._vsToElEnd(this.newElem(this.config.v_main_name, this.config.v_main_name));
  },

  $v_debugger() {
    this._vsToElEnd(this.newElem(this.config.v_debugger_name, this.config.v_debugger_name));
  },

  init() {
    //console.info("[> SoCm >> V_DOM.init() << SoCm <]")
    this.$v_root();
    this.$v_taskbar();
    this.$v_main();
    this.$v_debugger();
    //console.info("[> EoCm >> V_DOM.init() << EoCm <]")
  },
};

if (!V_DOM.config.autoinit) {
  //console.info("Detected V_DOM -> autoinit to be FALSE. Triggering it manually!")
  V_DOM.init();
}

module.exports = V_DOM;
