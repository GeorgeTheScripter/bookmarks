<script setup lang="ts">
import { computed } from 'vue';
import { useProfileStore } from '@/stores/profile.store';

const store = useProfileStore();

const statusColor = computed(() => {
  return store.profile ? 'green' : 'red';
});
</script>

<template>
  <div class="status" :style="{ background: statusColor }"></div>
</template>

<style scoped>
.status {
  width: 12px;
  height: 12px;
  border-radius: 12px;
  border: 2px solid var(--color-bg);
  position: absolute;
  bottom: 10px;
  right: 4px;
}
</style>
