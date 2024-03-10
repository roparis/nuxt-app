<template>
  <div>
    <HeroTitle title="Licenses" definition="This is the licenses page." />
    <section>
      <NuxtLink to="/licenses/1" class="text-blue-500 hover:text-blue-700">
        <PrimeButton class="p-button">License 1</PrimeButton>
      </NuxtLink>
      <TableSample />
    </section>
  </div>
</template>
<script setup lang="ts"></script>
