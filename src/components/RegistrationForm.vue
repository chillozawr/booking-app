<template>
  <form class="reg_form" @submit.prevent="onSubmit" novalidate>
    <input
      name="phone"
      type="tel"
      v-model="phone"
      @input="onPhoneInputHandler"
      placeholder="Телефон"
      maxlength="18"
    />
    <MyTextInput name="firstName" v-model="firstName" type="text" placeholder="Имя" />
    <MyTextInput name="surname" v-model="surname" type="text" placeholder="Фамилия" />
    <select v-model="sex" name="sex_select">
      <option disabled value="" selected>Выберите пол</option>
      <option value="0">Муж.</option>
      <option value="1">Жен.</option>
    </select>
    <MyTextInput name="email" v-model="email" type="email" placeholder="Эл. почта" />
    <div v-if="errorText">{{ errorText }}</div>
    <MyButton type="submit">Зарегистрироваться</MyButton>
  </form>
</template>

<script setup lang="ts">
import MyButton from './UI/MyButton.vue';
import MyTextInput from './UI/MyTextInput.vue';
import { ref } from 'vue';
import { onPhoneInputHandler, phoneFormatting } from '@/utils';
import { useAuthStore } from '@/stores/authStore';
import * as yup from 'yup';
import { instance } from '@/API/axiosInstance';

const store = useAuthStore();

const phone = ref('');
const firstName = ref('');
const surname = ref('');
const sex = ref('');
const email = ref('');
const errorText = ref('');

const registrationSchema = yup.object({
  phone_number: yup.string().defined().required(),
  name: yup.string().defined().required(),
  surname: yup.string().defined().required(),
  sex: yup.string().defined().required(),
  email: yup.string().nullable().email().required()
});

const onSubmit = async () => {
  const user = {
    phone_number: phoneFormatting(phone.value),
    name: firstName.value,
    surname: surname.value,
    sex: sex.value,
    email: email.value
  };
  try {
    await registrationSchema.validate(user);
    instance
      .post('/registration/', user)
      .then((response) => {
        store.setUserID(response.data.data['user id']);
        store.switchVerifFormState();
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    errorText.value = error as string;
  }
};
</script>

<style lang="scss">
.reg_form {
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
