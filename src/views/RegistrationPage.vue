<template>
  <div>
    <h1>РЕГИСТРАЦИЯ</h1>
    <VerificationForm :is-signing-in="false" v-if="store.showVerifForm" />
    <RegistrationForm v-else />
  </div>
</template>

<script setup lang="ts">
import RegistrationForm from '@/components/RegistrationForm.vue';
import VerificationForm from '@/components/VerificationForm.vue';
import { useAuthStore } from '@/stores/authStore';

const store = useAuthStore();
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>
