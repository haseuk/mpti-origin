<template>
  <p type-text v-html="text"></p>
</template>

<script>

const wait = t => new Promise(resolve => setTimeout(resolve, t));

export default {
  name: 'TypeText',
  props: {
    value: String,
    delay: {type: Number, default: 0},
    speed: {type: Number, default: 40},
  },
  data() {
    return {
      text: '',
    };
  },
  async mounted() {
    if (this.delay) await wait(this.delay);
    let cursor = 0;
    const id = setInterval(() => {
      if (!this.value) {
        clearInterval(id);
        return;
      }
      if (this.value[cursor] === '<') {
        cursor = this.value.indexOf('>', cursor) + 1;
      } else {
        cursor += 1;
      }
      if (cursor >= this.value.length) clearInterval(id);
      this.text = this.value.substr(0, cursor);
    }, 1000 / this.speed)
  }
};
</script>

<style>
[type-text] { white-space: pre-line; }
</style>