<template>
  <div share>
    <transition name="fade">
      <div>
        <img src="/img/share.png" alt="">
        <div class="graph">
          <div class="result1">
            <ul v-if="sums.q4">
              <li v-for="(result, i) in resultData.q4" :key="i">
                <div>
                  <span :style="{width: resultData.q4[i] / sums.q4 * 100 + '%'}"></span>
                  <p>{{ (resultData.q4[i] / sums.q4 * 100).toFixed(1) }}%</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="result2">
            <ul v-if="sums.q4">
              <li v-for="(result, i) in resultData.q5" :key="i">
                <div>
                  <span :style="{height: resultData.q5[i] / max.q5 * 100 + '%'}">{{ (resultData.q5[i] / max.q5 * 100).toFixed(1) }}%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="result3"></div>
          <div class="result4"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import resultData from '@/data/result';

export default {
  name: "Share",

  data() {
    return {
      resultData,
      sums: {
        q4: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
      },
      max: {
        q5: null,
        q6: null,
        q7: null,
        q8: null,
      },
    }
  },
  methods: {
    calc() {
      Object.keys(resultData).forEach(key => { this.sums[key] = resultData[key].reduce((acc, v) => acc + v, 0);
                                               this.max[key] = resultData[key].reduce((acc, v) => Math.max(acc, v), 0) } )
    }
  },
  mounted() {
    this.calc();
  },
}
</script>

<style lang="less">
@import "~@/less/asset";

  [share] { .abs; .lt;
    .graph {
      > div { .abs; .lt; }
      .result1 { .t(454);
        li { .w(350); .abs; .lt(70,0);
          div { .tr;
            span { .ib; .h(60); .bgc(#e73262); .tl; border-top-left-radius: 30px; border-bottom-left-radius: 30px;}
            p { .fs(36); .lh(60); color:#e73262; .bold; }
          }
        }
        li + li { .l(625);
          div { .tl;
            span { .bgc(#002f7b); .tr; border-radius: 0; border-top-right-radius: 30px; border-bottom-right-radius: 30px; }
            p { color:#002f7b; }
          }
        }
      }
      .result2 { .t(1001);
        li { .wh(60,240); .abs; .lb(92,0);
          span { .ib; .w(60); .bgc(#e73262); .br-t(30); .abs; .lb; }
          &:nth-child(2) { .l(264);
            span { .bgc(#c332e7); }
          }
          &:nth-child(3) { .l(436);
            span { .bgc(#5d32e7); }
          }
          &:nth-child(4) { .l(648);
            span { .bgc(#329ce7); }
          }
          &:nth-child(5) { .l(870);
            span { .bgc(#325de7); }
          }
        }
      }
    }
  }
</style>