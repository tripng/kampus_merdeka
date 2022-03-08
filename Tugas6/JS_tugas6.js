let a1 = document.kalkulator.a1,
    a2 = document.kalkulator.a2,
    hasil = document.kalkulator.hasil;
const hitung = cek => ((isNaN(a1.value) || a1.value=="") || (isNaN(a2.value) || a2.value=="")) ? 
    alert("Input Data Tidak Valid") : hasil.value = eval(`${a1.value} ${cek} ${a2.value}`);