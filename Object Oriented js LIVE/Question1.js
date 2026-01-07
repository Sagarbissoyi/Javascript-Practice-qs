

let bat = {
    weight : 1.4,
    length : 21 ,
    price : 1200,
    "made in" : "India",
}

let ball = {
    radius : 5,
    color : "Red",
}

let cricket={}

// Copy the two object bat & ball in the cricket


for (let t in bat){
    // console.log(t) /// It will give you only index like(weight,length,price etc..)
    cricket[t] = bat[t];
}
for (let t in ball){
    // console.log(t) ///  it will also same index is given
    cricket[t] = ball[t]
}

console.log(cricket)












































