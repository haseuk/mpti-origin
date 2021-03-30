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
            <ul v-if="sums.q5">
              <li v-for="(result, i) in resultData.q5" :key="i">
                <div>
                  <span :style="{height: resultData.q5[i] / max.q5 * 100 + '%'}">{{ (resultData.q5[i] / max.q5 * 100).toFixed(1) }}%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="result3">
            <ul v-if="sums.q6">
              <li v-for="(result, i) in resultData.q6" :key="i">
                <div>
                  <span :style="{width: resultData.q6[i] / max.q6 * 100 + '%', height: resultData.q6[i] / max.q6 * 100 + '%'}">{{ (resultData.q6[i] / max.q6 * 100).toFixed(1) }}%
                    <s></s>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="result4">
            <ul v-if="sums.q7">
              <li v-for="(result, i) in resultData.q7" :key="i">
                <div>
                  <span :style="{height: resultData.q7[i] / max.q7 * 100 + '%'}">{{ (resultData.q7[i] / max.q7 * 100).toFixed(1) }}%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="result5">
            <ul v-if="sums.q8">
              <li v-for="(result, i) in resultData.q8" :key="i">
                <div>
                  <span :style="{width: resultData.q8[i] / sums.q8 * 100 + '%'}">
                    <s>{{ (resultData.q8[i] / sums.q8 * 100).toFixed(1) }}%</s>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Share",

  data() {
    return {
      resultData: {
        q4: {'1': 80, '2': 5},
        q5: [10,20,1,30,10],
        q6: [20,30,45,5,5],
        q7: [10,20,1,30,5],
        q8: [5,10,30,0]
      },
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
  computed: {
    month() {
      return this.$route.params.month;
    },
  },
  methods: {
    calc() {
      Object.keys(this.resultData).forEach(key => { this.sums[key] = this.resultData[key].reduce((acc, v) => acc + v, 0);
                                               this.max[key] = this.resultData[key].reduce((acc, v) => Math.max(acc, v), 0) } )
    }

  },
  async mounted() {
    const { data } = await axios.get(`/api/result/${this.month}?_=${+new Date()}`);
    const toObj = q => data.filter(e => e.qeustion === q).reduce((a, e) => a[e.answer] = e.cnt, {});
    console.log(toObj)
    const q4 = toObj('q4');
    // const q5 = toObj('q5');
    // const q6 = toObj('q6');
    // const q7 = toObj('q7');
    // const q8 = toObj('q8');
    this.resultData.q4 = [q4[1],q4[2]]
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
        li { .w(350); .abs; .lt(70,0); .max-w(350);
          div { .tr;
            span { .ib; .h(60); .bgc(#e73262); .tl; border-top-left-radius: 30px; border-bottom-left-radius: 30px; .min-w(30); }
            p { .fs(36); .lh(60); color:#e73262; .bold; }
          }
        }
        li + li { .l(625); .max-w(350);
          div { .tl;
            span { .bgc(#002f7b); .tr; border-radius: 0; border-top-right-radius: 30px; border-bottom-right-radius: 30px; .min-w(30); }
            p { color:#002f7b; }
          }
        }
      }
      .result2 { .t(1001);
        li { .wh(60,240); .abs; .lb(92,0); .max-h(240);
          span { .ib; .w(64); .bgc(#e73262); .br-t(30); .abs; .lb; .min-h(30); }
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
      .result3 { .lt(1026,315);
        li { .wh(170); .max-w(170); .max-h(170); .ib; .rel;
          div { .f; .rel;
          span { .ib; .br(50%); .min-w(50); .min-h(50); .abs; .lb(50%,0); transform: translateX(-50%); .-box; background: linear-gradient(90deg, rgba(245,245,246,1) 0%, rgba(244,245,246,1) 100%);
              s { .wh(80%,80%); .abs; .lt(50%,50%); transform: translate(-50%,-50%); .contain('/img/circle.png'); }
            }
          }
          &:nth-child(1) { .hide; }
          &:nth-child(2) { .mr(9);
            span { .-a(#1172ea,10px); }
          }
          &:nth-child(3) { .mr(24);
            span { .-a(#249a43,10px); }
          }
          &:nth-child(4) { .mr(24);
            span { .-a(#a07c15,10px); }
          }
          &:nth-child(5) { .mr(8);
            span { .-a(#002e7a,10px); }
          }
          &:nth-child(6) {
            span { .-a(#1172ea,10px); }
          }
        }

      }
      .result4 { .lt(1047,758);
        li { .wh(60,130); .abs; .lb(57,0);  .max-h(240);
          span { .ib; .w(64); .bgc(#325de7); .br-t(30); .abs; .lb; .min-h(30); }
          &:nth-child(2) { .l(231);
            span { .bgc(#329ce7); }
          }
          &:nth-child(3) { .l(411);
            span { .bgc(#5d32e7); }
          }
          &:nth-child(4) { .l(603);
            span { .bgc(#c332e7); }
          }
          &:nth-child(5) { .l(785);
            span { .bgc(#325de7); }
          }
        }
      }
      .result5 { .lt(1047,960);
        li { .w(345); .abs; .max-w(345); }
        li, li + li + li { .lt;
          div { .tr;
            span { .ib; .h(40); .bgc(#e73262); .tl; border-top-left-radius: 30px; border-bottom-left-radius: 30px; .rel; .min-w(30);
              s { .fs(36);  color:#e73262; .bold; .abs; .lt(0,2); transform: translateX(-110%); .ml(0);}
            }
          }
        }

        li + li, li + li + li + li { .l(504);
          div { .tl;
            span { .bgc(#002f7b); .tr; border-radius: 0; border-top-right-radius: 30px; border-bottom-right-radius: 30px;
              s { color:#002f7b; left:auto; transform: translateX(0); .ml(10); }
            }
          }
        }

        li + li + li { .t(93);
          div span { border-top-right-radius: 0; border-bottom-right-radius: 0; }
        }

        li + li + li + li { .t(93); }
      }
    }
  }
</style>