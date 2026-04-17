<template>
<article
  :class="[
    'relative flex flex-col rounded-2xl p-6 lg:p-8 shadow-sm h-full',
    featured
      ? 'bg-gradient-to-b from-teal-50 to-white border-2 border-teal-500 ring-1 ring-teal-100'
      : 'bg-white border border-gray-200'
  ]"
>
  <span
    v-if="featured"
    class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-tl from-teal-700 to-green-600 text-white text-xs font-semibold uppercase tracking-wider shadow-sm whitespace-nowrap"
  >
    Best Value
  </span>

  <div class="flex items-center gap-x-2">
    <span :class="['w-2.5 h-2.5 rounded-full', tierDotClass]" />
    <span class="text-xs font-semibold uppercase tracking-wider text-gray-500">
      {{ tierLabel }}
    </span>
  </div>

  <h3 class="mt-2 text-2xl font-bold text-gray-800">{{ title }}</h3>
  <p v-if="subtitle" class="mt-1 text-sm text-gray-500">{{ subtitle }}</p>

  <div class="mt-5 flex items-baseline gap-x-2">
    <span class="text-4xl font-bold text-gray-900">${{ price }}</span>
    <span v-if="priceNote" class="text-sm text-gray-500">{{ priceNote }}</span>
  </div>

  <ul class="mt-6 space-y-2.5">
    <li
      v-for="feature in features" :key="feature"
      class="flex items-start gap-x-3 text-sm text-gray-700"
    >
      <span class="flex-shrink-0 mt-0.5 flex justify-center items-center w-5 h-5 rounded-full bg-teal-50 border border-teal-200">
        <svg class="w-3 h-3 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
      <span>{{ feature }}</span>
    </li>
  </ul>

  <div
    v-if="tip"
    class="mt-5 rounded-lg bg-amber-50 border border-amber-200 p-3 flex items-start gap-x-2"
  >
    <svg class="flex-shrink-0 w-5 h-5 text-amber-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
    <p class="text-sm text-amber-900 leading-relaxed">{{ tip }}</p>
  </div>

  <div
    v-if="savings"
    class="mt-5 rounded-lg bg-teal-50 border border-teal-200 p-4"
  >
    <p class="text-sm font-semibold text-teal-800">{{ savings.label }}</p>
    <ul class="mt-2 space-y-1.5">
      <li
        v-for="item in savings.items" :key="item"
        class="flex items-start gap-x-2 text-sm text-teal-900"
      >
        <svg class="flex-shrink-0 w-3.5 h-3.5 text-teal-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>

  <div
    v-if="paymentOptions && paymentOptions.length"
    class="mt-auto pt-6"
  >
    <div class="pt-5 border-t border-gray-100">
      <p class="text-xs font-semibold uppercase tracking-wider text-gray-500">
        Payment options
      </p>
      <ul class="mt-3 space-y-2 text-sm">
        <li v-for="(opt, idx) in paymentOptions" :key="idx">
          <p class="font-semibold text-gray-800">{{ opt.label }}</p>
          <p v-if="opt.detail" class="text-gray-600 mt-0.5">{{ opt.detail }}</p>
        </li>
      </ul>
    </div>
  </div>
</article>
</template>

<script setup lang="ts">
const props = defineProps<{
  tier: 'basic' | 'starter' | 'standard' | 'complete'
  tierLabel: string
  title: string
  subtitle?: string
  price: string | number
  priceNote?: string
  features: string[]
  tip?: string
  savings?: {
    label: string
    items: string[]
  }
  paymentOptions?: { label: string, detail?: string }[]
  featured?: boolean
}>()

const tierDotClass = (() => {
  switch (props.tier) {
    case 'basic': return 'bg-emerald-500'
    case 'starter': return 'bg-sky-500'
    case 'standard': return 'bg-orange-500'
    case 'complete': return 'bg-gradient-to-tl from-teal-700 to-green-600'
  }
})()
</script>
