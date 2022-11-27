#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () =>{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}
async function Welcome(){
   let rainbowTitle =  chalkAnimation.rainbow('Just wait we are creatig environment for you');
   await sleep();
   rainbowTitle.stop();
}



async function askQuestions() {
     const answer = await inquirer
   .prompt([{
         type:"list",
         name:"operator",
         message:"Which operation you want to perform\n",
         choices:["Add","Subtract", "Multiply", "Divide"]
    },
    {
        type:"number",
        name:"num1",
        message:"Please enter number 1"
    },
    {
        type:"number",
        name:"num2",
        message:"Please enter number 2"
    },

]);
    if (answer.operator =="Add") {
        console.log(chalk.blue(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`))
    } else if (answer.operator =="Subtract") {
        console.log(chalk.blue(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`))
    }
    else if (answer.operator =="Multiply") {
        console.log(chalk.blue(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`))
    }
    else if (answer.operator =="Divide") {
        console.log(chalk.blue(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`))
    }
};

async function startAgain( ) {
    do {
        await Welcome();
        await askQuestions();
    var again = await inquirer
    .prompt({
        type:"input",
        name:"restart",
        message:"Do you want to continue? Press y or n:"
    })
    } while (again.restart=="y"||again.restart=="Y");
    
}

startAgain();

//

