<template>
  <section v-if="config.gallery.length" class="section section--light gallery">
    <p class="eyebrow" v-reveal>Momen</p>
    <h2 class="section-title" v-reveal>Galeri</h2>
    <div class="divider" v-reveal></div>

    <div class="gallery__grid" v-reveal>
      <figure v-for="(img, i) in config.gallery" :key="i" class="gallery__item">
        <img :src="img.src" :alt="img.caption || 'Foto pasangan'" loading="lazy" />
        <figcaption v-if="img.caption">{{ img.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import config from '../data/config.js'
</script>

<style scoped>
.gallery { text-align: center; }
.gallery__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 24px;
}
.gallery__item {
  margin: 0;
  border: 1px solid var(--gold);
  padding: 4px;
  border-radius: 4px;
  background: var(--ivory);
}
.gallery__item img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 2px;
}
.gallery__item figcaption {
  font-family: var(--font-label);
  font-size: 12px;
  color: var(--ink-soft);
  padding-top: 6px;
}
</style>
