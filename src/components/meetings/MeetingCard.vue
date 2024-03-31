<template>
  <div
    class="bg-orange-500 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-2xl cursor-pointer"
    :class="bgColor"
    v-on:click="$emit('on-click')"
  >
    <div
      class="flex justify-center items-center glassmorphism size-12 rounded-xl"
    >
      <slot name="icon"></slot>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
      <p class="text-lg font-normal">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'description', 'bgColor']);
const emits = defineEmits(['on-click']);
</script>

<style scoped></style>
