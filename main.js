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

const taskArray = []




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

console.log('This is the array branch.');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdHQUF3RztBQUN4Ryx5R0FBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsVUFBVTtBQUNWLGlCQUFpQiw2QkFBNkIsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sd0JBQXdCLHVCQUF1QiwwQkFBMEIsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyx5QkFBeUIsY0FBYyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyx1QkFBdUIsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8seUJBQXlCLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8seUJBQXlCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxL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YUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNzQjtBQUNHO0FBQ0U7QUFDWDtBQUNBO0FBQ0c7QUFDRjs7QUFFdEMsNEJBQTRCLG9EQUFlO0FBQzNDLCtCQUErQix1REFBa0I7QUFDakQsZ0NBQWdDLHlEQUFtQjtBQUNuRCx3QkFBd0IsOENBQVc7QUFDbkMsdUJBQXVCLDhDQUFXO0FBQ2xDLDJCQUEyQixpREFBYztBQUN6Qyx3QkFBd0IsK0NBQVc7O0FBRW5DLHlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL2Nzcy9zdW4uY3NzKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3MvbW9vbi5jc3MpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tbGlnaHQtY29sb3I6ICNmN2Y4ZGU7XG4gICAgLS1tYWluLWRhcmstY29sb3I6ICM0NjQ1NDU7XG4gICAgLS1hbHQtbGlnaHQtY29sb3I6IHdoaXRlO1xuICAgIC0tYWx0LWRhcmstY29sb3I6IHJnYigzOSwgMzgsIDM4KTtcbiAgICAtLWZvbnQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xuICAgIC0tYm9yZGVyLWNvbG9yLWxpZ2h0OiAjZjFmMWYxO1xuICAgIC0tbWFpbi1mb250OiAnTHVjaWRhIEdyYW5kZScsIG1vbm9zcGFjZTtcblxuICAgIC0tbGlnaHQ6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xuICAgIC0tZGFyazogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmRhcmttb2RlIHtcbiAgICAtLWxpZ2h0OiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xuICAgIC0tZGFyazogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XG4gICAgLS1hbHQtbGlnaHQtY29sb3I6IHZhcigtLWFsdC1kYXJrLWNvbG9yKTtcbn1cblxuLyogSGVhZGVyIHN0eWxpbmcuICovXG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xufVxuXG4uaGVhZGVyID4gZGl2IHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi8qIEhhbWJ1cmdlciBTdHlsaW5nICovXG5cbiNoYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuI2hhbWJ1cmdlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgOTAsIDkwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cblxuI2JhcjEsXG4jYmFyMixcbiNiYXIzIHtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBtYXJnaW46IDZweDtcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4uY2hhbmdlICNiYXIxIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTFweCkgcm90YXRlKC00NWRlZyk7IH1cbi5jaGFuZ2UgI2JhcjIgeyBvcGFjaXR5OiAwOyB9XG4uY2hhbmdlICNiYXIzIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExcHgpIHJvdGF0ZSg0NWRlZyk7IH1cblxuLyogVGl0bGUgc3R5bGluZy4gKi9cblxuI3RpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgY29sb3I6IHJnYig1OSwgMTk3LCA1OSk7XG59XG5cbiN0aXRsZSA+IHNwYW4geyBjb2xvcjogdmFyKC0tZGFyayk7IH1cblxuLyogVG9nZ2xlIHN0eWxpbmcuICovXG5cbiN0b2dnbGVDb250YWluZXIge1xuICAgIGhlaWdodDogMjVweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuI3RvZ2dsZUNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL2Nzcy9zdW4uY3NzJyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pIHsgdHJhbnNpdGlvbjogMC44czsgfVxuXG4vKiBDb250ZW50IHN0eWxpbmcuICovXG5cbi5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSBtaW5tYXgoNzQwcHgsIDRmcik7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbn1cblxuLmhhbWJ1cmdlckFjdGl2ZSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjsgfVxuXG4vKiBIYW1idXJnZXIgY29udGVudCBzdHlsaW5nICovXG5cbiNoYW1idXJnZXJDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjhzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcHVycGxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuLmhhbWJ1cmdlckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uaG9tZUNvbnRhaW5lcixcbi5wcm9qZWN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4jaG9tZSxcbiNwcm9qZWN0cyB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuI2FsbCwgI2RlZmF1bHRQcm9qZWN0IHsgbWFyZ2luLXRvcDogMTVweDsgfVxuXG4jYWRkUHJvamVjdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkUHJvamVjdDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcbn1cblxuLmhvbWVDb250YWluZXIgPiBkaXY6bm90KCNob21lKSxcbi5wcm9qZWN0Q29udGFpbmVyID4gZGl2Om5vdCgjcHJvamVjdHMpIHtcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSk6aG92ZXIsXG4ucHJvamVjdENvbnRhaW5lciA+IGRpdjpub3QoI3Byb2plY3RzKTpob3ZlciB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDIwNCwgNDcsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpOmZvY3VzLFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cyk6Zm9jdXMsXG4uZm9jdXNlZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDIwNCwgNDcsIDAuNyk7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbiNob21lOjphZnRlcixcbiNwcm9qZWN0czo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMC4xcmVtO1xuICAgIGNvbnRlbnQ6ICcuJztcbn1cblxuLyogTWFpbiBjb250ZW50IHN0eWxpbmcgKi9cblxuLm1haW5Db250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWxpZ2h0LWNvbG9yKTtcbiAgICBpbnNldDogMCU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjhzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIG9wYWNpdHkgMC44cztcbiAgICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3c7XG59XG5cbi5tYWluQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCBwdXJwbGU7XG59XG5cbi5tYWluQ29udGFpbmVyID4gZGl2IHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDk1JTtcbn1cblxuLm1haW5Db250YWluZXIgPiBkaXYgPiBkaXYge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jdGFza2JhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAxNjEsIDM2KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNub1Rhc2tzQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUlO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xufVxuXG4jYWRkVGFzayB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBGb3JtIFRhc2sgU3R5bGluZyAqL1xuXG4uVUlUYXNrQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucmlnaHRUYXNrRWxlbWVudHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogU3R5bGluZyBmb3JtIGVsZW1lbnQuICovXG5cbi5tb2RhbCxcbi5wcm9qZWN0TW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4ubW9kYWxDb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnIgMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODg4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwOyAgIFxufVxuXG4ucHJvamVjdE1vZGFsQ29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWxpZ2h0LWNvbG9yKTtcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4ODg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50b3BQcm9qZWN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsb3NlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uZm9ybVRpdGxlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNmb3JtVGl0bGUge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAxNzUsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Nsb3NlLFxuI3Byb2plY3RDbG9zZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b3BFbGVtZW50Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5ib3R0b21FbGVtZW50Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZ2FwOiA1MXB4O1xufVxuXG4uc3VibWl0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNzdWJtaXQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Rlc2NyaXB0aW9uIHsgaGVpZ2h0OiA3MHB4OyB9XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5sYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZTsgfVxuLmhpZGRlblByb2plY3QgeyBkaXNwbGF5OiBub25lOyB9XG4uaW5saW5lIHsgZGlzcGxheTogaW5saW5lOyB9XG4udGVtcGxhdGVSZXNldCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdz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QjtJQUNoQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQSxRQUFRLGNBQWMsRUFBRTtBQUN4QixVQUFVLGFBQWEsRUFBRTtBQUN6QixpQkFBaUIsYUFBYSxFQUFFO0FBQ2hDLFVBQVUsZUFBZSxFQUFFO0FBQzNCLGlCQUFpQiwwQkFBMEIsRUFBRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL2Nzcy9zdW4uY3NzJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3MvbW9vbi5jc3MnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1saWdodC1jb2xvcjogI2Y3ZjhkZTtcXG4gICAgLS1tYWluLWRhcmstY29sb3I6ICM0NjQ1NDU7XFxuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1hbHQtZGFyay1jb2xvcjogcmdiKDM5LCAzOCwgMzgpO1xcbiAgICAtLWZvbnQtY29sb3I6ICMwMDAwMDA7XFxuICAgIC0tZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxuICAgIC0tYm9yZGVyLWNvbG9yLWxpZ2h0OiAjZjFmMWYxO1xcbiAgICAtLW1haW4tZm9udDogJ0x1Y2lkYSBHcmFuZGUnLCBtb25vc3BhY2U7XFxuXFxuICAgIC0tbGlnaHQ6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICAtLWRhcms6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZGFya21vZGUge1xcbiAgICAtLWxpZ2h0OiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xcbiAgICAtLWRhcms6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICAtLWFsdC1saWdodC1jb2xvcjogdmFyKC0tYWx0LWRhcmstY29sb3IpO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZy4gKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xcbn1cXG5cXG4uaGVhZGVyID4gZGl2IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogSGFtYnVyZ2VyIFN0eWxpbmcgKi9cXG5cXG4jaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jaGFtYnVyZ2VyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgOTAsIDkwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XFxufVxcblxcbiNiYXIxLFxcbiNiYXIyLFxcbiNiYXIzIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbi5jaGFuZ2UgI2JhcjEgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMXB4KSByb3RhdGUoLTQ1ZGVnKTsgfVxcbi5jaGFuZ2UgI2JhcjIgeyBvcGFjaXR5OiAwOyB9XFxuLmNoYW5nZSAjYmFyMyB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMXB4KSByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLyogVGl0bGUgc3R5bGluZy4gKi9cXG5cXG4jdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6IHJnYig1OSwgMTk3LCA1OSk7XFxufVxcblxcbiN0aXRsZSA+IHNwYW4geyBjb2xvcjogdmFyKC0tZGFyayk7IH1cXG5cXG4vKiBUb2dnbGUgc3R5bGluZy4gKi9cXG5cXG4jdG9nZ2xlQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuI3RvZ2dsZUNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvY3NzL3N1bi5jc3MnKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pIHsgdHJhbnNpdGlvbjogMC44czsgfVxcblxcbi8qIENvbnRlbnQgc3R5bGluZy4gKi9cXG5cXG4uY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgbWlubWF4KDc0MHB4LCA0ZnIpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XFxufVxcblxcbi5oYW1idXJnZXJBY3RpdmUgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7IH1cXG5cXG4vKiBIYW1idXJnZXIgY29udGVudCBzdHlsaW5nICovXFxuXFxuI2hhbWJ1cmdlckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjhzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG4uaGFtYnVyZ2VyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmhvbWVDb250YWluZXIsXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNob21lLFxcbiNwcm9qZWN0cyB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jYWxsLCAjZGVmYXVsdFByb2plY3QgeyBtYXJnaW4tdG9wOiAxNXB4OyB9XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFByb2plY3Q6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xcbn1cXG5cXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpLFxcbi5wcm9qZWN0Q29udGFpbmVyID4gZGl2Om5vdCgjcHJvamVjdHMpIHtcXG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpOmhvdmVyLFxcbi5wcm9qZWN0Q29udGFpbmVyID4gZGl2Om5vdCgjcHJvamVjdHMpOmhvdmVyIHtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAyMDQsIDQ3LCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpOmZvY3VzLFxcbi5wcm9qZWN0Q29udGFpbmVyID4gZGl2Om5vdCgjcHJvamVjdHMpOmZvY3VzLFxcbi5mb2N1c2VkIHtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAyMDQsIDQ3LCAwLjcpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxufVxcblxcbiNob21lOjphZnRlcixcXG4jcHJvamVjdHM6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xcbiAgICBmb250LXNpemU6IDAuMXJlbTtcXG4gICAgY29udGVudDogJy4nO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5tYWluQ29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWxpZ2h0LWNvbG9yKTtcXG4gICAgaW5zZXQ6IDAlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC41cywgb3BhY2l0eSAwLjhzO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBwdXJwbGU7XFxufVxcblxcbi5tYWluQ29udGFpbmVyID4gZGl2IHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciA+IGRpdiA+IGRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0YXNrYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDE2MSwgMzYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNub1Rhc2tzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4jYWRkVGFzayB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRm9ybSBUYXNrIFN0eWxpbmcgKi9cXG5cXG4uVUlUYXNrQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ucmlnaHRUYXNrRWxlbWVudHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvcm0gZWxlbWVudC4gKi9cXG5cXG4ubW9kYWwsXFxuLnByb2plY3RNb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5tb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWxpZ2h0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg4ODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAyOTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgICBcXG59XFxuXFxuLnByb2plY3RNb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4ODg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50b3BQcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5mb3JtVGl0bGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNmb3JtVGl0bGUge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAxNzUsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjbG9zZSxcXG4jcHJvamVjdENsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvcEVsZW1lbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5ib3R0b21FbGVtZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZ2FwOiA1MXB4O1xcbn1cXG5cXG4uc3VibWl0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7IGhlaWdodDogNzBweDsgfVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmxhYmVsIHsgZGlzcGxheTogYmxvY2s7IH1cXG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZTsgfVxcbi5oaWRkZW5Qcm9qZWN0IHsgZGlzcGxheTogbm9uZTsgfVxcbi5pbmxpbmUgeyBkaXNwbGF5OiBpbmxpbmU7IH1cXG4udGVtcGxhdGVSZXNldCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJldHJpZXZlZEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUJ1cmdlclNsaWRpbmcge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc2xpZGVCdXJnZXIoKTtcbiAgICB9XG5cbiAgICBzbGlkZUJ1cmdlcigpIHtcblxuICAgICAgICAvLyBUZW1wb3JhcmlseSByZW1vdmluZyBoaWRkZW4gYW5kIHRlbXBsYXRlIHJlc2V0IGZyb20gSFRNTC5cblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmV0cmlldmVkRWxlbWVudHMuaGFtYnVyZ2VyQ29udGVudC5jbGFzc05hbWUgPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubWFpbkNvbnRlbnQuc3R5bGUubGVmdCA9ICcyMCUnO1xuICAgICAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXJDb250ZW50LnN0eWxlLmxlZnQgPSAnMCUnO1xuICAgICAgICAgICAgICAgIH0sIDEpXG4gICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuaGFtYnVyZ2VyQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5jb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ3RlbXBsYXRlUmVzZXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubWFpbkNvbnRlbnQuc3R5bGUubGVmdCA9ICcwJSc7XG4gICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuaGFtYnVyZ2VyQ29udGVudC5zdHlsZS5sZWZ0ID0gJy0xMDAlJztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuaGFtYnVyZ2VyQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCd0ZW1wbGF0ZVJlc2V0Jyk7XG4gICAgICAgICAgICAgICAgfSwgODAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuIiwiY29uc3QgcmV0cmlldmVkRWxlbWVudHMgPSB7XG4gICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudCcpWzBdLFxuICAgIG1haW5Db250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGVudCcpWzBdLFxuICAgIG1haW5Db250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5Db250YWluZXInKVswXSxcbiAgICBoYW1idXJnZXJDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hhbWJ1cmdlckNvbnRhaW5lcicpWzBdLFxuICAgIGhhbWJ1cmdlckNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXJDb250ZW50JyksXG4gICAgaGFtYnVyZ2VyQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJyksXG4gICAgaGFtYnVyZ2VyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJyksXG4gICAgYWRkUHJvamVjdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKSxcbiAgICBmb3JtOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkZvcm0nKSxcbiAgICBoZWFkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcicpWzBdLFxuICAgIG1vZGFsOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpWzBdLFxuICAgIG1vZGFsQ29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWxDb250ZW50JylbMF0sXG4gICAgc3VibWl0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JyksXG4gICAgdGFza05hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLFxuICAgIGR1ZURhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyksXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLFxuICAgIHByaW9yaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKSxcbiAgICBub1Rhc2tzQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9UYXNrc0NvbnRhaW5lcicpLFxuICAgIGNsb3NlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKSxcbiAgICBkdWVUb2RheTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5JyksXG4gICAgZHVlVGhpc1dlZWs6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXZlbicpLFxuICAgIGRlZmF1bHRQcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdFByb2plY3QnKSxcbiAgICB0YXNrYmFyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza2JhcicpLFxuICAgIFVJRHVlRGF0ZXM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ1VJRHVlRGF0ZScpLFxuICAgIFVJVGFza0NvbnRhaW5lcnM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ1VJVGFza0NvbnRhaW5lcicpLFxuICAgIGFsbDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWxsJylbMF0sXG4gICAgYWxsTGFiZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxMYWJlbCcpLFxuICAgIGFkZFRhc2s6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrJyksXG4gICAgcHJvamVjdE1vZGFsOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0TW9kYWwnKVswXSxcbiAgICBwcm9qZWN0Q2xvc2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q2xvc2UnKSxcbiAgICBwcm9qZWN0U3VibWl0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpLFxuICAgIHByb2plY3RDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RDb250YWluZXInKVswXSxcbiAgICBwcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLFxufVxuXG5jb25zdCB0YXNrQXJyYXkgPSBbXVxuXG5leHBvcnQgeyByZXRyaWV2ZWRFbGVtZW50cyB9O1xuZXhwb3J0IHsgdGFza0FycmF5IH07IiwiaW1wb3J0IHsgcmV0cmlldmVkRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1CdXR0b25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2dnbGVGb3JtKCk7XG4gICAgICAgIHRoaXMuY2xvc2VGb3JtKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybSgpIHtcbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMucHJvamVjdE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsb3NlRm9ybSgpIHtcbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5wcm9qZWN0Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5wcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFza0NyZWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXRyaWV2ZVZhbHVlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmV0cmlldmVWYWx1ZXMoKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZVZhbHVlcygpIHtcbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrQ3JlYXRvcih0YXNrTmFtZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBwcm9qZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIG5ldyBDcmVhdGVUYXNrVUkodGFzayk7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMucHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgbmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lTG93ZXJjYXNlID0gcHJvamVjdE5hbWUudmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbmV3UHJvamVjdC5pZCA9IHByb2plY3ROYW1lTG93ZXJjYXNlICsgJ1Byb2plY3QnO1xuICAgICAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgbmV3VGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBwcm9qZWN0TmFtZUxvd2VyY2FzZSArICcgaGlkZGVuJztcbiAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudmFsdWU7XG5cbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3QsIGFkZFByb2plY3QpO1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnByb2plY3QuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnByb2plY3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgbmV3UHJvamVjdC50YWJJbmRleCA9IG5ld1Byb2plY3QucHJldmlvdXNFbGVtZW50U2libGluZy50YWJJbmRleCArIDE7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVRhc2tVSSB7XG4gICAgY29uc3RydWN0b3IodGFzaykge1xuICAgICAgICB0aGlzLmNyZWF0ZVRhc2tVSSh0YXNrKTtcbiAgICAgICAgdGhpcy5sZWZ0VGFza0VsZW1lbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodFRhc2tFbGVtZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuVUlUYXNrTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuVUlEZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuVUlEdWVEYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5VSVByaW9yaXR5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrVUkodGFzaykge1xuXG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm5vVGFza3NDb250YWluZXIgPyByZXRyaWV2ZWRFbGVtZW50cy5ub1Rhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBjb25zb2xlLmxvZygnTm8gdGFza3MnKTtcblxuICAgICAgICB0aGlzLmxlZnRUYXNrRWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5yaWdodFRhc2tFbGVtZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLlVJVGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5VSURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuVUlEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuVUlQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRoaXMuVUlUYXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRoaXMuVUlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuVUlEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWU7XG4gICAgICAgIHRoaXMuVUlQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAgICAgdGhpcy5hc3NpZ25Db250YWluZXIodGFzay5wcm9qZWN0KTtcbiAgICB9XG5cbiAgICBhc3NpZ25Db250YWluZXIoY29udGFpbmVyKSB7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lckhvbGRlciA9IGNvbnRhaW5lcjtcbiAgICAgICAgbGV0IGxvd2VyY2FzZWRDb250YWluZXIgPSBjb250YWluZXJIb2xkZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxvd2VyY2FzZWRDb250YWluZXIpWzBdO1xuXG4gICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3VGFza05hbWUuY2xhc3NOYW1lID0gJ1VJVGFza0NvbnRhaW5lcic7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tOYW1lKTtcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLmFwcGVuZENoaWxkKHRoaXMubGVmdFRhc2tFbGVtZW50cyk7XG4gICAgICAgICAgICBuZXdUYXNrTmFtZS5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0VGFza0VsZW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3Q29udGFpbmVyLmNsYXNzTmFtZSA9IGxvd2VyY2FzZWRDb250YWluZXIgKyAnIGhpZGRlblByb2plY3QnO1xuICAgICAgICAgICAgbmV3VGFza05hbWUuY2xhc3NOYW1lID0gJ1VJVGFza0NvbnRhaW5lcic7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcik7XG4gICAgICAgICAgICBuZXdDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza05hbWUpO1xuICAgICAgICAgICAgbmV3VGFza05hbWUuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0VGFza0VsZW1lbnRzKTtcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLmFwcGVuZENoaWxkKHRoaXMucmlnaHRUYXNrRWxlbWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZWZ0VGFza0VsZW1lbnRzLmFwcGVuZENoaWxkKHRoaXMuVUlUYXNrTmFtZSk7XG4gICAgICAgIHRoaXMubGVmdFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZCh0aGlzLlVJRGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLnJpZ2h0VGFza0VsZW1lbnRzLmFwcGVuZENoaWxkKHRoaXMuVUlEdWVEYXRlKTtcbiAgICAgICAgdGhpcy5yaWdodFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZCh0aGlzLlVJUHJpb3JpdHkpO1xuXG4gICAgICAgIHRoaXMubGVmdFRhc2tFbGVtZW50cy5jbGFzc05hbWUgPSAnbGVmdFRhc2tFbGVtZW50cyc7XG4gICAgICAgIHRoaXMucmlnaHRUYXNrRWxlbWVudHMuY2xhc3NOYW1lID0gJ3JpZ2h0VGFza0VsZW1lbnRzJztcbiAgICAgICAgdGhpcy5VSVRhc2tOYW1lLmlkID0gJ1VJVGFza05hbWUnOyBcbiAgICAgICAgdGhpcy5VSURlc2NyaXB0aW9uLmlkID0gJ1VJRGVzY3JpcHRpb24nO1xuICAgICAgICB0aGlzLlVJRHVlRGF0ZS5jbGFzc05hbWUgPSAnVUlEdWVEYXRlJzsgXG4gICAgICAgIHRoaXMuVUlQcmlvcml0eS5pZCA9ICdVSVByaW9yaXR5JztcbiAgICB9XG59IiwiaW1wb3J0IHsgcmV0cmlldmVkRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlSGFtYnVyZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2dnbGVIYW1idXJnZXIoKTtcbiAgICB9XG5cbiAgICB0b2dnbGVIYW1idXJnZXIoKSB7XG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2UnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVRvZ2dsZUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICAgICAgICB0b2dnbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlQnV0dG9uKTtcbiAgICAgICAgdG9nZ2xlQnV0dG9uLmFwcGVuZENoaWxkKEljb24pO1xuXG4gICAgICAgIEljb24uY2xhc3NOYW1lID0gJ2dnLXN1bic7XG5cbiAgICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZScpO1xuICAgICAgICAgICAgSWNvbi5jbGFzc05hbWUgPT0gJ2dnLXN1bicgPyBJY29uLmNsYXNzTmFtZSA9ICdnZy1tb29uJyA6IEljb24uY2xhc3NOYW1lID0gJ2dnLXN1bic7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyByZXRyaWV2ZWRFbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJUYXNrcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVGFza3MoKTtcbiAgICB9XG5cbiAgICBmaWx0ZXJUYXNrcygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuYWxsTGFiZWwuY2xpY2soKTtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFsbExhYmVsLmZvY3VzKCk7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG5cbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGZvY3VzZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRFbGVtZW50ICE9IHJldHJpZXZlZEVsZW1lbnRzLmFsbExhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFsbExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuYWxsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlblByb2plY3QnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFsbExhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZGVuUHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGlkZGVuRWxlbWVudHMpO1xuXG4gICAgICAgICAgICBoaWRkZW5FbGVtZW50cy5mb3JFYWNoKGhpZGRlbkVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoaWRkZW5FbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblByb2plY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmxpbmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSlcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBDcmVhdGVIYW1idXJnZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBDcmVhdGVUb2dnbGVCdXR0b24gfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBDcmVhdGVCdXJnZXJTbGlkaW5nIH0gZnJvbSAnLi9jb250ZW50JztcbmltcG9ydCB7IFRhc2tDcmVhdG9yIH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7IEZvcm1CdXR0b25zIH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7IFJldHJpZXZlVmFsdWVzIH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7IEZpbHRlclRhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cbmNvbnN0IGNyZWF0ZUhhbWJ1cmdlciA9IG5ldyBDcmVhdGVIYW1idXJnZXIoKTtcbmNvbnN0IGNyZWF0ZVRvZ2dsZUJ1dHRvbiA9IG5ldyBDcmVhdGVUb2dnbGVCdXR0b24oKTtcbmNvbnN0IGNyZWF0ZUJ1cmdlclNsaWRpbmcgPSBuZXcgQ3JlYXRlQnVyZ2VyU2xpZGluZygpO1xuY29uc3QgdGFza0NyZWF0b3IgPSBuZXcgVGFza0NyZWF0b3IoKTtcbmNvbnN0IHRvZ2dsZUZvcm0gPSBuZXcgRm9ybUJ1dHRvbnMoKTtcbmNvbnN0IHJldHJpZXZlVmFsdWVzID0gbmV3IFJldHJpZXZlVmFsdWVzKCk7XG5jb25zdCBmaWx0ZXJUYXNrcyA9IG5ldyBGaWx0ZXJUYXNrcygpO1xuXG5jb25zb2xlLmxvZygnVGhpcyBpcyB0aGUgYXJyYXkgYnJhbmNoLicpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==