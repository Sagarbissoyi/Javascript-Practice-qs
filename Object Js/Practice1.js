// class User{
//     constructor(MyName,MyAge,MyEmail){
 
//         this.name=MyName;
//         this.age=MyAge;
//         this.email=MyEmail
//     }
//     aboutUser(){
//         return (
//             this.name + " this is your name " + this.age + " this is your age " + this.email + " this is your email "
//         )
//     }
//     ChangeName(NewName){
//         this.name = NewName;
//         console.log("Name Changes !")
//     }
// }


// let user1 = new User ("sss","21","sagar@gmail.com");
// console.log(user1.aboutUser())

// console.log(user1)
// user1.ChangeName("RAJA MOLI")
// console.log(user1)







///////////////   Practice of objects


// class User {
//     constructor(MyName,MyAge,MyGender){
//         this.name=MyName;
//         this.age=MyAge;
//         this.gender=MyGender
//     }
//     aboutUser(){
//         return (
//             "mera naam" + " he " + this.name + " or mera age " + this.age+ " or mera gender he " + this.gender
//         )
//     }
//     changename(newname,newgender){
//         this.name = newname;
//         this.gender = newgender
        
//         console.log("NAME ARE CHANGED !")
//     }
// }


// let user1 = new User("Tirupati bissoyi","56","Male")
// // console.log(user1.aboutUser())
// user1.changename("Savita bissoyi","female")
// // console.log(user1.name,user1.gender)

// console.log(user1)





/// Part2


class User{
    constructor(MyName,MyAge,MyEmail){
this.name=MyName;
this.age=MyAge;
this.email=MyEmail

    }
    aboutUser(){
        return(
            "mera name " + this.name + " mera age " + this.age + " mera email " + this.email
        )
    }
    changeName(newName){
        this.name=newName
        console.log("Name change")
    }
}



let user1=new User("Sagar","23","sagar@gmail.com")
console.log(user1)

console.log(user1.aboutUser())

user1.changeName("Vivek")


console.log(user1)

console.log(user1.aboutUser())






