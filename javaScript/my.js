// array olusturmak
let domain="hakanbarancakir.cf";
let isActive=false;
let items=[ 1, 2, 3,isActive,domain];
//  Sona bilgi eklemek
items.push(50);
// başa ekleme
items.unshift('baş');

console.log(items)


// sondaki bilgiyi çıkarma
items.pop()
console.log(items)

// bu bilgiyi yaklayada biliriz
let sonitem=items.pop();
console.log(sonitem)

// ilk eleman almak
let firstItemi=items.shift();
console.log(firstItemi, '// Kalan dizi =',items);







