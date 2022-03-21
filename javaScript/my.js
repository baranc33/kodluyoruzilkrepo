// arraylerde destructuring kullanmak

let score=[100,200,300,400]

let[score1,score2,...otherScore]=score
console.log(score1)
console.log(score2)
console.log(otherScore)


// direk kopyalama yöntemi
let newScore=[...score]
console.log(newScore)