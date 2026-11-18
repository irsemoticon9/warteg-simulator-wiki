# Warteg Simulator Wiki (Unofficial)

Wiki fan-made berisi panduan Warteg Simulator versi 0.1b. Seluruh angka diambil dari hasil decompile game, bukan perkiraan. Dibuat dengan bantuan AI.

## Menjalankan lokal

Buka `index.html` langsung di browser, atau jalankan server statis:

```
python -m http.server 8471 --directory "C:\Users\IRSE\Documents\apk\Warteg Simulator\wiki"
```

Lalu buka http://localhost:8471.

## Deploy ke GitHub Pages

1. Buat repo publik, misalnya `warteg-simulator-wiki`.
2. Di folder wiki:
   ```
   git remote add origin https://github.com/irsemoticon9/warteg-simulator-wiki.git
   git push -u origin main
   ```
3. Di GitHub: Settings → Pages → Source: **Deploy from a branch** → Branch `main`, folder `/ (root)` → Save.
4. Situs aktif di `https://irsemoticon9.github.io/warteg-simulator-wiki/`.

## Catatan versi aset

File `index.html` dan semua halaman di `pages/` memuat `app.js?v=6` dan `style.css?v=6`. Naikkan angka versi setiap kali mengubah file JS/CSS agar browser tidak memakai salinan lama dari cache.

## Struktur

- `index.html` — beranda dengan daftar 17 halaman
- `pages/` — 17 artikel wiki
- `assets/css/style.css` — sistem desain, termasuk aturan tabel responsif
- `assets/js/app.js` — header, navigasi, pencarian, dan daftar isi otomatis
- `assets/img/` — ikon aplikasi, splash, dan gambar latar beranda

## Sumber data

Data diambil dari APK `com.wartegsim.perlium` v0.1b (kode versi 12) menggunakan jadx dan Godot RE Tools. Hasil decompile ada di folder `gdre_out/` dan `decompiled/` di luar repo ini.
