<template>
  <div event>
    <transition name="fade">
      <div>
        <img src="/img/event.png" alt="">
        <img src="/img/wheel.png" class="wheel" :class="{spin: rotation}" :style="spinValue">
        <img src="/img/arrow.png" class="arrow">
      </div>
    </transition>

    <transition name="fade">
      <div class="popup event-popup" v-if="popup">
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
            <a class="close" @clcik="popup = false"></a>
            <img src="/img/gift.png" alt="">
          </div>

          <div class="panel boom-popup" v-if="boomPopup">
            <a class="close" @clcik="popup = false"></a>
            <img src="/img/boom.png" alt="">
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import Share from "@/components/Share";

export default {
  name: "event",

  data() {
    return {
      rotation: false,
      spinStartAngle: 0,
      spinTotal: 0,
      spinCheck: false,
      min: 1000,
      max: 2000,
      options: [
        {id: 0, value: '2000'},
        {id: 1, value: '3000'},
        {id: 2, value: '4000'},
        {id: 3, value: '5000'},
        {id: 4, value: '10'},
        {id: 5, value: '10000'},
        {id: 6, value: '꽝'},
        {id: 7, value: '1000'},
      ],
      popup: true,
      eventPopup: true,
      giftPopup: false,
      boomPopup: false,
      phoneNum: '',
    }
  },
  computed: {
    spinValue() {
      return { transform: 'rotate('+this.spinTotal+'deg)'}
    },
    makeRandom() {
       return Math.floor(Math.random() * (this.max-this.min + 1)) + this.min;
    },
  },
  methods: {
    close() {
    },
    start() {
      if(!this.phoneNum) {
        alert('연락처를 입력해주세요.');
        return;
      }
      this.popup = false;
      this.eventPopup = false;
      if(this.spinCheck === true) {
        alert('이미 이벤트에 참여 하였습니다.');
        return;
      }
      this.spinCheck = true;
      this.rotation = !this.rotation;
      this.spin();
    },
    spin() {
      this.spinTotal = this.spinStartAngle + this.makeRandom;
      let self = this;
      setTimeout(function() {
        self.selectOption();
      }, 5000)
    },
    selectOption() {
      let text = Math.ceil((this.spinTotal / 45) % this.options.length);
      switch (text) {
        case 1:
          alert('축하해' + this.options[7].value + '포인트');
          this.shareMove();
          break;
        case 2:
          this.boom();
          this.shareMove();
          break;
        case 3:
          alert('축하해' + this.options[5].value + '포인트');
          this.shareMove();
          break;
        case 4:
          alert('축하해' + this.options[4].value + '포인트');
          this.shareMove();
          break;
        case 5:
          this.shareMove();
          alert('축하해' + this.options[3].value + '포인트');
          break;
        case 6:
          alert('축하해' + this.options[2].value + '포인트');
          this.shareMove();
          break;
        case 7:
          alert('축하해' + this.options[1].value + '포인트');
          this.shareMove();
          break;
        case 8:
          alert('축하해' + this.options[0].value + '포인트');
          this.shareMove();
          break;
      }
    },
    boom() {
      this.popup = true;
      this.boomPopup = true;
    },
    shareMove() {
      this.$router.push({ path: '/share', name: 'share', component: Share })
    },
  }
}
</script>

<style lang="less">
@import "~@/less/asset";

  [event] {
    .wheel { .abs; .lt(1023,189);
      &.spin { transition: 4s; transition-delay: 0.8s; transition-timing-function: ease; }
    }
    .arrow { .abs; .lt(1280,366); z-index: 1; }

    .popup { font-size: 40px; .f;
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
        .gift-popup img { .wh(1663,898); }
      }
    }
  }
</style>