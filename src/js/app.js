import { parseable_pages } from './wikiwizard/config';
import filters from './wikiwizard/filters';

function wikiFetch(page, language, app) {

  wtf.fetch(page, language, function(err, doc) {

    if(filters[page] === undefined) {
      app.wikidata = doc.tables(0).keyValue();
      return;
    }

    app.wikidata = filters[page](doc);
  });
}


const router = new VueRouter({
  mode: 'history',
  routes: [

      {
        path: '/content/about',
        beforeEnter: (to, from, next) => {
          if(app) {
            app.content(to.path);
            next();
          }
        }
      },
      {
        path: '/content/contribute',
        beforeEnter: (to, from, next) => {
          if(app) {
            app.content(to.path);
            next();
          }
        }
      },
      {
        path: '/content/kudos',
        beforeEnter: (to, from, next) => {
          if(app) {
            app.content(to.path);
            next();
          }
        }
      },
      {
        path: '/page/:pageName',
        beforeEnter: (to, from, next) => {
          console.log("to");
          console.log(to);
          /*
          if(app) {
            app.content(to.path);
            next();
          }*/
        }
      }
    ]
})

var app = new Vue({
  el: '#app',
  router: router,
  data: {
    search: '',
    currentActivePage: '/content-about',
    parseable_pages: parseable_pages,
    wikidata: []
  },
  mounted: function() {

    var hash = window.location.hash.substr(1);
    this.content(window.location.pathname);
  },
  methods: {
    content: function(contentToShow) {
      this.currentActivePage = contentToShow;
      this.wikidata = [];
    },
    onParsePage: function(data) {
      this.currentActivePage = data.url_snip;
      wikiFetch(data.url_snip, data.lang, this);
    },
    downloadJSON: function(event) {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.wikidata, null, 2));
      var downloadButton = event.target;
      downloadButton.setAttribute('href', dataStr);
      downloadButton.setAttribute('download', this.currentActivePage + '.json');
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
