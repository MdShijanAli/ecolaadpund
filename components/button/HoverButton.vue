<template>
  <button
    class="transition duration-300 ease-in-out py-2 ps-5 pr-3 rounded-full flex items-center gap-20 text-base"
    :class="colorStyle"
  >
    {{ caption }}
    <span class="bg-primary p-2 rounded-full">
      <IconsArrowRight class="text-xl text-black" />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  caption: {
    type: String,
    default: "Click",
  },
  color: {
    type: String,
    default: "white",
  },
});

const colorStyle = computed(() => {
  return props.color === "white"
    ? "bg-white text-black hover:bg-black border hover:text-white border-[#737373] hover:border-black"
    : props.color === "black"
    ? "bg-black hover:bg-white hover:text-black text-white border-black hover:border-white"
    : "bg-white text-black";
});
</script>