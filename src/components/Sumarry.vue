<template>

</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
import html2canvas from "html2canvas";
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
  {
    name: "原神赛",
    rank: 12,
  },
]);

// onMounted(() => {
function downloadAsImage() {
  nextTick(() => {
    if (sumarry.value) {
      html2canvas(sumarry.value, {
        useCORS: true, // 启用跨域支持
        scale: 2, // 提升图片分辨率
      }).then((canvas) => {
        // 将 canvas 转换为图片 URL
        const imgUrl = canvas.toDataURL("image/png");
        // 创建一个下载链接
        const link = document.createElement("a");
        link.href = imgUrl;
        link.download = "webpage_image.png"; // 设置下载文件名
        link.click(); // 模拟点击下载
      });
    } else {
      console.log("null");
    }
  });
  // 使用 html2canvas 截取 #content 元素的内容
}
// });
</script>

<style scoped>
@import url("../assets/sumarry.css");
</style>
