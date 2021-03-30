<template>
  <transition name="fade">
    <div choice>
      <img src="/img/choice.png" alt="">
      <div class="list-box">
        <ul>
          <li v-for="(q, month) in surveys" :key="month">
            <RouterLink v-if="q" :to="`/survey/${month}`" :class="{complete: checkComplete(month)}"></RouterLink>
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
      surveys
    }
  },
  methods: {
    notYet(v) {
      alert(`${v}월에 오픈 예정입니다.`);
    },
    checkComplete(month) {
      return this.$store.state.completeSurvey[month];
    },
  }

}
</script>

<style lang="less">
@import "~@/less/asset";

  [choice] {  .abs; .lt;
    .list-box { .wf; .abs; .lt(0,328); .p(0,32,0,25); .-box;
      ul { .flex; flex-direction: row; justify-content: space-evenly;
        li { .wh(430,430); .tc;
          a { .f; .block; }
        }
      }
    }
  }
</style>