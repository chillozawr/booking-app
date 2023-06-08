<template>
  <header class="header">
    <h1>Booking APP</h1>
    <div class="header__buttons" v-if="!store.signedIn">
      <MyButton @click="signUp">Регистрация</MyButton>
      <MyButton @click="store.switchModalState">Вход</MyButton>
    </div>
    <div v-else>your account</div>
    <AuthModal v-if="store.authModal" @close="store.switchModalState" />
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import MyButton from './UI/MyButton.vue';
import AuthModal from './AuthModal.vue';
import { useAuthStore } from '@/stores/authStore';

const store = useAuthStore();
const router = useRouter();

const signUp = () => {
  router.push('/registration');
};
</script>

<style lang="scss">
.header {
  height: 60px;
  display: flex;
  align-items: center;
  border: 2px solid orange;
  justify-content: space-between;
}

.header__buttons {
  display: flex;
  gap: 5px;
  margin-right: 30px;
}
</style>
