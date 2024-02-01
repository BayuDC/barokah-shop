<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <Container>
    <h1 class="text-4xl md:text-5xl font-medium mb-10">Keranjang</h1>
    <div>
      <Cart />
    </div>
  </Container>
</template>

<style scoped></style>
