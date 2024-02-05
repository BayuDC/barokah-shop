<script lang="ts" setup>
const props = defineProps<{
  value: 'created' | 'confirmed' | 'finished' | 'canceled';
}>();

const value = computed(() => {
  switch (props.value) {
    case 'created':
      return 'Menunggu konfirmasi';
    case 'confirmed':
      return 'Dalam perjalanan';
    case 'canceled':
      return 'Dibatalkan';
    case 'finished':
      return 'Selesai';
  }
});
</script>

<template>
  <div class="px-4 py-2 bg-primary/20 rounded-lg font-bold text-primary/80 w-fit">{{ value }}</div>
</template>

<style scoped></style>
