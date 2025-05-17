<template>
  <div class="pt-20">
    <h2>📦 Products</h2>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">❌ {{ error.message }}</div>
    <ul v-else>
      <li v-for="product in data.products" :key="product.name">
        <strong>{{ product.name }}</strong><br />
        💰 Price: {{ product.current_price }} EUR
        <span v-if="product.previous_price">
          (was {{ product.previous_price }} EUR)
        </span><br />
        🏬 Retailer: {{ product.retailer.name }}<br />
        🏷 Categories:
        <span v-for="cat in product.categories" :key="cat.title">{{ cat.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/query/Krema*')
</script>
