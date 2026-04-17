<template>
<div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 mx-auto">
  <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    <div>
      <span class="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider">
        Before You Get Behind the Wheel
      </span>
      <h2 class="mt-2 text-3xl text-gray-800 font-bold lg:text-4xl">
        Online Training That Accelerates Your Progress
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Through structured video lessons and online sessions, you learn
        <span class="font-semibold text-gray-800">what to do and why</span>
        before getting behind the wheel.
      </p>

      <ul class="mt-6 space-y-3">
        <li v-for="bullet in bullets" :key="bullet" class="flex items-start gap-x-3 text-gray-700">
          <span class="flex-shrink-0 mt-0.5 flex justify-center items-center w-6 h-6 rounded-full bg-teal-50 border border-teal-200">
            <svg class="w-3.5 h-3.5 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <span>{{ bullet }}</span>
        </li>
      </ul>

      <p class="mt-6 text-gray-600 italic">
        Instead of guessing on the road, you arrive prepared.
      </p>
    </div>

    <div class="relative">
      <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:p-8">
        <div class="flex items-center gap-x-3 pb-4 border-b border-gray-100">
          <div class="flex justify-center items-center w-10 h-10 rounded-lg bg-teal-50 text-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-800">Pre-Lesson Video</p>
            <p class="text-xs text-gray-500">Watch before your next lesson</p>
          </div>
        </div>

        <ul class="mt-4 space-y-3">
          <li v-for="(module, idx) in modules" :key="module" class="flex items-center gap-x-3">
            <span class="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
              {{ idx + 1 }}
            </span>
            <span class="text-sm text-gray-700">{{ module }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const bullets = [
  'Understand each maneuver before practicing',
  'Avoid confusion while driving',
  'Make faster progress during real lessons',
]

const modules = [
  'Vehicle control basics',
  'Lane positioning & signals',
  'Intersections explained',
  'Parallel & stall parking',
]
</script>
