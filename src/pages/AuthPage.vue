<script setup lang="ts">
import ButtonIcon from '@/components/ButtonIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToMain = () => {
  router.push({
    name: 'main',
  });
};
</script>

<template>
  <div class="auth">
    <div>
      <h1 class="title">Bookmarkly</h1>

      <ButtonIcon @click="redirectToMain" class="auth_btn">Войти</ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.auth div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.title {
  font-size: 52px;
  font-weight: 700;
}

.auth_btn {
  width: fit-content;
}

.auth a {
  color: var(--color-bg);
  text-decoration: none;
}
</style>
