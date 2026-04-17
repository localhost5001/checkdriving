<template>
<div>
  <!-- Hero -->
  <section class="relative overflow-hidden">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.teal.100),transparent_60%)]"
      aria-hidden="true"
    />
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 text-center">
      <span class="inline-flex items-center gap-x-2 py-1 px-3 rounded-full text-xs font-medium bg-white border border-teal-200 text-teal-700">
        Our Teaching Method
      </span>
      <h1 class="mt-5 block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
        The
        <span class="bg-clip-text bg-gradient-to-tl from-teal-700 to-green-600 text-transparent">Check Driving</span>
        Method
      </h1>
      <p class="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
        Driving is more than a physical skill. Our method develops understanding, composure,
        and execution — together, step by step.
      </p>
    </div>
  </section>

  <!-- Three components of driving -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
        Driving Is More Than a Physical Skill
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Driving involves three essential components. Consistent, safe driving becomes possible
        only when all three work together.
      </p>
    </div>

    <div class="mt-12 grid gap-6 sm:grid-cols-3">
      <article
        v-for="c in components" :key="c.title"
        class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
      >
        <div class="mx-auto flex justify-center items-center w-12 h-12 rounded-lg bg-teal-50 text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" :d="c.path" />
          </svg>
        </div>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">{{ c.title }}</h3>
        <p class="mt-2 text-gray-600">{{ c.description }}</p>
      </article>
    </div>
  </section>

  <!-- Why many students struggle -->
  <section class="bg-gray-50 border-y border-gray-100">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
          Why Many Students Struggle
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          At the beginning, most students face two main challenges:
        </p>
      </div>

      <div class="mt-10 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
        <article
          v-for="(ch, idx) in challenges" :key="ch.title"
          class="flex items-start gap-x-4 bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
        >
          <div class="flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-lg bg-amber-50 text-amber-600 font-semibold">
            {{ String(idx + 1).padStart(2, '0') }}
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-800">{{ ch.title }}</h3>
            <p class="mt-1 text-gray-600">{{ ch.description }}</p>
          </div>
        </article>
      </div>

      <p class="mt-8 max-w-2xl mx-auto text-center text-gray-600">
        At this stage, it becomes difficult to fully analyze situations and make clear decisions.
      </p>

      <div class="mt-10 max-w-3xl mx-auto bg-white border border-teal-200 rounded-2xl p-6 lg:p-8 shadow-sm">
        <p class="text-gray-700">
          As your skills improve, more actions become automatic.
          This frees up attention and allows you to:
        </p>
        <ul class="mt-4 grid gap-3 sm:grid-cols-3">
          <li
            v-for="benefit in improvementBenefits" :key="benefit"
            class="flex items-start gap-x-3 text-gray-700"
          >
            <span class="flex-shrink-0 mt-0.5 flex justify-center items-center w-6 h-6 rounded-full bg-teal-50 border border-teal-200">
              <svg class="w-3.5 h-3.5 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            <span class="text-sm leading-snug">{{ benefit }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Structured system for every stage -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
        A Structured System for Every Stage
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        The Check Driving method develops all three components step by step,
        creating a balanced and effective learning process.
      </p>
      <p class="mt-3 text-gray-600">
        Driving is broken down into clearly defined situations — from basic maneuvers to complex
        real-world scenarios — each with a clear, structured algorithm of actions.
      </p>
      <p class="mt-6 font-semibold text-gray-800">Instead of guessing, you learn:</p>
    </div>

    <div class="mt-8 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
      <article
        v-for="w in whatWhenHow" :key="w.title"
        class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="flex justify-center items-center w-10 h-10 rounded-lg bg-gradient-to-tl from-teal-700 to-green-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" :d="w.path" />
          </svg>
        </div>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">{{ w.title }}</h3>
        <p class="mt-2 text-gray-600">{{ w.description }}</p>
      </article>
    </div>

    <p class="mt-10 max-w-2xl mx-auto text-center text-gray-600 italic">
      A consistent, structured approach for virtually any road situation.
    </p>
  </section>

  <!-- From understanding to execution -->
  <section class="bg-gradient-to-b from-white to-teal-50 border-y border-gray-100">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
          From Understanding to Execution
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Each step is first explained through structured online sessions,
          then practiced in the car until it becomes consistent.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-[1fr_auto_1fr] items-stretch max-w-4xl mx-auto">
        <article class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
          <div class="flex justify-center items-center w-12 h-12 rounded-lg bg-teal-50 text-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div>
          <p class="mt-4 text-xs font-semibold uppercase tracking-wider text-teal-700">Step 1</p>
          <h3 class="mt-1 text-lg font-semibold text-gray-800">Understand Online</h3>
          <p class="mt-2 text-gray-600">
            Structured video lessons and online sessions explain the situation,
            the algorithm, and the "why" — before you ever practice it.
          </p>
        </article>

        <div class="hidden sm:flex items-center justify-center text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>

        <article class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
          <div class="flex justify-center items-center w-12 h-12 rounded-lg bg-teal-50 text-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9-1.5h10.5c.414 0 .75-.336.75-.75v-3.75a.75.75 0 0 0-.22-.53l-2.72-2.72a.75.75 0 0 0-.53-.22H3.75m0 0h16.5M3.75 17.25V5.625c0-.621.504-1.125 1.125-1.125h10.5a1.125 1.125 0 0 1 1.125 1.125V17.25m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026c0-.287-.11-.563-.305-.773l-2.72-2.92a.75.75 0 0 0-.55-.241h-1.125M19.5 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0" />
            </svg>
          </div>
          <p class="mt-4 text-xs font-semibold uppercase tracking-wider text-teal-700">Step 2</p>
          <h3 class="mt-1 text-lg font-semibold text-gray-800">Apply Behind the Wheel</h3>
          <p class="mt-2 text-gray-600">
            In the car, you execute the algorithm in real situations — repeating it
            until your actions become consistent and automatic.
          </p>
        </article>
      </div>

      <p class="mt-10 max-w-2xl mx-auto text-center text-xl font-semibold text-gray-800">
        You don't just repeat — you understand and apply.
      </p>
    </div>
  </section>

  <!-- Why this approach works -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
        Why This Approach Works
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        With a structured system in place:
      </p>
    </div>

    <div class="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
      <article
        v-for="w in whyItWorks" :key="w.title"
        class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
      >
        <div class="mx-auto flex justify-center items-center w-12 h-12 rounded-full bg-teal-50 border border-teal-200">
          <svg class="w-6 h-6 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">{{ w.title }}</h3>
        <p class="mt-2 text-gray-600">{{ w.description }}</p>
      </article>
    </div>

    <p class="mt-10 max-w-2xl mx-auto text-center text-lg text-gray-700">
      Learning becomes more
      <span class="font-semibold text-gray-900">focused, efficient, and predictable.</span>
    </p>
  </section>

  <!-- CTA -->
  <section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-tl from-teal-700 to-green-600 px-6 py-12 sm:px-12 sm:py-16 text-center">
      <div class="relative max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-white lg:text-4xl">
          Ready to try the method?
        </h2>
        <p class="mt-4 text-teal-50 text-lg">
          Start with a single lesson or choose a full program — the structured approach
          works from the very first session.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <NuxtLink
            to="/pricing"
            class="inline-flex items-center gap-x-2 bg-white text-teal-700 text-sm font-semibold rounded-md py-3 px-5 hover:bg-teal-50"
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
  </section>
</div>
</template>

<script setup lang="ts">
const components = [
  {
    title: 'Intellectual',
    description: 'Understanding what to do and why — the reasoning behind every maneuver.',
    path: 'M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  },
  {
    title: 'Emotional',
    description: 'Staying calm and controlled under pressure, even in unexpected situations.',
    path: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
  },
  {
    title: 'Physical',
    description: 'Executing actions accurately and smoothly — steering, braking, positioning.',
    path: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  },
]

const challenges = [
  {
    title: 'Controlling the vehicle',
    description: 'Steering, speed, and positioning all demand attention at once.',
  },
  {
    title: 'Managing stress and emotions',
    description: 'Nerves make it harder to think clearly and react on time.',
  },
]

const improvementBenefits = [
  'Better understand situations',
  'Make more accurate decisions',
  'Respond correctly and on time',
]

const whatWhenHow = [
  {
    title: 'What to do',
    description: 'The correct action for each defined situation.',
    path: 'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z',
  },
  {
    title: 'When to do it',
    description: 'The right moment — neither too early nor too late.',
    path: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    title: 'How to do it',
    description: 'The precise sequence of steering, braking, and positioning.',
    path: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
  },
]

const whyItWorks = [
  {
    title: 'Situations become easier to recognize',
    description: 'Patterns repeat — once you know them, you see them coming.',
  },
  {
    title: 'Decisions become clearer',
    description: 'A structured algorithm removes hesitation and second-guessing.',
  },
  {
    title: 'Actions become more consistent',
    description: 'Repetition with understanding builds reliable, automatic execution.',
  },
]

useHead({
  title: 'The Check Driving Method | Structured Driver Training in Richmond',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'The Check Driving method builds intellectual, emotional, and physical driving skills through a structured, step-by-step system — from online understanding to confident execution.',
    },
  ],
})
</script>
