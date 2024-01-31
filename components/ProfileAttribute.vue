<script lang="ts" setup>
defineProps<{
  label: string;
  value: any;
}>();
</script>

<template>
  <li>
    <div class="uppercase font-bold text-xs text-white/60">{{ label }}</div>
    <div class="text-lg">{{ value || '-' }}</div>
  </li>
</template>

<style scoped></style>
