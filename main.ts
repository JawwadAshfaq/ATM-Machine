#! /usr/bin/env/ node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 123;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin"
    }
]);

if(pinAnswer.pin === myPin){
    console.log(`Correct Pin Code!!`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["withdraw", "fastcash" , "check balance"]
        }
    ])

    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your Amount"
            }
        ])

        if(amountAns.amount > myBalance){
            console.log(`Insufficient Balance`);
        }

        else {
            myBalance -= amountAns.amount
            console.log(`Your ramaining balance is ${myBalance}`);
        }
    }
    
    else if(operationAns.operation === "fastcash"){
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Select the amount which you withdrawal",
                choices: [1000,2000,5000,10000]
            }
        ])
        myBalance -= fast.fastcash;
        console.log(`You have successfully withdrawal ${fast.fastcash} \n Your remaining balance is ${myBalance}`)
    }

    else if(operationAns.operation === "check balance"){
        console.log(`Your remaining balance is ${myBalance}`)
    }
}

else{
    console.log(`Incorrect Pin Code`)
}