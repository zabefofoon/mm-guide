<template>
  <NuxtLayout name="layout-documents">
    <main class="w-full min-h-screen | py-8 px-12 | border-r">
      <DocsBreadcrumb name="How to use" link="/documents/howToUse" />
      <DocsSection style="height: 1200px" id="History">
        <h2 class="text-3xl">History</h2>
        <p>MM in Mark up manager for HTML and CSS.</p>
      </DocsSection>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import DocsBreadcrumb from '~/components/DocsBreadcrumb.vue'
import DocsSection from '~/components/DocsSection.vue'

useSeoMeta({
  title: 'MM-GUIDE | HowToUse',
  ogTitle: 'MM-GUIDE | HowToUse',
  description: 'MM-GUIDE HowToUse',
  ogDescription: 'MM-GUIDE HowToUse',
})
</script>

<style></style>
