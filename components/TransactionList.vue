<script lang="ts" setup>
const { data } = await useMyFetch<{ transactions: Transaction[] }>('/transactions', {
  default: () => ({ transactions: [] }),
});
</script>

<template>
  <div v-if="!data.transactions.length" class="text-2xl">Belum ada transaksi</div>
  <ul class="">
    <TransactionItem
      v-for="t in data.transactions"
      :key="t.id"
      :price="t['final_price']"
      :created-at="t['created_at']"
      :products="t['products']"
      :status="t.status"
    />
  </ul>
</template>

<style scoped></style>
