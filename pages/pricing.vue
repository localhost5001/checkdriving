<template>
<div>
  <!-- Hero -->
  <section class="relative overflow-hidden">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.teal.100),transparent_60%)]"
      aria-hidden="true"
    />
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
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

  <!-- Meeting Point -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
    <div class="max-w-2xl mx-auto bg-white border border-teal-200 rounded-xl p-5 flex items-center gap-x-4 shadow-sm">
      <div class="flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-lg bg-teal-50 text-teal-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <div>
        <h3 class="font-bold text-gray-800">Convenient Meeting Point</h3>
        <p class="text-gray-600 text-sm mt-0.5">
          Pick-up and drop-off at
          <strong class="text-gray-800">Lansdowne SkyTrain Station</strong>
          for all lessons.
        </p>
      </div>
    </div>
  </section>

  <!-- Single Lesson -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div class="max-w-md mx-auto">
      <programPackageCard v-bind="singleLesson" />
    </div>
  </section>

  <!-- Driving Programs intro -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
        Driving Programs
      </h2>
      <p class="mt-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
        Pass your ICBC road test with confidence
      </p>
      <ul class="mt-6 inline-flex flex-col gap-y-2 text-left text-gray-700">
        <li
          v-for="point in programIntro" :key="point"
          class="flex items-start gap-x-3"
        >
          <span class="flex-shrink-0 mt-0.5 flex justify-center items-center w-5 h-5 rounded-full bg-teal-50 border border-teal-200">
            <svg class="w-3 h-3 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <span>{{ point }}</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- Programs grid -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
    <div class="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
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

  <!-- Important -->
  <section class="bg-gray-50 border-y border-gray-100 mt-10">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
      <div class="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
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

const singleLesson = {
  tier: 'basic' as const,
  tierLabel: 'Single Lesson',
  title: 'Single Lesson',
  price: 80,
  features: [
    'Try one lesson before committing',
    'Get a basic assessment of your level',
    'Understand how the system works',
  ],
  tip: 'Most students choose a full program to progress faster.',
}

const programIntro = [
  'Structured step-by-step system',
  'No random lessons',
  'Clear instructions for every situation',
]

const programs = [
  {
    tier: 'starter' as const,
    tierLabel: 'Starter Program',
    title: 'Starter Program',
    subtitle: '10 Lessons',
    price: 700,
    priceNote: '$70 per lesson',
    features: [
      '10 structured driving lessons (1 hour each)',
      'Basic maneuver training',
      'Build a strong foundation of driving skills',
    ],
    savings: { label: 'Save $100' },
  },
  {
    tier: 'standard' as const,
    tierLabel: 'Standard Program',
    title: 'Standard Program',
    subtitle: '15 Lessons',
    price: 975,
    priceNote: '$65 per lesson',
    features: [
      '15 structured driving lessons (1 hour each)',
      'Complete step-by-step training system',
      'Build confidence and consistency',
    ],
    savings: { label: 'Save $225' },
  },
  {
    tier: 'complete' as const,
    tierLabel: 'Complete Program',
    title: 'Complete Program',
    subtitle: '20 Lessons',
    price: 1200,
    priceNote: '$60 per lesson',
    features: [
      'From beginner to a confident, test-ready driver',
      '20 structured driving lessons (1 hour each)',
      'Step-by-step system for faster learning',
      'Full ICBC road test preparation',
    ],
    savings: { label: 'Save $400' },
    featured: true,
  },
]

const addons = [
  {
    title: 'Online Course',
    subtitle: 'ICBC Road Test Preparation',
    price: 99,
    iconPath: 'm15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z',
    features: [
      'Step-by-step guide to passing the ICBC road test',
      'Covers all key test situations',
      'Parking, intersections, real road scenarios',
      'Clear explanations of what to do and why',
    ],
    note: 'Ideal if you practice with your own vehicle.',
  },
  {
    title: 'Road Test Vehicle Rental',
    subtitle: 'For your ICBC road test',
    price: 145,
    iconPath: 'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9-1.5h10.5c.414 0 .75-.336.75-.75v-3.75a.75.75 0 0 0-.22-.53l-2.72-2.72a.75.75 0 0 0-.53-.22H3.75m0 0h16.5M3.75 17.25V5.625c0-.621.504-1.125 1.125-1.125h10.5a1.125 1.125 0 0 1 1.125 1.125V17.25m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026c0-.287-.11-.563-.305-.773l-2.72-2.92a.75.75 0 0 0-.55-.241h-1.125M19.5 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0',
    features: [
      'Vehicle equipped with dual pedals',
      'Vehicle provided at your road test location',
      'Familiar car you trained on',
    ],
  },
]

const importantNotes = [
  'Road test vehicle is subject to student readiness and instructor approval.',
  'Prepaid packages must be completed within 3 months.',
]

useHead({
  title: 'Programs & Pricing | Check Driving School',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Single lessons, 10/15/20-lesson programs, online ICBC road test course, and road test vehicle rental. Pick-up and drop-off at Lansdowne SkyTrain Station.',
    },
  ],
})
</script>
