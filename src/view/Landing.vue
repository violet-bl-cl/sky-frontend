<template>
  <div
    class="flex justify-start flex-col text-[#ffffff] text-[24px]"
    :style="getSize()"
  >
    <div class="relative h-[80%] w-full" :style="{ border: '1px black solid' }">
      <div
        class="top-[0px] absolute h-[100%] w-full flex justify-center items-center z-30"
        :style="{
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0) ${20}%, rgb(0 0 0) ${90}%)`,
        }"
      >
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-row gap-2">
            <GradientText
              :gradient-colors="[
                { color: '#103846', amount: '5%' },
                { color: '#ffffff', amount: '55%' },
                { color: '#ffffff', amount: '95%' },
              ]"
              :font-style="'text-[24px] bg-clip-text text-transparent'"
            >
              Hi, I'm
            </GradientText>
            <GradientText
              :gradient-colors="[
                { color: '#103846', amount: '5%' },
                { color: '#59d5ff', amount: '55%' },
                { color: '#59d5ff', amount: '95%' },
              ]"
              :font-style="'text-[24px] bg-clip-text text-transparent'"
            >
              Sky</GradientText
            >
          </div>
          <div>
            <GradientText
              :gradient-colors="[
                { color: '#103846', amount: '2%' },
                { color: '#ffffff', amount: '45%' },
                { color: '#ffffff', amount: '95%' },
              ]"
              :font-style="'text-[12px] bg-clip-text text-transparent'"
            >
              An Artistic and Passionate Developer
            </GradientText>
          </div>
        </div>
      </div>
      <div
        class="h-[100%] w-full absolute top-[0px] z-20"
        :style="{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
        }"
      ></div>
      <Renderer class="z-10" />
    </div>
    <div
      class="h-[20%] w-full flex justify-center items-center bg-[#000000]"
      :style="{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
        border: '1px solid black',
      }"
    >
      <GradientText
        :gradient-colors="[
          { color: '#103846', amount: '5%' },
          { color: '#5A5A5A', amount: '55%' },
          { color: '#5A5A5A', amount: '95%' },
        ]"
        :font-style="'text-[12px] bg-clip-text text-transparent'"
      >
        Swipe up to view
      </GradientText>
    </div>
  </div>
</template>
<script setup lang="ts">
import GradientText from "@components/GradientText.vue";
import Renderer from "@components/Renderer.vue";
import { useResponsiveManager } from "../composables/useResponsiveManager";
const { getSize } = useResponsiveManager();
</script>
<style lang="scss"></style>
