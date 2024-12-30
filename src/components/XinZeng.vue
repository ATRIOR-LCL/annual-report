<template>
  <section>
    <div class="xinzeng">
      <p class="yh">
        <span>这一年里OJ迎来了</span><span class="yhnum">2052</span
        ><span>名新用户!</span>
      </p>
      <p class="tj">
        <span>这一年里OJ新增了</span><span class="tjnum">175371</span
        ><span>条提交!</span>
      </p>
    </div>
  </section>
</template>

<script setup>
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

  const page2font = document.querySelectorAll(
    ".yh, .tj"
  );
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
