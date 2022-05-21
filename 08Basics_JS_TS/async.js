import { readFileSync ,readFile} from "fs";
import {promisify} from "util"
// console.log(1);
// readFile('./async.js',(err,data) =>
// {
// console.log(data.toString());

// })
// const data = readFileSync('./async.js');
// console.log(data.toString());
const pReadFile  = promisify(readFile); 
// console.log(1);

// pReadFile('./async.js')
// .then(data=> console.log(data.toString()))
// .then(()=> console.log(3))

async function start(){
    console.log(1);
    const data = await pReadFile('./async.js')
    console.log(data.toString());
    console.log(3);
}

start();