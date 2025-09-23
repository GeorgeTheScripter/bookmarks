<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store';
import { onMounted } from 'vue';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>

<template>
  <div class="menu-head">
    <img class="menu-head__img" src="/src/assets/avatar.png" alt="avatar" />
    <div class="menu-head__greetings">
      Привет, <span>{{ store.profile?.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.menu-head {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.menu-head__greetings {
  font-size: 18px;
  line-height: 100%;
}

.menu-head__greetings span {
  font-weight: 700;
}

.menu-head__img {
  width: 80px;
}
</style>
