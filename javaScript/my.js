
// ternary operatörü

let info=document.querySelector("#info");
 let userName=prompt('Adınızı Giriniz');

 info.innerHTML= `${userName.length>0 ? userName:'Kullanıcı bulunamadı!'}`;d