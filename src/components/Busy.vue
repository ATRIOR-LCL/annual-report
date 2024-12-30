<template>
  <section>
    <div class="busy">
      <div class="busytxt">
        <span>OJ最繁忙的一天是</span><span>00</span>月<span>00</span>日
      </div>
      <div class="zyt">这一天发生了什么...</div>
      <div class="cartoon">
        <div class="ctface">
          <div class="cteyes">
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const busyanim = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fontactive");
        } else {
          entry.target.classList.remove("fontactive");
        }
      });
    },
    { threshold: 0.1 }
  );
  const busys = document.querySelectorAll(".busytxt, .zyt, .cartoon");
  busys.forEach((busy) => busyanim.observe(busy));
});
</script>

<style scoped>
@import url("../assets/busy.css");
.fontactive {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
