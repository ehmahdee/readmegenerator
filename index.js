// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    }, 
    {
        type: 'input',
        message: 'Please describe your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: "input",
        message: "How is the app used?",
        name:"usage"
    },
    {
        type: "list",
        message: 'What is your projects selected license?',
        name: 'license',
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "GPL",
            "BSD",
            "None"
          ]
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("success!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
