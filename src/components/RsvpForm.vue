<template>
  <section class="section section--dark rsvp">
    <p class="eyebrow" v-reveal>Konfirmasi Kehadiran</p>
    <h2 class="section-title" v-reveal>RSVP</h2>
    <div class="divider" v-reveal></div>

    <form v-if="!submitted" class="rsvp__form" v-reveal @submit.prevent="handleSubmit">
      <label class="rsvp__field">
        <span>Nama</span>
        <input v-model="form.name" type="text" required placeholder="Nama lengkap" />
      </label>

      <fieldset class="rsvp__field rsvp__field--radio">
        <legend>Konfirmasi Kehadiran</legend>
        <label>
          <input type="radio" value="hadir" v-model="form.attendance" required />
          Hadir
        </label>
        <label>
          <input type="radio" value="tidak_hadir" v-model="form.attendance" />
          Tidak Bisa Hadir
        </label>
      </fieldset>

      <label class="rsvp__field">
        <span>Jumlah Tamu</span>
        <input v-model="form.guests" type="number" min="1" max="5" />
      </label>

      <label class="rsvp__field">
        <span>Ucapan &amp; Doa</span>
        <textarea v-model="form.message" rows="3" placeholder="Tulis ucapan untuk kedua mempelai..."></textarea>
      </label>

      <button type="submit" class="btn-gold">Kirim</button>
    </form>

    <div v-else class="rsvp__thanks" v-reveal>
      <p>Terima kasih, {{ form.name }}!</p>
      <p class="rsvp__thanks-sub">Konfirmasi kamu telah kami terima.</p>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  attendance: '',
  guests: 1,
  message: '',
})
const submitted = ref(false)

function handleSubmit() {
  // CATATAN: GitHub Pages hanya melayani file statis, tidak ada server/database.
  // Untuk benar-benar menyimpan data RSVP, hubungkan ke salah satu opsi berikut:
  //  - Google Form / Google Sheet (via fetch ke Apps Script Web App)
  //  - Formspree.io (gratis untuk kebutuhan sederhana)
  //  - Firebase Firestore
  // Lihat README.md bagian "Menghubungkan RSVP" untuk contoh kodenya.
  console.log('RSVP submitted:', { ...form })
  submitted.value = true
}
</script>

<style scoped>
.rsvp { text-align: center; }

.rsvp__form {
  max-width: 360px;
  margin: 28px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}
.rsvp__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--font-label);
  font-size: 14px;
  letter-spacing: 0.04em;
  color: var(--rose-dust);
}
.rsvp__field input[type='text'],
.rsvp__field input[type='number'],
.rsvp__field textarea {
  font-family: var(--font-body);
  font-size: 15px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid var(--gold);
  background: rgba(248, 241, 228, 0.06);
  color: var(--ivory);
  resize: vertical;
}
.rsvp__field textarea::placeholder,
.rsvp__field input::placeholder { color: rgba(248, 241, 228, 0.4); }

.rsvp__field--radio {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}
.rsvp__field--radio legend {
  width: 100%;
  margin-bottom: 4px;
}
.rsvp__field--radio label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  color: var(--ivory);
}

.rsvp__form .btn-gold {
  align-self: center;
  margin-top: 6px;
}

.rsvp__thanks {
  font-family: var(--font-display);
  font-style: italic;
  color: var(--gold-light);
  font-size: 19px;
  margin-top: 24px;
}
.rsvp__thanks-sub {
  font-family: var(--font-body);
  font-style: normal;
  font-size: 14px;
  color: var(--rose-dust);
}
</style>
