<template>
  <nav
    class="py-3 px-4 | absolute bottom-0 left-0 translate-y-full | w-full max-h-[80vh] overflow-auto | bg-white border-t border-b shadow-md">
    <ul class="flex flex-col" v-click-away="() => emit('close')">
      <router-link to="/documents">
        <li class="py-2">Introduction</li>
      </router-link>
      <router-link to="/documents/howToUse">
        <li class="py-2">How To Use</li>
      </router-link>
      <router-link to="/documents/embedded">
        <li class="py-2">Embedded</li>
      </router-link>
      <router-link to="/documents/demo">
        <li class="py-2">Demo</li>
      </router-link>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { directive as vClickAway } from 'vue3-click-away'

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
