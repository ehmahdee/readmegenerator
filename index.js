// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require("util");

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
        type: "input",
        message: 'What is your projects selected license?',
        name: 'license',
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
        message: 'Please advise on how someone should reach out to you for questions.',
        name: 'questions',
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

    //options for licenses here

    //license badges here

    //function to add badges to readme

    //enter github username

    //enter email address

    //add email to QUESTIONS section with instruction on how to reach me with additional questions

    //make links clickable in the table of contents

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
