<template>
  <div
    :class="[
      'absolute z-30 w-[80%] h-[500px] flex justify-start flex-col',
      'slide-show',
    ]"
  >
    <transition-group
      appear
      v-bind="crossFadeTransition"
      tag="div"
      v-for="(value, index) in props.content"
      v-bind:key="index"
    >
      <div class="absolute w-full h-full" v-if="index === currentIndex">
        <div class="flex flex-col justify-between w-full h-full">
          <div>
            <div class="relative flex w-full h-[200px] overflow-hidden">
              <img
                class="object-cover w-full h-full"
                :src="value.project.url"
              />
            </div>
            <div class="font-display">
              <div class="text-[12px] font-extralight pt-[10px]">
                {{ value.project.date }}
              </div>

              <GradientText
                :gradient-colors="[
                  { color: '#103846', amount: '5%' },
                  { color: '#5A5A5A', amount: '55%' },
                  { color: '#5A5A5A', amount: '95%' },
                ]"
                :font-style="[
                  'font-display font-semibold text-[24px] bg-clip-text text-transparent swipe-down',
                ]"
                :style="{ filter: 'brightness(2)' }"
                v-html="value.project.title"
              >
              </GradientText>

              <div
                class="text-[12px] pb-[10px]"
                :style="{ borderBottom: '1px solid white' }"
              >
                {{ value.project.paragraph }}
              </div>
              <div
                class="text-[12px] pt-[5px]"
                v-for="(paragraph, index) in value.project.content"
                v-bind:key="index"
              >
                {{ paragraph }}
              </div>
            </div>
          </div>
          <div class="pt-[20px] flex justify-center gap-3">
            <div
              v-for="(_, index) in props.content"
              v-bind:key="index"
              class="bg-white rounded-md flex items-center justify-center"
              :style="{
                height: '5px',
                width: '30px',
                background:
                  'linear-gradient(to top, #103846 5%, #5A5A5A 65%, #5A5A5A 95%)',
                filter: 'brightness(2.5)',
              }"
            >
              <div
                class="h-1 w-8 bg-black rounded-md transition-opacity duration-300 ease-in-out"
                :style="{
                  height: '3px',
                  width: '28px',
                  opacity: index === currentIndex ? 0 : 1,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect, onBeforeUnmount, nextTick } from "vue";
import { useTransition } from "../composables/useTransition";
import type { SlideContent } from "../interface/SlideContent";
import GradientText from "./GradientText.vue";
import gsap from "gsap";
import image from "@/assets/sample.jpeg";
const { getTransitionClasses } = useTransition();
const crossFadeTransition = getTransitionClasses("CrossFade")?.transition;
const currentIndex = ref(0);
let touchStartX = 0;
let touchStartY = 0;
let isSwiping = false;

const onTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  isSwiping = false;
};

const onTouchMove = (e: TouchEvent) => {
  const deltaX = e.touches[0].clientX - touchStartX;
  const deltaY = e.touches[0].clientY - touchStartY;

  // if horizontal movement is greater than vertical, consider it a swipe
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    isSwiping = true;
    e.preventDefault();
  }
};

const onTouchEnd = (e: TouchEvent) => {
  if (!isSwiping) return;

  const deltaX = e.changedTouches[0].clientX - touchStartX;

  if (deltaX > 50) {
    // swipe right
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
    } else {
      currentIndex.value = props.content.length - 1;
    }
  } else if (deltaX < -50) {
    // swipe left
    if (currentIndex.value < props.content.length - 1) {
      currentIndex.value += 1;
    } else {
      currentIndex.value = 0;
    }
  }

  isSwiping = false;
};
const props = withDefaults(defineProps<{ content: SlideContent[] }>(), {
  content: () => [
    {
      project: {
        url: image,
        date: "April 2025 ~ April 2024",
        title: "Project Example 1",
        paragraph: "This is project X, All about stellar blade.",
        content: ["Example1", "Example2", "Example3"],
      },
    },
  ],
});
onMounted(() => {
  const slideElement = document.querySelector(".slide-show") as HTMLDivElement;
  slideElement?.addEventListener("touchstart", onTouchStart);
  slideElement?.addEventListener("touchend", onTouchEnd);
  slideElement?.addEventListener("touchmove", onTouchMove);
  onBeforeUnmount(() => {
    slideElement?.removeEventListener("touchstart", onTouchStart);
    slideElement?.removeEventListener("touchend", onTouchEnd);
    slideElement?.removeEventListener("touchmove", onTouchMove);
  });
  watchEffect(
    () => {
      const slideElement = document.querySelector(
        ".slide-show"
      ) as HTMLDivElement;
      nextTick(() => {
        gsap.fromTo(
          slideElement,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5,
            yoyo: true,
            scrollTrigger: {
              trigger: slideElement,
              // markers: true,
              // scrub: true,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reset play reset",
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
