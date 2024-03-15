import { useState } from "react";

// fungsi form
export default function Form({onAddItem}) {
    // menentukan inputan nama barang
    const [nama, setNama] = useState('');
    const [jumlah, setJumlah] = useState(1);
  
    // fungsi memasukan nama barang
    function inputBarang(e) {
      // jika ingin mematikan fungsi default browser
      e.preventDefault();
      
      if(!nama) return;
  
      const barangBaru = { nama, jumlah, checked : false, id : Date.now()};
      onAddItem(barangBaru);
  
      setNama('');
      setJumlah(1);
    }
  
    // fungsi input jumlah barang
  
    // loop nomer jumlah
    const noJumlah = [...Array(20)].map((_, i) => (
      <option value={i + 1} key={i + 1}>{i + 1}</option>
    ));
  
    return (
      <form className="add-form" onSubmit={inputBarang}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={jumlah} onChange={(e) => setJumlah(Number(e.target.value))} >{noJumlah}</select>
        <input type="text" placeholder="nama barang..." value={nama} onChange={(e) => setNama(e.target.value)} />
      </div>
      <button>Tambah</button>
      </form>
    )
};