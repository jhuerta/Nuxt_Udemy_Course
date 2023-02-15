<template>
  <div class="mt-32 flex">
    <WatchSideBar />
    <NuxtPage />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "custom",
  });
  const route = useRoute();
  const { toUpperCase } = useUtilities();
  const currentMake = !route.params.make
    ? "Watches"
    : route.params.make.toUpperCase();
  const city = route.params.city;
  useHead({
    title: `${currentMake} in ${toUpperCase(city)}`,
  });
</script>
