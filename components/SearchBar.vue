<template>
  <form @submit.prevent="compareProducts" class="w-full max-w-xs sm:max-w-md">
    <div class="relative">
      <input v-model="search" spellcheck="false" type="text" placeholder="Search for a product, e.g. 'Krema za Zule'"
        class="w-full pr-10 pl-4 py-2 border border-black rounded-full focus:ring-green-500 focus:border-green-500" />
      <button type="submit"
        class="absolute top-1/2 right-1 transform -translate-y-1/2 px-3 py-2 bg-green-600 text-white rounded-3xl hover:bg-green-700 transition flex items-center justify-center">
        <Icon name="simple-line-icons:magic-wand" size="20" />
      </button>
    </div>
  </form>
</template>



<script setup lang="ts">
import { useProductStore } from '~/stores/products'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { search } = storeToRefs(productStore)
const compareProducts = productStore.compareProducts
</script>
