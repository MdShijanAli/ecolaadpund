<template>
  <div>
    <Home />
  </div>
</template>

<script setup>

import Home from '~/views/home/index.vue';

const title = ref('Home');

// metadata for head
useHead({
  title: title.value,
});

// metadata for seo
useSeoMeta({
  ogTitle: () => title.value,
  description: 'Home',
  ogDescription: 'This is Home Page',
});
</script>