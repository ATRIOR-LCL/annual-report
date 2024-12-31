<template>
  <p class="title fontremove">SDUT Online Judge</p>
  <img
    src="../assets/img/up.svg"
    alt=""
    class="next"
    :class="{ nextactive: isnext }"
  />

  <section id="page1" class="page ">
    <div class="confettis" v-if="true">
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
    </div>
    <div class="letter" :class="{ donn: isClick }">
      <p class="e1" style="--i: 1">🥳</p>
      <p class="e2" style="--i: 2">😝</p>
      <p class="e3" style="--i: 3">🤩</p>
      <p class="e4" style="--i: 4">🥳</p>
      <div class="lt1">
        <lay-ripple
          @click="open"
          spreadWidth=".3rem"
          spreadSize="40px"
          type="out"
          trigger="always"
          borderRadius="50%"
          color="#fff"
          class="clk"
        >
          <img
            src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
            alt=""
            class="acmsvg"
          />
        </lay-ripple>
      </div>
      <div class="lt2"></div>
      <div class="lt3"></div>
    </div>
    <div class="lt_txt" :class="{ upp: isClick }">
      <div class="kmc fontremove">
        <div class="hei">
          <img :src="`https://cdn.sdutacm.cn/oj/image/avatars/${liuyang.avatar}`" alt="" style="border-radius: 50%;" />
          <span>{{liuyang.username}}</span>
        </div>
        欢迎回家！在这一年里， SDUTOJ 发生了许多新的故事，其中也有属于你的篇章。
        <span
          >我们迫不及待地邀请你一起回望时间的起点，再次见证那些有你陪伴的好时光。</span
        >
        <div class="kmc-oj">----SDUTOJ</div>
      </div>
      <p class="ts" v-if="tsxx">您有一份来自SDUTOJ的信件😊</p>
      <div class="jiyu2"></div>
      <div class="jiyu" id="jiyu1"></div>
    </div>
  </section>
  <Special id="page2" class="page hide"></Special>
  <XinZeng id="page3" class="page hide"></XinZeng>
  <NewContest id="page4" class="page hide"></NewContest>
  <AC id="page5" class="page hide"></AC>
  
  <Night id="page6" class="page hide" v-if="hasNight"></Night>
  <Hard id="page7" class="page hide" v-if="hasMaxTries"></Hard>
  <BiSai id="page8" class="page hide" v-if="hascontest"></BiSai>
  <LeiTai id="page9" class="page hide" v-if="haspmc"></LeiTai>
  <XinSheng id="page10" class="page hide" v-if="ncc"></XinSheng>
  <XiaoSai id="page11" class="page hide" v-if="hasXiaoSai"></XiaoSai>
  <Blue id="page12" class="page hide" v-if="hasBlue"></Blue>
  <AchivementStar id="page13" class="page hide" v-if="hasAchive"></AchivementStar>
  <Master id="page14" class="page hide"></Master>
  <Last id="pae15" class="page hide"></Last>


  <section style="z-index: -1"></section>
</template>
<script setup>
import { liuyang } from "../assets/global";
const hasNight = ref(false)
if(liuyang.value.nightWalker){
  hasNight.value=true
}
import Hard from "../components/Hard.vue";
const hasMaxTries = ref(false)
if(liuyang.value.maxTries&&liuyang.value.maxTries.count>=5){
  hasMaxTries.value=true
}
import Last from "../components/Last.vue";
import "vue3-fullpage/styles";
import { onMounted, ref, nextTick } from "vue";
import Night from "../components/Night.vue";
import XinZeng from "../components/XinZeng.vue";
import Special from "../components/Special.vue";
import NewContest from "../components/NewContest.vue";
import AC from "../components/AC.vue";
import BiSai from "../components/BiSai.vue";
let hascontest = ref(false)
if(liuyang.value.competition.attendedCompetitionCount>0){
  hascontest.value=true
}
import Blue from "../components/Blue.vue";
const hasBlue = ref(false)
if(liuyang.value.competition.asGenshin){
  hasBlue.value=true
}
import XiaoSai from "../components/XiaoSai.vue";
const hasXiaoSai = ref(false)
if(liuyang.value.competition.sdutpc16){
  hasXiaoSai.value=true
}
import XinSheng from "../components/XinSheng.vue";
let ncc = ref(false)
if(liuyang.value.competition.sdutncc6th){
  ncc.value=true
}
import LeiTai from "../components/LeiTai.vue";
const haspmc = ref(false)
if(liuyang.value.competition.sdutpmc16th){
  haspmc.value=true
}
const isClick = ref(false);
const tsxx = ref(true);
const scr = ref(false);
import { isnext, can } from "../assets/global";
import AchivementStar from "../components/AchivementStar.vue";
const hasAchive = ref(false)
if(liuyang.value.achievements.length>0){
  hasAchive.value=true
}
import Master from "../components/Master.vue";
import { contain } from "../assets/global";
import { isScoll } from "../assets/global";
import Sumarry from "@/components/Sumarry.vue";
onMounted(() => {
  let currentPage = 0;
  const pages = document.querySelectorAll(".page");
  const totalPages = pages.length;
  const handleTouch = (event) => {
    if (!can.value) return;
    const touchStart = event.touches[0].clientY;
    let touchEnd;
    const handleTouchMove = (moveEvent) => {
      touchEnd = moveEvent.touches[0].clientY;
    };
    const handleTouchEnd = () => {
      if (touchEnd - touchStart > 50 && currentPage > 0) {
        null;
      } else if (touchStart - touchEnd > 50 && currentPage < totalPages - 1) {
        pages[currentPage].classList.add("fontremove");
        setTimeout(() => {
          pages[currentPage].classList.add("hide");
          currentPage++;
          pages[currentPage].classList.remove("hide");
        }, 1000);
        can.value = false;
        isnext.value = false;
      }
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const mouseScroll = (event) => {
    if (isScoll.value == false) return;
    if (event.deltaY > 0) {
      pages[currentPage].classList.add("fontremove");
      setTimeout(() => {
        pages[currentPage].classList.add("hide");
        currentPage++;
        pages[currentPage].classList.remove("hide");
      }, 1000);
      isnext.value = false;
      isScoll.value = false;
    } else {
      null;
    }
  };
  document.addEventListener("touchstart", handleTouch);
  document.addEventListener("wheel", mouseScroll);
});

if (window.screen.width < 1000) {
  scr.value = true;
} else {
  contain.value = true;
}

function open() {
  setTimeout(() => {
    isnext.value = true;
    can.value = true;
    isScoll.value = true;
  }, 3000);
  const confettis = document.querySelector(".confettis");
  confettis.classList.add("Delay");

  const txtxt = document.querySelector(".lt_txt");
  txtxt.classList.add("changes");

  const upp = document.querySelector(".jiyu2");
  upp.classList.add("upp");
  const jiyu = document.querySelector(".jiyu");
  jiyu.classList.add("dan");

  const donn = document.querySelector(".letter");
  donn.classList.add("donn");

  const ts = document.querySelector(".ts");
  ts.classList.add("fontremove");
  const kmc = document.querySelector(".kmc");
  kmc.classList.add("fontactive");

  const emojis = document.querySelectorAll(".e1,.e2,.e3,.e4");
  emojis.forEach((emoji) => {
    emoji.classList.add("fontactive");
  });

  setTimeout(() => {
    emojis.forEach((i) => {
      i.classList.remove("fontactive");
    });
  }, 1500);

  const title = document.querySelector(".title");
  title.classList.add("fontactive");
}
</script>

<style scoped>
@import url("../assets/main.css");
.Delay {
  opacity: 1;
}
.main {
  text-align: center;
  font-size: 70px;
  overflow-y: scroll;
}

.main::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

section {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: all 0.3s linear;
  /* background-color: rgb(41, 41, 41); */
}

.fontremove {
  opacity: 0;
  filter: blur(0.1rem);
}

.hide {
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: translateY(-150%);
}

.fontactive {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0) translateY(0);
}

.cll {
  overflow: hidden;
}

.nextactive {
  animation: nexting 2s ease-in-out infinite;
}

@keyframes nexting {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(3vh);
  }
  25% {
    opacity: 1;
  }
  90%{
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-1vh);
  }
}
</style>
