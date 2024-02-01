<script lang="ts" setup>
const categoryId = useQuery<string>('category');

const { data } = await useMyFetch<{ products: Product[] }>('/products', {
  default: () => ({ products: [] }),
  query: {
    category_id: categoryId,
  },
});
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-2">
    <ProductItem
      v-for="p in data.products"
      v-bind="{
        id: p.id,
        name: p.name,
        unit: p.unit,
        price: p.price,
        pictureUrl: p['picture_url'],
      }"
      :key="p.id"
    />
  </div>
</template>

<style scoped></style>
