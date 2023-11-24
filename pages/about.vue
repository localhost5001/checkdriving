<template>
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <span class="relative">About</span>
      </span>
      Eugene Kim
    </h2>
  </div>

  <div class="grid grid-cols-1 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-3">
    <div v-for="item in items" class="text-center">
      <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.7" stroke="currentColor" 
          class="w-10 h-10 text-teal-600"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h6 class="mb-2 font-semibold leading-5">{{ item }}</h6>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-3">
    <StatItem 
      v-for="stat in stats"
      :key="stat.title"
      :title="stat.title" 
      :description="stat.description" 
    />
  </div>

  <div class="text-center">
    <a 
      href="tel:+16047254935" 
      class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-teal-500 text-white shadow-sm hover:bg-teal-500/90 disabled:opacity-50 disabled:pointer-events-none">
        604 725 4935
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      </a>
  </div>
</div>
</template>

<script setup lang="ts">
import StatItem from '@/components/statItem.vue'

const stats = [
  { title: 'Class 1', description: 'driver’s licence' },
  { title: 'Certified', description: 'instructor with many years of expertise' },
  { title: 'Exceptional', description: 'driving skills in all weather conditions' },
]

</script>
