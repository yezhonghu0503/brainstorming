<script lang="ts">
import cyberpunk from "./2077win/index.vue"
export default {
    components:{
        cyberpunk
    },
  setup() {
    return {
        cyberpunk
    }
  },
};
</script>

<template>
<cyberpunk class="cyberpunk" />
</template>

<style>
body{
  width:100vw;
  height:100vh;
  background-image: url("../../static/img/bg3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: BlenderProBold, "PingFang SC", "Microsoft Yahei", sans-serif;
}
.cyberpunk{
    position: relative;
    left:450px;
}
</style>