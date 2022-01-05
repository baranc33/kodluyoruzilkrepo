//id=text olan buton çağrıldı
//dblclick=çift tıklama etkinliği nesneye atandı,fonksiyon ismi parametre olarak tanımlandı
const button = document.querySelector("#text");
button.addEventListener('dblclick',clickFonksiyonu);
  
//fonksiyonda id=text olan element çağrılarak innerHTML ile içeriği değiştirildi.
function clickFonksiyonu(){
  document.getElementById("text").innerHTML = "NEW FORM";
  }
