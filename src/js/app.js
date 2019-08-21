import { parseable_pages } from './wikiwizard/config';
import filters from './wikiwizard/filters';

import SandboxView from './views/Sandbox';

function wikiFetch(page, language, app) {

  wtf.fetch(page, language, function(err, doc) {

    if(filters[page] === undefined) {
      app.wikidata = doc.tables(0).keyValue();
      return;
    }

    app.wikidata = filters[page](doc);
    app.wikipedia_loading = false;
  });
}

const WikiParseResult = {
  template: '<div></div>',
  beforeRouteEnter (to, from, next) {

    if(app) {
      app.content();
      app.onParsePage(to.params['language'], to.params['wikiPageUrl']);
      next();
    }
  },
  beforeRouteUpdate (to, from, next) {
    if(app) {
      app.content();
      app.onParsePage(to.params['language'], to.params['wikiPageUrl']);
      next();
    }
  }
}

const ContentPage = {
  template: '<div></div>',
  beforeRouteEnter (to, from, next) {
    if(app) {
      app.content(to.path);
      next();
    }
  },
  beforeRouteUpdate (to, from, next) {
    if(app) {
      app.content(to.path);
      next();
    }
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/sandbox', component: SandboxView },
    { path: '/content/:page', component: ContentPage },
    { path: '/parse/:language/:wikiPageUrl', component: WikiParseResult }]
})

var app = new Vue({
  el: '#app',
  router: router,
  data: {
    search: '',
    currentActivePage: '',
    parseable_pages: parseable_pages,
    wikipedia_loading: false,
    wikidata: [],
    wikidata_sandbox: [],
    current_page_lang: '',
    current_page_url_snip: ''
  },
  mounted: function() {
    if(window.location.pathname.length === 1) {
      this.content('/content/about');
      return;
    }

    if(window.location.pathname.startsWith('/content/')) {
      this.content(window.location.pathname);
      return;
    }

    if(window.location.pathname.startsWith('/parse/')) {
      var data = window.location.pathname.split('/');
      this.onParsePage(data[2], data[3]);
      return;
    }
  },
  methods: {
      content: function(contentToShow) {
      this.currentActivePage = contentToShow;
      this.wikidata = [];
    },
    onParsePage: function(lang, url_snip) {
      this.current_page_lang = lang;
      this.current_page_url_snip = url_snip;
      this.wikipedia_loading = true;
      wikiFetch(url_snip, lang, this);
    },
    downloadJSON: function(event) {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.wikidata, null, 2));
      var downloadButton = event.target;
      downloadButton.setAttribute('href', dataStr);
      downloadButton.setAttribute('download', this.current_page_url_snip + '_' + this.current_page_lang + '.json');
    }
  },
  computed: {
    parseablePagesFiltered() {
      return this.parseable_pages.filter(pageInfo => {
        return pageInfo.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }

})

window.App = app;
