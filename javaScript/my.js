// önce normal function tanımlayalım ardından bunu 
// arrow ile tanımlayalım
function hello(firstName){
console.log(`Merhaba ${firstName}`)
}
hello('javaScript')

const helloFuncV1=(firstName) =>{console.log(`Merhaba ${firstName}`)}
helloFuncV1('Hakan');
const helloFuncV2=firstName=>{console.log(`Merhaba ${firstName}`)}
helloFuncV2('Baran');

const helloFuncV3=(firstName,lastName) =>{console.log(`Merhaba ${firstName} ${lastName}`)}
helloFuncV3('Hakan','Çakır');