<template>
  <form @submit.prevent="handleSubmit" class="w-full max-w-3xl px-4">
    <div class="bg-white border border-black rounded-xl px-4 py-3">

      <!-- Row 1: Search input with button inside -->
      <div class="relative mb-3">
        <input v-model="searchQuery" placeholder="Krema"
          class="w-full pr-10 pl-4 py-2 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500" />
        <button type="submit"
          class="absolute top-1/2 right-1 transform -translate-y-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
          <Icon name="simple-line-icons:magic-wand" size="16" />
        </button>
      </div>

      <!-- Row 2: Unified full-width pill with ellipsis inside dropdowns only -->
      <div class="w-full flex rounded-full overflow-hidden border border-gray-300 text-sm whitespace-nowrap">
        <!-- Category -->
        <div class="flex items-center flex-1 border-r border-gray-300 min-w-0">
          <span class="pl-2 pr-1">🏷️</span>
          <select v-model="selectedCategory"
            class="flex-1 bg-transparent py-1 pr-2 focus:outline-none truncate text-ellipsis min-w-0">
            <option value="">Category</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>

        <!-- Retailer -->
        <div class="flex items-center flex-1 border-r border-gray-300 min-w-0">
          <span class="pl-2 pr-1">🏬</span>
          <select v-model="selectedRetailer"
            class="flex-1 bg-transparent py-1 pr-2 focus:outline-none truncate text-ellipsis min-w-0">
            <option value="">Retailer</option>
            <option v-for="ret in retailers" :key="ret" :value="ret">{{ ret }}</option>
          </select>
        </div>

        <!-- Min Price -->
        <div class="flex items-center flex-1 border-r border-gray-300 min-w-0">
          <span class="pl-2 pr-1">💶</span>
          <input v-model="minPrice" type="number"
            class="flex-1 bg-transparent py-1 pr-2 focus:outline-none truncate min-w-0" placeholder="Min" />
        </div>

        <!-- Max Price -->
        <div class="flex items-center flex-1 min-w-0">
          <span class="pl-2 pr-1">💰</span>
          <input v-model="maxPrice" type="number"
            class="flex-1 bg-transparent py-1 pr-2 focus:outline-none truncate min-w-0" placeholder="Max" />
        </div>
      </div>

      <!-- Row 3: Filter Chips -->
      <div class="hidden flex-wrap gap-2">
        <div v-for="tag in selectedFilters" :key="tag.label"
          class="bg-gray-200 text-sm px-3 py-1 rounded-full flex items-center gap-2">
          {{ tag.label }}
          <button @click="removeTag(tag)" class="text-xs text-gray-600 hover:text-red-600">×</button>
        </div>
      </div>

    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useProductStore } from '~/stores/products'

const productStore = useProductStore()

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedRetailer = ref('')
const minPrice = ref('')
const maxPrice = ref('')

const categories = ['Home Section', 'Electronics', 'Beauty']
const retailers = ['EuroSping', 'Konzum', 'Spar']

const selectedFilters = ref<{ label: string; type: string }[]>([])

const addOrUpdateTag = (label: string, type: string) => {
  // Remove previous tag of the same type
  selectedFilters.value = selectedFilters.value.filter(t => t.type !== type)
  if (label) {
    selectedFilters.value.push({ label, type })
  }
}

const removeTag = (tagToRemove: any) => {
  selectedFilters.value = selectedFilters.value.filter((t) => t.label !== tagToRemove.label)

  // Reset the corresponding value
  if (tagToRemove.type === 'category') selectedCategory.value = ''
  if (tagToRemove.type === 'retailer') selectedRetailer.value = ''
}

watch(selectedCategory, (val) => addOrUpdateTag(val, 'category'))
watch(selectedRetailer, (val) => addOrUpdateTag(val, 'retailer'))


const handleSubmit = async () => {
  const query = {
    name: searchQuery.value,
    category: selectedCategory.value,
    retailer: selectedRetailer.value,
    min: minPrice.value,
    max: maxPrice.value,
  }

  try {
    type Product = {
      name: string
      current_price: number
      previous_price?: number
      retailer: { name: string; slug: { current: string } }
      categories: { title: string }[]
    }

    type QueryResponse = {
      message: string
      products: Product[]
    }

    const response = await $fetch<QueryResponse>('/api/query', {
      method: 'POST',
      body: query
    })

    productStore.results = response.products
    productStore.error = null
  } catch (err: any) {
    productStore.results = []
    productStore.error = err.message || 'Search failed.'
  }
}

</script>
