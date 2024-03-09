<script setup lang="ts">
const emailId = useId();
const passwordId = useId();
</script>

<template>
  <div class="flex flex-col">
    <NuxtPage />
    <form>
      <label :for="emailId">Email</label>
      <input :id="emailId" name="email" type="email" />
      <label :for="passwordId">Password</label>
      <input :id="passwordId" name="password" type="password" />
    </form>
  </div>
</template>
