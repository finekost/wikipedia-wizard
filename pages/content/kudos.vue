<template>
  <div class="md:w-6/12 mx-2 md:mx-8">
    <div class="mt-20 pt-1 content font-light text-sm leading-relaxed">
      <h1 class="text-2xl font-medium leading-tight">Based on the great work of others.</h1>
      <h2 class="text-2xl mb-8 leading-tight">This project relies heavily on other peoples work.</h2>
      <p>
        My parser transforms the results from
        <a
          href="https://github.com/spencermountain/wtf_wikipedia"
          class="border-b border-gray-800 transition-03 hover:text-blue-wiki-hover"
        >wtf_wikipedia</a> an awesome javascript wikipedia markup parser. By
        <a
          href="https://twitter.com/spencermountain"
          class="border-b border-gray-800 transition-03 hover:text-blue-wiki-hover"
        >Spencer Kelly</a>
        <br />
        <br />The frontend was styled entirely with
        <a
          href="https://tailwindcss.com/#what-is-tailwind"
          class="border-b border-gray-800 transition-03 hover:text-blue-wiki-hover"
        >tailwindcss</a> an utility-first CSS framework. By
        <a
          href="https://adamwathan.me/"
          class="border-b border-gray-800 transition-03 hover:text-blue-wiki-hover"
        >Adam Wathan</a>
        <br />
        <br />I used svg icons from
        <a
          href="https://github.com/sschoger/heroicons-ui"
          class="border-b border-gray-800 transition-03 hover:text-blue-wiki-hover"
        >heroicons-ui</a>. A very useful iconset by
        <a
          href="https://www.steveschoger.com/"
          class="border-b border-gray-800 transition-03 hover:text-blue-wiki-hover"
        >Steve Schoger</a>. He provides some awesome design tips aswell. You should check out his website.
        <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  head () {
    return {
      title: "kudos"
    }
  }
};
</script>