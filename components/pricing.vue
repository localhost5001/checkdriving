<template>
  <div>
    <div class="text-center m-2">
      <h1 class="text-3xl text-gray-800 font-bold lg:text-4xl text-center">
        Pricing
      </h1>
    </div>

    <div class="grid gap-2 grid-cols-1 lg:gap-2 lg:grid-cols-3 m-2">
      <pricingCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :note="card.note"
        :rates="card.rates"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import pricingCard from "./pricingCard.vue";
import type { PricingCardViewModel } from "@/models/pricingCardViewModel";

const cards: PricingCardViewModel[] = [
  {
    title: "Regular Single Lessons",
    rates: [
      {
        amount: 80,
        description: "1 Hour",
        note: "Anywhere in the Lower Mainland.",
      },
      { amount: 100, description: "1.5 Hours", note: "Anywhere in the Lower Mainland.",},
      { amount: 65, description: "1 Hour", note: "* Lansdowne Skytrain Station pick-up & drop-off only *",},
    ],
  },
  {
    title: "Prepaid Packages of Lessons (Each Lesson is 1 Hour)",
    note: "Note: Pick Up & Drop Off at Lansdowne Skytrain Station",
    rates: [
      { amount: 650, description: "10 Lessons (You save $200)", note: "(1 Hour each X $65)", },
      { amount: 1200, description: "20 Lessons (You save $500)", note: "(1 Hour each X $60)", },
      { amount: 1650, description: "30 Lessons (You save $900)", note: "(1 Hour each X $55)",},
    ],
  },
  {
    title: "ICBC Road Test Package",
    rates: [
      { amount: 150, description: "ICBC road test preparation - 2 hours" },
      { amount: 190, description: "Car rental for ICBC Road Test", note: "(1 Hour warm-up lesson included)" },
    ],
  },
];
</script>
