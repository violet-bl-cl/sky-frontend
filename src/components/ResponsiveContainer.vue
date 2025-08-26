<template>
  <div
    class="flex flex-col overflow-hidden responsive-container"
    :style="getSize()"
  >
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
  const container = document.querySelector(
    ".responsive-container"
  ) as HTMLDivElement;
  setTimeout(() => {
    container.classList.add("transition-all");
    container.classList.add("duration-300");
    container.classList.add("ease-in-out");
  }, 300);
});
onUnmounted(() => {
  removeResponsiveManager();
});
</script>
<style lang=""></style>
