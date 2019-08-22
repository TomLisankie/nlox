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
/******/ 	return __webpack_require__(__webpack_require__.s = "./visuals/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/enum/dist/enum.js":
/*!****************************************!*\
  !*** ./node_modules/enum/dist/enum.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _interopRequire = function (obj) { return obj && obj.__esModule ? obj[\"default\"] : obj; };\n\nvar _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } };\n\nvar os = _interopRequire(__webpack_require__(/*! os */ \"./node_modules/os-browserify/browser.js\"));\n\nvar EnumItem = _interopRequire(__webpack_require__(/*! ./enumItem */ \"./node_modules/enum/dist/enumItem.js\"));\n\nvar _isType = __webpack_require__(/*! ./isType */ \"./node_modules/enum/dist/isType.js\");\n\nvar isString = _isType.isString;\nvar isNumber = _isType.isNumber;\n\nvar indexOf = __webpack_require__(/*! ./indexOf */ \"./node_modules/enum/dist/indexOf.js\").indexOf;\n\nvar isBuffer = _interopRequire(__webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\"));\n\nvar endianness = os.endianness();\n\n/**\n * Represents an Enum with enum items.\n * @param {Array || Object}  map     This are the enum items.\n * @param {String || Object} options This are options. [optional]\n */\n\nvar Enum = (function () {\n  function Enum(map, options) {\n    var _this = this;\n\n    _classCallCheck(this, Enum);\n\n    /* implement the \"ref type interface\", so that Enum types can\n     * be used in `node-ffi` function declarations and invokations.\n     * In C, these Enums act as `uint32_t` types.\n     *\n     * https://github.com/TooTallNate/ref#the-type-interface\n     */\n    this.size = 4;\n    this.indirection = 1;\n\n    if (options && isString(options)) {\n      options = { name: options };\n    }\n\n    this._options = options || {};\n    this._options.separator = this._options.separator || \" | \";\n    this._options.endianness = this._options.endianness || endianness;\n    this._options.ignoreCase = this._options.ignoreCase || false;\n    this._options.freez = this._options.freez || false;\n\n    this.enums = [];\n\n    if (map.length) {\n      this._enumLastIndex = map.length;\n      var array = map;\n      map = {};\n\n      for (var i = 0; i < array.length; i++) {\n        map[array[i]] = Math.pow(2, i);\n      }\n    }\n\n    for (var member in map) {\n      guardReservedKeys(this._options.name, member);\n      this[member] = new EnumItem(member, map[member], { ignoreCase: this._options.ignoreCase });\n      this.enums.push(this[member]);\n    }\n    this._enumMap = map;\n\n    if (this._options.ignoreCase) {\n      this.getLowerCaseEnums = function () {\n        var res = {};\n        for (var i = 0, len = this.enums.length; i < len; i++) {\n          res[this.enums[i].key.toLowerCase()] = this.enums[i];\n        }\n        return res;\n      };\n    }\n\n    if (this._options.name) {\n      this.name = this._options.name;\n    }\n\n    var isFlaggable = function () {\n      for (var i = 0, len = _this.enums.length; i < len; i++) {\n        var e = _this.enums[i];\n\n        if (!(e.value !== 0 && !(e.value & e.value - 1))) {\n          return false;\n        }\n      }\n      return true;\n    };\n\n    this.isFlaggable = isFlaggable();\n    if (this._options.freez) {\n      this.freezeEnums(); //this will make instances of Enum non-extensible\n    }\n  }\n\n  /**\n   * Returns the appropriate EnumItem key.\n   * @param  {EnumItem || String || Number} key The object to get with.\n   * @return {String}                           The get result.\n   */\n\n  Enum.prototype.getKey = function getKey(value) {\n    var item = this.get(value);\n    if (item) {\n      return item.key;\n    }\n  };\n\n  /**\n   * Returns the appropriate EnumItem value.\n   * @param  {EnumItem || String || Number} key The object to get with.\n   * @return {Number}                           The get result.\n   */\n\n  Enum.prototype.getValue = function getValue(key) {\n    var item = this.get(key);\n    if (item) {\n      return item.value;\n    }\n  };\n\n  /**\n   * Returns the appropriate EnumItem.\n   * @param  {EnumItem || String || Number} key The object to get with.\n   * @return {EnumItem}                         The get result.\n   */\n\n  Enum.prototype.get = function get(key, offset) {\n    if (key === null || key === undefined) {\n      return;\n    } // Buffer instance support, part of the ref Type interface\n    if (isBuffer(key)) {\n      key = key[\"readUInt32\" + this._options.endianness](offset || 0);\n    }\n\n    if (EnumItem.isEnumItem(key)) {\n      var foundIndex = indexOf.call(this.enums, key);\n      if (foundIndex >= 0) {\n        return key;\n      }\n      if (!this.isFlaggable || this.isFlaggable && key.key.indexOf(this._options.separator) < 0) {\n        return;\n      }\n      return this.get(key.key);\n    } else if (isString(key)) {\n\n      var enums = this;\n      if (this._options.ignoreCase) {\n        enums = this.getLowerCaseEnums();\n        key = key.toLowerCase();\n      }\n\n      if (key.indexOf(this._options.separator) > 0) {\n        var parts = key.split(this._options.separator);\n\n        var value = 0;\n        for (var i = 0; i < parts.length; i++) {\n          var part = parts[i];\n\n          value |= enums[part].value;\n        }\n\n        return new EnumItem(key, value);\n      } else {\n        return enums[key];\n      }\n    } else {\n      for (var m in this) {\n        if (this.hasOwnProperty(m)) {\n          if (this[m].value === key) {\n            return this[m];\n          }\n        }\n      }\n\n      var result = null;\n\n      if (this.isFlaggable) {\n        for (var n in this) {\n          if (this.hasOwnProperty(n)) {\n            if ((key & this[n].value) !== 0) {\n              if (result) {\n                result += this._options.separator;\n              } else {\n                result = \"\";\n              }\n              result += n;\n            }\n          }\n        }\n      }\n\n      return this.get(result || null);\n    }\n  };\n\n  /**\n   * Sets the Enum \"value\" onto the give `buffer` at the specified `offset`.\n   * Part of the ref \"Type interface\".\n   *\n   * @param  {Buffer} buffer The Buffer instance to write to.\n   * @param  {Number} offset The offset in the buffer to write to. Default 0.\n   * @param  {EnumItem || String || Number} value The EnumItem to write.\n   */\n\n  Enum.prototype.set = function set(buffer, offset, value) {\n    var item = this.get(value);\n    if (item) {\n      return buffer[\"writeUInt32\" + this._options.endianness](item.value, offset || 0);\n    }\n  };\n\n  /**\n   * Define freezeEnums() as a property of the prototype.\n   * make enumerable items nonconfigurable and deep freeze the properties. Throw Error on property setter.\n   */\n\n  Enum.prototype.freezeEnums = function freezeEnums() {\n    function envSupportsFreezing() {\n      return Object.isFrozen && Object.isSealed && Object.getOwnPropertyNames && Object.getOwnPropertyDescriptor && Object.defineProperties && Object.__defineGetter__ && Object.__defineSetter__;\n    }\n\n    function freezer(o) {\n      var props = Object.getOwnPropertyNames(o);\n      props.forEach(function (p) {\n        if (!Object.getOwnPropertyDescriptor(o, p).configurable) {\n          return;\n        }\n\n        Object.defineProperties(o, p, { writable: false, configurable: false });\n      });\n      return o;\n    }\n\n    function getPropertyValue(value) {\n      return value;\n    }\n\n    function deepFreezeEnums(o) {\n      if (typeof o !== \"object\" || o === null || Object.isFrozen(o) || Object.isSealed(o)) {\n        return;\n      }\n      for (var key in o) {\n        if (o.hasOwnProperty(key)) {\n          o.__defineGetter__(key, getPropertyValue.bind(null, o[key]));\n          o.__defineSetter__(key, function throwPropertySetError(value) {\n            throw TypeError(\"Cannot redefine property; Enum Type is not extensible.\");\n          });\n          deepFreezeEnums(o[key]);\n        }\n      }\n      if (Object.freeze) {\n        Object.freeze(o);\n      } else {\n        freezer(o);\n      }\n    }\n\n    if (envSupportsFreezing()) {\n      deepFreezeEnums(this);\n    }\n\n    return this;\n  };\n\n  /**\n   * Return true whether the enumItem parameter passed in is an EnumItem object and \n   * has been included as constant of this Enum   \n   * @param  {EnumItem} enumItem\n   */\n\n  Enum.prototype.isDefined = function isDefined(enumItem) {\n    var condition = function (e) {\n      return e === enumItem;\n    };\n    if (isString(enumItem) || isNumber(enumItem)) {\n      condition = function (e) {\n        return e.is(enumItem);\n      };\n    }\n    return this.enums.some(condition);\n  };\n\n  /**\n   * Returns JSON object representation of this Enum.\n   * @return {String} JSON object representation of this Enum.\n   */\n\n  Enum.prototype.toJSON = function toJSON() {\n    return this._enumMap;\n  };\n\n  /**\n   * Extends the existing Enum with a New Map.\n   * @param  {Array}  map  Map to extend from\n   */\n\n  Enum.prototype.extend = function extend(map) {\n    if (map.length) {\n      var array = map;\n      map = {};\n\n      for (var i = 0; i < array.length; i++) {\n        var exponent = this._enumLastIndex + i;\n        map[array[i]] = Math.pow(2, exponent);\n      }\n\n      for (var member in map) {\n        guardReservedKeys(this._options.name, member);\n        this[member] = new EnumItem(member, map[member], { ignoreCase: this._options.ignoreCase });\n        this.enums.push(this[member]);\n      }\n\n      for (var key in this._enumMap) {\n        map[key] = this._enumMap[key];\n      }\n\n      this._enumLastIndex += map.length;\n      this._enumMap = map;\n\n      if (this._options.freez) {\n        this.freezeEnums(); //this will make instances of new Enum non-extensible\n      }\n    }\n  };\n\n  /**\n   * Registers the Enum Type globally in node.js.\n   * @param  {String} key Global variable. [optional]\n   */\n\n  Enum.register = function register() {\n    var key = arguments[0] === undefined ? \"Enum\" : arguments[0];\n\n    if (!global[key]) {\n      global[key] = Enum;\n    }\n  };\n\n  return Enum;\n})();\n\nmodule.exports = Enum;\n\n// private\n\nvar reservedKeys = [\"_options\", \"get\", \"getKey\", \"getValue\", \"enums\", \"isFlaggable\", \"_enumMap\", \"toJSON\", \"_enumLastIndex\"];\n\nfunction guardReservedKeys(customName, key) {\n  if (customName && key === \"name\" || indexOf.call(reservedKeys, key) >= 0) {\n    throw new Error(\"Enum key \" + key + \" is a reserved word!\");\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/enum/dist/enum.js?");

/***/ }),

/***/ "./node_modules/enum/dist/enumItem.js":
/*!********************************************!*\
  !*** ./node_modules/enum/dist/enumItem.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } };\n\nvar _isType = __webpack_require__(/*! ./isType */ \"./node_modules/enum/dist/isType.js\");\n\nvar isObject = _isType.isObject;\nvar isString = _isType.isString;\n\n/**\n * Represents an Item of an Enum.\n * @param {String} key   The Enum key.\n * @param {Number} value The Enum value.\n */\n\nvar EnumItem = (function () {\n\n  /*constructor reference so that, this.constructor===EnumItem//=>true */\n\n  function EnumItem(key, value) {\n    var options = arguments[2] === undefined ? {} : arguments[2];\n\n    _classCallCheck(this, EnumItem);\n\n    this.key = key;\n    this.value = value;\n\n    this._options = options;\n    this._options.ignoreCase = this._options.ignoreCase || false;\n  }\n\n  /**\n   * Checks if the flagged EnumItem has the passing object.\n   * @param  {EnumItem || String || Number} value The object to check with.\n   * @return {Boolean}                            The check result.\n   */\n\n  EnumItem.prototype.has = function has(value) {\n    if (EnumItem.isEnumItem(value)) {\n      return (this.value & value.value) !== 0;\n    } else if (isString(value)) {\n      if (this._options.ignoreCase) {\n        return this.key.toLowerCase().indexOf(value.toLowerCase()) >= 0;\n      }\n      return this.key.indexOf(value) >= 0;\n    } else {\n      return (this.value & value) !== 0;\n    }\n  };\n\n  /**\n   * Checks if the EnumItem is the same as the passing object.\n   * @param  {EnumItem || String || Number} key The object to check with.\n   * @return {Boolean}                          The check result.\n   */\n\n  EnumItem.prototype.is = function is(key) {\n    if (EnumItem.isEnumItem(key)) {\n      return this.key === key.key;\n    } else if (isString(key)) {\n      if (this._options.ignoreCase) {\n        return this.key.toLowerCase() === key.toLowerCase();\n      }\n      return this.key === key;\n    } else {\n      return this.value === key;\n    }\n  };\n\n  /**\n   * Returns String representation of this EnumItem.\n   * @return {String} String representation of this EnumItem.\n   */\n\n  EnumItem.prototype.toString = function toString() {\n    return this.key;\n  };\n\n  /**\n   * Returns JSON object representation of this EnumItem.\n   * @return {String} JSON object representation of this EnumItem.\n   */\n\n  EnumItem.prototype.toJSON = function toJSON() {\n    return this.key;\n  };\n\n  /**\n   * Returns the value to compare with.\n   * @return {String} The value to compare with.\n   */\n\n  EnumItem.prototype.valueOf = function valueOf() {\n    return this.value;\n  };\n\n  EnumItem.isEnumItem = function isEnumItem(value) {\n    return value instanceof EnumItem || isObject(value) && value.key !== undefined && value.value !== undefined;\n  };\n\n  return EnumItem;\n})();\n\nmodule.exports = EnumItem;\n\n//# sourceURL=webpack:///./node_modules/enum/dist/enumItem.js?");

/***/ }),

/***/ "./node_modules/enum/dist/indexOf.js":
/*!*******************************************!*\
  !*** ./node_modules/enum/dist/indexOf.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nvar indexOf = Array.prototype.indexOf || function (find, i /*opt*/) {\n  if (i === undefined) i = 0;\n  if (i < 0) i += this.length;\n  if (i < 0) i = 0;\n  for (var n = this.length; i < n; i++) if (i in this && this[i] === find) return i;\n  return -1;\n};\nexports.indexOf = indexOf;\n\n//# sourceURL=webpack:///./node_modules/enum/dist/indexOf.js?");

/***/ }),

/***/ "./node_modules/enum/dist/isType.js":
/*!******************************************!*\
  !*** ./node_modules/enum/dist/isType.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nvar isType = function (type, value) {\n  return typeof value === type;\n};\nexports.isType = isType;\nvar isObject = function (value) {\n  return isType(\"object\", value);\n};\nexports.isObject = isObject;\nvar isString = function (value) {\n  return isType(\"string\", value);\n};\nexports.isString = isString;\nvar isNumber = function (value) {\n  return isType(\"number\", value);\n};\nexports.isNumber = isNumber;\n\n//# sourceURL=webpack:///./node_modules/enum/dist/isType.js?");

/***/ }),

/***/ "./node_modules/enum/index.js":
/*!************************************!*\
  !*** ./node_modules/enum/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/enum */ \"./node_modules/enum/dist/enum.js\");\n\n\n//# sourceURL=webpack:///./node_modules/enum/index.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/os-browserify/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/os-browserify/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.endianness = function () { return 'LE' };\n\nexports.hostname = function () {\n    if (typeof location !== 'undefined') {\n        return location.hostname\n    }\n    else return '';\n};\n\nexports.loadavg = function () { return [] };\n\nexports.uptime = function () { return 0 };\n\nexports.freemem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.totalmem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.cpus = function () { return [] };\n\nexports.type = function () { return 'Browser' };\n\nexports.release = function () {\n    if (typeof navigator !== 'undefined') {\n        return navigator.appVersion;\n    }\n    return '';\n};\n\nexports.networkInterfaces\n= exports.getNetworkInterfaces\n= function () { return {} };\n\nexports.arch = function () { return 'javascript' };\n\nexports.platform = function () { return 'browser' };\n\nexports.tmpdir = exports.tmpDir = function () {\n    return '/tmp';\n};\n\nexports.EOL = '\\n';\n\nexports.homedir = function () {\n\treturn '/'\n};\n\n\n//# sourceURL=webpack:///./node_modules/os-browserify/browser.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/LoxError.js":
/*!*************************!*\
  !*** ./src/LoxError.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TokenType = __webpack_require__(/*! ./TokenType */ \"./src/TokenType.js\");\n\nvar _hadError = false;\nvar _hadRuntimeError = false;\n/**\n * Error reporting mechanism for the interpreter.\n */\n\nvar LoxError =\n/*#__PURE__*/\nfunction () {\n  function LoxError() {\n    _classCallCheck(this, LoxError);\n  }\n\n  _createClass(LoxError, null, [{\n    key: \"reset\",\n\n    /**\n     * Resets the error state.\n     * @static\n     */\n    value: function reset() {\n      _hadError = false;\n      _hadRuntimeError = false;\n    }\n  }, {\n    key: \"_report\",\n    value: function _report(line, where, message) {\n      console.error(\"[line \".concat(line, \"] Error \").concat(where, \": \").concat(message));\n      _hadError = true;\n    }\n    /**\n     * Error reporting method for the {@link Scanner}.\n     *\n     * @static\n     * @param {number} line    Line the error occurred on.\n     * @param {string} message Error message.\n     */\n\n  }, {\n    key: \"scanError\",\n    value: function scanError(line, message) {\n      this._report(line, '', message);\n    }\n    /**\n     * Error reporting method for the {@link Parser}.\n     *\n     * @static\n     * @param {Token}  token   Token the error occurred on.\n     * @param {string} message Error message.\n     */\n\n  }, {\n    key: \"parseError\",\n    value: function parseError(token, message) {\n      if (token.type == TokenType.EOF) {\n        this._report(token.line, \"at end\", message);\n      } else {\n        this._report(token.line, \"at '\" + token.lexeme + \"'\", message);\n      }\n    }\n    /**\n     * Error reporting method for the {@link Interpreter}.\n     *\n     * @static\n     * @param {RuntimeError} error Error that occurred.\n     */\n\n  }, {\n    key: \"runtimeError\",\n    value: function runtimeError(error) {\n      console.error(\"\".concat(error.message, \"\\n[line \").concat(error.token.line, \"]\"));\n      _hadRuntimeError = true;\n    }\n  }, {\n    key: \"hadError\",\n    // turn all current highlighted chars a shade of red\n\n    /**\n     * Whether or not an error occurred during scanning or parsing.\n     *\n     * @static\n     * @return {boolean}  True if an error occurred; otherwise false.\n     */\n    get: function get() {\n      return _hadError;\n    }\n    /**\n     * Whether or not an error occurred during runtime.\n     *\n     * @static\n     * @return {boolean} True if an error occurred; otherwise false.\n     */\n\n  }, {\n    key: \"hadRuntimeError\",\n    get: function get() {\n      return _hadRuntimeError;\n    }\n  }]);\n\n  return LoxError;\n}();\n\nmodule.exports = LoxError;\n\n//# sourceURL=webpack:///./src/LoxError.js?");

/***/ }),

/***/ "./src/Scanner.js":
/*!************************!*\
  !*** ./src/Scanner.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LoxError = __webpack_require__(/*! ./LoxError */ \"./src/LoxError.js\");\n\nvar Token = __webpack_require__(/*! ./Token */ \"./src/Token.js\");\n\nvar TokenType = __webpack_require__(/*! ./TokenType */ \"./src/TokenType.js\");\n\nvar KEYWORDS = {\n  'and': TokenType.AND,\n  'class': TokenType.CLASS,\n  'else': TokenType.ELSE,\n  'false': TokenType.FALSE,\n  'for': TokenType.FOR,\n  'fun': TokenType.FUN,\n  'if': TokenType.IF,\n  'nil': TokenType.NIL,\n  'or': TokenType.OR,\n  'print': TokenType.PRINT,\n  'return': TokenType.RETURN,\n  'super': TokenType.SUPER,\n  'this': TokenType.THIS,\n  'true': TokenType.TRUE,\n  'var': TokenType.VAR,\n  'while': TokenType.WHILE\n};\n/**\n * Converts Lox source code into a series of {@link Token}s.\n */\n// Look at comments in a few of the methods for notes on what to do in the corresponding visualization\n\nvar Scanner =\n/*#__PURE__*/\nfunction () {\n  function Scanner() {\n    _classCallCheck(this, Scanner);\n  }\n\n  _createClass(Scanner, [{\n    key: \"_isAtEnd\",\n    value: function _isAtEnd() {\n      return this._current >= this._source.length; // for now, just stop and show all tokens but soon start the parsing process\n    }\n  }, {\n    key: \"_advance\",\n    value: function _advance() {\n      this._current++;\n      return this._source[this._current - 1]; // make the next character highlighted\n    }\n  }, {\n    key: \"_addToken\",\n    value: function _addToken(type, literal) {\n      var text = this._source.slice(this._start, this._current);\n\n      this._tokens.push(new Token(type, text, literal, this._line)); // create a small box containing the token keyword with a background color for the box corresponding to the keyword used\n\n    }\n  }, {\n    key: \"_match\",\n    value: function _match(expected) {\n      if (this._isAtEnd()) {\n        return false;\n      }\n\n      if (this._source[this._current] != expected) {\n        return false;\n      }\n\n      this._current++;\n      return true;\n    }\n  }, {\n    key: \"_peek\",\n    value: function _peek(ahead) {\n      if (ahead === undefined) {\n        ahead = 0;\n      }\n\n      if (this._current + ahead >= this._source.length) {\n        return '\\0';\n      } else {\n        return this._source[this._current + ahead];\n      } // show a faded highlight on the character following the current one\n\n    }\n  }, {\n    key: \"_slash\",\n    value: function _slash() {\n      if (this._match('/')) {\n        while (this._peek() !== '\\n' && !this._isAtEnd()) {\n          this._advance();\n        }\n      } else {\n        this._addToken(TokenType.SLASH);\n      } // do a special highlight?\n\n    }\n  }, {\n    key: \"_string\",\n    value: function _string(closingQuote) {\n      while (this._peek() != closingQuote && !this._isAtEnd()) {\n        if (this._peek() === '\\n') {\n          this._line++;\n        }\n\n        this._advance();\n      }\n\n      if (this._isAtEnd()) {\n        LoxError.scanError(this._line, \"Unterminated string: \".concat(this._source.slice(this._start, this._current)));\n        return;\n      } // capture closing quote\n\n\n      this._advance();\n\n      var stringLiteral = this._source.slice(this._start + 1, this._current - 1);\n\n      this._addToken(TokenType.STRING, stringLiteral); // do a special highlight?\n\n    }\n  }, {\n    key: \"_consumeNumber\",\n    value: function _consumeNumber() {\n      while (Scanner._isDigit(this._peek())) {\n        this._advance();\n      }\n    }\n  }, {\n    key: \"_number\",\n    value: function _number() {\n      this._consumeNumber();\n\n      if (this._peek() === '.' && Scanner._isDigit(this._peek(1))) {\n        this._advance();\n\n        this._consumeNumber();\n      }\n\n      this._addToken(TokenType.NUMBER, parseFloat(this._source.slice(this._start, this._current)));\n    }\n  }, {\n    key: \"_identifier\",\n    value: function _identifier() {\n      while (Scanner.isAlphaNumeric(this._peek())) {\n        this._advance();\n      }\n\n      var text = this._source.slice(this._start, this._current);\n\n      var type = KEYWORDS[text] || TokenType.IDENTIFIER;\n\n      this._addToken(type);\n    }\n  }, {\n    key: \"_scanToken\",\n    value: function _scanToken() {\n      var c = this._advance(); // make each kind of case have its own color?\n\n\n      switch (c) {\n        case '(':\n          this._addToken(TokenType.LEFT_PAREN);\n\n          break;\n\n        case ')':\n          this._addToken(TokenType.RIGHT_PAREN);\n\n          break;\n\n        case '{':\n          this._addToken(TokenType.LEFT_BRACE);\n\n          break;\n\n        case '}':\n          this._addToken(TokenType.RIGHT_BRACE);\n\n          break;\n\n        case ',':\n          this._addToken(TokenType.COMMA);\n\n          break;\n\n        case '.':\n          this._addToken(TokenType.DOT);\n\n          break;\n\n        case '-':\n          this._addToken(TokenType.MINUS);\n\n          break;\n\n        case '+':\n          this._addToken(TokenType.PLUS);\n\n          break;\n\n        case ';':\n          this._addToken(TokenType.SEMICOLON);\n\n          break;\n\n        case '*':\n          this._addToken(TokenType.STAR);\n\n          break;\n\n        case '!':\n          this._addToken(this._match('=') ? TokenType.BANG_EQUAL : TokenType.BANG);\n\n          break;\n\n        case '=':\n          this._addToken(this._match('=') ? TokenType.EQUAL_EQUAL : TokenType.EQUAL);\n\n          break;\n\n        case '<':\n          this._addToken(this._match('=') ? TokenType.LESS_EQUAL : TokenType.LESS);\n\n          break;\n\n        case '>':\n          this._addToken(this._match('=') ? TokenType.GREATER_EQUAL : TokenType.GREATER);\n\n          break;\n\n        case '/':\n          this._slash();\n\n          break;\n\n        case ' ':\n          break;\n\n        case '\\r':\n          break;\n\n        case '\\t':\n          break;\n\n        case '\\n':\n          this._line++;\n          break;\n\n        case '\\'':\n          this._string('\\'');\n\n          break;\n\n        case '\\\"':\n          this._string('\\\"');\n\n          break;\n\n        default:\n          if (Scanner._isDigit(c)) {\n            this._number();\n          } else if (Scanner._isAlpha(c)) {\n            this._identifier();\n          } else {\n            LoxError.scanError(this._line, \"Unexpected character: '\".concat(c, \"'\"));\n          }\n\n          break;\n      }\n    }\n    /**\n     * Scans source and converts it into {@link Token}s.\n     * Will report errors using {@link LoxError}.\n     *\n     * @param  {string} source Lox source code.\n     * @return {Token[]} Tokens representing scanned source code.\n     */\n\n  }, {\n    key: \"scanTokens\",\n    value: function scanTokens(source) {\n      this._source = source;\n      this._tokens = [];\n      this._start = 0;\n      this._current = 0;\n      this._line = 1;\n\n      while (!this._isAtEnd()) {\n        this._start = this._current;\n\n        this._scanToken();\n      }\n\n      this._tokens.push(new Token(TokenType.EOF, '', undefined, this._line));\n\n      return this._tokens;\n    }\n  }], [{\n    key: \"_isDigit\",\n    value: function _isDigit(c) {\n      return c >= '0' && c <= '9';\n    }\n  }, {\n    key: \"_isAlpha\",\n    value: function _isAlpha(c) {\n      return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c === '_';\n    }\n  }, {\n    key: \"isAlphaNumeric\",\n    value: function isAlphaNumeric(c) {\n      return Scanner._isDigit(c) || Scanner._isAlpha(c);\n    }\n  }]);\n\n  return Scanner;\n}();\n\nmodule.exports = Scanner;\n\n//# sourceURL=webpack:///./src/Scanner.js?");

/***/ }),

/***/ "./src/Token.js":
/*!**********************!*\
  !*** ./src/Token.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Represents a scanned lexeme of Lox source code.\n */\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Token =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Creates a new token.\n   *\n   * @param  {TokenType} type This tokens type. Used by the {@link Parser}.\n   * @param  {string} lexeme Section of source code this token was parsed from.\n   * @param  {string|number|undefined} literal If a token represents a literal, this will be the extracted value; otherwise undefined.\n   * @param  {number} line Identifies which line of the source code this token was parsed from.\n   * @return {Token}\n   */\n  function Token(type, lexeme, literal, line) {\n    _classCallCheck(this, Token);\n\n    this._type = type;\n    this._lexeme = lexeme;\n    this._literal = literal;\n    this._line = line;\n  }\n  /**\n   * @type {TokenType}\n   */\n\n\n  _createClass(Token, [{\n    key: \"toString\",\n\n    /**\n     * Returns a string representing the token.\n     *\n     * @return {string}  A string representing the object.\n     */\n    value: function toString() {\n      return \"\".concat(this.type, \" \").concat(this.lexeme, \" \").concat(this.literal);\n    }\n  }, {\n    key: \"type\",\n    get: function get() {\n      return this._type;\n    }\n    /**\n     * @type {string}\n     */\n\n  }, {\n    key: \"lexeme\",\n    get: function get() {\n      return this._lexeme;\n    }\n    /**\n     * @type {string|number|undefined}\n     */\n\n  }, {\n    key: \"literal\",\n    get: function get() {\n      return this._literal;\n    }\n    /**\n     * @type {number}\n     */\n\n  }, {\n    key: \"line\",\n    get: function get() {\n      return this._line;\n    }\n  }]);\n\n  return Token;\n}();\n\nmodule.exports = Token;\n\n//# sourceURL=webpack:///./src/Token.js?");

/***/ }),

/***/ "./src/TokenType.js":
/*!**************************!*\
  !*** ./src/TokenType.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Enum = __webpack_require__(/*! enum */ \"./node_modules/enum/index.js\");\n/**\n * {@link Token} type enumerations.\n * @enum\n */\n\n\nvar TokenType = new Enum([// Single-character tokens.\n'LEFT_PAREN', 'RIGHT_PAREN', 'LEFT_BRACE', 'RIGHT_BRACE', 'COMMA', 'DOT', 'MINUS', 'PLUS', 'SEMICOLON', 'SLASH', 'STAR', // One or two character tokens.\n'BANG', 'BANG_EQUAL', 'EQUAL', 'EQUAL_EQUAL', 'GREATER', 'GREATER_EQUAL', 'LESS', 'LESS_EQUAL', // Literals.\n'IDENTIFIER', 'STRING', 'NUMBER', // Keywords.\n'AND', 'CLASS', 'ELSE', 'FALSE', 'FUN', 'FOR', 'IF', 'NIL', 'OR', 'PRINT', 'RETURN', 'SUPER', 'THIS', 'TRUE', 'VAR', 'WHILE', // End Of File (or input)\n'EOF'], 'TokenType');\nmodule.exports = TokenType;\n\n//# sourceURL=webpack:///./src/TokenType.js?");

/***/ }),

/***/ "./visuals/index.js":
/*!**************************!*\
  !*** ./visuals/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Scanner = __webpack_require__(/*! ../src/Scanner */ \"./src/Scanner.js\");\n\nvar sourceString = \"var hi = 'hello there';\";\nvar scanning = false;\n\nfunction generateInterface(pos) {\n  var sourceDiv = document.getElementById(\"source\");\n\n  function HighlightedChar(props) {\n    if (props.children === undefined || props.children.length === 0) {\n      return React.createElement(\"b\", null, \"There needs to be at last one string passed in as a child to HighlightedChar\");\n    }\n\n    return React.createElement(\"span\", {\n      className: props.className\n    }, props.children);\n  }\n\n  function ScanSourceButton(props) {\n    return React.createElement(\"button\", {\n      onClick: scanChars\n    }, props.children);\n  }\n\n  HighlightedChar.propTypes = {\n    className: PropTypes.string.isRequired\n  };\n  var beginningOfSource = sourceString.substring(0, pos - 1);\n  var charToBeHighlighted = sourceString.substring(pos - 1, pos);\n  var restOfSource = sourceString.substring(pos);\n  var sourceCodeProps = {\n    className: \"sourceCode\",\n    children: [beginningOfSource, React.createElement(HighlightedChar, {\n      className: \"highlight\",\n      children: charToBeHighlighted\n    }), restOfSource]\n  };\n  var sourceCodeDiv = React.createElement(\"div\", sourceCodeProps);\n  var buttonDiv = React.createElement(\"div\", {\n    children: [React.createElement(ScanSourceButton, {\n      children: \"Scan Source\"\n    })]\n  });\n  ReactDOM.render([sourceCodeDiv, buttonDiv], sourceDiv); //ReactDOM.render (buttonDiv, sourceDiv);\n}\n\nvar position = 0;\n\nfunction regen() {\n  if (scanning) {\n    if (position < sourceString.length) {\n      position = position + 1;\n      generateInterface(position);\n    }\n  }\n}\n\nfunction scanChars() {\n  // begin scanning of chars\n  if (!scanning) {\n    scanning = true;\n    setInterval(regen, 500);\n  } else {\n    scanning = false;\n  }\n}\n\ngenerateInterface(1);\n/* basically what has to happen is:\n1. Interface tells scanner to begin scanning\n2. Scanner begins scanning and exports its state to some data structure in between the web interface and the scanner\n3. Interface checks to see if there are updates to the shared data structure and updates accordingly\n*/\n\n//# sourceURL=webpack:///./visuals/index.js?");

/***/ })

/******/ });