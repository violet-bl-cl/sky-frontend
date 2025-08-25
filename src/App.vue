<script setup lang="ts">
import Renderer from "./components/Renderer.vue";
import ResponsiveContainer from "./components/ResponsiveContainer.vue";
import { useResponsiveManager } from "./composables/useResponsiveManager";
const { getSize } = useResponsiveManager();
</script>
<!--navigate route links will be routed to router view component-->
<template>
  <!-- Mobile only -->
  <ResponsiveContainer>
    <div
      class="bg-[#ff0000] flex justify-start text-[#ffffff] text-[24px]"
      :style="getSize()"
    >
      <Renderer />
    </div>
  </ResponsiveContainer>
  <ResponsiveContainer>
    <div
      class="bg-[#2a1ad4] flex justify-end items-end p-5 text-[#ffffff] text-[24px]"
      :style="getSize()"
    >
      Page 2
    </div>
  </ResponsiveContainer>
  <ResponsiveContainer>
    <div
      class="bg-[#7eb628] flex justify-end items-end p-5 text-[#ffffff] text-[24px]"
      :style="getSize()"
    >
      Page 3
    </div>
  </ResponsiveContainer>
</template>

<!--    <router-view v-slot="{component}">-->
<!--        <component :is="component" />-->
<!--    </router-view>-->
<style scoped lang="scss"></style>
