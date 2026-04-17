<template>
<div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 mx-auto">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
      A Step-by-Step Learning System
    </h2>
    <p class="mt-4 text-lg text-gray-600">
      Every lesson is part of a clear progression.
      You build skills step by step — from control to decision-making.
    </p>
  </div>

  <ol class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
    <li
      v-for="(step, idx) in steps"
      :key="step.title"
      class="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div class="flex justify-center items-center w-10 h-10 rounded-lg bg-gradient-to-tl from-teal-700 to-green-600 text-white font-semibold">
        {{ idx + 1 }}
      </div>
      <h3 class="mt-4 text-lg font-semibold text-gray-800">{{ step.title }}</h3>
      <p class="mt-2 text-gray-600">{{ step.description }}</p>
    </li>
  </ol>
</div>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Vehicle Control',
    description: 'Master steering, braking, and positioning — the foundation of safe driving.',
  },
  {
    title: 'Parking & Maneuvering',
    description: 'Parallel, stall, and hill parking practiced until they become second nature.',
  },
  {
    title: 'Intersections',
    description: 'Decision-making at lights, stop signs, and busy urban crossings.',
  },
  {
    title: 'Real Road Situations',
    description: 'Highway merges, weather, traffic — the skills your road test will test.',
  },
]
</script>
