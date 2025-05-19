<template>
  <section class="p-24 px-4 max-w-screen-lg mx-auto">
    <h2 class="text-xl font-semibold mb-6 text-center text-gray-700">📦 Usporedi Proizvode</h2>

    <div v-if="pending" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">❌ {{ error.message }}</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="product in data.products" :key="product.name"
        class="bg-white border border-gray-200 rounded-lg shadow-sm p-5 transition hover:shadow-md">
        <header class="mb-2">
          <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
        </header>

        <div class="mb-3">
          <p class="text-green-600 font-bold text-lg">
            💰 {{ product.current_price }} EUR
          </p>
          <p v-if="product.previous_price" class="text-sm text-gray-500 line-through">
            Was {{ product.previous_price }} EUR
          </p>
        </div>

        <div class="text-sm text-gray-600">
          🏬 Retailer:
          <span class="font-medium text-gray-800">{{ product.retailer.name }}</span>
        </div>

        <div class="text-sm text-gray-600 mt-1">
          🏷 Categories:
          <span v-for="cat in product.categories" :key="cat.title"
            class="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-0.5 mr-1 mt-1 text-xs">
            {{ cat.title }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>


<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/query/Krema*')
</script>
