<template>
  <div survey>
    <transition name="fade">
      <div v-if="queBox" class="queBox" :key="1">
        <img :src="`/img/${que.qImg}`" alt="survey">
        <img :src="`/img/${que.img}`" class="doctors">
        <div class="curtain-wrap" v-if="que.curtain">
          <div class="curtain-inner" :class="{ 'curtain-mover' : isActive}"></div>
        </div>
        <a @click="ansView" class="ans-view">다음</a>
      </div>

      <div v-else :key="2">
        <img :src="`/img/${que.aImg}`" alt="survey">
        <div class="input-box" :class="step">
          <div class="inner">
            <label v-for="(e, i) in que.examples" :key="i">
              <s class="num" :class="e.idx"></s>
              <input :type="`${que.type}`" :value="i + 1" name="survey" v-model="answer[step]">
              <p v-html="e.label || e"></p>
              <div class="list-curtain-wrap"><span class="list-curtain-inner" :class="[{'curtain-mover' : isActive}, e.idx]"></span></div>
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

export default {
  name: "Survey",

  data() {
    return {
      step: 'q1',
      answer: {},
      queBox: true,
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
    div a { .wh(486,134); .ib; .abs; .lt(755,1000); z-index: 5; }
    .queBox {
      .doctors { .abs; .lt(1480,806); z-index: 1; }
      .curtain-wrap { .wh(1194,446); .abs; .lt(675,394); overflow: hidden;
        .curtain-inner { .f; .abs; .lt; .bgc(#fff); transition: 3s;
          &.curtain-mover { .t(100%); }
        }
      }
    }
    .input-box { .abs; .lt; .f; .pl(120); .-box;
      .inner { .h(608); display: inline-flex; flex-direction: column; flex-wrap: wrap;
        label { .ib; .rel;
          .num { .wh(106,106); .ib; .contain; .no-repeat; .abs; .lt(-50,50%); transform: translateY(-50%); z-index: 1;
            &.a { .bg('/img/ico-n1.png'); }
            &.b { .bg('/img/ico-n2.png'); }
            &.c { .bg('/img/ico-n3.png'); }
            &.d { .bg('/img/ico-n4.png'); }
            &.e { .bg('/img/ico-n5.png'); }
            &.f { .bg('/img/ico-n6.png'); }
            &.g { .bg('/img/ico-n7.png'); }
          }
          input { .w(1500); .br(24); .-a(#004a99,4px); .bgc(#fff); .rel; .-box; appearance: none; outline: none; }
          input:checked { .bgc(#00155c);
            &:after { .cnt; .ib; .wh(99,96); .contain('/img/ico-checked.png'); .abs; .rt(27,50%); transform: translateY(-50%); }
          }
          input:checked + p { color:#fff; }
          p { .fs(70); color:#004a99; .lh(90); .abs; .lt(120,50%); transform: translateY(-50%); font-family: "notokr", arial, sans-serif; .regular; .ls(-1);
            sup { .fs(25); }
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
              }
            }
          }
        }
      }
      &.q1 label input { .w(1760); }
      &.q1, &.q4 { .pt(373);
        label { .mb(43);
          input { .h(230); .lh(230); }
        }
      }
      &.q2, &.q3, &.q5, &.q6, &.q7, &.q8, &.q9, &.q10 { .pt(357);
        label { .mb(22);
          input { .h(130); .lh(130); }
          p { .fs(60); .l(80); }
        }
      }
      &.q4 { .pt(427);
        label input { .w(1250); }
      }
      &.q5, &.q7, &.q8 {
        .inner { .h(760);
          label input { .w(1250); }
        }
        a { .lt(1424,966); }
      }
      &.q6 {
        label { .mr(179);
          &:nth-child(n+5) { .mr(0); }
          input { .w(790); }
        }
        a { .t(1010); }
      }
      &.q8 .inner label {
        input { .w(1290); }
        p { .fs(45); }
      }
      &.q8 a, &.q9 a, &.q10 a { .lt(1445,966); }
      &.q9 .inner label {
        input { .w(1280); }
        p { .fs(52); .ls(-2); }
      }
    }
  }
</style>