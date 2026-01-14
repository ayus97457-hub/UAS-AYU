# UAS-AYU
## 📌 Deskripsi Project

Project ini adalah **aplikasi To-Do List berbasis web** yang dibuat menggunakan **HTML, CSS, dan JavaScript**.
Aplikasi ini membantu pengguna dalam **mencatat, mengatur, dan memantau tugas harian** dengan fitur penambahan waktu (jam), penghitung total tugas, serta penanda tugas yang telah selesai.

Tampilan dirancang sederhana dan responsif, dengan fokus pada **kemudahan penggunaan** dan **pengelolaan daftar tugas secara dinamis tanpa reload halaman**.

---

## ✨ Fitur Utama

* Menambahkan tugas dengan waktu (jam)
* Menampilkan daftar tugas secara real-time
* Menghapus tugas
* Menghitung total tugas dan tugas selesai
* Tampilan judul tetap di dalam container
* Antarmuka sederhana dan user-friendly

---

## 🔄 Alur Logika / Algoritma Program

1. **Inisialisasi**

   * Program mengambil elemen HTML (input waktu, input teks, tombol, dan list tugas).
   * Variabel untuk menghitung total tugas dan tugas selesai disiapkan.

2. **Menambahkan Tugas**

   * Pengguna memasukkan waktu dan deskripsi tugas.
   * Saat tombol **Tambah** ditekan:

     * Program memvalidasi input agar tidak kosong.
     * Elemen `<li>` baru dibuat berisi:

       * Waktu tugas
       * Nama tugas
       * Tombol hapus
     * Tugas ditambahkan ke dalam daftar (`ul`).

3. **Menampilkan & Mengelola Tugas**

   * Setiap tugas ditampilkan secara dinamis tanpa refresh halaman.
   * Jika tugas ditandai selesai, jumlah tugas selesai akan bertambah.
   * Jika tugas dihapus, daftar dan perhitungan akan diperbarui otomatis.

4. **Perhitungan Tugas**

   * Total tugas dihitung berdasarkan jumlah item di dalam list.
   * Jumlah tugas selesai diperbarui setiap ada perubahan status tugas.
---

## 🛠️ Teknologi yang Digunakan

* **HTML** → Struktur aplikasi
* **CSS** → Tampilan dan layout
* **JavaScript** → Logika dan interaksi pengguna

---

## 🎯 Tujuan Project

Project ini dibuat untuk:

* Melatih pemahaman dasar **DOM Manipulation**
* Menerapkan **logika pemrograman JavaScript**
* Membuat aplikasi web sederhana yang fungsional dan interaktif
