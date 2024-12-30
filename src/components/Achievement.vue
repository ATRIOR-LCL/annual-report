<template>
  <section>
    <div id="jl">
      <div class="emoji emoji--yay">
        <div class="emoji__face">
          <div class="emoji__eyebrows"></div>
          <div class="emoji__mouth"></div>
        </div>
      </div>
      <span class="jl1">获得成就最多的人是</span>
      <div class="jl2box">
        <img src="../assets/img/qq.png" alt="" />
        <span class="jl2">atrior</span>
      </div>
      <div class="cjnum">
        <span class="jl3">共获得</span>
        <span>0000</span>
        <span>个</span>
        <span>🎁</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const page4anim = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fontactive");
        } else {
          entry.target.classList.remove("fontactive");
        }
      });
    },
    { threshold: 0.5 }
  );
  const page4fonts = document.querySelectorAll(".jl1, .jl2box, .cjnum, .jl2");
  page4fonts.forEach((page4font) => page4anim.observe(page4font));
});
</script>

<style scoped>
@import url("../assets/page4.css");
.fontactive {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
