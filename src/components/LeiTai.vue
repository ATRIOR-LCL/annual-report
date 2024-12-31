<template>
  <section>
    <div class="leitai">
      <img src="../assets/img/pmc.png" alt="" class="pmc" />
      <div class="lttxt">
        <div class="txt1">作为全新升级的组队赛</div>
        <div class="txt2">你和你的队友所向披靡，怒切 <span>{{ cnt }}</span> 题</div>
        <div class="txt3">一举夺得 <span>{{ chengji }}</span> 的战绩</div>
        <div class="txt4">这份力量，就是你们的羁绊</div>
      </div>
      <div class="zgn">
        <img src="../assets/img/zgn.png" alt="" />
      </div>
      <img class="nailong" src="../assets/img/nailong.gif" alt="" />
      <div class="szyx">「奶龙的数学游戏」</div>
      <div class="jz">「奶龙的矩阵」</div>
      <div class="ygg">「超的超超超超超超级阳光菇」</div>
      <div class="cc">「Mirai 大战 灿灿」</div>
      <div class="hwc">「回文串串回文」</div>
      <div class="llzm">这些题目一定也使你历历在目 <span>🤗</span></div>
    </div>
  </section>
</template>

<script setup>
import { liuyang } from "@/assets/global";
let cnt = liuyang.value.competition.sdutpmc16th.solved
let chengji = liuyang.value.competition.sdutpmc16th.awardStr
import { can, isnext, isScoll } from "@/assets/global";
import { onMounted, ref } from "vue";
const first = ref(true);
onMounted(() => {
  const lttxts = document.querySelectorAll(
    ".szyx, .jz, .ygg, .cc, .hwc, .llzm"
  );
  const zgn = document.querySelector(".zgn");
  const nail = document.querySelector(".nailong");
  const pmc = document.querySelector(".pmc");
  const ltall = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          if (first.value) {
            setTimeout(() => {
              can.value = true;
              isnext.value = true;
              isScoll.value = true;
            }, 9000);
            first.value = false;
          }

          list.target.classList.add("ltactive");
          zgn.classList.add("ltactive");
          pmc.classList.add("bgactive");
          setTimeout(() => {
            zgn.classList.add("zgnanim");
            nail.classList.add("nlanim");
          }, 5000);
          setTimeout(() => {
            lttxts.forEach((txt) => txt.classList.add("ltactive"));
          }, 8000);
        } else {
          list.target.classList.remove("ltactive");
          zgn.classList.remove("ltactive");
          zgn.classList.remove("zgnanim");
          nail.classList.remove("nlanim");
          lttxts.forEach((txt) => txt.classList.remove("ltactive"));
        }
      });
    },
    { threshold: 0.7 }
  );
  const alls = document.querySelectorAll(".txt1, .txt2, .txt3, .txt4");
  alls.forEach((alll) => ltall.observe(alll));
});
</script>

<style scoped>
@import url("../assets/leitai.css");

.ltactive {
  transform: translateX(0) translateY(0);
  opacity: 1;
  filter: blur(0);
}

.zgnanim {
  animation: fly 1s forwards;
}

.nlanim {
  animation: nl 5s forwards;
}

.bgactive {
  filter: blur(0);
  opacity: 0.5;
}
</style>
