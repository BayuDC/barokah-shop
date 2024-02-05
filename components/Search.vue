<script lang="ts" setup>
const route = useRoute();
const search = ref('');

async function submit() {
  await navigateTo({
    query: {
      ...route.query,
      search: search.value || undefined,
    },
  });
}
function clear() {
  search.value = '';
}
</script>

<template>
  <form @submit.prevent="submit" class="text-black relative w-full">
    <input
      class="py-2 pl-3 pr-10 w-full bg-white font-medium outline-primary rounded-md border-none"
      placeholder="Ketik untuk mencari"
      v-model.lazy="search"
    />
    <div class="absolute right-2 top-0 h-full flex items-center">
      <button type="submit">
        <div class="text-3xl leading-none text-black/30 hover:text-black/100 transition">
          <span class="block icon-[mdi--search]"></span>
        </div>
      </button>
    </div>
  </form>
</template>

<style scoped></style>
