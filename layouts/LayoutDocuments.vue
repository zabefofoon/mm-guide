<template>
  <Header />
  <div class="flex | max-w-[1200px] | mx-auto">
    <DocsMenus />
    <slot />
    <div class="md:w-60"></div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import DocsMenus from '~/components/DocsMenus.vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
</script>
