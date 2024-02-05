export const useCartStore = defineStore('carts', () => {
  const products = ref<Product[]>([]);
  const price = computed<number>(() => {
    return products.value.reduce((total, product) => {
      return total + product.price * product.pivot.quantity;
    }, 0);
  });
  const isEmpty = computed(() => {
    return !products.value.length;
  });

  async function fetchProduct() {
    const { data, refresh } = await useMyFetch<{
      products: Product[];
    }>('/cart/products');

    products.value = data.value?.products || [];
  }
  async function addOrRemoveProduct(productId: number, quantity: number) {
    const { data } = await useMyFetch('/cart/products', {
      method: 'patch',
      body: { product_id: productId, quantity },
    });

    await fetchProduct();
  }
  async function checkout(payment: string, address: string) {
    await useMyFetch('/profile', {
      method: 'put',
      body: { address },
    });

    const { error } = await useMyFetch('/transactions/checkout', {
      method: 'post',
      body: { payment },
    });

    return !error.value;
  }

  return { price, products, isEmpty, fetchProduct, addOrRemoveProduct, checkout };
});
