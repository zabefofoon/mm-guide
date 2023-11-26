<template>
  <ul class="flex gap-2">
    <li>
      <RouterLink to="/documents" class="text-slate-400 text-sm">
        Documents <span class="icon icon-arrow-right | text-xs"></span>
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="link" class="font-bold text-slate-800 text-sm">
        {{ name }}
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  link: string
  name: string
}>()
</script>

<style></style>
