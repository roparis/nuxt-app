<script setup lang="ts">
const { title, definition } = defineProps({
  title: String,
  definition: String,
});
</script>

<template>
  <div>
    <h1 class="text-5xl text-balance">{{ title }}</h1>
    <section class="py-4">
      <p class="w-1/2">
        {{ definition }}
      </p>
    </section>
  </div>
</template>
