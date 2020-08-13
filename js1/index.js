//You have two objects - { a: 1, b: 2 } and { d: 4, e: 5 }. Using what we have learnt today, create the following output: { a: 1, b: 2, c: 3, d: 4, e: 5 }.
let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    d: 4,
    e: 5
}

let obj3 = {...obj1, c: 3, ...obj2}

console.log(obj3)

// obj3.d = 5
// console.log(obj2)
// console.log(obj3)


//Given an array of email addresses, find the ones ending with ".com"
let emails = ['abc.com', 'vikram.com', 'vikram.josh']
console.log('Email addresses ending with .com are \n')
for(email of emails){
    if (email.endsWith('.com')){
        console.log(email) 
    }
}

//Given an array of numbers (10, 20, 2, 12, 5, 3, 8), find the first number greater than 11.
let a = [10, 20, 2, 12, 5, 3, 8]
console.log(`First number greater than 11 in array ${a} is`, a.find(ele => ele > 11))


//Write a function which will accept an array of user objects and for each username prints a customised greeting message
let objArr = [
    {
        firstName: "vikram",
        userName: "vikram123",
        email: "vikram@gmail.com"
    },
    {
        firstName: "Sanjay",
        userName: "sanjay123",
        email: "sanjay@gmail.com"
    },
    {
        firstName: "Durgesh",
        userName: "durgesh123",
        email: "durgesh@gmail.com"
    }
]

let greetUsers = () => {
    for( user of objArr){
        console.log(`Hi ${user.firstName}, you are registered with us. Your username is: ${user.userName} and your email is ${user.email}`)
    }
}

greetUsers()
