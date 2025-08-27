<script setup lang="ts">
import { onMounted, reactive } from "vue";
import ResponsiveContainer from "./components/ResponsiveContainer.vue";
import { useResponsiveManager } from "./composables/useResponsiveManager";
import Experience from "./view/Experience.vue";
import Landing from "./view/Landing.vue";
import Education from "./view/Education.vue";
import Project from "./view/Project.vue";
import Contact from "./view/Contact.vue";
const { resolution } = useResponsiveManager();
const routeTabs: any[] = [Landing, Experience, Education, Project, Contact];

onMounted(() => {
  resolution.resize = false;
});
</script>
<!--navigate route links will be routed to router view component-->
<template>
  <ResponsiveContainer v-for="(value, index) in routeTabs">
    <component :is="value" v-bind:key="index" />
  </ResponsiveContainer>
</template>
<style scoped lang="scss"></style>
