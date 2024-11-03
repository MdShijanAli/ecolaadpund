<template>
  <div class="">
    <div class="banner">
      <div class="w-full relative">
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
                <span class="bg-primary p-2 rounded-full"
                  ><IconsArrowRight class="text-xl"
                /></span>
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
                  <span class="bg-primary p-2 rounded-full"
                    ><IconsArrowRight class="text-xl"
                  /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>