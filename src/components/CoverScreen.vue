<template>
  <div class="cover" :class="{ 'cover--fading': fading, 'cover--hidden': hidden }">
    <!-- Isi undangan di belakang pintu, sudah tampil begitu pintu terbuka -->
    <div class="cover__content">
      <div class="petals" aria-hidden="true">
        <span v-for="p in petals" :key="p.id" class="petal" :style="p.style">❀</span>
      </div>

      <FloralOrnament class="corner-ornament corner-ornament--tl" />
      <FloralOrnament class="corner-ornament corner-ornament--tr" />
      <FloralOrnament class="corner-ornament corner-ornament--bl" />
      <FloralOrnament class="corner-ornament corner-ornament--br" />

      <p class="eyebrow">The Wedding Of</p>
      <h1 class="cover__names">{{ config.groom.nickname }} <span class="amp">&amp;</span> {{ config.bride.nickname }}</h1>
      <div class="divider"></div>
      <p class="cover__date">{{ config.weddingDateLabel }}</p>

      <div class="cover__guest">
        <p class="cover__guest-label">{{ config.cover.guestLabelPrefix }}</p>
        <p class="cover__guest-name">{{ guestName }}</p>
      </div>
    </div>

    <!-- Pintu gerbang: dua panel yang membuka ke samping -->
    <div class="door door--left" :class="{ 'door--open': doorsOpen }">
      <FloralOrnament class="corner-ornament corner-ornament--tl" />
      <FloralOrnament class="corner-ornament corner-ornament--bl" />
      <div class="door__inner">
        <span class="door__initial">{{ groomInitial }}</span>
        <span class="door__vine" aria-hidden="true">❦</span>
      </div>
    </div>
    <div class="door door--right" :class="{ 'door--open': doorsOpen }">
      <FloralOrnament class="corner-ornament corner-ornament--tr" />
      <FloralOrnament class="corner-ornament corner-ornament--br" />
      <div class="door__inner">
        <span class="door__initial">{{ brideInitial }}</span>
      </div>
    </div>

    <!-- Tombol & judul di atas pintu, hilang begitu diklik -->
    <div class="trigger" :class="{ 'trigger--hidden': doorsOpen }">
      <p class="trigger__eyebrow">The Wedding Of</p>
      <h2 class="trigger__names">{{ config.groom.nickname }} &amp; {{ config.bride.nickname }}</h2>
      <button class="btn-gold" @click="open">Buka Undangan</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import FloralOrnament from './FloralOrnament.vue'
import config from '../data/config.js'

const emit = defineEmits(['opened'])
const doorsOpen = ref(false)
const fading = ref(false)
const hidden = ref(false)

const groomInitial = config.groom.nickname.charAt(0).toUpperCase()
const brideInitial = config.bride.nickname.charAt(0).toUpperCase()

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
  // 1) Tombol & judul memudar
  // 2) Pintu terbuka ke kiri & kanan (seperti gerbang), isi undangan terlihat
  // 3) Setelah pintu terbuka penuh, seluruh sampul memudar ke halaman utama
  doorsOpen.value = true
  setTimeout(() => {
    fading.value = true
  }, 1100)
  setTimeout(() => {
    hidden.value = true
    emit('opened')
  }, 1950)
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
  overflow: hidden;
  perspective: 1400px;
  background: radial-gradient(circle at 50% 30%, var(--maroon-mid), var(--maroon-deep) 75%);
  transition: opacity 0.85s ease, transform 0.85s ease;
}
.cover--fading {
  opacity: 0;
  transform: scale(1.04);
}
.cover--hidden {
  display: none;
}

/* Isi di belakang pintu */
.cover__content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.cover__guest { margin-bottom: 4px; }
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

/* ============ PINTU GERBANG ============ */
.door {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 10;
  background:
    linear-gradient(160deg, var(--maroon-mid), var(--maroon-deep) 70%);
  border-top: 1px solid var(--gold);
  border-bottom: 1px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1.1s cubic-bezier(0.65, 0, 0.35, 1), opacity 1.1s ease 0.15s;
  will-change: transform;
}
.door--left {
  left: 0;
  border-right: 1px solid var(--gold);
  border-radius: 100px 0 0 0;
  transform-origin: left center;
}
.door--right {
  right: 0;
  border-left: 1px solid var(--gold);
  border-radius: 0 100px 0 0;
  transform-origin: right center;
}
.door--left.door--open {
  transform: rotateY(-108deg);
  opacity: 0;
}
.door--right.door--open {
  transform: rotateY(108deg);
  opacity: 0;
}

.door__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.door__initial {
  font-family: var(--font-script);
  font-size: 84px;
  color: var(--gold-light);
  line-height: 1;
}
.door__vine {
  color: var(--gold);
  font-size: 20px;
  margin-top: 6px;
}

/* ============ TOMBOL DI ATAS PINTU ============ */
.trigger {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  text-align: center;
  pointer-events: auto;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}
.trigger--hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.trigger__eyebrow {
  font-family: var(--font-label);
  font-size: 14px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin: 0;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}
.trigger__names {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 26px;
  color: var(--ivory);
  margin: 0 0 8px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

@media (prefers-reduced-motion: reduce) {
  .door { transition: opacity 0.3s ease; }
  .door--open { transform: none !important; }
}
</style>
