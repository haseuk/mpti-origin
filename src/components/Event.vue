<template>
  <transition name="fade">
    <div event>
      <img src="/img/event.png" alt="">
      <img src="/img/wheel.png" class="wheel" :class="{spin: rotation}">
      <img src="/img/arrow.png" class="arrow">
      <a @click="start" class="start-btn"></a>
    </div>
  </transition>
</template>

<script>
export default {
  name: "event",

  data() {
    return {
      rotation: false,
      angle: 0,

    }
  },
  methods: {
    start() {
      this.rotation = !this.rotation;

    }
  }
}
</script>

<style lang="less">
@import "~@/less/asset";

  [event] {
    .wheel { .abs; .lt(966,130);
      &.spin { transition: 4s; transition-timing-function: ease; }
    }
    .arrow { .abs; .lt(1280,366); z-index: 1; }
    .start-btn { .wh(130,130); .abs; .lt(1316,479); .br(50%); z-index: 2;}
  }
</style>