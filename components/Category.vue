<script lang="ts" setup>
const route = useRoute();
const { scrollToProduct } = useScrollTo();

const { data } = await useMyFetch<{
  categories: Category[];
}>('/categories', {
  default: () => ({
    categories: [],
  }),
});

const open = ref(false);
const selected = ref<Category | undefined>();
const self = ref<HTMLDivElement | null>(null);

selected.value = data.value.categories.find((c) => {
  return c.id.toString() == route.query.category;
});

function select(category: Category) {
  selected.value = category;
  open.value = false;
  scrollToProduct();
}
function reset() {
  selected.value = undefined;
  open.value = false;
  scrollToProduct();
}
</script>

<template>
  <div ref="self">
    <div class="flex items-center justify-between lg:hidden" @click="open = !open">
      <div class="text-xl font-bold text-primary">
        {{ selected?.name || 'Semua' }}
      </div>
      <div v-if="!open" class="text-primary text-3xl leading-none icon-[mdi--keyboard-arrow-down]"></div>
      <div v-else class="text-primary text-3xl leading-none icon-[mdi--keyboard-arrow-up]"></div>
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
