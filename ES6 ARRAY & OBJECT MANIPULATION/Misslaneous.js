
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


