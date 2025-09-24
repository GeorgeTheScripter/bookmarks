import { API_ROUTES, http } from '@/api';
import type { Category } from '@/interfaces/category.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>();

  async function getCategories() {
    try {
      const { data } = await http.get<Category[]>(API_ROUTES.categories);
      categories.value = data;
    } catch (err) {
      console.log(err);
    }
  }

  async function createCategory() {
    try {
      const { data } = await http.post<Category>(API_ROUTES.categories, {
        name: 'Новая категория',
        alias: 'New category',
      });
      categories.value?.push(data);
    } catch (err) {
      console.log(err);
    }
  }
  return {
    categories,
    getCategories,
    createCategory,
  };
});
