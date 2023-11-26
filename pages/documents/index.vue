<template>
  <NuxtLayout name="layout-documents">
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
    
  </NuxtLayout>
</template>

<script setup lang="ts">
navigateTo('/documents/instruction', {replace: true})
</script>

<style></style>
