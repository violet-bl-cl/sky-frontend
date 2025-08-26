<script setup lang="ts">
import { onMounted } from "vue";
import ResponsiveContainer from "./components/ResponsiveContainer.vue";
import { useResponsiveManager } from "./composables/useResponsiveManager";
import Experience from "./view/Experience.vue";
import Landing from "./view/Landing.vue";
const { getSize, resolution } = useResponsiveManager();
// let scrollTimer: ReturnType<typeof setTimeout> | null = null;
onMounted(() => {
  resolution.resize = false;
});
</script>
<!--navigate route links will be routed to router view component-->
<template>
  <!-- Mobile only -->
  <ResponsiveContainer>
    <Landing />
  </ResponsiveContainer>
  <ResponsiveContainer>
    <Experience />
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
