<template>
  <section>
    <div class="bisai">
      <div class="bstxt">
        <div class="bstxt1">今年你一共参加了<span>{{ contestnum }}</span>场比赛</div>
        <div class="bstxt2">
          在<span>{{ best }}</span>中<br />你取得了<span>{{ achiv }}</span>的年度最好成绩<span
            >💯</span
          ><br />可喜可贺，可喜可贺<span>🥳</span>
        </div>
      </div>
      <div class="emoji emoji--like">
        <div class="emoji__hand">
          <div class="emoji__thumb"></div>
        </div>
      </div>
      <div class="emoji emoji--haha">
        <div class="emoji__face">
          <div class="emoji__eyes"></div>
          <div class="emoji__mouth">
            <div class="emoji__tongue"></div>
          </div>
        </div>
      </div>
      <div class="emoji emoji--yay">
        <div class="emoji__face">
          <div class="emoji__eyebrows"></div>
          <div class="emoji__mouth"></div>
        </div>
      </div>
      <div class="emoji emoji--wow">
        <div class="emoji__face">
          <div class="emoji__eyebrows"></div>
          <div class="emoji__eyes"></div>
          <div class="emoji__mouth"></div>
        </div>
      </div>
      <div class="emoji emoji--love">
        <div class="emoji__heart"></div>
      </div>
      <!-- <div class="loader"></div> -->
    </div>
  </section>
</template>

<script setup>
import { liuyang } from "@/assets/global";
let contestnum = liuyang.value.competition.attendedCompetitionCount
let best = liuyang.value.competition.bestRankCompetition.title
let achiv = liuyang.value.competition.bestRankCompetition.rankStr
import { can, isnext, isScoll } from "@/assets/global";
import { onMounted, ref } from "vue";
const first = ref(true);
onMounted(() => {
  const bstxtanim = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          // if(first.value){
          setTimeout(() => {
            can.value = true;
            isnext.value = true;
            isScoll.value = true;
          }, 2500);
          first.value = false;
          // }
          list.target.classList.add("active");
        } else {
          list.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.1 }
  );
  const emojianim = new IntersectionObserver((llists) => {
    llists.forEach((list) => {
      if (list.isIntersecting) {
        list.target.classList.add("emoji-active");
      } else {
        list.target.classList.remove("emoji-active");
      }
    });
  });

  const bstxts = document.querySelectorAll(".bstxt, .loader");
  bstxts.forEach((bstxt) => bstxtanim.observe(bstxt));

  const emojis = document.querySelectorAll(".emoji");
  emojis.forEach((emoji) => {
    emojianim.observe(emoji);
  });
});
</script>

<style scoped>
@import url("../assets/bisai.css");

.active {
  transform: translateX(0);
  opacity: 1;
  filter: blur(0);
}

.emoji-active {
  opacity: 1;
  filter: blur(0);
}
</style>
