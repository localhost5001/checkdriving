<template>
  <div class="
      felx flex-col overflow-hidden border-2 rounded-md 
      border-gray-700 p-5"
    >
    <div class="text-center m-5">
      <span class="text-2xl font-bold">{{ title }}</span>
    </div>
    <div class="py-4">
      <ul>
        <li v-for="rate in rates">
          <div class="divider"></div>
          <div class="grid grid-cols-2 place-content-between">
            <span class="text-left mx-1">
              {{ rate.description }}
            </span>
            
              <div class="text-right mx-1">
              <span class="badge badge-primary">
                {{ priceWithDiscount(rate.amount, rate.discount) }}$
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Rate } from '@/models/rate'

const {title} = defineProps<{
  title: string
  rates: Rate[]
}>()

const priceWithDiscount = (amount: number, discount?: number) => {
  return discount ? amount - (amount * discount) / 100 : amount
}

</script>
