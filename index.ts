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
   let rainbowTitle =  chalkAnimation.rainbow('it is rainbow text');
   await sleep();
   rainbowTitle.stop();
}

Welcome();
