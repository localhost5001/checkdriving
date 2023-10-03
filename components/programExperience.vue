<template>
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <h5 class="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
    Program Experience
  </h5>
  <div class="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <div v-for="item in items" class="px-12 text-center sm:px-0">
      <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-500 sm:w-12 sm:h-12">
        <svg fill="#000000" class="fill-slate-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>
      </div>
      <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
        {{ item.title }}
      </h6>
      <div class="mb-2 ">
        {{ item.description }}
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const items = [
  { 
    title: 'Dual-Pedal Automatic Car', 
    description: 'Master driving in a secure environment' 
  },
  { title: 'Bilingual Instruction', description: 'Russian, English' },
  { 
    title: 'Flexible Schedule', 
    description: 'Day or night, weekends, holidays-year-round' 
  },
  { 
    title: 'Door-to-Door', 
    description: 'Instructor picks up and drops off at your convenience' 
  },
  { 
    title: 'Effective Homework', 
    description: 'Custom assignments for rapid improvement' 
  },
  { 
    title: 'Positive Environment', 
    description: 'Learn in a friendly, encouraging atmosphere' 
  },
]
</script>
