<template>
  <div class="min-h-screen p-6">
    <header class="text-center mb-6">
      <h1 class="text-4xl font-bold text-gray-800">Company Policy</h1>
    </header>
    <main class="max-w-4xl mx-auto bg-white p-8 rounded-lg">
      <PolicySection 
        v-for="policy in policies" 
        :key="policy.title" 
        :title="policy.title" 
        :content="policy.content" 
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import PolicySection from '@/components/policySection.vue'

interface Policy {
  title: string
  content: string
}

const { data: policies } = await useFetch<Policy[]>('/policies.json', { server: false })
</script>
