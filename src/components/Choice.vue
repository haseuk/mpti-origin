<template>
  <transition name="fade">
    <div choice>
      <img src="/img/choice.png" alt="">
      <div class="list-box">
        <ul>
          <li v-for="(q, month) in surveys" :key="month" :class="{reverse: reverseImg === month}">
            <div class="front img"></div>
            <div class="back img"></div>
            <a v-if="q" :class="{complete: checkComplete(month)}" @click="choice(month)"></a>
            <a v-else @click="notYet(month)"></a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import surveys from '@/data/queBoard';

export default {
  name: "Choice",

  data() {
    return {
      reverseImg: null,
      surveys,
    }
  },
  methods: {
    notYet() {
      alert(`오픈 예정입니다.`);
    },
    checkComplete(month) {
      return this.$store.state.completeSurvey[month];
    },
    choice(v) {
      this.reverseImg = v;
      setTimeout(() => {this.$router.push(`/survey/${v}`)}, 2000);
    }
  }

}
</script>

<style lang="less">
@import "~@/less/asset";

  [choice] {  .abs; .lt;
    .list-box { .wf; .abs; .lt(0,328); .p(0,32,0,25); .-box;
      ul { .flex; flex-direction: row; justify-content: space-evenly;
        li { .wh(430,468); .tc; transition: 1s; .rel; -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -ms-transform-style: preserve-3d; -o-transform-style: preserve-3d;
          .img { .ib; .f; .abs; .lt; backface-visibility: hidden; }
          .front { .contain('/img/choice-4.png'); transform: rotateY(180deg); }
          .back { .contain('/img/coming.png'); }
          &.reverse {  transform: rotateY(180deg); }
          a { .rel; .f; .block; }
        }
      }
    }
  }
</style>