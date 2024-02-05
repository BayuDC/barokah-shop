<script lang="ts" setup>
const props = defineProps<{
  id: number;
  status: 'created' | 'confirmed' | 'finished' | 'canceled';
  price: number;
  createdAt: string;
  products: Product[];
}>();

const nuxtApp = useNuxtApp();

async function cancel() {
  await useMyFetch(`/transactions/${props.id}/cancel`, {
    method: 'patch',
  });

  nuxtApp.$toast.success('Pesanan telah dibatalkan');
  refreshNuxtData('transactions');
}
async function finish() {
  await useMyFetch(`/transactions/${props.id}/finish`, {
    method: 'patch',
  });

  nuxtApp.$toast.success('Terimakasih telah belanja disini');
  refreshNuxtData('transactions');
}
</script>

<template>
  <li
    class="border-t-2 border-primary py-5 flex flex-col md:grid gap-5 md:grid-cols-[1fr_300px] md:grid-rows-[auto_1fr]"
  >
    <div style="grid-column: 2 / 3" class="md:ml-auto">
      <TransactinStatus :value="status" />
    </div>
    <div style="grid-column: 1 / 2; grid-row: 1 /3">
      <div class="mb-3">
        <label for="" class="uppercase text-sm block mb-1 font-bold text-white/60">Waktu Pemesanan</label>
        <div class="text-xl font-bold">{{ new Date(createdAt).toLocaleString() }}</div>
      </div>
      <div class="mb-3">
        <label for="" class="uppercase text-sm block mb-1 font-bold text-white/60">Total Harga</label>
        <div class="text-xl font-bold">Rp{{ price.toLocaleString('id') }}</div>
      </div>
      <div class="">
        <label for="" class="uppercase text-sm block mb-1 font-bold text-white/60">Daftar Produk</label>
        <ul class="list-inside list-disc">
          <li class="text-lg" v-for="p in products">{{ p.name }} x{{ p.pivot.quantity }}</li>
        </ul>
      </div>
    </div>
    <div class="flex gap-2 flex-col md:mt-auto">
      <Button @click="finish" v-if="status == 'confirmed'">Pesanan Diterima</Button>
      <Button @click="cancel" v-if="status == 'created' || status == 'confirmed'">Batalkan Pesanan</Button>
    </div>
  </li>
</template>

<style scoped></style>
