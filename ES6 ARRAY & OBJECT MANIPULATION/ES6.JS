////  NORMAL FUNCTION

// function profile (obj){
//     console.log("MyName is",obj.name)
//     console.log("Age is ",obj.age)
//      console.log("City is",obj.city)

// }


// profile({name:"Neha", age:30,city:"Delhi"});
// profile({name:"Mina", age:35,city:"Chennai"});



// Use DESTRUCTURING



////  EX-1


// function profile({name,age,city}){
//      console.log("MyName is",profile.name)
//      console.log("Age is ",profile.age)
//     console.log("City is",profile.city)
// }
//  profile({name:"Neha", age:30,city:"Delhi"});
//  profile({name:"Mina", age:35,city:"Chennai"});







//// EX-2

function signup(name="anonymous",age,city="Delhi"){
    console.log(name,age,city)

}

signup();



