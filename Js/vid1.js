// alert("Hello world");
// console.log("Hello world");
document.writeln("Hello world");
// Deklarasi Variabel
let isi = prompt("Apa Anda Yakin?");

//Perulangan If Else
if (isi === "ya") {
  alert("Halo Selamat Datang!");
} else {
  alert("Terimakasih Telah berkunjung!!");
}
document.writeln("Jawabamu adalah: " + isi);
document.writeln("<br>");

//Perulangan dan Array
let rumah = ["Kendenglembu ", "Sidoarjo ", "Glenmore ", "Karangharjo "];
document.writeln("Isi Array: <br>");
for (i = 0; i < rumah.length; i++) {
  document.writeln(rumah[i]);
  document.writeln("<br>");
}

/*
Tugas Kecil
1.Prompt untuk mengetahui Saldo Akhir dari apa yang diinputkan oleh user
2.Menentukan hari dari tanggal yang ada saat ini di pc
*/

//Menentukan Hari

let hariIni = new Date();
let hari = hariIni.getDay();
let hariArray = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
document.writeln("Hari ini adalah hari " + hariArray[hari]);
document.writeln("<br></br>");

//Saldo
let saldoAwal;
let saldoAkhir;
let hutang;
let tunjangan;
let thr;
let cicilan;

// Prompt Saldo
alert("Halo, Selamat Datang di Kalkulator Sederhana Keuangan Anda!");
saldoAwal = Number(prompt("Silahkan Masukkan saldo awal anda"));
hutang = Number(prompt("silahkan masukkan juga hutang anda"));
tunjangan = Number(prompt("silahkan masukkan tunjangan anda"));
thr = Number(prompt("silahkan masukkan thr anda"));
cicilan = Number(prompt("silahkan masukkan cicilan anda per bulan"));
saldoAkhir = saldoAwal + tunjangan - cicilan + thr - hutang;

document.writeln("Saldo Akhir Anda adalah: Rp." + saldoAkhir);
