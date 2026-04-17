<template>
<div class="relative overflow-hidden">
  <div
    class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.teal.100),transparent_60%)]"
    aria-hidden="true"
  />

  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <div class="max-w-3xl text-center mx-auto">
      <span class="inline-flex items-center gap-x-2 py-1 px-3 rounded-full text-xs font-medium bg-white border border-teal-200 text-teal-700">
        Richmond, BC — Structured Driver Training
      </span>

      <h1 class="mt-5 block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
        Learn to Drive with a
        <span class="bg-clip-text bg-gradient-to-tl from-teal-700 to-green-600 text-transparent">
          Structured System
        </span>
      </h1>

      <p class="mt-5 text-lg text-gray-600">
        A step-by-step system designed to take you from beginner to confident, test-ready driver.
        Build confidence, reduce the number of lessons, and prepare for your road test step by step.
      </p>
    </div>

    <ul class="mt-8 max-w-xl mx-auto grid gap-3 sm:grid-cols-1">
      <li
        v-for="bullet in bullets"
        :key="bullet"
        class="flex items-start gap-x-3 text-gray-700"
      >
        <span class="flex-shrink-0 mt-0.5 flex justify-center items-center w-6 h-6 rounded-full bg-teal-50 border border-teal-200">
          <svg
            class="w-3.5 h-3.5 text-teal-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke-width="3" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
        <span>{{ bullet }}</span>
      </li>
    </ul>

    <div class="mt-10 gap-3 flex flex-wrap justify-center">
      <NuxtLink
        to="/pricing"
        class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl bg-teal-500 hover:bg-teal-500/90 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4"
      >
        View Programs & Pricing
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </NuxtLink>
      <a
        href="tel:+16047254935"
        class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
      >
        604 725 4935
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      </a>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const bullets = [
  'Clear explanations before every lesson',
  'Structured training — no guessing',
  'Faster progress with less stress',
]
</script>
