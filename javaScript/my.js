// Array filter kullanımı

// 5 harften fazla olanları yeni liste eklicez??
 
const PRODUCTS=["Mic","Cable","Speaker","Desktop PC","Server","Mouse","Keyboard"]



const NEW_PRODUCTS=PRODUCTS.filter(product=>product.length>5)
// filtreledeki ve karakter uzunluğu 5 ten büyük olanları listeye attık

console.log(NEW_PRODUCTS)
    

const USERS=[
{fullname:"Ayse Sumer",isActive:false},
{fullname:"Ahmet Urga",isActive:true},
{fullname:"Asya Basar",isActive:true},
{fullname:"Aksel Durmaz",isActive:true}
]