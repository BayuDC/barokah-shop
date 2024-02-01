<script lang="ts" setup>
definePageMeta({
  layout: 'empty',
});

const config = useRuntimeConfig();

function goToLogin(service: string) {
  navigateTo(`${config.public.apiUrl}/auth/${service}`, {
    external: true,
  });
}
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center px-3">
    <div class="bg-primary/10 border-primary border-2 rounded-xl container max-w-96 p-5">
      <h1 class="text-2xl py-2 lg:text-3xl font-bold leading-6 text-center">Toko Barokah</h1>
      <div class="mt-6 flex flex-col gap-4">
        <Button
          @click="goToLogin('google')"
          class="!bg-[#F2F2F2] !text-[#1F1F1F] flex items-center justify-between gap-2"
        >
          <span>Masuk dengan Google</span>
          <img src="~/assets/google.svg" alt="" />
        </Button>
        <Button @click="goToLogin('discord')" class="!bg-[#5865F2] text-white flex items-center justify-between gap-2">
          <span>Masuk dengan Discord</span>
          <img src="~/assets/discord.svg" alt="" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
