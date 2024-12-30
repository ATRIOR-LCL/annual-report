<template>
  <section>
    <div class="question">
      <div ref="que1" class="question1">您今年共做了00道题</div>
      <div ref="que2" class="contest">共参加了00场比赛</div>
      <div ref="que3" class="chengji">成绩如何</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const que1 = ref(null);
const que2 = ref(null);
const que3 = ref(null);

onMounted(() => {
  let ans = 5;
  let sdw = "";
  if (window.screen.width <= 1000) {
    for (let i = 1; i <= ans / 2; i++) {
      sdw += `-${i}px ${i}px rgb(187, 187, 187),`;
    }
  } else {
    for (let i = 1; i <= ans; i++) {
      sdw += `-${i}px ${i}px rgb(187, 187, 187),`;
    }
  }
  sdw = sdw.slice(0, -1);
  que1.value.style.textShadow = sdw;
  que2.value.style.textShadow = sdw;
  que3.value.style.textShadow = sdw;
});
</script>

<style scoped>
@import url("../assets/question.css");
section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: all 0.1s linear;
}
</style>
