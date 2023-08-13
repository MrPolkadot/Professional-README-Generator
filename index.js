// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What title shall we use for your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description",
    },
    {
        type: "input",
        name: "installation",
        message: "Write any installation instructions here",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide any examples, links or outputs of your project",
    },
    {
        type: "input",
        name: "contributing",
        message: "State if you are open to contributions and what your requirements are for accepting them"
    },
    {
        type: "input",
        name: "tests",
        message: "Document any instructions for running tests on your project",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license:",
        choices: [
            'None',
            'Apache2.0',
            'GNUv3.0',
            'MIT',
            'BSD2-Clause',
            'BSD3-Clause',
            'Boost_Software_License 1.0',
            'Creative_Commons_Zero_v1.0_Universal',
            'Eclipse_Public_License_2.0',
            'GNU_Affero_General_Public_License_v3.0',
            'GNU_General_Public_License_v2.0',
            'GNU_Lesser_General_Public_License_v2.1',
            'Mozilla_Public_License_2.0',
            'The_Unlicense'
        ]
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log("Your README has been created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();

