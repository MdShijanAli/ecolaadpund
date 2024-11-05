<template>
  <div>
    <div class="">
      <div class="">
        <div class="w-full h-[789px]">
          <img
            class="bg-black opacity-100 w-full h-full"
            src="/images/banner-1.png"
          />
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6">
        <div
          class="grid md:grid-cols-2 md:justify-between gap-5 justify-center absolute bottom-0 left-0 w-full"
        >
          <div class="col-span-1">
            <h1 class="md:text-bigTitle sm:text-bigTitleResponsive text-[40px] text-center md:text-start text-white font-medium leading-[115%]">
              De revolutionaire <br />
              oplaadervaring.
            </h1>
            <div class="flex md:justify-start justify-center">
              <ButtonHoverButton caption="Onze oplossing" class="md:mt-16 mt-10" />
            </div>
          </div>
          <div class="col-span-1 flex md:justify-end justify-center">
            <div class="bg-white rounded-2xl p-5 w-[300px] shadow-xl">
              <h3 class="text-primary text-base24 leading-tight font-semibold">
                Persoonlijk advies nodig? Dat geven we gratis.
              </h3>
              <p class="text-base py-3">
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

              <ButtonHoverButton caption="Advies op maat" class="mt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 py-20">
        <LazyBoxItem v-for="(item, ind) in boxItems" :key="ind" :item="item" />
      </div>

      <!-- Product Section -->
      <div>
        <h3 class="md:text-title text-titleResponsive leading-tight">
          We bieden een reeks <br />
          oplaadpunten waaruit je <br />
          kunt kiezen.
        </h3>
      </div>

      <div>
        <Carousel height="min-h-[520px]">
          <LazySingleProduct
            v-for="(item, ind) in productLists"
            :key="ind"
            :item="item"
            class="hs-carousel-slide mx-3 rounded-3xl h-[480px] bg-productBg mt-10"
          />
        </Carousel>
      </div>

<!--       <div
        class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 pt-10 pb-5"
      >
        <LazySingleProduct
          v-for="(item, ind) in productLists"
          :key="ind"
          :item="item"
        />
      </div>
      <div>
        <CarouselPagination />
      </div> -->

      <!-- Plug in Section -->
      <div
        class="md:grid md:grid-cols-2 flex flex-col-reverse justify-center md:justify-between md:my-16 my-10"
      >
        <div class="p-8">
          <h3 class="md:text-title text-titleResponsive leading-tight">
            Maak uw woonlocatie of bedrijf klaar voor de toekomst met onze
            schaalbare oplossingen voor het opladen van EV's.
          </h3>

          <div class="flex justify-center md:grid md:justify-start">
            <LazyButtonHoverButton
              caption="Bekijk onze oplaadstations"
              class="mt-10"
            />
          </div>
        </div>

        <div class="flex md:justify-end justify-center">
          <div>
            <img src="/images/plug-img.png" alt="" />
          </div>
        </div>
      </div>

      <!-- Changing Station Section -->
      <div>
        <h3 class="md:text-title text-titleResponsive">Charging solutions for</h3>
      </div>
      <div
        class="grid sm:grid-cols-2 gap-5 justify-between md:mb-16 mb-10 mt-8"
      >
        <div class="relative group">
          <img class="" src="/images/home-charging.png" alt="" />
          <ButtonHoverButton
            class="absolute bottom-5 left-5"
            caption="Privé thuis"
          />
        </div>

        <div class="relative">
          <img src="/images/Hero-03-1.png" alt="" />
          <ButtonHoverButton
            class="absolute bottom-5 left-5"
            caption="Zakelijke"
          />
        </div>
      </div>
    </div>

    <!-- Feedback Section -->
    <div class="py-10">
      <div class="bg-[#DEEFE1] p-10 rounded-b-3xl relative z-50">
        <div
          class="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-center grid gap-5 justify-center"
        >
          <div>
            <h3 class="md:text-title text-titleResponsive leading-tight">
              Wij zoeken de beste <br />
              oplossing voor jou.
            </h3>
          </div>
          <div>
            <ButtonHoverButton
              caption="Bekijk onze oplaadstations"
              color="black"
            />
          </div>
        </div>
      </div>
      <div class="w-full md:-mt-10 -mt-5 relative">
        <img class="w-full h-[300px] md:h-full" src="/images/fedback-img.png" alt="" />
        <div class="relative max-w-7xl mx-auto px-6">
          <div
            class="grid md:grid-cols-2 md:justify-between justify-center items-center absolute md:bottom-10 bottom-5 left-0 w-full"
          >
            <div>
              <h3 class="md:text-title text-titleResponsive text-white text-center md:text-left">
                "Satisfaction Isn’t Just a Goal—It’s Our Standard."
              </h3>
            </div>
            <div class="flex md:justify-end justify-center relative z-50">
              <ButtonHoverButton caption="Aanvraag persoonlijk advies" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid md:grid-cols-2 justify-between gap-10">
        <div>
          <h3 class="md:text-title text-titleResponsive font-normal leading-tight">
            Snelle antwoorden op <br />
            vragen die je hebt!
          </h3>

          <p class="my-5 text-base max-w-[350px]">
            De keuze is reuze en het kiezen van de meest geschikte laadpaal kan
            een lastige opgave zijn. Wij helpen je graag een handje op weg.
          </p>

          <p class="mt-14 text-base">
            Can't find what you're looking for? <br />Contact us here: <br />
            <span class="text-primary">info@ecolaadpunt.com</span>
          </p>
        </div>
        <div>
          <LazyAccordian :lists="accordionLists" />
        </div>
      </div>
    </div>

    <!-- Carousel Section -->
    <div class="md:py-20 py-10 rounded-b-3xl z-50">
      <div class="max-w-7xl mx-auto px-6 mb-10">
        <h3 class="md:text-title text-titleResponsive mb-2">Feedback van klanten</h3>
        <div>
          <img src="/images/google.png" alt="" />
        </div>
      </div>
      <div>
        <Carousel height="min-h-[350px]">
          <div
            v-for="(item, ind) in reviewLists"
            :key="ind"
            class="hs-carousel-slide mx-4 rounded-3xl h-[350px] bg-productBg"
          >
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
          </div>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
const accordionLists = ref([
  {
    id: 1,
    title: "Kan ik een laadpaal thuis aanschaffen als ik geen eigen oprit heb?",
    description:
      "Heb je een eigen oprit/parkeerplaats dan is het plaatsen van een laadpaal thuis in vrijwel alle gevallen mogelijk. Heb je geen eigen oprit, maar wel een openbare parkeerplaats die relatief dicht aan je huis of tuin grenst? Dan zijn er ook voor jouw situatie mogelijkheden om thuis te laden.",
  },
  {
    id: 2,
    title: "Waar kan ik het beste mijn laadpaal plaatsen?",
    description:
      "Heb je een eigen oprit/parkeerplaats dan is het plaatsen van een laadpaal thuis in vrijwel alle gevallen mogelijk. Heb je geen eigen oprit, maar wel een openbare parkeerplaats die relatief dicht aan je huis of tuin grenst? Dan zijn er ook voor jouw situatie mogelijkheden om thuis te laden.",
  },
  {
    id: 3,
    title: "Wil ik Dynamic Load Balancing op mijn laadpaal?",
    description:
      "Heb je een eigen oprit/parkeerplaats dan is het plaatsen van een laadpaal thuis in vrijwel alle gevallen mogelijk. Heb je geen eigen oprit, maar wel een openbare parkeerplaats die relatief dicht aan je huis of tuin grenst? Dan zijn er ook voor jouw situatie mogelijkheden om thuis te laden.",
  },
  {
    id: 4,
    title: "Laden via stroom van zonnepanelen?",
    description:
      "Heb je een eigen oprit/parkeerplaats dan is het plaatsen van een laadpaal thuis in vrijwel alle gevallen mogelijk. Heb je geen eigen oprit, maar wel een openbare parkeerplaats die relatief dicht aan je huis of tuin grenst? Dan zijn er ook voor jouw situatie mogelijkheden om thuis te laden.",
  },
  {
    id: 5,
    title: "Wat kost het laden van mijn elektrische auto?",
    description:
      "Heb je een eigen oprit/parkeerplaats dan is het plaatsen van een laadpaal thuis in vrijwel alle gevallen mogelijk. Heb je geen eigen oprit, maar wel een openbare parkeerplaats die relatief dicht aan je huis of tuin grenst? Dan zijn er ook voor jouw situatie mogelijkheden om thuis te laden.",
  },
  {
    id: 6,
    title: "Wat zijn de beste laadpassen van 2022?",
    description:
      "Heb je een eigen oprit/parkeerplaats dan is het plaatsen van een laadpaal thuis in vrijwel alle gevallen mogelijk. Heb je geen eigen oprit, maar wel een openbare parkeerplaats die relatief dicht aan je huis of tuin grenst? Dan zijn er ook voor jouw situatie mogelijkheden om thuis te laden.",
  },
  {
    id: 7,
    title: "Kan ik subsidie krijgen voor mijn laadpaal thuis?",
    description:
      "Heb je een eigen oprit/parkeerplaats dan is het plaatsen van een laadpaal thuis in vrijwel alle gevallen mogelijk. Heb je geen eigen oprit, maar wel een openbare parkeerplaats die relatief dicht aan je huis of tuin grenst? Dan zijn er ook voor jouw situatie mogelijkheden om thuis te laden.",
  },
  {
    id: 8,
    title: "Is mijn meterkast geschikt voor een laadpaal?",
    description:
      "Heb je een eigen oprit/parkeerplaats dan is het plaatsen van een laadpaal thuis in vrijwel alle gevallen mogelijk. Heb je geen eigen oprit, maar wel een openbare parkeerplaats die relatief dicht aan je huis of tuin grenst? Dan zijn er ook voor jouw situatie mogelijkheden om thuis te laden.",
  },
]);

const reviewLists = ref([
  {
    id: 1,
    title: "Betaalbare en efficiënte laadoplossing voor EV",
    description:
      "Ik ben zo blij dat ik Ecolaadpunt heb gevonden. Hun prijzen waren concurrerend en het laadstation is perfect voor mijn behoeften. Het installatie team was vriendelijk en liet alles schoon achter. Een zeer professionele service!",
    name: "— David P., Den Haag",
    rating: 5,
  },
  {
    id: 2,
    title: "Geweldige ervaring van begin tot eind",
    description:
      "Ik was nieuw in EV-laden, maar Ecolaadpunt gaf me alle begeleiding die ik nodig had. Ze hielpen me om mijn opties te begrijpen, en het installatieproces verliep soepel. Het station werkt perfect—superhandig!",
    name: "— Lisa H., Utrecht",
    rating: 5,
  },
  {
    id: 3,
    title: "Uitstekende service en ondersteuning!",
    description:
      "Ecolaadpunt maakte het proces zo eenvoudig! Hun team hielp me bij het kiezen van de perfecte laadoplossing voor thuis, en de installatie verliep vlekkeloos. Nu kan ik mijn EV 's nachts zonder zorgen opladen. Ik raad ze zeker aan!",
    name: "— Sophie D., Amsterdam",
    rating: 4,
  },
  {
    id: 4,
    title: "Betrouwbare en snelle installatie van laadstation",
    description:
      "We hebben ons laadstation laten installeren door Ecolaadpunt, en het is fantastisch. De installatie werd op tijd uitgevoerd, en het team was erg professioneel. Onze EV laadt snel en efficiënt op. Heel tevreden!",
    name: "— Mark V., Rotterdam",
    rating: 5,
  },
  {
    id: 5,
    title: "Betaalbare en efficiënte laadoplossing voor EV",
    description:
      "Ik ben zo blij dat ik Ecolaadpunt heb gevonden. Hun prijzen waren concurrerend en het laadstation is perfect voor mijn behoeften. Het installatie team was vriendelijk en liet alles schoon achter. Een zeer professionele service!",
    name: "— Lisa H., Utrecht",
    rating: 5,
  },
  {
    id: 6,
    title: "Betaalbare en efficiënte laadoplossing voor EV",
    description:
      "Ik ben zo blij dat ik Ecolaadpunt heb gevonden. Hun prijzen waren concurrerend en het laadstation is perfect voor mijn behoeften. Het installatie team was vriendelijk en liet alles schoon achter. Een zeer professionele service!",
    name: "— Lisa H., Utrecht",
    rating: 5,
  },
]);

const boxItems = ref([
  {
    id: 1,
    title: "Persoonlijk <br /> advies",
    image: "/images/box-img-1.png",
  },
  {
    id: 2,
    title: "100% <br /> tevredenheidsgarantie",
    image: "/images/box-img-2.png",
  },
  {
    id: 3,
    title: "Installatie door <br /> gecertificeerde monteurs",
    image: "/images/box-img-3.png",
  },
  {
    id: 4,
    title: "Milieuvriendelijke <br /> Oplossingen",
    image: "/images/box-img-4.png",
  },
]);

const productLists = ref([
  {
    id: 1,
    title: "Wallbox Pulsar Max",
    features: [
      "Geschikt voor álle elektrische en hybride",
      "auto’s.",
      "Tot 22kW laadvermogen.",
      "Werkt perfect samen met eigen zonnestroom.",
      "Supersnelle processor.",
    ],
    image: "/images/product-1.png",
    price: 900,
    path: "/",
  },
  {
    id: 2,
    title: "Etrel Inch Pro",
    features: [
      "Geschikt voor álle elektrische en hybride",
      "auto’s.",
      "Tot 22 kW laadvermogen.",
      "Kan op 1-fase én 3-fasen worden ",
      "aangesloten.",
      "Standaard uitvoering: Socketmodel.",
    ],
    image: "/images/product-2.png",
    price: 1452,
    path: "/",
  },
  {
    id: 3,
    title: "Zaptec Pro",
    features: [
      "Geschikt voor álle elektrische en hybride",
      "auto’s.",
      "Oplaadsnelheid tot 22kW.",
      "4G LTE-M, Wi-Fi- of Power Line ",
      "communication-connectiviteit.",
      "Dynamische fasetoewijzing.",
    ],
    image: "/images/product-3.png",
    price: 1199,
    path: "/",
  },
  {
    id: 4,
    title: "Shell Recharge",
    features: [
      "Geschikt voor álle elektrische en hybride auto’s.",
      "Instelbaar laadvermogen tot 22 kW.",
      "Inzichtelijk (laadgeschiedenis, kosten en energieverbruik  worden bijgehouden).",
      "Standaard uitvoering: Socketmodel.",
    ],
    image: "/images/product-4.png",
    price: 1288,
    path: "/",
  },
]);
</script>