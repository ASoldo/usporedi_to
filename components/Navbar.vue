<template>
  <div class="fixed top-0 w-full flex justify-center items-center z-50">
    <ul
      class=" flex justify-between w-full lg:w-2/3 h-full py-5 px-10 text-black uppercase font-light tracking-[0.4rem]">
      <li class="w-full">
        <NuxtLink to="#home">
          <h1 class=" hover:text-green-400 hover:font-medium hover:tracking-[0.6rem] duration-60">home</h1>
        </NuxtLink>
      </li>
      <li class="w-full">
        <NuxtLink to="#hero">
          <h1 class="text-center hover:text-orange-400 hover:font-medium hover:tracking-[0.6rem] duration-60">about</h1>
        </NuxtLink>
      </li>
      <li class="w-full">
        <NuxtLink to="#">
          <h1 class="text-right hover:text-pink-300 hover:font-medium hover:tracking-[0.6rem] duration-60">work</h1>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
