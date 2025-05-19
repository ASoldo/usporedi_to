<template>
  <section class="p-12 px-4 max-w-7xl mx-auto">
    <h2 class="text-2xl font-semibold mb-6">📦 Proizvodi</h2>

    <div v-if="loading" class="text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-red-600">❌ {{ error }}</div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="product in results" :key="product.name"
        class="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between">
        <div class="mb-4">
          <h3 class="text-lg font-bold text-gray-800 mb-1">{{ product.name }}</h3>

          <p class="text-green-600 font-medium text-sm">
            💰 {{ product.current_price }} EUR
            <span v-if="product.previous_price" class="text-gray-500 line-through ml-2 text-xs">
              {{ product.previous_price }} EUR
            </span>
          </p>

          <p class="text-sm text-gray-600 mt-2">
            🏬 Retailer: <span class="font-medium text-gray-800">{{ product.retailer.name }}</span>
          </p>

          <p class="text-sm text-gray-600 mt-2">
            🏷 Categories:
            <span v-for="cat in product.categories" :key="cat.title"
              class="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-1 mt-1">
              {{ cat.title }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/products'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { results, loading, error } = storeToRefs(productStore)
</script>
