<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
    <audio loop>
      <source src="/mp3/mini.mp3" type="audio/mp3">
    </audio>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    let audioPlaying = false;
    const audioStart = () => {
      if (audioPlaying) return;
      document.querySelector('audio').play();
      audioPlaying = true;
    };
    document.addEventListener('touchstart', audioStart);
    document.addEventListener('mousedown', audioStart);
  }
}
</script>

<style lang="less">
@import "~@/less/font";
@import "~@/less/common";
@import "~@/less/base";
img { backface-visibility: hidden; }
#app { width:2000px; position: relative; }
</style>
