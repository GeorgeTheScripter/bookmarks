<script setup lang="ts">
import Profile from './components/Profile.vue'
</script>

<template>
  <div class="app">
    <div class="menu">
      <Profile name="Боб" />
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
