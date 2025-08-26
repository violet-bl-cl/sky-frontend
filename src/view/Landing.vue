<template>
  <div
    class="flex relative h-full w-full justify-start flex-col text-[#ffffff] text-[24px] landing"
  >
    <div class="relative h-[80%] w-full" :style="{ border: '1px black solid' }">
      <div
        class="top-[0px] absolute h-[100%] w-full flex justify-center items-center z-30"
        :style="{
          backgroundImage: `radial-gradient(circle, rgba(1, 1, 1, 0) ${40}%, rgb(0 0 0) ${90}%)`,
        }"
      >
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-row gap-2">
            <Transition appear @enter="enter" @before-enter="beforeEnter">
              <GradientText
                :gradient-colors="[
                  { color: '#103846', amount: '5%' },
                  { color: '#ffffff', amount: '55%' },
                  { color: '#ffffff', amount: '95%' },
                ]"
                :font-style="'text-[24px] bg-clip-text text-transparent opacity-0'"
                :data-delay="1"
              >
                Hi, I'm
              </GradientText>
            </Transition>
            <Transition appear @enter="enter" @before-enter="beforeEnter">
              <GradientText
                :gradient-colors="[
                  { color: '#103846', amount: '5%' },
                  { color: '#59d5ff', amount: '55%' },
                  { color: '#59d5ff', amount: '95%' },
                ]"
                :font-style="'text-[24px] bg-clip-text text-transparent opacity-0'"
                :data-delay="1"
              >
                Sky</GradientText
              >
            </Transition>
          </div>
          <div>
            <Transition appear @enter="enter" @before-enter="beforeEnter">
              <GradientText
                :gradient-colors="[
                  { color: '#103846', amount: '2%' },
                  { color: '#ffffff', amount: '45%' },
                  { color: '#ffffff', amount: '95%' },
                ]"
                :font-style="'text-[12px] bg-clip-text text-transparent'"
                :data-delay="3"
              >
                An Artistic and Passionate Developer
              </GradientText>
            </Transition>
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
      <Transition
        appear
        @before-enter="swipeOnBeforeEnter"
        @enter="swipeOnEnter"
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
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, Transition, computed, watchEffect } from "vue";
import GradientText from "@components/GradientText.vue";
import Renderer from "@components/Renderer.vue";
import { useResponsiveManager } from "../composables/useResponsiveManager";
import gsap from "gsap";
const { resolution } = useResponsiveManager();
const beforeEnter = (el: Element) => {
  const targetElement = el as HTMLDivElement;
  gsap.to(targetElement, { opacity: 0, duration: 0.1, y: 40 });
};
const enter = (el: Element, done: () => void) => {
  const targetElement = el as HTMLDivElement;
  const duration = parseFloat(targetElement.dataset.delay ?? "1");
  gsap.to(targetElement, {
    opacity: 1,
    duration: 0.5,
    delay: 0.2 * duration,
    y: 0,
    onComplete: done,
  });
};
const swipeOnBeforeEnter = (el: Element) => {
  const targetElement = el as HTMLDivElement;
  gsap.to(targetElement, {
    opacity: 1,
    duration: 0.6,
    y: 40,
  });
};
const swipeOnEnter = (el: Element, done: () => void) => {
  const targetElement = el as HTMLDivElement;
  gsap.fromTo(
    targetElement,
    { opacity: 0.4, filter: "brightness(1)", y: 5 },
    {
      opacity: 1,
      filter: "brightness(1.8)",
      y: 0,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      onComplete: done,
    }
  );
};
const getHeight = computed(() => {
  const height = resolution.innerHeight;
  return height;
});
onMounted(() => {
  const pageElement = document.querySelector(".landing") as HTMLDivElement; // adjust selector if needed
  setTimeout(() => {
    pageElement.classList.add("transition-all");
    pageElement.classList.add("duration-500");
    pageElement.classList.add("ease-in-out");
  }, 300);

  watchEffect(
    () => {
      const height = getHeight.value;
      gsap.to(pageElement, {
        opacity: 0,
        y: -50, // optional: move up while fading
        duration: 1,
        scrollTrigger: {
          trigger: pageElement,
          markers: false,
          start: `${height / 30}`, // element enters viewport bottom
          end: `${height} ${height / 90}`, // element reaches top
          scrub: true, // smooth scroll-linked animation
        },
      });
    },
    { flush: "post" }
  );
});
</script>
<style lang="scss"></style>
