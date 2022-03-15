

let name ="hakan";

// bag tikler alt-gr+ virgül normal  tırnak işareti dğeil
let info=` ${name[4]}`; // indexer da kullanabiliriz

console.log("Length" ,name.length);// karakter uzunluğu
console.log(name[0]);// indexer
console.log(name.charAt(0));// indexir
console.log("Büyük Harf ",name.toUpperCase());// 
console.log("Küçük Harf ",name.toLowerCase());// 
console.log("index of = ",name.indexOf('k'));// 
console.log("index Arama ",name.search("an"));// kelimenin başladığı indexi verir
// eğer yoksa -1 döner
console.log("Belli bir kısım",name.slice(0,2));//  ha
console.log("overloading",name.slice(1));// akan

console.log("replace : ",name.replace('a','e'));// hekan
console.log("",name.includes('a'));//varmı diye sorar true false döner 
console.log("endWith :",name.endsWith('n'));// sonu kontrol
console.log("",name);// 
console.log("",name);// 
console.log("",name);// 