
function kalkulator(angka1, angka2, operasi) {
  if (operasi === 'tambah') {
    return angka1 + angka2;
  } else if (operasi === 'kurang') {
    return angka1 - angka2;
  } else if (operasi === 'kali') {
    return angka1 * angka2;
  } else if (operasi === 'bagi') {
    return angka1 / angka2;
  } else {
    return 'Operasi tidak dikenal';
  }
}

let hasil = kalkulator(10, 5, 'tambah');
console.log('Hasil penjumlahan: ' + hasil);