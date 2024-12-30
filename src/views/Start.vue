<template>
  <section>
    <div class="card qr">
      <img src="../assets/img/qq.png" alt="" />
      <p>~ 推荐使用微信扫码<br />获取最佳体验</p>
      <lay-qrcode text="https://oj-annual-report.vercel.app/"></lay-qrcode>
    </div>

    <div class="start">
      <div class="sdutoj">SDUTOJ</div>
      <div class="ndbg">2024年度报告</div>
      <div class="loader">
        <div class="blackhole">
          <div class="blackhole-circle"></div>
          <div class="blackhole-disc"></div>
        </div>
      </div>
      <router-link to="/onlinejudge3/annual-report-2024/login" class="back">
        <img src="../assets/img/qq.png" alt="" />
        <span>Come Back</span>
      </router-link>
      <button class="brutalist-button" :disabled="!isChecked" @click="Going">
        <div class="ms-logo">
          <img
            src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
            alt=""
            height="40px"
          />
        </div>
        <div class="button-text">
          <span>Get Start</span>
        </div>
      </button>
      <div class="tongyi">
        <input type="checkbox" class="ui-checkbox" v-model="isChecked" />
        <p>同意SDUTOJ统计我的数据</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, ref } from "vue";
import { userid, avatar } from "@/assets/global";
import { gogo } from "@/assets/global";
import req from "@/utils/req";
const isChecked = ref(false);


import { contain } from "@/assets/global";
if (window.screen.width > 1000) {
  contain.value = true;
} else {
  contain.value = false;
}
function Going() {
  setTimeout(() => {
    gogo.value = false;
  }, 800);
}
</script>

<style scoped>
@import url("../assets/start.css");
.smallcontain {
  max-width: 1000px;
  height: 100vh;
  position: relative;
}
</style>
