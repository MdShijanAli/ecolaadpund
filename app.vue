<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>

useHead({
   titleTemplate: (titleChunk) => {

    // suffix from .env file
    const suffix = import.meta.env.VITE_TITLE_SUFFIX || '';

    // combine
    const pageTitle = `${titleChunk ? titleChunk : ''} ${suffix}`;

    return pageTitle;
  },
});

</script>