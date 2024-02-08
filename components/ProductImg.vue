<script lang="ts" setup>
import { useLazyload } from 'vue3-lazyload';

const props = defineProps<{
  url: string;
}>();

const ready = ref(false);
const error = ref(!props.url);

const self = error
  ? useLazyload(toRef(props, 'url') as Ref<string>, {
      lifecycle: {
        loaded: () => (ready.value = true),
        error: () => (error.value = true),
      },
      observerOptions: {
        rootMargin: '200px',
      },
    })
  : ref();
</script>

<template>
  <div class="bg-secondary rounded-xl overflow-hidden aspect-square">
    <div v-if="!ready" class="aspect-square flex items-center justify-center">
      <span class="icon-[mdi--loading] text-6xl animate-spin block text-black"> </span>
    </div>
    <img class="block w-full aspect-square transition" :class="[ready ? 'opacity-100' : 'opacity-0 blur']" ref="self" />
  </div>
</template>

<style scoped></style>
