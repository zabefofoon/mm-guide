<template>
  <footer class="relative | mt-auto py-20 px-4 lg:px-10 | bg-slate-950 text-slate-100">
    <div class="grid md:grid-cols-4 gap-8 md:gap-0">
      <div class="flex flex-col gap-4">
        <div>
          <h2 class="font-bold text-xl">
            <NuxtLink to="/">MM</NuxtLink>
          </h2>
          <p>Mark up manager</p>
        </div>

        <div class="flex gap-3">
          <NuxtLink
            target="_blank"
            to="https://www.youtube.com/watch?v=tbR1realYeo"
            class="text-2xl">
            <i class="icon icon-youtube"></i>
          </NuxtLink>
          <NuxtLink
            target="_blank"
            to="https://www.threads.net/@sangwwooo/post/C7yzgMehXEg"
            class="text-2xl">
            <i class="icon icon-threads"></i>
          </NuxtLink>
        </div>
      </div>
      <ul class="flex flex-col gap-1">
        <li class="text-sm">
          <NuxtLink
            to="https://zabefofoon.github.io/mm-embedded/"
            target="_blank"
            class="underline">
            Get Started
          </NuxtLink>
        </li>
        <li class="text-sm">
          <NuxtLink to="/documents" class="underline"> Docs </NuxtLink>
        </li>
      </ul>
      <div class="flex flex-col gap-1">
        <p class="text-sm">Contact</p>
        <p class="text-sm">zabefofoon@gmail.com</p>
      </div>
      <div class="flex flex-col gap-1 | relative">
        <p class="flex gap-1 | text-sm">
          <NuxtLink
            to="https://www.buymeacoffee.com/zabefofoon1"
            target="_blank">
            😭 Buy me coffee
          </NuxtLink>
          <NuxtLink to="https://zabefofoon.github.io/about/#/" target="_blank">
            <i class="icon icon-arrow-right text-xs"></i>
          </NuxtLink>
        </p>
        <button
          class="absolute right-0 | flex | p-1 | border"
          @click="scrollTop">
          <i class="icon icon-arrow-top text-xl"></i>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollTop = () => window.scrollTo(0, 0)
</script>

<style scoped></style>
