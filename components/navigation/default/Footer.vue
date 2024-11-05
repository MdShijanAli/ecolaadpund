<template>
  <div class="bg-footerBg py-10">
    <div class="max-w-7xl mx-auto px-10">
      <div class="flex justify-between mt-10 border-b pb-3 border-borderColor">
        <div class="w-[196px]">
          <img class="w-full" src="/images/logo.png" alt="" />
        </div>
        <div>
          <ButtonHoverButton caption="Geef mij advies" />
        </div>
      </div>

      <div class="grid md:grid-cols-4 grid-cols-2 gap-10 pt-5">
        <div>
          <p class="text-footerTitle font-normal">Privé thuis</p>
          <p class="text-footerTitle font-normal">Zakelijke</p>
          <div class="flex items-center gap-2 mt-3">
            <IconsLinkedinIcon
              class="text-xl bg-black text-white p-1 rounded-full"
            />
            <IconsFacebookIcon
              class="text-xl bg-black text-white p-1 rounded-full"
            />
            <IconsInstagramIcon
              class="text-xl bg-black text-white p-1 rounded-full"
            />
          </div>
        </div>
        <div>
          <ul class="">
            <li
              v-for="(item, ind) in footerMenuItems"
              :key="ind"
              class="hover:text-primary text-base"
            >
              <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <ul class="">
            <li
              v-for="(item, ind) in footerMenuItems2"
              :key="ind"
              class="hover:text-primary text-base"
            >
              <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-base">Phone</p>
          <p class="text-footerTitle">020 3345 3310</p>

          <p class="text-base mt-3">Email</p>
          <p class="text-footerTitle">info@ecolaadpunt.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const footerMenuItems = ref([
  {
    id: 1,
    name: "Zakelijk laden",
    path: "zakelijk-laden",
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
    name: "Blogs",
    path: "blogs",
  },
  {
    id: 5,
    name: "Laadpalen",
    path: "laadpalen",
  },
  {
    id: 6,
    name: "Contact",
    path: "contact",
  },
]);

const footerMenuItems2 = ref([
  {
    id: 1,
    name: "Klachten en gebreken",
    path: "/",
  },
  {
    id: 2,
    name: "Betalingsvoorwaarden",
    path: "/",
  },
  {
    id: 3,
    name: "Retourneringsvoorwaarden",
    path: "/",
  },
  {
    id: 4,
    name: "Verzending & Afhalen",
    path: "/",
  },
  {
    id: 5,
    name: "Garantievoorwaarden",
    path: "/",
  },
]);
</script>