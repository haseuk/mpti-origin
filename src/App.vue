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
  data() {
    return {
      audioPlaying: false,
    };
  },
  methods: {
    audioStart() {
      if (this.audioPlaying) return;
      document.querySelector('audio').play();
      this.audioPlaying = true;
    },
    audioStop() {
      if (!this.audioPlaying) return;
      document.querySelector('audio').pause();
      this.audioPlaying = false;
    }
  },
}
</script>

<style lang="less">
@import "~@/less/font";
@import "~@/less/common";
@import "~@/less/base";
img { backface-visibility: hidden; }
#app { width:2000px; position: relative; }
</style>
