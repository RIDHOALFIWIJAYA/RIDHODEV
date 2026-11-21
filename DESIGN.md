# DESIGN.md

Arah visual RIDHO.DEV. Sumber: jawaban pemilik proyek dalam sesi ini, bukan hasil tebakan agen.

## Identitas dan suara

- Peran: full-stack engineer.
- Suara: teknis dan ringkas. Kalimat pendek, klaim dihindari, bukti atau pekerjaan nyata yang ditampilkan.
- Bahasa antarmuka: Indonesia. Alasan: sebagian konten sudah berbahasa Indonesia dan ini bahasa pemilik proyek.
- Nama merek: `RIDHO.DEV` sebagai teks. Alasan: belum ada logo resmi yang disetujui, maka tidak dibuat logo bergambar.

## Kepribadian dan dial

Reading this as: portofolio satu halaman untuk calon klien dan perekrut, dalam bahasa visual monokrom presisi, dial ENERGY 1 / RHYTHM 2 / MOTION 3.

- ENERGY 1: satu fokus per layar, hierarki lewat ukuran dan berat, dekorasi hanya jika punya fungsi.
- RHYTHM 2: sebagian besar bagian memakai grid yang sama, dengan satu atau dua bagian yang sengaja berbeda komposisinya.
- MOTION 3: split-text judul hero sekali saat muat, kartu proyek muncul berurutan saat masuk viewport, dan satu garis progres mengikuti posisi scroll di bagian proyek. Transisi ringan tetap dipakai untuk perubahan state. Parallax, pin, dan animasi berulang tidak dipakai. Alasan: gerak dipakai untuk menunjukkan urutan dan posisi kerja, bukan untuk dekorasi.

## Palet

| Peran | Hex | Alasan |
| --- | --- | --- |
| Paper, latar terang | `#F4F2ED` | Netral hangat, tidak sterill putih murni, memberi ruang pada tipografi. |
| Ink, teks utama dan latar gelap | `#111110` | Kontras 16.89:1 terhadap Paper, dipakai sebagai struktur monokrom. |
| Concrete, teks sekunder terang | `#6B6A65` | Kontras 4.84:1 terhadap Paper, lulus AA untuk teks biasa. |
| Surface, permukaan gelap | `#1B1A18` | Naik satu langkah dari Ink agar kartu terbaca tanpa bayangan. |
| Ash, teks sekunder gelap | `#B9B7B0` | Kontras 8.66:1 terhadap Surface, lulus AA. |
| Aksen, garis dan fokus | `#E4572E` | Satu-satunya warna. 3.29:1 terhadap Paper, jadi hanya untuk elemen non-teks dan teks besar; 4.72:1 terhadap Surface. |
| Aksen teks kecil terang | `#B8421B` | Versi gelap dari aksen, 4.90:1 terhadap Paper, untuk tautan dan label kecil. |

Aturan: maksimal tiga netral dan satu aksen. Tidak ada gradien hiasan, blob, glow, atau bayangan mengambang. Aksen dipakai di satu momen penting per layar, bukan tersebar di semua tombol, ikon, dan badge.

## Tipografi

- Judul dan angka besar: Fraunces, berat 600. Alasan: serif dengan karakter, memberi suara pribadi tanpa jatuh ke monospace "terminal" yang umum di portofolio teknis.
- Isi, label, navigasi: IBM Plex Sans, berat 400 dan 500. Alasan: keluarga sans dengan akar teknis yang cocok untuk full-stack engineer, bukan pilihan default Inter atau Geist.
- Font di-host sendiri lewat paket `@fontsource`, agar tidak bergantung pada jaringan eksternal saat build GitHub Pages.
- Skala memakai `clamp()`, berat maksimal 600. Tidak ada `font-black`, tidak ada label uppercase dengan tracking ekstrem.

## Gerak

- `animejs` v4 dipakai untuk: split-text judul hero sekali saat muat (`splitText` dari `animejs/text`, `eases.outExpo`), reveal proyek berurutan (`onScroll`, `stagger` dengan `repeat: false`), dan garis progres scroll (`onScroll` dengan `sync: true`).
- CSS dipakai untuk: hover, focus, dan buka/tutup menu. Ini state, bukan koreografi.
- Durasi: 480 ms untuk reveal umum, 560 ms untuk kartu proyek, 900 ms untuk split-text hero, 150 ms untuk hover, 200 ms untuk menu.
- Tidak ada animasi tanpa pemicu: tidak ada `float`, `ping`, `pulse`, blob bergerak, atau gradien berjalan.
- Jika `prefers-reduced-motion: reduce`, animasi dilewati dan elemen langsung tampil di posisi akhir.

## Isi dan struktur

- Bagian yang ditampilkan: `#home`, `#projects`, `#about`, `#contact`. Navigasi hanya memuat bagian yang benar-benar ada.
- `#projects` mengambil 6 repo publik terbaru yang punya deskripsi dari GitHub API `@RIDHOALFIWIJAYA`. Fork dan repo arsip dilewati. Sumber data terlihat lewat tautan ke tiap repo.
- Screenshot proyek diletakkan di `public/projects/<nama-repo>.webp`. Path dan alt text didaftarkan di objek `projectMedia` pada `src/lib/projects.js`. Jika file belum ada, kartu tetap tampil sebagai teks tanpa gambar rusak.
- `#education` tidak ditampilkan karena datanya masih dummy. Konten palsu dihapus, bukan disamarkan.
- CTA utama mengarah ke `#contact` atau ke profil GitHub nyata. Tidak ada tautan `#` dan tidak ada tombol tanpa tujuan.
- Klaim sertifikasi, penghargaan, statistik, dan testimoni yang tidak bisa dibuktikan tidak ditampilkan.
- Foto profil memakai turunan WebP dari `hero.png` agar muat lebih ringan, dengan `width` dan `height` eksplisit. Sumber PNG asli tetap disimpan. Ikon sosial memakai SVG yang sudah ada di proyek.
- `#projects` memakai satu entri utama untuk repo terbaru dan entri ringkas untuk sisanya. Ini memberi RHYTHM 2 satu perubahan komposisi yang disengaja.
- Alamat email belum dikonfirmasi, maka kontak memakai tautan WhatsApp dan sosial yang sudah ada. URL WhatsApp yang salah ketik diperbaiki.
