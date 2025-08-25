<template>
  <div class="flex flex-col overflow-hidden" :style="getSize()">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useResponsiveManager } from "../composables/useResponsiveManager.ts";
import { onMounted, onUnmounted } from "vue";
const { getSize, initializeResponsiveManager, removeResponsiveManager } =
  useResponsiveManager();
onMounted(() => {
  initializeResponsiveManager();
});
onUnmounted(() => {
  removeResponsiveManager();
});
</script>
<style lang=""></style>
