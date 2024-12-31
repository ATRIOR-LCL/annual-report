<template>
  <section>
    <div class="xinzeng">
      <p class="yh">
        <span>这一年里，OJ 迎来了</span><span class="yhnum">{{ newUser }}</span
        ><span>名新用户</span>
        <span class="nzc">总注册用户数已逾<p>&nbsp;{{allUser}}&nbsp;</p>人</span>
      </p>
      <p class="tj">
        <span>这一年里，OJ 新增了</span><span class="tjnum">{{ newSubmit }}</span
        ><span>条提交</span>
        <span class="ntj"
          >截止目前，已有累计 <p>{{allSubmit}}</p> 条提交，即将突破 1000 万大关！</span
        >
      </p>
    </div>
  </section>
</template>

<script setup>
import { global } from "@/assets/global";
let newUser = global.value.userCountAnnual;
let newSubmit = global.value.solutionCountAnnual;
let allUser = global.value.userCount;
let allSubmit = global.value.solutionCount;
allSubmit = allSubmit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
import { onMounted } from "vue";
import { can, isnext, isScoll } from "@/assets/global";

onMounted(() => {
  const page2anim = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isnext.value = true;
            can.value = true;
            isScoll.value = true;
          }, 2000);
          entry.target.classList.add("fontactive");
        } else {
          entry.target.classList.remove("fontactive");
        }
      });
    },
    { threshold: 0.5 }
  );

  const page2font = document.querySelectorAll(".yh, .tj");
  page2font.forEach((page2font) => page2anim.observe(page2font));
});
</script>

<style scoped>
@import url("../assets/page2.css");
.fontactive {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
