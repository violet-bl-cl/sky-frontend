<template>
  <div
    class="bg-[#000000] flex justify-between items-center flex-col text-[#ffffff] text-[24px] experience"
    :style="getSize()"
  >
    <div
      class="relative h-[30%] w-full flex justify-center items-center flex-col"
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
          class="h-[30%] w-full top-[0px] z-20"
          :style="{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
          }"
        ></div>
        <div
          class="h-[30%] w-full top-[0px] z-20"
          :style="{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
          }"
        ></div>
      </div>
      <Renderer class="z-10" />
    </div>
    <div class="h-[70%] w-full">
      <Highlight :content="experienceData" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, watchEffect } from "vue";
import gsap from "gsap";
import Renderer from "../components/Renderer.vue";
import { useResponsiveManager } from "../composables/useResponsiveManager";
import Highlight from "../components/Highlight.vue";
import type { HighLightContent } from "../interface/HighLight";
const { getSize, resolution } = useResponsiveManager();
const experienceData: HighLightContent = {
  mainTitle: "Experience",
  id: "experience",
  sections: [
    {
      role: "Full Stack Engineer",
      duration: "Jan 2025 - Present",
      heading: "2025 -Cureal Limited-",
      content: ["Sprint Boot", "Java", "TypeScript"],
    },
    {
      role: "Graphic Engineer",
      duration: "Dec 2024 - Jan 2025",
      heading: "",
      content: ["OpenGL", "Three Js", "3d Engine"],
    },
    {
      role: "Frontend Developer",
      duration: "Jul 2024 - present",
      heading: "2025 Be He(a)rd",
      content: ["React", "Enterepenuship", "Redux"],
    },
  ],
};

onMounted(() => {
  const pageElement = document.querySelector(".experience") as HTMLDivElement;
  watchEffect(
    () => {
      const value = resolution.innerHeight;
      gsap.fromTo(
        pageElement,
        {
          opacity: 0,
          y: -50,
          x: -50,
        },
        {
          opacity: 1,
          y: 0, // optional: move up while fading
          x: 0,
          duration: 0.2,
          scrollTrigger: {
            trigger: pageElement,
            start: `50% 100%`, // element enters viewport bottom
            end: `50% 50%`, // element reaches top
            scrub: true, // smooth scroll-linked animation
            toggleActions: "play reverse play reverse", // play on enter down, reset when leaving
          },
        }
      );
    },
    { flush: "post" }
  );
});
</script>
<style lang=""></style>
