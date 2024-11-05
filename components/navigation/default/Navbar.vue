<template>
  <div class="navbar">
    <div
      class="max-w-7xl mx-auto px-10 py-5 hidden lg:flex justify-between items-center"
    >
      <div class="w-[200px]">
        <NuxtLink to="/">
          <img src="/images/logo-white.png" alt="logo" />
        </NuxtLink>
      </div>
      <div>
        <ul class="flex gap-5 items-center text-white text-md">
          <li
            v-for="(item, ind) in menuLists"
            :key="ind"
            class="hover:text-[#37D153] text-paragraph"
          >
            <NuxtLink :to="item?.path">{{ item?.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-3">
        <div>
          <ButtonBaseButton
            caption="Zakelijk"
            color="btn-white"
            class="text-paragraph"
          />
        </div>
        <div>
          <ButtonBaseButton :icon="AccountIcon" color="btn-white" />
        </div>
        <div>
          <ButtonBaseButton :icon="ShoppingCartIcon" color="btn-white" />
        </div>
      </div>
    </div>

    <div class="flex lg:hidden px-10 py-5 justify-between items-center">
      <div class="w-[200px]">
        <NuxtLink to="/">
          <img src="/images/logo-white.png" alt="logo" />
        </NuxtLink>
      </div>

      <div>
        <!-- Navigation Toggle -->
        <div class="text-center">
          <button
            type="button"
            class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-white border border-gray-800 text-black text-sm font-medium rounded-lg shadow-sm align-middle focus:outline-none"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-offcanvas-example"
            aria-label="Toggle navigation"
            data-hs-overlay="#hs-offcanvas-example"
          >
            <LazyIconsBar3Icon />
          </button>
        </div>
        <!-- End Navigation Toggle -->

        <!-- Sidebar -->
        <div
          id="hs-offcanvas-example"
          class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700"
          role="dialog"
          tabindex="-1"
          aria-label="Sidebar"
        >
          <div class="px-6 flex justify-center border-b border-gray-500 pb-5">
            <div class="w-[200px]">
              <NuxtLink to="/">
                <img src="/images/logo.png" alt="logo" />
              </NuxtLink>
            </div>
          </div>
          <nav
            class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul class="space-y-1.5">
              <li v-for="(item, ind) in menuLists" :key="ind">
                <NuxtLink
                  :to="item?.path"
                  class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                >
                  <svg
                    class="size-4"
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  {{ item?.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="px-6 flex justify-between">
            <div class="text-center">
              <ButtonBaseButton
                caption="Zakelijk"
                color="btn-dark"
                class="text-paragraph w-full"
              />
            </div>
            <div>
              <ButtonBaseButton :icon="AccountIcon" color="btn-dark" />
            </div>
            <div>
              <ButtonBaseButton :icon="ShoppingCartIcon" color="btn-dark" />
            </div>
          </div>
        </div>
        <!-- End Sidebar -->
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
    path: "onze-laadpalen",
  },
  {
    id: 2,
    name: "Laadpaal thuis",
    path: "laadpaal-thuis",
  },
  {
    id: 3,
    name: "Installatie",
    path: "installatie",
  },
  {
    id: 4,
    name: "Shop",
    path: "shop",
  },
  {
    id: 5,
    name: "Over ons",
    path: "over-ons",
  },
  {
    id: 6,
    name: "Contact",
    path: "contact",
  },
]);
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
