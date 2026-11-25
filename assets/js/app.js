/* Warteg Simulator Wiki, masthead, chip kategori, tema, pencarian, TOC */
(function () {
  "use strict";

  var ICONS = {
    search: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.8-4.8"/></svg>',
    sun: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>',
    moon: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"/></svg>'
  };

  var GROUPS = [
    { id: "utama", label: "Utama", items: [
      { id: "index", href: "index.html", title: "Beranda", desc: "Peta lengkap wiki" }
    ]},
    { id: "quest", label: "Quest & Cerita", items: [
      { id: "cerita-utama", href: "pages/cerita-utama.html", title: "Cerita & Cutscene", desc: "Adegan khusus dan pemicunya", kw: "cutscene cerita alur adegan cerita utama cerita serangga cara menyelesaikan syarat hp bintang relasi" },
      { id: "quest-harian", href: "pages/quest-harian.html", title: "Quest Harian", desc: "Papan quest, hadiah, denda", kw: "quest papan batas waktu batal pesanan sms bungkus ikan serangga denda reputasi cara menyelesaikan langkah antar penerima" },
      { id: "event-kampung", href: "pages/event-kampung.html", title: "Event Kampung", desc: "Agustusan, lomba, hadiah", kw: "agustusan 17an lomba kampung kerupuk balap karung cerdas cermat hadiah" }
    ]},
    { id: "karakter", label: "Karakter", items: [
      { id: "npc", href: "pages/npc.html", title: "NPC & Pelanggan", desc: "14 warga, jadwal, peran", kw: "npc warga profil jadwal lokasi peta pelanggan kontak hp" },
      { id: "relasi-hadiah", href: "pages/relasi-hadiah.html", title: "Relasi & Kado", desc: "Poin, preferensi, ulang tahun", kw: "relasi poin kado hadiah toko pelangi selera suka tidak suka ulang tahun teman" },
      { id: "romansa", href: "pages/romansa.html", title: "Romansa", desc: "5 jalur, tier dialog", kw: "romansa cinta rani dani tier dialog pacar" }
    ]},
    { id: "ekonomi", label: "Data & Ekonomi", items: [
      { id: "warteg-shop", href: "pages/warteg-shop.html", title: "Buka Warung", desc: "Loop inti: etalase, masak, layani", tag: "INTI", kw: "warung buka etalase masak goreng wajan layani pelanggan tutup shift nasi bungkus" },
      { id: "menu-harga", href: "pages/menu-harga.html", title: "Menu & Harga", desc: "19 menu, resep & pasar mingguan", kw: "menu harga jual modal untung nasi ayam ikan telur sayur minuman resep" },
      { id: "uang-bank", href: "pages/uang-bank.html", title: "Uang, Kas & Bank", desc: "Pecahan, QRIS, tagihan", kw: "uang kas bank tabungan qris tunai tagihan ojek online ongkir" },
      { id: "belanja-inventory", href: "pages/belanja-inventory.html", title: "Belanja & Inventory", desc: "Bahan, perabot, outfit", kw: "belanja toko pasar jam buka tutup bahan perabot mei butik outfit hadiah pelangi vitamin puskesmas inventory tas" },
      { id: "buff-kafe", href: "pages/buff-kafe.html", title: "Buff Kafe", desc: "9 item & efeknya", kw: "kafe kopi minuman buff teh jus jeruk mie goreng" }
    ]},
    { id: "koleksi", label: "Koleksi & Mini-Game", items: [
      { id: "ikan-mancing", href: "pages/ikan-mancing.html", title: "Ikan & Mancing", desc: "DB ikan, syarat, umpan", kw: "mancing ikan pancing umpan dermaga joran reel" },
      { id: "serangga", href: "pages/serangga.html", title: "Serangga", desc: "25 jenis, pola gerak, harga", kw: "serangga jaring kupu kupu belalang capung tangkap" },
      { id: "minigame", href: "pages/minigame.html", title: "Semua Mini-Game", desc: "15 konteks, 41 bantuan Mei", kw: "minigame kerupuk karung penalti cerdas cermat iqro hiragana kerja sampingan" }
    ]},
    { id: "panduan", label: "Panduan", items: [
      { id: "vip-iplan", href: "pages/vip-iplan.html", title: "VIP, IAP & Iklan", desc: "Keuntungan VIP, kit, iklan", kw: "vip iap iklan special launch kit beli premium" },
      { id: "kalender-waktu", href: "pages/kalender-waktu.html", title: "Kalender & Waktu", desc: "Musim, fase, action, cuaca", kw: "kalender musim hari fase pagi siang malam action energi cuaca hujan panas cerah lewati rumah tidur kamar kasur" },
      { id: "tips-trik", href: "pages/tips-trik.html", title: "Tips & Trik", desc: "Strategi awal & efisiensi", kw: "tips trik strategi hemat cepat untung pemula" },
      { id: "changelog", href: "pages/changelog.html", title: "Catatan Versi", desc: "Perubahan antar versi game", kw: "changelog catatan versi update pembaruan 0.2b 0.1c 0.1b 0.1a" }
    ]}
  ];

  function findPage(id) {
    for (var g = 0; g < GROUPS.length; g++) {
      var items = GROUPS[g].items;
      for (var i = 0; i < items.length; i++) if (items[i].id === id) return { page: items[i], group: GROUPS[g] };
    }
    return null;
  }

  function prefix() {
    return document.body.dataset.page === "index" ? "" : "../";
  }

  function renderShell(activeId) {
    var root = document.getElementById("shell-root");
    if (!root) return;
    var found = findPage(activeId);
    var page = found ? found.page : null;
    var group = found ? found.group : null;
    var px = prefix();
    var isIndex = activeId === "index";

    var html =
      '<header class="masthead"><div class="wrap masthead-row">' +
      '<a class="brand" href="' + px + 'index.html">' +
      '<img src="' + px + 'assets/img/icon.png" alt="" width="40" height="40">' +
      '<span><strong>Warteg Simulator</strong><small>UNOFFICIAL WIKI</small></span></a>' +
      '<div class="masthead-search">' + ICONS.search +
      '<input id="search-input" type="search" placeholder="Cari panduan…" aria-label="Cari panduan">' +
      '<div id="search-out"></div></div>' +
      '<button class="icon-btn" id="theme-btn" aria-label="Ganti tema terang/gelap">' + ICONS.sun + "</button>" +
      "</div></header>" +
      '<nav class="cat-nav" aria-label="Kategori"><div class="wrap cat-row">';
    GROUPS.forEach(function (g) {
      if (g.id === "utama") return;
      var target = isIndex ? "#" + g.id : px + "index.html#" + g.id;
      var active = group && group.id === g.id ? " active" : "";
      html += '<a class="cat-chip' + active + '" href="' + target + '">' + g.label + "</a>";
    });
    html += "</div></nav>";

    root.innerHTML = html;

    var themeBtn = document.getElementById("theme-btn");
    themeBtn.addEventListener("click", function () {
      var el = document.documentElement;
      var toDark = el.dataset.theme !== "dark";
      el.dataset.theme = toDark ? "dark" : "light";
      try { localStorage.setItem("wt-theme", el.dataset.theme); } catch (e) {}
      themeBtn.innerHTML = toDark ? ICONS.moon : ICONS.sun;
    });
    themeBtn.innerHTML = document.documentElement.dataset.theme === "dark" ? ICONS.moon : ICONS.sun;

    var input = document.getElementById("search-input");
    var out = document.getElementById("search-out");
    out.setAttribute("aria-live", "polite");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      if (q.length < 2) { out.innerHTML = ""; return; }
      var hits = [];
      GROUPS.forEach(function (g) {
        g.items.forEach(function (p) {
          if (p.id === "index") return;
          var hay = (p.title + " " + p.desc + " " + (p.kw || "")).toLowerCase();
          if (hay.indexOf(q) !== -1) hits.push({ p: p, g: g });
        });
      });
      if (!hits.length) {
        out.innerHTML = '<div class="search-results"><h3>Tidak ada hasil untuk "' + q.replace(/</g, "&lt;") + '"</h3></div>';
        return;
      }
      var html2 = '<div class="search-results"><h3>' + hits.length + ' hasil</h3>';
      hits.slice(0, 8).forEach(function (h) {
        html2 += '<a class="result-item" href="' + px + h.p.href + '"><b>' + h.p.title + "</b><small>" + h.g.label + " · " + h.p.desc + "</small></a>";
      });
      out.innerHTML = html2 + "</div>";
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { input.value = ""; out.innerHTML = ""; input.blur(); }
      if (e.key === "Enter") {
        var first = out.querySelector(".result-item");
        if (first) window.location.href = first.getAttribute("href");
      }
    });
    document.addEventListener("click", function (e) {
      if (!out.contains(e.target) && e.target !== input) out.innerHTML = "";
    });

    return page;
  }

  function renderCrumb(page, group) {
    var root = document.getElementById("crumb-root");
    if (!root || !page) return;
    var px = prefix();
    root.innerHTML =
      '<div class="crumb"><a href="' + px + 'index.html">WIKI</a><i>/</i>' +
      '<a href="' + px + 'index.html#' + group.id + '">' + group.label + "</a><i>/</i>" +
      page.title + "</div>";
  }

  function buildToc() {
    var note = document.getElementById("toc-root");
    var card = document.querySelector(".article-card");
    if (!note || !card) return;
    var heads = card.querySelectorAll("h2");
    if (heads.length < 2) { note.closest(".toc-note").style.display = "none"; return; }
    var html = '<div class="rail-heading">DI HALAMAN INI</div><nav>';
    heads.forEach(function (h, i) {
      if (!h.id) h.id = "sec-" + i;
      html += '<a href="#' + h.id + '">' + h.textContent + "</a>";
    });
    note.innerHTML = html + "</nav>" +
      '<div class="rail-note"><b>Sumber:</b> dipanen langsung dari kode game v0.2B (decompile). Angka adalah nilai asli, bukan perkiraan.</div>';
    var links = note.querySelectorAll("nav a");
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id); });
        }
      });
    }, { rootMargin: "-120px 0px -70% 0px" });
    heads.forEach(function (h) { obs.observe(h); });
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("wt-theme"); } catch (e) {}
    if (saved) document.documentElement.dataset.theme = saved;
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    var activeId = document.body.dataset.page || "index";
    var page = renderShell(activeId);
    var found = findPage(activeId);
    renderCrumb(page, found ? found.group : null);
    buildToc();
  });
})();
