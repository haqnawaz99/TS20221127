#!usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow('it is rainbow text');
    await sleep();
    rainbowTitle.stop();
}
async function askQuestions() {
    inquirer
        .prompt([{
            type: "list",
            name: "operator",
            message: "Which operation you want to perform\n",
            choices: ["Add", "Subtract", "Multiply", "Divide"]
        },
        {
            type: "number",
            name: "num1",
            message: "Please enter number 1"
        },
        {
            type: "number",
            name: "num2",
            message: "Please enter number 2"
        },
    ])
        .then((answer) => {
        //console.log(answer);
        if (answer.operator == "Add") {
            console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
        }
        else if (answer.operator == "Subtract") {
            console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
        }
        else if (answer.operator == "Multiply") {
            console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
        }
        else if (answer.operator == "Divide") {
            console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
        }
    });
}
;
askQuestions();
//Welcome();
