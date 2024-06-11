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
    title: 'Prepaid Package of Lessons (Each Lesson is 1.5 Hours)',
    rates: [
      { amount: 950, description: '10 Lessons (You save 50$)' },
      { amount: 1800, description: '20 Lessons (You save 200$)' },
    ]
  },
  {
    title: 'ICBC Road Test Package',
    rates: [
      { amount: 150, description: 'ICBC road test preparation - 2 hours' },
      { amount: 200, description: 'Car rental for ICBC Road Test' },
    ]
  },
]

</script>
