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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/views/Sandbox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/views/Sandbox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var codeString = "\n  // wiki page: https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_winners\n  wtf.fetch('List_of_FIFA_World_Cup_winners', 'en', function(err, doc) {\n\n    // store result in global variable\n    window.sandboxData = doc.tables(0);\n    console.log(sandboxData);\n\n    // pass data back into app to render table \n    window.App.$data.wikidata_sandbox = doc.tables(0).keyValue();\n  });\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Sandbox',
  data: function data() {
    return {
      code: codeString,
      wikidata: []
    };
  },
  created: function created() {
    this.$parent.wikidata = [];
    this.$parent.currentActivePage = '';
  },
  methods: {
    evaluate: function evaluate() {
      this.wikidata = eval(this.code);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/views/Sandbox.vue?vue&type=template&id=8eb9f4ce&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/views/Sandbox.vue?vue&type=template&id=8eb9f4ce& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mx-2 md:mx-8 mt-20 pt-1 pb-4 font-light" }, [
    _c("h1", { staticClass: "text-2xl font-medium leading-tight" }, [
      _vm._v("Parse what you need.")
    ]),
    _vm._v(" "),
    _c("h2", { staticClass: "text-2xl mb-8 leading-tight" }, [
      _vm._v("Fetch and filter your own list.")
    ]),
    _vm._v(" "),
    _c("textarea", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.code,
          expression: "code"
        }
      ],
      staticClass: "w-full border",
      staticStyle: { height: "250px" },
      domProps: { value: _vm.code },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.code = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass:
          "inline-flex items-center uppercase mt-2 py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-blue-wiki-hover transition-03",
        attrs: { href: "#" },
        on: {
          click: function($event) {
            return _vm.evaluate()
          }
        }
      },
      [
        _c("i", { staticClass: "fill-current flex-initial mr-3 w-6 h-6 " }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24"
              }
            },
            [
              _c("path", {
                staticClass: "heroicon-ui",
                attrs: {
                  d:
                    "M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z"
                }
              })
            ]
          )
        ]),
        _vm._v("\n    Run\n  ")
      ]
    ),
    _vm._v(" "),
    this.$parent.wikidata_sandbox != 0
      ? _c(
          "table",
          { staticClass: "mt-6 w-full text-xs border-b border-gray-800" },
          [
            _vm._l(this.$parent.wikidata_sandbox, function(input, index) {
              return _c(
                "tr",
                _vm._l(input, function(data, key) {
                  return index == 0
                    ? _c(
                        "th",
                        {
                          staticClass:
                            "text-left mb-2 mt-2 pb-2 border-b border-gray-800 top-0"
                        },
                        [_vm._v(_vm._s(key))]
                      )
                    : _vm._e()
                }),
                0
              )
            }),
            _vm._v(" "),
            _vm._l(this.$parent.wikidata_sandbox, function(input) {
              return _c(
                "tr",
                _vm._l(input, function(data) {
                  return _c("td", { staticClass: "py-2" }, [
                    _vm._v(_vm._s(data))
                  ])
                }),
                0
              )
            })
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

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
/* harmony import */ var _views_Sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Sandbox */ "./src/js/views/Sandbox.vue");




function wikiFetch(page, language, app) {
  wtf.fetch(page, language, function (err, doc) {
    if (_wikiwizard_filters__WEBPACK_IMPORTED_MODULE_1__["default"][page] === undefined) {
      app.wikidata = doc.tables(0).keyValue();
      return;
    }

    app.wikidata = _wikiwizard_filters__WEBPACK_IMPORTED_MODULE_1__["default"][page](doc);
    app.wikipedia_loading = false;
  });
}

var WikiParseResult = {
  template: '<div></div>',
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (app) {
      app.content();
      app.onParsePage(to.params['language'], to.params['wikiPageUrl']);
      next();
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    if (app) {
      app.content();
      app.onParsePage(to.params['language'], to.params['wikiPageUrl']);
      next();
    }
  }
};
var ContentPage = {
  template: '<div></div>',
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (app) {
      app.content(to.path);
      next();
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    if (app) {
      app.content(to.path);
      next();
    }
  }
};
var router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/sandbox',
    component: _views_Sandbox__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '/content/:page',
    component: ContentPage
  }, {
    path: '/parse/:language/:wikiPageUrl',
    component: WikiParseResult
  }]
});
var app = new Vue({
  el: '#app',
  router: router,
  data: {
    search: '',
    currentActivePage: '',
    parseable_pages: _wikiwizard_config__WEBPACK_IMPORTED_MODULE_0__["parseable_pages"],
    wikipedia_loading: false,
    wikidata: [],
    wikidata_sandbox: [],
    current_page_lang: '',
    current_page_url_snip: ''
  },
  mounted: function mounted() {
    if (window.location.pathname.length === 1) {
      this.content('/content/about');
      return;
    }

    if (window.location.pathname.startsWith('/content/')) {
      this.content(window.location.pathname);
      return;
    }

    if (window.location.pathname.startsWith('/parse/')) {
      var data = window.location.pathname.split('/');
      this.onParsePage(data[2], data[3]);
      return;
    }
  },
  methods: {
    content: function content(contentToShow) {
      this.currentActivePage = contentToShow;
      this.wikidata = [];
    },
    onParsePage: function onParsePage(lang, url_snip) {
      this.current_page_lang = lang;
      this.current_page_url_snip = url_snip;
      this.wikipedia_loading = true;
      wikiFetch(url_snip, lang, this);
    },
    downloadJSON: function downloadJSON(event) {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.wikidata, null, 2));
      var downloadButton = event.target;
      downloadButton.setAttribute('href', dataStr);
      downloadButton.setAttribute('download', this.current_page_url_snip + '_' + this.current_page_lang + '.json');
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
window.App = app;

/***/ }),

/***/ "./src/js/views/Sandbox.vue":
/*!**********************************!*\
  !*** ./src/js/views/Sandbox.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sandbox_vue_vue_type_template_id_8eb9f4ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sandbox.vue?vue&type=template&id=8eb9f4ce& */ "./src/js/views/Sandbox.vue?vue&type=template&id=8eb9f4ce&");
/* harmony import */ var _Sandbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sandbox.vue?vue&type=script&lang=js& */ "./src/js/views/Sandbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sandbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sandbox_vue_vue_type_template_id_8eb9f4ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sandbox_vue_vue_type_template_id_8eb9f4ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/views/Sandbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/views/Sandbox.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/js/views/Sandbox.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sandbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/views/Sandbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/views/Sandbox.vue?vue&type=template&id=8eb9f4ce&":
/*!*****************************************************************!*\
  !*** ./src/js/views/Sandbox.vue?vue&type=template&id=8eb9f4ce& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandbox_vue_vue_type_template_id_8eb9f4ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sandbox.vue?vue&type=template&id=8eb9f4ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/views/Sandbox.vue?vue&type=template&id=8eb9f4ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandbox_vue_vue_type_template_id_8eb9f4ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandbox_vue_vue_type_template_id_8eb9f4ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  'lang': 'de',
  'name': 'Liste von Sportarten',
  'url_snip': 'Liste_von_Sportarten'
}, {
  'lang': 'de',
  'name': 'Liste der Staaten der Erde',
  'url_snip': 'Liste_der_Staaten_der_Erde'
}, {
  'lang': 'de',
  'name': 'Liste erfolgreicher Filme',
  'url_snip': 'Liste_erfolgreicher_Filme'
}, {
  'lang': 'en',
  'name': 'List of FIFA World Cup winners',
  'url_snip': 'List_of_FIFA_World_Cup_winners'
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