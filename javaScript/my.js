// array olusturmak
let domain="hakanbarancakir.cf";
let isActive=false;
let items=[ 1, 2, 3,isActive,domain];

console.log(items);

// eleman ekleme 1 . daha farklı şekillerdede ekleme yapabiliriz 
// detayları ilerde görcez
items[items.length]="deneme";
console.log(items);

let emptyArray=[]// boş liste

// array içersindeki eleman/og sayisini ögrenmek
console.log(items.length);

//ilk elemanın cağrılması
console.log(items[0]);
// son elemanın  çağrılması
console.log(items[items.length-1]);

// degisken iindeki bilginin array olup olmadığını kontrol etmek

console.log(typeof(items))// object olarak değer verir
console.log(
    Array.isArray(items)// true döner
)