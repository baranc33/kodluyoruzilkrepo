let user1={
    firstName:"Bilgin",
    lastName:"Uzman",
    score: [1, 2, 3, 4],
    isActive:true,
    // fonksyon tanımlama yapılabilir
    FullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    shortName:function(){
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    },

}


console.log(user1.score)
console.log(user1.FullName())
console.log(user1.shortName())