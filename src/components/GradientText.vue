<template>
  <div :class="props.fontStyle" :style="gradientStyle">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    gradientColors: { color: string; amount: string }[];
    fontStyle?: string;
  }>(),
  {
    gradientColors: () => [
      { color: "#ffffff", amount: "5%" },
      { color: "#ffffff", amount: "10%" },
    ],
    fontStyle: "font-ibm text-[24px] bg-clip-text text-transparent select-none",
  }
);

const gradientStyle = computed(() => {
  // Join colors and amounts into linear-gradient string
  const gradientString = props.gradientColors
    .map((c) => `${c.color} ${c.amount}`)
    .join(", ");

  return {
    background: `linear-gradient(to top, ${gradientString})`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
});
</script>
<style lang="scss" scoped></style>
