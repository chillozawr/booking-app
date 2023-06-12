<template>
  <div class="place-container">
    <h3>{{ place.type }}</h3>
    <p>{{ place.address }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Place } from '@/utils';

type PropTypes = {
  place: Place;
};

defineProps<PropTypes>();
</script>

<style scoped lang="scss">
.place-container {
  border: 1px solid yellowgreen;
  padding: 1em;
}
</style>
