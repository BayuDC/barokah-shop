<script lang="ts" setup>
const props = defineProps<{
  to?: string;
}>();

const emit = defineEmits<{
  click: [];
}>();

const Link = resolveComponent('NuxtLink');
</script>

<template>
  <component
    :is="to ? Link : 'button'"
    v-bind="props"
    @click="emit('click')"
    class="text-black text-center bg-primary block font-semibold px-5 py-2 md:py-2.5 rounded-md text-sm md:text-base"
  >
    <slot />
  </component>
</template>

<style scoped></style>
