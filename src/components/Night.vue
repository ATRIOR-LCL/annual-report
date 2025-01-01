<template>
  <section>
    <div class="night">
      <div class="nightfont">
        <p>与星同行的你</p><span style="margin: .3rem;">{{ night }}</span><p>还在做题<span>😴</span></p>
      </div>
      <div class="nightgl">
        这是属于你的不眠之夜
        <div class="haiyou" v-if="hastogether">在这一晚，还有<span style="font-weight: 200; font-size: .7rem; margin-left: .2rem; margin-right: .2rem">{{haiyou}}</span>名用户和你一样在夜色中遨想星河</div>
      </div>
      <div class="moon"></div>
      <div class="sea"></div>
    </div>
  </section>
</template>

<script setup>
import { can, isnext, isScoll } from "@/assets/global";
import { onMounted, ref } from "vue";
import { liuyang } from "@/assets/global";
const hastogether = ref(false)
const first = ref(true);
let night = liuyang.value.nightWalker.timeStr
// night = night.slice(-8, -3)
let haiyou = null
if(liuyang.value.nightWalker.togetherUserCount>0){
  hastogether.value=true
  haiyou = liuyang.value.nightWalker.togetherUserCount
}
console.log(night)
onMounted(() => {
  const nightanim = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (first.value) {
            setTimeout(() => {
              can.value = true;
              isnext.value = true;
              isScoll.value = true;
            }, 2500);
            first.value = false;
          }
          entry.target.classList.add("fontactive");
        } else {
          entry.target.classList.remove("fontactive");
        }
      });
    },
    { threshold: 0.5 }
  );

  const nights = document.querySelectorAll(".nightfont, .nightgl, .moon");
  nights.forEach((night) => nightanim.observe(night));
});
</script>

<style scoped>
@import url("../assets//night.css");
.fontactive {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
