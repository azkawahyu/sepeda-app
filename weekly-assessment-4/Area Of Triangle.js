function triArea(base, height) {
  return base == 0 || height == 0 || isNaN(base) || isNaN(height)
    ? "Sisi Segitiga hanya di isi angka dan tidak boleh 0"
    : (base * height) / 2;
}

console.log("Luas Area Segitiga adalah " + triArea(3, 4));
console.log("Luas Area Segitiga adalah " + triArea(7, 4));
console.log("Luas Area Segitiga adalah " + triArea(10, 10));
