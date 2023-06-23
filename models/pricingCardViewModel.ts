import type { Rate } from '@/models/rate'

export interface PricingCardViewModel {
  title: string
  rates: Rate[]
}