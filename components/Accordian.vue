<template>
  <div class="hs-accordion-group">

    <div v-for="(item, ind) in lists" :key="ind" class="hs-accordion" :id="ind">
      <button
        class="hs-accordion-toggle hs-accordion-active:text-primary py-3 items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none flex justify-between border-[#737373] border-t-2 text-base"
        aria-expanded="false"
        :aria-controls="ind"
        :class="{'border-b-2': ind === lists.length - 1}"
      >
        {{ item.title }}
        <div>
          <svg
            class="hs-accordion-active:hidden block size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          <svg
            class="hs-accordion-active:block hidden size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
          </svg>
        </div>
      </button>
      <div
        id="hs-basic-collapse-two"
        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        role="region"
        :aria-labelledby="ind"
      >
        <p class="text-gray-800 dark:text-neutral-200 mb-5">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  lists: {
    type: Array,
    default: [],
  },
});
</script>