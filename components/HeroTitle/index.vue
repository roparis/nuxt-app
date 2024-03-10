<script setup lang="ts">
const { title, definition } = defineProps({
  title: String,
  definition: String,
});
</script>

<template>
  <div>
    <h1 class="text-5xl">{{ title }}</h1>
    <section class="py-4">
      <p class="text-balance">
        {{ definition }}
      </p>
    </section>
  </div>
</template>
