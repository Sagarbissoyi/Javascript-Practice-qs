
//////  EX_1

function hello (n,fun1){
    console.log("Number is here",n);
    console.log("Function is here",fun1);
    fun1()
}
let x=1000

const slap = () => {
    console.log("Thapped")
}

hello(x,slap())

hello(x,slap);















