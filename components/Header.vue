<template>
  <header
    class="sticky top-0 left-0 z-20 | flex items-center | py-2 lg:py-3 px-3 lg:px-10 | bg-white shadow-md">
    <NuxtLink to="/" class="flex items-center lg:gap-2 py-1">
      <Logo />
      <span class="font-black text-slate-800"> MM </span>
    </NuxtLink>
    <button class="md:hidden flex | ml-auto" @click="showDrawer(!isShowDrawer)">
      <i v-if="isShowDrawer" class="icon icon-close text-2xl"></i>
      <i v-else class="icon icon-bars text-2xl"></i>
    </button>
    <nav class="hidden lg:flex gap-6 items-center | ml-auto">
      <a href="https://www.buymeacoffee.com/zabefofoon1" target="_blank" class="text-sm">
        😭 Buy me coffee
      </a>
      |
      <NuxtLink to="/documents" class="text-sm">Docs</NuxtLink>
      <a href="https://zabefofoon.github.io/mm-embedded/" target="_blank">
        <button
          class="bg-slate-800 | px-4 py-1.5 | rounded-full | text-white font-bold text-xs">
          Get Started
        </button>
      </a>
    </nav>
    <HeaderDrawer v-if="isShowDrawer" @close="showDrawer(false)" />
  </header>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'

const isShowDrawer = ref(false)
const showDrawer = (value: boolean) => {
  isShowDrawer.value = value
}
</script>

<style scoped lang="scss"></style>
