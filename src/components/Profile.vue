<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="menu-head">
    <img class="menu-head__img" src="/src/assets/avatar.png" alt="avatar" />
    <div class="menu-head__greetings">
      Привет, <span>{{ name }}</span>
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
</style>
