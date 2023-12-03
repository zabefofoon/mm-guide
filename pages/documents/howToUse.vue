<template>
  <NuxtLayout name="layout-documents">
    <main class="w-full min-h-screen | py-8 px-12 | border-r">
      <DocsBreadcrumb name="How to use" link="/documents/howToUse" />
      <DocsSection id="Layouts">
        <h2 class="text-3xl font-bold">Layouts</h2>
        <p class="leading-relaxed">
          With the use of a graphical user interface (GUI), you can effortlessly
          create layouts based on CSS. Additionally, you have the flexibility to
          tailor attributes based on screen size, allowing you to implement
          layouts that adapt to a variety of screen sizes and devices.
        </p>
        <br />
        <p class="font-bold">Create Node</p>
        <HowToUseCreateNode />
        <br />
        <p class="font-bold">Config Node</p>
        <HowToUseConfigNode />
        <br />
        <p class="leading-relaxed">
          <span class="font-bold">Responsive Field</span><br />
          The responsive layout feature involves configuring node properties
          differently for two screen sizes: large and small screens.<br />For
          instance, the
          <button class="border border-slate-300 | px-2 | text-sm">
            0px ~
          </button>
          button's properties are defined from 0px up to the specified
          breakpoint, while the
          <button class="border border-slate-300 | px-2 | text-sm">
            768px ~
          </button>
          button's properties span from the breakpoint to the maximum screen
          size.
        </p>
      </DocsSection>
      <DocsSection id="Widgets">
        <h2 class="text-3xl font-bold">Widgets</h2>
        <p>
          <button class="py-1 px-2 | rounded-full bg-blue-500 text-white">
            <i class="icon icon-grid"></i>
          </button>
          Clicking this button displays the widget configuration window, where
          you can input the widget's name, description, HTML, and CSS.
        </p>
        <HowToUseWidgets />
      </DocsSection>
      <DocsSection style="height: 1200px" id="Utils">
        <h2 class="text-3xl font-bold">Utils</h2>
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

<style scoped lang="scss"></style>
