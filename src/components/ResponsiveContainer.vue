<template>
  <div class="" :style="getWidthHeight()"></div>
</template>
<script setup lang="ts">
  import {useResponsiveManager} from "../composables/useResponsiveManager.ts";
  import {onMounted} from "vue";
  const {getWidthHeight, initializeResponsiveManager} = useResponsiveManager()
  onMounted(()=>{
    initializeResponsiveManager()
  })
</script>
<style lang=""></style>
