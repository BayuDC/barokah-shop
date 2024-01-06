<script lang="ts" setup>
const route = useRoute();
const categories = [
  { name: 'Semua' },
  { name: 'Daging & Ikan', slug: 'daging-ikan' },
  { name: 'Sayur-Sayuran', slug: 'sayur-sayuran' },
  { name: 'Bumbu Dapur', slug: 'bumbu-dapur' },
  { name: 'Lainnya', slug: 'lainnya' },
];

const open = ref(false);
const active = ref(categories.find((c) => c.slug == route.query.category) || categories[0]);
</script>

<template>
  <div class="py-10">
    <div class="flex items-center justify-between lg:hidden" @click="open = !open">
      <div class="text-xl font-bold text-primary">
        {{ active.name }}
      </div>
      <div class="text-primary">
        <i class="bx bx-chevron-down bx-md block"></i>
      </div>
    </div>
    <ul class="flex-col lg:flex lg:flex-row lg:gap-10 gap-2 py-2 justify-center" :class="[open ? 'flex' : 'hidden']">
      <CategoryItem
        v-for="c in categories"
        :slug="c.slug"
        :active="c.slug == active.slug"
        @click="
          () => {
            active = c;
            open = false;
          }
        "
        >{{ c.name }}</CategoryItem
      >
    </ul>
    <div class="bg-primary rounded h-0.5 mt-2 lg:hidden"></div>
  </div>
</template>

<style scoped></style>
