# 📖 JavaScript Fundamentals

Selamat datang di pembelajaran dasar-dasar JavaScript. Hari ini kita akan memulai dengan pengantar JavaScript, diikuti dengan penjelasan detail mengenai fitur dan konsep utama.

---

## 📚 Daftar Isi
1. [Pengantar JavaScript](#pengantar-javascript)
2. [Mengapa Belajar JavaScript?](#mengapa-belajar-javascript)
3. [Konsep Dasar JavaScript](#konsep-dasar-javascript)
    - Variabel dan Tipe Data
    - Operator
    - Fungsi
    - Alur Kendali
    - Objek dan Array
4. [Peran JavaScript dalam Pengembangan Web](#peran-javascript-dalam-pengembangan-web)
5. [Konsep Lanjutan](#konsep-lanjutan)
    - [Scope dan Closures](#scope-dan-closures)
    - [JavaScript Async](#javascript-asinkron)
6. [Async dan Await](#async-dan-await)
    - [Prasyarat](#prasyarat)
    - [Penjelasan tentang Promises](#penjelasan-tentang-promises)
    - [Kelebihan dan Kekurangan](#kelebihan-dan-kekurangan-async-dan-await)
    - [Perbedaan](#-perbedaan)
7. [Latihan](#latihan)
8. [Materi Tambahan](#materi-tambahan)
9. [Referensi](#referensi)

---

## Pengantar JavaScript

JavaScript adalah **bahasa pemrograman** utama untuk pengembangan web. Dengan JavaScript, Anda bisa menciptakan pengalaman pengguna yang dinamis dan interaktif, baik di sisi klien maupun server.


## Mengapa Belajar JavaScript?

1. **Universal**: Dapat berjalan di semua browser modern.
2. **Interaktif**: Membuat animasi, validasi formulir, dan konten dinamis.
3. **Ekosistem**: Banyak pustaka dan kerangka kerja populer seperti React, Vue, dan Angular.
4. **Peluang Karir**: Keterampilan wajib bagi pengembang web.

---

## Konsep Dasar JavaScript

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

## Peran JavaScript dalam Pengembangan Web

1. **HTML**: Struktur halaman.
2. **CSS**: Tampilan halaman.
3. **JavaScript**: Interaktivitas dan logika.

---

## Konsep Lanjutan

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

### JavaScript Async

- Menggunakan **callbacks**, **promises**, dan **async/await** untuk menangani banyak tugas secara paralel.

---

## Async dan Await

### Prasyarat

Sebelum memulai, pastikan Anda sudah memahami hal-hal berikut:
- Dasar fungsi dalam bahasa pemrograman yang digunakan.
- Familiar dengan [**Promises**](#penjelasan-tentang-promises) (opsional, tapi membantu).
- Alat-alat yang dibutuhkan:
  - Editor kode (misalnya, VS Code).
  - Node.js terinstal (untuk menjalankan contoh JavaScript).
  - Koneksi internet untuk mencoba API.

---

## Penjelasan tentang promises

**Promise** adalah sebuah objek di JavaScript yang merepresentasikan sebuah proses yang sedang berlangsung (pending), yang kemudian akan selesai dengan **sukses (fulfilled)** atau **gagal (rejected)**. Promise adalah inti dari pemrograman asinkron di JavaScript dan sangat penting sebelum memahami `async` dan `await`.

### Ciri Utama Promise
1. State
    - Pending: Proses sedang berjalan.
    - Fulfilled: Proses berhasil selesai.
    - Rejected: Proses gagal.

2. Chaining
    - Anda bisa menghubungkan banyak operasi dengan .then(), .catch(), dan .finally().

3. Non-blocking
    - Promise berjalan secara asinkron tanpa menghentikan eksekusi kode lainnya.

---

### Contoh Promise

```javascript
// Membuat Promise
const janji = new Promise((resolve, reject) => {
    const sukses = true; // Ubah ke false untuk mencoba kasus gagal
    if (sukses) {
        resolve("Proses selesai dengan sukses!");
    } else {
        reject("Proses gagal!");
    }
});

// Menggunakan Promise
janji
    .then((hasil) => {
        console.log(hasil); // Jika sukses
    })
    .catch((error) => {
        console.log(error); // Jika gagal
    })
    .finally(() => {
        console.log("Proses selesai."); // Akan dijalankan apapun hasilnya
    });
```

### Hasil

Jika `sukses = true`:
```yaml
Proses selesai dengan sukses!
Proses selesai.
```

Jika `sukses = false`:
```yaml
Proses gagal!
Proses selesai.
```

---

## Contoh Praktis: Mengambil Data API

```javascript
// Membuat promise untuk mengambil data dari API
const ambilData = new Promise((resolve, reject) => {
    // Simulasi request API (dalam praktik nyata, kita menggunakan fetch atau axios)
    const url = 'https://jsonplaceholder.typicode.com/posts'; // URL API

    setTimeout(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) { // Cek apakah respons berhasil
                    reject("Gagal mengambil data dari API.");
                }
                return response.json();
            })
            .then(data => resolve(data))  // Jika berhasil, data akan dikirimkan ke resolve
            .catch(error => reject(error));  // Tangani kesalahan jika fetch gagal
    }, 2000);  // Delay 2 detik untuk mensimulasikan waktu respons API
});

// Menggunakan promise untuk menangani hasil dari ambilData
ambilData
    .then((data) => {
        console.log("Data berhasil diambil:", data); // Jika respons sukses
    })
    .catch((error) => {
        console.log("Terjadi kesalahan:", error); // Jika respons gagal
    })
    .finally(() => {
        console.log("Permintaan selesai."); // Eksekusi ini terjadi setelah .then atau .catch
    });
```

### Penjelasan:
1. Promise dibuat dengan parameter `resolve` dan `reject`.
2. Simulasi pengambilan data dilakukan dengan `setTimeout` selama 2 detik.
3. Jika respons sukses, maka `resolve` akan dipanggil.
4. Jika respons gagal, maka `reject` akan dipanggil.

---

### Kelebihan Menggunakan Promise
- Menghindari "callback hell."
- Kode lebih bersih dan terstruktur.
- Memungkinkan penggunaan chaining (`.then` dan `.catch`) untuk proses berurutan.

Jika memahami konsep Promises, Anda akan lebih mudah memahami bagaimana async dan await menyederhanakan penulisan kode asinkron! 😊

---

## Apa itu Pemrograman Sinkron?

Pemrograman sinkron menjalankan tugas **satu per satu**, sesuai urutan kode. Tugas berikutnya baru berjalan setelah tugas sebelumnya selesai.

### Contoh (Kode Sinkron)

```javascript
console.log('Tugas 1: Mulai');
console.log('Tugas 2: Sedang Berjalan');
console.log('Tugas 3: Selesai');
```

Hasil:

```yaml
Tugas 1: Mulai
Tugas 2: Sedang Berjalan
Tugas 3: Selesai
```

---

### Kelebihan Pemrograman Sinkron
- Mudah ditulis dan di-debug.
- Urutan tugas mudah diprediksi.

### Kekurangan Pemrograman Sinkron
- Blocking: Jika ada tugas yang lambat, program akan berhenti sementara menunggu tugas tersebut selesai.
- Tidak efisien untuk tugas I/O seperti membaca file atau permintaan API.

---

## Apa itu Pemrograman Asinkron?

Pemrograman asinkron memungkinkan banyak tugas berjalan secara independen. Sebuah tugas bisa "berhenti sementara" menunggu hasil (misalnya, dari API) tanpa menghentikan program secara keseluruhan.

### Contoh (Kode Asinkron)

```javascript
console.log('Tugas 1: Mulai');
setTimeout(() => {
    console.log('Tugas 2: Sedang Berjalan');
}, 2000);
console.log('Tugas 3: Selesai');
```

Hasil:

```yaml
Tugas 1: Mulai
Tugas 3: Selesai
Tugas 2: Sedang Berjalan (setelah 2 detik)
```

---



### Kelebihan Pemrograman Asinkron
- Non-blocking: Tugas tidak menghambat tugas lainnya.
- Efisien untuk tugas berat I/O seperti permintaan jaringan.

### Kekurangan Pemrograman Asinkron
- Lebih sulit untuk di-debug karena urutan tugas tidak pasti.
- Callback hell: Penulisan kode yang kompleks jika terlalu banyak callback bersarang.

---

## Penjelasan Async dan Await
Kata kunci `async` dan `await` mempermudah pemrograman asinkron dengan membuat kode lebih mudah dibaca seperti kode sinkron.

### Poin Utama
1. async: Menandai sebuah fungsi sebagai asinkron, otomatis mengembalikan Promise.
2. await: Menunda eksekusi fungsi sampai Promise selesai.

---

## Contoh

```javascript
async function fetchData() {
    console.log('Mengambil data...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
}
fetchData();
```

Penjelasan:
1. fetchData() dideklarasikan sebagai async, sehingga bisa menggunakan await.
2. Permintaan API dengan fetch ditunda hingga ada respons.
3. Setelah respons diterima, await response.json() memproses data.

---

## Kelebihan dan Kekurangan Async dan Await

### Kelebihan
- Mempermudah penulisan kode asinkron.
- Menghindari "callback hell."
- Lebih mudah dibaca dan dipelihara.

### Kekurangan
- Membutuhkan pemahaman tentang Promises.
- Penanganan error bisa rumit (perlu try...catch).

---

## 💡 Perbedaan

### Contoh Sinkron: Membaca File
```javascript
const fs = require('fs'); // Modul bawaan Node.js untuk bekerja dengan sistem file

try {
    // Membaca file secara sinkron
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.error('Terjadi kesalahan saat membaca file:', error);
}

```

### Contoh Asinkron: Membaca File
```javascript
const fs = require('fs').promises; // Menggunakan versi Promises dari modul fs

async function readFile() {
    try {
        // Membaca file secara asinkron
        const data = await fs.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Terjadi kesalahan saat membaca file:', error);
    }
}

// Memanggil fungsi
readFile();

```

### Penjelasan:

1. Fungsi `readFile()` dideklarasikan dengan `async`, sehingga bisa menggunakan `await`.
2. `fs.promises.readFile` adalah fungsi asinkron yang mengembalikan Promise.
3. Blok `try...catch` menangani potensi error, misalnya jika file tidak ditemukan.

---

### Perbedaan Hasil
1. Sinkron:
    - Semua proses akan menunggu hingga file selesai dibaca.
    - Contohnya, jika file sangat besar, aplikasi akan "hang" sementara menunggu pembacaan selesai.

2. Asinkron:
    - Proses lain tetap berjalan saat file sedang dibaca.
    - Lebih efisien dan cocok untuk aplikasi besar atau operasi I/O berat.

---

## Latihan

1. Buat fungsi yang:
    - Mengambil data dari <https://jsonplaceholder.typicode.com/todos>.
    - Memfilter hasil untuk hanya menampilkan tugas yang selesai.
    - Menampilkan hasil yang difilter.

2. Modifikasi fungsi di atas untuk menangani error menggunkan `try...catch`

---

## Hasil Latihan

```javascript
async function fetchAndFilter() {
    try {
        // Mengambil data dari API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        // Memfilter hanya tugas yang selesai (completed)
        const result = data.filter(data => data.completed);

        // Menampilkan hasil yang sudah difilter
        console.log('Tugas yang selesai:', result);
        console.log('Jumlah semua data:', data.length);
        console.log('Jumlah tugas yang selesai:', result.length);
    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data:', error);
    } finally {
        console.log('Proses selesai.');
    }
}

// Panggil fungsi
fetchAndFilter();
```

---

## Materi Tambahan

### Contoh Callback Hell: Menggunakan API dengan Callback
    
```javascript
// Menggunakan callback hell untuk mendapatkan data dari API
function getPostData(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            // Simulasi API tambahan
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(user => {
                    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
                        .then(response => response.json())
                        .then(comments => {
                            // Semua data berhasil didapat
                            callback(null, posts, user, comments);
                        })
                        .catch(err => callback(err));  // Tangani error
                })
                .catch(err => callback(err));  // Tangani error
        })
        .catch(err => callback(err));  // Tangani error
}

getPostData((err, posts, user, comments) => {
    if (err) {
        console.log("Terjadi kesalahan:", err);
    } else {
        console.log("Posts:", posts);
        console.log("User:", user);
        console.log("Comments:", comments);
    }
});
```


### Penjelasan Callback Hell:
- **Nested** `fetch` **calls**: Seperti yang dapat dilihat, kita menggunakan `fetch` untuk mengambil data dari beberapa endpoint API, tetapi karena setiap operasi tergantung pada hasil sebelumnya, kita harus menulis **callback** untuk masing-masing operasi.
- **Kesulitan dalam pembacaan**: Dengan setiap lapisan callback, kode menjadi semakin sulit dibaca dan dipelihara, yang sering disebut sebagai **callback hell** atau **pyramid of doom**.

---

### Menggunakan `async/await` untuk Menghindari Callback Hell
Dengan `async/await`, kode menjadi jauh lebih bersih dan mudah dipahami. Kita bisa menulis kode seolah-olah itu adalah kode sinkron meskipun operasi yang kita jalankan bersifat asinkron.

```javascript
// Menggunakan async/await untuk mendapatkan data dari API
async function getPostData() {
    try {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await postsResponse.json();
        
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await userResponse.json();
        
        const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
        const comments = await commentsResponse.json();
        
        // Semua data berhasil didapat
        console.log("Posts:", posts);
        console.log("User:", user);
        console.log("Comments:", comments);
    } catch (err) {
        console.log("Terjadi kesalahan:", err);  // Tangani error jika ada
    }
}

getPostData();
```

### Perbedaan Utama dengan Callback Hell:
1. Kebersihan Kode: Menggunakan async/await membuat kode lebih mudah dibaca dan dipahami, karena tidak ada nested callbacks.
2. Pengelolaan Error: Dengan async/await, kita dapat menangani error dengan try...catch, yang lebih elegan dan mudah dibandingkan dengan penanganan error di setiap callback.
3. Tidak Ada Nesting: Kode terlihat lebih lurus, tanpa struktur piramida atau indentasi yang mendalam.

---

## Referensi
- [MDN: Fungsi Async](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript Promises](https://developer.mozilla.org/id/docs/Web/JavaScript/Guide/Using_promises)
- [Public APIs untuk Latihan](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Statements/async_function)

---

Kami harap Anda menikmati pembelajaran async dan await ini! Jangan ragu untuk bertanya atau memberikan masukan selama sesi. 😊