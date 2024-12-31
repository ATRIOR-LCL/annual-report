<template>
  <button @click="playBGM">播放BGM</button>
  <span style="color: white"
    >Current: {{ bgmMuted ? '已静音' : '未静音' }}</span
  >
  <button @click="switchMuteBGM">{{ bgmMuted ? '取消静音' : '静音' }}</button>
  <Suspense>
    <Start v-if="gogo"></Start>
  </Suspense>
  <Message v-if="!gogo"></Message>
</template>

<script setup>
import { onMounted } from 'vue';
import { Howl } from 'howler';
import Start from './Start.vue';
import Message from './Message.vue';
import { gogo, bgmMuted, playBGM, switchMuteBGM } from '@/assets/global';

onMounted(() => {
  !window.bgm &&
    (window.bgm = new Howl({
      src: [`${new URL('../assets/audio/bgm.mp3', import.meta.url).href}`],
      html5: true,
      volume: 0.5,
      loop: true,
    }));
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.defa-enter-from,
.defa-leave-to {
  transition: all 0.5s ease;
  transition-delay: 0.5s;
}
</style>
