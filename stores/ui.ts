
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const isFooterVisible = ref(true)

  const toggleFooter = () => {
    isFooterVisible.value = !isFooterVisible.value
  }

  return {
    isFooterVisible,
    toggleFooter,
  }
}, {
  persist: true
})
