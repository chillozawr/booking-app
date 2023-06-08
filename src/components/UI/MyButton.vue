<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
  display: block;
  background-color: transparent;
  border: 1px solid blue;
  padding: 5px 10px;
  color: aqua;
}

.button:hover {
  cursor: pointer;
  color: #001f3f;
  background-color: #fff;
}
</style>
