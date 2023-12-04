<template>
  <div class="logo flex items-center">
    <div class="ball big"></div>
    <div class="ball small"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  padding: 0 4px;
  filter: contrast(20);
  color: white;
  background: white;
  overflow: hidden;

  .ball {
    aspect-ratio: 1;

    display: inline-block;

    background: #1e293b;
    border-radius: 9999px;
    filter: blur(5px);

    &.big {
      width: 20px;
      transform: translate(0px, 1px);

      @media (min-width: 768px) {
        width: 24px;
      }
    }

    &.small {
      width: 16px;
    }

    @media (min-width: 768px) {
      width: 20px;
    }
  }
}
</style>
