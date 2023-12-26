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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdHQUF3RztBQUN4Ryx5R0FBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsVUFBVTtBQUNWLGlCQUFpQiw2QkFBNkIsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sd0JBQXdCLHVCQUF1QiwwQkFBMEIsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyx5QkFBeUIsY0FBYyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyx1QkFBdUIsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8seUJBQXlCLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8seUJBQXlCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxL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YUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNzQjtBQUNHO0FBQ0U7QUFDWDtBQUNBO0FBQ0c7QUFDRjs7QUFFdEMsNEJBQTRCLG9EQUFlO0FBQzNDLCtCQUErQix1REFBa0I7QUFDakQsZ0NBQWdDLHlEQUFtQjtBQUNuRCx3QkFBd0IsOENBQVc7QUFDbkMsdUJBQXVCLDhDQUFXO0FBQ2xDLDJCQUEyQixpREFBYztBQUN6Qyx3QkFBd0IsK0NBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3Mvc3VuLmNzcyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvY3NzL21vb24uY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWxpZ2h0LWNvbG9yOiAjZjdmOGRlO1xuICAgIC0tbWFpbi1kYXJrLWNvbG9yOiAjNDY0NTQ1O1xuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWFsdC1kYXJrLWNvbG9yOiByZ2IoMzksIDM4LCAzOCk7XG4gICAgLS1mb250LWNvbG9yOiAjMDAwMDAwO1xuICAgIC0tZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvcjogIzIyMjtcbiAgICAtLWJvcmRlci1jb2xvci1saWdodDogI2YxZjFmMTtcbiAgICAtLW1haW4tZm9udDogJ0x1Y2lkYSBHcmFuZGUnLCBtb25vc3BhY2U7XG5cbiAgICAtLWxpZ2h0OiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcbiAgICAtLWRhcms6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5kYXJrbW9kZSB7XG4gICAgLS1saWdodDogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcbiAgICAtLWRhcms6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiB2YXIoLS1hbHQtZGFyay1jb2xvcik7XG59XG5cbi8qIEhlYWRlciBzdHlsaW5nLiAqL1xuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbn1cblxuLmhlYWRlciA+IGRpdiB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBIYW1idXJnZXIgU3R5bGluZyAqL1xuXG4jaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNoYW1idXJnZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkwLCA5MCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG59XG5cbiNiYXIxLFxuI2JhcjIsXG4jYmFyMyB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLmNoYW5nZSAjYmFyMSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDExcHgpIHJvdGF0ZSgtNDVkZWcpOyB9XG4uY2hhbmdlICNiYXIyIHsgb3BhY2l0eTogMDsgfVxuLmNoYW5nZSAjYmFyMyB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMXB4KSByb3RhdGUoNDVkZWcpOyB9XG5cbi8qIFRpdGxlIHN0eWxpbmcuICovXG5cbiN0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGNvbG9yOiByZ2IoNTksIDE5NywgNTkpO1xufVxuXG4jdGl0bGUgPiBzcGFuIHsgY29sb3I6IHZhcigtLWRhcmspOyB9XG5cbi8qIFRvZ2dsZSBzdHlsaW5nLiAqL1xuXG4jdG9nZ2xlQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbiN0b2dnbGVDb250YWluZXIgPiBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3Mvc3VuLmNzcycpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaSB7IHRyYW5zaXRpb246IDAuOHM7IH1cblxuLyogQ29udGVudCBzdHlsaW5nLiAqL1xuXG4uY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgbWlubWF4KDc0MHB4LCA0ZnIpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XG59XG5cbi5oYW1idXJnZXJBY3RpdmUgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7IH1cblxuLyogSGFtYnVyZ2VyIGNvbnRlbnQgc3R5bGluZyAqL1xuXG4jaGFtYnVyZ2VyQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbi5oYW1idXJnZXJDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmhvbWVDb250YWluZXIsXG4ucHJvamVjdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuI2hvbWUsXG4jcHJvamVjdHMge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiNhbGwsICNkZWZhdWx0UHJvamVjdCB7IG1hcmdpbi10b3A6IDE1cHg7IH1cblxuI2FkZFByb2plY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2FkZFByb2plY3Q6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XG59XG5cbi5ob21lQ29udGFpbmVyID4gZGl2Om5vdCgjaG9tZSksXG4ucHJvamVjdENvbnRhaW5lciA+IGRpdjpub3QoI3Byb2plY3RzKSB7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaG9tZUNvbnRhaW5lciA+IGRpdjpub3QoI2hvbWUpOmhvdmVyLFxuLnByb2plY3RDb250YWluZXIgPiBkaXY6bm90KCNwcm9qZWN0cyk6aG92ZXIge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAyMDQsIDQ3LCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWVDb250YWluZXIgPiBkaXY6bm90KCNob21lKTpmb2N1cyxcbi5wcm9qZWN0Q29udGFpbmVyID4gZGl2Om5vdCgjcHJvamVjdHMpOmZvY3VzLFxuLmZvY3VzZWQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAyMDQsIDQ3LCAwLjcpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4jaG9tZTo6YWZ0ZXIsXG4jcHJvamVjdHM6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrKTtcbiAgICBmb250LXNpemU6IDAuMXJlbTtcbiAgICBjb250ZW50OiAnLic7XG59XG5cbi8qIE1haW4gY29udGVudCBzdHlsaW5nICovXG5cbi5tYWluQ29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XG4gICAgaW5zZXQ6IDAlO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjVzLCBvcGFjaXR5IDAuOHM7XG4gICAgYm9yZGVyOiA1cHggc29saWQgeWVsbG93O1xufVxuXG4ubWFpbkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMTBweDtcbiAgICBib3JkZXI6IDEwcHggc29saWQgcHVycGxlO1xufVxuXG4ubWFpbkNvbnRhaW5lciA+IGRpdiB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA5NSU7XG59XG5cbi5tYWluQ29udGFpbmVyID4gZGl2ID4gZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3Rhc2tiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMTYxLCAzNik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jbm9UYXNrc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICB3aWR0aDogOTUlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcbn1cblxuI2FkZFRhc2sge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRm9ybSBUYXNrIFN0eWxpbmcgKi9cblxuLlVJVGFza0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJpZ2h0VGFza0VsZW1lbnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIFN0eWxpbmcgZm9ybSBlbGVtZW50LiAqL1xuXG4ubW9kYWwsXG4ucHJvamVjdE1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLm1vZGFsQ29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyIDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtbGlnaHQtY29sb3IpO1xuICAgIG1hcmdpbjogMTUlIGF1dG87XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg4ODtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAyOTBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgICBcbn1cblxuLnByb2plY3RNb2RhbENvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODg4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udG9wUHJvamVjdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbG9zZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmZvcm1UaXRsZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jZm9ybVRpdGxlIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMTc1LCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjbG9zZSxcbiNwcm9qZWN0Q2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9wRWxlbWVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uYm90dG9tRWxlbWVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGdhcDogNTFweDtcbn1cblxuLnN1Ym1pdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jc3VibWl0IHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNkZXNjcmlwdGlvbiB7IGhlaWdodDogNzBweDsgfVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxubGFiZWwgeyBkaXNwbGF5OiBibG9jazsgfVxuLmhpZGRlbiB7IGRpc3BsYXk6IG5vbmU7IH1cbi5oaWRkZW5Qcm9qZWN0IHsgZGlzcGxheTogbm9uZTsgfVxuLmlubGluZSB7IGRpc3BsYXk6IGlubGluZTsgfVxuLnRlbXBsYXRlUmVzZXQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFH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dUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUEsUUFBUSxjQUFjLEVBQUU7QUFDeEIsVUFBVSxhQUFhLEVBQUU7QUFDekIsaUJBQWlCLGFBQWEsRUFBRTtBQUNoQyxVQUFVLGVBQWUsRUFBRTtBQUMzQixpQkFBaUIsMEJBQTBCLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9jc3Mvc3VuLmNzcycpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvY3NzL21vb24uY3NzJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tbGlnaHQtY29sb3I6ICNmN2Y4ZGU7XFxuICAgIC0tbWFpbi1kYXJrLWNvbG9yOiAjNDY0NTQ1O1xcbiAgICAtLWFsdC1saWdodC1jb2xvcjogd2hpdGU7XFxuICAgIC0tYWx0LWRhcmstY29sb3I6IHJnYigzOSwgMzgsIDM4KTtcXG4gICAgLS1mb250LWNvbG9yOiAjMDAwMDAwO1xcbiAgICAtLWZvbnQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgICAtLWJvcmRlci1jb2xvci1saWdodDogI2YxZjFmMTtcXG4gICAgLS1tYWluLWZvbnQ6ICdMdWNpZGEgR3JhbmRlJywgbW9ub3NwYWNlO1xcblxcbiAgICAtLWxpZ2h0OiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgLS1kYXJrOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmRhcmttb2RlIHtcXG4gICAgLS1saWdodDogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcXG4gICAgLS1kYXJrOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6IHZhcigtLWFsdC1kYXJrLWNvbG9yKTtcXG59XFxuXFxuLyogSGVhZGVyIHN0eWxpbmcuICovXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcXG59XFxuXFxuLmhlYWRlciA+IGRpdiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIEhhbWJ1cmdlciBTdHlsaW5nICovXFxuXFxuI2hhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuI2hhbWJ1cmdlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkwLCA5MCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xcbn1cXG5cXG4jYmFyMSxcXG4jYmFyMixcXG4jYmFyMyB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIG1hcmdpbjogNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG5cXG4uY2hhbmdlICNiYXIxIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTFweCkgcm90YXRlKC00NWRlZyk7IH1cXG4uY2hhbmdlICNiYXIyIHsgb3BhY2l0eTogMDsgfVxcbi5jaGFuZ2UgI2JhcjMgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTFweCkgcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi8qIFRpdGxlIHN0eWxpbmcuICovXFxuXFxuI3RpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGNvbG9yOiByZ2IoNTksIDE5NywgNTkpO1xcbn1cXG5cXG4jdGl0bGUgPiBzcGFuIHsgY29sb3I6IHZhcigtLWRhcmspOyB9XFxuXFxuLyogVG9nZ2xlIHN0eWxpbmcuICovXFxuXFxuI3RvZ2dsZUNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbiN0b2dnbGVDb250YWluZXIgPiBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL2Nzcy9zdW4uY3NzJyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaSB7IHRyYW5zaXRpb246IDAuOHM7IH1cXG5cXG4vKiBDb250ZW50IHN0eWxpbmcuICovXFxuXFxuLmNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCg3NDBweCwgNGZyKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xcbn1cXG5cXG4uaGFtYnVyZ2VyQWN0aXZlIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyOyB9XFxuXFxuLyogSGFtYnVyZ2VyIGNvbnRlbnQgc3R5bGluZyAqL1xcblxcbiNoYW1idXJnZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTEwMCU7XFxuICAgIHRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwdXJwbGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuLmhhbWJ1cmdlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5ob21lQ29udGFpbmVyLFxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jaG9tZSxcXG4jcHJvamVjdHMge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI2FsbCwgI2RlZmF1bHRQcm9qZWN0IHsgbWFyZ2luLXRvcDogMTVweDsgfVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRQcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcXG59XFxuXFxuLmhvbWVDb250YWluZXIgPiBkaXY6bm90KCNob21lKSxcXG4ucHJvamVjdENvbnRhaW5lciA+IGRpdjpub3QoI3Byb2plY3RzKSB7XFxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvbWVDb250YWluZXIgPiBkaXY6bm90KCNob21lKTpob3ZlcixcXG4ucHJvamVjdENvbnRhaW5lciA+IGRpdjpub3QoI3Byb2plY3RzKTpob3ZlciB7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMjA0LCA0NywgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvbWVDb250YWluZXIgPiBkaXY6bm90KCNob21lKTpmb2N1cyxcXG4ucHJvamVjdENvbnRhaW5lciA+IGRpdjpub3QoI3Byb2plY3RzKTpmb2N1cyxcXG4uZm9jdXNlZCB7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMjA0LCA0NywgMC43KTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbn1cXG5cXG4jaG9tZTo6YWZ0ZXIsXFxuI3Byb2plY3RzOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAwLjFyZW07XFxuICAgIGNvbnRlbnQ6ICcuJztcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IHN0eWxpbmcgKi9cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XFxuICAgIGluc2V0OiAwJTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjhzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIG9wYWNpdHkgMC44cztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgeWVsbG93O1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgcHVycGxlO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLm1haW5Db250YWluZXIgPiBkaXYgPiBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdGFza2JhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAxNjEsIDM2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbm9UYXNrc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNSU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZvcm0gVGFzayBTdHlsaW5nICovXFxuXFxuLlVJVGFza0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnJpZ2h0VGFza0VsZW1lbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3JtIGVsZW1lbnQuICovXFxuXFxuLm1vZGFsLFxcbi5wcm9qZWN0TW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ubW9kYWxDb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4ODg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMjkwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7ICAgXFxufVxcblxcbi5wcm9qZWN0TW9kYWxDb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtbGlnaHQtY29sb3IpO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODg4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udG9wUHJvamVjdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2VDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4uZm9ybVRpdGxlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jZm9ybVRpdGxlIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMTc1LCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY2xvc2UsXFxuI3Byb2plY3RDbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b3BFbGVtZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uYm90dG9tRWxlbWVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGdhcDogNTFweDtcXG59XFxuXFxuLnN1Ym1pdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jc3VibWl0IHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24geyBoZWlnaHQ6IDcwcHg7IH1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5sYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyB9XFxuLmhpZGRlbiB7IGRpc3BsYXk6IG5vbmU7IH1cXG4uaGlkZGVuUHJvamVjdCB7IGRpc3BsYXk6IG5vbmU7IH1cXG4uaW5saW5lIHsgZGlzcGxheTogaW5saW5lOyB9XFxuLnRlbXBsYXRlUmVzZXQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZXRyaWV2ZWRFbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVCdXJnZXJTbGlkaW5nIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnNsaWRlQnVyZ2VyKCk7XG4gICAgfVxuXG4gICAgc2xpZGVCdXJnZXIoKSB7XG5cbiAgICAgICAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZpbmcgaGlkZGVuIGFuZCB0ZW1wbGF0ZSByZXNldCBmcm9tIEhUTUwuXG5cbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuaGFtYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuY2xhc3NOYW1lID09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm1haW5Db250ZW50LnN0eWxlLmxlZnQgPSAnMjAlJztcbiAgICAgICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuaGFtYnVyZ2VyQ29udGVudC5zdHlsZS5sZWZ0ID0gJzAlJztcbiAgICAgICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCd0ZW1wbGF0ZVJlc2V0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm1haW5Db250ZW50LnN0eWxlLmxlZnQgPSAnMCUnO1xuICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuc3R5bGUubGVmdCA9ICctMTAwJSc7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmhhbWJ1cmdlckNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGVtcGxhdGVSZXNldCcpO1xuICAgICAgICAgICAgICAgIH0sIDgwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbiIsImNvbnN0IHJldHJpZXZlZEVsZW1lbnRzID0ge1xuICAgIGNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnQnKVswXSxcbiAgICBtYWluQ29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbkNvbnRlbnQnKVswXSxcbiAgICBtYWluQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGFpbmVyJylbMF0sXG4gICAgaGFtYnVyZ2VyQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoYW1idXJnZXJDb250YWluZXInKVswXSxcbiAgICBoYW1idXJnZXJDb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyQ29udGVudCcpLFxuICAgIGhhbWJ1cmdlckJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpLFxuICAgIGhhbWJ1cmdlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpLFxuICAgIGFkZFByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0JyksXG4gICAgZm9ybTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Gb3JtJyksXG4gICAgaGVhZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXSxcbiAgICBtb2RhbDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwnKVswXSxcbiAgICBtb2RhbENvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsQ29udGVudCcpWzBdLFxuICAgIHN1Ym1pdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpLFxuICAgIHRhc2tOYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKSxcbiAgICBkdWVEYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLFxuICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKSxcbiAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JyksXG4gICAgbm9UYXNrc0NvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vVGFza3NDb250YWluZXInKSxcbiAgICBjbG9zZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJyksXG4gICAgZHVlVG9kYXk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpLFxuICAgIGR1ZVRoaXNXZWVrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V2ZW4nKSxcbiAgICBkZWZhdWx0UHJvamVjdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRQcm9qZWN0JyksXG4gICAgdGFza2JhcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tiYXInKSxcbiAgICBVSUR1ZURhdGVzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdVSUR1ZURhdGUnKSxcbiAgICBVSVRhc2tDb250YWluZXJzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdVSVRhc2tDb250YWluZXInKSxcbiAgICBhbGw6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FsbCcpWzBdLFxuICAgIGFsbExhYmVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTGFiZWwnKSxcbiAgICBhZGRUYXNrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpLFxuICAgIHByb2plY3RNb2RhbDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdE1vZGFsJylbMF0sXG4gICAgcHJvamVjdENsb3NlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENsb3NlJyksXG4gICAgcHJvamVjdFN1Ym1pdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RTdWJtaXQnKSxcbiAgICBwcm9qZWN0Q29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0Q29udGFpbmVyJylbMF0sXG4gICAgcHJvamVjdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKSxcbn1cblxuY29uc3QgdGFza0FycmF5ID0gW11cblxuZXhwb3J0IHsgcmV0cmlldmVkRWxlbWVudHMgfTtcbmV4cG9ydCB7IHRhc2tBcnJheSB9OyIsImltcG9ydCB7IHJldHJpZXZlZEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtQnV0dG9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRm9ybSgpO1xuICAgICAgICB0aGlzLmNsb3NlRm9ybSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnByb2plY3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbG9zZUZvcm0oKSB7XG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0cmlldmVkRWxlbWVudHMucHJvamVjdENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMucHJvamVjdE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhc2tDcmVhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV0cmlldmVWYWx1ZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJldHJpZXZlVmFsdWVzKCk7XG4gICAgfVxuXG4gICAgcmV0cmlldmVWYWx1ZXMoKSB7XG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFza0NyZWF0b3IodGFza05hbWUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC52YWx1ZSk7XG4gICAgICAgICAgICBuZXcgQ3JlYXRlVGFza1VJKHRhc2spO1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLnByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZUxvd2VyY2FzZSA9IHByb2plY3ROYW1lLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIG5ld1Byb2plY3QuaWQgPSBwcm9qZWN0TmFtZUxvd2VyY2FzZSArICdQcm9qZWN0JztcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgIG5ld1Rhc2tDb250YWluZXIuY2xhc3NOYW1lID0gcHJvamVjdE5hbWVMb3dlcmNhc2UgKyAnIGhpZGRlbic7XG4gICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnZhbHVlO1xuXG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5wcm9qZWN0Q29udGFpbmVyLmluc2VydEJlZm9yZShuZXdQcm9qZWN0LCBhZGRQcm9qZWN0KTtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5wcm9qZWN0LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5wcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgIG5ld1Byb2plY3QudGFiSW5kZXggPSBuZXdQcm9qZWN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGFiSW5kZXggKyAxO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUYXNrVUkge1xuICAgIGNvbnN0cnVjdG9yKHRhc2spIHtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVUkodGFzayk7XG4gICAgICAgIHRoaXMubGVmdFRhc2tFbGVtZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRUYXNrRWxlbWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLlVJVGFza05hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLlVJRGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLlVJRHVlRGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuVUlQcmlvcml0eSA9IG51bGw7XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza1VJKHRhc2spIHtcblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5ub1Rhc2tzQ29udGFpbmVyID8gcmV0cmlldmVkRWxlbWVudHMubm9UYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogY29uc29sZS5sb2coJ05vIHRhc2tzJyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0VGFza0VsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMucmlnaHRUYXNrRWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5VSVRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuVUlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLlVJRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLlVJUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aGlzLlVJVGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0aGlzLlVJRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLlVJRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlO1xuICAgICAgICB0aGlzLlVJUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgICAgIHRoaXMuYXNzaWduQ29udGFpbmVyKHRhc2sucHJvamVjdCk7XG4gICAgfVxuXG4gICAgYXNzaWduQ29udGFpbmVyKGNvbnRhaW5lcikge1xuXG4gICAgICAgIGxldCBjb250YWluZXJIb2xkZXIgPSBjb250YWluZXI7XG4gICAgICAgIGxldCBsb3dlcmNhc2VkQ29udGFpbmVyID0gY29udGFpbmVySG9sZGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsb3dlcmNhc2VkQ29udGFpbmVyKVswXTtcblxuICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgbmV3VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLmNsYXNzTmFtZSA9ICdVSVRhc2tDb250YWluZXInO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYXNrTmFtZSk7XG4gICAgICAgICAgICBuZXdUYXNrTmFtZS5hcHBlbmRDaGlsZCh0aGlzLmxlZnRUYXNrRWxlbWVudHMpO1xuICAgICAgICAgICAgbmV3VGFza05hbWUuYXBwZW5kQ2hpbGQodGhpcy5yaWdodFRhc2tFbGVtZW50cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgbmV3VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld0NvbnRhaW5lci5jbGFzc05hbWUgPSBsb3dlcmNhc2VkQ29udGFpbmVyICsgJyBoaWRkZW5Qcm9qZWN0JztcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLmNsYXNzTmFtZSA9ICdVSVRhc2tDb250YWluZXInO1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb250YWluZXIpO1xuICAgICAgICAgICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tOYW1lKTtcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLmFwcGVuZENoaWxkKHRoaXMubGVmdFRhc2tFbGVtZW50cyk7XG4gICAgICAgICAgICBuZXdUYXNrTmFtZS5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0VGFza0VsZW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGVmdFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZCh0aGlzLlVJVGFza05hbWUpO1xuICAgICAgICB0aGlzLmxlZnRUYXNrRWxlbWVudHMuYXBwZW5kQ2hpbGQodGhpcy5VSURlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5yaWdodFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZCh0aGlzLlVJRHVlRGF0ZSk7XG4gICAgICAgIHRoaXMucmlnaHRUYXNrRWxlbWVudHMuYXBwZW5kQ2hpbGQodGhpcy5VSVByaW9yaXR5KTtcblxuICAgICAgICB0aGlzLmxlZnRUYXNrRWxlbWVudHMuY2xhc3NOYW1lID0gJ2xlZnRUYXNrRWxlbWVudHMnO1xuICAgICAgICB0aGlzLnJpZ2h0VGFza0VsZW1lbnRzLmNsYXNzTmFtZSA9ICdyaWdodFRhc2tFbGVtZW50cyc7XG4gICAgICAgIHRoaXMuVUlUYXNrTmFtZS5pZCA9ICdVSVRhc2tOYW1lJzsgXG4gICAgICAgIHRoaXMuVUlEZXNjcmlwdGlvbi5pZCA9ICdVSURlc2NyaXB0aW9uJztcbiAgICAgICAgdGhpcy5VSUR1ZURhdGUuY2xhc3NOYW1lID0gJ1VJRHVlRGF0ZSc7IFxuICAgICAgICB0aGlzLlVJUHJpb3JpdHkuaWQgPSAnVUlQcmlvcml0eSc7XG4gICAgfVxufSIsImltcG9ydCB7IHJldHJpZXZlZEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUhhbWJ1cmdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlSGFtYnVyZ2VyKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlSGFtYnVyZ2VyKCkge1xuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUb2dnbGVCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgICAgICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hcHBlbmRDaGlsZChJY29uKTtcblxuICAgICAgICBJY29uLmNsYXNzTmFtZSA9ICdnZy1zdW4nO1xuXG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUnKTtcbiAgICAgICAgICAgIEljb24uY2xhc3NOYW1lID09ICdnZy1zdW4nID8gSWNvbi5jbGFzc05hbWUgPSAnZ2ctbW9vbicgOiBJY29uLmNsYXNzTmFtZSA9ICdnZy1zdW4nO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcmV0cmlldmVkRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyVGFza3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpbHRlclRhc2tzKCk7XG4gICAgfVxuXG4gICAgZmlsdGVyVGFza3MoKSB7XG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFsbExhYmVsLmNsaWNrKCk7XG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbC5mb2N1cygpO1xuICAgICAgICAgICAgcmV0cmlldmVkRWxlbWVudHMuYWxsTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuXG4gICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5oYW1idXJnZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmb2N1c2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkRWxlbWVudCAhPSByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHJpZXZlZEVsZW1lbnRzLmFsbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW5Qcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXRyaWV2ZWRFbGVtZW50cy5hbGxMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGRlblByb2plY3QnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpZGRlbkVsZW1lbnRzKTtcblxuICAgICAgICAgICAgaGlkZGVuRWxlbWVudHMuZm9yRWFjaChoaWRkZW5FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZGVuRWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5Qcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5saW5lJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgQ3JlYXRlSGFtYnVyZ2VyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgQ3JlYXRlVG9nZ2xlQnV0dG9uIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgQ3JlYXRlQnVyZ2VyU2xpZGluZyB9IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQgeyBUYXNrQ3JlYXRvciB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBGb3JtQnV0dG9ucyB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBSZXRyaWV2ZVZhbHVlcyB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBGaWx0ZXJUYXNrcyB9IGZyb20gJy4vdGFza3MnO1xuXG5jb25zdCBjcmVhdGVIYW1idXJnZXIgPSBuZXcgQ3JlYXRlSGFtYnVyZ2VyKCk7XG5jb25zdCBjcmVhdGVUb2dnbGVCdXR0b24gPSBuZXcgQ3JlYXRlVG9nZ2xlQnV0dG9uKCk7XG5jb25zdCBjcmVhdGVCdXJnZXJTbGlkaW5nID0gbmV3IENyZWF0ZUJ1cmdlclNsaWRpbmcoKTtcbmNvbnN0IHRhc2tDcmVhdG9yID0gbmV3IFRhc2tDcmVhdG9yKCk7XG5jb25zdCB0b2dnbGVGb3JtID0gbmV3IEZvcm1CdXR0b25zKCk7XG5jb25zdCByZXRyaWV2ZVZhbHVlcyA9IG5ldyBSZXRyaWV2ZVZhbHVlcygpO1xuY29uc3QgZmlsdGVyVGFza3MgPSBuZXcgRmlsdGVyVGFza3MoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=