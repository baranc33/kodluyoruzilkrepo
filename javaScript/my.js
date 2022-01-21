// çok kullanilan Array(dizi) metotları ve array icinde array

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://www.w3schools.com/js/js_array_methods.asp

let items=[1,2,3,4,5]

//array içinde array
let femaleUser=['Ayse','Hülya','Merve']
let maleUsers=['Ahmet','Hakan','Mehmet']

items.unshift(femaleUser);// dizinin başına bir dizi ekleme
console.log(items);
items.push(maleUsers)// dizinin sonuna bir dizi ekleme
console.log(items);
// bu şekilde eklediğimiz ögeler  array içinde array olarak ekler
// index sayısı 1 artar
console.log(items[0][1])// şeklinde Hülya ulaşabilrz

// Array icerisinde oge ayirmak -> splice(pos,item?)
// array içerisindeki ogenin index bilgisini bulmak -> indexOf('value')


// array kopyalamak -> slice,[...ES6]

// array içersindeki bilgiyi stringe çevirmek  -> toString, join

// iki array ilgisini birleştirmek -> [...ES6 ,  ...ES6]


// istediğimiz index bilgisine öge eklemek --> splice (index,0,value)
