<script lang="ts" setup>
const props = defineProps<{
  active?: boolean;
  slug?: string;
}>();
const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <li
    class="text-xl"
    :class="[active ? 'font-bold text-primary' : 'font-medium text-primary/60 hover:text-primary/100 transition']"
  >
    <NuxtLink @click="emit('click')" :to="{ query: { category: slug } }"><slot /></NuxtLink>
  </li>
</template>

<style scoped></style>
