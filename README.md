# Warteg Simulator Wiki (Unofficial)

Wiki fan-made berisi panduan Warteg Simulator versi 0.2C (kode versi 34, paket
`com.wartegsim.perlium`). Semua angka diambil dari hasil membongkar APK yang
terpasang, bukan perkiraan. Wiki ini berisi 20 halaman panduan dan dibuat dengan
bantuan AI.

Sumber data: `base.apk` + `split_assetPackInstallTime.apk` dari perangkat. Keduanya
dibongkar dengan jadx (untuk manifest) dan Godot RE Tools v2.7.4 (untuk aset dan
GDScript v0.2C, bytecode 4.5.0-stable). Versi 0.2C dan versionCode 34 diambil dari
metadata manifest `base.apk`. Berkas `project.godot` tidak ada di berkas bukti, dan
`game_version.gd` hanya membaca application/config/version dengan nilai cadangan 0.1b.

## Menjalankan lokal

Buka `index.html` langsung di browser, atau jalankan server statis dari folder wiki ini:

```
python -m http.server 8471
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

File `index.html` dan semua halaman di `pages/` memuat `app.js?v=22` dan
`style.css?v=22`. Naikkan angka versi setiap kali mengubah file JS/CSS supaya
browser tidak memakai salinan lama dari cache.
Versi 22 dipakai karena pembaruan konten 0.2C.
