<template>
  <NuxtLayout name="layout-documents">
    <main class="w-full min-h-screen | pt-8 pb-40 px-12 | border-r">
      <DocsBreadcrumb name="Embedded" link="/documents/embedded" />
      <DocsSection>
        <p>
          You can use the editor as an &lt;iframe&gt;, providing more
          flexibility to your project. Utilize URL query parameters to set
          custom options, and exchange data dynamically through message events,
          effectively manipulating the editor. Embed your unique ideas into the
          project, creating a new dimension of experience.
        </p>
      </DocsSection>
      <DocsSection id="Options">
        <h2 class="text-3xl">Options</h2>
        <input
          class="break-all text-sm | bg-slate-100 | p-2"
          readonly
          value="https://zabefofoon.github.io/mm-embedded/#/?hideEdit=false&hideLoad=false&hideScreenXl=false&hideScreenl=false&hideScreenM=false&hideScreenS=false&hideSpacing=false&hideOutline=false&hideHidden=false&hideMarker=false&hideAnalyzeWidget=false" />
        <br />
        <EmbeddedOptions />
      </DocsSection>
      <DocsSection id="Events">
        <h2 class="text-3xl">Events</h2>
        <EmbeddedEvents />
      </DocsSection>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import DocsBreadcrumb from '~/components/DocsBreadcrumb.vue'
import DocsSection from '~/components/DocsSection.vue'

useSeoMeta({
  title: 'MM-GUIDE | Embedded',
  ogTitle: 'MM-GUIDE | Embedded',
  description: 'MM-GUIDE Embedded',
  ogDescription: 'MM-GUIDE Embedded',
})
</script>

<style></style>
