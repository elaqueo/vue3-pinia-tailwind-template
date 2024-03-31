<template>
  <section class="flex size-full flex-col gap-10 text-white">
    <div class="h-[300px] w-full rounded-lg bg-hero bg-cover">
      <div
        class="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11"
      >
        <h2
          class="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal"
        >
          Upcoming meeting at: 12:30 PM
        </h2>
        <div class="flex flex-col gap-2">
          <h1 class="text-4xl font-extrabold lg:text-7xl">{{ time }}</h1>
          <p class="text-lg font-medium text-sky-100 lg:text-2xl">
            {{ date }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const now = new Date();

const time = now.toLocaleTimeString('es-AR', {
  hour: '2-digit',
  minute: '2-digit',
});
const date = new Intl.DateTimeFormat('es-AR', {
  dateStyle: 'full',
}).format(now);
</script>

<style scoped></style>
