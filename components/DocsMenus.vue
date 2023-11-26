<template>
  <aside class="w-60 | border">
    <nav class="sticky top-14 left-0">
      <ul class="flex flex-col gap-4 | p-4">
        <li v-for="menu in menus" :key="menu.name" class="flex flex-col gap-1">
          <RouterLink :to="menu.link">
            <span class="font-bold text-slate-800">{{ menu.name }}</span>
          </RouterLink>
          <ul class="px-2">
            <RouterLink
              v-for="child in menu.children"
              :key="menu.name"
              :to="child.link">
              <li>
                {{ child.name }}
              </li>
            </RouterLink>
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
    link: '/documents',
    children: [
      { name: 'What is MM?', link: '/documents/instruction#WhatIsMM' },
      { name: 'History', link: '/documents/instruction#History' },
    ],
  },
  {
    name: 'Menual',
    link: '/documents',
    children: [
      { name: 'Layouts', link: '/' },
      { name: 'Widgets', link: '/' },
    ],
  },
  {
    name: 'Embedded',
    link: '/documents',
    children: [
      { name: 'Options', link: '/' },
      { name: 'Events', link: '/' },
    ],
  },
]
</script>

<style></style>
