//callBack.js
// This code demonstrates the use of a callback function in JavaScript.
const express = require('express');
const app = express();

const PORT = 3000;

const primaryFunction =(a,b,print) =>{
    let c = a+b;
    console.log("calculation done");
    print(c);

}
const printResult = (c) =>{
    console.log(c);
    console.log("result printed");

}

