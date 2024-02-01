<script lang="ts" setup>
const config = useRuntimeConfig();
const props = defineProps<{
  name: string;
  unit: string;
  price: number;
  stock: number;
  pictureUrl: string;
}>();
</script>

<template>
  <li class="border-t-2 border-primary py-5">
    <div class="flex gap-5">
      <div class="w-32 rounded-lg overflow-hidden">
        <img class="block w-full aspect-square" :src="config.public.baseUrl + pictureUrl" alt="" />
      </div>
      <div class="">
        <h2 class="font-semibold text-lg">
          {{ name }}
        </h2>
        <div class="text-white/80 font-bold">
          Rp{{ price.toLocaleString('id') }}<span>/{{ unit }}</span>
        </div>
        <div class="text-sm mt-2">Stok Tersedia: {{ stock }}</div>
      </div>
    </div>
  </li>
</template>

<style scoped></style>
