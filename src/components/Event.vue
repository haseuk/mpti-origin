<template>
  <div event>
    <transition name="fade">
      <div>
        <img src="/img/event.png" alt="">
        <img src="/img/wheel.png" class="wheel" :style="spinValue">
        <img src="/img/arrow.png" class="arrow">
      </div>
    </transition>

    <transition name="fade">
      <div class="popup" v-if="eventPopup || giftPopup || boomPopup">
        <div class="dim"></div>
        <div class="holder">
          <div class="panel event-popup" v-if="eventPopup">
            <p>당첨 후 상품 발송을 위한 정보 입력 부탁드립니다.</p>
            <label>
              <s>연락처 : 010 - </s>
              <input type="text" v-model="phoneNum" placeholder="'-' 없이 입력해 주세요.">
            </label>
            <a class="roulette" @click="start">룰렛 돌리기</a>
          </div>

          <div class="panel gift-popup" v-if="giftPopup">
            <a class="close" @click="giftResolve()"></a>
<!--            <img src="/img/gift.png" alt="">-->
            <p><i>축하합니다!</i><br> {{ gift }}포인트에<br> 당첨 되셨습니다.</p>
          </div>

          <div class="panel boom-popup" v-if="boomPopup">
            <a class="close" @click="boomResolve()"></a>
            <img src="/img/boom.png" alt="">
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
// import axios from 'axios';

import axios from "axios";

export default {
  name: "event",

  data() {
    return {
      spinStartAngle: 360 * 3 - 22.5,
      spinTotal: 0,
      options: [
        {id: 0, value: '2000'},
        {id: 1, value: '1000'},
        {id: 2, value: '꽝'},
        {id: 3, value: '10000'},
        {id: 4, value: '10'},
        {id: 5, value: '5000'},
        {id: 6, value: '4000'},
        {id: 7, value: '3000'},
      ],
      eventPopup: false,
      giftPopup: false,
      boomPopup: false,
      phoneNum: '',
      gift: null,
      boomResolve: null,
      giftResolve: null,
    }
  },
  computed: {
    spinValue() {
      return { transform: 'rotate('+this.spinTotal+'deg)'}
    },
    month() {
      return this.$route.params.month;
    },
  },
  methods: {
    sleep(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    },
    async start() {
      if(!this.phoneNum) {
        alert('연락처를 입력해주세요.');
        return;
      }
      try {
        const {data} = await axios.post('/api/scratch', {...this.$store.state.survey, phone: '010' + this.phoneNum});
        this.gift = data;
      } catch (e) {
        alert('이미 추첨이 완료된 설문입니다.');
        location.href = '/';
        return;
      }
      this.eventPopup = false;
      this.spinTotal = this.spinStartAngle + this.options.find(e => e.value === '' + this.gift).id * 45;
      await this.sleep(6000);
      await this.showResult();
      this.shareMove();

    },
    async showResult() {
      if (this.gift === '꽝')
        await this.boom();
      else
        await this.showGift();
    },
    boom() {
      return new Promise(resolve => {
        this.boomResolve = resolve
        this.boomPopup = true;
      });
    },
    showGift() {
      return new Promise(resolve => {
        this.giftResolve = resolve
        this.giftPopup = true;

      });
    },
    shareMove() {
      this.$router.push(`/result/${this.month}`);
    },
  },
  async mounted() {
    if (!this.$store.state.survey) {
      await this.$router.replace('/');
      return;
    }
    this.eventPopup = true;
  }
}
</script>

<style lang="less">
@import "~@/less/asset";

  [event] {
    .wheel { .abs; .lt(1023,189); transition: 4s; transition-delay: 0.8s; transition-timing-function: ease; }
    .arrow { .abs; .lt(1280,366); }

    .popup { font-size: 40px; .f; .fix; .lt;
      .dim { .fix; .lt; width:100%; height:120%; background: rgba(0,0,0,0.6); z-index: 50; }
      .holder { .abs; .lt(50%,50%); transform: translate(-50%,-50%); z-index: 51;
        .panel {
          .close { .contain('/img/close.png'); .no-repeat; .wh(101,103); .abs; .rt(-51,-51); .contain; z-index: 1; }
        }

        .event-popup { .fs(60); .wh(1393,747); .bgc(#fff); .br(28); .lh(100); .tc; .regular; .ls(-3); .p(115,85,75); .-box;
          p { .bold; }
          label { .fs(72); .mt(105); .ib; .-t(#7d7d7d); .-b(#7d7d7d); .p(32,4); .-box;
            s { .bold; .lh(115); .vam; }
            input { .fs(60); .tc; .wh(732,115); .vam; .-a(#535353); .bgc(#d5dee9); .br(8); outline: none; }
          }
          .roulette { color:#fff; .wh(390,100); .ib; .bgc(#1c25c5); .mt(65); .br(16); }
        }
        .gift-popup {
          img { .wh(1663,898); }
          p { .fs(60); .w(1000); .lh(80); .bold; .bgc(#fff); .br(28); .p(150,0); .tc;
            i { .fs(80); .mb(30); .ib; color:#1c25c5; }
          }
        }
      }
    }
  }
</style>