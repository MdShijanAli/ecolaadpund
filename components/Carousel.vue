<template>
  <!-- Slider -->
  <div
    data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "isCentered": true,
  "isDraggable": true,
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
      <div class="relative min-h-[350px] -mx-1">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
        >
          <div
            v-for="(item, ind) in lists"
            :key="ind"
            class="hs-carousel-slide mx-4 rounded-3xl min-h-[350px] bg-productBg"
          >
            <div class="p-6">
              <div class="flex items-center">
                <template v-if="item?.rating">
                  <IconsStartIcon
                    v-for="(star, starInd) in item?.rating"
                    :key="starInd"
                    class="text-[#FDC426]"
                  />
                </template>
                <template v-if="item?.rating && item?.rating < 5">
                  <IconsBlankStarIcon
                    v-for="(star, starInd) in 5 - item?.rating"
                    :key="starInd"
                    class="text-[#FDC426]"
                  />
                </template>
              </div>
              <p class="mt-3 text-base">{{ item?.title }}</p>
              <p class="text-paragraph my-5">{{ item?.description }}</p>
              <h3 class="text-base text-primary">{{ item?.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-10 flex justify-end mt-5">
      <button
        type="button"
        class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <span class="text-2xl" aria-hidden="true">
          <IconsArrowLeftIcon />
        </span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        type="button"
        class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
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
  lists: {
    type: Array,
    default: [],
  },
});
</script>