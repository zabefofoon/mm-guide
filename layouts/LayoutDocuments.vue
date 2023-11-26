<template>
  <Header />
  <div class="flex">
    <DocsMenus />
    <slot></slot>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import DocsMenus from '~/components/DocsMenus.vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
</script>
