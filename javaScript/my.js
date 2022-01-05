//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener('change' ,selectBox);
//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
function selectBox(event){
    console.log("Etkinlik tipi : " + event.type);
    console.log("deger : " + event.target.value);
    }
  