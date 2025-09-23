import { defineStore } from 'pinia';
import type { Profile } from '@/interfaces/profile.interface';
import { ref } from 'vue';
import { API_ROUTES } from '@/api';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    try {
      const data = await fetch(API_ROUTES.profile);
      const res = (await data.json()) as Profile;
      profile.value = res;
    } catch (err) {
      console.log(err);
    }
  }
  return { profile, fetchProfile };
});
