<template>
  <div
    class="rounded-full font-serif w-[1000px] text-2xl rounded full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 text-2xl focus:outline-none rounded-full"
      placeholder="Search by city"
      v-model="city"
    />
    <button
      class="bg-sky-500 px-10 text-white rounded-tl"
      @click="handleSearch"
      :class="noCityInput ? 'bg-sky-300' : 'bg-sky-500'"
      :disabled="noCityInput"
    >
      Search
    </button>
  </div>
</template>

<script setup>
  const city = ref("");
  const cityError = ref(false);
  const handleSearch = () => {
    if (!city.value) {
      return;
    }
    navigateTo(`/city/${city.value}/watch`);
    // const router = useRouter();
    // router.push(`/city/${city.value}/car`);
  };

  const noCityInput = computed(() => {
    return !city.value;
  });
</script>
