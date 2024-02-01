<script lang="ts" setup>
silentLogin();
</script>

<template>
  <Container>
    <Banner />
    <div class="py-10">
      <Search class="lg:hidden flex mb-6" />
      <Category />
    </div>
    <Product />
  </Container>
</template>

<style scoped></style>
