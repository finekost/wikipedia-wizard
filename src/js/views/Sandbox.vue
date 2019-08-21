<template>
    <div class="mx-2 md:mx-8 mt-20 pt-1 pb-4 font-light">
      <h1 class="text-2xl font-medium leading-tight">Parse what you need.</h1>
      <h2 class="text-2xl mb-8 leading-tight">Fetch and filter your own list.</h2>
      <textarea class="w-full border" v-model="code" style="height:250px"></textarea>

      <a class="inline-flex items-center uppercase mt-2 py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-blue-wiki-hover transition-03" href="#" v-on:click="evaluate()">
        <i class="fill-current flex-initial mr-3 w-6 h-6 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path class="heroicon-ui" d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z"/>
          </svg>
        </i>
        Run
      </a>

      <table v-if="this.$parent.wikidata_sandbox != 0" class="mt-6 w-full text-xs border-b border-gray-800">
        <tr v-for="(input, index) in this.$parent.wikidata_sandbox">
          <th class="text-left mb-2 mt-2 pb-2 border-b border-gray-800 top-0" v-if="index == 0" v-for="(data, key) in input">{{ key }}</th>
        </tr>
        <tr v-for="input in this.$parent.wikidata_sandbox">
          <td class="py-2" v-for="data in input">{{ data }}</td>
        </tr>
      </table>

    </div>

</template>

<script>

  var codeString = `
    // wiki page: https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_winners
    wtf.fetch('List_of_FIFA_World_Cup_winners', 'en', function(err, doc) {

      // store result in global variable
      window.sandboxData = doc.tables(0);
      console.log(sandboxData);

      // pass data back into app to render table 
      window.App.$data.wikidata_sandbox = doc.tables(0).keyValue();
    });
  `;

  export default {
    name: 'Sandbox',
    data: function() {
      return {
        code: codeString,
        wikidata: []
      }
    },
    created: function () {
      this.$parent.wikidata = [];
      this.$parent.currentActivePage = '';
    },
    methods: {
      evaluate:function() {
        this.wikidata = eval(this.code);
      }
    }
  };
</script>
