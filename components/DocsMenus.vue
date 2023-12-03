<template>
  <aside class="w-60 | border-r">
    <nav class="sticky top-14 left-0">
      <ul class="flex flex-col gap-4 | py-8">
        <li v-for="menu in menus" :key="menu.name" class="flex flex-col gap-1">
          <RouterLink :to="menu.link">
            <span class="font-bold text-slate-800">{{ menu.name }}</span>
          </RouterLink>
          <ul class="px-2">
            <RouterLink
              v-for="child in menu.children"
              :key="menu.name"
              :to="child.link">
              <li class="text-slate-800">
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
type Menu = {
  name: string
  link: string
  id?: string
  children?: Menu[]
}

const menus: Menu[] = [
  {
    name: 'Introduction',
    link: '/documents',
    children: [
      {
        name: 'What is MM?',
        link: '/documents/introduction#WhatIsMM',
        id: 'WhatIsMM',
      },
      {
        name: 'History',
        link: '/documents/introduction#History',
        id: 'History',
      },
    ],
  },
  {
    name: 'How to use',
    link: '/documents/howToUse',
    children: [
      {
        name: 'Layouts',
        link: '/documents/howToUse#Layouts',
        id: 'Layouts',
      },
      {
        name: 'Widgets',
        link: '/documents/howToUse#Widgets',
        id: 'Widgets',
      },
      {
        name: 'Utils',
        link: '/documents/howToUse#Utils',
        id: 'Utils',
      },
    ],
  },
  {
    name: 'Embedded',
    link: '/documents/embedded',
    children: [
      {
        name: 'Options',
        link: '/documents/embedded#Options',
        id: 'Options',
      },
      {
        name: 'Events',
        link: '/documents/embedded#Events',
        id: 'Events',
      },
    ],
  },
]
</script>

<style></style>
