<template>
  <div class="overflow-y-auto h-full">
    <Navbar />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/navigation/default/Navbar.vue";
import Footer from "~/components/navigation/default/Footer.vue";
</script>
