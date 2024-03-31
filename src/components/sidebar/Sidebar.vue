<template>
  <section
    class="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white/70 max-sm:hidden lg:w-[264px]"
  >
    <div class="flex flex-1 flex-col gap-6">
      <router-link
        v-for="menu in menuList"
        :key="menu.route"
        :to="menu.route"
        :exact="true"
        class="menu px-4 py-4 rounded-lg"
      >
        <div class="flex gap-4 items-center">
          <component :is="menu.icon" size="24" />
          <div class="text-lg font-semibold max-lg:hidden">
            {{ menu.label }}
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { menuList } from '@/constants';
</script>

<style scoped>
.menu:hover,
.menu.router-link-active,
.menu.router-link-exact-active {
  @apply text-white cursor-pointer;
}
.menu.router-link-active,
.menu.router-link-exact-active {
  /* background: #0e78f9; */
  @apply bg-blue-1;
}
</style>
