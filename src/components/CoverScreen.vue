<template>
  <div class="cover" :class="{ 'cover--opening': opening, 'cover--hidden': hidden }">
    <div class="petals" aria-hidden="true">
      <span
        v-for="p in petals"
        :key="p.id"
        class="petal"
        :style="p.style"
      >❀</span>
    </div>

    <FloralOrnament class="corner-ornament corner-ornament--tl" />
    <FloralOrnament class="corner-ornament corner-ornament--tr" />
    <FloralOrnament class="corner-ornament corner-ornament--bl" />
    <FloralOrnament class="corner-ornament corner-ornament--br" />

    <div class="cover__content">
      <p class="eyebrow">The Wedding Of</p>
      <h1 class="cover__names">{{ config.groom.nickname }} <span class="amp">&amp;</span> {{ config.bride.nickname }}</h1>
      <div class="divider"></div>
      <p class="cover__date">{{ config.weddingDateLabel }}</p>

      <div class="cover__guest">
        <p class="cover__guest-label">{{ config.cover.guestLabelPrefix }}</p>
        <p class="cover__guest-name">{{ guestName }}</p>
      </div>

      <button class="btn-gold" @click="open">Buka Undangan</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import FloralOrnament from './FloralOrnament.vue'
import config from '../data/config.js'

const emit = defineEmits(['opened'])
const opening = ref(false)
const hidden = ref(false)

const guestName = computed(() => {
  const params = new URLSearchParams(window.location.search)
  return params.get('to') ? decodeURIComponent(params.get('to')) : config.cover.defaultGuest
})

const petals = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  style: {
    left: `${Math.random() * 100}%`,
    animationDuration: `${9 + Math.random() * 8}s`,
    animationDelay: `${Math.random() * 8}s`,
    fontSize: `${12 + Math.random() * 10}px`,
    color: i % 2 === 0 ? 'var(--rose-dust)' : 'var(--gold)',
  },
}))

function open() {
  opening.value = true
  setTimeout(() => {
    hidden.value = true
    emit('opened')
  }, 900)
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
</script>

<style scoped>
.cover {
  position: fixed;
  inset: 0;
  z-index: 50;
  max-width: 520px;
  margin: 0 auto;
  background: radial-gradient(circle at 50% 30%, var(--maroon-mid), var(--maroon-deep) 75%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.9s ease, transform 0.9s ease;
}
.cover--opening {
  opacity: 0;
  transform: scale(1.04);
}
.cover--hidden {
  display: none;
}

.cover__content {
  position: relative;
  text-align: center;
  padding: 40px 30px;
  color: var(--ivory);
}

.eyebrow { color: var(--gold); }

.cover__names {
  font-family: var(--font-script);
  font-weight: 400;
  font-size: 56px;
  line-height: 1;
  margin: 6px 0 2px;
  color: var(--gold-light);
}
.cover__names .amp {
  font-family: var(--font-display);
  font-size: 32px;
  color: var(--rose-dust);
  margin: 0 6px;
}

.cover__date {
  font-family: var(--font-label);
  letter-spacing: 0.15em;
  font-size: 17px;
  color: var(--ivory);
  margin: 0 0 40px;
}

.cover__guest {
  margin-bottom: 34px;
}
.cover__guest-label {
  font-family: var(--font-label);
  font-size: 14px;
  letter-spacing: 0.1em;
  color: var(--rose-dust);
  margin: 0 0 4px;
}
.cover__guest-name {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 20px;
  color: var(--ivory);
  margin: 0;
}
</style>
