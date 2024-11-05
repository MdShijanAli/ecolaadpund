<template>
  <!-- Slider -->
  <div
    data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "isInfiniteLoop": true,
  "slidesQty": {
    "xs": 1,
    "sm": 2,
    "lg": 4
  }
}'
    class="relative"
  >
    <div class="hs-carousel w-full overflow-hidden bg-white rounded-lg">
      <div :class="height" class="relative -mx-1">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
        >
          <slot></slot>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-10 flex justify-end gap-2 mt-5">
      <button
        type="button"
        class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none inline-flex justify-center items-center text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
      >
        <span class="text-2xl" aria-hidden="true">
          <IconsArrowLeftIcon />
        </span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        type="button"
        class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none inline-flex justify-center items-center text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
      >
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
          <IconsArrowRight />
        </span>
      </button>
    </div>
  </div>
  <!-- End Slider -->
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "min-h-[350px]"
  }
})
</script>