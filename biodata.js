const http = require("http");
const biodataModule = require("./Biodata/moduleBiodata");

let nama = "Dandi Nirpana Nahin";
let tempatLahir = "Bekasi";
let tanggalLahir = "19 Desember 2002";
let alamat = "Kp. Kali Baru RT 001 / RW 001 Kab. Bekasi Kec. Tambun Selatan";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `Nama : ${biodataModule.nama(nama)}<br> 
    Tempat Lahir: ${biodataModule.tempatLahir(tempatLahir)}<br> 
    Tanggal Lahir: ${biodataModule.tanggalLahir(tanggalLahir)}<br> 
    Alamat: ${biodataModule.alamat(alamat)}`
    );
    res.end();
  })
  .listen(8087);
