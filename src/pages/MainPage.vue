<script setup lang="ts">
import { RouterView } from 'vue-router';
import Categories from '../components/Categories.vue';
import Profile from '../components/Profile.vue';
</script>

<template>
  <div class="app">
    <div class="menu">
      <Profile />
      <Categories />
    </div>
    <div class="content">
      <RouterView />
    </div>
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

.menu {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
