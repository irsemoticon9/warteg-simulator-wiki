# Warteg Simulator Wiki (Unofficial)

Wiki fan-made berisi panduan Warteg Simulator versi 0.2B (kode versi 33, paket
`com.wartegsim.perlium`). Seluruh angka diambil dari hasil decompile APK yang
terpasang, bukan perkiraan. Wiki ini berisi 18 halaman panduan. Dibuat dengan
bantuan AI.

Sumber data: `base.apk` + `split_assetPackInstallTime.apk` dari perangkat,
dibongkar dengan jadx (manifest) dan Godot RE Tools v2.7.4 (aset & GDScript
v0.2B, bytecode 4.5.0-stable). Versi game juga dikonfirmasi di
`project.godot` (`config/version="0.2B"`).

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

File `index.html` dan semua halaman di `pages/` memuat `app.js?v=17` dan
`style.css?v=17`. Naikkan angka versi setiap kali mengubah file JS/CSS agar
browser tidak memakai salinan lama dari cache. Versi 17 dipakai karena
`assets/js/app.js` ikut diperbarui untuk data v0.2B.
