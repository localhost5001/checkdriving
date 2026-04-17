<template>
<div class="bg-gradient-to-b from-white to-teal-50 border-y border-gray-100">
  <div class="max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 lg:py-20 mx-auto">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
        The Result
      </h2>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
      <StatItem
        v-for="stat in stats"
        :key="stat.title"
        :title="stat.title"
        :description="stat.description"
      />
    </div>

    <p class="mt-10 text-center text-lg text-gray-700">
      And most importantly —
      <span class="font-semibold text-gray-900">confidence during your road test.</span>
    </p>
  </div>
</div>
</template>

<script setup lang="ts">
import StatItem from '@/components/statItem.vue'

const stats = [
  { title: 'Faster', description: 'learning' },
  { title: 'Fewer', description: 'lessons' },
  { title: 'Better', description: 'results' },
]
</script>
