<script lang="ts" setup>
const cart = useCartStore();
await cart.fetchProduct();
</script>

<template>
  <div v-if="cart.isEmpty" class="text-2xl">Keranjangmu masih kosong</div>
  <ul v-else>
    <CartProductItem
      v-for="p in cart.products"
      :name="p.name"
      :stock="p.stock"
      :unit="p.unit"
      :price="p.price"
      :quantity="p.pivot.quantity"
      :picture-url="p['picture_url']"
      @plus="cart.addOrRemoveProduct(p.id, 1)"
      @minus="cart.addOrRemoveProduct(p.id, -1)"
    />
  </ul>
</template>

<style scoped></style>
