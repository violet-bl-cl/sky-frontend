<script setup lang="ts">
import ResponsiveContainer from "./components/ResponsiveContainer.vue";
</script>
<!--navigate route links will be routed to router view component-->
<template>
  <ResponsiveContainer>
    <div
      class="relative h-full w-full bg-[#ff0000] flex justify-end items-end p-5 text-[#ffffff] text-[24px]"
    >
      Hello
    </div>
  </ResponsiveContainer>
</template>

<!--    <router-view v-slot="{component}">-->
<!--        <component :is="component" />-->
<!--    </router-view>-->
<style scoped lang="scss"></style>
