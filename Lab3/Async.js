//Asyncronus.js
// This code demonstrates the use of an asynchronous function in JavaScript.
const express = require('express');
const app = express();
const PORT = 3000;
console.log("step1");
 setTimeout(() => {
    console.log("step2");
 }, 5000);
setTimeout(() =>console.log("timeout3"), 4999);
console.log("step3");
// Output: