<template>
  <Header />
  <main>
    <section>
      <div
        class="flex flex-col md:gap-8 | px-4 md:px-0 py-20 pt-40 md:py-40 | lg:text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800">
          Markup manager for HTML&CSS
        </h2>
        <p class="mt-4 md:mt-0 | text-xl md:text-2xl text-slate-500">
          Make layouts and add widgets.
        </p>
        <div
          class="mt-8 md:mt-0 | flex flex-col md:flex-row gap-3 md:gap-4 md:items-center justify-center">
          <a href="https://zabefofoon.github.io/mm-embedded/" target="_blank">
            <button
              class="w-full | bg-slate-800 | px-6 py-2 | rounded-full | text-white font-bold">
              Get Started
            </button>
          </a>
          <NuxtLink to="/documents">
            <button
              class="w-full | border border-slate-500 hover:bg-slate-800 | px-6 py-2 | rounded-full | text-slate-500 font-bold md:hover:text-white">
              Docs
            </button>
          </NuxtLink>
          <a href="https://www.buymeacoffee.com/zabefofoon1" 
             target="_blank"
             class="text-slate-800 text-center">
            😭 Buy me coffee
          </a>
        </div>
      </div>
    </section>
    <section
      class="grid grid-cols-1 lg:grid-cols-4 gap-12 | w-fit | mx-auto py-20 px-4 md:px-0 md:py-40 | border-t">
      <div class="flex flex-col gap-4 lg:max-w-[300px]">
        <h4 class="font-bold text-slate-800">Intuitive</h4>
        <p class="text-slate-500">
          Our intuitive and user-friendly GUI streamlines complex tasks,
          empowering users to effortlessly perform a wide range of operations.
        </p>
      </div>
      <div class="flex flex-col gap-4 lg:max-w-[300px]">
        <h4 class="font-bold text-slate-800">Low CSS</h4>
        <p class="text-slate-500">
          Utilizing various properties, diverse styles are automatically formed,
          allowing users to easily implement their desired designs.
        </p>
      </div>
      <div class="flex flex-col gap-4 lg:max-w-[300px]">
        <h4 class="font-bold text-slate-800">Embeddable</h4>
        <p class="text-slate-500">
          Anticipating &lt;iframe&gt; usage, it emits appropriate events,
          allowing you to manipulate your personalized workspace flexibly.
          Experience a smoother workflow with this feature.
        </p>
      </div>
      <div class="flex flex-col gap-4 lg:max-w-[300px]">
        <h4 class="font-bold text-slate-800">Commentable</h4>
        <p class="text-slate-500">
          Embrace diverse opinions and seize the opportunity for communication.
          Share your comments to negotiate viewpoints with others and
          collaboratively shape better ideas together.
        </p>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

useSeoMeta({
  title: 'MM(Mark up Manager)',
  ogTitle: 'MM(Mark up Manager)',
  description: 'Mark up manager guide page',
  ogDescription: 'Mark up manager guide page',
})
</script>
