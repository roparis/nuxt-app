<template>
  <header
    class="w-full flex justify-between items-center gap-2 py-4 px-8 backdrop-blur-md bg-white/30 sticky top-0 z-50"
  >
    <div class="flex justify-start items-center gap-4">
      <NuxtLink to="/" class="text-xl">
        {{ appConfig.title }}
      </NuxtLink>
      <div>
        <NuxtLink to="/licenses"> Licenses </NuxtLink>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <NuxtLink to="/login"> login </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
