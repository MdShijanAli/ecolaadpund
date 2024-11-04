<template>
  <!-- Slider -->
  <div
    data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "slidesQty": {
    "xs": 1,
    "lg": 5
  },
  "isDraggable": true
}'
    class="relative"
  >
    <div class="hs-carousel w-full overflow-hidden rounded-lg">
      <div class="relative min-h-72 -mx-1">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing"
        >
          <div
            v-for="(item, ind) in lists"
            :key="ind"
            class="hs-carousel-slide px-1 rounded-2xl mx-2"
          >
            <div
              class="flex justify-center h-full bg-[#D9D9D9] p-6 dark:bg-neutral-900 rounded-3xl"
            >
              <span
                class="self-center text-sm text-gray-800 transition duration-700 dark:text-white"
                >{{ item.title }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <CarouselPagination />
  </div>
  <!-- End Slider -->
</template>

<script setup>
const props = defineProps({
  lists: {
    type: Array,
    default: [],
  },
});
</script>