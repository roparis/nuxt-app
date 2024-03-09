<script setup lang="ts">
const route = useRoute();
// When accessing /license/1, route.params.id will be 1
console.log(route.params.id);
</script>

<template>
  <div>
    <!--    for some reason nuxt page needs to have a single root element in template -->
    <!--    https://nuxt.com/docs/guide/directory-structure/pages -->
    <NuxtPage />
    <HeroTitle
      :title="`License ${route?.params?.id}`"
      definition="This is the licenses page."
    />

    <section>
      <p>This page will be displayed at the /license route.</p>
    </section>
  </div>
</template>
