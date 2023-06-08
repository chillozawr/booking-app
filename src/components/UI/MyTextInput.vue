<template>
  <input :value="modelValue" @input="updateValue" />
</template>

<script setup lang="ts">
defineProps(['modelValue']);
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style lang="scss">
input {
  background-color: white;
}
</style>
