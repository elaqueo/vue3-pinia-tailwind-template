<style scoped></style>

<script setup lang="ts">
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Button from '@/components/ui/button/Button.vue';

defineProps({
  isOpen: Boolean,
  title: String,
  buttonText: String,
  image: String,
  buttonIcon: String,
  class: String,
});

defineEmits(['onClick', 'onClose']);
</script>

<template>
  <Dialog :open="isOpen" @update:open="$emit('onClose')">
    <DialogContent
      class="flex w-full max-e-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white"
    >
      <div class="flex flex-col gap-6">
        <div v-if="image" class="flex justify-center">
          <img :src="image" alt="image" width="72" height="72" />
        </div>

        <h1 class="text-3xl font-bold leading-[42px]" :class="class">
          {{ title }}
        </h1>

        <slot></slot>

        <Button
          class="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 flex items-center gap-2"
          @click="$emit('onClick')"
        >
          <slot name="icon"></slot>

          {{ buttonText || 'Schedule Meeting' }}
        </Button>
      </div>
    </DialogContent>
  </Dialog>
</template>
