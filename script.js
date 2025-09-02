// Data penjelasan pasal
const penjelasanPasal = {
  1: "Pasal 1 berisi Ketentuan Umum mengenai definisi dan istilah.",
  2: "Pasal 2 menjelaskan asas dan tujuan karantina.",
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

