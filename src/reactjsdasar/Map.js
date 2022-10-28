import React from "react";

const makanan = [
  {
    nama: "Ayam Penyet",
    harga: 15000,
  },
  {
    nama: "Mie Aceh",
    harga: 10000,
  },
  {
    nama: "Nasi Padang",
    harga: 20000,
  },
];

// reduice
const total_bayar = makanan.reduce((total_harga, mn) => {
  return total_harga + mn.harga;
}, 0);

const Map = () => {
  return (
    <div>
      <h2>Belajar Map Dasar</h2>
      <ul>
        {makanan.map((mn, index) => (
          <li>
            {index + 1}.{mn.nama} - harga {mn.harga}
          </li>
        ))}
      </ul>
      <h2>Filter Makanan Yang Harganya di atas 12.000</h2>
      <ul>
        {makanan
          .filter((mn) => mn.harga > 12000)
          .map((mn, index) => (
            <li>
              {index + 1}.{mn.nama} - Harganya {mn.harga}
            </li>
          ))}
      </ul>

      <h2>Makanan Yang Harganya dibawah 12000</h2>
      <ul>
        {makanan
          .filter((mn) => mn.harga < 12000)
          .map((mn, index) => (
            <li>
              {index + 1}.{mn.nama} - Harganya {mn.harga}
            </li>
          ))}
      </ul>
      <h3>Total Harganya = {total_bayar}</h3>
    </div>
  );
};

export default Map;
