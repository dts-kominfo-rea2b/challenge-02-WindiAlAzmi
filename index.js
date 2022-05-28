// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [ ];
  for (const pegawai of dataYangAkanDilooping){
     hasilLooping.push(`${pegawai.namaDepan} ${pegawai.namaBelakang}`);
  }

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let arrayPria = []
  for(const pegawai of dataYangAkanDilooping){
    if(pegawai.jenisKelamin == "M"){
        arrayPria.push(pegawai.jenisKelamin.length);
    }
  }
  let jumlahPria = arrayPria.reduce((a, b) => a + b);

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let arrayWanita = [];
  for(const pegawaiWanita of dataYangAkanDilooping){
     if(pegawaiWanita.jenisKelamin == "F"){
      arrayWanita.push(pegawaiWanita.jenisKelamin.length);
     }
     
  }

  let jumlahWanita = arrayWanita.reduce((a,b) => a + b);

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = "";
  if(jumlahPria > jumlahWanita){
    komentar += "Jumlah Pria lebih banyak dari Wanita";
  }else if(jumlahWanita > jumlahPria){
    komentar += "Jumlah Wanita lebih banyak dari Pria";
  }else if(jumlahWanita == jumlahPria){
    komentar += "Jumlah Pria dan Wanita berimbang";
  }

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
