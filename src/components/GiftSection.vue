<template>
  <section v-if="config.gift.enabled" class="section section--light gift">
    <p class="eyebrow" v-reveal>Tanda Kasih</p>
    <h2 class="section-title" v-reveal>Amplop Digital</h2>
    <div class="divider" v-reveal></div>
    <p class="gift__note" v-reveal>{{ config.gift.note }}</p>

    <div class="gift__accounts" v-reveal>
      <div v-for="acc in config.gift.accounts" :key="acc.number" class="gift__account">
        <p class="gift__bank">{{ acc.bank }}</p>
        <p class="gift__number">{{ acc.number }}</p>
        <p class="gift__holder">a.n. {{ acc.holder }}</p>
        <button class="btn-outline gift__copy" @click="copy(acc.number)">
          {{ copied === acc.number ? 'Tersalin!' : 'Salin Nomor' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import config from '../data/config.js'

const copied = ref('')

async function copy(number) {
  try {
    await navigator.clipboard.writeText(number)
    copied.value = number
    setTimeout(() => (copied.value = ''), 2000)
  } catch (e) {
    console.error('Gagal menyalin', e)
  }
}
</script>

<style scoped>
.gift { text-align: center; }
.gift__note {
  max-width: 360px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 1.7;
  color: var(--ink-soft);
}
.gift__accounts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
  margin: 26px auto 0;
}
.gift__account {
  border: 1px solid var(--gold);
  border-radius: 6px;
  padding: 18px;
  background: var(--ivory-2);
}
.gift__bank {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 17px;
  color: var(--maroon-mid);
  margin: 0 0 4px;
}
.gift__number {
  font-family: var(--font-label);
  font-size: 20px;
  letter-spacing: 0.05em;
  color: var(--ink);
  margin: 0 0 2px;
}
.gift__holder {
  font-size: 13px;
  color: var(--ink-soft);
  margin: 0 0 12px;
}
.gift__copy {
  color: var(--maroon-mid);
  border-color: var(--maroon-mid);
}
.gift__copy:hover {
  background: var(--maroon-mid);
  color: var(--ivory);
}
</style>
