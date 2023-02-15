<template>
  <div>
    <WatchHero />
    <WatchAttribute />
    <WatchDescription />
    <WatchContact />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "custom",
  });
  const route = useRoute();
  const { toUpperCase } = useUtilities();

  const name = route.params.name;
  useHead({
    title: `${toUpperCase(name)}`,
  });
</script>
