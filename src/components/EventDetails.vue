<template>
  <section class="section section--dark events">
    <p class="eyebrow" v-reveal>Save The Date</p>
    <h2 class="section-title" v-reveal>Waktu &amp; Tempat</h2>
    <div class="divider" v-reveal></div>

    <CountdownTimer />

    <div class="events__list">
      <div v-for="ev in config.events" :key="ev.name" class="events__item" v-reveal>
        <p class="events__name">{{ ev.name }}</p>
        <p class="events__day">{{ ev.day }}</p>
        <p class="events__time">{{ ev.time }}</p>
      </div>
    </div>

    <div class="events__venue" v-reveal>
      <p class="events__venue-name">{{ config.venue.name }}</p>
      <p class="events__venue-address">{{ config.venue.address }}</p>
      <a :href="config.venue.mapsUrl" target="_blank" rel="noopener" class="btn-outline">
        Lihat Peta
      </a>
    </div>
  </section>
</template>

<script setup>
import config from '../data/config.js'
import CountdownTimer from './CountdownTimer.vue'
</script>

<style scoped>
.events { text-align: center; }

.events__list {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  margin: 34px 0;
}
.events__item {
  min-width: 150px;
  padding: 20px 16px;
  border-radius: 4px;
  background: rgba(248, 241, 228, 0.05);
  border: 1px solid var(--gold);
}
.events__name {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 19px;
  color: var(--gold-light);
  margin: 0 0 8px;
}
.events__day {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--ivory);
  margin: 0 0 4px;
}
.events__time {
  font-family: var(--font-label);
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--rose-dust);
  margin: 0;
}

.events__venue { margin-top: 12px; }
.events__venue-name {
  font-family: var(--font-display);
  font-size: 18px;
  color: var(--ivory);
  margin: 0 0 6px;
}
.events__venue-address {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--rose-dust);
  max-width: 320px;
  margin: 0 auto 16px;
  line-height: 1.6;
}
</style>
