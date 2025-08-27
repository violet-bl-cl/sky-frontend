<template>
  <GradientText
    :gradient-colors="[
      { color: '#103846', amount: '5%' },
      { color: '#5A5A5A', amount: '65%' },
      { color: '#5A5A5A', amount: '95%' },
    ]"
    :font-style="[
      'ml-[40px] font-display font-semibold text-[24px] bg-clip-text text-transparent',
      `main-title-${props.content.id}`,
    ]"
    :style="{ filter: 'brightness(2)' }"
  >
    <span class="">{{ props.content.mainTitle }}</span>
  </GradientText>
  <!-- <transition-group appear v-bind="crossFadeTransition" tag="ul"> -->
  <li
    v-for="(value, index) in props.content.sections"
    :class="[
      'pl-[20px] pb-[10px] ml-[20px] relative flex flex-col justify-start ',
      `high-light-${props.content.id}`,
    ]"
    :style="{
      borderLeft: '1px solid white',
    }"
    v-bind:key="index"
    :data-delay="index"
  >
    <div
      class="absolute w-3 h-3 rounded-full"
      :style="{
        transform: 'translate(-26px, 15px)',
        background:
          'linear-gradient(to top, #103846 5%, #5A5A5A 65%, #5A5A5A 95%)',
        filter: 'brightness(2.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
    >
      <div
        class="rounded-full"
        :style="{
          width: '10px',
          height: '10px',
          backgroundColor: 'black',
        }"
      ></div>
    </div>
    <GradientText
      :gradient-colors="[
        { color: '#103846', amount: '5%' },
        { color: '#5A5A5A', amount: '65%' },
        { color: '#5A5A5A', amount: '95%' },
      ]"
      :font-style="[
        'font-display font-light text-[24px] bg-clip-text text-transparent swipe-down',
      ]"
      :style="{ filter: 'brightness(2)' }"
      v-html="value.heading"
    >
    </GradientText>
    <div class="flex flex-row gap-1">
      <GradientText
        :gradient-colors="[
          { color: '#103846', amount: '5%' },
          { color: '#5A5A5A', amount: '65%' },
          { color: '#5A5A5A', amount: '95%' },
        ]"
        :font-style="[
          'font-display font-extralight text-[16px] bg-clip-text text-transparent swipe-down',
        ]"
        :style="{ filter: 'brightness(2)' }"
        v-html="value.duration"
      >
      </GradientText>
      <GradientText
        :gradient-colors="[
          { color: '#103846', amount: '5%' },
          { color: '#5A5A5A', amount: '65%' },
          { color: '#5A5A5A', amount: '95%' },
        ]"
        :font-style="[
          'font-ibm font-extralight text-[16px] bg-clip-text text-transparent swipe-down',
        ]"
        :style="{ filter: 'brightness(2)' }"
        v-html="value.role"
      >
      </GradientText>
    </div>
    <div
      v-for="(phase, index) in value.content"
      class="text-[12px] font-light font-display"
      v-bind:key="index"
    >
      {{ phase }}
    </div>
  </li>
  <!-- </transition-group> -->
</template>
<script setup lang="ts">
import { onMounted, watchEffect, nextTick } from "vue";
import type { HighLightContent } from "../interface/HighLight";
import GradientText from "./GradientText.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const props = withDefaults(defineProps<{ content: HighLightContent }>(), {
  content: () => ({
    mainTitle: "Example",
    id: "example",
    sections: [
      {
        role: "developer",
        duration:
          "<span class='font-light'>2025</span> ~ <span class='font-light'>Present</span>",
        heading: " <span class='font-semibold'>2025</span> Cureal Limited",
        content: ["• Example 1", "• Example 2", "• Example 3"],
      },
    ],
  }),
});
onMounted(() => {
  watchEffect(
    () => {
      const highLightElements = document.querySelectorAll(
        `.high-light-${props.content.id}`
      ) as any as HTMLDivElement[];
      const mainTitleElement = document.querySelector(
        `.main-title-${props.content.id}`
      ) as HTMLDivElement;
      nextTick(() => {
        ScrollTrigger.refresh();

        gsap.fromTo(
          mainTitleElement,
          {
            opacity: 0,
            y: -20,
            x: -80,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 1,
            scrollTrigger: {
              trigger: mainTitleElement,
              scrub: true,
              start: `top 80%`,
              end: `top 20%`,
              toggleActions: "play reverse play reverse",
            },
          }
        );
        highLightElements.forEach((domElemnt, index) => {
          gsap.fromTo(
            domElemnt,
            { opacity: 0, x: -80, y: 40 },
            {
              opacity: 1,
              duration: 0.8,
              delay: 0.3 * index,
              x: 0,
              y: 0,
              yoyo: true,
              scrollTrigger: {
                trigger: domElemnt,
                start: `top bottom`,
                end: `top 0%`,
                toggleActions: "play reverse play reverse", // play on enter down, reset when leaving
              },
            }
          );
        });
      });
    },
    { flush: "post" }
  );
});
</script>
<style lang=""></style>
