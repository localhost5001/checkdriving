<template>
<div class="relative overflow-hidden">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

    <div class="mt-5 max-w-2xl text-center mx-auto">
      <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
        Experience the Road to
        <span class="bg-clip-text bg-gradient-to-tl from-teal-700 to-green-600 text-transparent">Success</span>
      </h1>
    </div>

    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-600">Welcome to Check Driving School - Your Path to Safe and Confident Driving!</p>
    </div>

    <div class="mt-8 gap-3 flex justify-center">
      <a href="tel:+16047254935" class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
        604 725 4935
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      </a>
    </div>

    <ProgramExperience />
    
  </div>
</div>
</template>

<script setup lang="ts">
import ProgramExperience from './programExperience.vue'
</script>
