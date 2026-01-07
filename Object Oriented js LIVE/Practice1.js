
let obj = {
  0 : 30,
  a  :10, 
  b : 20,
  2  :22,
  c : 12,
  1 : 13,
  "10" : 11,
  q : 111,
  "Hello world" : "im in the world" , 
// Hello world : "sagar in the world" => error
}
let boj2={
    q:12,
    o:21,
    [2+3] : "Hello",
    // 2+3:"world"     => Its give me a error 
    " 2 + 3 " : "World"

}

// console.log(obj)

// console.log(obj.1) => error
// console.log(obj."hello world") => error



// let all = {}
console.log("obj1", obj)

let all = {...obj,...boj2}


console.log(all)
console.log("obj of all ",obj)


