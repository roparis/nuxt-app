<script setup lang="ts">
const { $client } = useNuxtApp();

const users = await $client.user.findAll.query();
</script>

<template>
  <div>
    <NuxtPage />
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
