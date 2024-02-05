<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <Container>
    <h1 class="text-4xl md:text-5xl font-medium mb-10">Daftar Transaksi</h1>
    <TransactionList />
  </Container>
</template>

<style scoped></style>
