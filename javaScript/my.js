//id=fname olan nesne çağrılarak keyboard değişkenine atandı
const keyboard =document.querySelector('#fname');
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
keyboard.addEventListener("cut",cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event){
  console.log("etkinlik tipi: " , event.type)
  } 
  
//console ekranı : etkinlik tipi: cut
