<template>
  <NuxtLayout name="layout-documents">
    <main class="w-full min-h-screen | py-4 px-12">
      <DocsBreadcrumb name="Instruction" link="/documents/instruction" />
      <DocsSection style="height: 1200px" id="WhatIsMM">
        <h2 class="text-2xl">What is MM?</h2>
        <p>MM in Mark up manager for HTML and CSS.</p>
      </DocsSection>
      <DocsSection style="height: 1200px" id="History">
        <h2 class="text-2xl">History</h2>
        <p>MM in Mark up manager for HTML and CSS.</p>
      </DocsSection>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import DocsBreadcrumb from '~/components/DocsBreadcrumb.vue'
import DocsSection from '~/components/DocsSection.vue'

useSeoMeta({
  title: 'MM-GUIDE > Documents > Instruction',
  ogTitle: 'MM-GUIDE > Documents > Instruction',
  description: 'MM-GUIDE Instruction',
  ogDescription: 'MM-GUIDE Instruction',
})
</script>

<style></style>
