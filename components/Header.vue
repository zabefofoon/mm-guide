<template>
  <header
    class="sticky top-0 left-0 z-20 | flex items-center | py-3 px-10 | bg-white shadow-md">
    <router-link to="/" class="flex items-center gap-2 py-1">
      <Logo />
      <span class="font-black text-slate-800">MM-GUIDE</span>
    </router-link>
    <nav class="flex gap-8 items-center | ml-auto">
      <router-link to="/docs">Docs</router-link>
      <a href="https://zabefofoon.github.io/mm-embedded/#/" target="_blank">
        <button
          class="bg-slate-800 | px-4 py-1 | rounded-full | text-white font-bold text-sm">
          Get Started
        </button>
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
</script>

<style></style>
