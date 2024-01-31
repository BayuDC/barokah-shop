<script lang="ts" setup>
const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <button
    @click="emit('click')"
    class="text-black bg-primary block font-semibold px-5 py-2 md:py-2.5 rounded-md text-sm md:text-base"
  >
    <slot />
  </button>
</template>

<style scoped></style>
