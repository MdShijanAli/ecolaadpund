<template>
  <ClientOnly>
    <Suspense>
      <template #default>
        <div class="relative" style="min-height: 100svh">
          <NuxtLoadingIndicator :duration="4000" :throttle="1" />
          <Navbar />
          <slot></slot>
        </div>
      </template>

      <!-- loading state via #fallback slot -->
      <template #fallback>
        <LoaderPageLoadingSpinner />
      </template>
    </Suspense>
  </ClientOnly>
</template>

<script setup>
import Navbar from '@/components/navigation/default/Navbar.vue';
</script>
