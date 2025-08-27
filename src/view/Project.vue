<template>
  <div
    class="bg-[#000000] flex justify-between items-center flex-col text-[#ffffff] text-[24px] relative project"
    :style="getSize()"
  >
    <div
      class="relative h-[40%] w-full flex justify-center items-center flex-col"
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
    <div class="flex absolute h-full w-full justify-center items-center">
      <SlideView :content="slideData.content" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useResponsiveManager } from "../composables/useResponsiveManager";
import Renderer from "../components/Renderer.vue";
import gsap from "gsap";
import { onMounted, ref, watchEffect, nextTick } from "vue";
import SlideView from "../components/SlideView.vue";
import image from "@/assets/sample.jpeg";
const { getSize } = useResponsiveManager();
const slideData = ref({
  content: [
    {
      project: {
        url: image,
        date: "April 2025 ~ April 2024",
        title: "Project Example 1",
        paragraph: "This is project X, All about stellar blade.",
        content: ["Example1", "Example2", "Example3"],
      },
    },
    {
      project: {
        url: image,
        date: "April 2025 ~ April 2024",
        title: "Project Example 2",
        paragraph: "This is project X, All about stellar blade.",
        content: ["Example1", "Example2", "Example3"],
      },
    },
    {
      project: {
        url: image,
        date: "April 2025 ~ April 2024",
        title: "Project Example 3",
        paragraph: "This is project X, All about stellar blade.",
        content: ["Example1", "Example2", "Example3"],
      },
    },
    {
      project: {
        url: image,
        date: "April 2025 ~ April 2024",
        title: "Project Example 4",
        paragraph: "This is project X, All about stellar blade.",
        content: ["Example1", "Example2", "Example3"],
      },
    },
  ],
});
onMounted(() => {
  const pageElement = document.querySelector(".project") as HTMLDivElement;
  watchEffect(
    () => {
      nextTick(() => {
        gsap.fromTo(
          pageElement,
          {
            opacity: 0,
            y: -50,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            y: 0, // optional: move up while fading
            duration: 0.5,
            scrollTrigger: {
              trigger: pageElement,
              start: `50% 100%`, // element enters viewport bottom
              end: `50% 50%`, // element reaches top
              scrub: true, // smooth scroll-linked animation
              toggleActions: "play reverse play reverse", // play on enter down, reset when leaving
            },
          }
        );
      });
    },
    { flush: "post" }
  );
});
</script>
<style lang="scss" scoped></style>
