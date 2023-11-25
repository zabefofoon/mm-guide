<template>
  <aside class="w-60 | border">
    <nav class="sticky top-14 left-0">
      <ul class="flex flex-col gap-4 | p-4">
        <li v-for="menu in menus" :key="menu.name" class="flex flex-col gap-1">
          <span class="font-bold text-slate-800">{{ menu.name }}</span>
          <ul class="px-2">
            <li v-for="child in menu.children" :key="menu.name">
              {{ child.name }}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const menus = [
  {
    name: 'Instruction',
    link: '/docs',
    children: [
      { name: 'What is MM', link: '/docs' },
      { name: 'History', link: '/docs' },
    ],
  },
  {
    name: 'Menual',
    link: '/docs',
    children: [
      { name: 'Layouts', link: '/docs' },
      { name: 'Widgets', link: '/docs' },
    ],
  },
  {
    name: 'Embedded',
    link: '/docs',
    children: [
      { name: 'Options', link: '/docs' },
      { name: 'Events', link: '/docs' },
    ],
  },
]
</script>

<style></style>
