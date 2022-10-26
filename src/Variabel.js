import React from 'react'

// const : Nilainya tetap tidak dapat diubah, Block Scope
// const harga = 30000;

// var : Nilainya dapat diubah, Global Props
// var harga = 30000;
// if (true) {
//     harga = 5000;
// }

// let : Nilainya dapat diubah, Block Scope
let harga = 3000
if (true) {
    let harga = 3500
}

const Variabel = () => {
  return (
    <div>
        <h2>Harga : {harga}</h2>
    </div>
  )
}

export default Variabel
