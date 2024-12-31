<template>
  <section>
    <div class="ac">
      <div class="actest">
        <div class="gongac">
          你总共在OJ上AC了<span>{{ total_ac }}</span
          >道题目<span>🥴</span>
        </div>
        <div class="xinac" v-if="isactive">
          其中，<span>{{ new_ac }}</span
          >道是今年新AC的题目
        </div>
        <div class="sts" v-if="isactive">
          你的刷题数<span>{{ ss }}</span
          >,超过了OJ <span>{{ over }}%</span>的用户
        </div>
      </div>
      <div class="acstar">
        <div class="stzx">
          <img :src="`https://cdn.sdutacm.cn/oj/image/avatars/${top2Avatar}`" alt="" />
          <span class="rank2"
            >{{ top2Name }}
            <span class="rank2ac">{{ top2Ac }}</span>
          </span>
          <img :src="`https://cdn.sdutacm.cn/oj/image/avatars/${top1Avatar}`" alt="" />
          <span class="rank1"
            >{{ top1Name }}
            <span class="rank1ac">{{ top1Ac }}</span>
          </span>
          <img :src="`https://cdn.sdutacm.cn/oj/image/avatars/${top3Avatar}`" alt="" />
          <span class="rank3"
            >{{ top3Name }}
            <span class="rank3ac">{{ top3Ac }}</span>
          </span>
        </div>
        <div class="pyramid-loader">
          <div class="wrapper">
            <span class="side side1"></span>
            <span class="side side2"></span>
            <span class="side side3"></span>
            <span class="side side4"></span>
            <span class="shadow"></span>
          </div>
        </div>
        <img src="../assets/img/star.png" alt="" class="star4" />
        <img src="../assets/img/star.png" alt="" class="star5" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { can, isnext, isScoll } from "@/assets/global";
import { ref, onMounted } from "vue";
import { liuyang, global } from "@/assets/global";
let top1Name = global.value.annualACTopStandings[0].nickname;
let top1Ac = global.value.annualACTopStandings[0].accrpted;
let top1Avatar = global.value.annualACTopStandings[0].avatar;

let top2Name = global.value.annualACTopStandings[1].nickname;
let top2Ac = global.value.annualACTopStandings[1].accrpted;
let top2Avatar = global.value.annualACTopStandings[1].avatar;
let top3Name = global.value.annualACTopStandings[2].nickname;
let top3Ac = global.value.annualACTopStandings[2].accrpted;
let top3Avatar = global.value.annualACTopStandings[2].avatar;
let isactive = liuyang.value.annualActive;
const star1 = ref(null);
const star2 = ref(null);
const star3 = ref(null);
let total_ac = liuyang.value.accepted;
let new_ac = liuyang.value.annualNewAccepted;
const ss = ref("");
if (new_ac >= 200) {
  ss.value = "傲立群雄";
} else if (new_ac >= 50 && new_ac < 200) {
  ss.value = "小有成就";
} else {
  ss.value = "中规中矩";
}
let over = Math.floor(100 * (1 - liuyang.value.annualNewAcceptedTopPercent));

onMounted(() => {
  const txtanim = new IntersectionObserver((lists) => {
    lists.forEach((list) => {
      if (list.isIntersecting) {
        setTimeout(() => {
          can.value = true;
          isnext.value = true;
          isScoll.value = true;
        }, 2500);
        list.target.classList.add("active");
        star1.value.style.animationPlayState = "running";
        star2.value.style.animationPlayState = "running";
        star3.value.style.animationPlayState = "running";
      } else {
        list.target.classList.remove("active");
      }
    });
  });
  const txt = document.querySelector(".actest");
  txtanim.observe(txt);

  const acstarmove = new IntersectionObserver((lists) => {
    lists.forEach((list) => {
      if (list.isIntersecting) {
        list.target.classList.remove("move");
      } else {
        list.target.classList.add("move");
      }
    });
  });

  const acst = document.querySelector(".acstar");
  acstarmove.observe(acst);
});
</script>

<style scoped>
@import url("../assets/ac.css");
.active {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.move {
  opacity: 0;
}
</style>
