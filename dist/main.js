/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\n    margin: 0px;\\n    padding: 0px;\\n    background-color: rgb(88, 71, 0);\\n}\\n\\nh1 {\\n    margin: 0px;\\n    padding: 0px;\\n    font-size: 1.9rem;\\n    font-weight: bold;\\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\\n}\\n\\nheader{\\n    position: fixed;\\n    top: 20px;\\n    height: 150px;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    background-color: rgb(233, 100, 23);\\n    color: #fff;\\n}\\n\\n#left-h {\\n    width: 50%;\\n    justify-content: flex-start;\\n    padding: 30px 140px;\\n}\\n\\n#right-h {\\n    width: 50%;\\n}\\n\\n#right-h ul{\\n    display: flex;\\n    flex-direction: row;\\n    padding: 17px 40px;\\n    justify-content: flex-end;\\n    align-items: center;\\n    text-decoration: none;\\n    list-style-type: none;\\n}\\n\\n#right-h li{\\n   margin: 10px;\\n   padding: 12px 30px;\\n   background-color: rgb(255, 255, 255);\\n   text-decoration: none;\\n   color: #000;\\n   font-weight: 900;\\n   border-radius: 15px;\\n   -webkit-box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E, inset 5px 3px 24px 15px rgba(114,117,104,0); \\n   box-shadow: inset -1px 3px 8px 5px rgb(122, 2, 2), 2px 5px 16px 0px rgb(153, 50, 9), inset 5px 3px 24px 15px rgba(114,117,104,0);\\n}\\n\\n#welcome-container{\\n   margin: 0px auto; \\n   height: 100vh;\\n   width: 80%;\\n   background-color: #F6ECC3;\\n   opacity: 1;\\n   text-align: center;\\n}\\n\\n#welcome-message{\\n    position: relative;\\n    top: 50%;\\n    -webkit-transform: translateY(-50%);\\n    -ms-transform: translateY(-50%);\\n    transform: translateY(-50%);\\n    padding: 0px 20px;\\n    font-weight: bold;\\n    font-size: 4rem;\\n    color: black;\\n    font-family: 'Merriweather', serif;\\n}\\n\\n#menuContainer h1 {\\n    padding: 200px 0px 0px 0px;\\n}\\n\\n#menuContainer ul {\\n    padding: 30px; \\n    list-style:  none;\\n}\\n\\n#menuContainer li{\\n   margin: 10px auto;\\n   padding: 12px 30px;\\n   width: 50%;\\n   background-color: rgb(255, 255, 255);\\n   text-decoration: none;\\n   color: #000;\\n   font-weight: 900;\\n   border-radius: 15px;\\n   -webkit-box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E, inset 5px 3px 24px 15px rgba(114,117,104,0); \\n   box-shadow: inset -1px 3px 8px 5px rgb(122, 2, 2), 2px 5px 16px 0px rgb(153, 50, 9), inset 5px 3px 24px 15px rgba(114,117,104,0);\\n}\\n\\n#staffContainer {\\n   padding: 170px;\\n}\\n\\n#contactContainer h1 {\\n   position: relative;\\n   padding: 250px 0px 0px 0px;\\n\\n}\\n\\n#contactContainer h3{\\n    position: relative;\\n    font-weight: bold;\\n    font-size: 1.5rem;\\n    color: black;\\n    font-family: 'Merriweather', serif;\\n}\\n\\n#contact-details {\\n    padding: 0px 0px;\\n}\\n\\n#short-description{\\n    position: relative;\\n    top: 50%;\\n    -webkit-transform: translateY(-50%);\\n    -ms-transform: translateY(-50%);\\n    transform: translateY(-50%);\\n    padding: 0px 40px;\\n    font-weight: bold;\\n    font-size: 1.6rem;\\n    font-family: 'Merriweather', serif;\\n}\\n\\nfooter {\\n    width: 100%;\\n    height: 50px;\\n    position: fixed;\\n    bottom: 0;\\n    background-color: rgb(107, 5, 5);\\n    color: white;\\n}\\n\\n#auth {\\n    position: relative;\\n    top: 25%;\\n    -webkit-transform: translateY(-50%);\\n    -ms-transform: translateY(-50%);\\n    transform: translateY(-50%);\\n    text-align: center;\\n    font-weight: bold;\\n    font-size: small;\\n}\\n\\n@media (max-width: 576px){ \\n    body{\\n        margin: 0px;\\n        padding: 0px;\\n        background-color: #F6ECC3;\\n    }\\n    header {\\n        position: absolute;\\n        top: 0px; \\n        margin: 0px;\\n        padding: 0px;\\n        display: flex;\\n        flex-direction: column;\\n        height: 300px;\\n    } \\n\\n    header h1{\\n        margin: 0px;\\n        padding: 0px;\\n        font-size: medium;\\n    }\\n\\n    #left-h {\\n        margin: 0px;\\n        padding: 0px;\\n        width: 100%;\\n        justify-content: center;\\n        align-items: center;\\n        padding: 30px 0px;\\n        text-align: center;\\n    }\\n    \\n    #right-h {\\n        margin: 0px;\\n        padding: 0px;\\n        width: 100%;\\n    }\\n    \\n    #right-h ul{\\n        display: flex;\\n        flex-direction: column;\\n        padding: 0px 40px;\\n        align-items: center;\\n        text-decoration: none;\\n        list-style-type: none;\\n    }\\n    \\n    #right-h li{\\n       margin: 5px;\\n       padding: 4px 20px;\\n       background-color: rgb(255, 255, 255);\\n       text-decoration: none;\\n       color: #000;\\n       font-weight: 400;\\n       border-radius: 10px;\\n       -webkit-box-shadow: inset -1px 2px 7px 4px #1F87FF, 2px 5px 16px 0px #0B325E, inset 5px 3px 24px 15px rgba(114,117,104,0); \\n       box-shadow: inset -1px 2px 7px 4px rgb(122, 2, 2), 2px 5px 16px 0px rgb(153, 50, 9), inset 5px 3px 24px 15px rgba(114,117,104,0);\\n    }\\n\\n    #welcome-container{\\n        margin: 0px auto; \\n        height: 100vh;\\n        width: 100%;\\n        opacity: 1;\\n        text-align: center;\\n     }\\n     \\n     #welcome-message{\\n         margin: 20px 0px;\\n         position: relative;\\n         padding: 0px 20px;\\n         font-weight: bold;\\n         font-size: 2rem;\\n         font-family: 'Merriweather', serif;\\n         color: #000;\\n     }\\n     \\n    #short-description {\\n        margin: 30px 0px;\\n        padding: 10px;\\n        font-size: 15px;\\n        font-weight: 300;\\n        color: rgb(25, 36, 25);\\n    }\\n\\n     #menuContainer h1 {\\n        padding: 330px 0px 0px 0px;\\n     }\\n     \\n     #menuContainer ul {\\n         padding: 20px; \\n         list-style: none;\\n     }\\n     \\n     #menuContainer li{\\n        margin: 10px auto;\\n        padding: 12px 30px;\\n        width: 50%;\\n        background-color: rgb(255, 255, 255);\\n        text-decoration: none;\\n        color: #000;\\n        font-weight: 700;\\n        border-radius: 5px;\\n     }\\n     \\n     #staffContainer {\\n       margin-top: 0px;\\n       padding-top: 300px;\\n     }\\n     \\n     #staffContainer h1 {\\n        display: none;\\n        margin: 0px;\\n        padding: 0px;\\n     }\\n\\n     #staffContainer p {\\n        margin: 0px;\\n        padding: 0px;\\n        display: block;\\n     }\\n\\n     #contactContainer h1 {\\n        position: relative;\\n        padding: 340px 0px 0px 0px;\\n     }\\n     \\n     #contactContainer h3{\\n         position: relative;\\n         font-weight: bold;\\n         font-size: 1.5rem;\\n         color: black;\\n         font-family: 'Merriweather', serif;\\n     }\\n     \\n     #contact-details {\\n         padding: 0px 0px;\\n     }\\n     \\n     footer {\\n         width: 100%;\\n         height: 50px;\\n         position: fixed;\\n         bottom: 0;\\n         background-color: rgb(107, 5, 5);\\n         color: white;\\n     }\\n     \\n     #auth {\\n         position: relative;\\n         top: 25%;\\n         -webkit-transform: translateY(-50%);\\n         -ms-transform: translateY(-50%);\\n         transform: translateY(-50%);\\n         text-align: center;\\n         font-weight: bold;\\n         font-size: small;\\n     }\\n}\\n  \\n@media (min-width: 576px) and (max-width: 992px) {\\n    body{\\n        margin: 0px;\\n        padding: 0px;\\n        background-color: #F6ECC3;\\n    }\\n    header {\\n        position: absolute;\\n        top: 0px; \\n        margin: 0px;\\n        padding: 0px;\\n        display: flex;\\n        flex-direction: row;\\n        height: 100px;\\n    } \\n\\n    header h1{\\n        margin: 0px;\\n        padding: 0px;\\n        font-size: medium;\\n    }\\n\\n    #left-h {\\n        margin: 0px;\\n        padding: 0px;\\n        width: 50%;\\n        justify-content: center;\\n        align-items: center;\\n        padding: 30px 0px;\\n        text-align: center;\\n    }\\n    \\n    #right-h {\\n        margin: 0px;\\n        padding: 0px;\\n        width: 50%;\\n    }\\n    \\n    #right-h ul{\\n        display: flex;\\n        flex-direction: row;\\n        padding: 0px 40px;\\n        align-items: center;\\n        text-decoration: none;\\n        list-style-type: none;\\n    }\\n    \\n    #right-h li{\\n       margin: 5px;\\n       padding: 4px 20px;\\n       background-color: rgb(255, 255, 255);\\n       text-decoration: none;\\n       color: #000;\\n       font-weight: 700;\\n       border-radius: 10px;\\n       -webkit-box-shadow: inset -1px 2px 7px 4px #1F87FF, 2px 5px 16px 0px #0B325E, inset 5px 3px 24px 15px rgba(114,117,104,0); \\n       box-shadow: inset -1px 2px 7px 4px rgb(122, 2, 2), 2px 5px 16px 0px rgb(153, 50, 9), inset 5px 3px 24px 15px rgba(114,117,104,0);\\n    }\\n\\n    #welcome-container{\\n        margin: 0px auto; \\n        height: 100vh;\\n        width: 100%;\\n        opacity: 1;\\n        text-align: center;\\n     }\\n     \\n     #welcome-message{\\n         margin: 20px 0px;\\n         position: relative;\\n         padding: 0px 20px;\\n         font-weight: bold;\\n         font-size: 2rem;\\n         font-family: 'Merriweather', serif;\\n         color: #000;\\n     }\\n     \\n    #short-description {\\n        margin: 30px 0px;\\n        padding: 10px;\\n        font-size: 15px;\\n        font-weight: 300;\\n        color: rgb(25, 36, 25);\\n    }\\n\\n     #menuContainer h1 {\\n        padding: 130px 0px 0px 0px;\\n     }\\n     \\n     #menuContainer ul {\\n         padding: 20px; \\n         list-style: none;\\n     }\\n     \\n     #menuContainer li{\\n        margin: 10px auto;\\n        padding: 12px 30px;\\n        width: 50%;\\n        background-color: rgb(255, 255, 255);\\n        text-decoration: none;\\n        color: #000;\\n        font-weight: 700;\\n        border-radius: 5px;\\n     }\\n     \\n     #staffContainer {\\n       margin-top: 0px;\\n       padding-top: 130px;\\n     }\\n     \\n     #staffContainer h1 {\\n        margin: 0px;\\n        padding: 0px;\\n     }\\n\\n     #staffContainer p {\\n        margin: 0px;\\n        padding: 0px;\\n        display: block;\\n     }\\n\\n     #contactContainer h1 {\\n        position: relative;\\n        padding: 140px 0px 0px 0px;\\n     }\\n     \\n     #contactContainer h3{\\n         position: relative;\\n         font-weight: bold;\\n         font-size: 1.5rem;\\n         color: black;\\n         font-family: 'Merriweather', serif;\\n     }\\n     \\n     #contact-details {\\n         padding: 0px 0px;\\n     }\\n     \\n     footer {\\n         width: 100%;\\n         height: 50px;\\n         position: fixed;\\n         bottom: 0;\\n         background-color: rgb(107, 5, 5);\\n         color: white;\\n     }\\n     \\n     #auth {\\n         position: relative;\\n         top: 25%;\\n         -webkit-transform: translateY(-50%);\\n         -ms-transform: translateY(-50%);\\n         transform: translateY(-50%);\\n         text-align: center;\\n         font-weight: bold;\\n         font-size: small;\\n     }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_loadFullPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadFullPage */ \"./src/modules/loadFullPage.js\");\n\n \n\nObject(_modules_loadFullPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contactPage = () => {\n    const contact = document.createElement('contact');\n    contact.setAttribute('id', 'contactContainer');\n    \n    const contactTitle = document.createElement('h1');\n    contactTitle.innerHTML = 'Contact Us';\n    contact.appendChild(contactTitle);\n\n    const contactDetails = document.createElement('div');\n    contactDetails.setAttribute('id','contact-details');\n    contactDetails.innerHTML =  \n      '<h3>We are located in Tirgu Mures</h3>' +\n      '<p>No. 10, The Name Of The Street</p>' +\n      '<p>Name of County, Country</p>' +\n      '<p>999999</p>' +\n      '<h3>Phone number:</h3>' +\n      '<p>+40 999 999</p>' +\n      '<br>';\n\n    contact.appendChild(contactDetails);  \n    return contact;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactPage);\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction fullFooter() {\n    const footNote = document.createElement('footer');\n    footNote.setAttribute('class', 'container-fluid');\n    footNote.setAttribute('id', 'footer')\n    const author = document.createElement('p');\n    author.innerHTML = '2019 &copy; Molnar Emese';\n    author.setAttribute('id','auth');\n    footNote.appendChild(author);\n    return footNote;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fullFooter);\n\n//# sourceURL=webpack:///./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fullHeader = () => {\n    const mainHeader = document.createElement('header');\n    mainHeader.setAttribute('class', 'container-fluid')\n    mainHeader.setAttribute('id', 'header')\n    \n    const left = document.createElement('div');\n    left.setAttribute('id', 'left-h');\n    \n    const right = document.createElement('div');\n    right.setAttribute('id', 'right-h');\n\n    const restaurantName = document.createElement('h1');\n    restaurantName.setAttribute('id', 'restName');\n    restaurantName.innerHTML = 'Eat, Drink, Enjoy';\n    left.appendChild(restaurantName);\n    mainHeader.appendChild(left);\n\n    const navBar = document.createElement('ul');\n    navBar.setAttribute('id', 'navbar');\n    navBar.setAttribute('class', 'list-group')\n\n    let navTabs = ['About', 'Menu', 'Staff', 'Contact'];\n\n    navTabs.forEach((tab) => {\n        let tabName = document.createElement('li');\n        tabName.setAttribute('id', `${tab}`);\n        tabName.innerHTML = `${tab}`;\n        navBar.appendChild(tabName);   \n    })\n\n    right.appendChild(navBar);\n    mainHeader.appendChild(right);\n\n    return mainHeader; \n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fullHeader);\n\n\n\n//# sourceURL=webpack:///./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/loadFullPage.js":
/*!*************************************!*\
  !*** ./src/modules/loadFullPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/modules/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ \"./src/modules/main.js\");\n/* harmony import */ var _staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff */ \"./src/modules/staff.js\");\n\n\n\n\n\n\n\nconst pageInit = () => {\n   const main = document.getElementById('content');\n   const header = Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n   const mainSect = Object(_main__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n   const footer = Object(_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n   main.appendChild(header);\n   const home = document.getElementById('About');\n   home.addEventListener('click', () => {\n      mainSect.innerHTML = '';\n      mainSect.appendChild(Object(_main__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    });\n \n    const menu = document.getElementById('Menu');\n    menu.addEventListener('click', () => {\n        mainSect.innerHTML = '';\n        mainSect.appendChild(Object(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    });\n\n    const staff = document.getElementById('Staff');\n    staff.addEventListener('click', () => {\n        mainSect.innerHTML = '';\n        mainSect.appendChild(Object(_staff__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n    });\n\n    const contact = document.getElementById('Contact');\n    contact.addEventListener('click', () => {\n        mainSect.innerHTML = '';\n        mainSect.appendChild(Object(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    });\n\n   main.appendChild(mainSect);\n   main.appendChild(footer);\n   return main;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageInit);\n\n\n//# sourceURL=webpack:///./src/modules/loadFullPage.js?");

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mainSection = () => {\n    const description = document.createElement('div');\n    description.setAttribute('id', 'welcome-container');\n\n    const welcome = document.createElement('h1');\n    welcome.setAttribute('id','welcome-message');\n    welcome.textContent = 'Welcome to Our Restaurant\\'s Website!';\n\n    description.appendChild(welcome);\n\n    const message = document.createElement('h4');\n    message.setAttribute('id', 'short-description');\n    message.textContent = 'Our restaurant is located in the heart of Transylvania and offers you a great variety of local food. Feel free to try out our menu!';\n\n    description.appendChild(message);\n\n    return description;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainSection);\n\n//# sourceURL=webpack:///./src/modules/main.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menuPage = () => {\n    const menu = document.createElement('div');\n    menu.setAttribute('id', 'menuContainer');\n    \n    const menuTitle = document.createElement('h1');\n    menuTitle.innerHTML = 'Our Menu';\n    menu.appendChild(menuTitle);\n\n    const menuBar = document.createElement('ul');\n    menuBar.setAttribute('id', 'menubar');\n\n    let menuTabs = ['Burger', 'Fried Chicken', 'Potato Chips', \n       'Mushroom soup', 'Vegetable Fried Rice', 'French Onion Soup'];\n\n    menuTabs.forEach((tab) => {\n        let tabName = document.createElement('li');\n        tabName.setAttribute('id', `${tab}`);\n        tabName.innerHTML = `${tab}`;\n        menuBar.appendChild(tabName);   \n    });\n\n    menu.appendChild(menuBar);\n    return menu;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuPage);\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/staff.js":
/*!******************************!*\
  !*** ./src/modules/staff.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst staffPage = () => {\n    const staff = document.createElement('div');\n    staff.setAttribute('id', 'staffContainer');\n    \n    const staffTitle = document.createElement('h1');\n    staffTitle.innerHTML = 'This is our staff: ';\n    staff.appendChild(staffTitle);\n\n    const staffList = document.createElement('div');\n    staffList.setAttribute('id','contact-details');\n    staffList.innerHTML =  \n      '<h3>Head Chef</h3>' +\n      '<p>Name One</p>' +\n      '<h3>Chefs</h3>' +\n      '<p>Name Two</p>' +\n      '<p>Name Three</p>' +\n      '<p>Name Four</p>' +\n      '<br>' +\n      '<h3>Waiters</h3>' +\n      '<p>Name One</p>' +\n      '<p>Name Two</p>' +\n      '<p>Name Three</p>' +\n      '<p>Name Four</p>' \n\n    staff.appendChild(staffList);  \n    return staff;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (staffPage);\n\n//# sourceURL=webpack:///./src/modules/staff.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style/style.css?");

/***/ })

/******/ });