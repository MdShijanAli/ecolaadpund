<template>
  <button
    class="hover:bg-primary border hover:border-primary transition duration-300 ease-in-out py-2 ps-5 pr-3 rounded-full flex items-center gap-20"
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
    default: "Click"
  },
  color: {
    type: String,
    default: 'white'
  }
})

const colorStyle = computed(()=> {
    return props.color === 'white' ? 'bg-white text-black' : props.color === 'black' ? 'bg-black text-white' : 'bg-white text-black'
})

</script>