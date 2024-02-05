<script lang="ts" setup>
const { data, refresh } = await useMyFetch<{
  products: Product[];
}>('/cart/products');

async function update(product_id: number, quantity: number) {
  const { data } = await useMyFetch('/cart/products', {
    method: 'patch',
    body: {
      product_id,
      quantity,
    },
  });

  await refresh();
}
</script>

<template>
  <div v-if="!data?.products.length" class="text-2xl">Keranjangmu masih kosong</div>
  <ul v-else>
    <CartItem
      v-for="p in data.products"
      :name="p.name"
      :stock="p.stock"
      :unit="p.unit"
      :price="p.price"
      :quantity="p.pivot.quantity"
      :picture-url="p['picture_url']"
      @plus="update(p.id, 1)"
      @minus="update(p.id, -1)"
    />
  </ul>
</template>

<style scoped></style>
