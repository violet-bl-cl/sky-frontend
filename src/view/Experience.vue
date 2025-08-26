<template>
  <div
    class="bg-[#000000] flex justify-between items-center flex-col p-5 text-[#ffffff] text-[24px] transition-all duration-300 ease-in-out"
    :style="getSize()"
  >
    <div
      class="relative h-[50%] w-full flex justify-center items-center flex-col"
      :style="{ border: '1px black solid' }"
    >
      <div
        class="top-[0px] absolute h-[100%] w-full flex justify-center items-center z-30"
        :style="{
          backgroundImage: `radial-gradient(circle, rgba(1, 1, 1, 0) ${40}%, rgb(0 0 0) ${90}%)`,
        }"
      ></div>
      <div
        class="absolute h-[100%] w-full flex justify-between flex-col bg-transparent"
      >
        <div
          class="h-[20%] w-full top-[0px] z-20"
          :style="{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
          }"
        ></div>
        <div
          class="h-[20%] w-full top-[0px] z-20"
          :style="{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
          }"
        ></div>
      </div>
      <Renderer class="z-10" />
    </div>
    <div>Hello</div>
  </div>
</template>
<script lang="ts" setup>
import Renderer from "../components/Renderer.vue";
import { useResponsiveManager } from "../composables/useResponsiveManager";
const { getSize } = useResponsiveManager();
</script>
<style lang=""></style>
