<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store';
import { computed, onMounted } from 'vue';
import Status from './Status.vue';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});

const userName = computed(() => {
  return store.profile ? store.profile.name : 'Пользователь';
});
</script>

<template>
  <div class="menu-head">
    <div class="avatar__info">
      <img class="menu-head__img" src="/src/assets/avatar.png" alt="avatar" />

      <Status />
    </div>

    <div class="menu-head__greetings">
      Привет, <span>{{ userName }}</span>
    </div>
  </div>
</template>

<style scoped>
.avatar__info {
  position: relative;
  width: fit-content;
}

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
