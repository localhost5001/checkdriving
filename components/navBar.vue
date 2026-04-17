<template>
<header class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 text-sm">
  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div class="flex items-center justify-between">
      <a class="inline-flex items-center gap-x-2 text-lg font-semibold" href="/">
        <span class="flex justify-center items-center w-9 h-9 rounded-lg bg-gradient-to-tl from-teal-700 to-green-600 text-white shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="3" stroke="currentColor"
            class="w-5 h-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
        <span class="text-gray-800">Check Driving School</span>
      </a>
      <div class="sm:hidden">
        <button
          type="button"
          class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          data-hs-collapse="#navbar-image-and-text-1"
          aria-controls="navbar-image-and-text-1"
          aria-label="Toggle navigation"
        >
          <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>

    <div id="navbar-image-and-text-1" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div class="flex flex-col gap-2 mt-4 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:gap-1 sm:ps-5">
        <a
          v-for="link in links" :key="link.href"
          class="relative font-medium px-3 py-2 rounded-md transition-colors"
          :class="route.path === link.href
            ? 'text-teal-700 bg-teal-50'
            : 'text-gray-600 hover:text-teal-700 hover:bg-gray-50'"
          :href="link.href"
          :aria-current="route.path === link.href ? 'page' : undefined"
        >
          {{ link.name }}
        </a>

        <a
          href="tel:+16047254935"
          class="mt-2 sm:mt-0 sm:ms-2 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-md bg-gradient-to-tl from-teal-700 to-green-600 text-white py-2 px-4 hover:opacity-90 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a.75.75 0 0 1-.91.273 12.05 12.05 0 0 1-5.58-5.58.75.75 0 0 1 .273-.91l1.293-.97c.362-.271.527-.733.417-1.173L6.52 3.352a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          604 725 4935
        </a>
      </div>
    </div>
  </nav>
</header>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'

const route = useRoute()

const links = [
  { name: 'Home', href: '/' },
  { name: 'Our Method', href: '/method' },
  { name: 'Programs & Pricing', href: '/pricing' },
  { name: 'Company Policy', href: '/policy' },
]
</script>
