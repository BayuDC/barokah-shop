<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const cart = useCartStore();
const user = useAuth();

const payment = ref('');
const address = ref(user.value?.address);

async function submit() {
  if (!payment.value) return nuxtApp.$toast.error('Mohon pilih metode pembayaran!');
  if (!address.value) return nuxtApp.$toast.error('Mohon isi alamat pengiriman!');

  if (!(await cart.checkout(payment.value, address.value))) {
    return nuxtApp.$toast.error('Transaksi gagal, silakan coba lagi!');
  }

  nuxtApp.$toast.success('Transaksi berhasil, pesananmu sedang diproses!');
  setTimeout(() => {
    navigateTo('/transactions');
  }, 2000);
}
</script>

<template>
  <form @submit.prevent="submit" class="p-5 h-fit bg-primary/20 rounded-xl flex flex-col" v-if="!cart.isEmpty">
    <div class="mb-3">
      <label for="" class="uppercase text-sm block mb-1 font-bold text-white/60">Total Harga</label>
      <div class="text-3xl font-bold">Rp{{ cart.price.toLocaleString('id') }}</div>
    </div>
    <div class="mb-3">
      <label for="" class="uppercase text-sm block mb-1 font-bold text-white/60">Metode Pembayaran</label>
      <select
        class="appearance-none py-2 px-3 w-full bg-white font-medium outline-primary rounded-md border-none text-black"
        v-model="payment"
      >
        <option value="" disabled selected>Pilih disini</option>
        <option value="debit">Bayar pake doa</option>
        <option value="cash">Bayar ditempat</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="" class="uppercase text-sm block mb-1 font-bold text-white/60">Alamat Pengiriman</label>
      <textarea
        rows="4"
        v-model="address"
        class="py-2 px-3 w-full bg-white font-medium outline-primary rounded-md border-none text-black"
      ></textarea>
    </div>
    <Button type="submit" class="w-full">Checkout</Button>
  </form>
</template>

<style scoped></style>
