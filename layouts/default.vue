<template>
    <div class="container mx-auto text-sm font-medium">
      <div class="md:flex">
        <div class="w-full md:w-3/12">
          <div class="sticky top-0">
            <div class="pl-2 pt-4 m-t-1 mb-4 md:mb-16">
              WIKI <span class="font-light">WIZARD.</span>
            </div>
            <ul class="flex md:block">
              <li>
              <nuxt-link
                to="/content/about"
                class="py-1 my-1 px-2 flex-initial md:block hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
              >About</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/sandbox"
                class="py-1 my-1 px-2 flex-initial md:block hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
              >Sandbox</nuxt-link>
            </li>
              <nuxt-link
                to="/content/contribute"
                class="py-1 my-1 px-2 flex-initial md:block hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
              >Contribute</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/content/kudos"
                class="py-1 my-1 px-2 flex-initial md:block hover:bg-gray-200 hover:text-blue-wiki-hover transition-03"
              >Kudos</nuxt-link>
            </li>

            <li class="md:flex">
              <a
                class="ml-4 md:ml-2 md:mt-3 flex-initial w-5 h-5 md:w-6 md-h-6 hover:text-blue-wiki-hover transition-03 inline-block md:block"
                href="https://github.com/finekost/wikipedia-wizard"
              >
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <title>GitHub</title>
                  <path
                    d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
                  />
                </svg>
              </a>
              <a
                class="ml-2 md:ml-4 md:mt-3 flex-initial w-5 h-5 md:w-6 md-h-6 hover:text-blue-wiki-hover transition-03 inline-block md:block"
                href="https://twitter.com/alexmilde"
              >
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <title>Twitter</title>
                  <path
                    d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div class="mt-4 md:mt-10 mb-4 px-2">
            <input
              v-model="search"
              class="py-2 border-b focus:border-gray-800 focus:outline-none w-full appearance-none transition-03"
              placeholder="Filter"
              type="search"
            />
          </div>

          <ul class="text-gray-800 text-sm font-light">
            <li v-for="parseablePage in parseablePagesFiltered" v-bind:key="parseablePage.url_snip">
              <nuxt-link
                class="pl-2 block my-1 whitespace-no-wrap truncate transition-03 hover:text-blue-wiki-hover"
                v-bind:to="'/parse/' + parseablePage.lang + '/' + parseablePage.url_snip"
              >{{ parseablePage.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full md:w-9/12 overflow-scroll">
          <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { parseable_pages } from "~/assets/js/config.js";

export default {
  data() {
    return {
      search: "",
      parseable_pages: parseable_pages
    };
  },
  computed: {
    parseablePagesFiltered() {
      return this.parseable_pages.filter(pageInfo => {
        return pageInfo.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>