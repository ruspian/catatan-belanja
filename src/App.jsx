import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import DaftarBelanja from "./components/DaftarBarang";
import Footer from "./components/Footer";

// fungsi item belanja
const itemBelanja = [
  {
    id : 1,
    nama : 'takjil',
    jumlah : 3,
    checked : true,
  },
  {
    id : 2,
    nama : 'rokok',
    jumlah : 1,
    checked : false,
  },
  {
    id : 3,
    nama : 'korek',
    jumlah : 1,
    checked : false,
  },
]

// fungsi aplikasi utama
export default function App() {
  const [itemItem, setItemItem] = useState(itemBelanja);

  // fungsi tambah barang
  function hendelTambahBarang(item) {
    setItemItem([...itemItem, item])
  };

  // fungsi hapus barang
  function hendelHapusBarang(id) {
    setItemItem((itemItem) => itemItem.filter((item) => item.id !== id));
  };

  // fungsi centang checkbox
  function hendelCheckBox(id) {
    setItemItem((itemItem) => itemItem.map((item) => item.id === id ? {...item, checked : !item.checked} : item));
  };

  // fungsi hapus semua barang
  function hendelHapusSemua() {
    setItemItem([]);
  };

  // jalankan dan tampilkan aplikasi
  return (
      <div className="app">
        <Header />
        <Form onAddItem={hendelTambahBarang} />
        <DaftarBelanja itemItem={itemItem} onDeleteItem={hendelHapusBarang} onToogleItem={hendelCheckBox} onClearItem={hendelHapusSemua} />
        <Footer itemItem={itemItem} />   
      </div>
  );
};



