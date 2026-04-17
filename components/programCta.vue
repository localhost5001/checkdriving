<template>
<div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
  <div class="relative overflow-hidden rounded-2xl bg-gradient-to-tl from-teal-700 to-green-600 px-6 py-12 sm:px-12 sm:py-16 text-center">
    <div class="relative max-w-2xl mx-auto">
      <h2 class="text-3xl font-bold text-white lg:text-4xl">
        Choose the Program That Fits You
      </h2>
      <p class="mt-4 text-teal-50 text-lg">
        Whether you are starting from zero or preparing for your test,
        there is a structured program for your level.
      </p>
      <p class="mt-2 text-teal-100 text-sm">
        Start with a single lesson or choose a full program.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <NuxtLink
          to="/pricing"
          class="inline-flex justify-center items-center gap-x-2 bg-white text-teal-700 text-sm font-semibold rounded-md py-3 px-5 hover:bg-teal-50"
        >
          View Programs & Pricing
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </NuxtLink>
        <a
          href="tel:+16047254935"
          class="inline-flex items-center gap-x-2 text-sm font-mono rounded-md border border-white/40 bg-white/10 text-white py-3 px-4 hover:bg-white/20"
        >
          604 725 4935
        </a>
      </div>
    </div>
  </div>
</div>
</template>
