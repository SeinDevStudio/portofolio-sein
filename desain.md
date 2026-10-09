# Spesifikasi Desain: Personal Portfolio

Dokumen ini mendefinisikan layout, token visual, sistem tipografi, dan model data untuk implementasi halaman portofolio satu halaman (_single-page portfolio_). Disusun dengan prinsip **Anti-Slop**: tidak ada salinan teks generik (_buzzwords_ kosong seperti "passionate synergizer"), struktur layout terikat grid disiplin, kontras tinggi, dan hierarki informasi berbasis data riil.

---

## 1. Filosofi & Batasan Desain (Anti-Slop Rules)

- **Tone & Mood:** Editorial dark mode, high contrast, industrial/brutalist influence, aksen crimson red (`#E50914` / `#DC2626`).
- **Larangan UI Slop:**
  - Dilarang menggunakan _glassmorphism_ berlebihan atau gradien pastel ungu/pink yang buram tanpa fungsi.
  - Dilarang menggunakan teks template klise seperti _"I turn coffee into code"_, _"Creative visionary creating seamless experiences"_. Ganti dengan _statement of fact_, kapabilitas riil, dan cakupan kerja nyata.
  - Dilarang menambahkan animasi mengambang tak bertujuan (_floating blobs_, _random particle canvas_).
  - Hover state harus tegas (outline shift, color swap, atau micro-scale), bukan efek glow kabur yang memperlambat rendering.

---

## 2. Token Visual & Desain Sistem

### 2.1 Palet Warna

| Peran                  | Hex Code                  | Deskripsi Pemakaian                                          |
| :--------------------- | :------------------------ | :----------------------------------------------------------- |
| **Surface Dark**       | `#0B0B0B`                 | Latar belakang kanvas utama                                  |
| **Surface Elevated**   | `#141414`                 | Latar kartu, container grup, border outline                  |
| **Surface Stroke**     | `#262626`                 | Pembatas antar-section, garis pemisah horizontal/vertikal    |
| **Primary Accent**     | `#E11D23`                 | Aksen tipografi tebal, teks watermark hero, status indicator |
| **Accent Glow / Tint** | `rgba(225, 29, 35, 0.12)` | Subtle spotlight di belakang teks display besar              |
| **Text High Contrast** | `#F3F3F3`                 | Judul, nama profil, subjudul primer                          |
| **Text Mid Contrast**  | `#A1A1AA`                 | Body copy, meta info, tanggal, deskripsi proyek              |
| **Text Muted**         | `#52525B`                 | Label kategori, pill tag outline, watermark kecil            |

### 2.2 Tipografi

- **Display / Headline Utama:** Sans-Serif Kondensasi Kuat & Bold (contoh: _Bebas Neue_, _Anton_, atau _Syne_ Bold). Dipakai untuk teks display background `"PORTFOLIO"` dan judul section.
- **Aksen Script / Signature:** Kaligrafi modern bersambung (contoh: _Caveat_, _Playfair Display Italic_, atau _Brittany Signature_). Digunakan hemat, hanya untuk kata pengantar _"Hello, I'm"_ dan tanda tangan nama.
- **Body & UI Elements:** Sans-Serif Geometris / Clean (contoh: _Inter_, _Plus Jakarta Sans_, _Space Grotesk_). Ukuran font terbaca (14px–16px) dengan _line-height_ 1.6.
- **Mono / Meta:** Monospace (contoh: _JetBrains Mono_) untuk angka indeks (`01 →`, `02 →`), tanggal riil, dan penanda status.

---

## 3. Struktur Layout & Hirarki Komponen

Halaman dibagi menjadi 4 zona utama berbasis grid 12-kolom:

### Zona 1: Navigation & Hero Section

- **Top Bar (Minimalist):**
  - Sisi Kiri: Label peran ringkas (`UI/UX DESIGNER` / `DIGITAL CREATOR`).
  - Sisi Kanan: Status availability dengan indikator plus crimson (`AVAILABLE FOR PROJECTS +`).
- **Hero Visual Centerpiece:**
  - **Watermark Text Latar Belakang:** Kata `"PORTFOLIO"` berukuran masif (ketinggian ~60vh), warna Crimson gelap transparan, memotong di belakang foto profil.
  - **Potret Profil:** Foto cutout beresolusi tinggi tanpa border membulat berlebihan, bayangan alami membaur ke `#0B0B0B`.
  - **Kolom Kiri (Identity):**
    - Script: _"Hello, I'm"_
    - Headline Nama: **[NAMA LENGKAP ANDA]** (Semibold/Bold, Uppercase, ukuran 48–56px).
    - Subheadline Role: **[ROLE UTAMA / SPESIALISASI]**.
    - Bio Singkat: Maksimal 3 kalimat konkret mengenai domain pekerjaan dan dampak praktis.
    - Tag Lokasi: Ikon pin minimalis + `BASED IN [LOKASI ANDA]`.
  - **Kolom Kanan (Value Points):**
    - Indikator plus crimson mendahului setiap poin nilai nyata:
      - Arsitektur informasi & desain sistem berbasis komponen.
      - Antarmuka berpresisi tinggi (_pixel-grade deliverables_).
      - Desain adaptif & kesesuaian implementasi teknis.

---

### Zona 2: Selected Projects (Katalog Karya Pilihan)

Grid 4-kolom (desktop) atau 2-kolom (tablet), 1-kolom bertumpuk (mobile).

- **Header Section:** `SELECTED PROJECTS` (Uppercase, track spacing lebar).
- **Card Komponen Proyek:**
  - **Preview Visual:** Mockup tampilan produk nyata (aplikasi mobile / dashboard web / UI sistem) dengan aspek rasio tetap 16:10.
  - **Meta Data:**
    - Nama Proyek (Bold White).
    - Kategori / Platform (Subdued Gray, misal: _Society Management App_, _Fintech Dashboard_).
    - Scope (misal: _Product Design & Research_).
    - Indeks Interaktif: Nomor urut berformat mono (`01 →`, `02 →`) yang bertindak sebagai link detail studi kasus.

---

### Zona 3: Kualifikasi & Metodologi Kerja

Grid 3 kolom terbagi seimbang:

1. **Kolom Kiri — Education & Skills:**
   - **Education Timeline:** Daftar riwayat studi / sertifikasi relevan disertai rentang tahun riil (`2022–2024`).
   - **Skills / Tooling Stack:** Pill badge solid dengan border `#262626` dan teks mid-contrast. Berisi kapabilitas konkret (contoh: `Figma`, `User Research`, `Wireframing`, `Design Systems`, `Next.js`, `Tailwind CSS`).
2. **Kolom Tengah — Work Process (Timeline Vertikal):**
   - Garis penghubung crimson tipis dengan node bernomor atau berikon outline:
     1. `Discover` — Riset kebutuhan, audit masalah, analisa fungsional.
     2. `Plan` — User flow, arsitektur informasi, wireframing.
     3. `Design` — High-fidelity UI, design token, prototype.
     4. `Prototype & Test` — Validasi interaksi dan pengujian kegunaan.
     5. `Deliver` — Handoff terstruktur, dokumentasi token, QA visual.
3. **Kolom Kanan — Manifesto / Kutipan & Callout:**
   - Tanda kutip tebal crimson ganda (`“`).
   - Prinsip desain: _"Good design is not just how it looks, but how it works and converts."_
   - Tanda tangan script digital.
   - Tombol mini CTA: `LET'S CREATE SOMETHING TOGETHER`.

---

### Zona 4: Footer & Saluran Kontak Langsung

- **Kolom Ajakan Kolaborasi:**
  - Headline: `LET'S WORK TOGETHER` + aksen bintang/plus crimson.
  - Status: Ketersediaan proyek freelance / purna waktu saat ini.
  - Button Action: Outline rounded crimson button `AVAILABLE FOR FREELANCE →`.
- **Kolom Saluran Langsung (Daftar Ikon Minimalis):**
  - Email resmi (tautan `mailto:`).
  - Profil Portofolio Desain (Behance / Dribbble).
  - Profil Profesional (LinkedIn / GitHub).
- **Mockup Hardware Display (Kanan):**
  - Visual mockup laptop/layar yang menampilkan portofolio itu sendiri untuk menutup komposisi halaman.

---

## 4. Skema Data (Data Model)

Semua konten dinamis dipisahkan ke dalam satu file konfigurasi data (`data/portfolio.json` atau `content.ts`) agar memudahkan pembaruan tanpa mengotori markup:

```typescript
export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    subRole: string;
    location: string;
    bio: string;
    availability: boolean;
    availabilityLabel: string;
    avatarUrl: string;
    valueProps: string[];
  };
  projects: Array<{
    id: string;
    number: string; // e.g. "01"
    title: string;
    category: string;
    scope: string;
    imageUrl: string;
    caseStudyUrl: string;
  }>;
  education: Array<{
    title: string;
    institution: string;
    period: string;
    focus: string;
  }>;
  skills: string[];
  workProcess: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  quote: {
    text: string;
    authorSignature: string;
  };
  contacts: {
    email: string;
    behance?: string;
    linkedin?: string;
    dribbble?: string;
    github?: string;
  };
}
```

---

## 5. Template Data Riil (Siap Diisi Data Anda)

Ganti nilai string di bawah ini dengan identitas dan riwayat nyata Anda:

```json
{
  "profile": {
    "name": "[NAMA LENGKAP ANDA]",
    "role": "UI/UX DESIGNER",
    "subRole": "DIGITAL PRODUCT CREATOR",
    "location": "Jakarta, Indonesia",
    "bio": "Membangun sistem antarmuka produk digital yang berakar pada riset pengguna, efisiensi navigasi, dan konsistensi desain sistem. Fokus pada konversi dan skalabilitas produk.",
    "availability": true,
    "availabilityLabel": "AVAILABLE FOR PROJECTS",
    "avatarUrl": "/assets/hero-portrait.png",
    "valueProps": [
      "Perancangan antarmuka modular dan berbasis Design System",
      "Penerjemahan riset pengguna menjadi purwarupa terukur",
      "Kesiapan handoff teknis dengan koordinasi erat ke tim engineer"
    ]
  },
  "projects": [
    {
      "id": "proj-1",
      "number": "01",
      "title": "[NAMA PROYEK 1]",
      "category": "Mobile App Design",
      "scope": "End-to-End Product Design",
      "imageUrl": "/assets/projects/project-1.jpg",
      "caseStudyUrl": "/projects/project-1"
    },
    {
      "id": "proj-2",
      "number": "02",
      "title": "[NAMA PROYEK 2]",
      "category": "Web Application / SaaS",
      "scope": "UI/UX & Design System",
      "imageUrl": "/assets/projects/project-2.jpg",
      "caseStudyUrl": "/projects/project-2"
    },
    {
      "id": "proj-3",
      "number": "03",
      "title": "[NAMA PROYEK 3]",
      "category": "E-Commerce Experience",
      "scope": "User Journey & Interface Optimization",
      "imageUrl": "/assets/projects/project-3.jpg",
      "caseStudyUrl": "/projects/project-3"
    },
    {
      "id": "proj-4",
      "number": "04",
      "title": "[NAMA PROYEK 4]",
      "category": "Marketing Landing Page",
      "scope": "UI Design & Conversion Strategy",
      "imageUrl": "/assets/projects/project-4.jpg",
      "caseStudyUrl": "/projects/project-4"
    }
  ],
  "education": [
    {
      "title": "[Gelar / Program Sertifikasi 1]",
      "institution": "[Nama Universitas / Lembaga Pelatihan]",
      "period": "2022 - 2024",
      "focus": "Interaksi Manusia-Komputer, Prototipe Digital"
    },
    {
      "title": "[Gelar / Sertifikasi 2]",
      "institution": "[Institusi]",
      "period": "2020 - 2022",
      "focus": "Desain Komunikasi Visual & Riset Pengguna"
    }
  ],
  "skills": [
    "USER RESEARCH",
    "WIREFRAMING",
    "UI DESIGN",
    "PROTOTYPING",
    "DESIGN SYSTEMS",
    "USABILITY TESTING",
    "RESPONSIVE DESIGN",
    "FIGMA",
    "HTML/CSS BASICS",
    "HANDOFF SPECS"
  ],
  "workProcess": [
    {
      "step": 1,
      "title": "Discover",
      "description": "Riset kebutuhan & analisa masalah pengguna"
    },
    {
      "step": 2,
      "title": "Plan",
      "description": "Penyusunan arsitektur informasi & wireframe"
    },
    {
      "step": 3,
      "title": "Design",
      "description": "Perancangan UI high-fidelity berpresisi tinggi"
    },
    {
      "step": 4,
      "title": "Prototype",
      "description": "Pengujian interaksi dan validasi alur"
    },
    {
      "step": 5,
      "title": "Refine",
      "description": "Iterasi perbaikan berbasis data & uji pengguna"
    },
    {
      "step": 6,
      "title": "Deliver",
      "description": "Dokumentasi komponen dan serah-terima ke tim developer"
    }
  ],
  "quote": {
    "text": "Desain yang baik bukan sekadar tampilan visual, melainkan bagaimana sistem bekerja menyelesaikan masalah secara tuntas.",
    "authorSignature": "[Nama Anda]"
  },
  "contacts": {
    "email": "kontak@domainanda.com",
    "behance": "https://behance.net/[username]",
    "linkedin": "https://linkedin.com/in/[username]",
    "dribbble": "https://dribbble.com/[username]"
  }
}
```

---

## 6. Rekomendasi Stack Implementasi

- **Framework:** Next.js (App Router) atau Vite + React.
- **Styling:** Tailwind CSS (atur tema khusus warna `#0B0B0B` dan Crimson `#E11D23` di `tailwind.config.js`).
- **Icons:** `lucide-react` (garis outline tipis konsisten 1.5px, hindari icon solid tebal yang merusak estetika editorial).
- **Animasi:** `framer-motion` ringan untuk transisi scroll dan hover (durasi maksimal 200–250ms, _ease-out_ tajam, hindari bounce berlebihan).

# Desain Dokumen: Portofolio Muhammad Husein Al Hafidz (Sein)

## 1. Identitas & Posisi

- **Nama Lengkap:** Muhammad Husein Al Hafidz
- **Nama Panggilan / Moniker:** Sein (SeinDevStudio)
- **Peran Profesional:** Software & Interactive Systems Engineer
- **Fokus Rekayasa:** Core Systems, Web Engineering, Game Logic & Runtime Scripting
- **Lokasi & Kontak:** Bukittinggi, Indonesia | seindevstudio@gmail.com
- **Prinsip Anti-Slop:** Tidak ada kartu bergaya SaaS generik, tanpa bayangan pastel lembut (_soft blur_), tanpa teks klise AI ("passionate problem solver"). Tampilan tegas berorientasi editorial brutalist dengan tipografi monospaced dan kontras crimson/noir.

## 2. Palet Warna & Visual

- **Latar Belakang:** `#080808` (Deep Obsidian)
- **Permukaan Komponen:** `#0f0f0f` dengan border tipis `rgba(255, 255, 255, 0.08)`
- **Aksen Primer:** `#e60026` (Crimson Red)
- **Teks Utama:** `#f3f3f3`
- **Teks Sekunder/Meta:** `#888888`
- **Aksen Tipografi Besar:** Monospace brutalist & watermark "SEINDEV"

## 3. Tech Stack Terverifikasi

- **Sistem & Game Engine/Logic:** C++, C#, Lua, Python
- **Web & Backend:** PHP, HTML, CSS, JavaScript / TypeScript ecosystem
- **Aplikasi & Pemrograman Berorientasi Objek:** Java

## 4. Struktur Rute & Komponen

- `Header`: Status ketersediaan proyek & identitas studio.
- `Hero`: Layout asimetris 2 kolom dengan foto profil (`/logo.png`), nama tebal, tipografi vertikal/watermark latar.
- `Selected Systems / Works`: Status proyek rilis bertahap (_In Development / WIP_) dengan indikator arsitektur nyata.
- `Technical Matrix`: Pengelompokan stack bahasa berdasarkan ranah komputasi (Systems, Interactive, Web).
- `Footer / Comm-Link`: Tautan langsung GitHub, Instagram, dan jalur email.
