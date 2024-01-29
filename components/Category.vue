<script lang="ts" setup>
const route = useRoute();

const { data } = await useMyFetch<{
  categories: Category[];
}>('/categories', {
  default: () => ({
    categories: [],
  }),
});

const open = ref(false);
const selected = ref<Category | undefined>();

selected.value = data.value.categories.find((c) => {
  return c.id.toString() == route.query.category;
});

function select(category: Category) {
  selected.value = category;
  open.value = false;
}
function reset() {
  selected.value = undefined;
  open.value = false;
}
</script>

<template>
  <div class="py-10">
    <div class="flex items-center justify-between lg:hidden" @click="open = !open">
      <div class="text-xl font-bold text-primary">
        {{ selected?.name || 'Semua' }}
      </div>
      <div class="text-primary">
        <i class="bx bx-chevron-down bx-md block"></i>
      </div>
    </div>
    <ul class="flex-col lg:flex lg:flex-row lg:gap-10 gap-2 py-2 justify-center" :class="[open ? 'flex' : 'hidden']">
      <CategoryItem :active="!selected" @click="reset">Semua</CategoryItem>
      <CategoryItem
        v-for="c in data.categories"
        :slug="c.id.toString()"
        :active="c.id == selected?.id"
        @click="select(c)"
      >
        {{ c.name }}
      </CategoryItem>
    </ul>
    <div class="bg-primary rounded h-0.5 mt-2 lg:hidden"></div>
  </div>
</template>

<style scoped></style>
