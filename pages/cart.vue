<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

const { data } = await useMyFetch<{
  products: Product[];
}>('/cart/products');
</script>

<template>
  <Container>
    <h1 class="text-4xl md:text-5xl font-medium mb-10">Keranjang</h1>
    <div>
      <ul v-if="data?.products">
        <CartItem
          v-for="p in data.products"
          :name="p.name"
          :stock="p.stock"
          :unit="p.unit"
          :price="p.price"
          :quantity="p.pivot.quantity"
          :picture-url="p['picture_url']"
        />
      </ul>
    </div>
  </Container>
</template>

<style scoped></style>
