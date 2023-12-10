<template>
  <NuxtLayout name="layout-documents">
    <main class="w-full min-h-screen | pt-8 pb-40 px-4 md:px-12 | border-r">
      <DocsBreadcrumb name="Demo" link="/documents/demo" />
      <DocsSection>
        <p>
          After downloading the file, try load the data in the editor.
          (
          <button
            class="flex-inline items-center | px-1 | text-slate-500 border border-slate-500"
            title="File upload">
            <i class="icon icon-upload"></i>
          </button>
          )
        </p>
      </DocsSection>
      <DocsSection id="Options">
        <h2 class="text-3xl">Pages</h2>
        <br />
        <div class="flex flex-col items-start gap-4">
          <button class="underline text-slate-500"
                  @click="download('leftAndRightAsideLayout')">- Left and right aside layout</button>
          <button class="underline text-slate-500"
                  @click="download('cardListLayout')">- Card list layout</button>
        </div>
      </DocsSection>
      <div class="flex | mt-20 md:mt-40">
        <NuxtLink
          class="flex items-center gap-2 | text-sm"
          to="/documents/embedded">
          <i class="icon icon-arrow-left text-xs"></i>
          <span>Embedded</span>
        </NuxtLink>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import DocsBreadcrumb from '~/components/DocsBreadcrumb.vue'
import DocsSection from '~/components/DocsSection.vue'
import leftAndRightAsideLayoutJson from '~/assets/jsons/leftAndRightAsideLayout.json'
import cardListLayout from '~/assets/jsons/CardListLayout.json'

useSeoMeta({
  title: 'MM | Embedded',
  ogTitle: 'MM | Embedded',
  description: 'MM Embedded',
  ogDescription: 'MM Embedded',
})

type DownloadType = 'leftAndRightAsideLayout' | 'cardListLayout'

const getJsonByType = (type: DownloadType) => {
  let json

  if (type === 'leftAndRightAsideLayout')
    json = leftAndRightAsideLayoutJson
  if (type === 'cardListLayout')
    json = cardListLayout

  return json
}

const download = (type: DownloadType) => {
  const element = document.createElement('a')
  element.setAttribute(
    'href',
    `data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(getJsonByType(type)))}`
  )
  element.setAttribute('download', 'data.json')
  document.body.appendChild(element)

  element.click()
  document.body.removeChild(element)
}
</script>

<style></style>
