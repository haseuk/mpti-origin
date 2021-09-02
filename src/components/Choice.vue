<template>
  <transition name="fade">
    <div choice>
      <img src="/img/choice.png" alt="">
      <div class="list-box">
        <ul>
          <li v-for="(q, month) in surveys" :key="month" :class="{reverse: reverseImg === month, complete: checkComplete(month)}" :data-month="month">
            <div class="front img"></div>
            <div class="back img"></div>
            <a v-if="q" @click="choice(month)"></a>
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
      setTimeout(() => {this.$router.push(`/survey/${v}`)}, 800);
    },
  }
}
</script>

<style lang="less">
@import "~@/less/asset";

  [choice] {  .abs; .lt;
    .list-box { .wf; .abs; .lt(0,328); .p(0,32,0,25); .-box;
      ul { .flex; flex-direction: row; justify-content: space-evenly;
        li { .wh(430,468); .tc; transition: 0.7s; .rel; -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -ms-transform-style: preserve-3d; -o-transform-style: preserve-3d;
          .img { .ib; .f; .abs; .lt; backface-visibility: hidden; }
          .front { transform: rotateY(180deg); }
          .back { .contain('/img/coming.png'); }
          &.reverse {  transform: rotateY(180deg); }
          &.complete:after { .cnt; .f; .ib; .abs; .lt; .contain('/img/completed.png'); backface-visibility: hidden; }
          a { .rel; .f; .block; z-index: 1; }
          &[data-month="202104"], &[data-month="202107"], &[data-month="202108"], &[data-month="202109"] {
            .front { .contain('/img/front-img4.png'); }
            .back { .contain('/img/back-img4.png'); }
          }
        }
      }
    }
  }
</style>