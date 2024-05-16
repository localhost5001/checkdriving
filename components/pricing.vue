<template>
  <div>
    <div class="text-center m-2">
      <h1 class="text-3xl text-gray-800 font-bold lg:text-4xl text-center">Pricing</h1>
    </div>

    <div 
      class="
          grid gap-2
          grid-cols-1
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
    title: 'Regular Single Lessons',
    rates: [
      { amount: 80, description: '1 Hour' },
      { amount: 100, description: '1.5 Hours' }
    ],
  },
  {
    title: 'Prepaid Package of Lessons (Each Class is 1.5 Hours)',
    rates: [
      { amount: 950, description: '10 Classes (50$ discount)' },
      { amount: 1800, description: '20 Classes (200$ discount)' },
    ]
  },
  {
    title: 'ICBC Road Test Package',
    rates: [
      { amount: 150, description: 'ICBC road test preparation - 2 hours' },
      { amount: 180, description: 'Car rental for road test at ICBC' },
    ]
  },
]

</script>
