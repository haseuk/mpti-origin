<template>
  <div intro>
    <transition name="fade">
      <div v-if="page === 'intro'" :key="1">
        <img src="/img/intro-main.png" alt="mpti에 오신걸 환영합니다.">
        <a class="start" @click="start">참여하기</a>
      </div>
      <div v-else-if="page === 'code'" :key="2">
        <img src="/img/intro-1.png" alt="코드/이름 입력">
        <label>
          코드 <input type="text" v-model="hospitalCode" class="code">
          의사명 <input type="text" v-model="name" class="name">
          <a class="submit" @click="submit">확인</a>
        </label>
        <a class="next" @click="page = 'input'">다음</a>
      </div>
      <div v-else-if="page === 'input'" :key="3">
        <img src="/img/intro-1.png" alt="코드/이름 입력">
        <label>
          병원 <input type="text" v-model="input.hospital" class="code">
          과명 <input type="text" v-model="input.department" class="department">
          성함 <input type="text" v-model="input.name" class="name">
          <a class="submit" @click="submitInput">확인</a>
        </label>
      </div>
      <div v-else-if="page === 'welcome'" :key="4">
        <div class="welcome">
          {{ doctor.hospital }} {{ doctor.name }}선생님 환영환영
          <RouterLink to="/choice">시작하기</RouterLink>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="popup" v-if="matchedDoctors">
        <div class="dim"></div>
        <div class="holder">
          <div class="panel">
            <a class="close" @click="matchedDoctors = false"></a>
            <p>{{ name }} 선생님의 과를 선택해주세요</p>
            <ul>
              <li v-for="doctor in matchedDoctors" :key="doctor.id" @click="selectDoctor(doctor)">
                {{ doctor.department }}
                <span>선택</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import oax from "@/utils/oax";

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

      const {data} = await oax.get('/api/hospital', {code: this.hospitalCode});
      if (!data) {
        alert('유효하지 않은 코드입니다.')
        return;
      }
      this.doctorList = data;

      const matched = this.doctorList.filter(doctor => doctor.name === this.name);
      if (!matched.length) {
        // 입력하신 머시기 팝업;
        alert('입력하신 머시기');
        return;
      }

      if (matched.length > 1) {
        this.matchedDoctors = matched;
        return;
      }

      this.selectDoctor(matched[0]);
    },
    submitInput() {
      this.selectDoctor(this.input);
    },
    selectDoctor(doctor) {
      this.matchedDoctors = null;
      this.$store.commit('doctor', doctor);
      this.page = 'welcome';
    },

  }
}
</script>

<style lang="less">
@import "~@/less/asset";
[intro] {
  > div { .abs; .lt; }
  img { .wf; .block; }
  .start { .wh(666,149); .ib; .abs; .lb(50%,100); transform: translateX(-50%); }
  input { .fs(56); .wh(800,120); .abs; .lt(475,598); .p(0,30); .-box; .-a; .bgc; outline: none;
    &.name { .t(750); }
  }
  .submit { .wh(400,270); .ib; .abs; .lt(1275,598); }
  .next { .wh(200,82); .ib; .abs; .lt(986,1030); }

  .popup { opacity: 1; font-size: 40px;
    .dim { .fix; .lt; width:100%; height:120%; background: rgba(0,0,0,0.6); z-index: 50; }
    .holder { .wh(1760,960); .abs; .lt; z-index: 51;
      .panel { .wh(1760,960); .lt(50%,50%); transform: translate(-50%,-50%); .bgc(#fff); .br(28);
        .close { .contain('/img/close.png'); .no-repeat; .wh(67,64); .abs; .rt(7,10); .contain; z-index: 1; }
      }
    }
  }
  .welcome { font-size: 40px; }
}
</style>