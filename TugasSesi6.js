//Exercise 1
//Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
for(let user = 1; user <= 100; user++){
    console.log("User Ke - " + user);
}

//Exercise 2
//Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
//Nilai awal = 0
//Pengulangan = 10 kali
//Nilai awal ditambah 2 setiap pengulangan
//Tampilan hasil penambahan pada setiap pengulangan
for (let pengulangan = 0; pengulangan < 20; pengulangan+=2) {
  console.log(pengulangan);
}

//Exercise 3
//Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
//Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
//Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
for (let angka = 0; angka <= 3; angka+=0.20) {
 if (angka === 0){console.log(angka + " adalah genap"); }else if(angka % 2 ) {
    console.log(angka + " adalah Angka Genap")
  }
  else {
    console.log(angka + " adalah Angka ganjil")
  }
};

//Exerccise 4
//Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
//Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
//Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
//Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)
let konfirmasi = confirm("Apakah anda mau mengulang ?");
let hitung = 0;
while(konfirmasi) {
    let konfirmasiLagi = konfirmasi;
    if (konfirmasiLagi == true) {
        konfirmasi = confirm("Apakah anda mau mengulang ?");
    }
    else {
        alert("Perulangan sudah dilakukan sebanyak " + hitung );
    }
    hitung++;
}

//Exercise 5
//Buat sebuah program kuis.
//Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
//Lakukan pengecekan apakah jawaban dari user sudah benar
//Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
//Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
let input = prompt("Sebutkan kepanjangan nama IB ?");
while (input) {
    input = prompt("Sebutkan kepanjangan nama IB ?");
    if (input === 'Impact Byte') {
        break;
    }
    input
}
alert("Selamat jawaban anda Benar !");
