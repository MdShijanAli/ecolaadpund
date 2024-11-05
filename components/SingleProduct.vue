<template>
  <div class="bg-productBg p-8 rounded-2xl">
          <div class="flex justify-center items-center">
            <div class="w-[150px] h-[150px]">
              <img class="h-full w-full" :src="item?.image" alt="" />
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-center mb-3 text-base font-semibold">
             {{ item.title }}
            </h3>
            <div>
              <p v-for="(list, ind) in item.features" :key="ind" class="flex items-start my-1 gap-3 text-extraSmall">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                {{ list }}
              </p>
            </div>

            <div class="mt-3 flex justify-between items-center">
              <p class="text-sm text-primary">
                From <span class="text-xl font-semibold">€{{ item?.price }}</span>
              </p>
              <NuxtLink class="bg-primary group hover:bg-black transition duration-300 ease-in-out p-2 rounded-full cursor-pointer">
                <IconsArrowRight class="text-xl group-hover:text-white transition duration-300 ease-in-out" />
              </NuxtLink>
            </div>
          </div>
        </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>