# 💌 Undangan Digital — Vue Template

Template undangan pernikahan digital bertema **elegan & floral**, dibangun dengan Vue 3 + Vite.
Siap dijalankan gratis di **GitHub Pages** — tanpa perlu domain atau hosting berbayar.

## ✨ Fitur

- Sampul pembuka dengan animasi "Buka Undangan"
- Bisa personalisasi nama tamu lewat link: `?to=Nama+Tamu`
- Motif gerbang lengkung & ornamen bunga (SVG, tidak perlu file gambar)
- Hitung mundur otomatis ke hari-H
- Detail Akad & Resepsi + tombol buka Google Maps
- Galeri foto (opsional)
- Form RSVP (siap dihubungkan ke Google Sheet / Formspree)
- Info amplop digital dengan tombol "Salin Nomor Rekening"
- Tombol musik latar mengambang
- Animasi *fade-up* saat scroll, responsif di HP

## 🚀 Menjalankan di Komputer (opsional, untuk pratinjau)

Butuh [Node.js](https://nodejs.org) versi 18 ke atas.

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## 🎨 Cara Kustomisasi (untuk pemula)

Hampir semua isi undangan diatur di **satu file**:

```
src/data/config.js
```

Buka file itu dan ganti:
- Nama mempelai & orang tua
- Tanggal & jam acara (`weddingDateISO` — format ini yang menggerakkan hitung mundur)
- Lokasi & link Google Maps
- Nomor rekening untuk amplop digital
- Ayat/quote pembuka

Untuk **foto galeri**:
1. Taruh file foto di folder `public/images/`
2. Tambahkan ke array `gallery` di `config.js`, contoh:
   ```js
   gallery: [
     { src: '/images/foto1.jpg', caption: 'Prewedding' },
   ]
   ```

Untuk **musik latar**:
1. Taruh file `.mp3` di folder `public/`, beri nama `music.mp3` (atau ubah path di `config.js` bagian `music.src`)

Warna & font diatur di `src/assets/style.css` bagian `:root` paling atas, kalau mau ganti palet tinggal ubah nilai hex-nya di sana.

## 📤 Upload & Deploy ke GitHub Pages

### 1. Buat repository baru
Buat repo baru di GitHub, misalnya `undangan-asri-fikri`.

### 2. Sesuaikan `vite.config.js`
Buka `vite.config.js`, ganti baris `base` dengan nama repo kamu:
```js
base: '/undangan-asri-fikri/',
```

### 3. Push project ke GitHub
```bash
git init
git add .
git commit -m "Undangan digital pertama"
git branch -M main
git remote add origin https://github.com/USERNAME/undangan-asri-fikri.git
git push -u origin main
```

### 4. Aktifkan GitHub Pages
1. Buka repo di GitHub → **Settings** → **Pages**
2. Pada **Source**, pilih **GitHub Actions**
3. Workflow di `.github/workflows/deploy.yml` sudah disiapkan — begitu kamu push ke branch `main`, situs akan otomatis ter-build & ter-deploy

Setelah selesai (biasanya 1–2 menit), undangan bisa diakses di:
```
https://USERNAME.github.io/undangan-asri-fikri/
```

### 5. Bagikan link personal ke tamu
Tambahkan parameter `?to=` di akhir link untuk menampilkan nama tamu:
```
https://USERNAME.github.io/undangan-asri-fikri/?to=Budi+%26+Keluarga
```

## 🔗 Menghubungkan RSVP ke Penyimpanan Data

GitHub Pages hanya menyajikan file statis (tidak ada server/database), jadi form RSVP di `src/components/RsvpForm.vue` saat ini hanya menampilkan pesan terima kasih tanpa menyimpan data. Untuk benar-benar menyimpan data RSVP, pilih salah satu:

**Opsi A — Formspree (paling mudah)**
1. Daftar gratis di [formspree.io](https://formspree.io), buat form baru, salin endpoint URL-nya
2. Di `handleSubmit()` pada `RsvpForm.vue`, ganti `console.log(...)` dengan:
   ```js
   await fetch('https://formspree.io/f/xxxxxxx', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ ...form }),
   })
   ```

**Opsi B — Google Sheet via Google Apps Script**
1. Buat Google Sheet, lalu buat Apps Script Web App yang menerima POST dan menulis ke sheet
2. Deploy sebagai Web App, salin URL-nya
3. Ganti `console.log(...)` dengan `fetch` ke URL tersebut, sama seperti Opsi A

## 📁 Struktur Project

```
├── public/                  # File statis (foto, musik) — taruh di sini
├── src/
│   ├── assets/style.css     # Palet warna, font, style global
│   ├── components/          # Setiap bagian undangan (Hero, RSVP, dll)
│   ├── data/config.js       # ⭐ Isi undangan — edit di sini
│   ├── directives/reveal.js # Animasi fade-up saat scroll
│   ├── App.vue              # Merangkai semua section
│   └── main.js
├── .github/workflows/deploy.yml  # Auto-deploy ke GitHub Pages
└── vite.config.js           # Sesuaikan `base` dengan nama repo
```

Selamat mengedit dan selamat menikah! 🌸
