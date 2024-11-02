<template>
  <div class="navbar">
    <div class="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">
      <div class="w-[200px]">
        <NuxtLink to="/">
          <img :src="logo" alt="logo" />
        </NuxtLink>
      </div>
      <div>
        <ul class="flex gap-5 items-center text-white text-md">
          <li>
            <NuxtLink to="/onze-laadpalen">Onze laadpalen</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/laadpaal-thuis">Laadpaal thuis</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/installatie">Installatie</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop">Shop</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/over-ons">Over ons</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-3">
        <div>
          <ButtonBaseButton caption="Zakelijk" color="btn-white" />
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
import logo from "~/assets/images/logo-white.png";
import AccountIcon from "~/components/icons/AccountIcon.vue";
import ShoppingCartIcon from "~/components/icons/ShoppingCartIcon.vue";
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
