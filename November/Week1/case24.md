# Studi Kasus: Aplikasi Kalkulator Sederhana

Deskripsi: Buatlah sebuah fungsi kalkulator yang menerima dua angka dan satu jenis operasi matematika sebagai input. Fungsi ini harus mendukung empat operasi matematika dasar, yaitu penjumlahan (tambah), pengurangan (kurang), perkalian (kali), dan pembagian (bagi).

Jika operasi yang dimasukkan tidak sesuai dengan yang ada (misalnya bukan salah satu dari tambah, kurang, kali, atau bagi), maka fungsi harus mengembalikan pesan "Operasi tidak dikenal".
Gunakan fungsi ini untuk melakukan beberapa perhitungan berdasarkan input yang diberikan.

# Tugas:

Buatlah fungsi kalkulator yang menerima tiga parameter: dua angka dan operasi matematika (dalam bentuk string, misalnya: 'tambah', 'kurang', 'kali', atau 'bagi').

Fungsi ini harus mengembalikan hasil perhitungan berdasarkan operasi yang diminta:

Jika operasi adalah 'tambah', maka harus menjumlahkan kedua angka.
Jika operasi adalah 'kurang', maka harus mengurangi angka pertama dengan angka kedua.
Jika operasi adalah 'kali', maka harus mengalikan kedua angka.
Jika operasi adalah 'bagi', maka harus membagi angka pertama dengan angka kedua.
Jika operasi tidak sesuai dengan yang diharapkan, kembalikan pesan 'Operasi tidak dikenal'.
Contoh Kasus:

Input: kalkulator(10, 5, 'tambah')
Output: 'Hasil penjumlahan: 15'
Input: kalkulator(10, 5, 'kurang')
Output: 'Hasil pengurangan: 5'
Input: kalkulator(10, 5, 'kali')
Output: 'Hasil perkalian: 50'
Input: kalkulator(10, 5, 'bagi')
Output: 'Hasil pembagian: 2'
Input: kalkulator(10, 5, 'modulus')
Output: 'Operasi tidak dikenal'