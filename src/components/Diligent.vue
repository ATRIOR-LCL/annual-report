<template>
  <section>
    <div class="zqf">
      <span class="qf1">全站最勤奋的人是</span>
      <div class="qfbox">
        <img src="../assets/img/qq.png" alt="" />
        <span class="qf2">atrior</span>
      </div>
      <span class="qf3">共提交0000次</span>
      <div class="emoji emoji--wow">
        <div class="emoji__face">
          <div class="emoji__eyebrows"></div>
          <div class="emoji__eyes"></div>
          <div class="emoji__mouth"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const page3anim = new IntersectionObserver(
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
  const page3font = document.querySelectorAll(".qf1, .qfbox, .qf3");
  page3font.forEach((page2font) => page3anim.observe(page2font));
});
</script>

<style scoped>
@import url("../assets/page3.css");
.fontactive {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
