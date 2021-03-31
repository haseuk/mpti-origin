<template>
  <div share>
    <transition name="fade">
      <div v-if="group">
        <img src="/img/share.png" alt="">
        <div class="graph">
          <div class="result1">
            <ul>
              <li v-for="(example, i) in que.q4.examples" :key="example.idx">
                <div>
                  <span :style="{width: perSum('q4', i) + '%'}"></span>
                  <p>{{ perSum('q4', i).toFixed(1) }}%</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="result2">
            <ul>
              <li v-for="(example, i) in que.q5.examples" :key="example.idx">
                <div>
                  <span :style="{height: perMax('q5', i) + '%'}">{{ perMax('q5', i).toFixed(1) }}%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="result3">
            <ul>
              <li v-for="(example, i) in que.q6.examples" :key="example.idx">
                <div>
                  <span :style="{width: perMax('q6', i) + '%', height: perMax('q6', i) + '%'}">{{ perMax('q6', i).toFixed(1) }}%
                    <s></s>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="result4">
            <ul>
              <li v-for="(example, i) in que.q7.examples" :key="example.idx">
                <div>
                  <span :style="{height: perMax('q7', i) + '%'}">{{ perMax('q7', i).toFixed(1) }}%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="result5">
            <ul>
              <li v-for="(example, i) in que.q8.examples" :key="example.idx">
                <div>
                  <span :style="{width: perSum('q8', i) + '%'}">
                    <s>{{ perSum('q8', i).toFixed(1) }}%</s>
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
import _ from 'lodash';
import QueData from "@/data/queBoard";

export default {
  name: "Share",

  data() {
    return {
      group: null,
      sums: {},
      max: {},
    }
  },
  computed: {
    que() {
      return QueData[202104];
    },
  },
  methods: {
    async getCounts() {
      const { data } = await axios.get(`/api/result/202104?_=${+new Date()}`);
      this.counts = data;
      this.group = _.groupBy(data, row => row.question);
      this.max = _.mapValues(this.group, ans => ans.reduce((ac, e) => Math.max(ac,e.cnt), 0));
      this.sums = _.mapValues(this.group, ans => ans.reduce((ac, e) => ac + e.cnt, 0));
    },
    changeEp() {
      this.getCounts();
    },
    getValue(key, i) {
      if (!this.group) return 0;
      const a = this.group[key].find(an => an.answer === (i + 1));
      if (!a) return 0;
      return a.cnt;
    },
    perMax(key, i) {
      if (!this.group) return 0;
      return this.getValue(key, i) / this.max[key] * 100;
    },
    perSum(key, i) {
      if (!this.group) return 0;
      return this.getValue(key, i) / this.sums[key] * 100;
    }
  },
  mounted() {
    this.getCounts();
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
          &:nth-child(1), &:nth-child(7) { .hide; }
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