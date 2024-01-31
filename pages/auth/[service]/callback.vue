<script lang="ts" setup>
definePageMeta({
  layout: 'empty',
});

const route = useRoute();
const token = useLocalStorage('token', '');

const { data, error } = await useMyFetch<{
  token: string;
}>(route.path, {
  query: route.query,
  timeout: 5000,
});

onMounted(() => {
  if (error.value) {
    navigateTo('/login');
  } else {
    token.value = data.value?.token;
    navigateTo('/');
  }
});
</script>

<template>
  <h1 class="py-10 px-4 text-center text-2xl font-bold text-primary">Tunggu sebentar ya!</h1>
</template>

<style scoped></style>
