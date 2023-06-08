import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('AuthStore', () => {
  const authModal = ref(false);
  const showVerifForm = ref(false);
  const userID = ref<number | null>(null);
  const signedIn = ref(false);

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

  return {
    authModal,
    showVerifForm,
    signedIn,
    getUserID,
    switchModalState,
    switchVerifFormState,
    setUserID,
    switchSignedInStatus
  };
});
