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
    cursor: pointer;
}

.homeContainer > div:not(#home):focus,
.projectContainer > div:not(#projects):focus,
.focused {
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
    border: 10px solid purple;
}

.mainContainer > div {
    height: 80px;
    width: 95%;
}

.mainContainer > div > div {
    margin-top: 10px;
    height: 50px;
    width: 100%;
}

#taskbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    height: 80px;
    width: 95%;
    font-size: 1.2rem;
    background-color: rgb(36, 161, 36);
    color: white;
}

#noTasksContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 5%;
    width: 95%;
    border: 3px solid orange;
}

#addTask {
    padding: 10px;
    background-color: rgb(0, 0, 0);
    color: white;
    border: 3px solid rgb(255, 255, 255);
    border-radius: 10px;
    font-weight: 900;
    cursor: pointer;
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

.rightTaskElements {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 10px;
}

/* Styling form element. */

.modal,
.projectModal {
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
    background-color: var(--alt-light-color);
    margin: 15% auto;
    border: 3px solid #888;
    padding: 20px;
    border-radius: 10px;
    height: 290px;
    width: 400px;
    font-size: 0.8rem;
    font-weight: 500;   
}

.projectModalContent {
    display: grid;
    grid-template-rows: 1fr 2fr;
    background-color: var(--alt-light-color);
    margin: 15% auto;
    border: 3px solid #888;
    padding: 20px;
    border-radius: 10px;
    height: 200px;
    width: 300px;
    font-size: 0.8rem;
    font-weight: 500;
}

.topProjectContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

#close,
#projectClose {
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
.hiddenProject { display: none; }
.inline { display: inline; }
.templateReset { grid-template-columns: 1fr; }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://unpkg.com/css.gg@2.0.0/icons/css/sun.css');\n@import url('https://unpkg.com/css.gg@2.0.0/icons/css/moon.css');\n\n:root {\n    --main-light-color: #f7f8de;\n    --main-dark-color: #464545;\n    --alt-light-color: white;\n    --alt-dark-color: rgb(39, 38, 38);\n    --font-color: #000000;\n    --font-color-light: #ffffff;\n    --border-color: #222;\n    --border-color-light: #f1f1f1;\n    --main-font: 'Lucida Grande', monospace;\n\n    --light: var(--main-light-color);\n    --dark: var(--main-dark-color);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 20px;\n    line-height: 1.5;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n    height: 100vh;\n    width: 100vw;\n    font-family: var(--main-font);\n    background-color: var(--light);\n    color: var(--dark);\n    transition: 0.5s;\n}\n\n.darkmode {\n    --light: var(--main-dark-color);\n    --dark: var(--main-light-color);\n    --alt-light-color: var(--alt-dark-color);\n}\n\n/* Header styling. */\n\n.header {\n    display: grid;\n    width: 100vw;\n    grid-template-columns: 1fr 1fr 1fr;\n    border: 5px solid black;\n    transition: opacity 0.8s;\n}\n\n.header > div {\n    justify-self: center;\n    align-self: center;\n}\n\n/* Hamburger Styling */\n\n#hamburger {\n    display: inline-block;\n    cursor: pointer;\n    justify-self: start;\n    margin-left: 20px;\n}\n\n#hamburger:hover {\n    background-color: rgba(92, 90, 90, 0.3);\n    border-radius: 20%;\n}\n\n#bar1,\n#bar2,\n#bar3 {\n    height: 5px;\n    width: 35px;\n    background-color: var(--dark);\n    margin: 6px;\n    transition: 0.7s;\n}\n\n.change #bar1 { transform: translate(0, 11px) rotate(-45deg); }\n.change #bar2 { opacity: 0; }\n.change #bar3 { transform: translate(0, -11px) rotate(45deg); }\n\n/* Title styling. */\n\n#title {\n    display: flex;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size: 1.8rem;\n    color: rgb(59, 197, 59);\n}\n\n#title > span { color: var(--dark); }\n\n/* Toggle styling. */\n\n#toggleContainer {\n    height: 25px;\n    justify-self: end;\n}\n\n#toggleContainer > button {\n    border: none;\n    background-color: var(--light);\n    color: var(--dark);\n    margin-right: 20px;\n    background-image: url('https://unpkg.com/css.gg@2.0.0/icons/css/sun.css');\n    cursor: pointer;\n}\n\ni { transition: 0.8s; }\n\n/* Content styling. */\n\n.content {\n    position: relative;\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) minmax(740px, 4fr);\n    border: 5px solid red;\n    background-color: white;\n    transition: opacity 0.8s;\n}\n\n.hamburgerActive { grid-template-columns: 1fr 4fr; }\n\n/* Hamburger content styling */\n\n#hamburgerContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    left: -100%;\n    transition: left 0.8s ease-in-out, background-color 0.5s;\n    border: 5px solid purple;\n    background-color: var(--light);\n}\n\n.hamburgerContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 90%;\n    width: 90%;\n}\n\n.homeContainer,\n.projectContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#home,\n#projects {\n    font-size: 1.3rem;\n    font-weight: bolder;\n}\n\n#all, #defaultProject { margin-top: 15px; }\n\n#addProject {\n    border: 1px solid black;\n    border-radius: 5px;\n    box-shadow: 0px 0px 3px 0px;\n    font-family: var(--main-font);\n    font-size: 0.8rem;\n    font-weight: 900;\n    background-color: white;\n    padding: 5px;\n    width: 40%;\n    margin-left: 30%;\n    flex-wrap: nowrap;\n    cursor: pointer;\n}\n\n#addProject:active {\n    background-color: rgb(216, 216, 216);\n}\n\n.homeContainer > div:not(#home),\n.projectContainer > div:not(#projects) {\n    transition: padding 0.5s ease-in-out;\n}\n\n.homeContainer > div:not(#home):hover,\n.projectContainer > div:not(#projects):hover {\n    padding: 2px;\n    background-color: rgba(47, 204, 47, 0.3);\n    border-radius: 5%;\n    cursor: pointer;\n}\n\n.homeContainer > div:not(#home):focus,\n.projectContainer > div:not(#projects):focus,\n.focused {\n    padding: 3px;\n    background-color: rgba(47, 204, 47, 0.7);\n    border: 3px solid black;\n    border-radius: 5%;\n}\n\n#home::after,\n#projects::after {\n    display: block;\n    background: var(--dark);\n    font-size: 0.1rem;\n    content: '.';\n}\n\n/* Main content styling */\n\n.mainContent {\n    position: absolute;\n    background-color: var(--alt-light-color);\n    inset: 0%;\n    transition: left 0.8s ease-in-out, background-color 0.5s, opacity 0.8s;\n    border: 5px solid yellow;\n}\n\n.mainContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    gap: 10px;\n    border: 10px solid purple;\n}\n\n.mainContainer > div {\n    height: 80px;\n    width: 95%;\n}\n\n.mainContainer > div > div {\n    margin-top: 10px;\n    height: 50px;\n    width: 100%;\n}\n\n#taskbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 20px;\n    padding: 20px;\n    height: 80px;\n    width: 95%;\n    font-size: 1.2rem;\n    background-color: rgb(36, 161, 36);\n    color: white;\n}\n\n#noTasksContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 5%;\n    width: 95%;\n    border: 3px solid orange;\n}\n\n#addTask {\n    padding: 10px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n    border: 3px solid rgb(255, 255, 255);\n    border-radius: 10px;\n    font-weight: 900;\n    cursor: pointer;\n}\n\n/* Form Task Styling */\n\n.UITaskContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color: var(--main-light-color);\n    color: var(--main-dark-color);\n    height: 60px;\n    width: 95%;\n    border: 3px solid black;\n    border-radius: 15px;\n    font-size: 0.8rem;\n}\n\n.rightTaskElements {\n    display: flex;\n    flex-direction: row;\n    justify-content: end;\n    align-items: center;\n    gap: 10px;\n}\n\n/* Styling form element. */\n\n.modal,\n.projectModal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modalContent {\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr 1fr;\n    background-color: var(--alt-light-color);\n    margin: 15% auto;\n    border: 3px solid #888;\n    padding: 20px;\n    border-radius: 10px;\n    height: 290px;\n    width: 400px;\n    font-size: 0.8rem;\n    font-weight: 500;   \n}\n\n.projectModalContent {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    background-color: var(--alt-light-color);\n    margin: 15% auto;\n    border: 3px solid #888;\n    padding: 20px;\n    border-radius: 10px;\n    height: 200px;\n    width: 300px;\n    font-size: 0.8rem;\n    font-weight: 500;\n}\n\n.topProjectContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.closeContainer {\n    display: flex;\n    justify-content: end;\n    align-self: start;\n    margin-top: -20px;\n}\n\n.formTitleContainer {\n    display: flex;\n    justify-content: center;\n    font-size: 1.1rem;\n    margin-bottom: 20px;\n}\n\n#formTitle {\n    border: 4px solid rgb(0, 0, 0);\n    padding: 5px;\n    background-color: rgb(41, 175, 0);\n    color: white;\n}\n\n#close,\n#projectClose {\n    font-size: 1.6rem;\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.topElementContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: 800;\n}\n\n.bottomElementContainer {\n    display: flex;\n    font-weight: 800;\n    gap: 51px;\n}\n\n.submitContainer {\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n}\n\n#submit {\n    border: 3px solid rgb(255, 255, 255);\n    background-color: rgb(0, 0, 0);\n    padding: 5px;\n    color: rgb(255, 255, 255);\n    font-weight: 900;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n#description { height: 70px; }\n\ninput,\ntextarea,\nselect {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background-color: white;\n    border: 2px solid #333;\n    border-radius: 0.25rem;\n    padding: 5px;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nlabel { display: block; }\n.hidden { display: none; }\n.hiddenProject { display: none; }\n.inline { display: inline; }\n.templateReset { grid-template-columns: 1fr; }"],"sourceRoot":""}]);
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

        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburgerButton.addEventListener('click', () => {
            if (_elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburgerContent.className == 'hidden') {
                setTimeout(() => {
                    _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.mainContent.style.left = '20%';
                    _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburgerContent.style.left = '0%';
                }, 1)
                _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburgerContent.classList.toggle('hidden');
                _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.content.classList.toggle('templateReset');
            } else {
                _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.mainContent.style.left = '0%';
                _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburgerContent.style.left = '-100%';
                setTimeout(() => {
                    _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburgerContent.classList.toggle('hidden');
                    _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.content.classList.toggle('templateReset');
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
/* harmony export */   retrievedElements: () => (/* binding */ retrievedElements),
/* harmony export */   taskArray: () => (/* binding */ taskArray)
/* harmony export */ });
const retrievedElements = {
    content: document.getElementsByClassName('content')[0],
    mainContent: document.getElementsByClassName('mainContent')[0],
    mainContainer: document.getElementsByClassName('mainContainer')[0],
    hamburgerContainer: document.getElementsByClassName('hamburgerContainer')[0],
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
    noTasksContainer: document.getElementById('noTasksContainer'),
    close: document.getElementById('close'),
    dueToday: document.getElementById('today'),
    dueThisWeek: document.getElementById('seven'),
    defaultProject: document.getElementById('defaultProject'),
    taskbar: document.getElementById('taskbar'),
    UIDueDates: document.getElementsByClassName('UIDueDate'),
    UITaskContainers: document.getElementsByClassName('UITaskContainer'),
    all: document.getElementsByClassName('all')[0],
    allLabel: document.getElementById('allLabel'),
    addTask: document.getElementById('addTask'),
    projectModal: document.getElementsByClassName('projectModal')[0],
    projectClose: document.getElementById('projectClose'),
    projectSubmit: document.getElementById('projectSubmit'),
    projectContainer: document.getElementsByClassName('projectContainer')[0],
    project: document.getElementById('project'),
}

const taskArray = [
    
]




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
        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.addTask.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.modal.classList.toggle('hidden');
        });

        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.addProject.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.projectModal.classList.toggle('hidden');
        })
    }

    closeForm() {
        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.close.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.modal.classList.toggle('hidden');
        })

        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.projectClose.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.projectModal.classList.toggle('hidden');
        })
    }
}

class TaskCreator {
    constructor(title, description, due, priority, project) {
        this.title = title;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.project = project;
    }
}

class RetrieveValues {
    constructor() {
        this.retrieveValues();
    }

    retrieveValues() {
        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.submit.addEventListener('click', (event) => {
            event.preventDefault();
            const task = new TaskCreator(taskName.value, description.value, dueDate.value, priority.value, project.value);
            new CreateTaskUI(task);
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.modal.classList.toggle('hidden');
        });

        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.projectModal.addEventListener('submit', (event) => {
            event.preventDefault();
            let newProject = document.createElement('div');
            let newTaskContainer = document.createElement('div');
            let newOption = document.createElement('option');
            let projectNameLowercase = projectName.value.toLowerCase();

            newProject.id = projectNameLowercase + 'Project';
            newProject.textContent = projectName.value;
            newTaskContainer.className = projectNameLowercase + ' hidden';
            newOption.value = projectName.value;
            newOption.textContent = projectName.value;

            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.projectContainer.insertBefore(newProject, addProject);
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.mainContainer.appendChild(newTaskContainer);
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.project.appendChild(newOption);
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.projectModal.classList.toggle('hidden');

            newProject.tabIndex = newProject.previousElementSibling.tabIndex + 1;
        });
    }
}

class CreateTaskUI {
    constructor(task) {
        this.createTaskUI(task);
        this.leftTaskElements = null;
        this.rightTaskElements = null;
        this.UITaskName = null;
        this.UIDescription = null;
        this.UIDueDate = null;
        this.UIPriority = null;
    }

    createTaskUI(task) {

        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.noTasksContainer ? _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.noTasksContainer.style.display = 'none' : console.log('No tasks');

        this.leftTaskElements = document.createElement('div');
        this.rightTaskElements = document.createElement('div');
        this.UITaskName = document.createElement('div');
        this.UIDescription = document.createElement('div');
        this.UIDueDate = document.createElement('div');
        this.UIPriority = document.createElement('div');

        this.UITaskName.textContent = task.title;
        this.UIDescription.textContent = task.description;
        this.UIDueDate.textContent = task.due;
        this.UIPriority.textContent = task.priority;

        this.assignContainer(task.project);
    }

    assignContainer(container) {

        let containerHolder = container;
        let lowercasedContainer = containerHolder.toLowerCase();
        let element = document.getElementsByClassName(lowercasedContainer)[0];

        if (element != null) {
            let newTaskName = document.createElement('div');
            newTaskName.className = 'UITaskContainer';
            element.appendChild(newTaskName);
            newTaskName.appendChild(this.leftTaskElements);
            newTaskName.appendChild(this.rightTaskElements);
        } else {
            let newContainer = document.createElement('div');
            let newTaskName = document.createElement('div');
            newContainer.className = lowercasedContainer + ' hiddenProject';
            newTaskName.className = 'UITaskContainer';
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.mainContainer.appendChild(newContainer);
            newContainer.appendChild(newTaskName);
            newTaskName.appendChild(this.leftTaskElements);
            newTaskName.appendChild(this.rightTaskElements);
        }

        this.leftTaskElements.appendChild(this.UITaskName);
        this.leftTaskElements.appendChild(this.UIDescription);
        this.rightTaskElements.appendChild(this.UIDueDate);
        this.rightTaskElements.appendChild(this.UIPriority);

        this.leftTaskElements.className = 'leftTaskElements';
        this.rightTaskElements.className = 'rightTaskElements';
        this.UITaskName.id = 'UITaskName'; 
        this.UIDescription.id = 'UIDescription';
        this.UIDueDate.className = 'UIDueDate'; 
        this.UIPriority.id = 'UIPriority';
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
        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburger.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburger.classList.toggle('change');
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

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterTasks: () => (/* binding */ FilterTasks)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/elements.js");


class FilterTasks {
    constructor() {
        this.filterTasks();
    }

    filterTasks() {
        let currentDate = new Date();

        document.addEventListener('DOMContentLoaded', () => {
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.allLabel.click();
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.allLabel.focus();
            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.allLabel.classList.add('focused');

            _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.hamburgerContainer.addEventListener('focusin', (event) => {
                let focusedElement = event.target;

                if (focusedElement != _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.allLabel) {
                    _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.allLabel.classList.remove('focused');
                    _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.all.classList.add('hiddenProject');
                }
            })
        })

        _elements__WEBPACK_IMPORTED_MODULE_0__.retrievedElements.allLabel.addEventListener('click', () => {
            const hiddenElements = document.querySelectorAll('.hiddenProject');
            console.log(hiddenElements);

            hiddenElements.forEach(hiddenElement => {
                if (hiddenElement.hasChildNodes()) {
                    hiddenElement.classList.remove('hiddenProject');
                    hiddenElement.classList.add('inline');
                }
            })


        })
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
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");









const createHamburger = new _header__WEBPACK_IMPORTED_MODULE_1__.CreateHamburger();
const createToggleButton = new _header__WEBPACK_IMPORTED_MODULE_1__.CreateToggleButton();
const createBurgerSliding = new _content__WEBPACK_IMPORTED_MODULE_2__.CreateBurgerSliding();
const taskCreator = new _form__WEBPACK_IMPORTED_MODULE_3__.TaskCreator();
const toggleForm = new _form__WEBPACK_IMPORTED_MODULE_3__.FormButtons();
const retrieveValues = new _form__WEBPACK_IMPORTED_MODULE_3__.RetrieveValues();
const filterTasks = new _tasks__WEBPACK_IMPORTED_MODULE_4__.FilterTasks();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdHQUF3RztBQUN4Ryx5R0FBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsVUFBVTtBQUNWLGlCQUFpQiw2QkFBNkIsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sd0JBQXdCLHVCQUF1QiwwQkFBMEIsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyx5QkFBeUIsY0FBYyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyx1QkFBdUIsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8seUJBQXlCLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8seUJBQXlCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxL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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDc0I7QUFDRztBQUNFO0FBQ1g7QUFDQTtBQUNHO0FBQ0Y7O0FBRXRDLDRCQUE0QixvREFBZTtBQUMzQywrQkFBK0IsdURBQWtCO0FBQ2pELGdDQUFnQyx5REFBbUI7QUFDbkQsd0JBQXdCLDhDQUFXO0FBQ25DLHVCQUF1Qiw4Q0FBVztBQUNsQywyQkFBMkIsaURBQWM7QUFDekMsd0JBQXdCLCtDQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvY3NzL3N1bi5jc3MpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL2Nzcy9tb29uLmNzcyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1saWdodC1jb2xvcjogI2Y3ZjhkZTtcbiAgICAtLW1haW4tZGFyay1jb2xvcjogIzQ2NDU0NTtcbiAgICAtLWFsdC1saWdodC1jb2xvcjogd2hpdGU7XG4gICAgLS1hbHQtZGFyay1jb2xvcjogcmdiKDM5LCAzOCwgMzgpO1xuICAgIC0tZm9udC1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWZvbnQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItY29sb3I6ICMyMjI7XG4gICAgLS1ib3JkZXItY29sb3ItbGlnaHQ6ICNmMWYxZjE7XG4gICAgLS1tYWluLWZvbnQ6ICdMdWNpZGEgR3JhbmRlJywgbW9ub3NwYWNlO1xuXG4gICAgLS1saWdodDogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XG4gICAgLS1kYXJrOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZGFya21vZGUge1xuICAgIC0tbGlnaHQ6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XG4gICAgLS1kYXJrOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcbiAgICAtLWFsdC1saWdodC1jb2xvcjogdmFyKC0tYWx0LWRhcmstY29sb3IpO1xufVxuXG4vKiBIZWFkZXIgc3R5bGluZy4gKi9cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XG59XG5cbi5oZWFkZXIgPiBkaXYge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLyogSGFtYnVyZ2VyIFN0eWxpbmcgKi9cblxuI2hhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4jaGFtYnVyZ2VyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCA5MCwgOTAsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xufVxuXG4jYmFyMSxcbiNiYXIyLFxuI2JhcjMge1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIG1hcmdpbjogNnB4O1xuICAgIHRyYW5zaXRpb246IDAuN3M7XG59XG5cbi5jaGFuZ2UgI2JhcjEgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMXB4KSByb3RhdGUoLTQ1ZGVnKTsgfVxuLmNoYW5nZSAjYmFyMiB7IG9wYWNpdHk6IDA7IH1cbi5jaGFuZ2UgI2JhcjMgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTFweCkgcm90YXRlKDQ1ZGVnKTsgfVxuXG4vKiBUaXRsZSBzdHlsaW5nLiAqL1xuXG4jdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBjb2xvcjogcmdiKDU5LCAxOTcsIDU5KTtcbn1cblxuI3RpdGxlID4gc3BhbiB7IGNvbG9yOiB2YXIoLS1kYXJrKTsgfVxuXG4vKiBUb2dnbGUgc3R5bGluZy4gKi9cblxuI3RvZ2dsZUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4jdG9nZ2xlQ29udGFpbmVyID4gYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvY3NzL3N1bi5jc3MnKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmkgeyB0cmFuc2l0aW9uOiAwLjhzOyB9XG5cbi8qIENvbnRlbnQgc3R5bGluZy4gKi9cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCg3NDBweCwgNGZyKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xufVxuXG4uaGFtYnVyZ2VyQWN0aXZlIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyOyB9XG5cbi8qIEhhbWJ1cmdlciBjb250ZW50IHN0eWxpbmcgKi9cblxuI2hhbWJ1cmdlckNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwdXJwbGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4uaGFtYnVyZ2VyQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5ob21lQ29udGFpbmVyLFxuLnByb2plY3RDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbiNob21lLFxuI3Byb2plY3RzIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jYWxsLCAjZGVmYXVsdFByb2plY3QgeyBtYXJnaW4tdG9wOiAxNXB4OyB9XG5cbiNhZGRQcm9qZWN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNhZGRQcm9qZWN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xufVxuXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpLFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cykge1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmhvbWVDb250YWluZXIgPiBkaXY6bm90KCNob21lKTpob3Zlcixcbi5wcm9qZWN0Q29udGFpbmVyID4gZGl2Om5vdCgjcHJvamVjdHMpOmhvdmVyIHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMjA0LCA0NywgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSk6Zm9jdXMsXG4ucHJvamVjdENvbnRhaW5lciA+IGRpdjpub3QoI3Byb2plY3RzKTpmb2N1cyxcbi5mb2N1c2VkIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMjA0LCA0NywgMC43KTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuI2hvbWU6OmFmdGVyLFxuI3Byb2plY3RzOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XG4gICAgZm9udC1zaXplOiAwLjFyZW07XG4gICAgY29udGVudDogJy4nO1xufVxuXG4vKiBNYWluIGNvbnRlbnQgc3R5bGluZyAqL1xuXG4ubWFpbkNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtbGlnaHQtY29sb3IpO1xuICAgIGluc2V0OiAwJTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC41cywgb3BhY2l0eSAwLjhzO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHllbGxvdztcbn1cblxuLm1haW5Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IDEwcHg7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHB1cnBsZTtcbn1cblxuLm1haW5Db250YWluZXIgPiBkaXYge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogOTUlO1xufVxuXG4ubWFpbkNvbnRhaW5lciA+IGRpdiA+IGRpdiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiN0YXNrYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDE2MSwgMzYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI25vVGFza3NDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNSU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG5cbiNhZGRUYXNrIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEZvcm0gVGFzayBTdHlsaW5nICovXG5cbi5VSVRhc2tDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yaWdodFRhc2tFbGVtZW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBTdHlsaW5nIGZvcm0gZWxlbWVudC4gKi9cblxuLm1vZGFsLFxuLnByb2plY3RNb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5tb2RhbENvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmciAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWxpZ2h0LWNvbG9yKTtcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4ODg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMjkwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7ICAgXG59XG5cbi5wcm9qZWN0TW9kYWxDb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtbGlnaHQtY29sb3IpO1xuICAgIG1hcmdpbjogMTUlIGF1dG87XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg4ODtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRvcFByb2plY3RDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2xvc2VDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5mb3JtVGl0bGVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI2Zvcm1UaXRsZSB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDE3NSwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jY2xvc2UsXG4jcHJvamVjdENsb3NlIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvcEVsZW1lbnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmJvdHRvbUVsZW1lbnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBnYXA6IDUxcHg7XG59XG5cbi5zdWJtaXRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI3N1Ym1pdCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZGVzY3JpcHRpb24geyBoZWlnaHQ6IDcwcHg7IH1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmxhYmVsIHsgZGlzcGxheTogYmxvY2s7IH1cbi5oaWRkZW4geyBkaXNwbGF5OiBub25lOyB9XG4uaGlkZGVuUHJvamVjdCB7IGRpc3BsYXk6IG5vbmU7IH1cbi5pbmxpbmUgeyBkaXNwbGF5OiBpbmxpbmU7IH1cbi50ZW1wbGF0ZVJlc2V0IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGlu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QWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBLFFBQVEsY0FBYyxFQUFFO0FBQ3hCLFVBQVUsYUFBYSxFQUFFO0FBQ3pCLGlCQUFpQixhQUFhLEVBQUU7QUFDaEMsVUFBVSxlQUFlLEVBQUU7QUFDM0IsaUJBQWlCLDBCQUEwQixFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvY3NzL3N1bi5jc3MnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL2Nzcy9tb29uLmNzcycpO1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWxpZ2h0LWNvbG9yOiAjZjdmOGRlO1xcbiAgICAtLW1haW4tZGFyay1jb2xvcjogIzQ2NDU0NTtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6IHdoaXRlO1xcbiAgICAtLWFsdC1kYXJrLWNvbG9yOiByZ2IoMzksIDM4LCAzOCk7XFxuICAgIC0tZm9udC1jb2xvcjogIzAwMDAwMDtcXG4gICAgLS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gICAgLS1ib3JkZXItY29sb3ItbGlnaHQ6ICNmMWYxZjE7XFxuICAgIC0tbWFpbi1mb250OiAnTHVjaWRhIEdyYW5kZScsIG1vbm9zcGFjZTtcXG5cXG4gICAgLS1saWdodDogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIC0tZGFyazogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5kYXJrbW9kZSB7XFxuICAgIC0tbGlnaHQ6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XFxuICAgIC0tZGFyazogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiB2YXIoLS1hbHQtZGFyay1jb2xvcik7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nLiAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XFxufVxcblxcbi5oZWFkZXIgPiBkaXYge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiBIYW1idXJnZXIgU3R5bGluZyAqL1xcblxcbiNoYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNoYW1idXJnZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCA5MCwgOTAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuI2JhcjEsXFxuI2JhcjIsXFxuI2JhcjMge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuXFxuLmNoYW5nZSAjYmFyMSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDExcHgpIHJvdGF0ZSgtNDVkZWcpOyB9XFxuLmNoYW5nZSAjYmFyMiB7IG9wYWNpdHk6IDA7IH1cXG4uY2hhbmdlICNiYXIzIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExcHgpIHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG4vKiBUaXRsZSBzdHlsaW5nLiAqL1xcblxcbiN0aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogcmdiKDU5LCAxOTcsIDU5KTtcXG59XFxuXFxuI3RpdGxlID4gc3BhbiB7IGNvbG9yOiB2YXIoLS1kYXJrKTsgfVxcblxcbi8qIFRvZ2dsZSBzdHlsaW5nLiAqL1xcblxcbiN0b2dnbGVDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jdG9nZ2xlQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3Mvc3VuLmNzcycpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmkgeyB0cmFuc2l0aW9uOiAwLjhzOyB9XFxuXFxuLyogQ29udGVudCBzdHlsaW5nLiAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSBtaW5tYXgoNzQwcHgsIDRmcik7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcXG59XFxuXFxuLmhhbWJ1cmdlckFjdGl2ZSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjsgfVxcblxcbi8qIEhhbWJ1cmdlciBjb250ZW50IHN0eWxpbmcgKi9cXG5cXG4jaGFtYnVyZ2VyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC41cztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbi5oYW1idXJnZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaG9tZUNvbnRhaW5lcixcXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2hvbWUsXFxuI3Byb2plY3RzIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNhbGwsICNkZWZhdWx0UHJvamVjdCB7IG1hcmdpbi10b3A6IDE1cHg7IH1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkUHJvamVjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XFxufVxcblxcbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSksXFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cykge1xcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSk6aG92ZXIsXFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cyk6aG92ZXIge1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDIwNCwgNDcsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSk6Zm9jdXMsXFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cyk6Zm9jdXMsXFxuLmZvY3VzZWQge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDIwNCwgNDcsIDAuNyk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG59XFxuXFxuI2hvbWU6OmFmdGVyLFxcbiNwcm9qZWN0czo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogMC4xcmVtO1xcbiAgICBjb250ZW50OiAnLic7XFxufVxcblxcbi8qIE1haW4gY29udGVudCBzdHlsaW5nICovXFxuXFxuLm1haW5Db250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtbGlnaHQtY29sb3IpO1xcbiAgICBpbnNldDogMCU7XFxuICAgIHRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjVzLCBvcGFjaXR5IDAuOHM7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHllbGxvdztcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuLm1haW5Db250YWluZXIgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbi5tYWluQ29udGFpbmVyID4gZGl2ID4gZGl2IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Rhc2tiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMTYxLCAzNik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI25vVGFza3NDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGb3JtIFRhc2sgU3R5bGluZyAqL1xcblxcbi5VSVRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5yaWdodFRhc2tFbGVtZW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9ybSBlbGVtZW50LiAqL1xcblxcbi5tb2RhbCxcXG4ucHJvamVjdE1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLm1vZGFsQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtbGlnaHQtY29sb3IpO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODg4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDI5MHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwOyAgIFxcbn1cXG5cXG4ucHJvamVjdE1vZGFsQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWxpZ2h0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg4ODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRvcFByb2plY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLmZvcm1UaXRsZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2Zvcm1UaXRsZSB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDE3NSwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Nsb3NlLFxcbiNwcm9qZWN0Q2xvc2Uge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9wRWxlbWVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmJvdHRvbUVsZW1lbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBnYXA6IDUxcHg7XFxufVxcblxcbi5zdWJtaXRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHsgaGVpZ2h0OiA3MHB4OyB9XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxubGFiZWwgeyBkaXNwbGF5OiBibG9jazsgfVxcbi5oaWRkZW4geyBkaXNwbGF5OiBub25lOyB9XFxuLmhpZGRlblByb2plY3QgeyBkaXNwbGF5OiBub25lOyB9XFxuLmlubGluZSB7IGRpc3BsYXk6IGlubGluZTsgfVxcbi50ZW1wbGF0ZVJlc2V0IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmV0cmlldmVkRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQnVyZ2VyU2xpZGluZyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zbGlkZUJ1cmdlcigpO1xuICAgIH1cblxuICAgIHNsaWRlQnVyZ2VyKCkge1xuXG4gICAgICAgIC8vIFRlbXBvcmFyaWx5IHJlbW92aW5nIGhpZGRlbiBhbmQgdGVtcGxhdGUgcmVzZXQgZnJvbSBIVE1MLlxuXG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXJDb250ZW50LmNsYXNzTmFtZSA9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tYWluQ29udGVudC5zdHlsZS5sZWZ0ID0gJzIwJSc7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuc3R5bGUubGVmdCA9ICcwJSc7XG4gICAgICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXJDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGVtcGxhdGVSZXNldCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tYWluQ29udGVudC5zdHlsZS5sZWZ0ID0gJzAlJztcbiAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXJDb250ZW50LnN0eWxlLmxlZnQgPSAnLTEwMCUnO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXJDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5jb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ3RlbXBsYXRlUmVzZXQnKTtcbiAgICAgICAgICAgICAgICB9LCA4MDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4iLCJjb25zdCByZXRyaWV2ZWRFbGVtZW50cyA9IHtcbiAgICBjb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250ZW50JylbMF0sXG4gICAgbWFpbkNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5Db250ZW50JylbMF0sXG4gICAgbWFpbkNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbkNvbnRhaW5lcicpWzBdLFxuICAgIGhhbWJ1cmdlckNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGFtYnVyZ2VyQ29udGFpbmVyJylbMF0sXG4gICAgaGFtYnVyZ2VyQ29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlckNvbnRlbnQnKSxcbiAgICBoYW1idXJnZXJCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKSxcbiAgICBoYW1idXJnZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKSxcbiAgICBhZGRQcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpLFxuICAgIGZvcm06IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRm9ybScpLFxuICAgIGhlYWRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyJylbMF0sXG4gICAgbW9kYWw6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJylbMF0sXG4gICAgbW9kYWxDb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbENvbnRlbnQnKVswXSxcbiAgICBzdWJtaXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKSxcbiAgICB0YXNrTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJyksXG4gICAgZHVlRGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKSxcbiAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyksXG4gICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLFxuICAgIG5vVGFza3NDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub1Rhc2tzQ29udGFpbmVyJyksXG4gICAgY2xvc2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpLFxuICAgIGR1ZVRvZGF5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKSxcbiAgICBkdWVUaGlzV2VlazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldmVuJyksXG4gICAgZGVmYXVsdFByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZhdWx0UHJvamVjdCcpLFxuICAgIHRhc2tiYXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrYmFyJyksXG4gICAgVUlEdWVEYXRlczogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnVUlEdWVEYXRlJyksXG4gICAgVUlUYXNrQ29udGFpbmVyczogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnVUlUYXNrQ29udGFpbmVyJyksXG4gICAgYWxsOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbGwnKVswXSxcbiAgICBhbGxMYWJlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbExhYmVsJyksXG4gICAgYWRkVGFzazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2snKSxcbiAgICBwcm9qZWN0TW9kYWw6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RNb2RhbCcpWzBdLFxuICAgIHByb2plY3RDbG9zZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RDbG9zZScpLFxuICAgIHByb2plY3RTdWJtaXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0U3VibWl0JyksXG4gICAgcHJvamVjdENvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdENvbnRhaW5lcicpWzBdLFxuICAgIHByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JyksXG59XG5cbmNvbnN0IHRhc2tBcnJheSA9IFtcbiAgICBcbl1cblxuZXhwb3J0IHsgcmV0cmlldmVkRWxlbWVudHMgfTtcbmV4cG9ydCB7IHRhc2tBcnJheSB9OyIsImltcG9ydCB7IHJldHJpZXZlZEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtQnV0dG9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRm9ybSgpO1xuICAgICAgICB0aGlzLmNsb3NlRm9ybSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnByb2plY3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbG9zZUZvcm0oKSB7XG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMucHJvamVjdENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMucHJvamVjdE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhc2tDcmVhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV0cmlldmVWYWx1ZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJldHJpZXZlVmFsdWVzKCk7XG4gICAgfVxuXG4gICAgcmV0cmlldmVWYWx1ZXMoKSB7XG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFza0NyZWF0b3IodGFza05hbWUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC52YWx1ZSk7XG4gICAgICAgICAgICBuZXcgQ3JlYXRlVGFza1VJKHRhc2spO1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZUxvd2VyY2FzZSA9IHByb2plY3ROYW1lLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIG5ld1Byb2plY3QuaWQgPSBwcm9qZWN0TmFtZUxvd2VyY2FzZSArICdQcm9qZWN0JztcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgIG5ld1Rhc2tDb250YWluZXIuY2xhc3NOYW1lID0gcHJvamVjdE5hbWVMb3dlcmNhc2UgKyAnIGhpZGRlbic7XG4gICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnZhbHVlO1xuXG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5wcm9qZWN0Q29udGFpbmVyLmluc2VydEJlZm9yZShuZXdQcm9qZWN0LCBhZGRQcm9qZWN0KTtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5wcm9qZWN0LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5wcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgIG5ld1Byb2plY3QudGFiSW5kZXggPSBuZXdQcm9qZWN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGFiSW5kZXggKyAxO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUYXNrVUkge1xuICAgIGNvbnN0cnVjdG9yKHRhc2spIHtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVUkodGFzayk7XG4gICAgICAgIHRoaXMubGVmdFRhc2tFbGVtZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRUYXNrRWxlbWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLlVJVGFza05hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLlVJRGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLlVJRHVlRGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuVUlQcmlvcml0eSA9IG51bGw7XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza1VJKHRhc2spIHtcblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5ub1Rhc2tzQ29udGFpbmVyID8gcmV0cmlldmVkRWxlbWVudHMubm9UYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogY29uc29sZS5sb2coJ05vIHRhc2tzJyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0VGFza0VsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMucmlnaHRUYXNrRWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5VSVRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuVUlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLlVJRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLlVJUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aGlzLlVJVGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0aGlzLlVJRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLlVJRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlO1xuICAgICAgICB0aGlzLlVJUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgICAgIHRoaXMuYXNzaWduQ29udGFpbmVyKHRhc2sucHJvamVjdCk7XG4gICAgfVxuXG4gICAgYXNzaWduQ29udGFpbmVyKGNvbnRhaW5lcikge1xuXG4gICAgICAgIGxldCBjb250YWluZXJIb2xkZXIgPSBjb250YWluZXI7XG4gICAgICAgIGxldCBsb3dlcmNhc2VkQ29udGFpbmVyID0gY29udGFpbmVySG9sZGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsb3dlcmNhc2VkQ29udGFpbmVyKVswXTtcblxuICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgbmV3VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLmNsYXNzTmFtZSA9ICdVSVRhc2tDb250YWluZXInO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYXNrTmFtZSk7XG4gICAgICAgICAgICBuZXdUYXNrTmFtZS5hcHBlbmRDaGlsZCh0aGlzLmxlZnRUYXNrRWxlbWVudHMpO1xuICAgICAgICAgICAgbmV3VGFza05hbWUuYXBwZW5kQ2hpbGQodGhpcy5yaWdodFRhc2tFbGVtZW50cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgbmV3VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld0NvbnRhaW5lci5jbGFzc05hbWUgPSBsb3dlcmNhc2VkQ29udGFpbmVyICsgJyBoaWRkZW5Qcm9qZWN0JztcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLmNsYXNzTmFtZSA9ICdVSVRhc2tDb250YWluZXInO1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb250YWluZXIpO1xuICAgICAgICAgICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tOYW1lKTtcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLmFwcGVuZENoaWxkKHRoaXMubGVmdFRhc2tFbGVtZW50cyk7XG4gICAgICAgICAgICBuZXdUYXNrTmFtZS5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0VGFza0VsZW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGVmdFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZCh0aGlzLlVJVGFza05hbWUpO1xuICAgICAgICB0aGlzLmxlZnRUYXNrRWxlbWVudHMuYXBwZW5kQ2hpbGQodGhpcy5VSURlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5yaWdodFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZCh0aGlzLlVJRHVlRGF0ZSk7XG4gICAgICAgIHRoaXMucmlnaHRUYXNrRWxlbWVudHMuYXBwZW5kQ2hpbGQodGhpcy5VSVByaW9yaXR5KTtcblxuICAgICAgICB0aGlzLmxlZnRUYXNrRWxlbWVudHMuY2xhc3NOYW1lID0gJ2xlZnRUYXNrRWxlbWVudHMnO1xuICAgICAgICB0aGlzLnJpZ2h0VGFza0VsZW1lbnRzLmNsYXNzTmFtZSA9ICdyaWdodFRhc2tFbGVtZW50cyc7XG4gICAgICAgIHRoaXMuVUlUYXNrTmFtZS5pZCA9ICdVSVRhc2tOYW1lJzsgXG4gICAgICAgIHRoaXMuVUlEZXNjcmlwdGlvbi5pZCA9ICdVSURlc2NyaXB0aW9uJztcbiAgICAgICAgdGhpcy5VSUR1ZURhdGUuY2xhc3NOYW1lID0gJ1VJRHVlRGF0ZSc7IFxuICAgICAgICB0aGlzLlVJUHJpb3JpdHkuaWQgPSAnVUlQcmlvcml0eSc7XG4gICAgfVxufSIsImltcG9ydCB7IHJldHJpZXZlZEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUhhbWJ1cmdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlSGFtYnVyZ2VyKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlSGFtYnVyZ2VyKCkge1xuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUb2dnbGVCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgICAgICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hcHBlbmRDaGlsZChJY29uKTtcblxuICAgICAgICBJY29uLmNsYXNzTmFtZSA9ICdnZy1zdW4nO1xuXG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUnKTtcbiAgICAgICAgICAgIEljb24uY2xhc3NOYW1lID09ICdnZy1zdW4nID8gSWNvbi5jbGFzc05hbWUgPSAnZ2ctbW9vbicgOiBJY29uLmNsYXNzTmFtZSA9ICdnZy1zdW4nO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcmV0cmlldmVkRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyVGFza3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpbHRlclRhc2tzKCk7XG4gICAgfVxuXG4gICAgZmlsdGVyVGFza3MoKSB7XG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFsbExhYmVsLmNsaWNrKCk7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbC5mb2N1cygpO1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuYWxsTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuXG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmb2N1c2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkRWxlbWVudCAhPSByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFsbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW5Qcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGRlblByb2plY3QnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpZGRlbkVsZW1lbnRzKTtcblxuICAgICAgICAgICAgaGlkZGVuRWxlbWVudHMuZm9yRWFjaChoaWRkZW5FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZGVuRWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5Qcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5saW5lJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgQ3JlYXRlSGFtYnVyZ2VyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgQ3JlYXRlVG9nZ2xlQnV0dG9uIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgQ3JlYXRlQnVyZ2VyU2xpZGluZyB9IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQgeyBUYXNrQ3JlYXRvciB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBGb3JtQnV0dG9ucyB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBSZXRyaWV2ZVZhbHVlcyB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBGaWx0ZXJUYXNrcyB9IGZyb20gJy4vdGFza3MnO1xuXG5jb25zdCBjcmVhdGVIYW1idXJnZXIgPSBuZXcgQ3JlYXRlSGFtYnVyZ2VyKCk7XG5jb25zdCBjcmVhdGVUb2dnbGVCdXR0b24gPSBuZXcgQ3JlYXRlVG9nZ2xlQnV0dG9uKCk7XG5jb25zdCBjcmVhdGVCdXJnZXJTbGlkaW5nID0gbmV3IENyZWF0ZUJ1cmdlclNsaWRpbmcoKTtcbmNvbnN0IHRhc2tDcmVhdG9yID0gbmV3IFRhc2tDcmVhdG9yKCk7XG5jb25zdCB0b2dnbGVGb3JtID0gbmV3IEZvcm1CdXR0b25zKCk7XG5jb25zdCByZXRyaWV2ZVZhbHVlcyA9IG5ldyBSZXRyaWV2ZVZhbHVlcygpO1xuY29uc3QgZmlsdGVyVGFza3MgPSBuZXcgRmlsdGVyVGFza3MoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=