<template>
<div>
  <!-- Hero -->
  <section class="relative overflow-hidden">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.teal.100),transparent_60%)]"
      aria-hidden="true"
    />
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
      <span class="inline-flex items-center gap-x-2 py-1 px-3 rounded-full text-xs font-medium bg-white border border-teal-200 text-teal-700">
        Driving Programs
      </span>
      <h1 class="mt-5 block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
        Programs &amp;
        <span class="bg-clip-text bg-gradient-to-tl from-teal-700 to-green-600 text-transparent">Pricing</span>
      </h1>
      <p class="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
        Choose the program that fits your level and goals. All programs follow a structured system
        designed to help you learn faster and prepare for the ICBC road test efficiently.
      </p>
    </div>
  </section>

  <!-- Programs grid -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
    <div class="grid gap-6 lg:gap-8 md:grid-cols-2">
      <programPackageCard
        v-for="pkg in programs"
        :key="pkg.title"
        v-bind="pkg"
      />
    </div>
  </section>

  <!-- Add-ons -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
        Add-Ons
      </h2>
      <p class="mt-3 text-lg text-gray-600">
        Individual options for students who prefer to mix and match.
      </p>
    </div>

    <div class="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
      <article
        v-for="addon in addons" :key="addon.title"
        class="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm"
      >
        <div class="flex items-start justify-between gap-x-4">
          <div class="flex items-center gap-x-3">
            <div class="flex justify-center items-center w-10 h-10 rounded-lg bg-teal-50 text-teal-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="addon.iconPath" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800">{{ addon.title }}</h3>
              <p v-if="addon.subtitle" class="text-sm text-gray-500">{{ addon.subtitle }}</p>
            </div>
          </div>
          <div class="text-right">
            <span class="text-3xl font-bold text-gray-900">${{ addon.price }}</span>
          </div>
        </div>

        <ul class="mt-5 space-y-2.5">
          <li
            v-for="feature in addon.features" :key="feature"
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

        <p v-if="addon.note" class="mt-5 text-sm italic text-gray-600 border-l-2 border-teal-300 pl-3">
          {{ addon.note }}
        </p>
      </article>
    </div>
  </section>

  <!-- Payment Policy & Important -->
  <section class="bg-gray-50 border-y border-gray-100 mt-10">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
      <div class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div class="flex items-center gap-x-3">
            <div class="flex justify-center items-center w-10 h-10 rounded-lg bg-teal-50 text-teal-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Payment Policy</h3>
          </div>
          <ul class="mt-4 space-y-2.5">
            <li
              v-for="item in paymentPolicy" :key="item"
              class="flex items-start gap-x-3 text-sm text-gray-700"
            >
              <span class="flex-shrink-0 mt-0.5 flex justify-center items-center w-5 h-5 rounded-full bg-teal-50 border border-teal-200">
                <svg class="w-3 h-3 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div class="flex items-center gap-x-3">
            <div class="flex justify-center items-center w-10 h-10 rounded-lg bg-amber-50 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Important</h3>
          </div>
          <ul class="mt-4 space-y-2.5">
            <li
              v-for="item in importantNotes" :key="item"
              class="flex items-start gap-x-3 text-sm text-gray-700"
            >
              <span class="flex-shrink-0 mt-0.5 flex justify-center items-center w-5 h-5 rounded-full bg-amber-50 border border-amber-200">
                <svg class="w-3 h-3 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-tl from-teal-700 to-green-600 px-6 py-12 sm:px-12 text-center">
      <h2 class="text-3xl font-bold text-white lg:text-4xl">
        Not sure which program is right for you?
      </h2>
      <p class="mt-4 text-teal-50 text-lg">
        Give us a call — we will help you pick the program that fits your experience and goals.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="tel:+16047254935"
          class="inline-flex items-center gap-x-2 bg-white text-teal-700 text-sm font-semibold rounded-md py-3 px-5 hover:bg-teal-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a.75.75 0 0 1-.91.273 12.05 12.05 0 0 1-5.58-5.58.75.75 0 0 1 .273-.91l1.293-.97c.362-.271.527-.733.417-1.173L6.52 3.352a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          604 725 4935
        </a>
      </div>
    </div>
  </section>
</div>
</template>

<script setup lang="ts">
import programPackageCard from '@/components/programPackageCard.vue'

const programs = [
  {
    tier: 'basic' as const,
    tierLabel: 'Single Lesson',
    title: 'Single Lesson',
    subtitle: '1 Hour',
    price: 90,
    features: [
      '1 driving lesson (1 hour)',
      'Introduction to the structured learning system',
      'Basic assessment of your current level',
      'Clear guidance on next steps',
    ],
  },
  {
    tier: 'starter' as const,
    tierLabel: 'Starter Program',
    title: 'Starter Program',
    subtitle: '10 Lessons',
    price: 850,
    features: [
      '10 structured driving lessons (1 hour each)',
      '10 video lessons (step-by-step explanations)',
      'Basic maneuver training',
      'Build foundational driving skills',
    ],
    paymentOptions: [
      { label: 'Full payment: $850' },
      { label: '2 payments', detail: '$445 at the start + $445 before lesson 5' },
    ],
  },
  {
    tier: 'standard' as const,
    tierLabel: 'Standard Program',
    title: 'Standard Program',
    subtitle: '15 Lessons',
    price: 1150,
    features: [
      '15 structured driving lessons (1 hour each)',
      'Ideal for students who can practice using their own vehicle',
      'Complete step-by-step driving training',
      'Full access to video learning system',
      'Build strong driving habits and consistency',
      'Option to add extra lessons if needed ($70/hour)',
    ],
    tip: 'Good option if you already have some experience, can practice independently, and have access to your own vehicle for the road test.',
    paymentOptions: [
      { label: 'Full payment: $1,150' },
      { label: '2 payments', detail: '$650 at the start (first 7 lessons) + $530 after lesson 7 (remaining 8 lessons)' },
    ],
  },
  {
    tier: 'complete' as const,
    tierLabel: 'Complete Program',
    title: 'Complete Program',
    subtitle: '20 Lessons',
    price: 1650,
    features: [
      'From zero experience to confident, test-ready driving',
      '20 structured driving lessons (1 hour each)',
      'Includes everything from the 15-lesson program, plus:',
      'Complete ICBC road test preparation online course',
      'Vehicle for the road test is included',
      'Option to add extra lessons if needed ($65/hour)',
    ],
    savings: {
      label: 'You save $328 — included in your program:',
      items: [
        'Road test vehicle — $179',
        'Online course — $149',
      ],
    },
    paymentOptions: [
      { label: 'Full payment: $1,650' },
      { label: '3 payments', detail: '$650 at the start (first 7 lessons) + $550 after lesson 7 (next 7 lessons) + $490 after lesson 13 (remaining 6 lessons)' },
    ],
    featured: true,
  },
]

const addons = [
  {
    title: 'Online Course',
    subtitle: 'Road Test Preparation',
    price: 149,
    iconPath: 'm15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z',
    features: [
      'Complete step-by-step guide to passing the ICBC road test',
      'Full video course covering all key test scenarios',
      'Parking, intersections, and real road situations',
      'Clear explanations of what to do and why',
      '3 months access',
    ],
    note: 'Ideal if you practice with your own vehicle.',
  },
  {
    title: 'Road Test Package',
    subtitle: 'Vehicle for your test',
    price: 179,
    iconPath: 'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9-1.5h10.5c.414 0 .75-.336.75-.75v-3.75a.75.75 0 0 0-.22-.53l-2.72-2.72a.75.75 0 0 0-.53-.22H3.75m0 0h16.5M3.75 17.25V5.625c0-.621.504-1.125 1.125-1.125h10.5a1.125 1.125 0 0 1 1.125 1.125V17.25m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026c0-.287-.11-.563-.305-.773l-2.72-2.92a.75.75 0 0 0-.55-.241h-1.125M19.5 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0',
    features: [
      'Car provided for your road test',
      'Final guidance before the test',
    ],
  },
]

const paymentPolicy = [
  'Flexible payment plans available',
  'Lessons continue as long as payments are up to date',
  'Full payment required before road test (for Complete program)',
]

const importantNotes = [
  'Access to the learning system is provided for 3 months',
  'Use of instructor\u2019s vehicle for road test is subject to readiness and safety',
  'Prepaid packages must be completed within 3 months',
]

useHead({
  title: 'Programs & Pricing | Check Driving School',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Structured driving programs from single lessons to the full 20-lesson ICBC road test package. Clear pricing, flexible payment plans, and transparent policies.',
    },
  ],
})
</script>
