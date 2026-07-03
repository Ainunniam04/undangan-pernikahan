<template>
  <section class="section section--dark hero">
    <div class="petals" aria-hidden="true">
      <span v-for="p in petals" :key="p.id" class="petal" :style="p.style">❀</span>
    </div>
    <div class="arch-frame" v-reveal>
      <p class="eyebrow">Bismillahirrahmanirrahim</p>
      <h2 class="hero__monogram">{{ initials }}</h2>
      <p class="hero__names">{{ config.groom.fullName }} &amp; {{ config.bride.fullName }}</p>
      <div class="divider"></div>
      <p class="hero__quote">&ldquo;{{ config.quote.text }}&rdquo;</p>
      <p class="hero__quote-source">{{ config.quote.source }}</p>
    </div>
  </section>
</template>

<script setup>
import config from '../data/config.js'

const initials = config.cover.initials

const petals = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  style: {
    left: `${Math.random() * 100}%`,
    animationDuration: `${10 + Math.random() * 8}s`,
    animationDelay: `${Math.random() * 6}s`,
    fontSize: `${11 + Math.random() * 8}px`,
    color: i % 2 === 0 ? 'var(--rose-dust)' : 'var(--gold)',
  },
}))
</script>

<style scoped>
.hero { text-align: center; }

.hero__monogram {
  font-family: var(--font-script);
  font-size: 64px;
  color: var(--gold-light);
  margin: 0 0 10px;
}

.hero__names {
  font-family: var(--font-label);
  font-size: 16px;
  letter-spacing: 0.08em;
  color: var(--ivory);
  margin: 0;
}

.hero__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 16px;
  line-height: 1.7;
  color: var(--ivory);
  margin: 18px 0 8px;
}

.hero__quote-source {
  font-family: var(--font-label);
  font-size: 13px;
  letter-spacing: 0.08em;
  color: var(--rose-dust);
}
</style>
