<template>
<div class="hero min-h-screen" style="background-image: url(/img/vancouver.jpeg);">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Check Driving School</h1>
      <p class="mb-5 font-semibold text-lg">Master the Art of Driving, Unleash Your Freedom!</p>
      <button class="btn btn-primary" @click="emit('scrollToPrice')">Rates & Pricing</button>
      <p class="font-semibold text-lg">Contact us at:</p>
      <span>Phone: </span>
      <a href="tel:+16047254935" class="text-blue-500 font-medium mx-1 normal-case text-base">
        604 725 4935
      </a>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'scrollToPrice'): void
}>()
</script>
