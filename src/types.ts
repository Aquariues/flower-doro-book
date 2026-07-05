// Field names match the backend JSON tags in
// ../flower-doro-api/internal/models/models.go — do not rename.

export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary'

export interface Flower {
  id: number
  kind: string
  sort_order: number
  english_name: string
  vietnamese_name: string
  english_description: string
  vietnamese_description: string
  english_fact_1: string
  english_fact_2: string
  english_fact_3: string
  vietnamese_fact_1: string
  vietnamese_fact_2: string
  vietnamese_fact_3: string
  rarity: Rarity
  asset_name: string
}

export interface FlowerBookEntry {
  flower: Flower
  unlocked: boolean
  collected_count: number
}

export interface FlowerBookResponse {
  flowers: FlowerBookEntry[]
  total: number
  unlocked_total: number
}

export type Locale = 'en' | 'vi'

export function flowerName(flower: Flower, locale: Locale): string {
  return locale === 'vi' ? flower.vietnamese_name : flower.english_name
}

export function flowerDescription(flower: Flower, locale: Locale): string {
  return locale === 'vi' ? flower.vietnamese_description : flower.english_description
}

export function flowerFacts(flower: Flower, locale: Locale): string[] {
  const facts =
    locale === 'vi'
      ? [flower.vietnamese_fact_1, flower.vietnamese_fact_2, flower.vietnamese_fact_3]
      : [flower.english_fact_1, flower.english_fact_2, flower.english_fact_3]
  return facts.filter(Boolean)
}
