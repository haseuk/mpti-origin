<template>
  <transition name="fade">
    <div choice>
      <img src="/img/choice.png" alt="">
      <div class="list-box">
        <ul>
          <li v-for="survey in surveys" :key="survey.month">
            <RouterLink :to="`/survey/${survey.month}`"></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Choice",

  data() {
    return {
      surveys: [
        { month: 4 },
        { month: 5 },
        { month: 6 },
        { month: 7 }
      ]
    }
  }

}
</script>

<style lang="less">
@import "~@/less/asset";

  [choice] {  .abs; .lt;
    .list-box { .wf; .abs; .lt(0,328); .p(0,32,0,25); .-box;
      ul { .flex; flex-direction: row; justify-content: space-evenly;
        li { .wh(430,430); .tc;
          a { .f; .block; }
        }
      }
    }
  }
</style>