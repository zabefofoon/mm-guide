<template>
  <Header />
  <div class="flex | max-w-[1200px] | mx-auto">
    <DocsMenus />
    <slot />
    <div class="md:w-60">
      <nav class="hidden md:block sticky top-14 left-0 | m-4">
        <iframe
          width="120"
          height="600"
          allowtransparency="true"
          src="https://tab2.clickmon.co.kr/pop/wp_ad_120.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1138899%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL&mon_direct_url=URLENCODE_PASSBACK_INPUT"
          frameborder="0"
          scrolling="no"></iframe>
      </nav>
    </div>
    <nav class="flex items-center justify-center | fixed bottom-0 z-10 | w-full h-[64px] | md:hidden">
      <iframe width="320" height="50" allowtransparency="true" src="https://mtab.clickmon.co.kr/pop/wp_m_320.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1138899%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL&mon_direct_url=URLENCODE_PASSBACK_INPUT" frameborder="0" scrolling="no"></iframe>
    </nav>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import DocsMenus from '~/components/DocsMenus.vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'


</script>
