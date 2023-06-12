import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const getTokenFromLocalStorage = localStorage.getItem('token') ? localStorage.getItem('token') : '';
const isSignedIn = getTokenFromLocalStorage ? true : false;

export const useAuthStore = defineStore('AuthStore', () => {
  const authModal = ref(false);
  const showVerifForm = ref(false);
  const userID = ref<number | null>(null);
  const signedIn = ref(isSignedIn);
  const token = ref(getTokenFromLocalStorage);

  const getUserID = computed(() => userID.value);

  function switchModalState() {
    authModal.value = !authModal.value;
  }

  function switchVerifFormState() {
    showVerifForm.value = !showVerifForm.value;
  }

  function setUserID(payload: number) {
    userID.value = payload;
  }

  function switchSignedInStatus() {
    signedIn.value = !signedIn.value;
  }

  function setToken(payload: string) {
    token.value = payload;
  }

  return {
    authModal,
    showVerifForm,
    signedIn,
    getUserID,
    token,
    switchModalState,
    switchVerifFormState,
    setUserID,
    switchSignedInStatus,
    setToken
  };
});
