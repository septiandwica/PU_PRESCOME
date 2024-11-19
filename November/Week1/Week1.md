# 📖 JavaScript Fundamentals

Selamat datang di pembelajaran dasar-dasar JavaScript. Hari ini kita akan memulai dengan pengantar JavaScript, diikuti dengan penjelasan detail mengenai fitur dan konsep utama.

---

## 📚 Daftar Isi
1. [Pengantar JavaScript](#-pengantar-javascript)
2. [Prasyarat](#-prasyarat)
3. [Mengapa Belajar JavaScript?](#mengapa-belajar-javascript)
4. [Konsep Dasar JavaScript](#⚙️-konsep-dasar-javaScript)
    - Variabel dan Tipe Data
    - Operator
    - Fungsi
    - Alur Kendali
    - Objek dan Array
5. [Peran JavaScript dalam Pengembangan Web](#peran-javascript-dalam-pengembangan-web)
6. [Konsep Lanjutan](#konsep-lanjutan)
    - Scope dan Closures
    - JavaScript Asinkron
    - Fitur ES6+
7. [Async dan Await](#async-dan-await)
    - Penjelasan tentang Promises
    - Perbedaan Pemrograman Sinkron dan Asinkron
    - Penjelasan dan Contoh Async Await
8. [Latihan](#latihan)
9. [Materi Tambahan](#materi-tambahan)
10. [Referensi](#referensi)

---

## 🔍 Pengantar JavaScript

JavaScript adalah **bahasa pemrograman** utama untuk pengembangan web. Dengan JavaScript, Anda bisa menciptakan pengalaman pengguna yang dinamis dan interaktif, baik di sisi klien maupun server.

### 📋 Prasyarat

Sebelum memulai, pastikan Anda sudah memahami hal-hal berikut:
- Dasar fungsi dalam bahasa pemrograman yang digunakan.
- Familiar dengan [**Promises**](#penjelasan-tentang-promises) (opsional, tapi membantu).
- Alat-alat yang dibutuhkan:
  - Editor kode (misalnya, VS Code).
  - Node.js terinstal (untuk menjalankan contoh JavaScript).
  - Koneksi internet untuk mencoba API.

---

## 📌 Mengapa Belajar JavaScript?

1. **Universal**: Dapat berjalan di semua browser modern.
2. **Interaktif**: Membuat animasi, validasi formulir, dan konten dinamis.
3. **Ekosistem**: Banyak pustaka dan kerangka kerja populer seperti React, Vue, dan Angular.
4. **Peluang Karir**: Keterampilan wajib bagi pengembang web.

---

## ⚙️ Konsep Dasar JavaScript

### Variabel dan Tipe Data

```javascript
let nama = "Alice";
const usia = 25;
var mahasiswa = true;
```

### Operator

```javascript
let hasil = 10 + 5;
let perbandingan = 5 == "5";
```

### Fungsi

```javascript
function sapaan(nama) {
    return `Halo, ${nama}!`;
}
```

### Alur Kendali

```javascript
if (usia > 18) {
    console.log("Dewasa");
} else {
    console.log("Anak-anak");
}
```

### Objek dan Array

```javascript
let orang = { nama: "Alice", usia: 25 };
let buah = ["apel", "pisang", "ceri"];
```

---

## 🖥️ Peran JavaScript dalam Pengembangan Web

1. **HTML**: Struktur halaman.
2. **CSS**: Tampilan halaman.
3. **JavaScript**: Interaktivitas dan logika.

---

## 🔑 Konsep Lanjutan

### Scope dan Closures

```javascript
function luar() {
    let hitung = 0;
    return function dalam() {
        hitung++;
        console.log(hitung);
    };
}
```

### JavaScript Asinkron

- Menggunakan **callbacks**, **promises**, dan **async/await** untuk menangani banyak tugas secara paralel.

---

## 🌟 Async dan Await

### Penjelasan tentang Promises

```javascript
const janji = new Promise((resolve, reject) => {
    if (true) resolve("Berhasil!");
    else reject("Gagal!");
});
```

---

### Perbedaan Pemrograman Sinkron dan Asinkron

Sinkron:
```javascript
console.log("Tugas 1");
console.log("Tugas 2");
```

Asinkron:
```javascript
setTimeout(() => console.log("Tugas 2"), 1000);
```

---

### Penjelasan Async dan Await

```javascript
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
fetchData();
```

---

## 💪 Latihan

1. Ambil data dari API dan filter tugas yang selesai.
2. Tangani error menggunakan `try...catch`.

---

## 🔗 Referensi
Lihat referensi lengkap di:
- [MDN: Fungsi Async](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript Promises](https://developer.mozilla.org/id/docs/Web/JavaScript/Guide/Using_promises)
- [Public APIs untuk Latihan](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Statements/async_function)

---

Kami harap Anda menikmati pembelajaran async dan await ini! Jangan ragu untuk bertanya atau memberikan masukan selama sesi. 😊