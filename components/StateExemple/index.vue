<script setup lang="ts">
// State
const isOpenMessage = ref(false);
</script>

<template>
  <div>
    <button
      @click="isOpenMessage = !isOpenMessage"
      class="border rounded py-2 px-8 bg-teal-300 hover:bg-teal-400 transition-all ease-in-out"
    >
      {{ isOpenMessage ? "Close" : "Open" }}
    </button>
    <section
      v-if="isOpenMessage"
      class="fixed top-0 right-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80"
    >
      <div class="bg-white p-8">
        <p>
          This is a message that can be toggled on and off by clicking the
          button.
        </p>
        <button
          @click="isOpenMessage = !isOpenMessage"
          class="border rounded py-2 px-8 mx-auto mt-4 bg-gray-300 hover:bg-gray-300 transition-all ease-in-out"
        >
          Close
        </button>
      </div>
    </section>
  </div>
</template>
