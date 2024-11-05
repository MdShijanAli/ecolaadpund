<template>
  <div class="navbar">
    <div class="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">
      <div class="w-[200px]">
        <NuxtLink to="/">
          <img src="/images/logo-white.png" alt="logo" />
        </NuxtLink>
      </div>
      <div>
        <ul class="flex gap-5 items-center text-white text-md">
          <li v-for="(item, ind) in menuLists" :key="ind" class="hover:text-[#37D153] text-paragraph">
            <NuxtLink :to="item?.path">{{ item?.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-3">
        <div>
          <ButtonBaseButton caption="Zakelijk" color="btn-white" class="text-paragraph" />
        </div>
        <div>
          <ButtonBaseButton :icon="AccountIcon" color="btn-white" />
        </div>
        <div>
          <ButtonBaseButton :icon="ShoppingCartIcon" color="btn-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AccountIcon from "~/components/icons/AccountIcon.vue";
import ShoppingCartIcon from "~/components/icons/ShoppingCartIcon.vue";

const menuLists = ref([
  {
    id: 1,
    name: "Onze laadpalen",
    path: 'onze-laadpalen'
  },
  {
    id: 2,
    name: "Laadpaal thuis",
    path: 'laadpaal-thuis'
  },
  {
    id: 3,
    name: "Installatie",
    path: 'installatie'
  },
  {
    id: 4,
    name: "Shop",
    path: 'shop'
  },
  {
    id: 5,
    name: "Over ons",
    path: 'over-ons'
  },
  {
    id: 6,
    name: "Contact",
    path: 'contact'
  },
])

</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  margin: 0 auto;
}
</style>
