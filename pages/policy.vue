<template>
<div>
  <section class="relative overflow-hidden">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.teal.100),transparent_60%)]"
      aria-hidden="true"
    />
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
      <span class="inline-flex items-center gap-x-2 py-1 px-3 rounded-full text-xs font-medium bg-white border border-teal-200 text-teal-700">
        Official Company Policy
      </span>
      <h1 class="mt-5 block font-bold text-gray-800 text-4xl md:text-5xl">
        Check Drive
        <span class="bg-clip-text bg-gradient-to-tl from-teal-700 to-green-600 text-transparent">
          Company Policy
        </span>
      </h1>
      <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
        Clear, fair terms so every lesson and road test runs smoothly — for both students and instructors.
      </p>
    </div>
  </section>

  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <div class="grid gap-6 lg:grid-cols-2">
      <policyCard
        v-for="(policy, idx) in policies"
        :key="policy.title"
        :index="idx + 1"
        :title="policy.title"
        :paragraphs="policy.paragraphs"
        :bullets="policy.bullets"
        :subsections="policy.subsections"
      />
    </div>
  </section>

  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-tl from-teal-700 to-green-600 px-6 py-10 sm:px-10 text-center">
      <h2 class="text-2xl font-bold text-white lg:text-3xl">
        Questions about the policy?
      </h2>
      <p class="mt-2 text-teal-50">
        We are happy to clarify anything before your first lesson.
      </p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
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
import policyCard from '@/components/policyCard.vue'

interface PolicyItem {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  subsections?: { title: string, body: string }[]
}

const policies: PolicyItem[] = [
  {
    title: 'Payment Policy',
    paragraphs: [
      'Payment is due at the end of each driving lesson or prior to the start of a road test session.',
    ],
  },
  {
    title: 'Fees & Lesson Structure',
    bullets: [
      'Regular Driving Lesson: $90.00 per hour',
      'Car Rental for Road Test: $179.00',
    ],
    paragraphs: [
      'Each driving lesson has a minimum duration of 1 hour.',
      'Each road test session has a minimum duration of 1 hour.',
    ],
  },
  {
    title: 'Driver\u2019s License Requirements',
    paragraphs: [
      'Students must present a valid BC Learner\u2019s Driver\u2019s License, BC Driver\u2019s License, or a valid foreign driver\u2019s license before the first lesson.',
      'Students must carry their valid license during each lesson.',
    ],
  },
  {
    title: 'Use of Vehicle for Road Test',
    paragraphs: [
      'Use of the school vehicle must be requested and confirmed in advance.',
      'The instructor reserves the right to decline vehicle use if the student is not adequately prepared. This decision is made in the interest of safety and compliance with ICBC standards.',
      'Students may take the test using another vehicle if preferred.',
    ],
  },
  {
    title: 'Cancellation Policy',
    paragraphs: [
      'Minimum 24 hours\u2019 notice is required.',
      'Late cancellations will incur a $30 fee.',
    ],
  },
  {
    title: 'Late Arrival Policy (Student)',
    paragraphs: [
      'Lessons end at the scheduled time.',
      'Lesson time will be reduced accordingly.',
      'Full fee applies.',
    ],
  },
  {
    title: 'Instructor Delay Policy',
    paragraphs: [
      'Delays may occur due to traffic.',
      'Lost time will be added to ensure full lesson time.',
    ],
  },
  {
    title: 'No-Show Policy',
    paragraphs: [
      'Failure to attend without notice results in a full lesson charge.',
    ],
  },
  {
    title: 'Prepaid Package Policy',
    bullets: [
      '15-lesson package: must be completed within 3 months',
      '20-lesson package: must be completed within 4 months',
    ],
    paragraphs: [
      'Unused lessons beyond the applicable period may be forfeited.',
    ],
    subsections: [
      {
        title: 'Refund Policy',
        body: 'In the event of a refund, all completed lessons will be recalculated at the standard hourly rate.',
      },
    ],
  },
]
</script>
