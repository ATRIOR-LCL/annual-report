<template>
  <section>
    <div class="xinsheng">
      <!-- <img src="../assets/img/bbb.png" alt="" class="bbb" /> -->
      <div class="xshtxt">
        <div>作为新生，在争霸赛中首次展露头角</div>
        <div>你以<span class="rank">{{rank}}</span>的成绩<br />向大家宣告了你的存在<br />「嗯呢嗯呢」</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { liuyang } from "@/assets/global";
let rank = liuyang.value.competition.sdutncc6th.rankStr
import { can, isnext, isScoll } from "@/assets/global";
import { onMounted, ref } from "vue";

onMounted(() => {
  const bbb = document.querySelector(".bbb");
  const allin = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          setTimeout(() => {
            can.value = true;
            isnext.value = true;
            isScoll.value = true;
          }, 2500);
          list.target.classList.add("active1");
          bbb.classList.add("bgactive");
          const xshtxt = document.querySelector(".xshtxt");
          setTimeout(() => {
            xshtxt.classList.add("active");
          }, 1000);
        } else {
          list.target.classList.remove("active1");
        }
      });
    },
    { threshold: 0.5 }
  );

  const xinsheng = document.querySelector(".xinsheng");
  allin.observe(xinsheng);
});
</script>

<style scoped>
@import url("../assets/xinsheng.css");

.active {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}

.active1 {
  opacity: 1;
}

.bgactive {
  opacity: 0.5;
  filter: blur(0);
}
</style>
