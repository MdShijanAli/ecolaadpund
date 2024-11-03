<template>
  <button
    class="bg-white hover:bg-primary border hover:border-primary transition duration-300 ease-in-out text-black py-2 ps-5 pr-3 rounded-full mt-10 flex items-center gap-20"
  >
    {{ caption }}
    <span class="bg-primary p-2 rounded-full">
      <IconsArrowRight class="text-xl" />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  caption: {
    type: String,
    default: "Click"
  }
})
</script>