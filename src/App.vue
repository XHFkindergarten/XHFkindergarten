<template>
  <div>
    <div class='background'>
      <img src='https://img14.360buyimg.com/ling/jfs/t1/155357/17/16559/98021/600d2335E6829b9cc/210becd64a408d24.jpg' />
    </div>
    <div class='container'>
      <h1>Hello.</h1>
      <p style="font-size: 2em;font-weight: 500;">
        My name is GvGv Li (李肇康).
      </p>
      <p>
        A front-end development engineer living in Shenzhen, graduated in 2020 from South China University of Technology (<a class='school' href="https://www.scut.edu.cn/new/" target="_blank">华南理工大学</a>) in Guangzhou, majoring in mathematics. I used to work at JD O2 Team<a class='o2team' href="https://aotu.io/" target="_blank">(凹凸实验室)</a>, and now I am Bytedance Financial Line.
      </p>

      <p>
        Like drinking, smoking and disco. Favorite female star was Yang Chaoyue, while the girl group was Red Velvet.
      </p>
      <p class='extra' style='display:flex;align-items:center;' @click='toggleImage'>
        Work WeChat: lzk100511130612 <Wechat class='ercode' />
      </p>
      <div v-show='showImage'>
        <img class='ercode_img' src='https://img30.360buyimg.com/ling/jfs/t1/163371/5/3937/181768/600d1dfbE50aa67e1/a9c7e1a498db978e.jpg' />
      </div>
      <p class='extra'>
        Weibo: <a class='weibo' target="_blank" :href="__env__ === 'PC' ? 'https://weibo.com/u/6905636607?nick=AsyncT2sk' : 'sinaweibo://userinfo?uid=6905636607'">AsyncT2sk</a>
        <!-- Weibo: <a href='sinaweibo://userinfo?uid=6905636607'>AsyncT2sk</a> -->
      </p>
      <p class='extra'>
        GitHub: <a class='github' target="_blank" href='https://github.com/XHFkindergarten'>XHFkindergarten</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Wechat from './Wechat.vue'
import { getEnv } from './utils/index'

export default defineComponent({
  name: 'App',
  components: {
    Wechat
  },
  setup () {
    // 当前环境
    const __env__ = getEnv()
    const showImage = ref(false)
    const toggleImage = () => {
      showImage.value = !showImage.value
    }
    return {
      showImage,
      toggleImage,
      __env__
    }
  }
})
</script>

<style lang='scss'>
@import url('./assets/fonts/font.css');
a {
  white-space: nowrap;
}
body {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-size: calc(10px + 0.33vw);
  -webkit-font-smoothing: antialiased;
  color: #121314;
  margin: 0;
}
.container {
  padding: 0 10vw 20vh 10vw;
}
h1 {
  font-size: 4.5em;
  font-weight: 500;
  margin-bottom: 0;
}
p {
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 28em;
  &.extra {
    font-size: 1.4em;
  }
}
a {
  text-decoration: none;
  color: #121314;
  position: relative;
}
a:hover {
  color: #FFF;
}
a:after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: #ce1800;
}

a.school::after {
  background-color: #387CD2;
}

a.o2team::after {
  background-color: #6B8FE1;
}
a.weibo::after {
  background-color: #fa7d3c;
}
a.github::after {
  background-color: grey;
}

a:hover:after {
  top: 0%;
}
svg.ercode {
  display: inline-block;
  height: 1.4em;
  width: 1.4em;
  margin-left: 0.5em;
  cursor: pointer;
  transition: transform 200ms linear;
  &:hover {
    transform: scale(1.5);
  }
}
.ercode_img {
  width: 100%;
  max-width: 20em;
}
.background {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background: #000;
  img {
    height: 100%;
  }
}
</style>
