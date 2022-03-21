let leptop1 ={
    brand:'Apple',
    model:"MacBook Pro",
    // keyler sayı ile başliyamaz fakat bunu ezebiliriz.
    "2kg":2// bu sekilde başa sayı ekleyebiliriz
}

console.log(leptop1.brand)
console.log(leptop1["brand"])// alternatif kullanımı
console.log(leptop1.model)
console.log(leptop1["2kg"])// çağırmak için bu sekilde kullanılır

//veri değiştirmek
leptop1.brand="MAc"
console.log(leptop1)
leptop1["brand"]="Mac"
console.log(leptop1)


keys=Object.keys(leptop1)
console.log(keys)// sadece keysleri verir
// key yerine sadece valuelerde alınabilir
values=Object.values(leptop1)


// bu key bilgilerini foreachle  kullanabiliriz

keys.forEach(item => {
    console.log(item)
    console.log(leptop1[item])
});

