
///  NORMAL FUNCTION

function sum (a,b){
    let add = a+b
    return add 
}



console.log(sum(10,20))




////  ARROW FUNCTION

let sum = (a,b) => {
    return a+b
}

console.log(sum(10,20))


/////  ONE LINER ARROW FUNCTION 

////    (1)

let sum = (a,b) => (a+b) 

console.log(sum(10,20))



///// (2)


let square=a=>a*a


/////  EX

let s1=g=>g+3
let  s2 = f =>f+15

console.log(s1(10) + s2(10))