<template>
  <section>
    <div class="special">
      <div class="splanimall">
        <div ref="bili1" class="bili1">
          <p class="bili1txt">SDUTACM</p>
          <div class="eyes"></div>
        </div>
        <div ref="bili2" class="bili2"></div>
        <div class="bigoj">SDUT OJ</div>
        <img src="../assets/img/codesmall.svg" alt="" class="codesmall" />
        <img src="../assets/img/code.svg" alt="" class="code" />
      </div>
      <p class="spl1">
        <span>{{ date }} </span
        ><span>是个特殊的日子。</span>
      </p>
      <p class="spl2">在这一天，注定不平凡的你，</p>
      <p class="spl4">开始了与<span>SDUTOJ</span>的不期而遇。</p>
      <!-- <p class="spl3">
        <span>时至今日,我们的旅程已经开始了</span><span class="sec">{{ sec }}</span
        ><span>天</span>
      </p> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { isnext, can, isScoll, days } from "@/assets/global";
import { liuyang } from "@/assets/global";
const bili1 = ref(null);
const bili2 = ref(null);
let date = liuyang.value.createdAt;
date = date.slice(0, 10);
let year = date.slice(0, 4);
let month = date.slice(5, 7);
let day = date.slice(8);
year = Number(year);
month = Number(month);
day = Number(day);
console.log(year, month, day);

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

function calculateDaysToEndOf2024(year, month, day) {
  const targetYear = 2024;
  const targetMonth = 12;
  const targetDay = 31;

  let totalDays = 0;

  for (let currentYear = year; currentYear < targetYear; currentYear++) {
    if (isLeapYear(currentYear)) {
      totalDays += 366; // 闰年
    } else {
      totalDays += 365; // 普通年
    }
  }

  let startDate = new Date(year, month - 1, day); // 给定的开始日期
  let endDate = new Date(year, 11, 31); // 该年的12月31日

  const timeDifference = endDate - startDate; // 时间差，单位为毫秒
  totalDays += Math.floor(timeDifference / (1000 * 3600 * 24)); // 将毫秒转换为天数并加到总天数

  if (year === targetYear) {
    return totalDays;
  }

  let endDate2024 = new Date(targetYear, targetMonth - 1, targetDay);
  let daysToEndOf2024 = Math.floor(
    (endDate2024 - new Date(targetYear, 0, 1)) / (1000 * 3600 * 24)
  ); // 从2024年1月1日到2024年12月31日的天数

  totalDays += daysToEndOf2024;

  return totalDays;
}
let sec = calculateDaysToEndOf2024(year, month, day)
days.value=sec

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
