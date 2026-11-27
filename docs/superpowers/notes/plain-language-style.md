# Gaya bahasa awam untuk wiki Warteg Simulator

## Pembaca

Orang yang belum pernah main Warteg Simulator, atau baru mulai. Mereka tidak tahu istilah internal game. Tujuan akhir: setelah membaca, mereka paham apa yang harus dilakukan, tanpa harus menghafal nama variabel.

## Aturan menulis

- Pakai bahasa Indonesia sehari-hari. Kalimat pendek. Satu ide per kalimat.
- Jelaskan istilah game saat pertama muncul. Contoh: "poin relasi (angka kedekatan dengan warga)", "cutscene (adegan cerita pendek)", "NPC (warga yang bisa diajak bicara)".
- Hindari istilah teknis kalau ada padanan awam. Contoh: "flag" menjadi "penanda", "gate" menjadi "syarat", "trigger" menjadi "pemicu", "spawn" menjadi "muncul".
- Nama variabel, nama berkas, dan nilai kode hanya dipakai kalau pembaca benar-benar perlu. Kalau dipakai, taruh dalam tanda kurung atau <code> dan beri penjelasan singkat.
- Jangan mengubah fakta, angka, nama item, nama NPC, harga, tanggal, urutan, atau tautan.
- Jangan menambah klaim baru. Jangan menghapus peringatan penting.
- Jangan memakai em dash atau en dash. Pakai titik, koma, titik dua, atau tanda kurung.
- Jangan memakai bahasa promosi, pujian kosong, atau kalimat penutup yang mengulang isi.
- Jangan memakai pola "bukan X tapi Y" kecuali memang mengoreksi kesalahpahaman yang nyata.
- Jangan menebak. Kalau sebuah bagian belum bisa dijelaskan, tulis apa adanya bahwa datanya belum terbaca.
- Pertahankan struktur HTML: heading, id, class, data-page, meta, og, cache ?v=22, tautan, dan tabel. Ubah hanya teks yang dibaca pembaca.

## Kalimat yang harus tetap ada

Skrip audit mencari beberapa kalimat dan nilai persis. Jangan mengubah atau menghapusnya. Kalau perlu, sisipkan sebagai catatan kecil di bagian yang relevan.

- README: `versi 0.2C`, `kode versi 34`, `20 halaman`, `v=22`, dan penjelasan `Versi 22 dipakai karena` yang menyebut `0.2C`.
- index.html: `VERSI 0.2C`, `Warteg Simulator v0.2C`, dua tautan toko persis, label `Google Play` dan `App Store`.
- app.js: `kode game v0.2C`.
- changelog.html: `Versi 0.2C`, `versionCode 34`, dan frasa historis `catatan historis`, `Versi 0.2B`, `Bagian 0.2B di bawah`.
- event-kampung.html: `Tiga acara`, `Adu Layangan`, `Pagi &amp; Siang saja`.
- kalender-waktu.html: `Lewati fase`, `dan Pak Joko`, `1,7 kali`.
- menu-harga.html: `menu.tres</code> berhasil dipulihkan`, `Nasi</td><td class="rp">4.000`, `0,9`, `3.000 bawaan`.
- belanja-inventory.html: `menu.tres</code> yang berhasil dipulihkan`, `perabot_list.tres</code> yang berhasil dipulihkan`, `Etalase Tambahan</td><td class="rp">300.000`, `Dispenser Takar Otomatis</td><td class="rp">250.000`, `Telur untuk balado`, `Kentang giling`.
- cerita-utama.html: `116 berkas adegan berhasil dipulihkan`, `bu_yani_cs6_butik`, `mei_cs1_perkenalan_telat`.
- npc.html: `PackedScene hasil ekspor`, `AKRAB_POIN = 40`.
- minigame.html: `Hasil pemulihan sudah ber-UTF-8`.
- pacaran.html: `data-page="pacaran"`.
- sms.html: `data-page="sms"`.

## Larangan

- Jangan menyentuh `assets/css/style.css`, `assets/js/app.js` kecuali teks catatan sumber di app.js bila perlu, atau halaman di luar batch Anda.
- Jangan mengubah `?v=22`.
- Jangan menambah pustaka, CDN, atau skrip.
- Jangan commit. Koordinator akan commit setelah semua batch diperiksa.
