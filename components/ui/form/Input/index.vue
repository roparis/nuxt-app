<script setup lang="ts">
const { label, name, type } = defineProps({
  label: String,
  name: String,
  type: {
    type: String,
    default: "text",
  },
});
const id = useId();
</script>

<template>
  <div class="flex flex-col gap-2 mb-4">
    <label :for="id">{{ label }}</label>
    <VeeField
      :type="type"
      :name="name"
      :id="id"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <VeeErrorMessage :name="name" class="text-sm text-red-500" />
  </div>
</template>
