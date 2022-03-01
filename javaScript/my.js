// karşılattırma operatörleri
// kullanıcı Ehliyet alabilirmi
let userName =prompt('kullanıcı adını giriniz');
let age=prompt("Yaşınızı girniz");


if(userName && age>17){
    console.log('Kullanıcı ehliyet alabilir');
}
else if(age<18){
console.log('Kullanıcı ehliyet alamaz');
}
else{
    console.log('Kullanıcı bilgilerinizi eksiksiz giriniz');  
}