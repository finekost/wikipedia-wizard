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
/* harmony import */ var _wikiwizard_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wikiwizard/filters */ "./src/js/wikiwizard/filters.js");



function wikiFetch(page, language, app) {
  wtf.fetch(page, language, function (err, doc) {
    if (_wikiwizard_filters__WEBPACK_IMPORTED_MODULE_1__["default"][page] === undefined) {
      app.wikidata = doc.tables(0).keyValue();
      return;
    }

    app.wikidata = _wikiwizard_filters__WEBPACK_IMPORTED_MODULE_1__["default"][page](doc);
  });
}

var router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/content/about',
    beforeEnter: function beforeEnter(to, from, next) {
      if (app) {
        app.content(to.path);
        next();
      }
    }
  }, {
    path: '/content/contribute',
    beforeEnter: function beforeEnter(to, from, next) {
      if (app) {
        app.content(to.path);
        next();
      }
    }
  }, {
    path: '/content/kudos',
    beforeEnter: function beforeEnter(to, from, next) {
      if (app) {
        app.content(to.path);
        next();
      }
    }
  }, {
    path: '/page/:pageName',
    beforeEnter: function beforeEnter(to, from, next) {
      console.log("to");
      console.log(to);
      /*
      if(app) {
        app.content(to.path);
        next();
      }*/
    }
  }]
});
var app = new Vue({
  el: '#app',
  router: router,
  data: {
    search: '',
    currentActivePage: '/content-about',
    parseable_pages: _wikiwizard_config__WEBPACK_IMPORTED_MODULE_0__["parseable_pages"],
    wikidata: []
  },
  mounted: function mounted() {
    var hash = window.location.hash.substr(1);
    this.content(window.location.pathname);
  },
  methods: {
    content: function content(contentToShow) {
      this.currentActivePage = contentToShow;
      this.wikidata = [];
    },
    onParsePage: function onParsePage(data) {
      this.currentActivePage = data.url_snip;
      wikiFetch(data.url_snip, data.lang, this);
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
        return pageInfo.name.toLowerCase().includes(_this.search.toLowerCase());
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
  name: 'Liste von Sportarten',
  url_snip: 'Liste_von_Sportarten'
}, {
  lang: 'de',
  name: 'Liste der Staaten der Erde',
  url_snip: 'Liste_der_Staaten_der_Erde'
}, {
  lang: 'de',
  name: 'Liste erfolgreicher Filme',
  url_snip: 'Liste_erfolgreicher_Filme'
}, {
  lang: 'en',
  name: 'List of FIFA World Cup winners',
  url_snip: 'List_of_FIFA_World_Cup_winners'
}];

/***/ }),

/***/ "./src/js/wikiwizard/filter/de/Liste_der_Staaten_der_Erde.filter.js":
/*!**************************************************************************!*\
  !*** ./src/js/wikiwizard/filter/de/Liste_der_Staaten_der_Erde.filter.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/js/wikiwizard/filter/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (rawData) {
  var rows = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stripKeys"])(rawData.tables(0), ["2017", "Langform des Staatsnamens", "Fläche", "in km²", "Einw.", "pro km²", "Flag&shy;ge", "TLD", "Englischer Name", "ISO-3-Kürzel", "ISO-2-Kürzel"]);
  var filteredRows = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stripRowsWhereKeyHasValue"])(rows, "Staat", ["Erde", "Europäische Union", "Verband Südost&shy;asiatischer Nationen", "Organisation Amerikanischer Staaten", "Afrikanische Union", "Union Südamerikanischer Nationen", "Staat"]);
  return filteredRows;
});

/***/ }),

/***/ "./src/js/wikiwizard/filter/de/Liste_erfolgreicher_Filme.filter.js":
/*!*************************************************************************!*\
  !*** ./src/js/wikiwizard/filter/de/Liste_erfolgreicher_Filme.filter.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/js/wikiwizard/filter/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (rawData) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stripKeys"])(rawData.tables(0), ["Produktionsland", "Einspiel&shy;ergebnis (nom.)", "Einspiel&shy;ergebnis (infl.-ber.)", "Produktions&shy;kosten", "Kapital&shy;rendite", "Marketing&shy;kosten"]);
});

/***/ }),

/***/ "./src/js/wikiwizard/filter/de/Liste_von_Sportarten.filter.js":
/*!********************************************************************!*\
  !*** ./src/js/wikiwizard/filter/de/Liste_von_Sportarten.filter.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/js/wikiwizard/filter/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (rawData) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stripKeys"])(rawData.tables(0), ["Herkunft/Verbreitung", "Bild", "olympisch", "Typ", "Teamgröße", "Ort der Ausübung"]);
});

/***/ }),

/***/ "./src/js/wikiwizard/filter/en/List_of_FIFA_World_Cup_winners.filter.js":
/*!******************************************************************************!*\
  !*** ./src/js/wikiwizard/filter/en/List_of_FIFA_World_Cup_winners.filter.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/js/wikiwizard/filter/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (rawData) {
  return rawData.tables(0).keyValue();
});

/***/ }),

/***/ "./src/js/wikiwizard/filter/utils.js":
/*!*******************************************!*\
  !*** ./src/js/wikiwizard/filter/utils.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.stripKeys = function (table, remove) {
  var rows = table.keyValue();
  var keys = Object.keys(rows[0]);
  var res = [];

  for (var r = 0; r < rows.length; r++) {
    var obj = {};

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (!remove.includes(key) && table.data[r][key] !== undefined) {
        obj[key] = table.data[r][key].data.text;
      }
    }

    res.push(obj);
  }

  return res;
};

exports.stripRowsWhereKeyHasValue = function (rows, key, remove) {
  var rowsFiltered = rows.filter(function (value, index, arr) {
    return !remove.includes(value[key]);
  });
  return rowsFiltered;
};

/***/ }),

/***/ "./src/js/wikiwizard/filters.js":
/*!**************************************!*\
  !*** ./src/js/wikiwizard/filters.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_de_Liste_von_Sportarten_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter/de/Liste_von_Sportarten.filter */ "./src/js/wikiwizard/filter/de/Liste_von_Sportarten.filter.js");
/* harmony import */ var _filter_de_Liste_der_Staaten_der_Erde_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/de/Liste_der_Staaten_der_Erde.filter */ "./src/js/wikiwizard/filter/de/Liste_der_Staaten_der_Erde.filter.js");
/* harmony import */ var _filter_de_Liste_erfolgreicher_Filme_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/de/Liste_erfolgreicher_Filme.filter */ "./src/js/wikiwizard/filter/de/Liste_erfolgreicher_Filme.filter.js");
/* harmony import */ var _filter_en_List_of_FIFA_World_Cup_winners_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/en/List_of_FIFA_World_Cup_winners.filter */ "./src/js/wikiwizard/filter/en/List_of_FIFA_World_Cup_winners.filter.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  'Liste_von_Sportarten': _filter_de_Liste_von_Sportarten_filter__WEBPACK_IMPORTED_MODULE_0__["default"],
  'Liste_der_Staaten_der_Erde': _filter_de_Liste_der_Staaten_der_Erde_filter__WEBPACK_IMPORTED_MODULE_1__["default"],
  'Liste_erfolgreicher_Filme': _filter_de_Liste_erfolgreicher_Filme_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
  'List_of_FIFA_World_Cup_winners': _filter_en_List_of_FIFA_World_Cup_winners_filter__WEBPACK_IMPORTED_MODULE_3__["default"]
});

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