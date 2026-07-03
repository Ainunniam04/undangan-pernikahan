<template>
  <section class="section section--light couple">
    <p class="eyebrow" v-reveal>Kedua Mempelai</p>
    <h2 class="section-title" v-reveal>Insya Allah Akan Diselenggarakan Pernikahan</h2>
    <div class="divider" v-reveal></div>

    <div class="couple__card" v-reveal>
      <p class="couple__name">{{ config.groom.fullName }}</p>
      <p class="couple__parents">{{ config.groom.parents }}</p>
    </div>

    <p class="couple__and">&amp;</p>

    <div class="couple__card" v-reveal>
      <p class="couple__name">{{ config.bride.fullName }}</p>
      <p class="couple__parents">{{ config.bride.parents }}</p>
    </div>
  </section>
</template>

<script setup>
import config from '../data/config.js'
</script>

<style scoped>
.couple { text-align: center; }

.couple__card {
  max-width: 360px;
  margin: 26px auto;
  padding: 22px 18px;
  border-top: 1px solid var(--gold);
  border-bottom: 1px solid var(--gold);
}

.couple__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 22px;
  color: var(--maroon-mid);
  margin: 0 0 8px;
}

.couple__parents {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--ink-soft);
  line-height: 1.6;
  margin: 0;
}

.couple__and {
  font-family: var(--font-script);
  font-size: 34px;
  color: var(--gold);
  margin: 0;
}
</style>
