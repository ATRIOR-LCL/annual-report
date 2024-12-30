<template>
  <section v-if="generate">
    <div class="font2">
      <span class="font2-txt">时至今日，</span>
      <span class="font2-txt">我们的旅程已经开始了{{days}}天。</span>
      <span class="font2-txt">看似一眨眼的时间，</span>
      <span class="font2-txt">却承载了我们无可忘却的珍重回忆。</span>
      <span class="font2-txt">以这份回忆的重量所编织的纽带，</span>
      <span class="font2-txt">正是连结我们并一起前进的动力。</span>
      <span class="font2-txt">愿时间与你共写美梦，</span>
      <span class="font2-txt">愿祝福伴你终抵云顶。</span>
      <span class="font2-txt">感谢陪伴！</span>
    </div>
    <button class="btn" @click="gosum">点击生成你的专属OJ年报🥳</button>
    <div class="sdutoj">
      <div class="font1">
        Practice coding, compete with players, and become a master.
      </div>
      <div class="bottom-icon">
        <img src="../assets/img/bottomicon.png" alt="" class="btm-txt" />
        <img
          src="../assets/img/bLue.png"
          alt=""
          height="60%"
          style="position: relative; right: 0.2rem"
        />
        <p class="blue">bLue</p>
        <img
          src="../assets/img/and.png"
          alt=""
          height="50%"
          style="position: relative; right: 0.1rem"
        />
        <img src="../assets/img/qq.png" alt="" height="60%" />
        <p class="atrior">atrior</p>
        <div class="wline"></div>
        <img
          src="../assets/img/LCL_hero_dark.bfdc1ef6.png"
          alt=""
          height="100%"
          class="lcllab"
        />
      </div>
      <span ref="text1" class="chars">S</span>
      <span ref="text2" class="chars">D</span>
      <span ref="text3" class="chars">U</span>
      <span ref="text4" class="nc">T</span>
      <span ref="text5" class="nc">O</span>
      <span ref="text6" class="nc">J</span>
    </div>
  </section>
  <section v-else class="summ">
    <button class="Btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 384 512"
        class="svgIcon"
        @click="downloadAsImage"
        @touchstart="downloadAsImage"
      >
        <path
          d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
        ></path>
      </svg>
      <span class="icon2"></span>
    </button>
    <div class="sumarry" ref="sumarry">
      <lay-qrcode
          :width="70"
          class="sum-qr"
          text="https://oj-annual-report.vercel.app/"
        ></lay-qrcode>
      <img
        src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
        alt=""
        class="back"
      />

      <div class="results-summary-container">
        
        <div class="Iconfetti">
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
        </div>
        <div class="results-summary-container__result">
          <div class="heading-tertiary">我的OJ年报<span>🥳</span></div>
          <div class="result-box">
            <img src="../assets/img/qq.png" alt="" />
          </div>
          <div class="result-text-box">
            <div class="heading-secondary">ATRIOR</div>
            <div class="paragraph">
              <div class="ac-num">
                <p>总AC:<span>1111</span></p>
                <p>今年AC:<span>234</span></p>
                <!-- <p>90%</p> -->
              </div>
              <div class="ac-num">
                <div class="rating">
                  Rating:<span class="rating-color">1900</span>
                </div>
                <div class="achiv-num">总成就数:<span>89</span></div>
              </div>
              <div class="contests">
                <li
                  v-for="(item, index) in contests"
                  :key="index"
                  class="bisai"
                >
                  <span>{{ item.name }}</span>
                  <span>{{ item.rank }}</span>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="results-summary-container__options">
          <div class="tag-head">2024回忆标签✨️</div>
          <ul class="summary-result-options">
            <li v-for="(item, index) in tags" :key="index" class="tag">
              {{ item }}
            </li>
          </ul>
          <div class="topoj">SDUT Online Judge</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { days } from "@/assets/global";
import { ref, onMounted, nextTick } from "vue";
import html2canvas from "html2canvas";
import QRCode from "qrcode";
const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const text4 = ref(null);
const text5 = ref(null);
const text6 = ref(null);
const ojoj = ref(null);
const generate = ref(true);

function gosum() {
  setTimeout(() => {
    generate.value = false;
  }, 600);
}
onMounted(() => {
  setTimeout(() => {
    nextTick(() => {
      let shadow = "";
      let shadow3 = "";
      let total = 10;
      for (let i = 1; i <= total; i++) {
        shadow += `-${i}px ${i}px #c2c2c2,`;
      }
      for (let i = 1; i <= total; i++) {
        shadow3 += `${i}px ${i}px #c2c2c2,`;
      }
      shadow = shadow.slice(0, -1);
      shadow3 = shadow3.slice(0, -1);

      if (text1.value) text1.value.style.textShadow = shadow;
      if (text2.value) text2.value.style.textShadow = shadow;
      if (text3.value) text3.value.style.textShadow = shadow;
      if (text4.value) text4.value.style.textShadow = shadow3;
      if (text5.value) text5.value.style.textShadow = shadow3;
      if (text6.value) text6.value.style.textShadow = shadow3;

      const charsanimation = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("charsanim");
                const title = document.querySelector(".title");
                title.classList.remove("fontactive");
              }, 14000);
            } else {
              entry.target.classList.remove("charsanim");
            }
          });
        },
        { threshold: 0.1 }
      );

      const fontanimation = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("font1anim");
              }, 14000);
            } else {
              entry.target.classList.remove("font1anim");
            }
          });
        },
        { threshold: 0.1 }
      );

      const font2animation = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const font2txt = document.querySelectorAll(".font2-txt");
              font2txt.forEach((ft) => {
                ft.classList.add("font2anim");
              });
              setTimeout(() => {
                entry.target.classList.add("remove");
              }, 13000);
              setTimeout(() => {
                const sdutoj = document.querySelector(".sdutoj");
                sdutoj.classList.add("sdutojanim");
                const btn = document.querySelector(".btn");
                btn.classList.add("sdutojanim");
              }, 14000);
            }
          });
        },
        { threshold: 0.1 }
      );

      const bottomIconanim = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("btm-logo");
              }, 14000);
            } else {
              entry.target.classList.remove("btm-logo");
            }
          });
        },
        { threshold: 0.1 }
      );
      const chars = document.querySelectorAll(".chars, .nc");
      chars.forEach((char) => {
        charsanimation.observe(char);
      });
      const fonts = document.querySelector(".font1");
      fontanimation.observe(fonts);
      const font2s = document.querySelector(".font2");
      font2animation.observe(font2s);

      const bottomIcon = document.querySelector(".bottom-icon");
      bottomIconanim.observe(bottomIcon);
    });
  }, 100);
});
const generateQRCode = async (text) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(text, {
      width: 200, // 控制二维码的大小
      margin: 1, // 控制二维码的边距
      color: {
        dark: "#000000", // 二维码的颜色
        light: "#ffffff", // 背景颜色
      },
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error("生成二维码失败", error);
  }
};
const downloadAsImage = async () => {
  if (sumarry.value) {
    try {
      const qrCodeDataUrl = await generateQRCode("http://localhost:5173/");
      html2canvas(sumarry.value, {
        useCORS: true, // 启用跨域支持
        scale: 2, // 提升图片分辨率
      }).then((canvas) => {
        const ctx = canvas.getContext("2d");

        // 等待二维码图片加载完成
        const img = new Image();
        img.src = qrCodeDataUrl;
        img.onload = () => {
          // 在 Canvas 上绘制二维码，设置位置和大小
          const qrSize = 100; // 二维码的大小
          ctx.drawImage(
            img,
            canvas.width - qrSize - 20,
            canvas.height - qrSize - 20,
            qrSize,
            qrSize
          ); // 在右下角绘制二维码

          // 将修改后的 Canvas 转换为图片 URL
          const imageUrl = canvas.toDataURL("image/png");

          // 创建下载链接并触发下载
          const link = document.createElement("a");
          link.href = imageUrl;
          link.download = "screenshot_with_qrcode.png";
          link.click();
        };
      });
    } catch (error) {
      console.error("生成二维码或截图失败", error);
    }
  } else {
    console.log("null");
  }
};

const sumarry = ref(null);
const tags = ref([
  "刷题王",
  "夜猫子",
  "百折不挠",
  "原神启动!",
  "校赛明星",
  "新星",
  "队伍的羁绊",
]);
const contests = ref([
  {
    name: "擂台赛",
    rank: 12,
  },
  {
    name: "新生赛",
    rank: 12,
  },
  {
    name: "校赛",
    rank: 12,
  },
  // {
  //   name: "原神赛",
  //   rank: 12,
  // },
]);
</script>
<style scoped>
@import url("../assets/sumarry.css");
@import url("../assets/last.css");
section {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: all 0.3s linear;
}
.remove {
  opacity: 0;
}
.btm-logo {
  animation: opop ease 1s forwards;
  animation-delay: 7.5s;
}

.animrunning {
  animation-play-state: running;
}

@keyframes opop {
  100% {
    opacity: 1;
  }
}
.sdutojanim {
  opacity: 1;
  filter: blur(0);
  animation: upmove 1.5s ease forwards;
  animation-delay: 7.5s;
}

@keyframes upmove {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1rem);
  }
}

.summ {
  opacity: 1 !important;
  transition: all 0.5s ease-in-out;
  transform: translateY(0) !important;
}
</style>
