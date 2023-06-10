
//HTML içinde class'ı 'sonuc' ve 'hesapla' olan elementleri seçmek için kullanılır.
var divSonuc = document.querySelector('.sonuc');
var btnHesapla = document.querySelector('.hesapla');

// 'btnHesapla' üzerinde 'click' olayı gerçekleştiğinde çalışacak bir olay dinleyicisi eklenir.
btnHesapla.addEventListener("click", function(event) {
    // 'strDersAdi' değişkeni, HTML içinde class'ı 'ders-adı' olan bir input alanından alınan değeri temsil eder.
    let strDersAdi = document.querySelector('.ders-adı').value;
    let strDersKredisi = document.querySelector('.ders-kredisi').value;

    let flVizeNotu = 0;
    let strVizeNotu = document.querySelector('.vize-notu').value;

    let flVizeYuzde = 0;
    let strVizeYuzde = document.querySelector('.vize-yuzde').value;

    let flFinalNotu = 0;
    let strFinalNotu = document.querySelector('.final-notu').value;

    let flFinalYuzde = 0;
    let strFinalYuzde = document.querySelector('.final-yuzde').value;

    let strUyari = "";
    
      // Girdi doğrulama
      if (strDersAdi == '') {
        strUyari += "- Lütfen ders adını giriniz.<br>"; // Boş ders adı kontrolü
    }

    if (strDersKredisi == '' || isNaN(strDersKredisi)) {
        strUyari += "- Lütfen ders kredisini giriniz.<br>"; // Ders kredisi kontrolü
    } else {
        flDersKredisi = parseFloat(strDersKredisi); 
        // Girdi olan ders kredisini ondalık bir sayıya çevirerek saklamak için kullanılır.
    }

    if (strVizeNotu == '' || isNaN(strVizeNotu)) {
        strUyari += "- Lütfen vize notunu giriniz.<br>"; // Vize notu kontrolü
    } else {
        flVizeNotu = parseFloat(strVizeNotu);
    }

    if (strVizeYuzde == '' || isNaN(strVizeYuzde)) {
        strUyari += "- Lütfen vize yüzdesini giriniz.<br>"; // Vize yüzdesi kontrolü
    } else {
        flVizeYuzde = parseFloat(strVizeYuzde);
    }

    if (strFinalNotu == '' || isNaN(strFinalNotu)) {
        strUyari += "- Lütfen final notunu giriniz.<br>"; // Final notu kontrolü
    } else {
        flFinalNotu = parseFloat(strFinalNotu); 
    }

    if (strFinalYuzde == '' || isNaN(strFinalYuzde)) {
        strUyari += "- Lütfen final yüzdesini giriniz.<br>"; // Final yüzdesi kontrolü
    } else {
        flFinalYuzde = parseFloat(strFinalYuzde);
    }

    if (flVizeNotu < 0 || flVizeNotu > 100) {
        strUyari += "- Vize notu 0-100 arasında olmalıdır.<br>"; // Vize notu sınırları kontrolü
    }

    if (flVizeYuzde < 0 || flVizeYuzde > 100) {
        strUyari += "- Vize yüzdesi 0-100 arasında olmalıdır.<br>"; // Vize yüzdesi sınırları kontrolü
    }

    if (flFinalNotu < 0 || flFinalNotu > 100) {
        strUyari += "- Final notu 0-100 arasında olmalıdır.<br>"; // Final notu sınırları kontrolü
    }

    if (flFinalYuzde < 0 || flFinalYuzde > 100) {
        strUyari += "- Final yüzdesi 0-100 arasında olmalıdır.<br>"; // Final yüzdesi sınırları kontrolü
    }

    if ((flVizeYuzde + flFinalYuzde) !== 100) {
        strUyari += "- Vize ve Final yüzdeleri toplamı 100 olmalıdır.<br>"; // Vize ve final yüzdesi toplamı kontrolü
    }

    divSonuc.innerHTML = "";

    //strUyari değişkeni boş değilse, hata durumunu göstermek için divSonuc'a "basarisiz" sınıfını ekler ve strUyari'yi hata mesajı olarak divSonuc'un içine yerleştirir.
    // Eğer strUyari boş ise, hesaplama sonuçlarını göstermek için divSonuc'a "basarili" sınıfını ekler.

    if (strUyari !== "") {
        divSonuc.classList.add("basarisiz");
        divSonuc.innerHTML = "<strong>Hata:</strong><br>" + strUyari;
    } else {
        let flVizeSonuc = ((flVizeNotu * flVizeYuzde) / 100);
        let flFinalSonuc = ((flFinalNotu * flFinalYuzde) / 100);
        let flSonuc = flVizeSonuc + flFinalSonuc;
        let strDurum = "";

        // Hesaplama sonuçlarına göre dersin durumunu belirler (geçti veya kaldı).
        if (flSonuc >= 50) {
            strDurum = "Geçti";
        } else {
            strDurum = "Kaldı";
        }

        //ders adını, ders kredisini, ders ortalamsını ve durumunu içeren bir metin oluşturarak divSonuc'un içine yerleştirir.
        divSonuc.classList.add("basarili");
        divSonuc.innerHTML = "<strong>Sonuç:</strong><br>Ders Adı: " + strDersAdi + "<br>Ders Kredisi: " + strDersKredisi + "<br>Ders Ortalaması: " + flSonuc.toFixed(2) + "<br>Durum: " + strDurum;
    }
});
