<template>
  <div class="flex gap-5">
          <div>
            <img :src="item?.image" alt="" />
          </div>
          <div class="text-base" v-html="item?.title"></div>
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