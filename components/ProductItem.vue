<script lang="ts" setup>
const config = useRuntimeConfig();

defineProps<{
  name: string;
  unit: string;
  price: number;
  pictureUrl: string;
}>();
</script>

<template>
  <div class="bg-primary/20 rounded-xl">
    <div class="bg-secondary rounded-xl overflow-hidden">
      <img class="block w-full aspect-square" :src="config.public.baseUrl + pictureUrl" alt="" />
    </div>
    <div class="md:p-5 p-2.5 flex flex-col">
      <h2 class="font-medium text-sm md:text-xl">{{ name }}</h2>
      <p class="font-bold text-lg md:text-2xl md:mt-1">
        Rp{{ price.toLocaleString('id') }}<span class="text-sm md:text-lg font-medium text-white/60">/{{ unit }}</span>
      </p>
      <Button class="mt-2.5 md:mt-5">
        <div class="md:block hidden">Tambah ke Keranjang</div>
        <div class="md:hidden flex items-center justify-center"><i class="bx bx-plus bx-xs block"></i>Keranjang</div>
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
