<template>
  <div class="countdown" v-reveal>
    <div v-for="unit in units" :key="unit.label" class="countdown__unit">
      <span class="countdown__value">{{ unit.value }}</span>
      <span class="countdown__label">{{ unit.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import config from '../data/config.js'

const units = ref([
  { label: 'Hari', value: '00' },
  { label: 'Jam', value: '00' },
  { label: 'Menit', value: '00' },
  { label: 'Detik', value: '00' },
])

let timer = null

function pad(n) {
  return String(n).padStart(2, '0')
}

function tick() {
  const target = new Date(config.weddingDateISO).getTime()
  const now = Date.now()
  const diff = Math.max(target - now, 0)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  units.value = [
    { label: 'Hari', value: pad(days) },
    { label: 'Jam', value: pad(hours) },
    { label: 'Menit', value: pad(minutes) },
    { label: 'Detik', value: pad(seconds) },
  ]
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin: 30px 0 6px;
}
.countdown__unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  padding: 12px 6px;
  border: 1px solid var(--gold);
  border-radius: 8px;
  background: rgba(191, 154, 94, 0.08);
}
.countdown__value {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  color: var(--gold-light);
}
.countdown__label {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rose-dust);
  margin-top: 2px;
}
</style>
