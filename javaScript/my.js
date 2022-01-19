//ekleme
localStorage.setItem('key','value');
// çağırma
let a=localStorage.getItem('key');

console.log(a);

localStorage.removeItem('key');


console.log('---')
console.log(localStorage.getItem('key'));