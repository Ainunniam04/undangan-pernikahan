// =========================================================
// SEMUA ISI UNDANGAN DIATUR DI SINI.
// Edit file ini untuk mengganti nama, tanggal, lokasi, dll.
// Tidak perlu menyentuh file komponen lain.
// =========================================================

export default {
  // Ditampilkan di tab browser & meta description
  seo: {
    title: 'Asri & Fikri — The Wedding Of',
    description: 'Undangan pernikahan digital Asri & Fikri',
  },

  // Sampul / cover pembuka
  cover: {
    initials: 'A & F',
    guestLabelPrefix: 'Kepada Yth.',
    // Nama tamu bisa ditambahkan lewat parameter URL: ?to=Nama+Tamu
    defaultGuest: 'Bapak/Ibu/Saudara/i',
  },

  // Mempelai
  bride: {
    fullName: 'Asri Putri Kahyangan',
    nickname: 'Asri',
    parents: 'Putri pertama dari Bapak Yudhistira & Ibu Dewi Dropadi',
  },
  groom: {
    fullName: 'Fikri Putra Yudhistira',
    nickname: 'Fikri',
    parents: 'Putra pertama dari Bapak Abimanyu & Ibu Dewi Utari',
  },

  quote: {
    text:
      'Dan di antara tanda-tanda kebesaran-Nya ialah diciptakan-Nya pasangan hidup dari jenis kalian sendiri, agar kalian merasa tenteram bersamanya. Dia jadikan di antara kalian rasa cinta dan kasih sayang.',
    source: '(QS. Ar-Rum: 21)',
  },

  // Tanggal & waktu acara — format ISO agar countdown berjalan otomatis
  weddingDateISO: '2026-08-23T09:00:00+07:00',
  weddingDateLabel: '23 Agustus 2026',

  events: [
    {
      name: 'Akad Nikah',
      day: 'Minggu, 23 Agustus 2026',
      time: '09.00 – 10.00 WIB',
    },
    {
      name: 'Resepsi',
      day: 'Minggu, 23 Agustus 2026',
      time: '10.00 – 15.00 WIB',
    },
  ],

  venue: {
    name: 'Bandung Convention Center',
    address: 'Jl. Soekarno Hatta No. 354, Kec. Bojongloa Kidel, Kota Bandung',
    mapsUrl: 'https://maps.google.com/?q=Bandung+Convention+Center',
  },

  // Galeri foto — ganti dengan foto pasangan (taruh file di folder /public/images/)
  gallery: [
    // { src: '/images/foto1.jpg', caption: 'Prewedding' },
    // { src: '/images/foto2.jpg', caption: 'Lamaran' },
  ],

  // Info hadiah / amplop digital (opsional, kosongkan jika tidak dipakai)
  gift: {
    enabled: true,
    note: 'Doa restu Bapak/Ibu/Saudara/i merupakan karunia yang sangat berarti. Jika berkenan memberi tanda kasih, kami sediakan pilihan berikut.',
    accounts: [
      { bank: 'BCA', number: '1234567890', holder: 'Asri Putri Kahyangan' },
      { bank: 'Mandiri', number: '0987654321', holder: 'Fikri Putra Yudhistira' },
    ],
  },

  // Musik latar (opsional) — taruh file mp3 di /public/music.mp3
  music: {
    enabled: true,
    src: '/music.mp3',
  },

  closingMessage:
    'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
}
