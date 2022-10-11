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
  background-image: url("https://lacblog.top/upload/2022/07/bg0722.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: BlenderProBold, "PingFang SC", "Microsoft Yahei", sans-serif;
}
.cyberpunk{
    position: relative;
    left:10%;
}
</style>