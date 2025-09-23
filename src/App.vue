<script setup lang="ts">
import { onMounted } from 'vue';
import Profile from './components/Profile.vue';
import { useProfileStore } from './stores/profile.store';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>

<template>
  <div class="app">
    <div class="menu">
      <Profile v-if="store.profile" :name="store.profile.name" />
    </div>
    <div class="content">content</div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  gap: 200px;
  min-height: calc(100vh-140px);
  max-width: 1400px;
  margin: 140px auto 0;
}
</style>
