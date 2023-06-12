<template>
  <div v-for="place in places" :key="place.accommodation_id">
    <PlacesListItem :place="place" />
  </div>
</template>

<script setup lang="ts">
import { instance } from '@/API/axiosInstance';
import { useAuthStore } from '@/stores/authStore';
import type { Place, getPlacesResponse } from '@/utils';
import { onMounted, ref } from 'vue';
import PlacesListItem from './PlacesListItem.vue';

const store = useAuthStore();

const places = ref<Place[]>([]);

onMounted(async () => {
  try {
    console.log('requesting');

    const { data } = await instance.get<getPlacesResponse>('/accommodation-filter/', {
      params: {
        count: 10
      },
      headers: {
        Authorization: `Token ${store.token}`
      }
    });
    places.value = data.data;
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped lang="scss"></style>
