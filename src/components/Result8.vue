<template>
  <div share>
    <transition name="fade">
      <div v-if="group">
        <img src="/img/share.png" alt="">
        <div class="graph">
          <div class="result result1">
            <ul>
              <li v-for="(example, i) in que.q4.examples" :key="example.idx">
                <div>
                  <span :style="{height: perSum('q4', i) + '%'}"></span>
                  <i>{{ perSum('q4', i).toFixed(0) }}%</i>
                </div>
              </li>
            </ul>
          </div>
          <div class="result result2">
            <ul>
              <li v-for="(example, i) in que.q5.examples" :key="example.idx">
                <div>
                  <span :style="{width: (perMax('q5', i) / 100) * 365 + 35 + 'px'}">{{ perMax('q5', i).toFixed(1) }}%</span>
                  <i>{{ perSum('q5', i).toFixed(0) }}%</i>
                </div>
              </li>
            </ul>
          </div>
          <div class="result result3">
            <ul>
              <li v-for="(example, i) in que.q6.examples" :key="example.idx">
                <div>
                  <span :style="{width: (perMax('q6', i) / 100) * 80 + 60 + 'px', height: (perMax('q6', i) / 100) * 80 + 60 + 'px'}">{{ perMax('q6', i).toFixed(1) }}%
                    <s></s>
                    <i>{{ perSum('q6', i).toFixed(0) }}%</i>
                  </span>
                  <p :class="'label' + i">{{ example.label }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="result result4">
            <ul>
              <li v-for="(example, i) in que.q7.examples" :key="example.idx">
                <div>
                  <span :style="{height: (perMax('q7', i) / 100) * 95 + 35 + 'px'}">{{ perMax('q7', i).toFixed(0) }}%</span>
                  <i>{{ perSum('q7', i).toFixed(0) }}%</i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <RouterLink :to="`/event/${month}`" class="back">이전으로</RouterLink>
        <a href="/" class="home">홈으로 가기</a>
      </div>
    </transition>

    <transition name="fade">
      <div class="popup" v-if="popup">
        <div class="dim"></div>
        <div class="holder">
          <div class="celeb">
            <img src="/img/celebration-20mg.png" alt="텔미트렌20MG 매출1억 돌파">
            <a class="close" @click="popup = null"></a>
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
      month: '202108',
      popup: true
    }
  },
  computed: {
    que() {
      return QueData[202108];
    },
  },
  methods: {
    async getCounts() {
      const { data } = await axios.get(`/api/result/202108?_=${+new Date()}`);
      this.counts = data;
      this.group = _.groupBy(data, row => row.question);
      this.max = _.mapValues(this.group, ans => ans.reduce((ac, e) => Math.max(ac,e.cnt), 0));
      this.sums = _.mapValues(this.group, ans => ans.reduce((ac, e) => ac + e.cnt, 0));
    },
    changeEp() {
      this.getCounts();
    },
    getValue(key, i) {
      if (!this.group || !this.group[key]) return 0;
      const a = this.group[key].find(an => an.answer === (i + 1));
      if (!a) return 0;
      return a.cnt;
    },
    perMax(key, i) {
      if (!this.group || !this.group[key]) return 0;
      return this.getValue(key, i) / this.max[key] * 100;
    },
    perSum(key, i) {
      if (!this.group || !this.group[key]) return 0;
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
      .result {
        i { .fs(26); color:#fff; .bold; .abs; .ib; .tc; white-space: pre; }
      }
      .result1 { .lt(416,321);
        li { .wh(64,220); .max-h(220); .ib; .abs; .lt;
          div { .hf;
            span { .ib; .w(64); .bgc(#00be10); border-top-left-radius: 32px; border-top-right-radius: 30px; .min-h(30); .abs; .lb; }
            i { .fs(36); .lb(-130,-8); color:#00be10; .w(130); .tc; }
          }
        }
        li + li { .l(86);
          div {
            span { .bgc(#2334b1); }
            i { color:#2334b1; .l(70);  }
          }
        }
      }
      .result2 { .lt(493,683);
        li { .wh(400,64); .block; .max-w(400); .mb(29);
          div { .hf; .rel;
            span { .ib; .h(64); .bgc(#1c25c5); .br(32); border-top-left-radius:0; border-bottom-left-radius:0; .abs; .lb; .min-w(35); }
            i { .lh(64); .f; .tl; .pl(5); }
          }
          &:nth-child(2) { .l(264);
            span { .bgc(#1f479b); }
          }
          &:nth-child(3) { .l(436);
            span { .bgc(#146f6c); }
          }
          &:nth-child(4) { .l(648);
            span { .bgc(#09963d); }
          }
          &:nth-child(5) { .l(870);
            span { .bgc(#00be10); }
          }
        }
      }
      .result3 { .w(915); .tc; .lt(1025,345);
        li { .wh(140,140); .max-w(150); .max-h(150); .ib; .rel; .m(0,40,70);
          div { .f; .rel;
            span { .ib; .br(50%); .min-w(60); .min-h(60); .abs; .lb(50%,20); transform: translateX(-50%); .-box; background: linear-gradient(90deg, rgba(245,245,246,1) 0%, rgba(244,245,246,1) 100%);
              s { .wh(80%,80%); .abs; .lt(50%,50%); transform: translate(-50%,-50%); .contain('/img/circle.png'); }
              i { .wf; .lt(0,50%); transform: translateY(-50%); .ls(-1); }
            }
            p { .fs(24); .bold; .abs; .lt(50%,125); transform: translateX(-50%); }
          }
          &:nth-child(1) {
            span { .-a(#1c25c3,10px); }
            i, p { color:#1c25c3; }
          }
          &:nth-child(2) {
            span { .-a(#1f4699,10px); }
            i, p { color:#1f4699; }
          }
          &:nth-child(3) {
            span { .-a(#146e6b,10px); }
            i, p { color:#146e6b; }
          }
          &:nth-child(4) {
            span { .-a(#09943c,10px); }
            i, p { color:#09943c; }
          }
          &:nth-child(5) {
            span { .-a(#00bc10,10px); }
            i, p { color:#00bc10; }
          }
          &:nth-child(6) {
            span { .-a(#146e6b,10px); }
            i, p { color:#146e6b; }
          }
          &:nth-child(7) {
            span { .-a(#1f4699,10px); }
            i, p { color:#1f4699; }
          }
          &:nth-child(8) {
            span { .-a(#1a23be,10px); }
            i, p { color:#1a23be; }
          }
        }
      }
      .result4 { .lt(1047,931);
        li { .wh(60,130); .abs; .lb(57,0);  .max-h(240);
          span { .ib; .w(64); .bgc(#1c25c5); .br-t(30); .abs; .lb; .min-h(35); }
          i { .wf; .lb; }
          &:nth-child(2) { .l(231);
            span { .bgc(#1f479b); }
          }
          &:nth-child(3) { .l(411);
            span { .bgc(#146f6c); }
          }
          &:nth-child(4) { .l(603);
            span { .bgc(#09963d); }
          }
          &:nth-child(5) { .l(785);
            span { .bgc(#00be10); }
          }
        }
      }
    }
    .back { .wh(350,97); .abs; .lt(1320,1020); }
    .home { .wh(316,132); .ib; .abs; .lt; z-index: 1; }

    .popup { font-size: 40px; .f; .fix; .lt;
      .dim { .fix; .lt; width:100%; height:120%; background: rgba(0,0,0,0.6); z-index: 50; }
      .holder { .abs; .lt; z-index: 51;
        .celeb { z-index: 55; .fix;
          img { .wh(2000,1200); .block; }
          .close { .abs; .rt(20,20); .contain('/img/close.png'); .wh(101,103); z-index: 3; }
        }
      }
    }
  }
</style>