<template>
  <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-center gap-20 mt-10">
        <div
          class="flex w-full h-0.5 bg-gray-200 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="flex flex-col justify-center rounded-full overflow-hidden bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500"
            style="width: 25%"
          ></div>
        </div>
        <div class="flex justify-end gap-2">
          <button
            type="button"
            class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none inline-flex justify-center items-center text-gray-800 cursor-pointer focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
          >
            <span class="text-2xl" aria-hidden="true">
              <IconsArrowLeftIcon />
            </span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            type="button"
            class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none inline-flex justify-center items-center text-gray-800 cursor-pointer focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
          >
            <span class="sr-only">Next</span>
            <span class="text-2xl" aria-hidden="true">
              <IconsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
</template>