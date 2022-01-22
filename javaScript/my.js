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
console.log('--------------')
let newItems=items.splice(0,2);
console.log(newItems)
console.log(items)// newItems   nesnelerini burda göremeyiz



// array içerisindeki ogenin index bilgisini bulmak -> indexOf('value')


let number=items.indexOf(4)// bulamazsa -1 döner
console.log(number)// index 
// array içersindeki arrayleri bulmuyor


// array kopyalamak -> slice,[...ES6]

let copyItems=items.slice() // kopyalama işlemi yaptık
items.pop();
console.log(items)
console.log('Copyalanan değer')

console.log(copyItems);





// array içersindeki bilgiyi stringe çevirmek  -> toString, join

// iki array ilgisini birleştirmek -> [...ES6 ,  ...ES6]


// istediğimiz index bilgisine öge eklemek --> splice (index,0,value)
