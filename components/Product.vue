<script lang="ts" setup>
const categoryId = useQuery<string>('category');
const searchKeyword = useQuery<string>('search');

const { data, pending } = await useMyFetch<{ products: Product[] }>('/products', {
  default: () => ({ products: [] }),
  query: {
    category_id: categoryId,
    search: searchKeyword,
  },
});
const ready = ref(false);

onMounted(() => {
  ready.value = true;
});
</script>

<template>
  <Transition name="slide" mode="out-in">
    <div class="min-h-screen" :key="`${searchKeyword}${categoryId}`">
      <div v-if="!data.products.length" class="text-2xl font-bold text-center py-10 px-5 bg-primary/20 rounded-xl">
        Tidak Ditemukan Produk Apapun!
      </div>
      <div
        v-else-if="!pending && ready"
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-2 items-start"
      >
        <ProductItem
          v-for="p in data.products"
          v-bind="{
            id: p.id,
            name: p.name,
            unit: p.unit,
            price: p.price,
            pictureUrl: p['picture_url'],
          }"
          :key="`${p.id}`"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>
