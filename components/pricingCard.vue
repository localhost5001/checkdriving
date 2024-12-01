<template>
  <div
    class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5"
  >
    <div class="text-center mb-2 lg:mb-6 h-22 lg:h-24">
      <span class="text-2xl font-bold text-gray-800">{{ title }}</span>
      <p class="text-sm font-bold text-gray-500 mt-2">{{ note }}</p>
    </div>
    <div class="py-4">
      <ul>
        <li v-for="rate in rates" class="mb-4 h-22">
          <div class="divider"></div>
          <div class="grid grid-cols-2 items-center">
            <span class="text-left">
              {{ rate.description }}
            </span>

            <div class="text-right">
              <span class="badge">
                ${{ priceWithDiscount(rate.amount, rate.discount) }}
              </span>
            </div>
          </div>
          <p v-if="rate.note" class="text-sm text-gray-500 mt-1">
            {{ rate.note }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Rate } from "@/models/rate";

const { title, note } = defineProps<{
  title: string;
  note?: string;
  rates: (Rate & { note?: string })[];
}>();

const priceWithDiscount = (amount: number, discount?: number) => {
  return discount ? amount - (amount * discount) / 100 : amount;
};
</script>
