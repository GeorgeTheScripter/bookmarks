<script setup lang="ts">
const { size } = defineProps<{ size?: number }>();
</script>

<template>
  <button class="button" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--color-fg);
  border-radius: 100px;
  padding: 12px 32px;
  color: var(--color-bg);
  font-size: 18px;
  border: none;
}

.button:hover {
  background-color: var(--color-fg-hover);
  transform: scale(1.05);
}
</style>
