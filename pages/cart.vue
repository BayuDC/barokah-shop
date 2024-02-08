<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});
useHead({
  title: 'Keranjang - Toko Barokah',
});
</script>

<template>
  <Container>
    <h1 class="text-4xl md:text-5xl font-medium mb-10">Keranjang</h1>
    <div class="grid md:grid-cols-3 gap-10">
      <CartProductList class="md:col-span-2" />
      <CartDetail />
    </div>
  </Container>
</template>

<style scoped></style>
