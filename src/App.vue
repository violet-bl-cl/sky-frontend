<script setup lang="ts">
import ResponsiveContainer from "./components/ResponsiveContainer.vue";
</script>
<!--navigate route links will be routed to router view component-->
<template>
  <ResponsiveContainer>
    <div class="h-full w-full bg-[#fffff]"></div>
<!--    <router-view v-slot="{component}">-->
<!--        <component :is="component" />-->
<!--    </router-view>-->
  </ResponsiveContainer>
</template>

<style scoped lang="ts"></style>
