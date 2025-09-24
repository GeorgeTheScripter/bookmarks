<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
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
}

.button:hover {
  background-color: var(--color-fg-hover);
  transform: scale(1.05);
}
</style>
