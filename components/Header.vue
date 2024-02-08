<script lang="ts" setup>
const user = useAuth();
</script>

<template>
  <header class="border-primary bg-black border-b-2">
    <div class="bg-primary/10 px-5 lg:px-10">
      <div
        class="container max-w-screen-xl mx-auto grid items-center grid-cols-2 lg:grid-cols-[1fr_minmax(300px,400px)_1fr] h-20"
      >
        <h1 class="text-2xl lg:text-3xl font-bold leading-6">
          <NuxtLink class="hover:text-primary transition" href="/">Toko Barokah</NuxtLink>
        </h1>
        <Search class="hidden lg:flex" />
        <div class="ml-auto">
          <Transition name="blur" mode="out-in">
            <div v-if="user" class="flex items-center">
              <div class="flex md:gap-2 gap-1 md:mr-4 mr-3 items-center">
                <NuxtLink to="/cart" class="text-3xl leading-none hover:text-primary transition p-1">
                  <span class="block icon-[mdi--cart-outline]"></span>
                </NuxtLink>
                <NuxtLink to="/transactions" class="text-3xl leading-none hover:text-primary transition p-1">
                  <span class="block icon-[mdi--invoice-text-outline]"></span>
                </NuxtLink>
              </div>
              <div class="h-12 w-12 aspect-square overflow-hidden rounded-full">
                <img :src="user.picture_url" />
              </div>
            </div>
            <Button v-else to="/login">Login</Button>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
