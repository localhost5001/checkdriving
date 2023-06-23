<template>
  <div class="text-white">
    <div class="text-center m-2">
      <h1 class="text-4xl font-semibold leadi">Pricing</h1>
    </div>

    <div 
      class="
          grid 
          gap-6 grid-cols-1 
          lg:gap-2 lg:grid-cols-3
          m-2
        "
      >
      <pricingCard 
        v-for="card in cards" 
        :key="card.title" 
        :title="card.title"
        :rates="card.rates"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import pricingCard from './pricingCard.vue'
import type { PricingCardViewModel } from '@/models/pricingCardViewModel'

const cards: PricingCardViewModel[] = [
  {
    title: 'Individual',
    rates: [
      { amount: 60, description: '1 Hour' },
      { amount: 90, description: '1.5 Hours' },
      { amount: 120, description: '2 Hours' },
    ],
  },
  {
    title: '1 Hour Packages',
    rates: [
      { amount: 300, description: '5 Lessons', discount: 10 },
      { amount: 600, description: '10 Lessons', discount: 10 },
      { amount: 900, description: '15 Lessons', discount: 10 },
    ],
  },
  {
    title: '1/2 Hour Packages',
    rates: [
      { amount: 450, description: '5 Lessons', discount: 10 },
      { amount: 900, description: '10 Lessons', discount: 10 },
      { amount: 1350, description: '15 Lessons', discount: 10 },
    ],
  },
]

</script>
