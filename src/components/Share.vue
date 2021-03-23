<template>
  <div share>
    <transition name="fade">
      <div>
        <img src="/img/share.png" alt="">
        <div class="graph">
          <div class="result1">
            <ul>
              <li v-for="(result, i) in result1" :key="i">
                <div>
                  <span :style="{width: graph1Bar[i].value + 'px'}" :class="result.id">{{result1[i].value}}%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="result2"></div>
          <div class="result3"></div>
          <div class="result4"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Share",

  data() {
    return {
      graph1: 350,
      graph1Bar: [
        {y: '', value: ''},
        {n: '', value: ''}
      ],

      result1: [
        {id: 'yes', value: 60},
        {id: 'no', value: 40}
      ],

    }
  },
  mounted() {
    this.yesValue();
    this.noValue();
  },
  computed:{
  },
  methods: {
    yesValue() {
      this.graph1Bar[0].value = (this.graph1 * this.result1[0].value)/100
    },
    noValue() {
      this.graph1Bar[1].value = this.graph1 - this.graph1Bar[0].value
    }
  }
}
</script>

<style lang="less">
@import "~@/less/asset";

  [share] {
    .graph {
      > div { .abs; .lt; }
      .result1 { .t(454);
        li { .w(350); .abs; .lt(70,0);
          div { .tr;
            span { .fs(36); .lh(60); color:#fff; .bold; .ib; .h(60); .bgc(#e73262); .pl(25); .-box; .tl; border-top-left-radius: 30px; border-bottom-left-radius: 30px;}
          }
        }
        li + li { .l(625);
          div { .tl;
            span { .bgc(#002f7b); .tr; .pr(25); border-radius: 0; border-top-right-radius: 30px; border-bottom-right-radius: 30px;}
          }
        }
      }
    }
  }
</style>