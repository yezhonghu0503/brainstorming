<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {onMounted} from "vue"
onMounted(()=>{
  console.log("---start---")
})
</script>

<template>
  <router-view />
</template>

<style scoped>
body {
  background: #f6f6f6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  padding-bottom: 15px;
  /* margin-top: 60px; */
}
</style>
