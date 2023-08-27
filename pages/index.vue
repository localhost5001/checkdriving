<template>
  <div>
    <section>
      <greetingPage ref="greetingPageRef" @scroll-to-price="scrollToPrice"/>
    </section>
    <section ref="pricingRef">
      <pricing/>
    </section>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

import pricing from '@/components/pricing.vue'
import navBar from '@/components/navBar.vue'
import greetingPage from '@/components/greetingPage.vue'

const greetingPageRef = ref<HTMLElement | null>(null)
const pricingRef = ref<HTMLElement | null>(null)
  
const scrollToPrice = () => {
  if (pricingRef.value) {
    pricingRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
  