/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://unpkg.com/css.gg@2.0.0/icons/css/sun.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://unpkg.com/css.gg@2.0.0/icons/css/moon.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-light-color: #f7f8de;
    --main-dark-color: #464545;
    --alt-light-color: white;
    --alt-dark-color: rgb(39, 38, 38);
    --font-color: #000000;
    --font-color-light: #ffffff;
    --border-color: #222;
    --border-color-light: #f1f1f1;
    --main-font: 'Lucida Grande', monospace;

    --light: var(--main-light-color);
    --dark: var(--main-dark-color);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 20px;
    line-height: 1.5;
}

body {
    display: grid;
    grid-template-rows: 1fr 8fr;
    height: 100vh;
    width: 100vw;
    font-family: var(--main-font);
    background-color: var(--light);
    color: var(--dark);
    transition: 0.5s;
}

.darkmode {
    --light: var(--main-dark-color);
    --dark: var(--main-light-color);
    --alt-light-color: var(--alt-dark-color);
}

/* Header styling. */

.header {
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr;
    border: 5px solid black;
    transition: opacity 0.8s;
}

.header > div {
    justify-self: center;
    align-self: center;
}

/* Hamburger Styling */

#hamburger {
    display: inline-block;
    cursor: pointer;
    justify-self: start;
    margin-left: 20px;
}

#hamburger:hover {
    background-color: rgba(92, 90, 90, 0.3);
    border-radius: 20%;
}

#bar1,
#bar2,
#bar3 {
    height: 5px;
    width: 35px;
    background-color: var(--dark);
    margin: 6px;
    transition: 0.7s;
}

.change #bar1 { transform: translate(0, 11px) rotate(-45deg); }
.change #bar2 { opacity: 0; }
.change #bar3 { transform: translate(0, -11px) rotate(45deg); }

/* Title styling. */

#title {
    display: flex;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.8rem;
    color: rgb(59, 197, 59);
}

#title > span { color: var(--dark); }

/* Toggle styling. */

#toggleContainer {
    height: 25px;
    justify-self: end;
}

#toggleContainer > button {
    border: none;
    background-color: var(--light);
    color: var(--dark);
    margin-right: 20px;
    background-image: url('https://unpkg.com/css.gg@2.0.0/icons/css/sun.css');
    cursor: pointer;
}

i { transition: 0.8s; }

/* Content styling. */

.content {
    position: relative;
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(740px, 4fr);
    border: 5px solid red;
    background-color: white;
    transition: opacity 0.8s;
}

.hamburgerActive { grid-template-columns: 1fr 4fr; }

/* Hamburger content styling */

#hamburgerContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -100%;
    transition: left 0.8s ease-in-out, background-color 0.5s;
    border: 5px solid purple;
    background-color: var(--light);
}

.hamburgerContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 90%;
    width: 90%;
}

.homeContainer,
.projectContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#home,
#projects {
    font-size: 1.3rem;
    font-weight: bolder;
}

#all, #defaultProject { margin-top: 15px; }

#addProject {
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px;
    font-family: var(--main-font);
    font-size: 0.8rem;
    font-weight: 900;
    background-color: white;
    padding: 5px;
    width: 40%;
    margin-left: 30%;
    flex-wrap: nowrap;
    cursor: pointer;
}

#addProject:active {
    background-color: rgb(216, 216, 216);
}

.homeContainer > div:not(#home),
.projectContainer > div:not(#projects) {
    transition: padding 0.5s ease-in-out;
}

.homeContainer > div:not(#home):hover,
.projectContainer > div:not(#projects):hover {
    padding: 2px;
    background-color: rgba(47, 204, 47, 0.3);
    border-radius: 5%;
}

.homeContainer > div:not(#home):focus,
.projectContainer > div:not(#projects):focus {
    padding: 3px;
    background-color: rgba(47, 204, 47, 0.7);
    border: 3px solid black;
    border-radius: 5%;
}

#home::after,
#projects::after {
    display: block;
    background: var(--dark);
    font-size: 0.1rem;
    content: '.';
}

/* Main content styling */

.mainContent {
    position: absolute;
    background-color: var(--alt-light-color);
    inset: 0%;
    transition: left 0.8s ease-in-out, background-color 0.5s, opacity 0.8s;
    border: 5px solid yellow;
}

.mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 10px;
}

#taskbar {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    height: 80px;
    width: 95%;
    font-size: 1.2rem;
    background-color: rgb(36, 161, 36);
    color: white;
}

#taskDisplay {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85%;
    width: 95%;
    border: 3px solid orange;
}

/* Form Task Styling */

.UITaskContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--main-light-color);
    color: var(--main-dark-color);
    height: 60px;
    width: 95%;
    border: 3px solid black;
    border-radius: 15px;
    font-size: 0.8rem;
}

/* Styling form element. */

.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.8);
}

.modalContent {
    display: grid;
    grid-template-rows: 1fr 2fr 2fr 1fr;
    background-color: #e4e2e2;
    margin: 15% auto;
    border: 3px solid #888;
    padding: 20px;
    border-radius: 10px;
    height: 290px;
    width: 400px;
    font-size: 0.8rem;
    font-weight: 500;   
}

.closeContainer {
    display: flex;
    justify-content: end;
    align-self: start;
    margin-top: -20px;
}

.formTitleContainer {
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

#formTitle {
    border: 4px solid rgb(0, 0, 0);
    padding: 5px;
    background-color: rgb(41, 175, 0);
    color: white;
}

#close {
    font-size: 1.6rem;
    font-weight: 900;
    cursor: pointer;
}

.topElementContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 800;
}

.bottomElementContainer {
    display: flex;
    font-weight: 800;
    gap: 51px;
}

.submitContainer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

#submit {
    border: 3px solid rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    padding: 5px;
    color: rgb(255, 255, 255);
    font-weight: 900;
    border-radius: 10px;
    cursor: pointer;
}

#description { height: 70px; }

input,
textarea,
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: white;
    border: 2px solid #333;
    border-radius: 0.25rem;
    padding: 5px;
    margin: 0;
    box-sizing: border-box;
}

label { display: block; }
.hidden { display: none; }
.templateReset { grid-template-columns: 1fr; }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://unpkg.com/css.gg@2.0.0/icons/css/sun.css');\n@import url('https://unpkg.com/css.gg@2.0.0/icons/css/moon.css');\n\n:root {\n    --main-light-color: #f7f8de;\n    --main-dark-color: #464545;\n    --alt-light-color: white;\n    --alt-dark-color: rgb(39, 38, 38);\n    --font-color: #000000;\n    --font-color-light: #ffffff;\n    --border-color: #222;\n    --border-color-light: #f1f1f1;\n    --main-font: 'Lucida Grande', monospace;\n\n    --light: var(--main-light-color);\n    --dark: var(--main-dark-color);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 20px;\n    line-height: 1.5;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n    height: 100vh;\n    width: 100vw;\n    font-family: var(--main-font);\n    background-color: var(--light);\n    color: var(--dark);\n    transition: 0.5s;\n}\n\n.darkmode {\n    --light: var(--main-dark-color);\n    --dark: var(--main-light-color);\n    --alt-light-color: var(--alt-dark-color);\n}\n\n/* Header styling. */\n\n.header {\n    display: grid;\n    width: 100vw;\n    grid-template-columns: 1fr 1fr 1fr;\n    border: 5px solid black;\n    transition: opacity 0.8s;\n}\n\n.header > div {\n    justify-self: center;\n    align-self: center;\n}\n\n/* Hamburger Styling */\n\n#hamburger {\n    display: inline-block;\n    cursor: pointer;\n    justify-self: start;\n    margin-left: 20px;\n}\n\n#hamburger:hover {\n    background-color: rgba(92, 90, 90, 0.3);\n    border-radius: 20%;\n}\n\n#bar1,\n#bar2,\n#bar3 {\n    height: 5px;\n    width: 35px;\n    background-color: var(--dark);\n    margin: 6px;\n    transition: 0.7s;\n}\n\n.change #bar1 { transform: translate(0, 11px) rotate(-45deg); }\n.change #bar2 { opacity: 0; }\n.change #bar3 { transform: translate(0, -11px) rotate(45deg); }\n\n/* Title styling. */\n\n#title {\n    display: flex;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size: 1.8rem;\n    color: rgb(59, 197, 59);\n}\n\n#title > span { color: var(--dark); }\n\n/* Toggle styling. */\n\n#toggleContainer {\n    height: 25px;\n    justify-self: end;\n}\n\n#toggleContainer > button {\n    border: none;\n    background-color: var(--light);\n    color: var(--dark);\n    margin-right: 20px;\n    background-image: url('https://unpkg.com/css.gg@2.0.0/icons/css/sun.css');\n    cursor: pointer;\n}\n\ni { transition: 0.8s; }\n\n/* Content styling. */\n\n.content {\n    position: relative;\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) minmax(740px, 4fr);\n    border: 5px solid red;\n    background-color: white;\n    transition: opacity 0.8s;\n}\n\n.hamburgerActive { grid-template-columns: 1fr 4fr; }\n\n/* Hamburger content styling */\n\n#hamburgerContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    left: -100%;\n    transition: left 0.8s ease-in-out, background-color 0.5s;\n    border: 5px solid purple;\n    background-color: var(--light);\n}\n\n.hamburgerContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 90%;\n    width: 90%;\n}\n\n.homeContainer,\n.projectContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#home,\n#projects {\n    font-size: 1.3rem;\n    font-weight: bolder;\n}\n\n#all, #defaultProject { margin-top: 15px; }\n\n#addProject {\n    border: 1px solid black;\n    border-radius: 5px;\n    box-shadow: 0px 0px 3px 0px;\n    font-family: var(--main-font);\n    font-size: 0.8rem;\n    font-weight: 900;\n    background-color: white;\n    padding: 5px;\n    width: 40%;\n    margin-left: 30%;\n    flex-wrap: nowrap;\n    cursor: pointer;\n}\n\n#addProject:active {\n    background-color: rgb(216, 216, 216);\n}\n\n.homeContainer > div:not(#home),\n.projectContainer > div:not(#projects) {\n    transition: padding 0.5s ease-in-out;\n}\n\n.homeContainer > div:not(#home):hover,\n.projectContainer > div:not(#projects):hover {\n    padding: 2px;\n    background-color: rgba(47, 204, 47, 0.3);\n    border-radius: 5%;\n}\n\n.homeContainer > div:not(#home):focus,\n.projectContainer > div:not(#projects):focus {\n    padding: 3px;\n    background-color: rgba(47, 204, 47, 0.7);\n    border: 3px solid black;\n    border-radius: 5%;\n}\n\n#home::after,\n#projects::after {\n    display: block;\n    background: var(--dark);\n    font-size: 0.1rem;\n    content: '.';\n}\n\n/* Main content styling */\n\n.mainContent {\n    position: absolute;\n    background-color: var(--alt-light-color);\n    inset: 0%;\n    transition: left 0.8s ease-in-out, background-color 0.5s, opacity 0.8s;\n    border: 5px solid yellow;\n}\n\n.mainContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    gap: 10px;\n}\n\n#taskbar {\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n    padding: 20px;\n    height: 80px;\n    width: 95%;\n    font-size: 1.2rem;\n    background-color: rgb(36, 161, 36);\n    color: white;\n}\n\n#taskDisplay {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 85%;\n    width: 95%;\n    border: 3px solid orange;\n}\n\n/* Form Task Styling */\n\n.UITaskContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color: var(--main-light-color);\n    color: var(--main-dark-color);\n    height: 60px;\n    width: 95%;\n    border: 3px solid black;\n    border-radius: 15px;\n    font-size: 0.8rem;\n}\n\n/* Styling form element. */\n\n.modal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modalContent {\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr 1fr;\n    background-color: #e4e2e2;\n    margin: 15% auto;\n    border: 3px solid #888;\n    padding: 20px;\n    border-radius: 10px;\n    height: 290px;\n    width: 400px;\n    font-size: 0.8rem;\n    font-weight: 500;   \n}\n\n.closeContainer {\n    display: flex;\n    justify-content: end;\n    align-self: start;\n    margin-top: -20px;\n}\n\n.formTitleContainer {\n    display: flex;\n    justify-content: center;\n    font-size: 1.1rem;\n    margin-bottom: 20px;\n}\n\n#formTitle {\n    border: 4px solid rgb(0, 0, 0);\n    padding: 5px;\n    background-color: rgb(41, 175, 0);\n    color: white;\n}\n\n#close {\n    font-size: 1.6rem;\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.topElementContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: 800;\n}\n\n.bottomElementContainer {\n    display: flex;\n    font-weight: 800;\n    gap: 51px;\n}\n\n.submitContainer {\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n}\n\n#submit {\n    border: 3px solid rgb(255, 255, 255);\n    background-color: rgb(0, 0, 0);\n    padding: 5px;\n    color: rgb(255, 255, 255);\n    font-weight: 900;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n#description { height: 70px; }\n\ninput,\ntextarea,\nselect {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background-color: white;\n    border: 2px solid #333;\n    border-radius: 0.25rem;\n    padding: 5px;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nlabel { display: block; }\n.hidden { display: none; }\n.templateReset { grid-template-columns: 1fr; }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateBurgerSliding: () => (/* binding */ CreateBurgerSliding)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/elements.js");


class CreateBurgerSliding {
    constructor(){
        this.slideBurger();
    }

    slideBurger() {

        // Temporarily removing hidden and template reset from HTML.

        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].hamburgerButton.addEventListener('click', () => {
            if (_elements__WEBPACK_IMPORTED_MODULE_0__["default"].hamburgerContent.className == 'hidden') {
                setTimeout(() => {
                    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].mainContent.style.left = '20%';
                    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].hamburgerContent.style.left = '0%';
                }, 1)
                _elements__WEBPACK_IMPORTED_MODULE_0__["default"].hamburgerContent.classList.toggle('hidden');
                _elements__WEBPACK_IMPORTED_MODULE_0__["default"].content.classList.toggle('templateReset');
            } else {
                _elements__WEBPACK_IMPORTED_MODULE_0__["default"].mainContent.style.left = '0%';
                _elements__WEBPACK_IMPORTED_MODULE_0__["default"].hamburgerContent.style.left = '-100%';
                setTimeout(() => {
                    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].hamburgerContent.classList.toggle('hidden');
                    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].content.classList.toggle('templateReset');
                }, 800)
            }
        });
    }
}




/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const retrievedElements = {
    content: document.getElementsByClassName('content')[0],
    mainContent: document.getElementsByClassName('mainContent')[0],
    mainContainer: document.getElementsByClassName('mainContainer')[0],
    hamburgerContent: document.getElementById('hamburgerContent'),
    hamburgerButton: document.getElementById('hamburger'),
    hamburger: document.getElementById('hamburger'),
    addProject: document.getElementById('addProject'),
    form: document.getElementById('mainForm'),
    header: document.getElementsByClassName('header')[0],
    modal: document.getElementsByClassName('modal')[0],
    modalContent: document.getElementsByClassName('modalContent')[0],
    submit: document.getElementById('submit'),
    taskName: document.getElementById('taskName'),
    dueDate: document.getElementById('dueDate'),
    description: document.getElementById('description'),
    priority: document.getElementById('priority'),
    taskDisplay: document.getElementById('taskDisplay'),
    close: document.getElementById('close'),
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrievedElements);

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTaskUI: () => (/* binding */ CreateTaskUI),
/* harmony export */   FormButtons: () => (/* binding */ FormButtons),
/* harmony export */   RetrieveValues: () => (/* binding */ RetrieveValues),
/* harmony export */   TaskCreator: () => (/* binding */ TaskCreator)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/elements.js");


class FormButtons {
    constructor() {
        this.toggleForm();
        this.closeForm();
    }

    toggleForm() {
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].addProject.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].modal.classList.toggle('hidden');
        });
    }

    closeForm() {
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].close.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].modal.classList.toggle('hidden');
        })
    }
}

class TaskCreator {
    constructor(title, description, due, priority) {
        this.title = title;
        this.description = description;
        this.due = due;
        this.priority = priority;
    }
}

class RetrieveValues {
    constructor() {
        this.retrieveValues();
    }

    retrieveValues() {
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].submit.addEventListener('click', (event) => {
            event.preventDefault();
            const task = new TaskCreator(taskName.value, description.value, dueDate.value, priority.value);
            new CreateTaskUI(task);
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].modal.classList.toggle('hidden');
        });
    }
}

class CreateTaskUI {
    constructor(task) {
        this.createTaskUI(task);
    }

    createTaskUI(task) {

        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskDisplay ? _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskDisplay.style.display = 'none' : console.log('No tasks');

        const UITaskContainer = document.createElement('div');
        const leftTaskElements = document.createElement('div');
        const rightTaskElements = document.createElement('div');
        const UITaskName = document.createElement('div');
        const UIDescription = document.createElement('div');
        const UIDueDate = document.createElement('div');
        const UIPriority = document.createElement('div');

        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].mainContainer.appendChild(UITaskContainer);
        UITaskContainer.appendChild(leftTaskElements);
        UITaskContainer.appendChild(rightTaskElements);
        leftTaskElements.appendChild(UITaskName);
        leftTaskElements.appendChild(UIDescription);
        rightTaskElements.appendChild(UIDueDate);
        rightTaskElements.appendChild(UIPriority);

        UITaskContainer.className = 'UITaskContainer';
        leftTaskElements.className = 'leftTaskElements';
        rightTaskElements.className = 'rightTaskElements';
        UITaskName.id = 'UITaskName'; 
        UIDescription.id = 'UIDescription';
        UIDueDate.id = 'UIDueDate'; 
        UIPriority.id = 'UIPriority';

        UITaskName.textContent = task.title;
        UIDescription.textContent = task.description;
        UIDueDate.textContent = task.due;
        UIPriority.textContent = task.priority;

    }
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateHamburger: () => (/* binding */ CreateHamburger),
/* harmony export */   CreateToggleButton: () => (/* binding */ CreateToggleButton)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/elements.js");


class CreateHamburger {
    constructor() {
        this.toggleHamburger();
    }

    toggleHamburger() {
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].hamburger.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].hamburger.classList.toggle('change');
        });
    }
};

class CreateToggleButton {
    constructor() {
        this.createButton();
    }

    createButton() {
        const toggleButton = document.createElement('button');
        const Icon = document.createElement('i');

        toggleContainer.appendChild(toggleButton);
        toggleButton.appendChild(Icon);

        Icon.className = 'gg-sun';

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('darkmode');
            Icon.className == 'gg-sun' ? Icon.className = 'gg-moon' : Icon.className = 'gg-sun';
        });
    }
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");








const createHamburger = new _header__WEBPACK_IMPORTED_MODULE_1__.CreateHamburger();
const createToggleButton = new _header__WEBPACK_IMPORTED_MODULE_1__.CreateToggleButton();
const createBurgerSliding = new _content__WEBPACK_IMPORTED_MODULE_2__.CreateBurgerSliding();
const taskCreator = new _form__WEBPACK_IMPORTED_MODULE_3__.TaskCreator();
const toggleForm = new _form__WEBPACK_IMPORTED_MODULE_3__.FormButtons();
const retrieveValues = new _form__WEBPACK_IMPORTED_MODULE_3__.RetrieveValues();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdHQUF3RztBQUN4Ryx5R0FBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRO0FBQ1IsVUFBVTtBQUNWLGlCQUFpQiw2QkFBNkIsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sd0JBQXdCLHVCQUF1QiwwQkFBMEIsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyx5QkFBeUIsY0FBYyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyx1QkFBdUIsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8seUJBQXlCLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8seUJBQXlCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLHFCQUFxQixRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sb0JBQW9CLHFCQUFxQiw2R0FBNkcsbUVBQW1FLFdBQVcsa0NBQWtDLGlDQUFpQywrQkFBK0Isd0NBQXdDLDRCQUE0QixrQ0FBa0MsMkJBQTJCLG9DQUFvQyw4Q0FBOEMseUNBQXlDLHFDQUFxQyxHQUFHLE9BQU8sZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxVQUFVLHNCQUFzQix1QkFBdUIsR0FBRyxVQUFVLG9CQUFvQixrQ0FBa0Msb0JBQW9CLG1CQUFtQixvQ0FBb0MscUNBQXFDLHlCQUF5Qix1QkFBdUIsR0FBRyxlQUFlLHNDQUFzQyxzQ0FBc0MsK0NBQStDLEdBQUcsc0NBQXNDLG9CQUFvQixtQkFBbUIseUNBQXlDLDhCQUE4QiwrQkFBK0IsR0FBRyxtQkFBbUIsMkJBQTJCLHlCQUF5QixHQUFHLDJDQUEyQyw0QkFBNEIsc0JBQXNCLDBCQUEwQix3QkFBd0IsR0FBRyxzQkFBc0IsOENBQThDLHlCQUF5QixHQUFHLDJCQUEyQixrQkFBa0Isa0JBQWtCLG9DQUFvQyxrQkFBa0IsdUJBQXVCLEdBQUcsb0JBQW9CLCtDQUErQyxrQkFBa0IsYUFBYSxrQkFBa0IsK0NBQStDLG9DQUFvQyxvQkFBb0IsNkVBQTZFLHdCQUF3Qiw4QkFBOEIsR0FBRyxvQkFBb0IscUJBQXFCLCtDQUErQyxtQkFBbUIsd0JBQXdCLEdBQUcsK0JBQStCLG1CQUFtQixxQ0FBcUMseUJBQXlCLHlCQUF5QixnRkFBZ0Ysc0JBQXNCLEdBQUcsUUFBUSxtQkFBbUIsd0NBQXdDLHlCQUF5QixvQkFBb0IsbUVBQW1FLDRCQUE0Qiw4QkFBOEIsK0JBQStCLEdBQUcsdUJBQXVCLGlDQUFpQywwREFBMEQsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHlCQUF5QixrQkFBa0IsK0RBQStELCtCQUErQixxQ0FBcUMsR0FBRyx5QkFBeUIsb0JBQW9CLDZCQUE2QixnQkFBZ0Isa0JBQWtCLGlCQUFpQixHQUFHLHdDQUF3QyxvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLHVCQUF1Qix3QkFBd0IsMEJBQTBCLEdBQUcsNEJBQTRCLG1CQUFtQixpQkFBaUIsOEJBQThCLHlCQUF5QixrQ0FBa0Msb0NBQW9DLHdCQUF3Qix1QkFBdUIsOEJBQThCLG1CQUFtQixpQkFBaUIsdUJBQXVCLHdCQUF3QixzQkFBc0IsR0FBRyx3QkFBd0IsMkNBQTJDLEdBQUcsOEVBQThFLDJDQUEyQyxHQUFHLDBGQUEwRixtQkFBbUIsK0NBQStDLHdCQUF3QixHQUFHLDBGQUEwRixtQkFBbUIsK0NBQStDLDhCQUE4Qix3QkFBd0IsR0FBRyxxQ0FBcUMscUJBQXFCLDhCQUE4Qix3QkFBd0IsbUJBQW1CLEdBQUcsZ0RBQWdELHlCQUF5QiwrQ0FBK0MsZ0JBQWdCLDZFQUE2RSwrQkFBK0IsR0FBRyxvQkFBb0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsbUJBQW1CLGdCQUFnQixHQUFHLGNBQWMsb0JBQW9CLDBCQUEwQix1QkFBdUIsb0JBQW9CLG1CQUFtQixpQkFBaUIsd0JBQXdCLHlDQUF5QyxtQkFBbUIsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLGlCQUFpQiwrQkFBK0IsR0FBRyxpREFBaUQsb0JBQW9CLHFDQUFxQyxnREFBZ0Qsb0NBQW9DLG1CQUFtQixpQkFBaUIsOEJBQThCLDBCQUEwQix3QkFBd0IsR0FBRywyQ0FBMkMsc0JBQXNCLGlCQUFpQixjQUFjLGFBQWEsa0JBQWtCLG1CQUFtQixxQkFBcUIscUNBQXFDLDJDQUEyQyxHQUFHLG1CQUFtQixvQkFBb0IsMENBQTBDLGdDQUFnQyx1QkFBdUIsNkJBQTZCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLG1CQUFtQix3QkFBd0IsMEJBQTBCLEdBQUcscUJBQXFCLG9CQUFvQiwyQkFBMkIsd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5QixvQkFBb0IsOEJBQThCLHdCQUF3QiwwQkFBMEIsR0FBRyxnQkFBZ0IscUNBQXFDLG1CQUFtQix3Q0FBd0MsbUJBQW1CLEdBQUcsWUFBWSx3QkFBd0IsdUJBQXVCLHNCQUFzQixHQUFHLDBCQUEwQixvQkFBb0IsMEJBQTBCLHFDQUFxQyx1QkFBdUIsR0FBRyw2QkFBNkIsb0JBQW9CLHVCQUF1QixnQkFBZ0IsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4Qix1QkFBdUIsR0FBRyxhQUFhLDJDQUEyQyxxQ0FBcUMsbUJBQW1CLGdDQUFnQyx1QkFBdUIsMEJBQTBCLHNCQUFzQixHQUFHLG1CQUFtQixlQUFlLCtCQUErQiwrQkFBK0IsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsNkJBQTZCLDZCQUE2QixtQkFBbUIsZ0JBQWdCLDZCQUE2QixHQUFHLFlBQVksaUJBQWlCLFlBQVksZ0JBQWdCLG1CQUFtQiw2QkFBNkIsbUJBQW1CO0FBQ3JzVjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3hYMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2IyQzs7QUFFcEM7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsUUFBUSxpREFBaUI7QUFDekIsZ0JBQWdCLGlEQUFpQjtBQUNqQztBQUNBLG9CQUFvQixpREFBaUI7QUFDckMsb0JBQW9CLGlEQUFpQjtBQUNyQyxpQkFBaUI7QUFDakIsZ0JBQWdCLGlEQUFpQjtBQUNqQyxnQkFBZ0IsaURBQWlCO0FBQ2pDLGNBQWM7QUFDZCxnQkFBZ0IsaURBQWlCO0FBQ2pDLGdCQUFnQixpREFBaUI7QUFDakM7QUFDQSxvQkFBb0IsaURBQWlCO0FBQ3JDLG9CQUFvQixpREFBaUI7QUFDckMsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlc7O0FBRXBDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGlEQUFpQjtBQUN6QixZQUFZLGlEQUFpQjtBQUM3QixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxRQUFRLGlEQUFpQjtBQUN6QixZQUFZLGlEQUFpQjtBQUM3QixTQUFTO0FBQ1Q7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxpREFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBaUI7QUFDN0IsU0FBUztBQUNUO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsUUFBUSxpREFBaUIsZUFBZSxpREFBaUI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsaURBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEYyQzs7QUFFcEM7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGlEQUFpQjtBQUN6QixZQUFZLGlEQUFpQjtBQUM3QixTQUFTO0FBQ1Q7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDc0I7QUFDRztBQUNFO0FBQ1g7QUFDQTtBQUNHOztBQUV4Qyw0QkFBNEIsb0RBQWU7QUFDM0MsK0JBQStCLHVEQUFrQjtBQUNqRCxnQ0FBZ0MseURBQW1CO0FBQ25ELHdCQUF3Qiw4Q0FBVztBQUNuQyx1QkFBdUIsOENBQVc7QUFDbEMsMkJBQTJCLGlEQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3Mvc3VuLmNzcyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvY3NzL21vb24uY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWxpZ2h0LWNvbG9yOiAjZjdmOGRlO1xuICAgIC0tbWFpbi1kYXJrLWNvbG9yOiAjNDY0NTQ1O1xuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWFsdC1kYXJrLWNvbG9yOiByZ2IoMzksIDM4LCAzOCk7XG4gICAgLS1mb250LWNvbG9yOiAjMDAwMDAwO1xuICAgIC0tZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvcjogIzIyMjtcbiAgICAtLWJvcmRlci1jb2xvci1saWdodDogI2YxZjFmMTtcbiAgICAtLW1haW4tZm9udDogJ0x1Y2lkYSBHcmFuZGUnLCBtb25vc3BhY2U7XG5cbiAgICAtLWxpZ2h0OiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcbiAgICAtLWRhcms6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5kYXJrbW9kZSB7XG4gICAgLS1saWdodDogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcbiAgICAtLWRhcms6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiB2YXIoLS1hbHQtZGFyay1jb2xvcik7XG59XG5cbi8qIEhlYWRlciBzdHlsaW5nLiAqL1xuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbn1cblxuLmhlYWRlciA+IGRpdiB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBIYW1idXJnZXIgU3R5bGluZyAqL1xuXG4jaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNoYW1idXJnZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkwLCA5MCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG59XG5cbiNiYXIxLFxuI2JhcjIsXG4jYmFyMyB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLmNoYW5nZSAjYmFyMSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDExcHgpIHJvdGF0ZSgtNDVkZWcpOyB9XG4uY2hhbmdlICNiYXIyIHsgb3BhY2l0eTogMDsgfVxuLmNoYW5nZSAjYmFyMyB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMXB4KSByb3RhdGUoNDVkZWcpOyB9XG5cbi8qIFRpdGxlIHN0eWxpbmcuICovXG5cbiN0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGNvbG9yOiByZ2IoNTksIDE5NywgNTkpO1xufVxuXG4jdGl0bGUgPiBzcGFuIHsgY29sb3I6IHZhcigtLWRhcmspOyB9XG5cbi8qIFRvZ2dsZSBzdHlsaW5nLiAqL1xuXG4jdG9nZ2xlQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbiN0b2dnbGVDb250YWluZXIgPiBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3Mvc3VuLmNzcycpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaSB7IHRyYW5zaXRpb246IDAuOHM7IH1cblxuLyogQ29udGVudCBzdHlsaW5nLiAqL1xuXG4uY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgbWlubWF4KDc0MHB4LCA0ZnIpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XG59XG5cbi5oYW1idXJnZXJBY3RpdmUgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7IH1cblxuLyogSGFtYnVyZ2VyIGNvbnRlbnQgc3R5bGluZyAqL1xuXG4jaGFtYnVyZ2VyQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbi5oYW1idXJnZXJDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmhvbWVDb250YWluZXIsXG4ucHJvamVjdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuI2hvbWUsXG4jcHJvamVjdHMge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiNhbGwsICNkZWZhdWx0UHJvamVjdCB7IG1hcmdpbi10b3A6IDE1cHg7IH1cblxuI2FkZFByb2plY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2FkZFByb2plY3Q6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XG59XG5cbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSksXG4ucHJvamVjdENvbnRhaW5lciA+IGRpdjpub3QoI3Byb2plY3RzKSB7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpOmhvdmVyLFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cyk6aG92ZXIge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAyMDQsIDQ3LCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpOmZvY3VzLFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cyk6Zm9jdXMge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAyMDQsIDQ3LCAwLjcpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4jaG9tZTo6YWZ0ZXIsXG4jcHJvamVjdHM6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrKTtcbiAgICBmb250LXNpemU6IDAuMXJlbTtcbiAgICBjb250ZW50OiAnLic7XG59XG5cbi8qIE1haW4gY29udGVudCBzdHlsaW5nICovXG5cbi5tYWluQ29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XG4gICAgaW5zZXQ6IDAlO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjVzLCBvcGFjaXR5IDAuOHM7XG4gICAgYm9yZGVyOiA1cHggc29saWQgeWVsbG93O1xufVxuXG4ubWFpbkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMTBweDtcbn1cblxuI3Rhc2tiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAxNjEsIDM2KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiN0YXNrRGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4NSU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG5cbi8qIEZvcm0gVGFzayBTdHlsaW5nICovXG5cbi5VSVRhc2tDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi8qIFN0eWxpbmcgZm9ybSBlbGVtZW50LiAqL1xuXG4ubW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4ubW9kYWxDb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnIgMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGUyZTI7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODg4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwOyAgIFxufVxuXG4uY2xvc2VDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5mb3JtVGl0bGVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI2Zvcm1UaXRsZSB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDE3NSwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9wRWxlbWVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uYm90dG9tRWxlbWVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGdhcDogNTFweDtcbn1cblxuLnN1Ym1pdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jc3VibWl0IHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNkZXNjcmlwdGlvbiB7IGhlaWdodDogNzBweDsgfVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxubGFiZWwgeyBkaXNwbGF5OiBibG9jazsgfVxuLmhpZGRlbiB7IGRpc3BsYXk6IG5vbmU7IH1cbi50ZW1wbGF0ZVJlc2V0IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLHVDQUF1Qzs7SUFFdkMsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lB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QkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBLGVBQWUsWUFBWSxFQUFFOztBQUU3Qjs7O0lBR0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUEsUUFBUSxjQUFjLEVBQUU7QUFDeEIsVUFBVSxhQUFhLEVBQUU7QUFDekIsaUJBQWlCLDBCQUEwQixFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvY3NzL3N1bi5jc3MnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL2Nzcy9tb29uLmNzcycpO1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWxpZ2h0LWNvbG9yOiAjZjdmOGRlO1xcbiAgICAtLW1haW4tZGFyay1jb2xvcjogIzQ2NDU0NTtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6IHdoaXRlO1xcbiAgICAtLWFsdC1kYXJrLWNvbG9yOiByZ2IoMzksIDM4LCAzOCk7XFxuICAgIC0tZm9udC1jb2xvcjogIzAwMDAwMDtcXG4gICAgLS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gICAgLS1ib3JkZXItY29sb3ItbGlnaHQ6ICNmMWYxZjE7XFxuICAgIC0tbWFpbi1mb250OiAnTHVjaWRhIEdyYW5kZScsIG1vbm9zcGFjZTtcXG5cXG4gICAgLS1saWdodDogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIC0tZGFyazogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5kYXJrbW9kZSB7XFxuICAgIC0tbGlnaHQ6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XFxuICAgIC0tZGFyazogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiB2YXIoLS1hbHQtZGFyay1jb2xvcik7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nLiAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XFxufVxcblxcbi5oZWFkZXIgPiBkaXYge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiBIYW1idXJnZXIgU3R5bGluZyAqL1xcblxcbiNoYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNoYW1idXJnZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCA5MCwgOTAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuI2JhcjEsXFxuI2JhcjIsXFxuI2JhcjMge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuXFxuLmNoYW5nZSAjYmFyMSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDExcHgpIHJvdGF0ZSgtNDVkZWcpOyB9XFxuLmNoYW5nZSAjYmFyMiB7IG9wYWNpdHk6IDA7IH1cXG4uY2hhbmdlICNiYXIzIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExcHgpIHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG4vKiBUaXRsZSBzdHlsaW5nLiAqL1xcblxcbiN0aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogcmdiKDU5LCAxOTcsIDU5KTtcXG59XFxuXFxuI3RpdGxlID4gc3BhbiB7IGNvbG9yOiB2YXIoLS1kYXJrKTsgfVxcblxcbi8qIFRvZ2dsZSBzdHlsaW5nLiAqL1xcblxcbiN0b2dnbGVDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jdG9nZ2xlQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3Mvc3VuLmNzcycpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmkgeyB0cmFuc2l0aW9uOiAwLjhzOyB9XFxuXFxuLyogQ29udGVudCBzdHlsaW5nLiAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSBtaW5tYXgoNzQwcHgsIDRmcik7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcXG59XFxuXFxuLmhhbWJ1cmdlckFjdGl2ZSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjsgfVxcblxcbi8qIEhhbWJ1cmdlciBjb250ZW50IHN0eWxpbmcgKi9cXG5cXG4jaGFtYnVyZ2VyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC41cztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbi5oYW1idXJnZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaG9tZUNvbnRhaW5lcixcXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2hvbWUsXFxuI3Byb2plY3RzIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNhbGwsICNkZWZhdWx0UHJvamVjdCB7IG1hcmdpbi10b3A6IDE1cHg7IH1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkUHJvamVjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XFxufVxcblxcbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSksXFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cykge1xcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSk6aG92ZXIsXFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cyk6aG92ZXIge1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDIwNCwgNDcsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbn1cXG5cXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpOmZvY3VzLFxcbi5wcm9qZWN0Q29udGFpbmVyID4gZGl2Om5vdCgjcHJvamVjdHMpOmZvY3VzIHtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAyMDQsIDQ3LCAwLjcpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxufVxcblxcbiNob21lOjphZnRlcixcXG4jcHJvamVjdHM6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xcbiAgICBmb250LXNpemU6IDAuMXJlbTtcXG4gICAgY29udGVudDogJy4nO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5tYWluQ29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWxpZ2h0LWNvbG9yKTtcXG4gICAgaW5zZXQ6IDAlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC41cywgb3BhY2l0eSAwLjhzO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiN0YXNrYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAxNjEsIDM2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGFza0Rpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4vKiBGb3JtIFRhc2sgU3R5bGluZyAqL1xcblxcbi5VSVRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi8qIFN0eWxpbmcgZm9ybSBlbGVtZW50LiAqL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5tb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTJlMjtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg4ODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAyOTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgICBcXG59XFxuXFxuLmNsb3NlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLmZvcm1UaXRsZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2Zvcm1UaXRsZSB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDE3NSwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvcEVsZW1lbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5ib3R0b21FbGVtZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZ2FwOiA1MXB4O1xcbn1cXG5cXG4uc3VibWl0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7IGhlaWdodDogNzBweDsgfVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmxhYmVsIHsgZGlzcGxheTogYmxvY2s7IH1cXG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZTsgfVxcbi50ZW1wbGF0ZVJlc2V0IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJldHJpZXZlZEVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVCdXJnZXJTbGlkaW5nIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnNsaWRlQnVyZ2VyKCk7XG4gICAgfVxuXG4gICAgc2xpZGVCdXJnZXIoKSB7XG5cbiAgICAgICAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZpbmcgaGlkZGVuIGFuZCB0ZW1wbGF0ZSByZXNldCBmcm9tIEhUTUwuXG5cbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuaGFtYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuY2xhc3NOYW1lID09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm1haW5Db250ZW50LnN0eWxlLmxlZnQgPSAnMjAlJztcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuaGFtYnVyZ2VyQ29udGVudC5zdHlsZS5sZWZ0ID0gJzAlJztcbiAgICAgICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCd0ZW1wbGF0ZVJlc2V0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm1haW5Db250ZW50LnN0eWxlLmxlZnQgPSAnMCUnO1xuICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuc3R5bGUubGVmdCA9ICctMTAwJSc7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGVtcGxhdGVSZXNldCcpO1xuICAgICAgICAgICAgICAgIH0sIDgwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbiIsImNvbnN0IHJldHJpZXZlZEVsZW1lbnRzID0ge1xuICAgIGNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnQnKVswXSxcbiAgICBtYWluQ29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbkNvbnRlbnQnKVswXSxcbiAgICBtYWluQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGFpbmVyJylbMF0sXG4gICAgaGFtYnVyZ2VyQ29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlckNvbnRlbnQnKSxcbiAgICBoYW1idXJnZXJCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKSxcbiAgICBoYW1idXJnZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKSxcbiAgICBhZGRQcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpLFxuICAgIGZvcm06IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRm9ybScpLFxuICAgIGhlYWRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyJylbMF0sXG4gICAgbW9kYWw6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJylbMF0sXG4gICAgbW9kYWxDb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbENvbnRlbnQnKVswXSxcbiAgICBzdWJtaXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKSxcbiAgICB0YXNrTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJyksXG4gICAgZHVlRGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKSxcbiAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyksXG4gICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLFxuICAgIHRhc2tEaXNwbGF5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rpc3BsYXknKSxcbiAgICBjbG9zZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJyksXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldHJpZXZlZEVsZW1lbnRzOyIsImltcG9ydCByZXRyaWV2ZWRFbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgRm9ybUJ1dHRvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUZvcm0oKTtcbiAgICAgICAgdGhpcy5jbG9zZUZvcm0oKTtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtKCkge1xuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlRm9ybSgpIHtcbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYXNrQ3JlYXRvciB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZSA9IGR1ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHJpZXZlVmFsdWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXRyaWV2ZVZhbHVlcygpO1xuICAgIH1cblxuICAgIHJldHJpZXZlVmFsdWVzKCkge1xuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2tDcmVhdG9yKHRhc2tOYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpO1xuICAgICAgICAgICAgbmV3IENyZWF0ZVRhc2tVSSh0YXNrKTtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUYXNrVUkge1xuICAgIGNvbnN0cnVjdG9yKHRhc2spIHtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVUkodGFzayk7XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza1VJKHRhc2spIHtcblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy50YXNrRGlzcGxheSA/IHJldHJpZXZlZEVsZW1lbnRzLnRhc2tEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBjb25zb2xlLmxvZygnTm8gdGFza3MnKTtcblxuICAgICAgICBjb25zdCBVSVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbGVmdFRhc2tFbGVtZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCByaWdodFRhc2tFbGVtZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBVSVRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IFVJRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgVUlEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IFVJUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKFVJVGFza0NvbnRhaW5lcik7XG4gICAgICAgIFVJVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0VGFza0VsZW1lbnRzKTtcbiAgICAgICAgVUlUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0VGFza0VsZW1lbnRzKTtcbiAgICAgICAgbGVmdFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZChVSVRhc2tOYW1lKTtcbiAgICAgICAgbGVmdFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZChVSURlc2NyaXB0aW9uKTtcbiAgICAgICAgcmlnaHRUYXNrRWxlbWVudHMuYXBwZW5kQ2hpbGQoVUlEdWVEYXRlKTtcbiAgICAgICAgcmlnaHRUYXNrRWxlbWVudHMuYXBwZW5kQ2hpbGQoVUlQcmlvcml0eSk7XG5cbiAgICAgICAgVUlUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdVSVRhc2tDb250YWluZXInO1xuICAgICAgICBsZWZ0VGFza0VsZW1lbnRzLmNsYXNzTmFtZSA9ICdsZWZ0VGFza0VsZW1lbnRzJztcbiAgICAgICAgcmlnaHRUYXNrRWxlbWVudHMuY2xhc3NOYW1lID0gJ3JpZ2h0VGFza0VsZW1lbnRzJztcbiAgICAgICAgVUlUYXNrTmFtZS5pZCA9ICdVSVRhc2tOYW1lJzsgXG4gICAgICAgIFVJRGVzY3JpcHRpb24uaWQgPSAnVUlEZXNjcmlwdGlvbic7XG4gICAgICAgIFVJRHVlRGF0ZS5pZCA9ICdVSUR1ZURhdGUnOyBcbiAgICAgICAgVUlQcmlvcml0eS5pZCA9ICdVSVByaW9yaXR5JztcblxuICAgICAgICBVSVRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgVUlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIFVJRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlO1xuICAgICAgICBVSVByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgIH1cbn0iLCJpbXBvcnQgcmV0cmlldmVkRWxlbWVudHMgZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUhhbWJ1cmdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlSGFtYnVyZ2VyKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlSGFtYnVyZ2VyKCkge1xuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUb2dnbGVCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgICAgICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hcHBlbmRDaGlsZChJY29uKTtcblxuICAgICAgICBJY29uLmNsYXNzTmFtZSA9ICdnZy1zdW4nO1xuXG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUnKTtcbiAgICAgICAgICAgIEljb24uY2xhc3NOYW1lID09ICdnZy1zdW4nID8gSWNvbi5jbGFzc05hbWUgPSAnZ2ctbW9vbicgOiBJY29uLmNsYXNzTmFtZSA9ICdnZy1zdW4nO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBDcmVhdGVIYW1idXJnZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBDcmVhdGVUb2dnbGVCdXR0b24gfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBDcmVhdGVCdXJnZXJTbGlkaW5nIH0gZnJvbSAnLi9jb250ZW50JztcbmltcG9ydCB7IFRhc2tDcmVhdG9yIH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7IEZvcm1CdXR0b25zIH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7IFJldHJpZXZlVmFsdWVzIH0gZnJvbSAnLi9mb3JtJztcblxuY29uc3QgY3JlYXRlSGFtYnVyZ2VyID0gbmV3IENyZWF0ZUhhbWJ1cmdlcigpO1xuY29uc3QgY3JlYXRlVG9nZ2xlQnV0dG9uID0gbmV3IENyZWF0ZVRvZ2dsZUJ1dHRvbigpO1xuY29uc3QgY3JlYXRlQnVyZ2VyU2xpZGluZyA9IG5ldyBDcmVhdGVCdXJnZXJTbGlkaW5nKCk7XG5jb25zdCB0YXNrQ3JlYXRvciA9IG5ldyBUYXNrQ3JlYXRvcigpO1xuY29uc3QgdG9nZ2xlRm9ybSA9IG5ldyBGb3JtQnV0dG9ucygpO1xuY29uc3QgcmV0cmlldmVWYWx1ZXMgPSBuZXcgUmV0cmlldmVWYWx1ZXMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=