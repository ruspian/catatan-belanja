// fungsi footer
export default function Footer({itemItem}) {
    if(itemItem.length === 0) return <footer className="stats">Daftar Belanja Masih Kosong!</footer>
  
  
    const totalBarang = itemItem.length;
    const ceklisBarang = itemItem.filter((item) => item.checked).length;
    const persentase = Math.round((ceklisBarang / totalBarang) * 100);
    return <footer className="stats">Ada {totalBarang} barang di daftar belanjaan, {ceklisBarang} barang sudah dibeli ({persentase}%) </footer>
};