<template>
  <section>
    <div class="hard">
      <div class="hardtxt">
        <span>还记得</span><br><span>{{ maxtries }}</span><br><span>这道题吗？</span
        ><span>你提交了整整 <span class="cnt">{{ cnt }}</span> 次才过</span>
      </div>
      <div class="hard_slogan">
        那份喜悦背后的坚韧，一定也陪你走到了今天
        <!-- <img src="../assets/img/liuyinh.webp" alt="" class="liuying" /> -->
      </div>
      <div class="hdsea"></div>
      <div class="sun"></div>
    </div>
  </section>
</template>

<script setup>
import { liuyang } from "@/assets/global";
let maxtries = liuyang.value.maxTries.problemTitle
let cnt = liuyang.value.maxTries.count
import { can, isnext, isScoll } from "@/assets/global";
import { nextTick, onMounted, ref } from "vue";
onMounted(() => {
  setTimeout(() => {
    nextTick(() => {
      const sunanim = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("chuxianle");
              setTimeout(() => {
                can.value = true;
                isnext.value = true;
                isScoll.value = true;
              }, 2500);
              entry.target.classList.add("fontactive");
            } else {
              entry.target.classList.remove("fontactive");
            }
          });
        },
        { threshold: 0.1 }
      );

      const suns = document.querySelectorAll(".hardtxt, .hard_slogan, .sun");
      suns.forEach((sun) => sunanim.observe(sun));
    });
  }, 500);
});
</script>

<style scoped>
@import url("../assets/hard.css");
.fontactive {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
