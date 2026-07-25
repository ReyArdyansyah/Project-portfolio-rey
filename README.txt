====================================================================
PROJECT PORTFOLIO - COMPUTER CLUB DIGITAL TALENT 2026
DIVISI WEB DEVELOPMENT
====================================================================

IDENTITAS PESERTA
--------------------------------------------------------------------
Nama Lengkap    : Rey Ardyansyah
Nomor Absen     : 19
Divisi          : Web Development

TAUTAN DEPLOYMENT (LIVE DEMO)
--------------------------------------------------------------------
URL Website     : https://project-portfolio-reyardyansyah.vercel.app/
URL GitHub      : https://github.com/ReyArdyansyah

CARA MENJALANKAN PROYEK SECARA LOKAL
--------------------------------------------------------------------
LANGKAH A: Menyiapkan Folder Projek
1. Ekstrak file arsip `.zip` projek ini (atau clone dari repositori GitHub).
2. Buka aplikasi Visual Studio Code (VS Code).
3. Pilih menu "File" -> "Open Folder...", lalu pilih folder direktori 
   projek utama (`Project-portfolio-rey`).

LANGKAH B: Menginstal Dependensi (Opsional jika ingin mengubah CSS)
Jika Anda ingin mengembangkan atau mengubah gaya CSS melalui Tailwind CLI:
1. Buka terminal di VS Code dengan menekan tombol `Ctrl + ~` (atau menu Terminal -> New Terminal).
2. Ketik perintah berikut untuk menginstal paket yang dibutuhkan:
   > npm install
3. Tunggu hingga proses unduh paket selesai (pastikan terhubung internet).

LANGKAH C: Menjalankan Compiler Tailwind CSS (Mode Development / Watch)
Jika Anda melakukan perubahan pada file `input.css` atau struktur HTML dan ingin 
Tailwind otomatis memperbarui file `output.css` secara *real-time*:
1. Di terminal VS Code, jalankan perintah:
   > npm run dev
2. Biarkan terminal tetap terbuka selama Anda melakukan penulisan kode.

LANGKAH D: Menjalankan Kompilasi Versi Produksi (Build)
Sebelum melakukan publikasi/deploy final, pastikan file CSS di-minify agar ukurannya ringan:
1. Di terminal VS Code, jalankan perintah:
   > npm run build:css

LANGKAH E: Menampilkan Halaman Web ke Layar (Run in Browser)
Anda tidak harus menggunakan terminal untuk melihat hasilnya. Cukup gunakan salah satu cara berikut:
- Cara 1 (Paling Direkomendasikan): 
  1. Pasang ekstensi "Live Server" di VS Code (oleh Ritwick Dey).
  2. Klik kanan pada file `index.html` di folder utama (Root).
  3. Pilih "Open with Live Server". Browser akan otomatis membuka web portofolio.
- Cara 2 (Manual):
  1. Buka File Explorer di komputer Anda.
  2. Masuk ke folder `Project-portfolio-rey`.
  3. Klik dua kali pada file `index.html`. Halaman akan langsung tampil di browser.
====================================================================
