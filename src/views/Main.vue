<template>
        <Start v-if="gogo"></Start>
        <Message v-if="!gogo"></Message>
</template>

<script setup>
import Start from './Start.vue';
import Message from './Message.vue';
import { gogo } from '@/assets/global';
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
.defa-leave-to{
    transition: all 0.5s ease;
    transition-delay: .5s;
}
</style>