<template>
  <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
    <h5 class="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
      Program Outline
    </h5>
    <div class="grid gap-3 row-gap-3 lg:grid-cols-3">
      <ul class="space-y-3">
        <li v-for="item in items.slice(0, 9)" class="flex items-start">
          <span class="mr-1">
            <svg fill="#000000" class="w-5 h-5 mt-px fill-teal-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>
          </span>
          {{ item }}
        </li>
      </ul>
      <ul class="space-y-3">
        <li v-for="item in items.slice(9, 17)" class="flex items-start">
          <span class="mr-1">
            <svg fill="#000000" class="w-5 h-5 mt-px fill-teal-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>
          </span>
          {{ item }}
        </li>
      </ul>
      <ul class="space-y-3">
        <li v-for="item in items.slice(17, 22)" class="flex items-start">
          <span class="mr-1">
            <svg fill="#000000" class="w-5 h-5 mt-px fill-teal-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>
          </span>
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">  
const items = [
  'Pre-Trip inspection',
  'Procedures before driving for the first time',
  'Straight tracking',
  'Scanning',
  'Navigating traffic lights',
  'Point of no return',
  'Ground view awareness (incl. under parked cars)',
  'Speed control',
  'Maintaining a safe following distance',
  'Stopping positions (for signs / lines and when traffic stops ahead)',
  'Right-of-way',
  'Lane changes: quiet road, busy roads (advanced)',
  'Hazard recognition and Sign interpretation',
  'Turns',
  'Curb judgement',
  'Hill parking',
  'Backing',
  'Forward stall parking',
  'Parallel parking',
  'Reverse stall parking',
  'Highway driving aptitude',
  'Navigating urban traffic (Downtown Vancouver)'
]
</script>
