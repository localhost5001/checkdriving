<template>
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="903f4a9e-7ac3-441c-9613-04c15fcc0a14" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)" width="52" height="24"></rect>
        </svg>
        <span class="relative">About</span>
      </span>
      Eugene Kim
    </h2>
    <!-- <p class="text-base text-gray-700 md:text-lg">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
    </p> -->
  </div>
  <div class="grid grid-cols-1 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-3">
    <div v-for="item in items" class="text-center">
      <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 ">
        <svg fill="#000000" class="fill-slate-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>
      </div>
      <h6 class="mb-2 font-semibold leading-5">{{ item }}</h6>
    </div>
  </div>
  <div class="text-center">
    <a
      href="tel:+16047254935"
      class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none bg-blue-500 btn"
    >
      604 725 4935
      <span class="ml-1 -mr-2">
        <svg class="w-8 h-8 text-white" stroke="currentColor" viewBox="0 0 52 52">
          <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
        </svg>
      </span>
    </a>
  </div>
</div>
</template>

<script setup lang="ts">
const items = [
  'Class 1 driver’s licence',
  'Certified instructor with lots of years of experience',
  'Exceptional driving skills in all weather conditions'
]
</script>
