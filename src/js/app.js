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


var app = new Vue({
  el: '#app',
  data: {
    search: '',
    currentActivePage: 'content-about',
    parseable_pages: parseable_pages,
    wikidata: []
  },
  mounted: function()
  {
    var hash = window.location.hash.substr(1);
    this.$refs['#'+hash][0].click();
  },
  methods: {
    content: function(contentToShow) {
      this.currentActivePage = 'content-'+contentToShow;
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
