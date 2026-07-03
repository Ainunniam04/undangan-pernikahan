<template>
  <CoverScreen v-if="!opened" @opened="onOpened" />

  <main v-show="opened">
    <HeroSection />
    <CoupleSection />
    <EventDetails />
    <GallerySection />
    <RsvpForm />
    <GiftSection />
    <ClosingSection />
  </main>

  <MusicToggle v-if="opened" ref="musicRef" />
</template>

<script setup>
import { ref, nextTick } from 'vue'
import CoverScreen from './components/CoverScreen.vue'
import HeroSection from './components/HeroSection.vue'
import CoupleSection from './components/CoupleSection.vue'
import EventDetails from './components/EventDetails.vue'
import GallerySection from './components/GallerySection.vue'
import RsvpForm from './components/RsvpForm.vue'
import GiftSection from './components/GiftSection.vue'
import ClosingSection from './components/ClosingSection.vue'
import MusicToggle from './components/MusicToggle.vue'

const opened = ref(false)
const musicRef = ref(null)

async function onOpened() {
  opened.value = true
  document.body.style.overflow = ''
  await nextTick()
  musicRef.value?.play()
}
</script>
