<template>
  <div class="mx-2 md:mx-8 pt-8 pb-4">
    <div class="flex justify-between">
      <a
        class="inline-flex items-center uppercase mt-2 py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
        href="#"
        v-on:click="downloadJSON($event)"
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
      <a
        class="inline-flex items-center uppercase mt-2 py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
        target="_blank"
        v-bind:href="'https://'+ $route.params.language + '.wikipedia.org/wiki/'+ $route.params.wikipage"
      >
        <i class="fill-current flex-initial mr-3 w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              class="heroicon-ui"
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
            />
          </svg>
        </i>
        Wikipedia page
      </a>
    </div>

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
      v-on:click="downloadJSON($event)"
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
</template>   


<script>
import wtf from "wtf_wikipedia";
import filters from "~/assets/js/filters.js";

export default {
  layout: "default",
  head () {
    return {
      title: this.$route.params.wikipage.replace(/_/g,' ')
    }
  },
  asyncData({ params }) {
    return wtf.fetch(params.wikipage, params.language).then(res => {
      if (filters[params.wikipage] === undefined) {
        return { wikidata: res.tables(0).keyValue() };
      }

      return { wikidata: filters[params.wikipage](res) };
    });
  },

  methods: {
    downloadJSON: function(event) {
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(this.wikidata, null, 2));
      var downloadButton = event.currentTarget;
      downloadButton.setAttribute("href", dataStr);
      downloadButton.setAttribute(
        "download",
        this.$route.params.wikipage +
          "_" +
          this.$route.params.language +
          ".json"
      );
    }
  }
};
</script>