<template>
  <div class="overflow-y-auto h-full">
    <Navbar />
    <slot></slot>
  </div>
</template>

<script setup>
import Navbar from "@/components/navigation/default/Navbar.vue";
</script>
