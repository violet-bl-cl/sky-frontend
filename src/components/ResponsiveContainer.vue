<template>
  <div
    class="flex flex-col overflow-hidden transition-all duration-100 ease-in-out"
    :style="getSize()"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useResponsiveManager } from "../composables/useResponsiveManager.ts";
import { onMounted } from "vue";
const { getSize, initializeResponsiveManager } = useResponsiveManager();
onMounted(() => {
  initializeResponsiveManager();
});
</script>
<style lang=""></style>
