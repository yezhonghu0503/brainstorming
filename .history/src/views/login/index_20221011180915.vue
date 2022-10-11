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

.cyberpunk{
    position: relative;
    left:450px;
}
</style>