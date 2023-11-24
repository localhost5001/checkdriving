<template>
<div class="flex flex-col items-center">
  <p class="text-3xl font-semibold text-teal-500">{{ title }}</p>
  <p class="mt-1 text-gray-500">{{ description }}</p>
</div>
</template>

<script setup lang="ts">

const { description, title } = defineProps<{
  title: string
  description: string
}>()

</script>
