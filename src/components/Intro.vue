<template>
  <div intro>
    <transition name="fade">
      <div v-if="page === 'intro'" :key="1" class="intro">
        <img src="/img/intro-main.png" alt="mpti에 오신걸 환영합니다.">
        <a class="start" @click="start">참여하기</a>
      </div>
      <div v-else-if="page === 'code'" :key="2" class="code">
        <img src="/img/intro-codechk.png" alt="코드/성함 입력">
        <label>
          코드 <input type="text" v-model="hospitalCode" class="code" placeholder="숫자 8자리">
          의사명 <input type="text" v-model="name" class="name" placeholder="O O O">
          <a class="submit" @click="submit">확인</a>
        </label>
        <a class="next" @click="page = 'input'">다음</a>
      </div>
      <div v-else-if="page === 'input'" :key="3" class="input">
        <img src="/img/intro-entercode.png" alt="병원명/과명/성함 입력">
        <label>
          병원 <input type="text" v-model="input.hospital" class="code">
          과명 <input type="text" v-model="input.department" class="department">
          성함 <input type="text" v-model="input.name" class="name">
          <a class="submit" @click="submitInput">확인</a>
        </label>
      </div>
      <div v-else-if="page === 'welcome'" :key="4" class="welcome">
        <div class="welcome">
          <img src="/img/survey-start.png" alt="설문을 시작하겠습니다.">
          <p>{{ doctor.hospital }}<br> {{ doctor.name }}선생님 안녕하세요!</p>
          <RouterLink to="/choice">시작하기</RouterLink>
        </div>
      </div>
    </transition>

    <!-- ***** 팝업 *****-->
    <transition name="fade">
      <div class="popup" v-if="matchedDoctors" :key="5">
        <div class="dim"></div>
        <div class="holder">
          <div class="panel matched-doctors">
            <a class="close" @click="matchedDoctors = false"></a>
            <p>{{ name }} 선생님의 과를 선택해주세요</p>
            <ul>
              <li v-for="doctor in matchedDoctors" :key="doctor.id" @click="selectDoctor(doctor)">
                <p>{{ doctor.department }}</p>
                <span>선택</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="popup" v-else-if="noneCodePopup" :key="6">
        <div class="dim"></div>
        <div class="holder">
          <div class="panel none-code-popup">
            <a class="close" @click="noneCodePopup = false"></a>
            <p>입력하신 코드 및 의사가 없습니다.<br>
              다시 한번 확인 후 입력해주세요.</p>
          </div>
        </div>
      </div>

      <div class="popup" v-else-if="inputPopup" :key="7">
        <div class="dim"></div>
        <div class="holder">
          <div class="panel input-popup">
            <a class="close" @click="inputPopup = false"></a>
            <p>병원명, 과명, 성함을<br>
              모두 입력해주세요.</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Intro",

  data() {
    return {
      page: 'intro',
      hospitalCode: '',
      doctorList: null,
      name: '',
      matchedDoctors: null,
      input: {},
      noneCodePopup: false,
      inputPopup: false,
    }
  },
  computed: {
    doctor() {
      return this.$store.state.doctor;
    }
  },
  methods: {
    start() {
      this.page = 'code';
    },
    async submit() {
      if(!this.hospitalCode || !this.name) {
        alert('코드 및 성함을 입력하세요.')
        return;
      }

      const {data} = await axios.get(`/api/doctors/${this.hospitalCode}`);
      if (!data) {
        this.noneCodePopup = !this.noneCodePopup;
        return;
      }
      this.doctorList = data;

      const matched = this.doctorList.filter(doctor => doctor.name === this.name);
      if (!matched.length) {
        this.noneCodePopup = !this.noneCodePopup;
        return;
      }

      if (matched.length > 1) {
        this.matchedDoctors = matched;
        return;
      }

      await this.selectDoctor(matched[0]);
    },
    submitInput() {
      if(!this.input.hospital || !this.input.department || !this.input.name) {
        this.inputPopup = !this.inputPopup;
        return false;
      } else {
        this.selectDoctor(this.input);
      }
    },
    async selectDoctor(doctor) {
      this.matchedDoctors = null;
      this.$store.commit('doctor', doctor);
      if (doctor.sq) {
        const {data} = await axios.get(`/api/checkSurvey/${doctor.sq}?_=${+new Date()}`);
        if (data) this.$store.commit('completeSurvey', data);
      }
      this.page = 'welcome';
    },
  },
}
</script>

<style lang="less">
@import "~@/less/asset";
[intro] {
  > div { .abs; .lt; }
  img { .wf; .block; }
  input { .abs; .p(0,30); .-box; .-a; .bgc; outline: none; }
  ::placeholder { text-align: center; color:#c7c7c7; .medium; }

  .intro {
    .start { .wh(666,149); .ib; .abs; .lb(50%,100); transform: translateX(-50%); }
  }
  .code {
    .submit { .wh(400,270); .ib; .abs; .lt(1275,598); }
    input { .fs(56); .wh(800,120); .lt(475,598);
      &.name { .t(750); }
    }
    .next { .wh(200,82); .ib; .abs; .lt(986,1030); }
  }
  .input {
    input { .fs(42); .wh(657,105); .l(753);
      &.code { .t(532); }
      &.department { .t(663); }
      &.name { .t(793); }
    }
    .submit { .wh(400,120); .ib; .abs; .lt(798,964); }
  }
  .welcome {
    p { .fs(110); .lh(140); color:#1c25c5; .wf; .block; .bold; .abs; .tc; .lt(50%,317); transform: translateX(-50%); }
    a { .fs(0); .abs; .wh(686,149); .lt(50%,814); transform: translateX(-50%); }
  }



  .popup { font-size: 40px; .f; .fix; .lt;
    .dim { .fix; .lt; width:100%; height:120%; background: rgba(0,0,0,0.6); z-index: 50; }
    .holder { .abs; .lt(50%,50%); transform: translate(-50%,-50%); z-index: 51;
      .panel { .fs(60); .bgc(#fff); .br(28); .lh(100); .tc; .regular; .ls(-1);
        .close { .contain('/img/close.png'); .no-repeat; .wh(101,103); .abs; .rt(-51,-51); .contain; z-index: 1; }
        &.matched-doctors { .fs(72); .w(1763); .min-h(957); .p(0,95,120); .-box;
          > p { .lh(260); .regular; }
          li { .medium; .-t(#7d7d7d); .p(25,0); .-box;
            &:last-child { .-b(#7d7d7d); }
            p { .lh(100); .vam; .ib; }
            span { .fs(60); .bold; .ib; color:#fff; .vam; .lh(100); .w(250); .bgc(#1c25c5); .br(16); .fr; .mr(10); }
          }
        }
        &.none-code-popup, &.input-popup { .wh(963,607);
          p { .wf; .abs; .lt(50%,50%); transform: translate(-50%,-50%); }
        }
      }
    }
  }
  .welcome { font-size: 40px; }
}
</style>