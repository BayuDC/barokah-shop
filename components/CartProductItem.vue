<script lang="ts" setup>
const config = useRuntimeConfig();
const props = defineProps<{
  name: string;
  unit: string;
  price: number;
  stock: number;
  quantity: number;
  pictureUrl: string;
}>();
const emit = defineEmits<{
  plus: [];
  minus: [];
}>();
</script>

<template>
  <li class="border-t-2 border-primary py-5">
    <div class="flex gap-5">
      <div class="w-32 rounded-lg overflow-hidden">
        <img class="block w-full aspect-square" :src="config.public.baseUrl + pictureUrl" alt="" />
      </div>
      <div class="flex flex-col md:flex-row md:w-full md:items-center justify-between">
        <div>
          <h2 class="font-semibold text-lg md:text-xl">
            {{ name }}
          </h2>
          <div class="text-white/80 font-bold md:text-lg">
            Rp{{ price.toLocaleString('id') }}<span class="text-white/60">/{{ unit }}</span>
          </div>
        </div>
        <div>
          <div class="text-sm my-2 md:text-center">Stok Tersedia: {{ stock }}</div>
          <div class="py-2 px-4 bg-primary/20 w-fit flex gap-6 rounded-full items-center">
            <button
              @click="emit('minus')"
              class="icon-[mdi--minus-thick] text-2xl leading-none hover:text-primary transition"
            ></button>
            <span class="font-bold text-lg text-white/80">{{ quantity }}</span>
            <button
              @click="emit('plus')"
              class="icon-[mdi--plus-thick] text-2xl leading-none transition"
              :class="[quantity < stock ? 'hover:text-primary' : 'cursor-not-allowed text-white/40']"
              :disabled="quantity >= stock"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped></style>
