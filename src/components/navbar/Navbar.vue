<template>
  <nav
    class="flex justify-between items-center fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 text-white"
  >
    <router-link to="/" class="flex items-center gap-2">
      <img
        src="/icons/logo.svg"
        width="32"
        height="32"
        alt="app logo"
        class="max-sm:size-10"
      />
      <p class="text-[26px] font-extrabold max-sm:hidden">VLL</p>
    </router-link>

    <div class="flex justify-between gap-5">
      <MobileNav />
    </div>
  </nav>
</template>

<script setup lang="ts">
import MobileNav from './MobileNav.vue';
</script>

<style scoped></style>
