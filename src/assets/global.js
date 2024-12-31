import { valueEquals } from 'element-plus';
import { ref } from 'vue';

export const can = ref(false);
export const isnext = ref(false);
export const gogo = ref(true);
export const contain = ref(false);
export const isScoll = ref(false);
export const userid = ref(null);
export let avatar = ref(null);
export const days = ref(0);
export const musicStart = ref(false)
export const liuyang = ref(null);

export const global = ref(null);
export const musicPlay = ref(false);
export const bgmPlaying = ref(false);
export const bgmMuted = ref(false);
export const playBGM = () => {
  window.bgm && window.bgm.play();
  bgmPlaying.value = true;
};
export const switchMuteBGM = () => {
  if (!window.bgm) return;
  musicPlay.value=!musicPlay.value
  bgmMuted.value = !bgmMuted.value;
  window.bgm.mute(bgmMuted.value);
};
