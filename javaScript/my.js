// array map kullanımı
// foreache benzerdir tek farkı yeni bir liste
// elde etmemizii sağlar
const USERS=["AYSE","MehMet","TugCE",'AySEL']




// username içinde orjinal isim kalsın
// shortname içinde ilk harf büyük .(A.)
// newname içinde ilk harf büyük olsun


const NEW_USERS=USERS.map(user=>user.toLocaleLowerCase())

console.log(USERS)
console.log(NEW_USERS)