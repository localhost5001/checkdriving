<template>
<!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl mx-auto">
    <!-- Grid -->
    <div class="grid gap-12">
      <div>
        <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl text-center">
          Program Experience
        </h2>
        <p class="mt-3 text-lg text-gray-600 text-center">
          We offer top-notch driving education with a focus on your comfort and success. Our driving school features:
        </p>
      </div>

      <div class="grid grid-cols-2 gap-5">
        <ProgramExperienceItem 
          v-for="item in items" 
          :key="item.title" 
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Icon Blocks -->
</template>

<script setup lang="ts">
import ProgramExperienceItem from '@/components/programExperienceItem.vue'

const items = [
  { 
    title: 'Dual-Pedal Automatic Car', 
    description: 'Master driving in a secure environment' 
  },
  { 
    title: 'Bilingual Instruction', 
    description: 'Russian, English' 
  },
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
