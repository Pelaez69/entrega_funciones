let grupo1 = [2,3,4]
let grupo2 = [5,6,7]

let temporal = grupo1;
grupo1 = grupo2
grupo2 = temporal;


console.log("grupo1 =", grupo1 )
console.log("grupo2 =", grupo2 )