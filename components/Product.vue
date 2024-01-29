<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-2">
    <ProductItem :key="'p' + 1" />
    <ProductItem :key="'p' + 2" />
  </div>
</template>

<style scoped></style>
