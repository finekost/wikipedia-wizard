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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wikiwizard_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wikiwizard/config */ "./src/js/wikiwizard/config.js");


function wikiFetch(page, language, app) {
  wtf.fetch(page, language, function (err, doc) {
    var rows = doc.tables(0).keyValue();
    var keys = Object.keys(rows[0]);
    /*
    // remove data - in this case for Liste_von_Sportarten
    var res = [];
    var removed = ["Bild"];
     for (var r = 0; r < rows.length; r++) {
      var obj = {};
      for (var i = 0; i < keys.length; i++) {
        let key = keys[i];
        if(!removed.includes(key)) {
          obj[key] = doc.tables(0).data[r][key].data.text
        }
      }
       res.push(obj);
    }
    */

    app.wikidata = rows;
  });
}

var app = new Vue({
  el: '#app',
  data: {
    search: '',
    currentActivePage: 'content-about',
    parseable_pages: _wikiwizard_config__WEBPACK_IMPORTED_MODULE_0__["parseable_pages"],
    wikidata: []
  },
  methods: {
    content: function content(contentToShow) {
      this.currentActivePage = 'content-' + contentToShow;
      this.wikidata = [];
    },
    onParsePage: function onParsePage(data) {
      this.currentActivePage = data.page.replace(/ /g, "_");
      wikiFetch(data.page.replace(/ /g, "_"), data.lang, this);
    },
    downloadJSON: function downloadJSON(event) {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.wikidata, null, 2));
      var downloadButton = event.target;
      downloadButton.setAttribute('href', dataStr);
      downloadButton.setAttribute('download', this.currentActivePage + '.json');
    }
  },
  computed: {
    parseablePagesFiltered: function parseablePagesFiltered() {
      var _this = this;

      return this.parseable_pages.filter(function (pageInfo) {
        return pageInfo.page.toLowerCase().includes(_this.search.toLowerCase());
      });
    }
  }
});

/***/ }),

/***/ "./src/js/wikiwizard/config.js":
/*!*************************************!*\
  !*** ./src/js/wikiwizard/config.js ***!
  \*************************************/
/*! exports provided: parseable_pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseable_pages", function() { return parseable_pages; });
var parseable_pages = [{
  lang: 'de',
  page: 'Liste von Sportarten'
}, {
  lang: 'de',
  page: 'Liste der Staaten der Erde'
}, {
  lang: 'de',
  page: 'Liste_erfolgreicher_Filme'
}, {
  lang: 'de',
  page: 'Hamburger_SV'
}, {
  lang: 'en',
  page: 'List of FIFA World Cup winners'
}, {
  lang: 'en',
  page: 'List of Presidents of the United States'
}];

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/js/app.js ./src/app.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/wikipedia-wizzard/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/wikipedia-wizzard/src/app.scss */"./src/app.scss");


/***/ })

/******/ });