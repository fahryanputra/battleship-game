/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --space-small: 1rem;
  --space-medium: 2rem;
  --space-large: 3rem;
  --font-small: 18px;
  --font-medium: 26px;
  --font-large: 38px;
  --font-bold: 600;
  --icon-extra-large: 120px;
  --icon-large: 80px;
  --icon-medium: 50px;
  --icon-small: 30px;
  --font-light: #eee;
  --font-dark: #333;
  --background-light: whitesmoke;
}

* {
  margin: 0;
  padding: 0;
  color: var(--font-dark);
  font-family: "Poppins", sans-serif;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: whitesmoke;
}

header {
  height: 10vh;
  padding: 0 var(--space-small);
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
}

header > p {
  color: var(--font-light);
  font-size: var(--font-large);
  font-weight: bold;
}

.content {
  width: 100%;
  height: 85vh;
}

.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}

.content > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-small);
}

.cell {
  border: 1px solid var(--font-dark);
  width: 2rem;
  height: 2rem;
}

.board.computer > .cell:hover {
  background-color: lightgrey;
}

.cell.filled {
  background-color: lightgreen;
}

.computer > .cell.filled {
  background-color: whitesmoke;
}

.cell.filled.hit {
  background-color: lightcoral;
}

.cell.miss {
  background-color: lightblue;
}

.board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border: 1px solid var(--font-dark);
}

.game-board {
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-board > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-small);
}

.announcement {
  font-weight: bold;
  font-size: 24px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 5px;
}

button > p {
  font-size: 20px;
}

footer {
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}

footer > p {
  color: var(--font-light);
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE;;;;aAIW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,kCAAkC;AACpC;;AAEA;EACE,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":[":root {\n  --space-small: 1rem;\n  --space-medium: 2rem;\n  --space-large: 3rem;\n  --font-small: 18px;\n  --font-medium: 26px;\n  --font-large: 38px;\n  --font-bold: 600;\n  --icon-extra-large: 120px;\n  --icon-large: 80px;\n  --icon-medium: 50px;\n  --icon-small: 30px;\n  --font-light: #eee;\n  --font-dark: #333;\n  --background-light: whitesmoke;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  color: var(--font-dark);\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: whitesmoke;\n}\n\nheader {\n  height: 10vh;\n  padding: 0 var(--space-small);\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n}\n\nheader > p {\n  color: var(--font-light);\n  font-size: var(--font-large);\n  font-weight: bold;\n}\n\n.content {\n  width: 100%;\n  height: 85vh;\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n    \"FILL\" 0,\n    \"wght\" 400,\n    \"GRAD\" 0,\n    \"opsz\" 24;\n}\n\n.content > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-small);\n}\n\n.cell {\n  border: 1px solid var(--font-dark);\n  width: 2rem;\n  height: 2rem;\n}\n\n.board.computer > .cell:hover {\n  background-color: lightgrey;\n}\n\n.cell.filled {\n  background-color: lightgreen;\n}\n\n.computer > .cell.filled {\n  background-color: whitesmoke;\n}\n\n.cell.filled.hit {\n  background-color: lightcoral;\n}\n\n.cell.miss {\n  background-color: lightblue;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border: 1px solid var(--font-dark);\n}\n\n.game-board {\n  gap: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.game-board > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-small);\n}\n\n.announcement {\n  font-weight: bold;\n  font-size: 24px;\n}\n\nbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  gap: 5px;\n}\n\nbutton > p {\n  font-size: 20px;\n}\n\nfooter {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\nfooter > p {\n  color: var(--font-light);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");


class Game {
  constructor() {
    this.players = [];
    this.winner = "";
    this.turn = "";
  }

  // Getter
  getPlayers() {
    return this.players;
  }

  getWinner() {
    return this.winner;
  }

  getTurn() {
    return this.turn;
  }

  // Setter
  setPlayers(players) {
    this.players = players;
  }

  setWinner(winner) {
    this.winner = winner;
  }

  setTurn(turn) {
    this.turn = turn;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Ship */ "./src/modules/Ship.js");


class Gameboard {
  // Gameboard legends
  // 0 = water
  // 1 = miss
  // 2 = hit

  // Gameboard axis
  // 0 = horizontal
  // 1 = vertical

  // Attack result
  // 0 = miss
  // 1 = hit

  constructor(size) {
    this.size = size;
    this.attackResult = 0;
    this.attackMessage = "";
    this.sunkMessage = "";
    this.isAllShipSunk = false;
    this.ships = [];
    this.availableShips = [];
    this.board = [];

    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < this.size; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.size; j++) {
        this.board[i].push(0);
      }
    }
  }

  addShip(name, length) {
    const ship = new _modules_Ship__WEBPACK_IMPORTED_MODULE_0__["default"](name, length);
    this.availableShips.push(ship);
    this.ships.push(ship);
  }

  placeShip(ship, x, y, axis) {
    if (axis < 1) {
      for (let i = 0; i < ship.getLength(); i++) {
        this.board[x][y + i] = ship;
      }
    } else {
      for (let i = 0; i < ship.getLength(); i++) {
        this.board[x + i][y] = ship;
      }
    }
  }

  destroyIfSunk(tile) {
    if (tile.getIsSunk() === true) {
      this.availableShips = this.availableShips.filter(
        (ship) => ship.getName() !== tile.getName(),
      );

      if (this.availableShips.length === 0) {
        this.isAllShipSunk = true;
      }

      this.sunkMessage = `${tile.getName()} has been sunk`;
    }
  }

  receiveAttack(x, y) {
    this.sunkMessage = "";

    switch (this.board[x][y]) {
      case 0:
        this.board[x][y] = 1;
        this.attackResult = 0;
        this.attackMessage = "miss";
        break;

      case 1:
      case 2:
        this.attackResult = 2;
        this.attackMessage = "invalid";
        break;

      default:
        this.board[x][y].hit();
        this.destroyIfSunk(this.board[x][y]);
        this.board[x][y] = 2;
        this.attackResult = 1;
        this.attackMessage = "hit";
        break;
    }
  }

  removeShip() {
    this.ships.splice(0, this.ships.length);
    console.log(this.ships);
  }

  // Getter
  getSize() {
    return this.size;
  }

  getBoard() {
    return this.board;
  }

  getShips() {
    return this.ships;
  }

  getAvailableShips() {
    return this.availableShips;
  }

  getAttackResult() {
    return this.attackResult;
  }

  getAttackMessage() {
    return this.attackMessage;
  }

  getSunkMessage() {
    return this.sunkMessage;
  }

  getIsAllShipSunk() {
    return this.isAllShipSunk;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");


class Player {
  constructor(name, isBot = false) {
    this.name = name;
    this.isBot = isBot;
    this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);
  }

  attack(player, x, y) {
    player.getGameboard().receiveAttack(x, y);
  }

  // Getter
  getName() {
    return this.name;
  }

  getGameboard() {
    return this.gameboard;
  }

  getIsBot() {
    return this.isBot;
  }

  getLose() {
    return this.gameboard.getIsAllShipSunk();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(name, length = 1) {
    this.name = name;
    this.length = length;
    this.damage = 0;
    this.isSunk = false;
  }

  evaluateSunk() {
    return typeof this.length == typeof this.damage &&
      this.length <= this.damage
      ? true
      : false;
  }

  hit() {
    this.damage += 1;
    this.isSunk = this.evaluateSunk();
  }

  // Getter
  getName() {
    return this.name;
  }

  getLength() {
    return this.length;
  }

  getDamage() {
    return this.damage;
  }

  getIsSunk() {
    return this.isSunk;
  }

  // Setter
  setName(name) {
    this.name = name;
  }

  setLength(length) {
    this.length = length;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/modules/createPlayer.js":
/*!*************************************!*\
  !*** ./src/modules/createPlayer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");


function createPlayer(name, isBot = false) {
  const player = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"](name, isBot);

  return player;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);


/***/ }),

/***/ "./src/modules/gameController.js":
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateFleet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateFleet */ "./src/modules/generateFleet.js");
/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPlayer */ "./src/modules/createPlayer.js");



function gameController(game) {
  const player = (0,_createPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])("player");
  const computer = (0,_createPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])("computer", true);
  const players = [player, computer];

  game.setPlayers(players);
  game.setTurn(players[0]);

  players.forEach((player) => {
    (0,_generateFleet__WEBPACK_IMPORTED_MODULE_0__["default"])(player);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameController);


/***/ }),

/***/ "./src/modules/generateFleet.js":
/*!**************************************!*\
  !*** ./src/modules/generateFleet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/generateRandomNumber */ "./src/utilities/generateRandomNumber.js");


function addShip(player, ship, length = 1) {
  player.getGameboard().addShip(ship, length);
}

function placeShip(player, ship, x, y, axis = 0) {
  player.getGameboard().placeShip(ship, x, y, axis);
}

function isEmptyTile(player, x, y) {
  const board = player.getGameboard().getBoard();

  return board[x][y] === 0 ? true : false;
}

function placeShipAtRandomPosition(player, ship) {
  const axis = (0,_utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(2);
  const size = player.getGameboard().getSize();
  let isInvalidPlacement = false;
  let x = 0;
  let y = 0;

  if (axis < 1) {
    x = (0,_utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(size);
    y = (0,_utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(size - (ship.getLength() - 1));

    for (let i = 0; i < ship.getLength(); i++) {
      if (isEmptyTile(player, x, y + i) === false) {
        isInvalidPlacement = true;
        break;
      }
    }
  } else {
    x = (0,_utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(size - (ship.getLength() - 1));
    y = (0,_utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(size);

    for (let i = 0; i < ship.getLength(); i++) {
      if (isEmptyTile(player, x + i, y) === false) {
        isInvalidPlacement = true;
        break;
      }
    }
  }

  if (isInvalidPlacement) {
    placeShipAtRandomPosition(player, ship);
  } else {
    placeShip(player, ship, x, y, axis);
  }
}

function randomShipPosition(player) {
  const fleet = player.getGameboard().getShips();

  fleet.forEach((ship) => {
    placeShipAtRandomPosition(player, ship);
  });
}

function generateFleet(player) {
  addShip(player, "Submarine #01", 1);
  addShip(player, "Submarine #02", 1);
  addShip(player, "Submarine #03", 1);
  addShip(player, "Destroyer #01", 2);
  addShip(player, "Destroyer #02", 2);
  addShip(player, "Destroyer #03", 3);
  addShip(player, "Cruiser #01", 3);
  addShip(player, "Cruiser #02", 3);
  addShip(player, "Battleship #01", 4);

  randomShipPosition(player);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateFleet);


/***/ }),

/***/ "./src/modules/renderFooter.js":
/*!*************************************!*\
  !*** ./src/modules/renderFooter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/utility */ "./src/utilities/utility.js");


function renderFooter() {
  const copyright = (0,_utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)("Copyright \u00A9 2024 Fahryanputra");

  const container = document.querySelector("footer");
  container.appendChild(copyright);

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);


/***/ }),

/***/ "./src/modules/renderGameboard.js":
/*!****************************************!*\
  !*** ./src/modules/renderGameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/utility */ "./src/utilities/utility.js");
/* harmony import */ var _generateFleet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateFleet */ "./src/modules/generateFleet.js");
/* harmony import */ var _turnController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turnController */ "./src/modules/turnController.js");




function announceMessage(className, message) {
  const notification = document.querySelector(`.${className}`);
  notification.textContent = message;
}

function createCell(game, player, x, y) {
  const gameboard = player.getGameboard();
  const board = gameboard.getBoard();
  const container = document.createElement("div");

  container.classList.add("cell");
  container.classList.add(`grid-${x}-${y}`);

  if (board[x][y] != 0) {
    container.classList.add("filled");
  }

  if (player.getIsBot() === true) {
    container.addEventListener("click", () => {
      const notification = document.querySelector(".notification");
      notification.textContent = "";

      if (
        !container.classList.contains("miss") &&
        !container.classList.contains("hit")
      ) {
        (0,_turnController__WEBPACK_IMPORTED_MODULE_2__["default"])(game, x, y);
      }
      container.classList.add(gameboard.getAttackMessage());

      game.getPlayers().forEach((element) => {
        if (element.getGameboard().getSunkMessage()) {
          announceMessage(
            "notification",
            `${(0,_utilities_utility__WEBPACK_IMPORTED_MODULE_0__.capitalizeEachWord)(element.getName())}'s ${element.getGameboard().getSunkMessage()}`,
          );
        }

        if (element.getGameboard().getIsAllShipSunk()) {
          announceMessage(
            "notification",
            `All of ${(0,_utilities_utility__WEBPACK_IMPORTED_MODULE_0__.capitalizeEachWord)(player.getName())}'s ship has been sunk.`,
          );

          const parentNode = container.parentNode;
          parentNode.style["pointer-events"] = "none";

          const winner = game
            .getPlayers()
            .filter((name) => name.getName() !== element.getName());
          announceMessage(
            "announcement",
            `${(0,_utilities_utility__WEBPACK_IMPORTED_MODULE_0__.capitalizeEachWord)(winner[0].getName())} wins!`,
          );
        }
      });
    });
  }

  return container;
}

function createBoard(game, player) {
  const gameboard = player.getGameboard();
  const board = gameboard.getBoard();

  const container = document.createElement("div");
  container.classList.add("board");
  container.classList.add(player.getName());
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = createCell(game, player, i, j);
      container.appendChild(cell);
    }
  }

  return container;
}

function renderPlayerName(name, tag) {
  const text = document.createElement(tag);
  text.textContent = name;

  return text;
}

function renderGameboard(game) {
  const players = game.getPlayers();
  let boardContainer = document.createElement("div");

  boardContainer.classList.add("game-board");

  players.forEach((player) => {
    const container = document.createElement("div");

    container.appendChild(
      renderPlayerName((0,_utilities_utility__WEBPACK_IMPORTED_MODULE_0__.capitalizeEachWord)(player.getName()), "h1"),
    );
    container.appendChild(createBoard(game, player));

    boardContainer.appendChild(container);
  });

  let container = document.createElement("div");
  container.appendChild(boardContainer);

  const resetButton = document.createElement("button");
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
  const icon = (0,_utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createIcon)("restart_alt");
  const text = (0,_utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)("Reset");
  resetButton.appendChild(icon);
  resetButton.appendChild(text);

  container.appendChild(resetButton);

  const notificationText = document.createElement("p");
  notificationText.classList.add("notification");
  container.appendChild(notificationText);

  const announcementText = document.createElement("p");
  announcementText.classList.add("announcement");
  container.appendChild(announcementText);

  const content = document.querySelector(".content");

  return content.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGameboard);


/***/ }),

/***/ "./src/modules/renderHeader.js":
/*!*************************************!*\
  !*** ./src/modules/renderHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/utility */ "./src/utilities/utility.js");


function renderHeader() {
  const copyright = (0,_utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)("Battleship Game");

  const container = document.querySelector("header");
  container.appendChild(copyright);

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);


/***/ }),

/***/ "./src/modules/turnController.js":
/*!***************************************!*\
  !*** ./src/modules/turnController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/generateRandomNumber */ "./src/utilities/generateRandomNumber.js");


const picked = [];

function attackTile(player, x, y) {
  const gameboard = player.getGameboard();

  gameboard.receiveAttack(x, y);
}

function turnController(game, x, y) {
  const player = game.getPlayers()[0];
  const computer = game.getPlayers()[1];
  let i = 0;
  let j = 0;

  attackTile(computer, x, y);

  do {
    i = (0,_utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(10);
    j = (0,_utilities_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(10);
  } while (picked.includes(`${i}, ${j}`));

  picked.push(`${i}, ${j}`);

  attackTile(player, i, j);

  const parent = document.querySelector(`.board.player .grid-${i}-${j}`);
  parent.classList.add(player.getGameboard().getAttackMessage());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (turnController);


/***/ }),

/***/ "./src/utilities/generateRandomNumber.js":
/*!***********************************************!*\
  !*** ./src/utilities/generateRandomNumber.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateRandomNumber);


/***/ }),

/***/ "./src/utilities/utility.js":
/*!**********************************!*\
  !*** ./src/utilities/utility.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalizeEachWord: () => (/* binding */ capitalizeEachWord),
/* harmony export */   createIcon: () => (/* binding */ createIcon),
/* harmony export */   createImage: () => (/* binding */ createImage),
/* harmony export */   createText: () => (/* binding */ createText)
/* harmony export */ });
// Module for helping create images and paragraphs
// Function to create text with 1 parameters.
// text content
function createText(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  return paragraph;
}

// Function to create image with credits. Containing 3 parameters.
// Image source, credit link and credit text.
function createImage(src, creditLink, creditText) {
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "img-container");

  const image = new Image();
  image.src = src;

  const creditContainer = document.createElement("div");
  creditContainer.setAttribute("class", "credit");

  const credit = document.createElement("a");
  credit.href = creditLink;
  credit.textContent = creditText;

  creditContainer.appendChild(credit);

  imageContainer.appendChild(image);
  imageContainer.appendChild(creditContainer);

  return imageContainer;
}

// Create icon from https://fonts.google.com/icons
function createIcon(text) {
  const icon = document.createElement("span");
  icon.setAttribute("class", "material-symbols-outlined");
  icon.textContent = text;

  return icon;
}

// Capitalize each word in a text
function capitalizeEachWord(text) {
  const words = text.split(" ");

  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameController */ "./src/modules/gameController.js");
/* harmony import */ var _modules_renderGameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderGameboard */ "./src/modules/renderGameboard.js");
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");
/* harmony import */ var _modules_renderFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderFooter */ "./src/modules/renderFooter.js");
/* harmony import */ var _modules_renderHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/renderHeader */ "./src/modules/renderHeader.js");







const game = new _modules_Game__WEBPACK_IMPORTED_MODULE_3__["default"]();

(0,_modules_gameController__WEBPACK_IMPORTED_MODULE_1__["default"])(game);

(0,_modules_renderHeader__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_renderGameboard__WEBPACK_IMPORTED_MODULE_2__["default"])(game);
(0,_modules_renderFooter__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUMwQjtBQUNFO0FBQ3RCO0FBQ2dCO0FBQ0E7O0FBRWxELGlCQUFpQixxREFBSTs7QUFFckIsbUVBQWM7O0FBRWQsaUVBQVk7QUFDWixvRUFBZTtBQUNmLGlFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXdlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXdlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXdlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXdlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXdlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY3JlYXRlUGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlRmxlZXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvcmVuZGVyRm9vdGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL3JlbmRlckdhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXdlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9yZW5kZXJIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvdHVybkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3V0aWxpdGllcy9nZW5lcmF0ZVJhbmRvbU51bWJlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXdlYnBhY2stdGVtcGxhdGUvLi9zcmMvdXRpbGl0aWVzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXdlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tc3BhY2Utc21hbGw6IDFyZW07XG4gIC0tc3BhY2UtbWVkaXVtOiAycmVtO1xuICAtLXNwYWNlLWxhcmdlOiAzcmVtO1xuICAtLWZvbnQtc21hbGw6IDE4cHg7XG4gIC0tZm9udC1tZWRpdW06IDI2cHg7XG4gIC0tZm9udC1sYXJnZTogMzhweDtcbiAgLS1mb250LWJvbGQ6IDYwMDtcbiAgLS1pY29uLWV4dHJhLWxhcmdlOiAxMjBweDtcbiAgLS1pY29uLWxhcmdlOiA4MHB4O1xuICAtLWljb24tbWVkaXVtOiA1MHB4O1xuICAtLWljb24tc21hbGw6IDMwcHg7XG4gIC0tZm9udC1saWdodDogI2VlZTtcbiAgLS1mb250LWRhcms6ICMzMzM7XG4gIC0tYmFja2dyb3VuZC1saWdodDogd2hpdGVzbW9rZTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5oZWFkZXIgPiBwIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtbGFyZ2UpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NXZoO1xufVxuXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgIFwiRklMTFwiIDAsXG4gICAgXCJ3Z2h0XCIgNDAwLFxuICAgIFwiR1JBRFwiIDAsXG4gICAgXCJvcHN6XCIgMjQ7XG59XG5cbi5jb250ZW50ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbi5jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmJvYXJkLmNvbXB1dGVyID4gLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi5jZWxsLmZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbi5jb21wdXRlciA+IC5jZWxsLmZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5jZWxsLmZpbGxlZC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uY2VsbC5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcbn1cblxuLmdhbWUtYm9hcmQge1xuICBnYXA6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2FtZS1ib2FyZCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4uYW5ub3VuY2VtZW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgZ2FwOiA1cHg7XG59XG5cbmJ1dHRvbiA+IHAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG5mb290ZXIgPiBwIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0U7Ozs7YUFJVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc3BhY2Utc21hbGw6IDFyZW07XFxuICAtLXNwYWNlLW1lZGl1bTogMnJlbTtcXG4gIC0tc3BhY2UtbGFyZ2U6IDNyZW07XFxuICAtLWZvbnQtc21hbGw6IDE4cHg7XFxuICAtLWZvbnQtbWVkaXVtOiAyNnB4O1xcbiAgLS1mb250LWxhcmdlOiAzOHB4O1xcbiAgLS1mb250LWJvbGQ6IDYwMDtcXG4gIC0taWNvbi1leHRyYS1sYXJnZTogMTIwcHg7XFxuICAtLWljb24tbGFyZ2U6IDgwcHg7XFxuICAtLWljb24tbWVkaXVtOiA1MHB4O1xcbiAgLS1pY29uLXNtYWxsOiAzMHB4O1xcbiAgLS1mb250LWxpZ2h0OiAjZWVlO1xcbiAgLS1mb250LWRhcms6ICMzMzM7XFxuICAtLWJhY2tncm91bmQtbGlnaHQ6IHdoaXRlc21va2U7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWRhcmspO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXIgPiBwIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDg1dmg7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICBcXFwiRklMTFxcXCIgMCxcXG4gICAgXFxcIndnaHRcXFwiIDQwMCxcXG4gICAgXFxcIkdSQURcXFwiIDAsXFxuICAgIFxcXCJvcHN6XFxcIiAyNDtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxufVxcblxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtZGFyayk7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmJvYXJkLmNvbXB1dGVyID4gLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uY2VsbC5maWxsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmNvbXB1dGVyID4gLmNlbGwuZmlsbGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5jZWxsLmZpbGxlZC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLmNlbGwubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBnYXA6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG59XFxuXFxuLmFubm91bmNlbWVudCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuYnV0dG9uID4gcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbmZvb3RlciA+IHAge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIHRoaXMud2lubmVyID0gXCJcIjtcbiAgICB0aGlzLnR1cm4gPSBcIlwiO1xuICB9XG5cbiAgLy8gR2V0dGVyXG4gIGdldFBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycztcbiAgfVxuXG4gIGdldFdpbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy53aW5uZXI7XG4gIH1cblxuICBnZXRUdXJuKCkge1xuICAgIHJldHVybiB0aGlzLnR1cm47XG4gIH1cblxuICAvLyBTZXR0ZXJcbiAgc2V0UGxheWVycyhwbGF5ZXJzKSB7XG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcbiAgfVxuXG4gIHNldFdpbm5lcih3aW5uZXIpIHtcbiAgICB0aGlzLndpbm5lciA9IHdpbm5lcjtcbiAgfVxuXG4gIHNldFR1cm4odHVybikge1xuICAgIHRoaXMudHVybiA9IHR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuLi9tb2R1bGVzL1NoaXBcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgLy8gR2FtZWJvYXJkIGxlZ2VuZHNcbiAgLy8gMCA9IHdhdGVyXG4gIC8vIDEgPSBtaXNzXG4gIC8vIDIgPSBoaXRcblxuICAvLyBHYW1lYm9hcmQgYXhpc1xuICAvLyAwID0gaG9yaXpvbnRhbFxuICAvLyAxID0gdmVydGljYWxcblxuICAvLyBBdHRhY2sgcmVzdWx0XG4gIC8vIDAgPSBtaXNzXG4gIC8vIDEgPSBoaXRcblxuICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmF0dGFja1Jlc3VsdCA9IDA7XG4gICAgdGhpcy5hdHRhY2tNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLnN1bmtNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLmlzQWxsU2hpcFN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gICAgdGhpcy5hdmFpbGFibGVTaGlwcyA9IFtdO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcblxuICAgIHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKG5hbWUsIGxlbmd0aCk7XG4gICAgdGhpcy5hdmFpbGFibGVTaGlwcy5wdXNoKHNoaXApO1xuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBheGlzKSB7XG4gICAgaWYgKGF4aXMgPCAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95SWZTdW5rKHRpbGUpIHtcbiAgICBpZiAodGlsZS5nZXRJc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hdmFpbGFibGVTaGlwcyA9IHRoaXMuYXZhaWxhYmxlU2hpcHMuZmlsdGVyKFxuICAgICAgICAoc2hpcCkgPT4gc2hpcC5nZXROYW1lKCkgIT09IHRpbGUuZ2V0TmFtZSgpLFxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlU2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaXNBbGxTaGlwU3VuayA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3Vua01lc3NhZ2UgPSBgJHt0aWxlLmdldE5hbWUoKX0gaGFzIGJlZW4gc3Vua2A7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgdGhpcy5zdW5rTWVzc2FnZSA9IFwiXCI7XG5cbiAgICBzd2l0Y2ggKHRoaXMuYm9hcmRbeF1beV0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IDE7XG4gICAgICAgIHRoaXMuYXR0YWNrUmVzdWx0ID0gMDtcbiAgICAgICAgdGhpcy5hdHRhY2tNZXNzYWdlID0gXCJtaXNzXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuYXR0YWNrUmVzdWx0ID0gMjtcbiAgICAgICAgdGhpcy5hdHRhY2tNZXNzYWdlID0gXCJpbnZhbGlkXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lJZlN1bmsodGhpcy5ib2FyZFt4XVt5XSk7XG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAyO1xuICAgICAgICB0aGlzLmF0dGFja1Jlc3VsdCA9IDE7XG4gICAgICAgIHRoaXMuYXR0YWNrTWVzc2FnZSA9IFwiaGl0XCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVNoaXAoKSB7XG4gICAgdGhpcy5zaGlwcy5zcGxpY2UoMCwgdGhpcy5zaGlwcy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHMpO1xuICB9XG5cbiAgLy8gR2V0dGVyXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldEJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG5cbiAgZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHM7XG4gIH1cblxuICBnZXRBdmFpbGFibGVTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5hdmFpbGFibGVTaGlwcztcbiAgfVxuXG4gIGdldEF0dGFja1Jlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tSZXN1bHQ7XG4gIH1cblxuICBnZXRBdHRhY2tNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFja01lc3NhZ2U7XG4gIH1cblxuICBnZXRTdW5rTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdW5rTWVzc2FnZTtcbiAgfVxuXG4gIGdldElzQWxsU2hpcFN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBbGxTaGlwU3VuaztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpc0JvdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlzQm90ID0gaXNCb3Q7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwKTtcbiAgfVxuXG4gIGF0dGFjayhwbGF5ZXIsIHgsIHkpIHtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIC8vIEdldHRlclxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRHYW1lYm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkO1xuICB9XG5cbiAgZ2V0SXNCb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNCb3Q7XG4gIH1cblxuICBnZXRMb3NlKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVib2FyZC5nZXRJc0FsbFNoaXBTdW5rKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCA9IDEpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuZGFtYWdlID0gMDtcbiAgICB0aGlzLmlzU3VuayA9IGZhbHNlO1xuICB9XG5cbiAgZXZhbHVhdGVTdW5rKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5sZW5ndGggPT0gdHlwZW9mIHRoaXMuZGFtYWdlICYmXG4gICAgICB0aGlzLmxlbmd0aCA8PSB0aGlzLmRhbWFnZVxuICAgICAgPyB0cnVlXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuZGFtYWdlICs9IDE7XG4gICAgdGhpcy5pc1N1bmsgPSB0aGlzLmV2YWx1YXRlU3VuaygpO1xuICB9XG5cbiAgLy8gR2V0dGVyXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBnZXREYW1hZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlO1xuICB9XG5cbiAgZ2V0SXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3VuaztcbiAgfVxuXG4gIC8vIFNldHRlclxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGVuZ3RoKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIobmFtZSwgaXNCb3QgPSBmYWxzZSkge1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUsIGlzQm90KTtcblxuICByZXR1cm4gcGxheWVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXI7XG4iLCJpbXBvcnQgZ2VuZXJhdGVGbGVldCBmcm9tIFwiLi9nZW5lcmF0ZUZsZWV0XCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL2NyZWF0ZVBsYXllclwiO1xuXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcihnYW1lKSB7XG4gIGNvbnN0IHBsYXllciA9IGNyZWF0ZVBsYXllcihcInBsYXllclwiKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoXCJjb21wdXRlclwiLCB0cnVlKTtcbiAgY29uc3QgcGxheWVycyA9IFtwbGF5ZXIsIGNvbXB1dGVyXTtcblxuICBnYW1lLnNldFBsYXllcnMocGxheWVycyk7XG4gIGdhbWUuc2V0VHVybihwbGF5ZXJzWzBdKTtcblxuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGdlbmVyYXRlRmxlZXQocGxheWVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdlbmVyYXRlUmFuZG9tTnVtYmVyIGZyb20gXCIuLi91dGlsaXRpZXMvZ2VuZXJhdGVSYW5kb21OdW1iZXJcIjtcblxuZnVuY3Rpb24gYWRkU2hpcChwbGF5ZXIsIHNoaXAsIGxlbmd0aCA9IDEpIHtcbiAgcGxheWVyLmdldEdhbWVib2FyZCgpLmFkZFNoaXAoc2hpcCwgbGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwKHBsYXllciwgc2hpcCwgeCwgeSwgYXhpcyA9IDApIHtcbiAgcGxheWVyLmdldEdhbWVib2FyZCgpLnBsYWNlU2hpcChzaGlwLCB4LCB5LCBheGlzKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eVRpbGUocGxheWVyLCB4LCB5KSB7XG4gIGNvbnN0IGJvYXJkID0gcGxheWVyLmdldEdhbWVib2FyZCgpLmdldEJvYXJkKCk7XG5cbiAgcmV0dXJuIGJvYXJkW3hdW3ldID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBBdFJhbmRvbVBvc2l0aW9uKHBsYXllciwgc2hpcCkge1xuICBjb25zdCBheGlzID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoMik7XG4gIGNvbnN0IHNpemUgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U2l6ZSgpO1xuICBsZXQgaXNJbnZhbGlkUGxhY2VtZW50ID0gZmFsc2U7XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuXG4gIGlmIChheGlzIDwgMSkge1xuICAgIHggPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihzaXplKTtcbiAgICB5ID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoc2l6ZSAtIChzaGlwLmdldExlbmd0aCgpIC0gMSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgIGlmIChpc0VtcHR5VGlsZShwbGF5ZXIsIHgsIHkgKyBpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNJbnZhbGlkUGxhY2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHggPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihzaXplIC0gKHNoaXAuZ2V0TGVuZ3RoKCkgLSAxKSk7XG4gICAgeSA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKHNpemUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgIGlmIChpc0VtcHR5VGlsZShwbGF5ZXIsIHggKyBpLCB5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNJbnZhbGlkUGxhY2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzSW52YWxpZFBsYWNlbWVudCkge1xuICAgIHBsYWNlU2hpcEF0UmFuZG9tUG9zaXRpb24ocGxheWVyLCBzaGlwKTtcbiAgfSBlbHNlIHtcbiAgICBwbGFjZVNoaXAocGxheWVyLCBzaGlwLCB4LCB5LCBheGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21TaGlwUG9zaXRpb24ocGxheWVyKSB7XG4gIGNvbnN0IGZsZWV0ID0gcGxheWVyLmdldEdhbWVib2FyZCgpLmdldFNoaXBzKCk7XG5cbiAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHBsYWNlU2hpcEF0UmFuZG9tUG9zaXRpb24ocGxheWVyLCBzaGlwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRmxlZXQocGxheWVyKSB7XG4gIGFkZFNoaXAocGxheWVyLCBcIlN1Ym1hcmluZSAjMDFcIiwgMSk7XG4gIGFkZFNoaXAocGxheWVyLCBcIlN1Ym1hcmluZSAjMDJcIiwgMSk7XG4gIGFkZFNoaXAocGxheWVyLCBcIlN1Ym1hcmluZSAjMDNcIiwgMSk7XG4gIGFkZFNoaXAocGxheWVyLCBcIkRlc3Ryb3llciAjMDFcIiwgMik7XG4gIGFkZFNoaXAocGxheWVyLCBcIkRlc3Ryb3llciAjMDJcIiwgMik7XG4gIGFkZFNoaXAocGxheWVyLCBcIkRlc3Ryb3llciAjMDNcIiwgMyk7XG4gIGFkZFNoaXAocGxheWVyLCBcIkNydWlzZXIgIzAxXCIsIDMpO1xuICBhZGRTaGlwKHBsYXllciwgXCJDcnVpc2VyICMwMlwiLCAzKTtcbiAgYWRkU2hpcChwbGF5ZXIsIFwiQmF0dGxlc2hpcCAjMDFcIiwgNCk7XG5cbiAgcmFuZG9tU2hpcFBvc2l0aW9uKHBsYXllcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlRmxlZXQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVUZXh0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy91dGlsaXR5XCI7XG5cbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcbiAgY29uc3QgY29weXJpZ2h0ID0gY3JlYXRlVGV4dChcIkNvcHlyaWdodCBcXHUwMEE5IDIwMjQgRmFocnlhbnB1dHJhXCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckZvb3RlcjtcbiIsImltcG9ydCB7XG4gIGNhcGl0YWxpemVFYWNoV29yZCxcbiAgY3JlYXRlSWNvbixcbiAgY3JlYXRlVGV4dCxcbn0gZnJvbSBcIi4uL3V0aWxpdGllcy91dGlsaXR5XCI7XG5pbXBvcnQgZ2VuZXJhdGVGbGVldCBmcm9tIFwiLi9nZW5lcmF0ZUZsZWV0XCI7XG5pbXBvcnQgdHVybkNvbnRyb2xsZXIgZnJvbSBcIi4vdHVybkNvbnRyb2xsZXJcIjtcblxuZnVuY3Rpb24gYW5ub3VuY2VNZXNzYWdlKGNsYXNzTmFtZSwgbWVzc2FnZSkge1xuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNlbGwoZ2FtZSwgcGxheWVyLCB4LCB5KSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllci5nZXRHYW1lYm9hcmQoKTtcbiAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBncmlkLSR7eH0tJHt5fWApO1xuXG4gIGlmIChib2FyZFt4XVt5XSAhPSAwKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWxsZWRcIik7XG4gIH1cblxuICBpZiAocGxheWVyLmdldElzQm90KCkgPT09IHRydWUpIHtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWZpY2F0aW9uXCIpO1xuICAgICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgaWYgKFxuICAgICAgICAhY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikgJiZcbiAgICAgICAgIWNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIilcbiAgICAgICkge1xuICAgICAgICB0dXJuQ29udHJvbGxlcihnYW1lLCB4LCB5KTtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5nZXRBdHRhY2tNZXNzYWdlKCkpO1xuXG4gICAgICBnYW1lLmdldFBsYXllcnMoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEdhbWVib2FyZCgpLmdldFN1bmtNZXNzYWdlKCkpIHtcbiAgICAgICAgICBhbm5vdW5jZU1lc3NhZ2UoXG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgYCR7Y2FwaXRhbGl6ZUVhY2hXb3JkKGVsZW1lbnQuZ2V0TmFtZSgpKX0ncyAke2VsZW1lbnQuZ2V0R2FtZWJvYXJkKCkuZ2V0U3Vua01lc3NhZ2UoKX1gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC5nZXRHYW1lYm9hcmQoKS5nZXRJc0FsbFNoaXBTdW5rKCkpIHtcbiAgICAgICAgICBhbm5vdW5jZU1lc3NhZ2UoXG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgYEFsbCBvZiAke2NhcGl0YWxpemVFYWNoV29yZChwbGF5ZXIuZ2V0TmFtZSgpKX0ncyBzaGlwIGhhcyBiZWVuIHN1bmsuYCxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGNvbnRhaW5lci5wYXJlbnROb2RlO1xuICAgICAgICAgIHBhcmVudE5vZGUuc3R5bGVbXCJwb2ludGVyLWV2ZW50c1wiXSA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgY29uc3Qgd2lubmVyID0gZ2FtZVxuICAgICAgICAgICAgLmdldFBsYXllcnMoKVxuICAgICAgICAgICAgLmZpbHRlcigobmFtZSkgPT4gbmFtZS5nZXROYW1lKCkgIT09IGVsZW1lbnQuZ2V0TmFtZSgpKTtcbiAgICAgICAgICBhbm5vdW5jZU1lc3NhZ2UoXG4gICAgICAgICAgICBcImFubm91bmNlbWVudFwiLFxuICAgICAgICAgICAgYCR7Y2FwaXRhbGl6ZUVhY2hXb3JkKHdpbm5lclswXS5nZXROYW1lKCkpfSB3aW5zIWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChnYW1lLCBwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gcGxheWVyLmdldEdhbWVib2FyZCgpO1xuICBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5nZXRCb2FyZCgpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHBsYXllci5nZXROYW1lKCkpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwoZ2FtZSwgcGxheWVyLCBpLCBqKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJOYW1lKG5hbWUsIHRhZykge1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gbmFtZTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkKGdhbWUpIHtcbiAgY29uc3QgcGxheWVycyA9IGdhbWUuZ2V0UGxheWVycygpO1xuICBsZXQgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWJvYXJkXCIpO1xuXG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIHJlbmRlclBsYXllck5hbWUoY2FwaXRhbGl6ZUVhY2hXb3JkKHBsYXllci5nZXROYW1lKCkpLCBcImgxXCIpLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkKGdhbWUsIHBsYXllcikpO1xuXG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG5cbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG4gIGNvbnN0IGljb24gPSBjcmVhdGVJY29uKFwicmVzdGFydF9hbHRcIik7XG4gIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0KFwiUmVzZXRcIik7XG4gIHJlc2V0QnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICByZXNldEJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG4gIGNvbnN0IG5vdGlmaWNhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbm90aWZpY2F0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwibm90aWZpY2F0aW9uXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uVGV4dCk7XG5cbiAgY29uc3QgYW5ub3VuY2VtZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhbm5vdW5jZW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoXCJhbm5vdW5jZW1lbnRcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnRUZXh0KTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gIHJldHVybiBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVib2FyZDtcbiIsImltcG9ydCB7IGNyZWF0ZVRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3V0aWxpdHlcIjtcblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBjb3B5cmlnaHQgPSBjcmVhdGVUZXh0KFwiQmF0dGxlc2hpcCBHYW1lXCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlcjtcbiIsImltcG9ydCBnZW5lcmF0ZVJhbmRvbU51bWJlciBmcm9tIFwiLi4vdXRpbGl0aWVzL2dlbmVyYXRlUmFuZG9tTnVtYmVyXCI7XG5cbmNvbnN0IHBpY2tlZCA9IFtdO1xuXG5mdW5jdGlvbiBhdHRhY2tUaWxlKHBsYXllciwgeCwgeSkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCk7XG5cbiAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG59XG5cbmZ1bmN0aW9uIHR1cm5Db250cm9sbGVyKGdhbWUsIHgsIHkpIHtcbiAgY29uc3QgcGxheWVyID0gZ2FtZS5nZXRQbGF5ZXJzKClbMF07XG4gIGNvbnN0IGNvbXB1dGVyID0gZ2FtZS5nZXRQbGF5ZXJzKClbMV07XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuXG4gIGF0dGFja1RpbGUoY29tcHV0ZXIsIHgsIHkpO1xuXG4gIGRvIHtcbiAgICBpID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoMTApO1xuICAgIGogPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigxMCk7XG4gIH0gd2hpbGUgKHBpY2tlZC5pbmNsdWRlcyhgJHtpfSwgJHtqfWApKTtcblxuICBwaWNrZWQucHVzaChgJHtpfSwgJHtqfWApO1xuXG4gIGF0dGFja1RpbGUocGxheWVyLCBpLCBqKTtcblxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQucGxheWVyIC5ncmlkLSR7aX0tJHtqfWApO1xuICBwYXJlbnQuY2xhc3NMaXN0LmFkZChwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0QXR0YWNrTWVzc2FnZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHVybkNvbnRyb2xsZXI7XG4iLCJmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcihudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUmFuZG9tTnVtYmVyO1xuIiwiLy8gTW9kdWxlIGZvciBoZWxwaW5nIGNyZWF0ZSBpbWFnZXMgYW5kIHBhcmFncmFwaHNcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0ZXh0IHdpdGggMSBwYXJhbWV0ZXJzLlxuLy8gdGV4dCBjb250ZW50XG5mdW5jdGlvbiBjcmVhdGVUZXh0KHRleHQpIHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGltYWdlIHdpdGggY3JlZGl0cy4gQ29udGFpbmluZyAzIHBhcmFtZXRlcnMuXG4vLyBJbWFnZSBzb3VyY2UsIGNyZWRpdCBsaW5rIGFuZCBjcmVkaXQgdGV4dC5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYywgY3JlZGl0TGluaywgY3JlZGl0VGV4dCkge1xuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1nLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBzcmM7XG5cbiAgY29uc3QgY3JlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3JlZGl0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY3JlZGl0XCIpO1xuXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjcmVkaXQuaHJlZiA9IGNyZWRpdExpbms7XG4gIGNyZWRpdC50ZXh0Q29udGVudCA9IGNyZWRpdFRleHQ7XG5cbiAgY3JlZGl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVkaXRDb250YWluZXIpO1xuXG4gIHJldHVybiBpbWFnZUNvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlIGljb24gZnJvbSBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vaWNvbnNcbmZ1bmN0aW9uIGNyZWF0ZUljb24odGV4dCkge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBpY29uLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gaWNvbjtcbn1cblxuLy8gQ2FwaXRhbGl6ZSBlYWNoIHdvcmQgaW4gYSB0ZXh0XG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaFdvcmQodGV4dCkge1xuICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoXCIgXCIpO1xuXG4gIHJldHVybiB3b3Jkc1xuICAgIC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpKVxuICAgIC5qb2luKFwiIFwiKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGV4dCwgY3JlYXRlSW1hZ2UsIGNyZWF0ZUljb24sIGNhcGl0YWxpemVFYWNoV29yZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9nYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IHJlbmRlckdhbWVib2FyZCBmcm9tIFwiLi9tb2R1bGVzL3JlbmRlckdhbWVib2FyZFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vbW9kdWxlcy9HYW1lXCI7XG5pbXBvcnQgcmVuZGVyRm9vdGVyIGZyb20gXCIuL21vZHVsZXMvcmVuZGVyRm9vdGVyXCI7XG5pbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gXCIuL21vZHVsZXMvcmVuZGVySGVhZGVyXCI7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuXG5nYW1lQ29udHJvbGxlcihnYW1lKTtcblxucmVuZGVySGVhZGVyKCk7XG5yZW5kZXJHYW1lYm9hcmQoZ2FtZSk7XG5yZW5kZXJGb290ZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==