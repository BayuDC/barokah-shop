<script lang="ts" setup></script>

<template>
  <header class="bg-primary/10 border-primary border-b-2 px-5 lg:px-10">
    <div
      class="container max-w-screen-xl mx-auto grid items-center grid-cols-2 lg:grid-cols-[1fr_minmax(300px,400px)_1fr] h-20"
    >
      <h1 class="text-2xl lg:text-3xl font-bold leading-6">
        <NuxtLink class="hover:text-primary transition" href="/">Toko Barokah</NuxtLink>
      </h1>
      <Search class="hidden lg:flex" />
      <div class="ml-auto flex items-center">
        <div class="mr-2 lg:mr-4 hover:text-primary transition lg:hidden">
          <button class="block">
            <i class="bx bx-search bx-md block"></i>
          </button>
        </div>
        <div class="mr-4 lg:mr-6 hover:text-primary transition relative">
          <NuxtLink href="/cart">
            <i class="bx bx-cart bx-md block"></i>
          </NuxtLink>
        </div>
        <div class="h-10 w-10 bg-white rounded-full"></div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
