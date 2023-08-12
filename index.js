// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        name: "title",
        question1: "What title shall we use for your project?",
    },
    {
        type: "input",
        name: "description",
        question2: "Enter your project description",
    },
    {
        type: "input",
        name: "",
        question3: "",
    },
    {
        type: "input",
        name: "",
        question4: "",
    },
    {
        type: "input",
        name: "",
        question5: "",
    },
    {
        type: "input",
        name: "",
        question6: "",
    },
    {
        type: "input",
        name: "",
        question7: "",
    },
    {
        type: "input",
        name: "",
        question8: "",
    },
    {
        type: "input",
        name: "",
        question9: "",
    },
    {
        type: "input",
        name: "",
        question10: "",
    },
]
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
