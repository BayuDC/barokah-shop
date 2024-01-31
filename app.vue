<template>
  <Html>
    <Head>
      <Title>Toko Barokah</Title>
      <Link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
    </Head>
    <Body class="bg-black text-white">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style>
.blur-enter-active,
.blur-leave-active {
  @apply transition duration-200;
}
.blur-enter-from,
.blur-leave-to {
  @apply opacity-0 blur;
}
</style>
