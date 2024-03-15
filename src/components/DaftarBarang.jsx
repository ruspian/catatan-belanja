import { useState } from "react";
import Item from "./Item";

// fungsi daftar belanja
export default function DaftarBelanja({itemItem ,onDeleteItem, onToogleItem, onClearItem}) {
    const [urutkan, setUrutkan] = useState('input')
  
    let shortedItem;
  
    // mencari urutan
    switch(urutkan) {
      case 'nama':
        shortedItem = itemItem.slice().sort((a, b) => a.nama.localeCompare(b.nama));
        break;
      case 'checked':
        shortedItem = itemItem.slice().sort((a, b) => a.checked - b.checked);
        break;
      default:
        shortedItem = itemItem;
        break;
    }
  
    return (
      <>
        <div className="list">
        <ul>
          {shortedItem.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToogleItem={onToogleItem} />
          ))}
        </ul>
        </div>
        <div className="actions">
          <select value={urutkan} onChange={(e) => setUrutkan(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="nama">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onClearItem}>Bersihkan Daftar</button>
        </div>
      </>
    );
};