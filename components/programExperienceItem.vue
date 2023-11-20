<template>
<div class="text-center">
  <div class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
    <svg 
      class="flex-shrink-0 w-5 h-5 text-teal-600 " xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" stroke-width="3" 
      stroke-linecap="round" stroke-linejoin="round">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  </div>
  <div class="mt-3">
    <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
    <p class="mt-1 text-gray-600">{{ description }}</p>
  </div>
</div>  
</template>

<script setup lang="ts">
const {title} = defineProps<{
  title: string
  description: string
}>()
</script>