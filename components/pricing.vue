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
import type { Rate } from "~/models/rate";

const GenerateRate = (lessonPrice: number, numberOfLessons: number, options?: { customNote?: string, customDescription?: string }): Rate => {
  return { 
    amount: lessonPrice * numberOfLessons, 
    description: options?.customDescription ?? `${numberOfLessons} Lessons`, 
    note: options?.customNote ?? `(1 Hour each X $${lessonPrice})`
  }
}

const cards: PricingCardViewModel[] = [
  {
    title: "Regular Single Lessons",
    note: "Anywhere in the Lower Mainland",
    rates: [
      {
        amount: 100,
        description: "1 Hour"
      },
      { amount: 140,
        description: "1.5 Hours"},
      // { amount: 70, description: "1 Hour", note: "* Lansdowne Skytrain Station pick-up & drop-off only *",},
    ],
  },
  {
    title: "Prepaid Packages of Lessons (Each Lesson is 1 Hour)",
    note: "Note: Pick Up & Drop Off at Lansdowne Skytrain Station",
    rates: [
      GenerateRate(90, 1, { customNote: '', customDescription: '1 Hour' }),
      GenerateRate(80, 5),
      GenerateRate(75, 10),
      GenerateRate(70, 15),
    ],
  },
  {
    title: "ICBC Road Test Package",
    rates: [
      { amount: 150, description: "ICBC road test preparation - 2 hours" },
      { amount: 250, description: "Car rental for ICBC Road Test", note: "(1 Hour warm-up lesson included)" },
    ],
  },
];
</script>
