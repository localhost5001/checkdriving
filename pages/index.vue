<template>
  <div>
    <section>
      <greetingPage />
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
      <programCta />
    </section>
  </div>
</template>

<script setup lang="ts">
import greetingPage from '@/components/greetingPage.vue'
import onlineTraining from '@/components/onlineTraining.vue'
import structuredSystem from '@/components/structuredSystem.vue'
import learningPath from '@/components/learningPath.vue'
import resultSection from '@/components/resultSection.vue'
import programCta from '@/components/programCta.vue'
</script>
