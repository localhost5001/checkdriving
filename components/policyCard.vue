<template>
<article class="relative bg-white border border-gray-200 rounded-xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow">
  <div class="flex items-start gap-x-4">
    <div class="flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-lg bg-gradient-to-tl from-teal-700 to-green-600 text-white font-semibold">
      {{ index }}
    </div>
    <div class="flex-1 min-w-0">
      <h2 class="text-xl font-semibold text-gray-800 leading-tight">
        {{ title }}
      </h2>
    </div>
  </div>

  <div class="mt-4 space-y-3 text-gray-700">
    <p v-for="(p, i) in paragraphs" :key="`p-${i}`" class="leading-relaxed">
      {{ p }}
    </p>

    <ul
      v-if="bullets && bullets.length"
      class="space-y-2 pl-1"
    >
      <li v-for="bullet in bullets" :key="bullet" class="flex items-start gap-x-3">
        <span class="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500" />
        <span>{{ bullet }}</span>
      </li>
    </ul>

    <div
      v-for="sub in subsections"
      :key="sub.title"
      class="mt-4 pt-4 border-t border-gray-100"
    >
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-wider">
        {{ sub.title }}
      </p>
      <p class="mt-2 leading-relaxed">{{ sub.body }}</p>
    </div>
  </div>
</article>
</template>

<script setup lang="ts">
defineProps<{
  index: number
  title: string
  paragraphs?: string[]
  bullets?: string[]
  subsections?: { title: string, body: string }[]
}>()
</script>
