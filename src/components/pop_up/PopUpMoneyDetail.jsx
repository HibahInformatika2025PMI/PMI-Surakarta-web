import React, { useState, useEffect } from 'react';

// Helper untuk parsing nominal dari string seperti 'Nominal Donasi : Rp 100.000'
function parseNominal(nominalText) {
  if (!nominalText) return 0;
  const match = nominalText.match(/Rp\s*([\d.]+)/);
  if (!match) return 0;
  return parseInt(match[1].replace(/\./g, ''), 10);
}

const PopUpMoneyDetail = ({ open, onClose, onSave, item }) => {
  const [jumlah, setJumlah] = useState(1);
  const [catatan, setCatatan] = useState('');
  const nominal = parseNominal(item?.nominalText);
  const total = nominal * jumlah;

  useEffect(() => {
    if (open) {
      setJumlah(1);
      setCatatan('');
    }
  }, [open, item]);

  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#D60100] w-[600px] max-w-full p-8 relative flex flex-col gap-6">
        <button className="absolute top-4 right-4 text-3xl text-[#C1C1C1] hover:text-[#D60100]" onClick={onClose} aria-label="Tutup">×</button>
        <div>
          <h2 className="text-[#D60100] font-bold text-3xl mb-1">Detail Donasi Uang</h2>
          <p className="italic text-black text-base mb-4">Masukkan jumlah dan keterangan donasi uang yang akan diberikan</p>
        </div>
        <div>
          <label className="font-bold text-[#261317] mb-1 block">Tujuan Donasi</label>
          <input className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3 text-[#7A7A7A]" value={item.title} disabled />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="font-bold text-[#261317] mb-1 block">Jumlah Unit</label>
            <input type="number" min="1" className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3" value={jumlah} onChange={e => setJumlah(Number(e.target.value))} />
          </div>
          <div className="flex-1">
            <label className="font-bold text-[#261317] mb-1 block">Nominal per Unit</label>
            <input className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3" value={item.nominalText || '-'} disabled />
          </div>
        </div>
        <div>
          <label className="font-bold text-[#261317] mb-1 block">Total Nominal</label>
          <input className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3 font-bold" value={`Rp ${total.toLocaleString('id-ID')}`} disabled />
        </div>
        <div>
          <label className="font-bold text-[#261317] mb-1 block">Catatan (Opsional)</label>
          <input className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3" value={catatan} onChange={e => setCatatan(e.target.value)} placeholder="Catatan" />
        </div>
        <div className="flex gap-4 mt-2">
          <button className="flex-1 bg-[#5AAA14] text-white font-bold py-2 rounded-lg" onClick={() => onSave({ ...item, jumlah, total, catatan })}>Simpan</button>
          <button className="flex-1 bg-[#BA2145] text-white font-bold py-2 rounded-lg" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpMoneyDetail; 