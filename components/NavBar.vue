<template>
  <div class="flex flex-col z-50">
    <header class="bg-white shadow-md fixed w-full z-50">
      <nav class="max-w-screen-xl mx-auto flex items-center justify-between p-4 gap-2">
        <NuxtLink to="/" class="text-xl font-semibold whitespace-nowrap">
          <Icon name="simple-line-icons:bag" size="20" />
        </NuxtLink>

        <!-- Search / Compare Section -->
        <section class="flex-grow flex justify-center">
          <SearchBar />
        </section>

        <button @click="isAsideOpen = !isAsideOpen" class="text-2xl focus:outline-none shrink-0"
          aria-label="Toggle menu">
          &#9776;
        </button>

      </nav>
    </header>

    <aside class="fixed left-0 w-64 h-full bg-gray-100 shadow-lg transform transition-transform duration-300 z-50"
      :class="{ '-translate-x-full': !isAsideOpen, 'translate-x-0': isAsideOpen }">
      <nav class="p-6 space-y-4">
        <NuxtLink to="/" class="block hover:text-green-500">Home</NuxtLink>
        <NuxtLink to="#" class="block hover:text-orange-500">About</NuxtLink>
        <NuxtLink to="#" class="block hover:text-pink-400">Work</NuxtLink>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isAsideOpen = ref(false)
</script>
