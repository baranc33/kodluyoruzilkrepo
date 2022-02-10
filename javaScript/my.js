// array map kullanımı
// foreache benzerdir tek farkı yeni bir liste
// elde etmemizii sağlar
const USERS=["AYSE","MehMet","TugCE",'AySEL']




// username içinde orjinal isim kalsın
// shortname içinde ilk harf büyük .(A.)
// newname içinde ilk harf büyük olsun


const NEW_USERS=USERS.map(user=>user.toLocaleLowerCase())

console.log(NEW_USERS)
// // nesnemizin formatını değiştirelim
// const USERS_OBJ=USERS.map(item=>
//     {// ilk harfler büyük diğerleri küçük
//         return {userName:item,shortName:`${item[0]}.`,newName:`${item[0].toUpperCase()}${item.slice(1).toLocaleLowerCase()}`}
//     }
//     )

// yukardakinin daha temiz halini yazalım

const USERS_OBJ=USER.map(item=>(
   {userName:item,shortName:`${item[0]}.`,newName:`${item[0].toUpperCase()}${item.slice(1).toLocaleLowerCase()}`}
))

    console.log(USERS_OBJ)