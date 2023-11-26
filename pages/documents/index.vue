<template>
  <NuxtLayout name="layout-documents">
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup lang="ts">
navigateTo('/documents/introduction', { replace: true })
</script>

<style></style>
