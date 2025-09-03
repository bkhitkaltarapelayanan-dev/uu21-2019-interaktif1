// Data penjelasan pasal
const penjelasanPasal = {
  1: "Karantina Hewan, Ikan, dan Tumbuhan adalah sistem pencegahan masuk  keluar, dan tersebarnya Hama dan Penyakit Hewan Karantina, Hama dan Penyakit Ikan Karantina, dan Organisme Pengganggu Tumbuhan Karantina, serta pengawasan dan/atau pengendalian terhadap Keamanan Pangan dan Mutu Pangan, Keamanan Pakan dan Mutu Pakan, Produk Rekayasa Genetik, Sumber Daya Genetik, Agensia Hayati, Jenis Asing Invasif, Tumbuhan dan Satwa Liar, serta Tumbuhan dan Satwa Langka yang dimasukkan ke dalam, tersebarnya dari suatu Area ke Area lain, dan/atau dikeluarkan dari wilayah Negara Kesatuan Republik Indonesia.",
  2: "Penyelenggaraan Karantina dilaksanakan berdasarkan asas: kedaulatan;keadilan; pelindungan; keamanan nasional; keilmuan; kecepatan; dampak minimal; transparansi; keterpaduan; pengakuan; nondiskriminasi; dan kelestarian.", 
  3: "Pasal 3 membahas ruang lingkup karantina.",
  13: "Pasal 13 berisi penetapan jenis HPHK, HPIK, OPTK, dan media pembawa.",
  27: "Pasal 27 membahas ketentuan teknis mengenai pelaksanaan karantina.",
  96: "Pasal 96 adalah ketentuan penutup."
  // 👉 Lengkapi sesuai kebutuhanmu
};

// Generate kotak pasal
const grid = document.getElementById("pasalGrid");
for (let i = 1; i <= 96; i++) {
  let box = document.createElement("div");
  box.className = "box";
  box.innerText = i;
  box.onclick = () => tampilkanPenjelasan(i);
  grid.appendChild(box);
}

// Fungsi menampilkan penjelasan
function tampilkanPenjelasan(nomor) {
  const div = document.getElementById("penjelasan");
  div.style.display = "block";
  div.innerHTML = `<h2>Pasal ${nomor}</h2><p>${penjelasanPasal[nomor] || "Penjelasan belum tersedia."}</p>`;
}










