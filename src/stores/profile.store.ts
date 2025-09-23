import { defineStore } from 'pinia';
import type { Profile } from '@/interfaces/profile.interface';
import { ref } from 'vue';
import { API_ROUTES, http } from '@/api';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    try {
      const { data } = await http.get<Profile>(API_ROUTES.profile);
      profile.value = data;
    } catch (err) {
      console.log(err);
    }
  }
  return { profile, fetchProfile };
});
