<template>
  <div class="h-dvh flex flex-col bg-green-500">
    <NavBar class="flex-shrink-0" />

    <main class="flex-grow overflow-y-auto">
      <slot />
      <!-- <div class="bg-red-500 w-full h-full"></div> -->
    </main>

    <Footer class="flex-shrink-0" />
  </div>
</template>
