// stores/products.ts
import { defineStore } from 'pinia'

type Product = {
  name: string
  current_price: number
  previous_price?: number
  retailer: { name: string; slug: { current: string } }
  categories: { title: string }[]
}

export const useProductStore = defineStore('products', () => {
  const search = ref('')
  const results = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const compareProducts = async () => {
    if (!search.value.trim()) return

    loading.value = true
    error.value = null

    try {
      const query = encodeURIComponent(search.value + '*')
      const res = await fetch(`/api/query/${query}`)
      const data = await res.json()

      if (!res.ok) throw new Error(data.message || 'Fetch error')

      results.value = data.products || []
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    search,
    results,
    loading,
    error,
    compareProducts,
  }
})
