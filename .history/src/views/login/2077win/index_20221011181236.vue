<script lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')

export default {
  setup() {
    return {
      input1,
      input2
    }
  },
};
</script>

<template>
  <div class="button">
    <div class="glitch"></div>
    <div class="text" data-text="登录">
      <el-row :gutter="20">
        <el-input v-model="input1" class="w-50 m-2" placeholder="Type something">
          <template #prefix>
            <el-icon class="el-input__icon">
              <User />
            </el-icon>
          </template>
        </el-input>

        <el-input v-model="input2" class="w-50 m-2" placeholder="Type something">
          <template #prefix>
            <el-icon class="el-input__icon">
             <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-row>
    </div>
    <span class="platform">R25</span>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: BlenderProBold, "PingFang SC", "Microsoft Yahei", sans-serif;
}

.button {
  width: 300px;
  height: 400px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  background: #d4d4d425;
  -moz-box-shadow: 1px 0px 13px #170404;
  -webkit-box-shadow: 1px 0px 13px #170404;
  box-shadow: 1px 0px 13px #170404;
}

.button::after,
.button::before,
.glitch {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0,
      100% 0,
      100% 100%,
      calc(100% - 25px) 100%,
      calc(100% - 25px) calc(100% - 10px),
      calc(100% - 55px) calc(100% - 10px),
      calc(100% - 55px) 100%,
      20px 100%,
      0 calc(100% - 20px));
}

.button::before {
  left: 2px;
  background: hsl(180, 100%, 50%, 50%);
}

.button::after {
  background: #ffffff28;
}

.glitch {
  background: #ffffff2b;
  box-shadow: 0 0 0 1px hsl(180, 100%, 50%) inset;
  z-index: 10;
  opacity: 0;
}

.text {
  font-size: 24px;
  font-weight: 800;
  color: rgb(174, 174, 174);
  position: relative;
  z-index: 15;
}

.text::before {
  content: attr(data-text);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  text-shadow: 1px 1px hsl(180, 100%, 50%), -1px -2px hsl(50deg, 100%, 60%);
  opacity: 0;
}

.button:hover .glitch,
.button:hover .text::before {
  animation: glitch-effect 2s infinite;
  opacity: 1;
}

.platform {
  position: absolute;
  right: 28px;
  bottom: -4px;
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 500;
}

@keyframes glitch-effect {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 2%, 0 2%);
  }

  5% {
    clip-path: polygon(0 8%, 100% 8%, 100% 16%, 0 16%);
  }

  10% {
    clip-path: polygon(0 80%, 100% 80%, 100% 88%, 0 88%);
    transform: translate3d(-5px, 0, 0);
  }

  15% {
    clip-path: polygon(0 80%, 100% 80%, 100% 88%, 0 88%);
    transform: translate3d(5px, 0, 0);
  }

  16% {
    clip-path: polygon(0 80%, 100% 80%, 100% 88%, 0 88%);
    transform: translate3d(5px, 0, 0);
  }

  17% {
    clip-path: polygon(0 90%, 100% 90%, 100% 100%, 0 100%);
    transform: translate3d(5px, 0, 0);
  }

  18% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

  20% {
    clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
  }

  25% {
    clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
    transform: translate3d(-5px, 0, 0);
  }

  28% {
    clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
    transform: translate3d(-5px, 0, 0);
  }

  29% {
    clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
    transform: translate3d(5px, 0, 0);
  }

  30% {
    clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
  }

  40% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
  }

  42% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
    transform: translate3d(-5px, 0, 0);
  }

  45% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
    transform: translate3d(5px, 0, 0);
  }

  48% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
    transform: translate3d(-5px, 0, 0);
  }

  50% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

  60% {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  }

  100% {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    transform: translate3d(0, 0, 0);
  }
}
</style>