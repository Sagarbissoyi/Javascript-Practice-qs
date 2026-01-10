/////////  EX -1

/////    1

function hof1 (fun1){
    console.log("Functionis here",fun1)
    fun1()
}




/////////  2


const sum = () => {
    console.log("Sum")
}
hof1(sum)



///////////// EX 2

function test(){
    console.log("Testing...")
    return ()=>{
        console.log("Hello")
    }
    let x = test()
}
x()





///////////////   EX -3


function hof2(){
    console.log("Hello1")
        return ()=>{
            console.log("Hello2")
            return ()=>{
                console.log("Hello 3")
            }
        }
    
}
let x = hof2()
let y = x()
y()



































