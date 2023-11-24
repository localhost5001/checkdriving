<template>
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <h2 class="max-w-lg mb-6 font-sans text-3xl block font-bold text-gray-800 md:text-5xl lg:text-6xl leading-none tracking-tight  sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <span class="relative">About</span>
      </span>
      Eugene Kim
    </h2>
  </div>

  <div class="grid grid-cols-1 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-3">
    <StatItem 
      v-for="stat in stats"
      :key="stat.title"
      :title="stat.title" 
      :description="stat.description" 
    />
  </div>

  <div class="flex mx-auto">
    <FleetGallery />
  </div>
</div>
</template>

<script setup lang="ts">
import StatItem from '@/components/statItem.vue'
import FleetGallery from '@/components/fleetGallery.vue'

const stats = [
  { title: 'Class 1', description: 'driver’s licence' },
  { title: 'Certified', description: 'instructor with many years of expertise' },
  { title: 'Exceptional', description: 'driving skills in all weather conditions' },
]

</script>
