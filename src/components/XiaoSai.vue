<template>
  <section>
    <div class="xiaosai">
      <div class="xstxt1">
        <div class="txt1">在 <span>5</span> 月 <span>12</span> 日<br>你参加了紧张刺激的 <span>第十六届校赛</span></div>
        <div class="txt2">你与 <span>{{ co }}</span> 名选手<br>以及 <span>{{ small }}</span> 名中小学生同台竞技</div>
        <div class="txt3">并拿下了 <span :class="medal ? `text-${medal}-dark` : ''">{{ cj }}</span> 的好成绩</div>
      </div>
      <div class="xstxt2">
        <div>这届校赛中</div>
        <div>「全新的同步直播」</div>
        <div>
          <span>「高能滚榜」</span>与<span>「闭幕式节目」</span>首次亮相
        </div>
        <div>为这场盛会增添了更多精彩 <span>🥳</span></div>
      </div>
      <div class="container">
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img
            src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
            alt=""
            class="img1"
          />
        </div>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img
            src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
            alt=""
            class="img1"
          />
        </div>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img
            src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
            alt=""
            class="img1"
          />
        </div>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img
            src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
            alt=""
            class="img1"
          />
        </div>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img
            src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
            alt=""
            class="img1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { can, isnext, isScoll } from "@/assets/global";
import { onMounted, ref } from "vue";
import { liuyang } from "@/assets/global";
let co = liuyang.value.competition.sdutpc16.officialParticipantCount
let small = liuyang.value.competition.sdutpc16.unofficialParticipantCount
let cj = liuyang.value.competition.sdutpc16.awardStr
let medal = liuyang.value.competition.sdutpc16.medal
onMounted(() => {
  const allanim = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          setTimeout(() => {
            can.value = true;
            isnext.value = true;
            isScoll.value = true;
          }, 12500);
          list.target.classList.add("active");
          const xstxt1 = document.querySelector(".xstxt1");
          const xstxt2 = document.querySelector(".xstxt2");
          const bubble = document.querySelector(".container");
          bubble.classList.add("active");
          setTimeout(() => {
            xstxt1.classList.add("active");
          }, 1000);
          setTimeout(() => {
            xstxt1.classList.remove("active");
            setTimeout(() => {
              xstxt2.classList.add("active");
            }, 1000);
          }, 10000);
        } else {
          list.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  const xiaosai = document.querySelector(".xiaosai");
  allanim.observe(xiaosai);
});
</script>

<style scoped>
@import url("../assets/xiaosai.css");
.active {
  transform: translateY(0);
  filter: blur(0);
  opacity: 1;
}
</style>
