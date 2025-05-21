<template>
  <div class="flex flex-col z-50">
    <header class="bg-white shadow-md w-full top-0 left-0">
      <nav class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 gap-2">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-semibold whitespace-nowrap">
          <Icon name="simple-line-icons:bag" size="20" />
        </NuxtLink>

        <!-- Search bar -->
        <div class="flex-1 min-w-0 flex justify-center">
          <!-- <SearchBar /> -->
        </div>

        <!-- Hamburger -->
        <NuxtLink to="#" @click.prevent="isAsideOpen = !isAsideOpen"
          class="text-2xl focus:outline-none shrink-0 cursor-pointer" aria-label="Toggle menu">
          <Icon name="simple-line-icons:user" size="20" />
        </NuxtLink>

      </nav>
    </header>

    <!-- Sidebar -->
    <aside class="fixed left-0 w-64 h-full bg-gray-100 shadow-lg transform transition-transform duration-300 z-50"
      :class="{ '-translate-x-full': !isAsideOpen, 'translate-x-0': isAsideOpen }">
      <nav class="p-6 space-y-4">
        <NuxtLink to="/" class="block hover:text-green-500">Notifications</NuxtLink>
        <NuxtLink to="#" class="block hover:text-green-500">User</NuxtLink>
        <NuxtLink to="#" class="block hover:text-green-500">Settings</NuxtLink>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isAsideOpen = ref(false)
</script>
