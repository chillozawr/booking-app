<template>
  <MyModal @close="store.switchModalState">
    <input
      v-if="!store.showVerifForm"
      name="email"
      v-model="email"
      type="email"
      placeholder="Эл. почта"
      @keyup.enter="onSubmit"
    />
    <VerificationForm v-else />
  </MyModal>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import MyModal from './UI/MyModal.vue';
import * as yup from 'yup';
import { ref } from 'vue';
import { instance } from '@/API/axiosInstance';
import VerificationForm from './VerificationForm.vue';

const store = useAuthStore();

const email = ref('');

const authSchema = yup.object({
  email: yup.string().nullable().email().required()
});

const onSubmit = async () => {
  try {
    await authSchema.validate({ email: email.value });
    store.switchVerifFormState();
    // instance
    //   .post('/auth/', { email: email.value })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss"></style>
