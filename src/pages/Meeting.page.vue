<style scoped></style>

<template>
  <div>Meeting room #{{ id }}</div>
  <div class="p-6 mx-auto">
    <video
      v-if="localStream"
      autoplay
      playsinline
      controls
      :srcObject="localStream"
      class="h-full rounded-md"
    ></video>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { call } from '@/lib/stream';

defineProps(['id']);

const localStream = ref<MediaStream | undefined>();

onMounted(async () => {
  localStream.value = await call();
});
</script>
