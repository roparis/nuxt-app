<script setup lang="ts">
useHead({
  title: "Nuxt Boilerplate - Login",
  meta: [{ name: "description", content: "Login page" }],
  bodyAttrs: {
    // Add a class to the body tag
    class: "login",
  },
});
</script>

<template>
  <HeroTitle title="Login" definition="This is the login page." />
  <section class="flex flex-col max-w-[350px]"></section>
</template>

<NuxtPage />
