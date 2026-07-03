// =========================================================
// SEMUA ISI UNDANGAN DIATUR DI SINI.
// Edit file ini untuk mengganti nama, tanggal, lokasi, dll.
// Tidak perlu menyentuh file komponen lain.
// =========================================================

export default {
  // Ditampilkan di tab browser & meta description
  seo: {
    title: 'Rita & Niam — The Wedding Of',
    description: 'Undangan pernikahan digital Rita & Niam',
  },

  // Sampul / cover pembuka
  cover: {
    initials: 'R & N',
    guestLabelPrefix: 'Kepada Yth.',
    // Nama tamu bisa ditambahkan lewat parameter URL: ?to=Nama+Tamu
    defaultGuest: 'Bapak/Ibu/Saudara/i',
  },

  // Mempelai
  bride: {
    fullName: 'Rita Auliya, S.E.',
    nickname: 'Rita',
    parents: 'Putri pertama dari Bapak Selamet & Ibu Sri Hartini',
  },
  groom: {
    fullName: 'Mohammad Zulfa Ainun Niam, S.Pd.',
    nickname: 'Niam',
    parents: 'Putra Kedua dari Bapak Sutrisno & Ibu Siti Mahmudah',
  },

  quote: {
    text:
      'Dan di antara tanda-tanda kebesaran-Nya ialah diciptakan-Nya pasangan hidup dari jenis kalian sendiri, agar kalian merasa tenteram bersamanya. Dia jadikan di antara kalian rasa cinta dan kasih sayang.',
    source: '(QS. Ar-Rum: 21)',
  },

  // Tanggal & waktu acara — format ISO agar countdown berjalan otomatis
  weddingDateISO: '2027-08-23T09:00:00+07:00',
  weddingDateLabel: '23 Agustus 2027',

  events: [
    {
      name: 'Akad Nikah',
      day: 'Minggu, 23 Agustus 2027',
      time: '09.00 – 10.00 WIB',
    },
    {
      name: 'Resepsi',
      day: 'Minggu, 23 Agustus 2027',
      time: '10.00 – 15.00 WIB',
    },
  ],

  venue: {
    name: 'Rumah Mempelai Wanita Rita Auliya',
    address: '6V8H+9FP, Unnamed Road, Ngelo, Karangbener, Kec. Bae, Kabupaten Kudus, Jawa Tengah 59323',
    mapsUrl: 'https://maps.app.goo.gl/cBTEZ4pwjzT7miwe9',
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
