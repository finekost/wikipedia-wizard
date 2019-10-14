<template>
  <div class="w-full md:w-6/12 mx-2 md:mx-8">
    <div class="mt-20 pt-1 content font-light text-sm leading-relaxed">
      <h1 class="text-2xl font-medium leading-tight">A Wikipedia list to JSON converter</h1>
      <h2 class="text-2xl mb-8 leading-tight">For anyone in need of some structured data</h2>
      <p>Wiki wizzard can parse several wikipedia pages and transform the data into json.</p>
      <p>You need a list of all the US Presidents or all countries with capitals? Wiki wizzard parses the wikipedia page and generates a JSON file for you.</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  head () {
    return {
      title: "about"
    }
  }
};
</script>