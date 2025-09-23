<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';

const store = useCategoriesStore();

onMounted(() => {
  store.getCategories();
});
</script>

<template>
  <ul class="categories">
    <li class="category" v-for="category in store.categories" :key="category.id">
      <a :href="`/${category.alias}`">{{ category.name }}</a>
    </li>
  </ul>
</template>

<style scoped>
.categories {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 0;
}

.category {
  list-style-type: none;
}

.category:hover {
  opacity: 0.7;
}

.category a {
  color: var(--color-text-primary);
  text-decoration: none;
}
</style>
