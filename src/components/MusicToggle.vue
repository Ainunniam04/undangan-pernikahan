<template>
  <button
    v-if="config.music.enabled"
    class="music-toggle"
    :class="{ 'is-playing': playing }"
    @click="toggle"
    :aria-label="playing ? 'Jeda musik' : 'Putar musik'"
  >
    <span class="music-toggle__disc">♪</span>
  </button>
  <audio v-if="config.music.enabled" ref="audioRef" :src="config.music.src" loop></audio>
</template>

<script setup>
import { ref } from 'vue'
import config from '../data/config.js'

const audioRef = ref(null)
const playing = ref(false)

function toggle() {
  const audio = audioRef.value
  if (!audio) return
  if (playing.value) {
    audio.pause()
  } else {
    audio.play().catch(() => {
      // Browser mungkin memblokir autoplay sebelum interaksi pengguna; aman diabaikan.
    })
  }
  playing.value = !playing.value
}

defineExpose({ play: () => { audioRef.value?.play(); playing.value = true } })
</script>

<style scoped>
.music-toggle {
  position: fixed;
  bottom: 20px;
  right: max(20px, calc(50% - 260px + 20px));
  z-index: 60;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--gold);
  background: var(--maroon-mid);
  color: var(--gold-light);
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.35);
}
.music-toggle__disc {
  display: inline-block;
  animation: spin 3.5s linear infinite;
  animation-play-state: paused;
}
.music-toggle.is-playing .music-toggle__disc {
  animation-play-state: running;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
