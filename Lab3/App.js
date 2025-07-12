// This code sets up a simple reminder system using Node.js EventEmitter and readline for user input.
// It prompts the user for a task and a reminder time, then emits an event after the specified delay.
const EventEmitter = require("events");
const event = new EventEmitter();
const readline = require("readline");
// Create a readline interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Listen for the "reminder" event and log the task when it occurs
event.on("reminder", (task) => {
    console.log(" Reminder:", task);
});
// Prompt the user for a task and reminder time
rl.question("Enter your task: ", (task) => {
    rl.question("Enter reminder time in seconds: ", (seconds) => {
        const delay = parseInt(seconds) * 1000;
        // Validate the input
        console.log("setting reminder for sec.");
        // If the input is not a number or is less than or equal to zero, log an error and exit
        setTimeout(() => {
            event.emit("reminder", task);
            rl.close();
        }, delay);
    });
});
