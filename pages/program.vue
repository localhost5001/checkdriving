<template>
  <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
    <h5 class="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
      Program Outline
    </h5>
    <div class="grid gap-3 row-gap-3 lg:grid-cols-3">
      <ul class="space-y-3">
        <li v-for="item in items.slice(0, 9)" class="flex items-start">
          <span class="mr-1">
            <svg class="w-5 h-5 mt-px stroke-blue-500" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          {{ item }}
        </li>
      </ul>
      <ul class="space-y-3">
        <li v-for="item in items.slice(9, 17)" class="flex items-start">
          <span class="mr-1">
            <svg class="w-5 h-5 mt-px stroke-blue-500" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          {{ item }}
        </li>
      </ul>
      <ul class="space-y-3">
        <li v-for="item in items.slice(17, 22)" class="flex items-start">
          <span class="mr-1">
            <svg class="w-5 h-5 mt-px stroke-blue-500" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
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
