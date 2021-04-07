<template>
  <div survey>
    <transition name="fade">
      <div v-if="queBox" class="queBox" :key="1">
        <img :src="`/img/${que.qImg}`" alt="survey">
        <img :src="`/img/${que.img}`" class="doctors">
        <TypeText :value="que.qText" :delay="1000" class="q-text" />
        <a @click="ansView" class="ans-view">다음</a>
      </div>

      <div v-else :key="2">
        <img :src="`/img/${que.aImg}`" alt="survey">
        <div class="input-box" :class="step">
          <div class="inner">
            <label v-for="(e, i) in que.examples" :key="i">
              <s class="num" :class="e.idx"></s>
              <input :type="`${que.type}`" :value="i + 1" name="survey" v-model="answer[step]">
              <TypeText :value="e.label || e" :delay="i * 700 + 500" :speed="20"/>
            </label>
          </div>
          <a @click="nextQue">다음</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import QueData from "@/data/queBoard";
import axios from 'axios';
import TypeText from "@/components/TypeText";

export default {
  name: "Survey",
  components: {TypeText},
  data() {
    return {
      step: 'q1',
      answer: {},
      queBox: false,
      isActive: false,
    }
  },
  watch: {
    step() {
      if (!this.answer[this.step]) this.answer[this.step] = [];
      this.ansView();
    }
  },
  computed: {
    month() {
      return this.$route.params.month;
    },
    que() {
      return QueData[this.month][this.step];
    },
    doctor() {
      return this.$store.state.doctor;
    }
  },
  methods: {
    curtainActive() {
      this.isActive =! this.isActive
    },
    ansView() {
      this.queBox = !this.queBox;
      this.isActive = false;
      var self = this;
      setTimeout(function() {
        self.isActive = true;
      },500)
    },
    async nextQue() {
      if (!this.answer[this.step] || this.answer[this.step].length === 0) {
        alert('답변을 선택해주세요');
        return;
      }
      const step = this.getNext();
      if (step === 'survey-finish') {
        if (this.$store.state.completeSurvey[this.month]) {
          await this.$router.push(`/result/${this.month}`);
          return;
        }
        const { data } = await axios.post('/api/apply', {
          doctor: this.doctor,
          ep: this.month,
          answers: this.answer
        });
        this.$store.commit('survey', data);
        await this.$router.push(`/event/${this.month}`)
      } else {
        this.step = step;
      }
    },
    getNext() {
      const answer = this.answer[this.step];
      if (!answer) return null;
      const n = typeof answer === 'number'
          ? this.que.examples[answer - 1].next
          : answer.map(n => this.que.examples[n - 1].next).find(x => x)
      if (n) return n;
      return this.que.next;
    },
  },
  mounted() {
    var self = this;
    setTimeout(function() {
      self.curtainActive();
    },500)
  }
}
</script>

<style lang="less">
@import "~@/less/asset";

  [survey] {
    > div { .abs; .lt; }
    div a { .wh(437,120); .ib; .abs; .lt(781,911); z-index: 5; }
    .queBox {
      .doctors { .abs; .lt(1480,806); z-index: 1; }
      .q-text { .fs(47); color:#004a99; .lh(71); font-family: "notokr", arial, sans-serif; .medium; .ls(-4); .abs; .lt(690,278); }
      .curtain-wrap { .wh(1194,446); .abs; .lt(675,273); overflow: hidden;
        .curtain-inner { .f; .abs; .lt; .bgc(#fff); transition: 3s;
          &.curtain-mover { .t(100%); }
        }
      }
    }
    .input-box { .abs; .lt; .f; .pl(100); .-box;
      .inner { display: inline-flex; flex-direction: column; flex-wrap: wrap;
        label { .ib; .rel; .block;
          .num { .wh(95,95); .ib; .contain; .no-repeat; .abs; .lt(-50,50%); transform: translateY(-50%); z-index: 1;
            &.a { .bg('/img/ico-n1.png'); }
            &.b { .bg('/img/ico-n2.png'); }
            &.c { .bg('/img/ico-n3.png'); }
            &.d { .bg('/img/ico-n4.png'); }
            &.e { .bg('/img/ico-n5.png'); }
            &.f { .bg('/img/ico-n6.png'); }
            &.g { .bg('/img/ico-n7.png'); }
            &.h { .bg('/img/ico-n8.png'); }
          }
          input { .w(1350); .br(24); .-a(#004a99,4px); .bgc(#fff); .rel; .-box; appearance: none; outline: none; }
          input:checked { .bgc(#00155c);
            &:after { .cnt; .ib; .wh(99,96); .contain('/img/ico-checked.png'); .abs; .rt(27,50%); transform: translateY(-50%); }
          }
          input:checked + p { color:#fff; }
          p { .fs(64); color:#004a99; .lh(80); .abs; .lt(110,23); font-family: "notokr", arial, sans-serif; .regular; .ls(-1);
            sup { .fs(25); line-height: 0; vertical-align: 35px; }
          }
          .list-curtain-wrap { .abs; .lt; .f; border:4px solid transparent; .-box; overflow: hidden; .br(28);
            .list-curtain-inner { .f; .abs; .bgc(#fff); .lt; transition: 1.5s; transition-timing-function: linear;
              &.curtain-mover { .l(100%);
                &.a { transition-delay: 0s; }
                &.b { transition-delay: 0.3s; }
                &.c { transition-delay: 0.6s; }
                &.d { transition-delay: 0.9s; }
                &.e { transition-delay: 1.2s; }
                &.f { transition-delay: 1.5s; }
                &.g { transition-delay: 1.8s; }
                &.h { transition-delay: 2.1s; }
              }
            }
          }
        }
      }
      &.q1 label input { .w(1585); }
      &.q1{ .pt(369);
        label { .mb(40); .ml(106);
          input { .h(208); .lh(208); }
          p { .t(30); }
        }
      }
      &.q2, &.q3, &.q4, &.q5, &.q6, &.q7, &.q8, &.q9, &.q10 { .pt(346);
        label { .mb(20); .ml(45);
          input { .h(117); .lh(117); }
          p { .fs(54); .l(70); }
        }
      }
      &.q4 { .pt(368);
        label { .mb(40);
          input { .wh(1188,207); .lh(207); }
          p { .fs(64); .l(110); .t(65); }
        }
      }
      &.q5, &.q7, &.q8 {
        .inner {
          label {
            input { .w(1125); }
            p { .l(80); }
          }
        }
        a { .lt(781,1041); }
      }
      &.q6 {
        .inner { .h(565);
          label { .mr(162); .ml(131); .ib;
            &:nth-child(n+5) { .mr(0); .ml(0); }
            input { .w(711); }
          }
        }
      }
      &.q8, &.q9, &.q10 {
        .inner label {
          input { .w(1161); }
          p { .fs(45); .ls(-4); }
          &:nth-of-type(3) p { .ls(-5); }
        }
      }
      &.q9 {
        .inner label input { .w(1152); }
        p { .ls(-2); }
      }
      &.q10 {
        .inner label p { .fs(64); }
      }
    }
  }
</style>