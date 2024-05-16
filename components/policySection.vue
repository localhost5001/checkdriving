<template>
  <section class="mb-6">
    <h2 class="text-2xl font-semibold text-gray-700 mb-2">{{ title }}</h2>
    <p class="text-gray-600 whitespace-pre-line">{{ content }}</p>
  </section>
</template>

<script>
export default {
  name: 'PolicySection',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
section {
  @apply border-b border-gray-200 pb-4;
}
</style>