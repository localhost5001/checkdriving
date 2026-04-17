<template>
  <div>
    <section>
      <greetingPage @scroll-to-price="scrollToPrice" />
    </section>

    <section>
      <onlineTraining />
    </section>

    <section>
      <structuredSystem />
    </section>

    <section>
      <learningPath />
    </section>

    <section>
      <resultSection />
    </section>

    <section>
      <programCta @scroll-to-price="scrollToPrice" />
    </section>

    <section ref="pricingRef">
      <pricing />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import pricing from '@/components/pricing.vue'
import greetingPage from '@/components/greetingPage.vue'
import onlineTraining from '@/components/onlineTraining.vue'
import structuredSystem from '@/components/structuredSystem.vue'
import learningPath from '@/components/learningPath.vue'
import resultSection from '@/components/resultSection.vue'
import programCta from '@/components/programCta.vue'

const pricingRef = ref<HTMLElement | null>(null)

const scrollToPrice = () => {
  if (pricingRef.value) {
    pricingRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
