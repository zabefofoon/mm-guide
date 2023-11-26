<template>
  <NuxtLayout name="layout-documents">
    <main class="w-full min-h-screen | py-8 px-12 | border-r">
      <DocsBreadcrumb name="Introduction" link="/documents/introduction" />
      <DocsSection id="WhatIsMM">
        <h2 class="text-3xl font-bold">What is MM?</h2>
        <p class="leading-relaxed">
          MM (Mark Up Manager) is an innovative tool that allows for more
          effective design and management of HTML and CSS. True to its name,
          'Mark Up Manager' assists in the management of code markup, providing
          a GUI for intuitive and swift design.
        </p>
        <br />
        <p>
          <span class="font-bold">Convenient Layout Design</span><br />
          MM allows easy manipulation of website layouts through GUI controls
          and keyboard shortcuts. Leveraging responsive attributes, you can
          effortlessly construct websites that adapt seamlessly to various
          devices, including mobile platforms.
        </p>
        <br />
        <p>
          <span class="font-bold">Widget Creation Feature</span><br />
          You can create a variety of widgets by directly writing HTML and CSS.
          Build layouts and register widgets in specific areas with ease,
          offering a high level of customization.
        </p>
        <br />
        <p>
          <span class="font-bold">Efficient CSS generation</span><br />
          Utilizing various properties, diverse styles are automatically formed,
          allowing users to easily implement their desired designs.
        </p>
        <br />
        <p>
          <span class="font-bold">Workspace Configuration</span><br />
          Utilize the &lt;iframe&gt; element to effortlessly set up a personal
          workspace. Efficiently organize various working environments required
          for your projects.
        </p>
        <br />
        <p>
          <span class="font-bold">Comment and Collaboration Features</span
          ><br />
          Write comments to exchange opinions with other users. Strengthen team
          collaboration and efficiently manage feedback on projects.
        </p>
        <br />
        <p>
          MM provides an intuitive and collaboration-centric environment for
          both web designers and developers. Reduce the hassle of code writing
          and complete the web design process more efficiently.
        </p>
      </DocsSection>
      <DocsSection style="height: 1200px" id="History">
        <h2 class="text-3xl">History</h2>
        <p>MM in Mark up manager for HTML and CSS.</p>
      </DocsSection>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import DocsBreadcrumb from '~/components/DocsBreadcrumb.vue'
import DocsSection from '~/components/DocsSection.vue'

useSeoMeta({
  title: 'MM-GUIDE > Documents > Introduction',
  ogTitle: 'MM-GUIDE > Documents > Introduction',
  description: 'MM-GUIDE Introduction',
  ogDescription: 'MM-GUIDE Introduction',
})
</script>

<style></style>
