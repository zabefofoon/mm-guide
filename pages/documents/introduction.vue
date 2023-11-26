<template>
  <NuxtLayout name="layout-documents">
    <main class="w-full min-h-screen | py-8 px-12">
      <DocsBreadcrumb name="Introduction" link="/documents/introduction" />
      <DocsSection style="height: 1200px" id="WhatIsMM">
        <h2 class="text-3xl">What is MM?</h2>
        <p>MM in Mark up manager for HTML and CSS.</p>
      </DocsSection>
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
  title: 'MM-GUIDE > Documents > Introduction',
  ogTitle: 'MM-GUIDE > Documents > Introduction',
  description: 'MM-GUIDE Introduction',
  ogDescription: 'MM-GUIDE Introduction',
})
</script>

<style></style>
