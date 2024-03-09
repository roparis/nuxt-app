<script setup lang="ts">
const appConfig = useAppConfig();
</script>
<template>
  <div class="p-4">
    <h1 class="text-4xl font-bold">
      {{ appConfig.title }}
    </h1>
    <NuxtWelcome />
  </div>
</template>
