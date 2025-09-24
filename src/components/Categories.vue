<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from './icons/IconPlus.vue';
import { RouterLink } from 'vue-router';

const store = useCategoriesStore();

onMounted(() => {
  store.getCategories();
});
</script>

<template>
  <ul class="categories">
    <li class="category" v-for="category in store.categories" :key="category.id">
      <RouterLink :to="`/main/${category.alias}`">{{ category.name }}</RouterLink>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory">
        <IconPlus />
      </ButtonIcon>
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

.categories li {
  list-style-type: none;
}

.category {
  opacity: 0.7;
}

.category:hover {
  transform: scale(1.02);
  opacity: 1;
}

.category a {
  color: var(--color-text-primary);
  text-decoration: none;
}
</style>
