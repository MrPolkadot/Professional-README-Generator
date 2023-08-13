// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
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
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", generateMarkdown())
    });
}

// Function call to initialize app
init();

module.exports = questions;
console.log(questions);