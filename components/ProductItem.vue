<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();
const cart = useCartStore();
const user = useAuth();

const props = defineProps<{
  id: number;
  name: string;
  unit: string;
  price: number;
  pictureUrl: string;
}>();

async function addToCart() {
  if (!user.value) {
    nuxtApp.$toast.error('Mohon login terlebih dahulu!');
  }

  await cart.addOrRemoveProduct(props.id, 1);

  nuxtApp.$toast.success('Berhasil ditambahkan ke keranjang!');
}

const self = ref<HTMLDivElement | null>(null);

onMounted(() => {
  usePopMotion(self, { opacity: 0, scale: 0 }, { opacity: 100, scale: 1, transition: { delay: Math.random() * 300 } });
});
</script>

<template>
  <div class="bg-primary/20 rounded-xl group" ref="self">
    <ProductImg :url="config.public.baseUrl + pictureUrl" />
    <div class="md:p-5 p-2.5 flex flex-col">
      <h2 class="font-medium text-sm md:text-xl">{{ name }}</h2>
      <p class="font-bold text-lg md:text-2xl md:mt-1">
        Rp{{ price.toLocaleString('id') }}<span class="text-xs md:text-lg font-medium text-white/60">/{{ unit }}</span>
      </p>
      <Button @click="addToCart" class="mt-2.5 md:mt-5"> Tambah ke Keranjang </Button>
    </div>
  </div>
</template>

<style scoped></style>
