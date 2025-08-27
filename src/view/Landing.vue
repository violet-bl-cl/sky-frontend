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
                  { color: '#ffffff', amount: '45%' },
                  { color: '#ffffff', amount: '95%' },
                ]"
                :font-style="[
                  'text-[32px] bold bg-clip-text text-transparent opacity-0 gradient-text',
                ]"
                :data-delay="1"
              >
                Hi, I'm
              </GradientText>
            </Transition>
            <Transition appear @enter="enter" @before-enter="beforeEnter">
              <GradientText
                :gradient-colors="[
                  { color: '#103846', amount: '5%' },
                  { color: '#59d5ff', amount: '45%' },
                  { color: '#59d5ff', amount: '95%' },
                ]"
                :font-style="[
                  'font-ibm font-bold text-[32px] bg-clip-text text-transparent opacity-0 gradient-text',
                ]"
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
                :font-style="[
                  'font-ibm font-extralight   text-[12px] bg-clip-text text-transparent gradient-text',
                ]"
                :data-delay="3"
              >
                An Artistic and Passionate Developer
              </GradientText>
            </Transition>
          </div>
        </div>
      </div>
      <div
        class="h-[40%] w-full absolute bottom-[0px] z-20"
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
            { color: '#5A5A5A', amount: '65%' },
            { color: '#5A5A5A', amount: '95%' },
          ]"
          :font-style="'font-ibm font-extralight text-[24px] bg-clip-text text-transparent swipe-down'"
        >
          Swipe <span class="font-semibold">up</span> to view
        </GradientText>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, Transition, watchEffect } from "vue";
import GradientText from "@components/GradientText.vue";
import Renderer from "@components/Renderer.vue";
import { useResponsiveManager } from "../composables/useResponsiveManager";
import gsap from "gsap";
const { resolution } = useResponsiveManager();
// const isGradientInit = ref(false);
const beforeEnter = (el: Element) => {
  const targetElement = el as HTMLDivElement;
  gsap.to(targetElement, { opacity: 0, duration: 0.1, y: 40 });
};
const enter = (el: Element, done: () => void) => {
  // const targetElement = el as HTMLDivElement;
  // const duration = parseFloat(targetElement.dataset.delay ?? "1");
  // gsap.to(targetElement, {
  //   opacity: 1,
  //   duration: 0.5,
  //   delay: 0.2 * duration,
  //   y: 0,
  //   onComplete: () => {
  //     done();
  //     setTimeout(() => {
  //       if (!isGradientInit.value) {
  //         isGradientInit.value = true;
  //       }
  //     }, 500);
  //   },
  // });
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
    { opacity: 0, filter: "brightness(1)", y: 3 },
    {
      opacity: 1,
      filter: "brightness(1.8)",
      y: 0,
      duration: 1.5,
      // repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      onComplete: done,
    }
  );
};
onMounted(() => {
  const pageElement = document.querySelector(".landing") as HTMLDivElement; // adjust selector if needed
  const gradientElements = document.querySelectorAll(
    ".gradient-text"
  ) as any as HTMLDivElement[];
  setTimeout(() => {
    pageElement.classList.add("transition-all");
    pageElement.classList.add("duration-500");
    pageElement.classList.add("ease-in-out");
  }, 300);

  watchEffect(
    () => {
      const value = resolution.innerHeight;
      gsap.fromTo(
        pageElement,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0, // optional: move up while fading
          duration: 0.2,
          scrollTrigger: {
            trigger: pageElement,
            markers: false,
            start: `top bottom`, // element enters viewport bottom
            end: `bottom top`, // element reaches top
            scrub: true, // smooth scroll-linked animation
            toggleActions: "play reverse play reverse", // play on enter down, reset when leaving
          },
        }
      );

      const targetElement = document.querySelector(
        ".swipe-down"
      ) as HTMLDivElement;
      gsap.fromTo(
        targetElement,
        {
          opacity: 1,
          filter: "brightness(1.8)",
        },
        {
          opacity: 0,
          filter: "brightness(1)",
          y: 3,
          duration: 1.5,
          // repeat: repeat.value,
          yoyo: true,
          ease: "power1.inOut",
          scrollTrigger: {
            scrub: true,
            // markers: true,
            trigger: targetElement,
            start: `top 80%`,
            end: `100% 30%`,
            toggleActions: "play reverse play reverse", // play on enter down, reset when leaving
          },
        }
      );

      gradientElements.forEach((element) => {
        const targetElement = element;
        const duration = parseFloat(targetElement.dataset.delay ?? "1");
        gsap.fromTo(
          targetElement,
          { opacity: 0, y: 40, delay: 0.3 * duration },
          {
            opacity: 1,
            y: 0,
            duration: 0.25 * duration,

            scrollTrigger: {
              trigger: targetElement,
              start: `top 80%`,
              end: `top 20%`,
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
<style lang="scss"></style>
