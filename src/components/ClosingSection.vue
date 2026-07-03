<template>
  <section class="section section--dark closing">
    <FloralOrnament class="corner-ornament corner-ornament--tl" />
    <FloralOrnament class="corner-ornament corner-ornament--tr" />

    <p class="closing__monogram" v-reveal>{{ config.cover.initials }}</p>
    <p class="closing__message" v-reveal>{{ config.closingMessage }}</p>
    <p class="closing__thanks" v-reveal>Terima kasih atas doa &amp; restunya</p>
    <p class="closing__names" v-reveal>{{ config.groom.nickname }} &amp; {{ config.bride.nickname }}</p>
  </section>
</template>

<script setup>
import config from '../data/config.js'
import FloralOrnament from './FloralOrnament.vue'
</script>

<style scoped>
.closing {
  text-align: center;
  padding-bottom: 100px;
}
.closing__monogram {
  font-family: var(--font-script);
  font-size: 40px;
  color: var(--gold-light);
  margin-bottom: 20px;
}
.closing__message {
  max-width: 340px;
  margin: 0 auto 24px;
  font-size: 15px;
  line-height: 1.8;
  color: var(--ivory);
}
.closing__thanks {
  font-family: var(--font-label);
  letter-spacing: 0.1em;
  font-size: 14px;
  color: var(--rose-dust);
  margin: 0;
}
.closing__names {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 22px;
  color: var(--gold-light);
  margin-top: 6px;
}
</style>
