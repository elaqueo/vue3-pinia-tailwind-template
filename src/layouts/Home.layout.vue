<template>
  <div class="relative bg-dark-2 rounedd-tl-lg">
    <Navbar></Navbar>

    <div class="flex">
      <Sidebar></Sidebar>
      <section
        class="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14"
      >
        <div class="w-full">
          <router-view></router-view>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar/Navbar.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
</script>

<style scoped></style>
