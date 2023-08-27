<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
      Program Outline
    </h2>
    <p class="text-base md:text-lg">
      Welcome to our comprehensive driving program at Check Driving School! 
      Learn the art of driving with expert guidance and master essential skills such as pre-trip inspection, speed control, safe following distance, and more, all while experiencing the freedom of the road.
    </p>
  </div>
  <div class="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
    <div class="grid grid-cols-2 gap-5">
      <div v-for="feature in features" class="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
        <div class="mr-2">
          <svg class="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <span>{{ feature }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const features = [
  'Pre-Trip inspection',
  'Procedures before driving for the first time',
  'Straight tracking',
  'Scanning',
  'Navigating traffic lights',
  'Point of no return',
  'Ground view awareness (under parked cars)',
  'Speed control',
  'Safe following distance',
  'Stopping positions (for sign / lines and for stopped traffic ahead)',
  'Right-of-way',
  'Lane changes: quite road, busy roads (advanced)',
  'Hazard recognition and Sign interpretation',
  'Turns',
  'Curb judgement',
  'Hill parking',
  'Backing',
  'Forward stall parking',
  'Parallel parking',
  'Reverse stall parking',
  'Highway driving aptitude',
  'Navigating urban traffic (downtown Vancouver)'
]
</script>
