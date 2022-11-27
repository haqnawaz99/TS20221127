#!usr/bin/env node
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
Welcome();
