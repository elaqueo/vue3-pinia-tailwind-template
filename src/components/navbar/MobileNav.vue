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

<script setup lang="ts">
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { menuList } from '@/constants';
import { Menu } from 'lucide-vue-next';
import { VisuallyHidden } from 'radix-vue';
</script>

<template>
  <section class="w-full max-w-[264px]">
    <Sheet>
      <SheetTrigger>
        <Menu :size="36" class="cursor-pointer sm:hidden" />
      </SheetTrigger>
      <SheetContent
        side="left"
        class="border-none bg-dark-1"
        aria-describedby="undefined"
      >
        <VisuallyHidden>
          <SheetTitle>Menu</SheetTitle>
        </VisuallyHidden>
        <router-link to="/" class="flex items-center gap-2">
          <img
            src="/icons/logo.svg"
            width="32"
            height="32"
            alt="app logo"
            class="max-sm:size-10"
          />
          <p class="text-[26px] font-extrabold text-white">VLL</p>
        </router-link>

        <div
          class="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto"
        >
          <SheetClose>
            <section class="flex h-full flex-col gap-6 pt-16 text-white/70">
              <router-link
                v-for="menu in menuList"
                :key="menu.route"
                :to="menu.route"
                :exact="true"
                class="menu px-4 py-4 rounded-lg w-full max-w-60"
              >
                <div class="flex gap-4 items-center">
                  <component :is="menu.icon" size="20" />
                  <div class="font-semibold">
                    {{ menu.label }}
                  </div>
                </div>
              </router-link>
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  </section>
</template>
