<template>
  <div class="bg-dark-2 flex flex-col h-screen">
    <router-view class="flex-1"></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/footer/Footer.vue';
</script>

<style scoped></style>
