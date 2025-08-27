<template>
  <div
    class="relative h-full w-full p-0 m-0 overflow-hidden transition-all duration-300 ease-in-out"
  >
    <img class="h-full w-full object-cover" :src="image" />
  </div>
</template>
<script setup lang="ts">
import image from "@asset/test.jpg";
</script>
<style lang="scss" scoped></style>
