class Gempa{
    constructor(lokasi,skala){
        this.lokasi = lokasi;
        this.skala = skala;
    }
    dampak(){
        for (const iterator in this.lokasi) {
            let randomSkala = Math.random()*this.skala,
                dampak = (randomSkala>=0 && randomSkala<=2) ? "Tidak Berasa"
                        : (randomSkala > 2 && randomSkala <= 4) ? "Bangunan Retak"
                        : (randomSkala > 4 && randomSkala <= 6) ? "Bangunan Roboh"
                        : (randomSkala > 6) ? "Bangunan Roboh Dan Berpotensi Tsunami"
                        : "Nilai Skala Tidak Valid";
            document.querySelector('tbody').innerHTML += `
                <tr>
                    <td> ${Number(iterator)+1} </td>
                    <td> ${this.lokasi[iterator]} </td>
                    <td> ${randomSkala.toPrecision(2)} </td>
                    <td> ${dampak} </td>
                </tr>
            `
        }
    }
}
let lokasi = ['Indonesia','Japan','Korea','Argentina','German','Turki','Swedia','Irlandia','India','Slokavia'],
    gempaDunia = new Gempa(lokasi,10);
    gempaDunia.dampak();