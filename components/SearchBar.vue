<template>
  <form @submit.prevent="compareProducts" class="max-w-screen-md mx-auto flex flex-col sm:flex-row gap-4">
    <input v-model="search" spellcheck="false" type="text" placeholder="Search for a product, e.g. 'Krema za Zule'"
      class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
    <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
      <Icon name="simple-line-icons:magic-wand" size="20" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/products'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { search } = storeToRefs(productStore)
const compareProducts = productStore.compareProducts
</script>
