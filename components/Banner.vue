<script lang="ts" setup></script>

<template>
  <div id="banner">
    <div
      class="rounded-xl overflow-hidden bg-center bg-cover lg:h-96 h-48"
      style="background-image: url('/img/banner.webp')"
    >
      <div v-motion-fade-visible-once class="bg-black/40 h-full flex flex-col items-center justify-center">
        <div v-motion-slide-visible-once-bottom>
          <h1 class="font-bold lg:text-7xl md:text-5xl text-4xl">Toko Barokah</h1>
          <p class="font-medium lg:text-3xl md:text-xl lg:mt-1">Sedia Semua Kebutuhan Dapurmu</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
