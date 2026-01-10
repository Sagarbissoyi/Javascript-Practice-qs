
/////////EX-1

///1

function hello (){
    console.log(20)
    return 10
}

let x = hello();
console.log("x",x)


////2

function hey(a){
    console.log(a)
}
hey(10+20)



////////   EX_-2



function dance (fun1){
    console.log("Inside",fun1)
    fun1()
  ///console.log(fun1())    ///=>  for out put no 2  
    }

    let sing = ()=>{
        console.log("singining");
        return 1000
    }

    dance(sing());

    dance(sing)


///////     EX-3



function hello(n,fun1){
    console.log("Number is here",n)
    console.log("function is here",fun1)
    fun1()
}

// let x =1000;
// const slap = ()=>{
//     console.log("Thapped")         /// no 3 for out
// }

hello(x,slap)

hello(100,slap)

hello(1000,()=>{console.log("Thapped")})








///////////  EX 4





function greetings(def){
    def()
}

const sum = (a,b)=>{
    console.log(a+b)
}
greetings(sum)






