<template>
  <section>
    <div class="ac">
      <div class="actest">
        <div class="gongac">
          你总共在OJ上AC了 <span>{{ total_ac }}</span> 道题目<span>🥴</span>
        </div>
        <div class="xinac" v-if="isactive">
          其中， <span>{{ new_ac }}</span> 道是今年新AC的题目
        </div>
        <div class="sts" v-if="isactive">
          你的刷题数<span>{{ ss }}</span
          >超过了OJ<span>{{ over }}%</span>的用户
        </div>
      </div>
      <div class="acstar">
        <div class="stzx">
          <span class="rank2">
            <img v-if="top1hasAvatar" :src="`https://cdn.sdutacm.cn/oj/image/avatars/${top2Avatar}`" alt="" style="border-radius: 50%" />
            <svg v-else viewBox="64 64 896 896" class="" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
            {{ top2Name }}
            <span class="rank2ac">{{ top2Ac }}</span>
          </span>
          <span class="rank1">
            <img v-if="top1hasAvatar" :src="`https://cdn.sdutacm.cn/oj/image/avatars/${top1Avatar}`" alt="" style="border-radius: 50%" />
            <svg v-else viewBox="64 64 896 896" class="" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
            
            {{ top1Name }}
            <span class="rank1ac">{{ top1Ac }}</span>
          </span>
          <span class="rank3">
            <img v-if="top3hasAvatar" :src="`https://cdn.sdutacm.cn/oj/image/avatars/${top3Avatar}`" alt="" style="border-radius: 50%" />
            <svg v-else viewBox="64 64 896 896" class="" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
            {{ top3Name }}
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
let top1Ac = global.value.annualACTopStandings[0].accepted;
let top1Avatar = global.value.annualACTopStandings[0].avatar;
let top1hasAvatar = false
if(top1Avatar){
  top1hasAvatar=true
}
let top2Name = global.value.annualACTopStandings[1].nickname;
let top2Ac = global.value.annualACTopStandings[1].accepted;
let top2Avatar = global.value.annualACTopStandings[1].avatar;
let top2hasAvatar = false
if(top2Avatar){
  top2hasAvatar=true
}
let top3Name = global.value.annualACTopStandings[2].nickname;
let top3Ac = global.value.annualACTopStandings[2].accepted;
let top3Avatar = global.value.annualACTopStandings[2].avatar;
let top3hasAvatar = false
if(top3Avatar){
  top3hasAvatar=true
}
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
