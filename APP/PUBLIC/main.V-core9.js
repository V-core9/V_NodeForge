/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./APP/SOURCE/index.js":
/*!*****************************!*\
  !*** ./APP/SOURCE/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"YEAAA\");\n\nconst V_DOM = __webpack_require__(/*! ../../vModules */ \"./vModules/index.js\")\n\n\n//# sourceURL=webpack://v_node_forge/./APP/SOURCE/index.js?");

/***/ }),

/***/ "./vModules/V_DOM/index.js":
/*!*********************************!*\
  !*** ./vModules/V_DOM/index.js ***!
  \*********************************/
/***/ ((module) => {

eval("const V_DOM = {\n\n  config : {\n    autoinit: false, // true <or> false\n    v_root_name: \"v_root\",\n    v_taskbar_name: \"v_taskbar\",\n    v_sidebar_name: \"v_sidebar\",\n    v_main_name: \"v_main\",\n    v_debugger_name: \"v_debugger\",\n  },\n  constructor() {\n    this.head = this._vsElem(\"head\");\n    this.body = this._vsElem();\n\n    if (this.config.autoinit) {\n      this.init();\n    } else {\n      //console.warn(\"V_DOM.config.autoinit -> SET TO [> FALSE <] \\n NOTICE: Manual trigger of V_DOM.init() is required;\")\n    }\n  },\n\n  __toELEM(elem = null, selector = this.config.v_root_name, position = \"beforeend\") {\n    if (elem === null) {\n      console.warn(\"V_DOM.__toELEM( elem = null <-<][_!_ MUST INCLUDE ELEM VALUE _!_] )\");\n      return false;\n    }\n\n    return this._vsElem(selector).insertAdjacentHTML(position, elem);\n  },\n\n  _vsElem(selector = \"v_root\") {\n    return document.querySelector(selector);\n  },\n\n  _vsToEl(elem = null, selector = this.config.v_root_name) {\n    return this.__toELEM(elem, selector);\n  },\n\n  _vsToElEnd(elem = null, selector = this.config.v_root_name) {\n    return this.__toELEM(elem, selector, \"beforeend\");\n  },\n\n  _vsToElStart(elem = null, selector = this.config.v_root_name) {\n    return this.__toELEM(elem, selector, \"afterbegin\");\n  },\n\n  _vsToElBefore(elem = null, selector = this.config.v_root_name) {\n    return this.__toELEM(elem, selector, \"beforeend\");\n  },\n\n  _vsToElAfter(elem = null, selector = this.config.v_root_name) {\n    return this.__toELEM(elem, selector, \"afterbegin\");\n  },\n\n  newElem(tag = null, content = null, attr = \"\") {\n    // v_customElement -> Open & Close Element Tags\n    if (tag === null) {\n      return false;\n    }\n    return `<${tag} ${attr}>${content}</${tag}>`;\n  },\n\n  $v_root() {\n    this._vsToElStart(\n      this.newElem(\"style\", `* {\n                                    line-height: 1em;\n                                    font-size: 1em;\n                                    margin: 0;\n                                    padding: 0;\n                                    outline: 0;\n                                    transition: 0.5s ease all;\n                                  }\n\n                                  html,\n                                  body {\n                                    min-height: 100%;\n                                    display: flex;\n                                    background: #101010;\n                                    color: #eee0c9;\n                                    font-size: 16px;\n                                    font-family: monospace;\n                                  }\n\n                                  v_root {\n                                    margin: 25px;\n                                    width: calc(100% - 50px);\n                                    height: calc(100% - 50px);\n                                    display: flex;\n                                    position: fixed;\n                                    top: 0;\n                                    left: 0;\n                                    box-shadow: 0 0 125px inset #101525;\n                                    flex-direction: column;\n                                  }\n                                  v_root v_taskbar {\n                                    min-height: 2em;\n                                    box-shadow: 0 0 25px inset green;\n                                  }\n                                  v_root v_main {\n                                    flex: 1;\n                                    box-shadow: 0 0 25px inset red;\n                                  }\n                                  v_root[status=bottom_bar] {\n                                    flex-direction: column-reverse;\n                                  }\n                                  v_root:hover {\n                                    margin: 0;\n                                    width: 100%;\n                                    height: 100%;\n                                  }\n\n                                  v_debugger {\n                                    position: absolute;\n                                    height: 100%;\n                                    width: 50%;\n                                    box-shadow: 0 0 25px inset orange;\n                                    right: -50%;\n                                  }\n                                  v_debugger:hover {\n                                    right: 0;\n                                  }`),\n      \"body\"\n    );\n    this._vsToElEnd(\n      this.newElem(this.config.v_root_name, this.config.v_root_name, 'status=\"bottom_bar\"'),\n      \"body\"\n    );\n  },\n\n  $v_taskbar() {\n    var temporaryElem = this.newElem(this.config.v_taskbar_name, this.config.v_taskbar_name);\n    this._vsToElEnd(temporaryElem);\n  },\n\n  $v_sidebar() {\n    this._vsToElEnd(this.newElem(this.config.v_sidebar_name, this.config.v_sidebar_name));\n  },\n\n  $v_main() {\n    this._vsToElEnd(this.newElem(this.config.v_main_name, this.config.v_main_name));\n  },\n\n  $v_debugger() {\n    this._vsToElEnd(this.newElem(this.config.v_debugger_name, this.config.v_debugger_name));\n  },\n\n  init() {\n    //console.info(\"[> SoCm >> V_DOM.init() << SoCm <]\")\n    this.$v_root();\n    this.$v_taskbar();\n    this.$v_main();\n    this.$v_debugger();\n    //console.info(\"[> EoCm >> V_DOM.init() << EoCm <]\")\n  },\n};\n\nif (!V_DOM.config.autoinit) {\n  //console.info(\"Detected V_DOM -> autoinit to be FALSE. Triggering it manually!\")\n  V_DOM.init();\n}\n\nmodule.exports = V_DOM;\n\n\n//# sourceURL=webpack://v_node_forge/./vModules/V_DOM/index.js?");

/***/ }),

/***/ "./vModules/index.js":
/*!***************************!*\
  !*** ./vModules/index.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n  V_DOM: __webpack_require__(/*! ./V_DOM/ */ \"./vModules/V_DOM/index.js\")\n};\n\n\n//# sourceURL=webpack://v_node_forge/./vModules/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./APP/SOURCE/index.js");
/******/ 	
/******/ })()
;