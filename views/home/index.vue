<template>
  <div>
    <div class="">
      <div class="">
        <div class="w-full">
          <img
            class="bg-black opacity-100 w-full"
            src="../../assets/images/banner-1.png"
          />
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-10">
        <div class="absolute top-80 w-full grid grid-cols-2 justify-between">
          <div class="col-span-1">
            <h1 class="text-6xl text-white font-semibold">
              De revolutionaire <br />
              oplaadervaring.
            </h1>
            <button
              class="bg-white hover:bg-primary transition duration-300 ease-in-out text-black py-2 ps-5 pr-3 rounded-full mt-10 flex items-center gap-20"
            >
              Onze oplossing
              <span class="bg-primary p-2 rounded-full">
                <IconsArrowRight class="text-xl" />
              </span>
            </button>
          </div>
          <div class="col-span-1">
            <div class="bg-white rounded-2xl p-5 w-[300px]">
              <h3 class="text-primary text-xl">
                Persoonlijk advies nodig? Dat geven we gratis.
              </h3>
              <p class="py-3">
                Zo krijg je de juiste laadpaal voor thuis of op de zaak.
              </p>

              <div class="my-3">
                <select name="" id="" class="w-full border p-3 rounded-xl">
                  <option value="">Wat is je auto merk?</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>

              <div>
                <select name="" id="" class="w-full border p-3 rounded-xl">
                  <option value="">En welk model?</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>

              <button
                class="bg-white hover:bg-primary border w-full transition duration-300 ease-in-out text-black py-2 ps-5 pr-3 rounded-full mt-10 flex items-center gap-20"
              >
                Advies op maat
                <span class="bg-primary p-2 rounded-full">
                  <IconsArrowRight class="text-xl" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-10">
      <div class="grid md:grid-cols-4 sm:grid-cols-2 py-20">
        <div class="flex gap-5">
          <div>
            <img src="../../assets//images/box-img-1.png" alt="" />
          </div>
          <div>
            Persoonlijk <br />
            advies
          </div>
        </div>
        <div class="flex gap-5">
          <div>
            <img src="../../assets//images/box-img-2.png" alt="" />
          </div>
          <div>
            100% <br />
            tevredenheidsgarantie
          </div>
        </div>
        <div class="flex gap-5">
          <div>
            <img src="../../assets//images/box-img-3.png" alt="" />
          </div>
          <div>
            Installatie door <br />
            gecertificeerde monteurs
          </div>
        </div>
        <div class="flex gap-5">
          <div>
            <img src="../../assets//images/box-img-4.png" alt="" />
          </div>
          <div>
            Milieuvriendelijke <br />
            Oplossingen
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-5 pt-10 pb-5">
        <div class="bg-productBg p-8 rounded-2xl">
          <div class="flex justify-center">
            <img :src="productImg1" alt="" />
          </div>

          <div class="mt-10">
            <h3 class="text-center mb-3 text-lg font-semibold">
              Wallbox Pulsar Max
            </h3>
            <div>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Geschikt voor álle elektrische en hybride auto’s.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span> Tot
                22kW laadvermogen.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Werkt perfect samen met eigen zonnestroom.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Supersnelle processor.
              </p>
            </div>

            <div class="mt-3 flex justify-between items-center">
              <p class="text-sm text-primary">
                From <span class="text-xl font-semibold">€900</span>
              </p>
              <NuxtLink class="bg-primary p-2 rounded-full cursor-pointer">
                <IconsArrowRight class="text-xl" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="bg-productBg p-8 rounded-2xl">
          <div class="flex justify-center">
            <img :src="productImg1" alt="" />
          </div>

          <div class="mt-10">
            <h3 class="text-center mb-3 text-lg font-semibold">
              Wallbox Pulsar Max
            </h3>
            <div>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Geschikt voor álle elektrische en hybride auto’s.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span> Tot
                22kW laadvermogen.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Werkt perfect samen met eigen zonnestroom.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Supersnelle processor.
              </p>
            </div>

            <div class="mt-3 flex justify-between items-center">
              <p class="text-sm text-primary">
                From <span class="text-xl font-semibold">€900</span>
              </p>
              <NuxtLink class="bg-primary p-2 rounded-full cursor-pointer">
                <IconsArrowRight class="text-xl" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="bg-productBg p-8 rounded-2xl">
          <div class="flex justify-center">
            <img :src="productImg1" alt="" />
          </div>

          <div class="mt-10">
            <h3 class="text-center mb-3 text-lg font-semibold">
              Wallbox Pulsar Max
            </h3>
            <div>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Geschikt voor álle elektrische en hybride auto’s.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span> Tot
                22kW laadvermogen.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Werkt perfect samen met eigen zonnestroom.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Supersnelle processor.
              </p>
            </div>

            <div class="mt-3 flex justify-between items-center">
              <p class="text-sm text-primary">
                From <span class="text-xl font-semibold">€900</span>
              </p>
              <NuxtLink class="bg-primary p-2 rounded-full cursor-pointer">
                <IconsArrowRight class="text-xl" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="bg-productBg p-8 rounded-2xl">
          <div class="flex justify-center">
            <img :src="productImg1" alt="" />
          </div>

          <div class="mt-10">
            <h3 class="text-center mb-3 text-lg font-semibold">
              Wallbox Pulsar Max
            </h3>
            <div>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Geschikt voor álle elektrische en hybride auto’s.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span> Tot
                22kW laadvermogen.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Werkt perfect samen met eigen zonnestroom.
              </p>
              <p class="flex items-start my-1 gap-3 text-xs">
                <span><IconsCheckIcon class="text-primary text-md" /></span>
                Supersnelle processor.
              </p>
            </div>

            <div class="mt-3 flex justify-between items-center">
              <p class="text-sm text-primary">
                From <span class="text-xl font-semibold">€900</span>
              </p>
              <NuxtLink class="bg-primary p-2 rounded-full cursor-pointer">
                <IconsArrowRight class="text-xl" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-1 justify-end">
        <button class="p-2 rounded-full cursor-pointer">
          <IconsArrowLeftIcon class="text-xl" />
        </button>
        <button class="p-2 rounded-full cursor-pointer">
          <IconsArrowRight class="text-xl" />
        </button>
      </div>

      <!-- Plug in Section -->
      <div class="grid grid-cols-2 justify-between my-16">
        <div class="p-10">
          <h3 class="text-3xl">
            Maak uw woonlocatie of bedrijf klaar voor de toekomst met onze
            schaalbare oplossingen voor het opladen van EV's.
          </h3>

          <button
            class="bg-white hover:bg-primary border transition duration-300 ease-in-out text-black py-2 ps-5 pr-3 rounded-full mt-10 flex items-center gap-20"
          >
            Bekijk onze oplaadstations
            <span class="bg-primary p-2 rounded-full">
              <IconsArrowRight class="text-xl" />
            </span>
          </button>
        </div>

        <div class="flex justify-end">
          <div>
            <img :src="plugImg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import plugImg from "~/assets/images/plug-img.png";
import productImg1 from "~/assets/images/product-1.png";
</script>