<template>
  <div class="relative">
    <!-- Floating Bubble Button -->
    <button @click="ui.toggleFooter"
      class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
      :aria-label="ui.isFooterVisible ? 'Hide search bar' : 'Show search bar'">
      <Icon :name="ui.isFooterVisible ? 'simple-line-icons:magnifier-remove' : 'simple-line-icons:magnifier-add'"
        size="20" />
    </button>

    <!-- Footer Content -->
    <footer v-if="ui.isFooterVisible"
      class="p-2 bg-green-600 text-black w-full h-max flex flex-col justify-center items-center shadow-inner transition-all duration-300">
      <SearchBar />
    </footer>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '~/components/SearchBar.vue'
import { useUiStore } from '~/stores/ui'

const ui = useUiStore()
</script>
