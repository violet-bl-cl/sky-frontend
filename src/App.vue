<script setup lang="ts">
import ResponsiveContainer from "./components/ResponsiveContainer.vue";
import { useResponsiveManager } from "./composables/useResponsiveManager";
import Landing from "./view/Landing.vue";
const { getSize } = useResponsiveManager();
</script>
<!--navigate route links will be routed to router view component-->
<template>
  <!-- Mobile only -->
  <ResponsiveContainer>
    <Landing />
  </ResponsiveContainer>
  <ResponsiveContainer>
    <div
      class="bg-[#000000] flex justify-end items-end p-5 text-[#ffffff] text-[24px] transition-all duration-300 ease-in-out"
      :style="getSize()"
    >
      Page 2
    </div>
  </ResponsiveContainer>
  <ResponsiveContainer>
    <div
      class="bg-[#000000] h-full flex justify-end items-end p-5 text-[#ffffff] text-[24px] transition-all duration-300 ease-in-out"
      :style="getSize()"
    >
      Page 3
    </div>
  </ResponsiveContainer>
  <ResponsiveContainer>
    <div
      class="bg-[#000000] h-full flex justify-end items-end p-5 text-[#ffffff] text-[24px] transition-all duration-300 ease-in-out"
      :style="getSize()"
    >
      Page 4
    </div>
  </ResponsiveContainer>
  <ResponsiveContainer>
    <div
      class="bg-[#000000] h-full flex justify-end items-end p-5 text-[#ffffff] text-[24px] transition-all duration-300 ease-in-out"
      :style="getSize()"
    >
      Page 5
    </div>
  </ResponsiveContainer>
  <ResponsiveContainer>
    <div
      class="bg-[#000000] h-full flex justify-end items-end p-5 text-[#ffffff] text-[24px] transition-all duration-300 ease-in-out"
      :style="getSize()"
    >
      Page 6
    </div>
  </ResponsiveContainer>
</template>

<!--    <router-view v-slot="{component}">-->
<!--        <component :is="component" />-->
<!--    </router-view>-->
<style scoped lang="scss"></style>
