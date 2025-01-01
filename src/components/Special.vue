<template>
  <section>
    <div class="special">
      <div class="splanimall">
        <div ref="bili1" class="bili1">
          <p class="bili1txt">SDUTACM</p>
          <div class="eyes"></div>
        </div>
        <div ref="bili2" class="bili2"></div>
        <div class="bigoj">初 · 遇</div>
        <img src="../assets/img/codesmall.svg" alt="" class="codesmall" />
        <img src="../assets/img/code.svg" alt="" class="code" />
      </div>
      <p class="spl1">
        <span>{{ date }} </span
        ><span>是个特殊的日子</span>
      </p>
      <p class="spl2">在这一天，注定不平凡的你</p>
      <p class="spl4">开启了与<span>SDUT OJ</span>的不期而遇</p>
      <!-- <p class="spl3">
        <span>时至今日,我们的旅程已经开始了</span><span class="sec">{{ sec }}</span
        ><span>天</span>
      </p> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import { isnext, can, isScoll, days } from "@/assets/global";
import { liuyang } from "@/assets/global";
const bili1 = ref(null);
const bili2 = ref(null);
let date = liuyang.value.createdAt;
date = date.slice(0, 10);
days.value = dayjs().diff(date, 'd');

onMounted(() => {
  let total = 15;
  let shadow = "";
  let shadow2 = "";
  for (let i = 1; i <= total; i++) {
    shadow += `${i}px -${i}px #eee,`;
  }
  for (let i = 1; i <= total / 2; i++) {
    shadow2 += `${i}px -${i}px #eee,`;
  }
  shadow = shadow.slice(0, -1);
  shadow2 = shadow2.slice(0, -1);
  bili1.value.style.boxShadow = shadow;
  bili2.value.style.boxShadow = shadow2;

  const allanim = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          setTimeout(() => {
            isnext.value = true;
            can.value = true;
            isScoll.value = true;
          }, 5000);
          list.target.classList.add("erase");
        } else {
          list.target.classList.remove("erase");
        }
      });
    },
    { threshold: 0.5 }
  );

  const animall = document.querySelector(".splanimall");
  allanim.observe(animall);

  const heiheianim = new IntersectionObserver((lists) => {
    lists.forEach((list) => {
      if (list.isIntersecting) {
        list.target.classList.add("heihei");
      } else {
        list.target.classList.remove("heihei");
      }
    });
  });

  const heiheis = document.querySelectorAll(".spl1, .spl2, .spl3, .spl4");
  heiheis.forEach((heihei) => heiheianim.observe(heihei));
});
</script>

<style scoped>
@import url("../assets/special.css");
.erase {
  opacity: 1;
}

.heihei {
  transform: translateY(0);
  opacity: 1;
  filter: blur(0);
}
</style>
