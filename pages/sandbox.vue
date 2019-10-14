<template>
  <div class="mx-2 md:mx-8 mt-20 pt-1 pb-4 font-light">
    <h1 class="text-2xl font-medium leading-tight">Parse what you need.</h1>
    <h2 class="text-2xl mb-8 leading-tight">Fetch and filter your own list.</h2>
    <textarea class="w-full border" v-model="code" style="height:250px"></textarea>

    <div class="flex justify-end">
      <a
        class="inline-flex items-center uppercase mt-2 py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
        href="#"
        v-on:click="evaluate()"
      >
        <i class="fill-current flex-initial mr-3 w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              class="heroicon-ui"
              d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z"
            />
          </svg>
        </i>
        Run
      </a>
    </div>

    <div>
      <a
        class="inline-flex items-center uppercase mt-4 py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
        href="#"
        v-if="this.$parent.wikidata_sandbox != 0"
        v-on:click="download($event)"
      >
        <i class="fill-current flex-initial mr-3 w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              class="heroicon-ui"
              d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"
            />
          </svg>
        </i>
        Json
      </a>

      <table class="mt-6 w-full text-xs border-b border-gray-800">
        <tr v-for="(input, index) in wikidata" v-bind:key="input.id">
          <th
            class="text-left mb-2 mt-2 pb-2 border-b border-gray-800 top-0"
            v-if="index == 0"
            v-for="(data, key) in input"
            v-bind:key="data.id"
          >{{ key }}</th>
        </tr>
        <tr v-for="input in wikidata" v-bind:key="input.id">
          <td class="py-2" v-for="data in input" v-bind:key="data.id">{{ data }}</td>
        </tr>
      </table>
      <a
        class="inline-flex items-center uppercase mt-2 py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
        href="#"
        v-on:click="download($event)"
      >
        <i class="fill-current flex-initial mr-3 w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              class="heroicon-ui"
              d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"
            />
          </svg>
        </i>
        Json
      </a>
    </div>
  </div>
</template>

<script>
import wtf from "wtf_wikipedia";

var codeString = `
    // wiki page: https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_winners
    wtf.fetch('List_of_FIFA_World_Cup_winners', 'en', function(err, doc) {

      // pass data back into app to render table
      window.sandboxData = doc.tables(0).keyValue();
    });
  `;

export default {
  layout: "default",
  name: "Sandbox",
  head() {
    return {
      title: "sandbox"
    };
  },
  mounted() {
    window.wtf = wtf;
  },
  data: function() {
    return {
      code: codeString,
      wikidata: [1, 2, 3, 4, 5]
    };
  },
  created: function() {
    this.$parent.wikidata = [];
    this.$parent.currentActivePage = "";
  },
  methods: {
    evaluate: function() {
      var self = this;

      var sandbox_result = eval(this.code).then(function(data) {
        console.log("prmoise resolved");
        self.wikidata = window.sandboxData;
      });
    },
    download: function(e) {
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(this.wikidata, null, 2));
      var downloadButton = event.currentTarget;
      downloadButton.setAttribute("href", dataStr);
      downloadButton.setAttribute("download", "Sanbodx.json");
    }
  }
};
</script>