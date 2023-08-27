<template>
  <div class="min-h-screen">
    <ProgramExperience />
    <div class="hero">
      <div class="hero-content text-center text-neutral-content">
        <button class="btn bg-blue-500" @click="emit('scrollToPrice')">Rates & Pricing</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgramExperience from './programExperience.vue'

const emit = defineEmits<{
  (e: 'scrollToPrice'): void
}>()
</script>
