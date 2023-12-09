<template>
  <NuxtLayout name="layout-documents">
    <main class="w-full min-h-screen | pt-8 pb-40 px-4 md:px-12 | border-r">
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
        <div class="w-full overflow-auto">
          <input
            class="w-full break-all text-sm | bg-slate-100 | p-2"
            readonly
            value="https://zabefofoon.github.io/mm-embedded/#/?hideEdit=false&hideLoad=false&hideScreenXl=false&hideScreenl=false&hideScreenM=false&hideScreenS=false&hideSpacing=false&hideOutline=false&hideHidden=false&hideMarker=false&hideAnalyzeWidget=false" />
        </div>
        <br />
        <div class="overflow-auto">
          <EmbeddedOptions />
        </div>
      </DocsSection>
      <DocsSection id="Events">
        <h2 class="text-3xl">Events</h2>
        <p class="leading-relaxed">
          <span class="font-bold">From Iframe</span><br />
          When using &lt;iframe /&gt;, try checking events with
          <br />
          <span class="text-sm bg-slate-200">
            window.addEventListener('message', console.log)
          </span>
        </p>
        <div class="overflow-auto">
          <EmbeddedEventsFromIframe />
        </div>
        <br />
        <p class="leading-relaxed">
          <span class="font-bold">To Iframe</span><br />
          You can transmit events through &lt;iframe id="editor" /&gt;.
          <br />
          <span class="text-sm bg-slate-200">
            editor.contentWindow.postMessage(data, '*')
          </span>
        </p>
        <div class="overflow-auto">
          <EmbeddedEventsToIframe />
        </div>
      </DocsSection>
      <div class="flex | mt-20 md:mt-40">
        <NuxtLink
          class="flex items-center gap-2 | text-sm"
          to="/documents/howToUse">
          <i class="icon icon-arrow-left text-xs"></i>
          <span>How to use</span>
        </NuxtLink>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import DocsBreadcrumb from '~/components/DocsBreadcrumb.vue'
import DocsSection from '~/components/DocsSection.vue'

useSeoMeta({
  title: 'MM | Embedded',
  ogTitle: 'MM | Embedded',
  description: 'MM Embedded',
  ogDescription: 'MM Embedded',
})
</script>

<style></style>
