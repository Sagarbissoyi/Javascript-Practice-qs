let obj = {
    c:10,
    2:"apple",
    b:20,
    0:"hello",
    a : 30,
    1 : "Hyderbad",
    "Hello World" : "I am in the world",

}

let t ="a"
// console.log(obj.t) //Undefined

// console.log(obj[1]);

// console.log(obj["Hello World"])

// console.log(obj[t])



/////  one more Problem in Dot Syntax


let obj1 = {
    name:"Rohan Das",
    age : 29,
    city:"Kolkata"
} 

for (let Key in obj1){
    console.log(Key,obj1.key) /// it will give you undefined
}