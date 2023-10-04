<template>
  <div>
    <div class="text-center m-2">
      <h1 class="text-4xl font-semibold leadi">Pricing</h1>
    </div>

    <div 
      class="
          grid gap-2
          grid-cols-1 
          lg:gap-2 lg:grid-cols-2 
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
    title: 'Individual classes',
    rates: [
      { amount: 70, description: '1 Hour' },
      { amount: 90, description: '1.5 Hours' }
    ],
  },
  {
    title: 'Packages (Each Class is 1.5 Hours)',
    rates: [
      { amount: 400, description: '5 Classes (50$ discount)' },
      { amount: 800, description: '10 Classes (100$ discount)' },
      { amount: 1400, description: '20 Classes (200$ discount)' },
    ]
  },
]

</script>
