<template>
  <Html>
    <Head>
      <Title>Toko Barokah</Title>
    </Head>
    <Body class="bg-black text-white">
      <NuxtLayout>
        <NuxtLoadingIndicator :height="2" :color="false" class="bg-primary" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
