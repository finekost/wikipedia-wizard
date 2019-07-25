import { parseable_pages } from './wikiwizard/config';

function wikiFetch(page, language, app) {

  wtf.fetch(page, language, function(err, doc) {

    let rows = doc.tables(0).keyValue();
    let keys = Object.keys(rows[0]);

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
    parseable_pages: parseable_pages,
    wikidata: []
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
