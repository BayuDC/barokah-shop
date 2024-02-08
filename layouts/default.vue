<script lang="ts" setup></script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header class="sticky top-0 z-40" />
    <div>
      <slot />
    </div>
    <Footer class="mt-auto" />
  </div>
</template>

<style scoped></style>
