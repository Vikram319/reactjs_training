// assignment 1

let users = ['vikram','sanjay','vikash']

let greetUsers = users => {
    for( user of users){
        console.log(`Hello ${user}!!`)
    }
}

greetUsers(users)

// assignment 2

let arr = [1,2,3,4,5]

let checkElement = (ele) => arr.includes(ele)

console.log(`Is 2 present in array: ${arr} :`,checkElement(2))
console.log(`Is 7 present in array: ${arr} :`,checkElement(7))

// assignment 3
let account = {
    type: 'credited',
    amount: 5000,
    balance: 50000
}

let bankStatement = obj => {
    if (obj.type === 'credited'){
        console.log(`${obj.amount} amount has been credited to your account, your account balance is ${obj.balance+obj.amount}`)
    }
    else{
        if(amount <= balance){
            console.log(`${obj.amount} amount has been debited from your account, your account balance is ${obj.balance-obj.amount}`)
        }
        else{
            console.log('insufficient balance')
        }
    }
}

bankStatement(account)