<template>
  <Swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :grabCursor="true"
    :loop="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide v-for="(item, ind) in lists" :key="ind" class="min-h-[350px]">
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
    </SwiperSlide>

    <div>
<!--       <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>


      <div class="swiper-scrollbar"></div> -->
      <CarouselPagination />
    </div>
  </Swiper>
</template>

<script setup>
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css/pagination";

const props = defineProps({
  lists: {
    type: Array,
    default: [],
  },
});

const modules = ref([Pagination, Navigation]);
</script>


<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  background: #f5f5f5;
  width: 300px;
  border-radius: 30px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>