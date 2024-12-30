<template>
  <section>
    <div class="master">
      <div class="mstxt">
        <div class="mstxt1">纵观整个OJ</div>
        <div class="mstxt2">
          <span>最强成就大师</span><img
            src="../assets/img/qq.png"
            alt=""
            class="msimg"
          /><span>凌乱之风</span>
        </div>
        <div class="mstxt3">已经达成了<span>42</span>项成就</div>
        <div class="mstxt4">距离<span>52</span>项全成就仅有一步之遥</div>
        <div class="mstxt5">在所有成就中，最稀有的成就是<span>{{ title }}</span></div>
        <div class="mstxt6">仅有<span>1</span>人达成</div>
      </div>
      <div class="cards">
        <div class="outlinePage">
          <svg
            class="icon trophy"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
          >
            <path
              d="M469.333333 682.666667h85.333334v128h-85.333334zM435.2 810.666667h153.6c4.693333 0 8.533333 3.84 8.533333 8.533333v34.133333h-170.666666v-34.133333c0-4.693333 3.84-8.533333 8.533333-8.533333z"
              fill="#ea9518"
              data-spm-anchor-id="a313x.search_index.0.i10.40193a81WcxQiT"
              class=""
            ></path>
            <path
              d="M384 853.333333h256a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667H341.333333v-42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
              fill="#6e4a32"
              data-spm-anchor-id="a313x.search_index.0.i1.40193a81WcxQiT"
              class=""
            ></path>
            <path
              d="M213.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256H213.333333zM170.666667 213.333333h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333zM725.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256h-85.333334z m-42.666666-42.666667h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333z"
              fill="#f4ea2a"
              data-spm-anchor-id="a313x.search_index.0.i9.40193a81WcxQiT"
              class=""
            ></path>
            <path
              d="M298.666667 85.333333h426.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a256 256 0 1 1-512 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z"
              fill="#f2be45"
              data-spm-anchor-id="a313x.search_index.0.i5.40193a81WcxQiT"
              class=""
            ></path>
            <path
              d="M512 469.333333l-100.309333 52.736 19.157333-111.701333-81.152-79.104 112.128-16.298667L512 213.333333l50.176 101.632 112.128 16.298667-81.152 79.104 19.157333 111.701333z"
              fill="#FFF2A0"
            ></path>
          </svg>
          <p class="ranking_number">1<span class="ranking_word">st</span></p>
          <div class="splitLine"></div>
          <img src="../assets/img/qq.png" alt="" class="mmm" />
          <p class="userName">凌乱之风</p>
        </div>
        <div class="detailPage">
          <svg
            class="icon medals"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
          >
            <path
              d="M896 42.666667h-128l-170.666667 213.333333h128z"
              fill="#FF4C4C"
            ></path>
            <path
              d="M768 42.666667h-128l-170.666667 213.333333h128z"
              fill="#3B8CFF"
            ></path>
            <path
              d="M640 42.666667h-128L341.333333 256h128z"
              fill="#F1F1F1"
            ></path>
            <path
              d="M128 42.666667h128l170.666667 213.333333H298.666667z"
              fill="#FF4C4C"
            ></path>
            <path
              d="M256 42.666667h128l170.666667 213.333333h-128z"
              fill="#3B8CFF"
            ></path>
            <path
              d="M384 42.666667h128l170.666667 213.333333h-128z"
              fill="#FBFBFB"
            ></path>
            <path
              d="M298.666667 256h426.666666v213.333333H298.666667z"
              fill="#E3A815"
            ></path>
            <path
              d="M512 661.333333m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z"
              fill="#FDDC3A"
            ></path>
            <path
              d="M512 661.333333m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z"
              fill="#E3A815"
            ></path>
            <path
              d="M512 661.333333m-213.333333 0a213.333333 213.333333 0 1 0 426.666666 0 213.333333 213.333333 0 1 0-426.666666 0Z"
              fill="#F5CF41"
            ></path>
            <path
              d="M277.333333 256h469.333334a21.333333 21.333333 0 0 1 0 42.666667h-469.333334a21.333333 21.333333 0 0 1 0-42.666667z"
              fill="#D19A0E"
            ></path>
            <path
              d="M277.333333 264.533333a12.8 12.8 0 1 0 0 25.6h469.333334a12.8 12.8 0 1 0 0-25.6h-469.333334z m0-17.066666h469.333334a29.866667 29.866667 0 1 1 0 59.733333h-469.333334a29.866667 29.866667 0 1 1 0-59.733333z"
              fill="#F9D525"
            ></path>
            <path
              d="M512 746.666667l-100.309333 52.736 19.157333-111.701334-81.152-79.104 112.128-16.298666L512 490.666667l50.176 101.632 112.128 16.298666-81.152 79.104 19.157333 111.701334z"
              fill="#FFF2A0"
            ></path>
          </svg>
          <div class="gradesBox">
            <svg
              class="icon gradesIcon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
            >
              <path
                d="M382.6 805H242.2c-6.7 0-12.2-5.5-12.2-12.2V434.3c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v358.6c0 6.6-5.4 12.1-12.2 12.1z"
                fill="#ea9518"
                data-spm-anchor-id="a313x.search_index.0.i36.40193a81WcxQiT"
                class=""
              ></path>
              <path
                d="M591.1 805H450.7c-6.7 0-12.2-5.5-12.2-12.2V254.9c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v537.9c0 6.7-5.5 12.2-12.2 12.2z"
                fill="#f2be45"
                data-spm-anchor-id="a313x.search_index.0.i35.40193a81WcxQiT"
                class=""
              ></path>
              <path
                d="M804.4 805H663.9c-6.7 0-12.2-5.5-12.2-12.2v-281c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v281c0.1 6.7-5.4 12.2-12.1 12.2z"
                fill="#ea9518"
                data-spm-anchor-id="a313x.search_index.0.i37.40193a81WcxQiT"
                class=""
              ></path>
            </svg>
            <p class="gradesBoxLabel">AMOUNT</p>
            <p class="gradesBoxNum">42</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { can, isnext, isScoll } from "@/assets/global";
import { ref, onMounted } from "vue";
import achivements from "@/configs/achivement-config";
let title = ref(null)
achivements.forEach(achiv=>{
  if(achiv.achievementKey === 'RatingLv2')
    title.value=achiv.title
})
onMounted(() => {
  const medals = document.querySelector(".medals");
  const ms1anim = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          list.target.classList.add("msactive");
          setTimeout(() => {
            medals.classList.add("slide-in-top");
            can.value = true;
            isnext.value = true;
            isScoll.value = true;
          }, 4000);
        } else {
          list.target.classList.remove("msactive");
          medals.classList.remove("slide-in-top");
        }
      });
    },
    { threshold: 0.5 }
  );
  const mstxt1s = document.querySelectorAll(
    ".mstxt1, .mstxt2, .mstxt3, .mstxt4, .mstxt5, .mstxt6, .cards"
  );
  mstxt1s.forEach((mstxt1) => ms1anim.observe(mstxt1));
});
</script>

<style scoped>
@import url("../assets/master.css");
.msactive {
  transform: translateX(0) translateY(0);
  filter: blur(0);
  opacity: 1;
}

.slide-in-top {
  animation: slide-in-top 1s cubic-bezier(0.65, 0.05, 0.36, 1) both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
