<template>
  <form class="verif_form" @submit.prevent="onSubmit">
    <MyTextInput
      name="verifcode"
      v-model="code"
      type="text"
      placeholder="Код подтверждения"
      maxlength="4"
    />
    <MyButton type="submit">Подтвердить</MyButton>
  </form>
</template>

<script setup lang="ts">
import * as yup from 'yup';
import MyButton from './UI/MyButton.vue';
import MyTextInput from './UI/MyTextInput.vue';
import { ref } from 'vue';
import { instance } from '@/API/axiosInstance';
import { useAuthStore } from '@/stores/authStore';
import router from '@/router';

type PropTypes = {
  isSigningIn: boolean;
};

const props = defineProps<PropTypes>();

const store = useAuthStore();

const code = ref('');

const verificationSchema = yup.object({
  code: yup.string().required().max(4).min(4)
});

const onSubmit = async () => {
  try {
    await verificationSchema.validate({ code: code.value });
    const checkCode = {
      user_id: store.getUserID,
      code: code.value
    };
    console.log('correct');
    instance
      .post('/check-code/', checkCode)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    router.push('/');
    if (props.isSigningIn) {
      store.switchSignedInStatus();
      store.switchModalState();
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss">
.verif_form {
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  gap: 1rem;

  input {
    padding: 0.5rem 1rem;
  }

  button {
    align-self: flex-end;
  }

  select {
    padding: 0.5rem 1rem;
  }
}
</style>
