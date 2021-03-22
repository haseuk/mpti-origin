<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less">
@import "~@/less/font";
@import "~@/less/common";
@import "~@/less/base";
img { backface-visibility: hidden; }
</style>
